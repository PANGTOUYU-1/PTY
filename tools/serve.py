#!/usr/bin/env python3
"""本地预览服务器。

用法:
    python tools/serve.py              # 默认 127.0.0.1:8000，自动打开浏览器
    python tools/serve.py --port 8080  # 换端口
    python tools/serve.py --no-open    # 不自动开浏览器

为什么不用双击 index.html：
    浏览器对 file:// 协议有安全限制，hash 路由、fetch 行为与 http 下不一致，
    部分功能（如 ?editor=1 的路径判断）会表现异常。
"""
from __future__ import annotations

import argparse
import functools
import http.server
import os
import socket
import sys
import threading
import webbrowser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


class Handler(http.server.SimpleHTTPRequestHandler):
    """带 UTF-8 声明和禁用缓存的静态文件处理器。"""

    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".js": "text/javascript; charset=utf-8",
        ".mjs": "text/javascript; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".html": "text/html; charset=utf-8",
        ".json": "application/json; charset=utf-8",
        ".svg": "image/svg+xml; charset=utf-8",
        ".webmanifest": "application/manifest+json; charset=utf-8",
    }

    def end_headers(self) -> None:  # noqa: D102
        # 开发时禁用缓存，改完刷新就能看到效果
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        super().end_headers()

    def log_message(self, fmt: str, *args) -> None:  # noqa: D102
        # 只打印非 200 的请求，避免刷屏
        status = args[1] if len(args) > 1 else ""
        if str(status).startswith(("2", "3")):
            return
        sys.stderr.write("  %s  %s\n" % (self.address_string(), fmt % args))


class Server(http.server.ThreadingHTTPServer):
    """⚠️ Windows 关键点：必须关掉 allow_reuse_address。

    Python 的 HTTPServer 默认 allow_reuse_address = True，在 Windows 上会设置
    SO_REUSEADDR，而这个选项在 Windows 语义下允许**和已占用的端口再绑定一次**，
    结果是两个进程抢同一个端口，浏览器可能连到别人的服务上（表现为"页面内容
    不是我的"）。关掉它，端口被占用时会直接报错，我们才能正确地顺延端口。
    """

    allow_reuse_address = False
    daemon_threads = True


def free_port(host: str, port: int) -> int:
    """端口被占用时向后找一个可用端口。

    注意：这里的探测 socket 绝对不能设置 SO_REUSEADDR，
    否则 Windows 上会误报"端口空闲"。
    """
    for candidate in range(port, port + 40):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            try:
                sock.bind((host, candidate))
                return candidate
            except OSError:
                continue
    raise SystemExit(f"✗ {host} 上 {port}-{port + 39} 全部被占用，请用 --port 指定其他端口")


def main() -> int:
    parser = argparse.ArgumentParser(description="我们饥佬是这样的 · 本地预览服务器")
    parser.add_argument("--host", default="127.0.0.1", help="监听地址（默认 127.0.0.1）")
    parser.add_argument("--port", type=int, default=8000, help="监听端口（默认 8000）")
    parser.add_argument("--no-open", action="store_true", help="不自动打开浏览器")
    args = parser.parse_args()

    if not (ROOT / "index.html").is_file():
        sys.stderr.write(f"✗ 在 {ROOT} 没找到 index.html，请确认脚本位于仓库的 tools/ 目录下\n")
        return 1

    port = free_port(args.host, args.port)
    if port != args.port:
        print(f"  端口 {args.port} 被占用，改用 {port}")

    handler = functools.partial(Handler, directory=str(ROOT))
    httpd = Server((args.host, port), handler)

    url = f"http://{args.host}:{port}/"
    print("")
    print("  我们饥佬是这样的 · 本地预览")
    print(f"  根目录: {ROOT}")
    print(f"  地址  : {url}")
    print(f"  校阅  : {url}?editor=1")
    print("  按 Ctrl+C 停止")
    print("", flush=True)

    if not args.no_open:
        threading.Timer(0.6, lambda: webbrowser.open(url)).start()

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n  已停止。")
    finally:
        httpd.server_close()
    return 0


if __name__ == "__main__":
    os.chdir(ROOT)
    raise SystemExit(main())

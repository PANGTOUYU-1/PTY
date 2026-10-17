# 我们饥佬是这样的 · 模组 Wiki

《饥荒联机版》（DST）模组 **「我们饥佬是这样的」** 的玩家向参考手册，也是模组的资料库站点。

- **线上站点**：（部署后填这里）
- **创意工坊**：<https://steamcommunity.com/sharedfiles/filedetails/?id=3627920230>
- **作者**：胖头鱼
- **当前版本**：v0.1.0

## 这个站是什么

一个**零构建、纯静态**的资料站。没有 npm、没有打包、没有框架，双击 `index.html` 就能跑。

- 所有内容都写在 **一个文件** 里：`data/site-data.js`
- 页面由 Mustache 模板在浏览器里实时渲染
- 分区：序 → 物品 → 机制 → 地形 → 季节 → 更新
- 自带全局搜索、分类/归属筛选、详情弹窗、站内 `[[双链]]` 跳转

## 5 分钟上手

### 1. 本地预览

**必须用本地服务器打开**（直接双击 `index.html` 会因为浏览器 `file://` 限制导致部分功能异常）。

```powershell
# 方式一：用自带脚本（推荐，自动开浏览器）
python tools\serve.py

# 方式二：直接用 Python 内置服务器
python -m http.server 8000
```

然后访问 <http://127.0.0.1:8000>。

### 2. 改内容

只改 `data/site-data.js` 这一个文件。文件里每一段都有中文注释说明字段含义。

改完保存 → 刷新浏览器就能看到效果，不需要任何构建步骤。

### 3. 开校阅模式

在地址后面加 `?editor=1`：

```
http://127.0.0.1:8000/?editor=1
```

右下角会浮出「校阅」面板，自动列出：

| 类型 | 含义 |
|---|---|
| 占位 | 文案里还有「占位 / TODO / 待补 / 未命名」 |
| 死链 | `related` 指向了不存在的条目 id |
| 缺图 | 图片路径 404，已自动换成占位图 |

**把这些清零，站点就算填完了。**

### 4. 跑内容校验

两个脚本，都不需要开浏览器：

```powershell
node tools\check_data.mjs     # 静态检查：路径、id、死链、分类、占位文案
node tools\check_render.mjs   # 运行时检查：真跑 data.js + 渲染模板
```

| 脚本 | 检查什么 | 什么时候用 |
|---|---|---|
| `check_data.mjs` | 图片文件是否存在、id 是否重复、`related` 死链、`recipe` 里的 `[id]`、`[[双链]]` 名称、`category` 合法性、残留占位文案 | 每次改完内容 |
| `check_render.mjs` | 用 `node:vm` 载入真实的 `assets/js/data.js`，验证数据规范化、`nameToId`、`searchText`，再把 `index.html` 里的 Mustache 模板用真实数据渲染一遍 | 改了 id / 结构 / 模板之后 |

`check_data.mjs` 加 `--strict` 会把警告也算作失败，适合上线前卡一道。

## 目录结构

```
dao-yinyang-site/
├── index.html                  # 唯一页面：结构 + 全部 Mustache 模板
├── assets/
│   ├── css/                    # 6 个样式文件，按职责分层
│   │   ├── tokens.css          #   设计变量（颜色/字号/间距）
│   │   ├── base.css            #   基础重置与排版
│   │   ├── layout.css          #   栅格与分区布局
│   │   ├── components.css      #   卡片/按钮/筛选等组件
│   │   ├── modal.css           #   详情弹窗
│   │   └── motion.css          #   动效与减少动效适配
│   ├── js/                     # 13 个模块，各管一件事
│   │   ├── vendor/mustache.min.js   # 模板引擎（唯一第三方依赖）
│   │   ├── data.js             # 数据规范化、路由、id↔名称映射
│   │   ├── render.js           # 各分区的渲染逻辑
│   │   ├── filter.js           # 筛选与搜索
│   │   ├── modal.js            # 详情弹窗
│   │   ├── recipe.js           # 配方 [id] → 图标
│   │   ├── linkify.js          # 站内 [[双链]]
│   │   ├── carousel.js         # 海报滚动
│   │   ├── char-popup.js       # 角色字段浮层
│   │   ├── poster.js           # 海报区
│   │   ├── editor.js           # 校阅模式（?editor=1）
│   │   ├── motion.js           # 进场动画
│   │   └── main.js             # 启动、导航、全局交互
│   ├── img/                    # 位图素材，按用途分目录
│   │   ├── characters/         #   角色立绘
│   │   ├── items/              #   物品图标
│   │   ├── mechanics/          #   机制配图
│   │   ├── terrains/           #   地形图标
│   │   ├── poster/             #   海报
│   │   ├── placeholders/       #   缺图占位
│   │   └── ui/                 #   UI 装饰字
│   └── svg/                    # 装饰性矢量图形
├── data/
│   └── site-data.js            # ★ 全部内容都在这里
├── docs/                       # 写给维护者的文档
│   ├── 01-内容写作指南.md
│   ├── 02-数据结构参考.md
│   └── 03-部署与发布.md
├── tools/
│   ├── serve.py                # 本地预览服务器
│   ├── check_data.mjs          # 内容静态校验
│   └── check_render.mjs        # 运行时渲染自检
├── .github/workflows/pages.yml # 推送到 main 自动部署 GitHub Pages
├── .gitignore
└── .nojekyll                   # 告诉 GitHub Pages 不要跑 Jekyll
```

## 内容从哪改

| 想改什么 | 改哪里 |
|---|---|
| 站点标题、作者、版本、页脚、外链 | `site-data.js` → `meta` |
| 物品分类 | `site-data.js` → `categories` |
| 两个角色的立绘、属性、设定、专属 | `site-data.js` → `characters` |
| 物品（图标、简介、配方、科技、详情） | `site-data.js` → `items` |
| 机制 | `site-data.js` → `mechanics` |
| 地形 | `site-data.js` → `terrains` |
| 季节 | `site-data.js` → `seasons` |
| 更新日志 | `site-data.js` → `changelog` |
| 首页海报轮播 | `site-data.js` → `posters` |
| 分区顺序、标题、黑白底色 | `site-data.js` → `sections` |
| 颜色、字号、间距 | `assets/css/tokens.css` |
| 页面结构、模板 | `index.html` |

详细的字段说明见 [docs/02-数据结构参考.md](docs/02-数据结构参考.md)，写内容的规范见 [docs/01-内容写作指南.md](docs/01-内容写作指南.md)。

## 部署

推送到 GitHub 的 `main` 分支即可自动部署到 GitHub Pages，详见 [docs/03-部署与发布.md](docs/03-部署与发布.md)。

## 待办清单

- [ ] 把 `site-data.js` 里所有「占位」文案替换为真实内容
- [ ] 补齐角色立绘、物品图标（目前多为 SVG 占位图）
- [ ] 替换首页海报 1/2/3
- [ ] 填写 `meta.manifesto`（站点宣言）与 `meta.links`（外链）
- [ ] 决定许可证并补充 `LICENSE`
- [ ] 部署后把线上地址填到本文件顶部

## 说明

- 素材版权归原作者所有，未经许可请勿转载。
- 本项目**未附带许可证文件**，使用与分发范围请与模组作者确认。
- 本站不收集任何用户数据，搜索与筛选全部在浏览器本地完成。

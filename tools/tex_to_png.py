# -*- coding: utf-8 -*-
"""Decode DST KTEX mipmaps. Export PNGs with top-left image origin."""
import struct
import zipfile

from PIL import Image


def rgb565(c):
    r = (c >> 11) & 0x1F
    g = (c >> 5) & 0x3F
    b = c & 0x1F
    return (r << 3 | r >> 2, g << 2 | g >> 4, b << 3 | b >> 2)


def decode_dxt5(data, w, h):
    bw = max(1, (w + 3) // 4)
    bh = max(1, (h + 3) // 4)
    img = Image.new("RGBA", (bw * 4, bh * 4), (0, 0, 0, 0))
    px = img.load()
    pos = 0
    for by in range(bh):
        for bx in range(bw):
            blk = data[pos:pos + 16]
            pos += 16
            a0, a1 = blk[0], blk[1]
            if a0 > a1:
                alphas = [a0, a1] + [
                    ((7 - i) * a0 + i * a1) // 7 for i in range(1, 7)
                ]
            else:
                alphas = [a0, a1] + [
                    ((5 - i) * a0 + i * a1) // 5 for i in range(1, 5)
                ] + [0, 255]
            bits = int.from_bytes(blk[2:8], "little")
            c0, c1 = struct.unpack_from("<HH", blk, 8)
            r0, g0, b0 = rgb565(c0)
            r1, g1, b1 = rgb565(c1)
            # DXT5 always uses four RGB colors, independently of its alpha block.
            colors = [
                (r0, g0, b0),
                (r1, g1, b1),
                ((2 * r0 + r1) // 3, (2 * g0 + g1) // 3, (2 * b0 + b1) // 3),
                ((r0 + 2 * r1) // 3, (g0 + 2 * g1) // 3, (b0 + 2 * b1) // 3),
            ]
            cbits = int.from_bytes(blk[12:16], "little")
            for i in range(16):
                ai = (bits >> (3 * i)) & 7
                ci = (cbits >> (2 * i)) & 3
                x = bx * 4 + (i % 4)
                y = by * 4 + (i // 4)
                r, g, b = colors[ci]
                px[x, y] = (r, g, b, alphas[ai])
    return img.crop((0, 0, w, h))


def decode_dxt1(data, w, h):
    bw = max(1, (w + 3) // 4)
    bh = max(1, (h + 3) // 4)
    img = Image.new("RGBA", (bw * 4, bh * 4), (0, 0, 0, 0))
    px = img.load()
    pos = 0
    for by in range(bh):
        for bx in range(bw):
            blk = data[pos:pos + 8]
            pos += 8
            c0, c1 = struct.unpack_from("<HH", blk, 0)
            r0, g0, b0 = rgb565(c0)
            r1, g1, b1 = rgb565(c1)
            if c0 > c1:
                colors = [
                    (r0, g0, b0, 255),
                    (r1, g1, b1, 255),
                    ((2 * r0 + r1) // 3, (2 * g0 + g1) // 3, (2 * b0 + b1) // 3, 255),
                    ((r0 + 2 * r1) // 3, (g0 + 2 * g1) // 3, (b0 + 2 * b1) // 3, 255),
                ]
            else:
                colors = [
                    (r0, g0, b0, 255),
                    (r1, g1, b1, 255),
                    ((r0 + r1) // 2, (g0 + g1) // 2, (b0 + b1) // 2, 255),
                    (0, 0, 0, 0),
                ]
            cbits = int.from_bytes(blk[4:8], "little")
            for i in range(16):
                ci = (cbits >> (2 * i)) & 3
                x = bx * 4 + (i % 4)
                y = by * 4 + (i // 4)
                px[x, y] = colors[ci]
    return img.crop((0, 0, w, h))


def load_tex(raw):
    """Decode the first mip using the format and mip count in the KTEX header."""
    if len(raw) < 18 or raw[:4] != b"KTEX":
        raise ValueError("not a KTEX file")
    flags = struct.unpack_from("<I", raw, 4)[0]
    pixel_format = (flags >> 4) & 31
    mip_count = (flags >> 13) & 31
    w, h, pitch, size = struct.unpack_from("<HHHI", raw, 8)
    header_size = 8 + 10 * mip_count
    if not mip_count or not w or not h or len(raw) < header_size + size:
        raise ValueError("invalid or truncated KTEX mip data")
    payload = raw[header_size:header_size + size]
    if pixel_format == 0:
        image, name = decode_dxt1(payload, w, h), "DXT1"
    elif pixel_format == 2:
        image, name = decode_dxt5(payload, w, h), "DXT5"
    elif pixel_format == 4:
        if pitch < w * 4 or size < pitch * h:
            raise ValueError("invalid RGBA row pitch")
        image = Image.frombytes("RGBA", (w, h), payload, "raw", "RGBA", pitch)
        name = "RGBA"
    else:
        raise ValueError(f"unsupported KTEX pixel format: {pixel_format}")
    return image, f"{name} {w}x{h} mips={mip_count}"



def to_png_image(raw):
    """KTEX rows have a bottom-left origin; PNG/browser rows start at the top."""
    image, info = load_tex(raw)
    return image.transpose(Image.Transpose.FLIP_TOP_BOTTOM), info


def main():
    import argparse
    from pathlib import Path
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("archive", type=Path)
    parser.add_argument("source", help="Archive member, e.g. bighead/images/inventoryimages/bighead_spear.tex")
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    with zipfile.ZipFile(args.archive) as archive:
        image, info = to_png_image(archive.read(args.source))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    image.save(args.output, optimize=True)
    print(f"{args.output}: {info}, vertically corrected")


if __name__ == "__main__":
    main()

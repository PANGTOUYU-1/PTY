"""Regression checks for KTEX formats, transparency and browser image orientation."""
import struct
import unittest

from tex_to_png import to_png_image


def texture(width, height, pixel_format, payload, pitch):
    flags = (pixel_format << 4) | (1 << 9) | (1 << 13)
    return b'KTEX' + struct.pack('<IHHHI', flags, width, height, pitch, len(payload)) + payload


class TextureChecks(unittest.TestCase):
    def test_rgba_bottom_row_becomes_browser_bottom_row(self):
        # A real exporter writes the bottom red row before the top blue row.
        raw = texture(2, 2, 4, bytes([255, 0, 0, 255] * 2 + [0, 0, 255, 255] * 2), 8)
        image, _ = to_png_image(raw)
        self.assertEqual(image.getpixel((0, 0)), (0, 0, 255, 255))
        self.assertEqual(image.getpixel((0, 1)), (255, 0, 0, 255))

    def test_dxt1_transparent_color_stays_transparent(self):
        block = struct.pack('<HHI', 0, 65535, 0xFFFFFFFF)
        image, info = to_png_image(texture(4, 4, 0, block, 8))
        self.assertIn('DXT1', info)
        self.assertEqual(image.getpixel((0, 0))[3], 0)

    def test_dxt5_four_color_interpolation_and_alpha(self):
        # In DXT5, c0 <= c1 still uses four RGB colors, unlike DXT1.
        block = bytes([255, 0]) + bytes(6) + struct.pack('<HHI', 0, 65535, 0xFFFFFFFF)
        image, _ = to_png_image(texture(4, 4, 2, block, 16))
        self.assertEqual(image.getpixel((0, 0)), (170, 170, 170, 255))

    def test_truncated_texture_is_rejected(self):
        raw = texture(2, 2, 4, bytes(16), 8)
        with self.assertRaises(ValueError):
            to_png_image(raw[:-1])


if __name__ == '__main__':
    unittest.main()

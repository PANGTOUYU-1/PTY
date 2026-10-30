#!/usr/bin/env python3
"""Render the mod's golden penguin idle from original DST animation resources."""
import argparse
import json
import tempfile
from pathlib import Path

from PIL import Image

from export_mod_displays import ROOT, lua_string, request


def export(tool, game_anim):
    with tempfile.TemporaryDirectory(prefix="pty-gold-penguin-") as temporary:
        scratch = Path(temporary)
        sequence = scratch / "frames"
        resources = [game_anim / name for name in ("penguin.zip", "penguin_build.zip")]
        for resource in resources:
            if not resource.is_file():
                raise FileNotFoundError(resource)
        before = request(tool, 'assert(tool.document_is_empty, "Export requires an empty document"); print(tool.document_revision)', scratch)
        try:
            report = request(tool, '\n'.join([
                'doc:import_resources({' + ','.join(map(lua_string, resources)) + '})',
                'local animation=assert(doc.banks:find("penguin")).animations:find("idle_loop_down")',
                'print(#animation.frames, animation.frame_rate)',
                'animation:export_png_sequence(' + lua_string(sequence) + ', {',
                'builds={assert(doc.builds:find("penguin_build"))}, hide_layers={}, override_symbols={}, scale=1})',
            ]), scratch)
            if len(report['tool_results']) != 1:
                raise RuntimeError("Missing animation export")
        finally:
            after = request(tool, 'print(tool.document_revision)', scratch)
            if after['output'] != before['output']:
                request(tool, 'tool:undo()', scratch)

        count, fps = map(float, report['output'][0].split('\t'))
        frames = []
        bounds = []
        for path in sorted(sequence.glob('*.png')):
            with Image.open(path) as source:
                image = source.convert('RGBA')
            # Exact AnimState:SetMultColour(1.0, 0.85, 0.2, 1.0) from
            # scripts/prefabs/bighead_gold_penguin.lua, without recoloring alpha.
            r, g, b, alpha = image.split()
            image = Image.merge('RGBA', (r, g.point(lambda v: round(v * .85)),
                                        b.point(lambda v: round(v * .2)), alpha))
            frames.append(image)
            bounds.append(alpha.getbbox())
        if len(frames) != int(count) or any(bound is None for bound in bounds):
            raise ValueError("Incomplete or empty idle frames")
        union = (min(b[0] for b in bounds), min(b[1] for b in bounds),
                 max(b[2] for b in bounds), max(b[3] for b in bounds))
        prepared = []
        for frame in frames:
            cropped = frame.crop(union)
            padded = Image.new('RGBA', (cropped.width + 16, cropped.height + 16))
            padded.paste(cropped, (8, 8))
            prepared.append(padded)
        output = ROOT / 'assets/img/displays'
        output.mkdir(parents=True, exist_ok=True)
        poster = output / 'bighead_gold_penguin.png'
        animated = output / 'bighead_gold_penguin.webp'
        durations = [round((i + 1) * 1000 / fps) - round(i * 1000 / fps) for i in range(len(prepared))]
        prepared[0].save(poster, optimize=True)
        prepared[0].save(animated, save_all=True, append_images=prepared[1:],
                         duration=durations, loop=0, lossless=True, method=6)
        record = {
            'source_prefab': 'scripts/prefabs/bighead_gold_penguin.lua',
            'resources': [p.name for p in resources],
            'bank': 'penguin', 'build': 'penguin_build',
            'animation': 'idle_loop_down', 'frames': len(prepared), 'fps': fps,
            'mult_colour': [1, .85, .2, 1], 'scale': 1,
            'processing': 'Shared alpha bounds, 8px padding; no resizing or flipping.',
            'display_size': prepared[0].size,
            'poster': poster.relative_to(ROOT).as_posix(),
            'path': animated.relative_to(ROOT).as_posix(),
        }
        (ROOT / 'data/gold-penguin-preview.json').write_text(
            json.dumps(record, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
        print(json.dumps(record, ensure_ascii=False))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--tool', type=Path, required=True)
    parser.add_argument('--game-anim', type=Path, required=True)
    args = parser.parse_args()
    export(args.tool, args.game_anim)

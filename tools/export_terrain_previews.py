#!/usr/bin/env python3
"""Composite original room floors into the perspective of their original walls.

The room's wall animation is wider than the tool's 4096px canvas limit, so export
four native-resolution tiles, stitch them, trim transparency and reduce to 1600px.
Floor PNGs are exported at native resolution, projected onto the wall's ground
plane, then placed behind the wall. These are art previews, not game screenshots.
"""
import argparse
import json
import tempfile
from pathlib import Path
from zipfile import ZipFile

from PIL import Image
from export_mod_displays import lua_string, request

ROOT = Path(__file__).resolve().parent.parent
ROOMS = [
    ("loc_foyer", "bighead_wall", "前室内景预览"),
    ("loc_hall", "bighead_wall1", "厅堂内景预览"),
    ("loc_bedroom", "bighead_wall2", "左侧卧房内景预览"),
    ("loc_bedroom_right", "bighead_wall3", "右侧卧房内景预览"),
]

# Back left, back right, front right, front left; measured on the final wall
# previews. The slight overlap sits underneath the wall-foot alpha edges.
FLOOR_QUADS = {
    'loc_foyer': [(345, 550), (1271, 550), (1564, 1277), (52, 1277)],
    'loc_hall': [(380, 375), (1236, 375), (1507, 1039), (109, 1039)],
    'loc_bedroom': [(345, 540), (1271, 540), (1561, 1255), (55, 1255)],
    'loc_bedroom_right': [(345, 540), (1271, 540), (1561, 1255), (55, 1255)],
}


def perspective_coefficients(destination, source):
    """Solve the inverse homography expected by Pillow's perspective sampler."""
    equations = []
    for (x, y), (u, v) in zip(destination, source):
        equations.extend([
            [x, y, 1, 0, 0, 0, -u * x, -u * y, u],
            [0, 0, 0, x, y, 1, -v * x, -v * y, v],
        ])
    for column in range(8):
        pivot = max(range(column, 8), key=lambda row: abs(equations[row][column]))
        equations[column], equations[pivot] = equations[pivot], equations[column]
        divisor = equations[column][column]
        if abs(divisor) < 1e-10:
            raise ValueError('Degenerate floor perspective')
        equations[column] = [value / divisor for value in equations[column]]
        for row in range(8):
            if row == column:
                continue
            factor = equations[row][column]
            equations[row] = [value - factor * pivot_value
                              for value, pivot_value in zip(equations[row], equations[column])]
    return tuple(row[-1] for row in equations)


def composite_floor(wall, floor, quad):
    # Keep the texture upright: its top edge meets the back wall. Perspective
    # sampling changes geometry only; it does not mirror or repaint the source.
    width, height = floor.size
    coefficients = perspective_coefficients(quad, [(0, 0), (width, 0),
                                                   (width, height), (0, height)])
    projected = floor.transform(wall.size, Image.Transform.PERSPECTIVE, coefficients,
                                Image.Resampling.BICUBIC)
    return Image.alpha_composite(projected, wall)


def export(tool, mod):
    records = []
    with tempfile.TemporaryDirectory(prefix="pty-room-previews-") as temporary:
        scratch = Path(temporary)
        with ZipFile(mod) as archive:
            sources = [source for _, source, _ in ROOMS]
            sources += [source.replace('wall', 'floor') for source in sources]
            sources.append('bighead_men')
            for source in sources:
                name = next(n for n in archive.namelist() if n.endswith(f"/anim/{source}.zip"))
                (scratch / f"{source}.zip").write_bytes(archive.read(name))
        code = ['assert(tool.document_is_empty, "Room export requires an empty document")']
        for entry_id, source, _ in ROOMS:
            floor_source = source.replace('wall', 'floor')
            code.extend([
                f'doc:import_resources({{{lua_string(scratch / (source + ".zip"))}}})',
                f'local f=assert(doc.banks:find("{source}")).animations:find("idle").frames[1]',
                'local w=math.ceil(f.width)+16; local h=math.ceil(f.height)+16',
                'local tw=math.ceil(w/2); local th=math.ceil(h/2)',
                f'print("ROOM","{entry_id}",w,h,tw,th)',
                'for row=0,1 do for col=0,1 do',
                f'f:export_png({lua_string(scratch / entry_id)} .. "-" .. row .. "-" .. col .. ".png", {{',
                f'builds={{doc.builds:find("{source}")}}, hide_layers={{}}, override_symbols={{}}, scale=1,',
                'canvas={center_x=f.x-w/2+tw*(col+0.5), center_y=f.y-h/2+th*(row+0.5), width=tw, height=th}})',
                'end end',
                f'doc:import_resources({{{lua_string(scratch / (floor_source + ".zip"))}}})',
                f'doc.banks:find("{floor_source}").animations:find("idle").frames[1]:export_png(',
                f'{lua_string(scratch / (entry_id + "-floor.png"))}, {{',
                f'builds={{doc.builds:find("{floor_source}")}}, hide_layers={{}}, override_symbols={{}}, scale=1}})',
            ])
        code.extend([
            f'doc:import_resources({{{lua_string(scratch / "bighead_men.zip")}}})',
            'doc.banks:find("bighead_men").animations:find("men1").frames[1]:export_png('
            + lua_string(scratch / 'foyer-bell.png') + ', {'
            + 'builds={doc.builds:find("bighead_men")}, hide_layers={}, override_symbols={}, scale=1})',
        ])
        before = request(code='assert(tool.document_is_empty, "Room export requires an empty document"); print(tool.document_revision)', tool=tool, scratch=scratch)
        # A failed deferred export can still commit an import. Check revision
        # separately and undo only this transaction, preserving the user's state.
        try:
            report = request(tool=tool, code="\n".join(code), scratch=scratch)
            if len(report['tool_results']) != len(ROOMS) * 5 + 1:
                raise RuntimeError("Incomplete room export")
        finally:
            after = request(code='print(tool.document_revision)', tool=tool, scratch=scratch)
            if after['output'] != before['output']:
                request(tool=tool, code='tool:undo()', scratch=scratch)
        for line in report['output']:
            _, entry_id, width, height, tile_width, tile_height = line.split('\t')
            tw, th = int(tile_width), int(tile_height)
            native = Image.new('RGBA', (tw * 2, th * 2))
            for row in range(2):
                for col in range(2):
                    with Image.open(scratch / f'{entry_id}-{row}-{col}.png') as tile:
                        native.paste(tile, (col * tw, row * th))
            bounds = native.getchannel('A').getbbox()
            if bounds is None:
                raise ValueError(f'Empty room image: {entry_id}')
            image = native.crop(bounds)
            native_size = image.size
            image.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
            padded = Image.new('RGBA', (image.width + 16, image.height + 16))
            padded.paste(image, (8, 8))
            with Image.open(scratch / (entry_id + '-floor.png')) as floor_png:
                floor = floor_png.convert('RGBA')
            floor_size = floor.size
            floor = floor.crop(floor.getchannel('A').getbbox())
            padded = composite_floor(padded, floor, FLOOR_QUADS[entry_id])
            furnishings = []
            if entry_id == 'loc_foyer':
                with Image.open(scratch / 'foyer-bell.png') as source_bell:
                    bell = source_bell.convert('RGBA')
                bell = bell.crop(bell.getchannel('A').getbbox())
                # Use the wall's reduction ratio, keeping the original men1 art.
                ratio = image.width / native_size[0]
                bell = bell.resize((round(bell.width * ratio), round(bell.height * ratio)),
                                   Image.Resampling.LANCZOS)
                center = (808, 395)
                position = (center[0] - bell.width // 2, center[1] - bell.height // 2)
                padded.alpha_composite(bell, position)
                furnishings.append({'prefab': 'bighead_men1', 'source': 'bighead_men',
                                    'animation': 'men1', 'frame': 1, 'target': 'loc_hall',
                                    'bounds': [*position, *bell.size]})
            target = ROOT / 'assets/img/terrains' / f'{entry_id}.png'
            padded.save(target, optimize=True)
            source = next(source for room_id, source, _ in ROOMS if room_id == entry_id)
            records.append({"id": entry_id, "source": source, "bank": source, "build": source,
                            "animation": "idle", "frame": 1, "scale": 1, "tiles": [2, 2],
                            "native_size": native_size, "display_size": padded.size,
                            "furnishings": furnishings,
                            "floor": {"source": source.replace('wall', 'floor'),
                                      "animation": "idle", "frame": 1,
                                      "native_size": floor_size, "quad": FLOOR_QUADS[entry_id]},
                            "path": target.relative_to(ROOT).as_posix()})
            print(f'{entry_id}: {native_size} -> {padded.size}')
    (ROOT / 'data/terrain-previews.json').write_text(json.dumps({
        "kind": "original_room_composite", "source_prefab": "scripts/prefabs/bighead_door_exit.lua",
        "composition": "Original floor projected into wall perspective, with wall above floor; not a gameplay screenshot.",
        "assets": records}, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--tool', type=Path, required=True)
    parser.add_argument('--mod', type=Path, required=True)
    args = parser.parse_args()
    export(args.tool, args.mod)

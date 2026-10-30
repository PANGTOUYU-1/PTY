#!/usr/bin/env python3
"""Composite original room floors into the perspective of their original walls.

The room's wall animation is wider than the tool's 4096px canvas limit, so export
four native-resolution tiles, stitch them, trim transparency and reduce to 1600px.
Floor PNGs are exported at native resolution, projected onto the wall's ground
plane, then placed behind the wall. These are art previews, not game screenshots.
"""
import argparse
import json
import re
import tempfile
from pathlib import Path
from zipfile import ZipFile

from PIL import Image, ImageOps
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

# Separate prefabs spawned by bighead_door_exit.lua, not baked into the walls.
# World positions are (x, z) relative to each house centre. Preview offsets
# bring the vines onto the visible inner edge of the cutaway wall; they are
# image-space calibration, not changes to the mod's world coordinates.
FURNISHINGS = {
    'loc_foyer': [
        {'prefab': 'bighead_men1', 'animation': 'men1', 'center': (808, 395),
         'world_position': (-14, 0), 'target': 'loc_hall',
         'label': '鎏金太极铃', 'hint': '进入厅堂'},
        {'prefab': 'bighead_door_exit', 'source': 'bighead_door_exit',
         'animation': 'idle', 'world_position': (14, -.15),
         'target': 'loc_qingxuan', 'label': '青石楼梯', 'hint': '回到屋外'},
    ],
    'loc_hall': [
        {'prefab': 'bighead_yizi', 'animation': 'yizi',
         'world_position': (-15.3, 0)},
        {'prefab': 'bighead_men2', 'animation': 'men2',
         'world_position': (1.65, -15), 'preview_offset': (110, 115),
         'target': 'loc_bedroom', 'label': '引霄灵藤（左侧）',
         'hint': '进入左侧卧房', 'hint_align': 'start'},
        {'prefab': 'bighead_men2', 'animation': 'men2',
         'world_position': (1.65, 15), 'mirror_x': True,
         'preview_offset': (-110, 115),
         'target': 'loc_bedroom_right', 'label': '引霄灵藤（右侧）',
         'hint': '进入右侧卧房', 'hint_align': 'end'},
        {'prefab': 'bighead_door_exit', 'source': 'bighead_door_exit',
         'animation': 'idle', 'world_position': (14, -.15),
         'target': 'loc_foyer', 'label': '青石楼梯', 'hint': '返回前室'},
    ],
    'loc_bedroom': [
        {'prefab': 'bighead_men3', 'animation': 'men3',
         'world_position': (14, 14), 'target': 'loc_hall',
         'label': '鎏角青玄门', 'hint': '返回厅堂', 'hint_align': 'end'},
    ],
    'loc_bedroom_right': [
        {'prefab': 'bighead_men4', 'animation': 'men4',
         'world_position': (14, -14), 'target': 'loc_hall',
         'label': '银翘古木门', 'hint': '返回厅堂', 'hint_align': 'start'},
    ],
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


def ground_position(quad, position):
    """Project the prefab's ground anchor onto the same plane as the floor."""
    coefficients = perspective_coefficients([(0, 0), (1, 0), (1, 1), (0, 1)], quad)
    a, b, c, d, e, f, g, h = coefficients
    x, z = position
    u, v = (z + 16.2) / 32.4, (x + 16.2) / 32.4
    divisor = g * u + h * v + 1
    return ((a * u + b * v + c) / divisor,
            (d * u + e * v + f) / divisor)


def composite_furnishings(scene, entry_id, ratio, scratch, frames):
    records = []
    for furnishing in FURNISHINGS.get(entry_id, []):
        animation = furnishing['animation']
        with Image.open(scratch / f'furnishing-{animation}.png') as source:
            sprite = source.convert('RGBA')
        bounds = sprite.getchannel('A').getbbox()
        if bounds is None:
            raise ValueError(f'Empty furnishing: {animation}')
        # The explicit export canvas preserves the animation's original origin.
        frame = frames[animation]
        anchor = (sprite.width / 2 - frame['x'] - bounds[0],
                  sprite.height / 2 - frame['y'] - bounds[1])
        sprite = sprite.crop(bounds)
        width, height = sprite.size
        sprite = sprite.resize((round(width * ratio), round(height * ratio)),
                               Image.Resampling.LANCZOS)
        anchor = (anchor[0] * sprite.width / width,
                  anchor[1] * sprite.height / height)
        if furnishing.get('mirror_x'):
            sprite = ImageOps.mirror(sprite)
            anchor = (sprite.width - anchor[0], anchor[1])
        if 'center' in furnishing:
            center = furnishing['center']
            position = (center[0] - sprite.width // 2, center[1] - sprite.height // 2)
        else:
            ground = ground_position(FLOOR_QUADS[entry_id], furnishing['world_position'])
            position = (round(ground[0] - anchor[0]), round(ground[1] - anchor[1]))
        dx, dy = furnishing.get('preview_offset', (0, 0))
        position = (position[0] + dx, position[1] + dy)
        scene.alpha_composite(sprite, position)
        record = {'prefab': furnishing['prefab'],
                  'source': furnishing.get('source', 'bighead_men'),
                  'animation': animation, 'frame': 1,
                  'bounds': [*position, *sprite.size]}
        for key in ('target', 'world_position', 'mirror_x', 'preview_offset',
                    'label', 'hint', 'hint_align'):
            if key in furnishing:
                record[key] = furnishing[key]
        records.append(record)
    return records


def sync_hotspots(records):
    """Keep clicks on the rendered sprites, including doors and exit stairs."""
    target = ROOT / 'data/site-data.js'
    text = target.read_text(encoding='utf-8')
    for room in records:
        width, height = room['display_size']
        hotspots = []
        for part in room['furnishings']:
            if 'target' not in part:
                continue
            x, y, w, h = part['bounds']
            hotspot = {'label': part['label'], 'target': part['target'],
                       'x': round((x + w / 2) / width * 100, 4),
                       'y': round((y + h / 2) / height * 100, 4),
                       'width': round(w / width * 100, 4),
                       'height': round(h / height * 100, 4), 'hint': part['hint']}
            if 'hint_align' in part:
                hotspot['hint_align'] = part['hint_align']
            hotspots.append(hotspot)
        start = text.index('"id": "' + room['id'] + '"')
        end = text.index('\n    },', start)
        block = text[start:end]
        value = '"scene_hotspots": [\n' + ',\n'.join(
            '        ' + json.dumps(hotspot, ensure_ascii=False) for hotspot in hotspots
        ) + '\n      ],'
        if '"scene_hotspots"' in block:
            block, count = re.subn(r'"scene_hotspots": \[[\s\S]*?\n      \],', lambda _: value, block, count=1)
            if count != 1:
                raise ValueError('Cannot update hotspot block for ' + room['id'])
        else:
            block = block.replace('"preview_caption":', value + '\n      "preview_caption":', 1)
        hint = '点击图中' + '、'.join(part['label'] for part in hotspots) + '，前往对应位置。'
        if '"scene_hint"' in block:
            block = re.sub(r'"scene_hint": "[^"\n]*"', lambda _: '"scene_hint": ' + json.dumps(hint, ensure_ascii=False), block, count=1)
        else:
            block = block.replace('"summary":', '"scene_hint": ' + json.dumps(hint, ensure_ascii=False) + ',\n      "summary":', 1)
        text = text[:start] + block + text[end:]
    target.write_text(text, encoding='utf-8')


def export(tool, mod):
    records = []
    with tempfile.TemporaryDirectory(prefix="pty-room-previews-") as temporary:
        scratch = Path(temporary)
        with ZipFile(mod) as archive:
            sources = [source for _, source, _ in ROOMS]
            sources += [source.replace('wall', 'floor') for source in sources]
            sources += ['bighead_men', 'bighead_door_exit']
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
        code.append(f'doc:import_resources({{{lua_string(scratch / "bighead_men.zip")}}})')
        code.append(f'doc:import_resources({{{lua_string(scratch / "bighead_door_exit.zip")}}})')
        animations = sorted({item['animation'] for items in FURNISHINGS.values() for item in items})
        for animation in animations:
            source = 'bighead_door_exit' if animation == 'idle' else 'bighead_men'
            code.extend([
                f'local f=doc.banks:find("{source}").animations:find("{animation}").frames[1]',
                f'print("FURNISHING","{animation}",f.x,f.y)',
                'f:export_png(' + lua_string(scratch / f'furnishing-{animation}.png') + ', {'
                + f'builds={{doc.builds:find("{source}")}}, hide_layers={{}}, override_symbols={{}}, scale=1,'
                + 'canvas={center_x=f.x,center_y=f.y,width=math.ceil(f.width)+16,height=math.ceil(f.height)+16}})',
            ])
        before = request(code='assert(tool.document_is_empty, "Room export requires an empty document"); print(tool.document_revision)', tool=tool, scratch=scratch)
        # A failed deferred export can still commit an import. Check revision
        # separately and undo only this transaction, preserving the user's state.
        try:
            report = request(tool=tool, code="\n".join(code), scratch=scratch)
            if len(report['tool_results']) != len(ROOMS) * 5 + len(animations):
                raise RuntimeError("Incomplete room export")
        finally:
            after = request(code='print(tool.document_revision)', tool=tool, scratch=scratch)
            if after['output'] != before['output']:
                request(tool=tool, code='tool:undo()', scratch=scratch)
        frames = {}
        room_reports = []
        for line in report['output']:
            if line.startswith('FURNISHING\t'):
                _, animation, x, y = line.split('\t')
                frames[animation] = {'x': float(x), 'y': float(y)}
            elif line.startswith('ROOM\t'):
                room_reports.append(line)
        for line in room_reports:
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
            furnishings = composite_furnishings(padded, entry_id, image.width / native_size[0],
                                                scratch, frames)
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
    sync_hotspots(records)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--tool', type=Path, required=True)
    parser.add_argument('--mod', type=Path, required=True)
    args = parser.parse_args()
    export(args.tool, args.mod)

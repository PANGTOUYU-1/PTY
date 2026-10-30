#!/usr/bin/env python3
"""Render the curated Wiki poses through DST Mod Tool's official Lua API.

Requires Pillow, the running DST Mod Tool (1.1.13+), bighead.zip and DST's
data/anim directory. See docs/04-v4.8资料同步.md for usage.
"""
import argparse
import json
import subprocess
import tempfile
from pathlib import Path
from zipfile import ZipFile

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent


def lua_string(value):
    value = str(value).replace('\\', '/')
    separator = '='
    while f']{separator}]' in value:
        separator += '='
    return f'[{separator}[{value}]{separator}]'


def request(tool, code, scratch):
    script = scratch / 'export.lua'
    script.write_text(code, encoding='utf-8')
    result = subprocess.run([str(tool), 'script', '--file', str(script)],
                            capture_output=True, text=True, encoding='utf-8', timeout=90)
    try:
        report = json.loads(result.stdout)['response']['report']
    except (ValueError, KeyError, TypeError) as error:
        raise RuntimeError(result.stdout + result.stderr) from error
    if result.returncode or not report.get('ok'):
        raise RuntimeError(str(report))
    return report


def prepare_image(source, target):
    """Only trim empty alpha margins and add 8px padding; never upscale/flip."""
    with Image.open(source) as original:
        image = original.convert('RGBA')
    bounds = image.getchannel('A').getbbox()
    if bounds is None:
        raise ValueError(f'Empty render: {source}')
    cropped = image.crop(bounds)
    output = Image.new('RGBA', (cropped.width + 16, cropped.height + 16))
    output.paste(cropped, (8, 8))
    target.parent.mkdir(parents=True, exist_ok=True)
    output.save(target, optimize=True)
    return output.size


def export(args, manifest, scratch):
    assets = manifest['assets']
    with ZipFile(args.mod) as archive:
        members = {Path(name).stem: name for name in archive.namelist()
                   if '/anim/' in name.replace('\\', '/') and name.endswith('.zip')}
        for asset in assets:
            name = asset['source']
            (scratch / f'{name}.zip').write_bytes(archive.read(members[name]))
    native = scratch / 'native'
    native.mkdir()
    for start in range(0, len(assets), 8):
        batch = assets[start:start + 8]
        code = ['assert(tool.document_is_empty, "Export requires an empty DST Mod Tool document")']
        for asset in batch:
            paths = [args.game_anim / dep for dep in asset['dependencies']]
            paths.append(scratch / (asset['source'] + '.zip'))
            for path in paths:
                if not path.is_file():
                    raise FileNotFoundError(path)
            code.append('doc:import_resources({' + ','.join(map(lua_string, paths)) + '})')
            code.append(f'local bank=assert(doc.banks:find({lua_string(asset["bank"])}))')
            code.append(f'local animation=assert(bank.animations:find({lua_string(asset["animation"])}))')
            code.append(f'animation.frames[{asset["frame"]}]:export_png('
                        f'{lua_string(native / (asset["source"] + ".png"))}, '
                        f'{{builds={{assert(doc.builds:find({lua_string(asset["build"])}))}}, '
                        'hide_layers={}, override_symbols={}, scale=1})')
            if asset.get('icon_symbol'):
                code.append(f'assert(doc.builds:find({lua_string(asset["build"])}).symbols:find('
                            f'{lua_string(asset["icon_symbol"])})).frames[1]:export_png('
                            f'{lua_string(native / (asset["source"] + "-icon.png"))})')
        # A batch is one undo step. Undo separately after deferred PNG exports
        # finish, restoring the empty workspace without saving/resetting it.
        report = request(args.tool, '\n'.join(code), scratch)
        try:
            expected = len(batch) + sum(bool(asset.get('icon_symbol')) for asset in batch)
            if len(report['tool_results']) != expected or any(
                    not operation.get('ok') for operation in report['tool_results']):
                raise RuntimeError(str(report['tool_results']))
        finally:
            request(args.tool, 'tool:undo()', scratch)
        print(f'Rendered {min(start + 8, len(assets))}/{len(assets)}', flush=True)
    return native


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--tool', type=Path, help='Path to dst-app.exe')
    parser.add_argument('--mod', type=Path, help='Path to bighead.zip')
    parser.add_argument('--game-anim', type=Path, help="DST data/anim directory")
    parser.add_argument('--native-dir', type=Path, help='Reuse PNGs already exported by DST Mod Tool')
    parser.add_argument('--output', type=Path, default=ROOT / 'assets/img/displays')
    args = parser.parse_args()
    if not args.native_dir and not all([args.tool, args.mod, args.game_anim]):
        parser.error('Supply --tool, --mod and --game-anim, or --native-dir')
    manifest = json.loads((ROOT / 'data/display-assets.json').read_text('utf-8'))
    with tempfile.TemporaryDirectory(prefix='pty-displays-') as temporary:
        native = args.native_dir or export(args, manifest, Path(temporary))
        for asset in manifest['assets']:
            source = native / (asset['source'] + '.png')
            target = args.output / (asset['source'] + '.png')
            size = prepare_image(source, target)
            if tuple(asset['display_size']) != size:
                raise ValueError(f'Unexpected dimensions for {source}: {size}')
            if asset.get('icon_symbol'):
                icon_source = native / (asset['source'] + '-icon.png')
                with Image.open(icon_source) as icon:
                    if icon.size != tuple(asset['icon_size']):
                        raise ValueError(f'Unexpected icon dimensions for {icon_source}')
                icon_target = ROOT / asset['icon_path']
                icon_target.parent.mkdir(parents=True, exist_ok=True)
                icon_target.write_bytes(icon_source.read_bytes())
    print(f'Prepared {len(manifest["assets"])} display PNGs in {args.output}')


if __name__ == '__main__':
    main()

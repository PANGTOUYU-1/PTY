"""Export Wiki icons from a DST mod archive, correcting KTEX's vertical origin.

Usage: python tools/sync_mod_images.py ../bighead.zip
Requires Pillow. Character illustrations, posters and UI artwork are kept separately.
"""
from pathlib import Path
import argparse
import json
import subprocess
import zipfile

from tex_to_png import to_png_image

ROOT = Path(__file__).resolve().parent.parent
SPECIAL = {
    'assets/img/mechanics/jieqi_tab.png': 'images/bighead_jq_tab.tex',
    'assets/img/mechanics/jisheng_taoling.png': 'images/map_icons/bighead_jisheng_taoling_planted.tex',
    'assets/img/terrains/bighead_fishhouse.png': 'images/map_icons/bighead_fishhouse.tex',
    **{f'assets/img/mechanics/fanhua_{action}.png': f'images/spell_icons/bighead_fanhua_{action}.tex'
       for action in ('graft', 'collect', 'grow', 'fertilize')},
}


def collect_images(value):
    if isinstance(value, dict):
        for child in value.values():
            yield from collect_images(child)
    elif isinstance(value, list):
        for child in value:
            yield from collect_images(child)
    elif isinstance(value, str) and value.startswith('assets/img/') and value.endswith('.png'):
        yield value


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('archive', type=Path)
    args = parser.parse_args()
    raw = subprocess.check_output([
        'node', '-e', "global.window={};require('./data/site-data.js');process.stdout.write(JSON.stringify(window.SITE_DATA));"
    ], cwd=ROOT)
    data = json.loads(raw)
    paths = set(collect_images(data)) | set(SPECIAL)
    written = 0
    with zipfile.ZipFile(args.archive) as archive:
        # Locate the mod root without requiring a particular zip folder name.
        modinfo = [n for n in archive.namelist() if n.endswith('modinfo.lua')]
        if len(modinfo) != 1:
            raise ValueError('Expected exactly one modinfo.lua in the archive')
        prefix = modinfo[0][:-len('modinfo.lua')]
        # Decode everything before changing the site's files: a bad archive must fail cleanly.
        decoded = []
        for path in sorted(paths):
            stem = Path(path).stem
            if path in SPECIAL:
                member = SPECIAL[path]
            elif path.startswith(('assets/img/items/', 'assets/img/skins/')):
                member = f'images/inventoryimages/{stem}.tex'
            elif path.startswith('assets/img/seasons/'):
                member = f'images/inventoryimages/bighead_{stem}.tex'
            else:
                continue
            image, _ = to_png_image(archive.read(prefix + member))
            decoded.append((path, image))
        for path, image in decoded:
            output = ROOT / path
            output.parent.mkdir(parents=True, exist_ok=True)
            image.save(output, optimize=True)
            written += 1
    print(f'Exported {written} PNGs with corrected vertical orientation.')


if __name__ == '__main__':
    main()

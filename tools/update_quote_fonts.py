"""Refresh the local homepage quote font subsets from the current character copy."""

import json
import re
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen

root = Path(__file__).resolve().parent.parent
source = (root / 'data/site-data.js').read_text(encoding='utf-8')
data = json.JSONDecoder().raw_decode(source.split('window.SITE_DATA =', 1)[1].lstrip())[0]
text = '“”未着墨。' + ''.join(str(c.get(k, '')) for c in data['characters'] for k in ('name', 'epithet', 'quote', 'tagline'))
text = ''.join(sorted(set(text)))
target = root / 'assets/fonts'
target.mkdir(exist_ok=True)

def download(url):
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'})
    with urlopen(req, timeout=30) as response:
        return response.read()

for weight in (400, 500):
    css = download(f'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@{weight}&display=swap&text={quote(text)}').decode()
    url, fmt = re.search(r'src: url\(([^)]+)\) format\([\'"]([^\'"]+)', css).groups()
    assert fmt == 'woff2', fmt
    font = download(url)
    assert font[:4] == b'wOF2'
    (target / f'quote-serif-{weight}.woff2').write_bytes(font)
    print(f'{weight}: {len(font)} bytes, {len(text)} characters')

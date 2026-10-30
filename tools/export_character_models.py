"""Export the two characters' in-game idle models through DST Mod Tool."""
import argparse
import json
import tempfile
from pathlib import Path
from zipfile import ZipFile

from PIL import Image

from export_mod_displays import ROOT, lua_string, request


CHARACTERS = {"pangtouyu": "bighead", "gaojiaoniao": "bb_gaojiaoniao"}
HIDDEN = ["ARM_carry", "hat", "hat_hair", "headbase_hat", "swap_object", "swap_hat"]


def export(tool, mod, game_anim):
    records = []
    output = ROOT / "assets/img/characters"
    with tempfile.TemporaryDirectory(prefix="pty-character-idles-") as temporary:
        scratch = Path(temporary)
        with ZipFile(mod) as archive:
            for build in CHARACTERS.values():
                member = next(n for n in archive.namelist() if n.endswith(f"/anim/{build}.zip"))
                (scratch / f"{build}.zip").write_bytes(archive.read(member))
        for character, build in CHARACTERS.items():
            sequence = scratch / character
            before = request(tool, 'assert(tool.document_is_empty); print(tool.document_revision)', scratch)
            try:
                report = request(tool, "\n".join([
                    'doc:import_resources({' + lua_string(game_anim / "player_idles.zip") + ','
                    + lua_string(scratch / f"{build}.zip") + '})',
                    'local animation=assert(doc.banks:find("wilson")).animations:find("idle_loop_down")',
                    'print(#animation.frames, animation.frame_rate)',
                    'animation:export_png_sequence(' + lua_string(sequence) + ', {',
                    'builds={assert(doc.builds:find(' + lua_string(build) + '))},',
                    'hide_layers={' + ','.join(map(lua_string, HIDDEN)) + '}, override_symbols={}, scale=1})',
                ]), scratch)
                if len(report["tool_results"]) != 1 or not report["tool_results"][0].get("ok"):
                    raise RuntimeError("Character frame export failed")
            finally:
                after = request(tool, 'print(tool.document_revision)', scratch)
                if before["output"] != after["output"]:
                    request(tool, 'tool:undo()', scratch)
            count, fps = map(float, report["output"][0].split("\t"))
            frames = [Image.open(path).convert("RGBA") for path in sorted(sequence.glob("*.png"))]
            bounds = [frame.getchannel("A").getbbox() for frame in frames]
            if len(frames) != int(count) or any(b is None for b in bounds):
                raise ValueError("Incomplete character frames")
            union = (min(b[0] for b in bounds), min(b[1] for b in bounds),
                     max(b[2] for b in bounds), max(b[3] for b in bounds))
            prepared = []
            for frame in frames:
                cropped = frame.crop(union)
                padded = Image.new("RGBA", (cropped.width + 16, cropped.height + 16))
                padded.paste(cropped, (8, 8))
                prepared.append(padded)
            poster = output / f"{character}_idle.png"
            animated = output / f"{character}_idle.webp"
            prepared[0].save(poster, optimize=True)
            # Keep native pixel dimensions but sample the idle at 15 fps.
            # Transparent costume effects otherwise make a small preview very large.
            sampled = prepared[::2]
            display_fps = fps / 2
            durations = [round((i + 1) * 1000 / display_fps) - round(i * 1000 / display_fps) for i in range(len(sampled))]
            sampled[0].save(animated, save_all=True, append_images=sampled[1:],
                            duration=durations, loop=0, lossless=False, quality=90, alpha_quality=100, method=3)
            records.append({
                "character": character, "build": build, "bank": "wilson",
                "animation": "idle_loop_down", "source_frames": len(prepared), "source_fps": fps,
                "frames": len(sampled), "fps": display_fps,
                "resources": ["player_idles.zip", f"{build}.zip"], "hide_layers": HIDDEN,
                "scale": 1, "display_size": prepared[0].size,
                "webp_quality": 90, "alpha_quality": 100,
                "poster": poster.relative_to(ROOT).as_posix(),
                "path": animated.relative_to(ROOT).as_posix(),
                "processing": "Shared alpha bounds, 8px padding; no resizing or flipping.",
            })
            print(f"Exported {character}: {prepared[0].size}, {len(sampled)} frames at {display_fps:g} fps", flush=True)
    (ROOT / "data/character-models.json").write_text(
        json.dumps({"characters": records}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--tool", type=Path, required=True)
    parser.add_argument("--mod", type=Path, required=True)
    parser.add_argument("--game-anim", type=Path, required=True)
    args = parser.parse_args()
    export(args.tool, args.mod, args.game_anim)

#!/usr/bin/env python3
"""
prepare_social.py — připraví podklady pro IG + FB post z markdown souboru.

Použití:
    python3 social/prepare_social.py social/2026-04-23-vystava-brno.md
    python3 social/prepare_social.py social/2026-04-23-vystava-brno.md --copy ig
    python3 social/prepare_social.py social/2026-04-23-vystava-brno.md --copy fb

Co skript dělá:
  1. Načte markdown vygenerovaný skillem `novy-clanek`
  2. Najde doporučené fotky (sekce "## Doporučené fotky")
  3. Resizne je do:
        social/<slug>/ig/   — 1080×1350 (IG portrait)
        social/<slug>/fb/   — 1200×630  (FB link preview) + plné rozlišení (FB album)
  4. Volitelně zkopíruje IG nebo FB caption do schránky (macOS pbcopy)

Závislost:
    pip3 install pillow
"""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("Chybí Pillow. Nainstaluj: pip3 install pillow")


REPO_ROOT = Path(__file__).resolve().parent.parent

IG_PORTRAIT = (1080, 1350)
FB_LINK = (1200, 630)
JPEG_QUALITY = 88


def parse_markdown(md_path: Path) -> dict:
    """Vrátí {'photos': [Path, ...], 'ig': str, 'fb': str}."""
    text = md_path.read_text(encoding="utf-8")

    # Fotky: řádky typu "1. `images/news/xxx.jpeg` — popis"
    photos: list[Path] = []
    photo_section = re.search(
        r"## Doporučené fotky\s*\n(.*?)(?=\n---|\n## )",
        text,
        re.DOTALL,
    )
    if photo_section:
        for match in re.finditer(r"`([^`]+\.(?:jpe?g|png|webp))`", photo_section.group(1), re.IGNORECASE):
            rel = match.group(1).strip()
            photos.append((REPO_ROOT / rel).resolve())

    def extract_section(header: str) -> str:
        m = re.search(
            rf"## {re.escape(header)}[^\n]*\n(.*?)(?=\n---|\n## |\Z)",
            text,
            re.DOTALL,
        )
        return m.group(1).strip() if m else ""

    return {
        "photos": photos,
        "ig": extract_section("Instagram"),
        "fb": extract_section("Facebook"),
    }


def resize_cover(src: Path, size: tuple[int, int], dst: Path) -> None:
    """Ořízne na daný poměr stran, resizne na cílový rozměr, uloží jako JPEG."""
    with Image.open(src) as img:
        img = ImageOps.exif_transpose(img)
        if img.mode not in ("RGB", "L"):
            img = img.convert("RGB")
        fitted = ImageOps.fit(img, size, method=Image.Resampling.LANCZOS)
        dst.parent.mkdir(parents=True, exist_ok=True)
        fitted.save(dst, format="JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)


def copy_full(src: Path, dst: Path) -> None:
    """Uloží plné rozlišení pro FB album (jen konverze do JPEG, bez resize)."""
    with Image.open(src) as img:
        img = ImageOps.exif_transpose(img)
        if img.mode not in ("RGB", "L"):
            img = img.convert("RGB")
        dst.parent.mkdir(parents=True, exist_ok=True)
        img.save(dst, format="JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)


def pbcopy(text: str) -> None:
    proc = subprocess.run(
        ["pbcopy"], input=text.encode("utf-8"), check=False
    )
    if proc.returncode != 0:
        print("⚠️  pbcopy selhal (nejsi na macOS?)", file=sys.stderr)


def main() -> int:
    parser = argparse.ArgumentParser(description="Připraví fotky a captiony pro IG + FB.")
    parser.add_argument("markdown", type=Path, help="Cesta k social/YYYY-MM-DD-slug.md")
    parser.add_argument(
        "--copy",
        choices=["ig", "fb"],
        help="Zkopíruje caption do schránky (macOS pbcopy).",
    )
    args = parser.parse_args()

    md_path: Path = args.markdown.resolve()
    if not md_path.exists():
        sys.exit(f"Soubor neexistuje: {md_path}")

    data = parse_markdown(md_path)

    out_dir = md_path.parent / md_path.stem
    ig_dir = out_dir / "ig"
    fb_dir = out_dir / "fb"

    if not data["photos"]:
        print("⚠️  V markdownu nejsou žádné fotky (sekce '## Doporučené fotky').")
    else:
        print(f"📸 Zpracovávám {len(data['photos'])} fotek → {out_dir.relative_to(REPO_ROOT)}")

    for idx, photo in enumerate(data["photos"], start=1):
        if not photo.exists():
            print(f"  ⚠️  {idx:02d}  CHYBÍ: {photo}")
            continue
        stem = f"{idx:02d}-{photo.stem}"
        resize_cover(photo, IG_PORTRAIT, ig_dir / f"{stem}.jpg")
        resize_cover(photo, FB_LINK, fb_dir / f"{stem}-link.jpg")
        copy_full(photo, fb_dir / f"{stem}-full.jpg")
        print(f"  ✅ {idx:02d}  {photo.name}")

    if args.copy == "ig":
        pbcopy(data["ig"])
        print("\n📋 IG caption ve schránce.")
    elif args.copy == "fb":
        pbcopy(data["fb"])
        print("\n📋 FB caption ve schránce.")
    else:
        print("\nTip: spusť znovu s --copy ig (nebo --copy fb) pro zkopírování textu do schránky.")

    print(f"\nHotovo. Fotky: {out_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

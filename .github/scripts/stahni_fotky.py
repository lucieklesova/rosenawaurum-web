#!/usr/bin/env python3
"""
Stáhne text a fotky z GitHub issue a připraví je pro Clauda.

Výstup do _incoming/:
  issue.md          – text issue (markdown, jak ho Lucie napsala)
  fotky/NN.webp     – fotky převedené do webp (max 1920 px, kvalita 82)
  nahled/NN.jpg     – malé náhledy (max 800 px), aby si je Claude mohl prohlédnout
  manifest.json     – seznam fotek (pořadí = pořadí v issue, první = titulní)

Fotky se berou z body_html (API s Accept: full+json), kde GitHub vrací
podepsané URL – funguje to pro veřejná i soukromá repa.

Použití: python3 .github/scripts/stahni_fotky.py <owner/repo> <cislo-issue>
Potřebuje proměnnou GH_TOKEN (v Actions stačí GITHUB_TOKEN).
"""
import io
import json
import os
import re
import sys
import urllib.request
from html.parser import HTMLParser
from pathlib import Path

from PIL import Image, ImageOps

try:
    import pillow_heif  # iPhone HEIC

    pillow_heif.register_heif_opener()
except ImportError:
    pass

OUT = Path("_incoming")
MAX_FULL = 1920
MAX_PREVIEW = 800


class ImgParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.srcs = []

    def handle_starttag(self, tag, attrs):
        if tag == "img":
            a = dict(attrs)
            src = a.get("data-canonical-src") if a.get("src", "").startswith("data:") else a.get("src")
            if src and not src.startswith("data:"):
                self.srcs.append((src, a.get("alt", "")))


def api(url, token, accept="application/vnd.github.full+json"):
    req = urllib.request.Request(url, headers={
        "Authorization": f"Bearer {token}",
        "Accept": accept,
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "rosenaw-clanek",
    })
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)


def download(url, token):
    # body_html obsahuje u soukromých rep podepsané URL (…?jwt=), u veřejných
    # jdou user-attachments stáhnout anonymně. Token neposíláme – urllib by ho
    # přenesl i při přesměrování na S3 a podepsaný odkaz by pak selhal.
    req = urllib.request.Request(url, headers={"User-Agent": "rosenaw-clanek"})
    with urllib.request.urlopen(req, timeout=120) as r:
        return r.read()


def save_image(data, idx):
    img = Image.open(io.BytesIO(data))
    img = ImageOps.exif_transpose(img)  # správná orientace z mobilu
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGB")
    full = img.copy()
    full.thumbnail((MAX_FULL, MAX_FULL), Image.LANCZOS)
    name = f"{idx:02d}"
    full_path = OUT / "fotky" / f"{name}.webp"
    full.save(full_path, "WEBP", quality=82, method=6)
    prev = img.convert("RGB")
    prev.thumbnail((MAX_PREVIEW, MAX_PREVIEW), Image.LANCZOS)
    prev.save(OUT / "nahled" / f"{name}.jpg", "JPEG", quality=80)
    return {
        "soubor": str(full_path),
        "nahled": str(OUT / "nahled" / f"{name}.jpg"),
        "sirka": full.width,
        "vyska": full.height,
        "kb": round(full_path.stat().st_size / 1024),
    }


def main():
    repo, number = sys.argv[1], sys.argv[2]
    token = os.environ["GH_TOKEN"]
    (OUT / "fotky").mkdir(parents=True, exist_ok=True)
    (OUT / "nahled").mkdir(parents=True, exist_ok=True)

    issue = api(f"https://api.github.com/repos/{repo}/issues/{number}", token)
    body_md = issue.get("body") or ""
    body_html = issue.get("body_html") or ""

    p = ImgParser()
    p.feed(body_html)
    seen, fotky = set(), []
    for src, alt in p.srcs:
        if src in seen:
            continue
        seen.add(src)
        try:
            info = save_image(download(src, token), len(fotky) + 1)
        except Exception as e:  # jedna vadná fotka nezastaví celý článek
            print(f"::warning::Fotku se nepodařilo zpracovat ({e}): {src[:80]}")
            continue
        info["popis_z_issue"] = alt
        fotky.append(info)
        print(f"Fotka {len(fotky)}: {info['sirka']}x{info['vyska']}, {info['kb']} kB")

    # Text bez obrázků, ať Claude neřeší URL
    text = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", body_md)
    text = re.sub(r"<img[^>]*>", "", text)
    (OUT / "issue.md").write_text(
        f"# {issue['title']}\n\nIssue #{number}, autor: {issue['user']['login']}\n\n{text.strip()}\n",
        encoding="utf-8",
    )
    (OUT / "manifest.json").write_text(
        json.dumps({"issue": int(number), "nazev_issue": issue["title"], "fotky": fotky}, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"Hotovo: {len(fotky)} fotek, text {len(text)} znaků")


if __name__ == "__main__":
    main()

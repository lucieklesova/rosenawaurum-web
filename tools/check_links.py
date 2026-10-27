#!/usr/bin/env python3
"""Kontrola interních odkazů, obrázků a kotev (#id) na všech stránkách webu.

Použití (z kořene repozitáře):  python3 tools/check_links.py
Skončí chybou, pokud něco odkazuje na neexistující soubor nebo kotvu.
"""
import glob
import html
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

PAGES = sorted({p for g in ["*.html", "aktuality/*.html", "en/*.html", "de/*.html"] for p in glob.glob(g)})
EXTERNAL = re.compile(r"(https?:|mailto:|tel:|data:|javascript:|//)")


def main() -> int:
    ids = {p: set(re.findall(r'\bid="([^"]+)"', open(p, encoding="utf-8").read())) for p in PAGES}
    problems = set()
    for page in PAGES:
        s = open(page, encoding="utf-8").read()
        s = re.sub(r'<script type="application/ld\+json">.*?</script>', "", s, flags=re.S)
        for attr, value in re.findall(r'\b(href|src|data-src|poster|srcset)="([^"]+)"', s):
            urls = [c.strip().split()[0] for c in value.split(",")] if attr == "srcset" else [value]
            for url in map(html.unescape, urls):
                if EXTERNAL.match(url):
                    continue
                path, _, frag = url.partition("#")
                path = path.split("?")[0]
                if url.startswith("/"):
                    target = path.lstrip("/") or "index.html"
                elif not path:
                    target = page
                else:
                    target = os.path.normpath(os.path.join(os.path.dirname(page), path))
                if os.path.isdir(target):
                    target = os.path.join(target, "index.html")
                if not os.path.exists(target):
                    problems.add(f"{page}: {url} (soubor neexistuje)")
                elif frag and target in ids and frag not in ids[target]:
                    problems.add(f"{page}: {url} (kotva neexistuje)")
    for p in sorted(problems):
        print(p)
    print(f"{len(PAGES)} stránek, problémů: {len(problems)}")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())

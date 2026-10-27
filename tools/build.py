#!/usr/bin/env python3
"""Sestavení statického webu Rosenaw Aurum – bez frameworku, výstupem jsou přímo HTML soubory v repozitáři.

Co skript dělá (idempotentně, na všech stránkách):
  1. Hlavička, mobilní menu a patička se propíšou z `partials/` (jediný zdroj pravdy).
  2. Odkazy na CSS/JS dostanou verzi podle obsahu souboru (`?v=<hash>`) + preload písem.
  3. Texty s `data-i18n` se zapíšou z `assets/js/translations.js` přímo do HTML,
     aby vyhledávače i návštěvníci bez JS viděli správný jazyk.

Použití (z kořene repozitáře):
    python3 tools/build.py           # přepíše soubory
    python3 tools/build.py --check   # nic nemění, skončí chybou, pokud je něco neaktuální (CI)

Vyžaduje Python 3.9+ a Node.js (pro načtení translations.js).
"""
from __future__ import annotations

import glob
import hashlib
import html
import json
import os
import re
import subprocess
import sys
from html.parser import HTMLParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

PAGE_GLOBS = ["*.html", "aktuality/*.html", "en/*.html", "de/*.html"]
CSS = "assets/css/styles.css"
JS = ["assets/js/translations.js", "assets/js/main.js"]
FONTS_PRELOAD = ["assets/fonts/raleway-latin.woff2", "assets/fonts/playfair-display-latin.woff2"]

# Cíle odkazů v navigaci podle jazyka (cesty od kořene webu).
# Výpis aktualit a dokumenty existují jen česky – EN/DE odkazují na sekci novinek na své úvodní stránce.
LINKS = {
    "cs": {
        "home": "index.html", "futureOwners": "pro-budouci-majitele.html",
        "reservation": "rezervace-stenete.html", "breed": "o-plemeni.html", "faq": "faq.html",
        "calculator": "kalkulacka-brezosti-feny.html",
    },
    "en": {
        "home": "en/index.html", "futureOwners": "en/future-owners.html",
        "reservation": "en/puppy-reservation.html", "breed": "en/about-breed.html", "faq": "en/faq.html",
        "calculator": "en/pregnancy-calculator.html",
    },
    "de": {
        "home": "de/index.html", "futureOwners": "de/zukuenftige-besitzer.html",
        "reservation": "de/welpenreservierung.html", "breed": "de/about-breed.html", "faq": "de/faq.html",
        "calculator": "de/pregnancy-calculator.html",
    },
}
for _lang, _l in LINKS.items():
    _l.update(news="aktuality.html" if _lang == "cs" else _l["home"] + "#news",
              documents="alma-dokumenty.html", privacy="ochrana-osobnich-udaju.html")

# Stránka 404 se zobrazuje na libovolné adrese → potřebuje absolutní cesty.
ABSOLUTE_PAGES = {"404.html"}


# ---------------------------------------------------------------- pomocné funkce

def read(path: str) -> str:
    with open(path, encoding="utf-8") as f:
        return f.read()


def file_hash(path: str) -> str:
    with open(path, "rb") as f:
        return hashlib.sha256(f.read()).hexdigest()[:10]


def load_translations() -> dict:
    js = (
        'const fs=require("fs");'
        f'process.stdout.write(JSON.stringify(new Function(fs.readFileSync({json.dumps(JS[0])},"utf8")+";return translations;")()));'
    )
    return json.loads(subprocess.check_output(["node", "-e", js]))


def page_lang(page: str) -> str:
    return page.split("/")[0] if page.startswith(("en/", "de/")) else "cs"


def make_url(page: str):
    """Vrátí funkci, která převede cestu od kořene webu na odkaz platný z dané stránky."""
    if page in ABSOLUTE_PAGES:
        return lambda target: "/" + target
    base = os.path.dirname(page)

    def rel(target: str) -> str:
        path, _, frag = target.partition("#")
        if path == page:
            out = "" if frag else os.path.basename(page)
        else:
            out = os.path.relpath(path, base or ".").replace(os.sep, "/")
        return out + ("#" + frag if frag else "")
    return rel


# ---------------------------------------------------------------- 1) partials

def render_partial(name: str, page: str, T: dict, extra: dict | None = None) -> str:
    lang = page_lang(page)
    url = make_url(page)
    links = LINKS[lang]
    root = "/" if page in ABSOLUTE_PAGES else ("../" if "/" in page else "")
    tpl = read(f"partials/{name}.html")

    def sub(m: re.Match) -> str:
        kind, _, arg = m.group(1).partition(":")
        if kind == "t":
            value = T[lang].get(arg)
            if value is None:
                raise SystemExit(f"Chybí překlad '{arg}' pro jazyk {lang}")
            return html.escape(value, quote=True)
        if kind == "url":
            key, _, frag = arg.partition("#")
            return url(links[key] + ("#" + frag if frag else ""))
        if kind == "active":
            return " lang-btn--active" if arg == lang else ""
        if kind == "root":
            return root
        if extra and kind in extra:
            return extra[kind]
        raise SystemExit(f"Neznámý zástupný symbol {{{{{m.group(1)}}}}} v partials/{name}.html")

    return re.sub(r"\{\{([a-zA-Z]+(?::[^}]*)?)\}\}", sub, tpl)


def apply_partials(page: str, s: str, T: dict) -> str:
    body = re.search(r"<body[^>]*>", s)
    main = s.find("<main", body.end())
    if not body or main < 0:
        raise SystemExit(f"{page}: chybí <body> nebo <main>")
    header = render_partial("header", page, T)
    s = s[: body.end()] + "\n    " + header.rstrip() + "\n\n    " + s[main:]

    main_end = s.find("</main>")
    start = s.find('<div class="footer-transition"', main_end)
    if start < 0:
        start = s.find("<footer", main_end)
    end = s.find("</footer>", main_end)
    attrs = ""
    if start >= 0 and end >= 0:
        m = re.match(r'<div class="footer-transition"([^>]*)>', s[start:])
        if m:
            attrs = m.group(1)
        end += len("</footer>")
    else:
        start = end = main_end + len("</main>")
    footer = render_partial("footer", page, T, {"transitionAttrs": attrs})
    prefix = "\n\n    " if start == end else ""
    return s[:start] + prefix + footer.rstrip() + s[end:]


# ---------------------------------------------------------------- 2) CSS / JS / písma

def apply_assets(page: str, s: str) -> str:
    root = "/" if page in ABSOLUTE_PAGES else ("../" if "/" in page else "")
    css_v, js_v = file_hash(CSS), {p: file_hash(p) for p in JS}

    head_end = s.find("</head>")
    head, rest = s[:head_end], s[head_end:]
    head = re.sub(r'[ \t]*<link\b[^>]*\bfonts/[^>]*\.woff2[^>]*>\n?', "", head)
    indent = "    "
    block = "".join(
        f'{indent}<link rel="preload" href="{root}{f}" as="font" type="font/woff2" crossorigin />\n'
        for f in FONTS_PRELOAD
    ) + f'{indent}<link rel="stylesheet" href="{root}{CSS}?v={css_v}" />'
    css_re = re.compile(r'[ \t]*<link\b[^>]*href="[^"]*styles\.css[^"]*"[^>]*>')
    if not css_re.search(head):
        raise SystemExit(f"{page}: nenalezen odkaz na styles.css")
    head = css_re.sub("\0CSS\0", head, count=1)
    head = css_re.sub("", head).replace("\0CSS\0", block)
    s = head + rest

    scripts = "\n".join(
        f'{indent}<script src="{root}{p}?v={js_v[p]}" defer></script>' for p in JS
    )
    js_re = re.compile(r'[ \t]*<script\b[^>]*src="[^"]*(?:script|main|translations)\.js[^"]*"[^>]*>\s*</script>')
    if not js_re.search(s):
        s = s.replace("</body>", scripts + "\n  </body>", 1)
    s = js_re.sub(lambda m: scripts, s, count=1)
    first = s.find(scripts) + len(scripts)
    s = s[:first] + re.sub(r"\n" + js_re.pattern, "", s[first:])
    return s


# ---------------------------------------------------------------- 3) překlady do HTML

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}


class _I18nFinder(HTMLParser):
    def __init__(self, src: str):
        super().__init__(convert_charrefs=False)
        self.lines = [0] + [m.end() for m in re.finditer("\n", src)]
        self.stack: list = []
        self.found: list = []

    def _off(self) -> int:
        line, col = self.getpos()
        return self.lines[line - 1] + col

    def handle_starttag(self, tag, attrs):
        if tag in VOID:
            return
        self.stack.append((tag, dict(attrs), self._off() + len(self.get_starttag_text())))

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] == tag:
                t, a, inner = self.stack[i]
                del self.stack[i:]
                if "data-i18n" in a:
                    nested = any("data-i18n" in x[1] for x in self.stack)
                    self.found.append((inner, self._off(), t, a, nested))
                return


def _norm(x: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", x))).strip()


def _norm_html(x: str) -> str:
    return re.sub(r">\s+<", "><", re.sub(r"\s+", " ", html.unescape(x))).strip()


def _render_value(tag: str, attrs: dict, value: str) -> str:
    is_html = "data-i18n-html" in attrs
    if tag in ("ul", "ol"):
        return "".join(
            "<li>" + (item.strip() if is_html else html.escape(item.strip(), quote=False)) + "</li>"
            for item in value.split(";")
        )
    return value if is_html else html.escape(value, quote=False)


def apply_i18n(page: str, s: str, T: dict) -> str:
    finder = _I18nFinder(s)
    finder.feed(s)
    d = T[page_lang(page)]
    reps = []
    for start, end, tag, attrs, nested in finder.found:
        value = d.get(attrs["data-i18n"])
        if nested or not value:
            continue
        new = _render_value(tag, attrs, value)
        same = (_norm_html(s[start:end]) == _norm_html(new)) if "data-i18n-html" in attrs else (_norm(s[start:end]) == _norm(new))
        if not same:
            reps.append((start, end, new))
    for start, end, new in sorted(reps, reverse=True):
        s = s[:start] + new + s[end:]

    def aria(m: re.Match) -> str:
        tag = m.group(0)
        value = d.get(re.search(r'data-i18n-aria-label="([^"]+)"', tag).group(1))
        if not value:
            return tag
        return re.sub(r'(\s)aria-label="[^"]*"', lambda mm: f'{mm.group(1)}aria-label="{html.escape(value)}"', tag, count=1)

    return re.sub(r'<[a-zA-Z][^>]*data-i18n-aria-label="[^"]+"[^>]*>', aria, s)


# ---------------------------------------------------------------- 404: absolutní cesty

def absolutize(s: str) -> str:
    def fix(m: re.Match) -> str:
        attr, url = m.group(1), m.group(2)
        if re.match(r"(#|/|[a-z]+:|data:)", url):
            return m.group(0)
        return f'{attr}="/{url}"'
    return re.sub(r'\b(href|src|poster)="([^"]*)"', fix, s)


# ---------------------------------------------------------------- main

def build(page: str, T: dict) -> str:
    s = read(page)
    s = apply_partials(page, s, T)
    s = apply_assets(page, s)
    s = apply_i18n(page, s, T)
    if page in ABSOLUTE_PAGES:
        s = absolutize(s)
    return s


def main() -> int:
    check = "--check" in sys.argv
    T = load_translations()
    pages = sorted({p for g in PAGE_GLOBS for p in glob.glob(g)})
    changed = []
    for page in pages:
        old = read(page)
        new = build(page, T)
        if new != old:
            changed.append(page)
            if not check:
                with open(page, "w", encoding="utf-8") as f:
                    f.write(new)
    if check and changed:
        print("Neaktuální stránky – spusť `python3 tools/build.py`:\n  " + "\n  ".join(changed))
        return 1
    print(f"{len(pages)} stránek, změněno {len(changed)}" + (" (kontrola)" if check else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main())

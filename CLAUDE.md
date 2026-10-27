# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Rosenaw Aurum is a static multi-page website for a Golden Retriever breeding kennel, hosted on Vercel (`vercel.json` = redirects, security headers incl. CSP, cache headers). No framework and no build on Vercel — the HTML files in the repo are what gets deployed. A small Python script (`tools/build.py`) keeps shared parts in sync.

## Commands

```bash
python3 -m http.server 8000        # local preview (vercel.json redirects/headers don't apply locally)
python3 tools/build.py             # sync partials, asset versions and translations into all HTML
python3 tools/build.py --check     # CI: fails if any HTML is out of date
python3 tools/check_links.py       # CI: broken internal links / images / anchors
```

**Always run `python3 tools/build.py` after editing `partials/`, `assets/` or `assets/js/translations.js`.** CI (`.github/workflows/kontrola.yml`) runs both checks on every PR and push.

## Structure

```text
*.html, aktuality/      Czech pages (URLs must not change – SEO)
en/, de/                English / German pages (own URLs, canonical, hreflang)
partials/               header.html (skip link, header, mobile menu), footer.html – single source of truth
assets/css/styles.css   all styling (breakpoints 960px / 640px), self-hosted fonts at the top
assets/js/translations.js   `translations` object (cs / en / de)
assets/js/main.js       language switch, gallery, contact form (Formspree), cookie consent, calculator
assets/fonts/           Playfair Display + Raleway (woff2, OFL)
images/, documents/     media (URLs indexed / shared – don't move)
tools/                  build.py, check_links.py
social/                 drafts + prepare_social.py for Instagram / Facebook posts (not deployed)
.github/                article automation from GitHub issues (Claude / Codex)
```

`.vercelignore` keeps internal files (`partials`, `tools`, `.claude`, `.github`, `*.md`, …) off the public site. `/assets/*` is cached for a year (`immutable`) – safe because `build.py` adds a content hash (`?v=`) to every CSS/JS reference.

## Shared header / footer

Never edit the header, mobile menu or footer inside a page – edit `partials/*.html` and run the build. Placeholders: `{{t:key}}` (translation), `{{url:key}}` / `{{url:home#anchor}}` (link per language, see `LINKS` in `tools/build.py`), `{{root}}`, `{{active:cs}}`. `404.html` gets absolute paths (it is served on any URL). Active nav state is set at runtime by `setupActiveNavigation()`.

## i18n System

Elements use `data-i18n` (text), `data-i18n-html` (value is HTML) and `data-i18n-aria-label`. `setLanguage()` replaces content at runtime; `UL/OL` values are split on `;` into `<li>`. The build writes the dictionary into the static HTML, so search engines and no-JS visitors see the right language.

When adding text: add `data-i18n` in HTML, add the key to `cs`, `en` and `de` in `translations.js`, run the build. Links inside translation values must be root-absolute (`/alma-dokumenty.html`) because the same key is used on pages at different depths. CS↔EN↔DE page mapping for the language switch is `PAGE_LOCALES` in `main.js`.

## Images

Images are WebP. Gallery and news-card thumbnails use `srcset` with `-640w.webp` / `-1200w.webp` variants next to the original (e.g. `cwebp -q 78 -resize 640 0 in.webp -o in-640w.webp`); the lightbox links to the original. Gallery videos have `*-poster.webp` and `preload="none"`.

## Adding Content

- **New dog profile**: Duplicate the Alma `<article class="dog-card">` block in the `#girls` section
- **New gallery photo**: Add a `<figure class="gallery-item" data-gallery-category="...">` to the `.gallery-grid`
- **New article**: skill `novy-clanek` (also used by the GitHub issue automation – see `.github/NAVOD-CLANKY.md`)
- **New litter**: Update the puppies aside card and archive section in `#puppies`

## Language

The site content and comments are in Czech. The codebase owner (Lucie) communicates in Czech.

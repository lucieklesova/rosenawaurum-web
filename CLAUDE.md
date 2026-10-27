# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Rosenaw Aurum is a static multi-page website for a Golden Retriever breeding kennel, hosted on Vercel (`vercel.json` = redirects, security headers incl. CSP, cache headers). No build process, no framework — plain HTML + CSS + JS.

## Running Locally

```bash
python3 -m http.server 8000
```

There are no tests or linters. `vercel.json` redirects/headers do not apply locally.

## Architecture

- **Czech pages** in the root (`index.html`, `faq.html`, `o-plemeni.html`, …) and news articles in `aktuality/`
- **English / German pages** in `en/` and `de/` (separate static files with their own URLs, canonical and hreflang). Mapping of CS↔EN↔DE pages for the language switch is `PAGE_LOCALES` in `script.js`.
- **`styles.css`** — all styling, breakpoints at 960px and 640px. Fonts (Playfair Display, Raleway) are self-hosted in `fonts/` via `@font-face` at the top.
- **`script.js`** — translations, language switch, gallery, contact form (Formspree), cookie consent (GA + Google Maps/YouTube load only after consent), pregnancy calculator.
- `.vercelignore` keeps internal files (`.claude`, `.github`, `scripts`, `*.md`, …) off the public site.

After changing `styles.css` or `script.js`, bump `?v=` in all HTML files.

## i18n System

Translations live in `script.js` in the `translations` object (`cs`, `en`, `de`). Elements use `data-i18n` (text), `data-i18n-html` (value is HTML) and `data-i18n-aria-label`. `setLanguage()` replaces the content at runtime; `UL/OL` values are split on `;` into `<li>`.

The static HTML must contain the same text (SEO, no-JS). **After editing translations run `python3 scripts/bake_i18n.py`**, which writes the dictionary into all HTML files. When adding text: add `data-i18n` in HTML + the key to `cs`, `en` and `de`, then run the script.

## Images

Images are in `images/` (WebP). Gallery and news-card thumbnails use `srcset` with `-640w.webp` / `-1200w.webp` variants next to the original (e.g. `cwebp -q 78 -resize 640 0 in.webp -o in-640w.webp`); the lightbox links to the original. Gallery videos have `*-poster.webp` and `preload="none"`.

## Adding Content

- **New dog profile**: Duplicate the Alma `<article class="dog-card">` block in the `#girls` section
- **New gallery photo**: Add a `<figure class="gallery-item" data-gallery-category="...">` to the `.gallery-grid`
- **New news item**: Add an `<article class="news-item">` to the `.news-list`
- **New litter**: Update the puppies aside card and archive section in `#puppies`

## Články z mobilu

Nové články mohou vznikat automaticky z GitHub issue (Claude nebo Codex) – viz `.github/NAVOD-CLANKY.md` a skill `novy-clanek`.

## Language

The site content and comments are in Czech. The codebase owner (Lucie) communicates in Czech.

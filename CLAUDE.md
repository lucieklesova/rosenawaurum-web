# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Rosenaw Aurum is a static single-page website for a Golden Retriever breeding kennel. No build process, no dependencies, no framework — just plain HTML + CSS + JS.

## Running Locally

Open `index.html` directly in a browser, or use any static file server:

```bash
python3 -m http.server 8000
```

There are no tests, linters, or build steps configured.

## Architecture

Three files make up the entire site:

- **`index.html`** — Single-page structure with anchor-linked sections: Home (hero), About, Our Girls, Puppies, Gallery, News, Documents, Contact
- **`styles.css`** — All styling including responsive breakpoints at 960px and 640px
- **`script.js`** — Three features: i18n language switcher (CZ/EN), gallery category filter, contact form handler

## i18n System

Translations live in `script.js` as a `translations` object with `cs` and `en` keys. HTML elements use `data-i18n` attributes that map to translation keys. The `setLanguage()` function iterates all `[data-i18n]` elements and replaces their `textContent`. Special case: `puppiesPackList` splits on semicolons to generate `<li>` elements.

When adding new translatable text: add the `data-i18n` attribute in HTML, then add corresponding keys to both `cs` and `en` objects in `script.js`.

## Images

Images are in `images/`. The hero section background is set via CSS (`styles.css` line ~162) referencing `images/hero-alma.png`. The hero card "O stanici" uses `images/forest button.jpg` as a background image. Dog profile and gallery images are referenced directly in `index.html`.

## Adding Content

- **New dog profile**: Duplicate the Alma `<article class="dog-card">` block in the `#girls` section
- **New gallery photo**: Add a `<figure class="gallery-item" data-gallery-category="...">` to the `.gallery-grid`
- **New news item**: Add an `<article class="news-item">` to the `.news-list`
- **New litter**: Update the puppies aside card and archive section in `#puppies`

## Language

The site content and comments are in Czech. The codebase owner (Lucie) communicates in Czech.

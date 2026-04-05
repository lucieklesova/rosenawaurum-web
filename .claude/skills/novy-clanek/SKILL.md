---
name: novy-clanek
description: "Vytvoří nový článek/aktualitu na web Rosenaw Aurum. Použij když uživatel chce přidat novou aktualitu, článek z výstavy, zkoušky nebo jinou novinku. Trigger: 'nový článek', 'přidej aktualitu', 'nová aktualita', 'přidej článek'."
user_invocable: true
---

# Nový článek – Rosenaw Aurum

Tento skill vytváří nový článek (aktualitu) na webu chovatelské stanice Rosenaw Aurum.

## Postup

### 1. Zjisti obsah článku
- Zeptej se uživatele na: **nadpis, datum, text článku, výsledky** (pokud jde o výstavu/zkoušku)
- Pokud uživatel poskytne URL blogu (almamygoldenlove.cz), stáhni obsah pomocí WebFetch
- Pokud jsou na blogu fotky, stáhni je do `images/news/` s prefixem názvu článku (např. `provodovice-IMG_1234.jpeg`)

### 2. Vytvoř detail stránku
Soubor: `aktuality/{slug}.html`

Použij jako šablonu existující článek (např. `aktuality/bordovice.html`). Klíčové prvky:
- Header s SVG logem (`../images/logo-rosenaw-aurum.svg` + `../images/logo-footer.webp`)
- CSS verze: zkontroluj aktuální verzi v ostatních souborech (`styles.css?v=XX`)
- Navigace s `class="active"` na odkazu Aktuality
- Obsah článku v `<article class="blog-article">`
- Fotogalerie v `<div class="blog-article-photos">` s GLightbox
- **Share tlačítka** na konci článku (před `</article>`):

```html
<div class="share-buttons">
  <span>Sdílet:</span>
  <a class="share-btn share-btn--fb" href="https://www.facebook.com/sharer/sharer.php?u=https://rosenawaurum.cz/aktuality/{slug}.html" target="_blank" rel="noopener noreferrer">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    <span class="share-btn-label">Facebook</span>
  </a>
  <a class="share-btn share-btn--wa" href="https://api.whatsapp.com/send?text={URL-encoded-title}%20https://rosenawaurum.cz/aktuality/{slug}.html" target="_blank" rel="noopener noreferrer">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    <span class="share-btn-label">WhatsApp</span>
  </a>
  <button class="share-btn share-btn--copy" data-url="https://rosenawaurum.cz/aktuality/{slug}.html">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
    <span class="share-btn-label">Kopírovat odkaz</span>
  </button>
</div>
```

### 3. Přidej kartu do aktuality.html
Vlož novou kartu na **první místo** v `<div class="blog-grid">` (před ostatní kartičky).

Formát kartičky:
```html
<a href="aktuality/{slug}.html" class="blog-card">
  <div class="blog-card-img">
    <img src="images/news/{obrazek}" alt="{alt}" loading="lazy" />
  </div>
  <div class="blog-card-date">
    <span class="blog-card-month">{Měsíc zkratka: Led/Úno/Bře/Dub/Kvě/Čvn/Čvc/Srp/Zář/Říj/Lis/Pro}</span>
    <span class="blog-card-day">{DD}</span>
  </div>
  <h3 class="blog-card-title">{Nadpis}</h3>
  <p class="blog-card-excerpt">{Krátký excerpt}</p>
</a>
```

Pokud článek nemá obrázek, vynech `<div class="blog-card-img">`.

### 4. Aktualizuj teasery na index.html
V sekci `#news` je `<div class="blog-grid blog-grid--3">` se 3 kartičkami. Vlož novou kartu na první místo a odstraň poslední (nejstarší), aby zůstaly vždy 3.

### 5. Aktualizuj sekci výstav (pokud relevantní)
Pokud jde o výstavu nebo zkoušku, aktualizuj sekci "Výstavy a zkoušky" v profilu Almy na `index.html` (result-chips). Nezapomeň přidat překlad nového klíče do `script.js` (cs + en).

### 6. Čísla článků v aktuality.html
Aktualizuj komentáře s čísly článků (`<!-- 1. Název -->`, `<!-- 2. Název -->` atd.) aby šly po sobě.

## Důležité
- Canonical URL je vždy `https://rosenawaurum.cz/aktuality/{slug}.html`
- Cesty z `aktuality/` podsložky: `../images/`, `../styles.css`, `../script.js`
- Cesty z root stránek: `images/`, `styles.css`, `script.js`
- Footer a header musí být konzistentní s ostatními stránkami v `aktuality/`
- Obrázky pojmenovat s prefixem slug: `{slug}-{puvodni-nazev}.jpeg`

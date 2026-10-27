# Rosenaw Aurum – web chovatelské stanice

Statický web chovatelské stanice zlatých retrívrů [rosenawaurum.cz](https://rosenawaurum.cz) v češtině, angličtině a němčině. Běží na Vercelu, bez frameworku. Nasazuje se přímo HTML z repozitáře (push do `main` = produkce, pull request = náhled).

## Struktura

| Složka / soubor | Obsah |
| --- | --- |
| `*.html`, `aktuality/` | české stránky a články |
| `en/`, `de/` | anglické a německé stránky |
| `partials/` | společná hlavička, mobilní menu a patička (jediný zdroj) |
| `assets/css/`, `assets/js/`, `assets/fonts/` | styly, skripty (`translations.js` = všechny překlady), písma |
| `images/`, `documents/` | fotky, videa, PDF |
| `tools/` | `build.py` (sestavení), `check_links.py` (kontrola odkazů) |
| `social/` | podklady pro Instagram a Facebook (nenasazuje se) |
| `.github/` | automatické články z GitHub issue + kontrola webu (CI) |
| `vercel.json` | přesměrování, bezpečnostní a cache hlavičky |

## Práce s webem

```bash
python3 -m http.server 8000      # náhled na http://localhost:8000
python3 tools/build.py           # po úpravě partials/, CSS, JS nebo překladů
python3 tools/check_links.py     # kontrola odkazů
```

Hlavička a patička se upravují jen v `partials/`. Texty pro všechny jazyky jsou v `assets/js/translations.js`. `tools/build.py` je propíše do všech stránek a doplní verze CSS/JS. Kontrola na GitHubu (Kontrola webu) upozorní, když se na build zapomene.

Nové články vznikají z mobilu přes GitHub issue, postup je v [.github/NAVOD-CLANKY.md](.github/NAVOD-CLANKY.md).

## Rosenaw Aurum – statický web chovatelské stanice

- Stránky jsou aktuálně řešené jako **jednostránkový, plně statický web** (`index.html` + `styles.css` + `script.js`).
- Design je minimalistický, se dvěma jazykovými mutacemi **CZ / EN** pomocí jednoduchého přepínače v pravém horním rohu.
- Obsah vychází z příběhu a údajů o Almě z webu [Alma My Golden Love](https://www.almamygoldenlove.cz/) a bude možné jej dále rozšiřovat o další feny, vrhy a novinky.

### Struktura sekcí (informační architektura)

- Home (hero, rychlé karty O nás / Naše feny / Štěňata)
- O nás – příběh stanice, filozofie, informace o chovatelce
- Naše feny – profil Almy jako vzor pro další fenky
- Štěňata – přístup k odchovu, plánované vrhy, archiv vrhů
- Galerie – tematická alba (naše feny, štěňata, výstavy, ze života)
- Novinky & blog – krátké aktuality a příběhy
- Dokumenty – přehled dokumentů (později odkazy na PDF)
- Kontakt – kontaktní informace a formulář

### Technický směr a další rozvoj

- V této fázi je web **bez build procesu** – stačí otevřít `index.html` v prohlížeči nebo jej nahrát na libovolný statický hosting.
- Do budoucna je možné převést obsah na framework typu **Next.js** a napojit na jednoduchý headless CMS (např. Netlify CMS, Contentful), přičemž současná struktura sekcí a textů může sloužit jako podklad pro datový model.


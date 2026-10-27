Jsi v repozitáři webu chovatelské stanice Rosenaw Aurum (statické HTML, CZ/EN/DE).

Vytvoř nový článek podle skillu `.claude/skills/novy-clanek/SKILL.md`.
Přečti si celý skill i `CLAUDE.md`. Číslo issue a další kontext jsou v `_incoming/`.

Podklady od Lucie:
- `_incoming/issue.md` – nadpis, datum, kategorie, text, výsledky, poznámky
- `_incoming/manifest.json` + `_incoming/fotky/*.webp` – fotky (už převedené), náhledy v `_incoming/nahled/*.jpg`

Pravidla:
- Nikoho se na nic neptej – nikdo ti neodpoví. Chybějící údaje doplň rozumně a napiš je do `_incoming/pr.md`.
- Necommituj, nepushuj a nevytvářej PR – to udělá další krok workflow.
- Fotky už jsou stažené; nestahuj je z internetu, pokud to není nutné.
- Dnešní datum zjistíš příkazem `date +%F`.
- Po úpravách HTML nebo překladů spusť `python3 tools/build.py` (sjednotí hlavičku/patičku z `partials/`, verze CSS/JS a překlady v HTML).

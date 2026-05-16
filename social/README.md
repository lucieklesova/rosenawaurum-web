# social/

Lokální pracovní adresář pro podklady na Instagram a Facebook.

Obsah této složky je v `.gitignore` — verzován je jen `prepare_social.py` a toto README.

## Workflow

1. **Nový článek** → skill `novy-clanek` (trigger: „nový článek", „přidej aktualitu") vygeneruje sem `YYYY-MM-DD-slug.md` s IG a FB captionem a seznamem doporučených fotek.

2. **Příprava fotek** — spusť:
   ```bash
   python3 social/prepare_social.py social/2026-04-23-vystava-brno.md
   ```
   Vznikne:
   ```
   social/2026-04-23-vystava-brno/
   ├── ig/     # 1080×1350 (IG carousel portrait)
   └── fb/     # 1200×630 (link preview) + plné rozlišení (album)
   ```

3. **Caption do schránky** — pro rychlý paste v mobilní appce:
   ```bash
   python3 social/prepare_social.py social/2026-04-23-vystava-brno.md --copy ig
   python3 social/prepare_social.py social/2026-04-23-vystava-brno.md --copy fb
   ```

4. **Upload** — AirDrop fotek do telefonu → Instagram/Facebook app → paste caption.

## Závislost

```bash
pip3 install pillow
```

`pbcopy` (--copy) funguje jen na macOS.

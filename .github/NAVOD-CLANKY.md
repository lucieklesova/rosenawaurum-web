# Články z mobilu (GitHub Issue → Claude nebo Codex → pull request)

## Jak to funguje
1. V appce GitHub: **Issues → New**, vyber šablonu:
   - **📰 Nový článek** → Claude (štítku `publikovat`)
   - **📰 Nový článek (Codex)** → OpenAI Codex (štítku `publikovat-codex`)
   Vyplň text a vlož fotky.
2. Šablona přidá štítek → spustí se příslušný workflow.
3. Fotky se stáhnou, zmenší a převedou do webp (`.github/scripts/stahni_fotky.py`).
4. Claude nebo Codex podle skillu `novy-clanek` vytvoří článek (CZ/EN/DE, karty, RSS, sitemap).
5. Vznikne pull request (`clanek/issue-N` u Claude, `clanek-codex/issue-N` u Codexu) + komentář s texty pro IG/FB. Vercel k němu udělá náhled.
6. Kontrola na mobilu → **Merge** → článek je na webu a issue se zavře.
   Úpravy: komentář v PR začínající `@claude …` nebo `@codex …`.

Oba workflow můžou existovat vedle sebe. Nespouštěj oba štítky na stejném issue, jinak vzniknou dva PR.

## Jednorázové nastavení
1. **Secret ke Claudovi** (Settings → Secrets and variables → Actions → New repository secret), jeden z nich:
   - `CLAUDE_CODE_OAUTH_TOKEN` – z předplatného Pro/Max: v terminálu `claude setup-token`
   - `ANTHROPIC_API_KEY` – z console.anthropic.com (platí se za použití)
2. **Secret k Codexu** (pro šablonu Codex):
   - `OPENAI_API_KEY` – z platform.openai.com
3. **Settings → Actions → General → Workflow permissions**: zaškrtni *Read and write permissions*
   a *Allow GitHub Actions to create and approve pull requests*.
4. **Štítky**: `publikovat` a `publikovat-codex` (Issues → Labels → New label).
5. Vercel: náhledy (Preview Deployments) pro větve musí být zapnuté – ve výchozím stavu jsou.

## Když něco selže
- Workflow napíše do issue odkaz na log. Znovu spustíš odebráním a přidáním štítku (`publikovat` nebo `publikovat-codex`).
- Spouští se jen pro vlastníka repa (`lucieklesova`) – cizí issue nic nespustí.

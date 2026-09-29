# Články z mobilu (GitHub Issue → Claude → pull request)

## Jak to funguje
1. V appce GitHub: **Issues → New → 📰 Nový článek**, vyplníš text a vložíš fotky.
2. Šablona přidá štítek `publikovat` → spustí se workflow `novy-clanek.yml`.
3. Fotky se stáhnou, zmenší a převedou do webp (`.github/scripts/stahni_fotky.py`).
4. Claude podle skillu `novy-clanek` vytvoří článek (CZ/EN/DE, karty, RSS, sitemap).
5. Vznikne pull request `clanek/issue-N` + komentář s texty pro IG/FB. Vercel k němu udělá náhled.
6. Kontrola na mobilu → **Merge** → článek je na webu a issue se zavře.
   Úpravy: komentář v PR začínající `@claude …` (workflow `claude-upravy.yml`).

## Jednorázové nastavení
1. **Secret s přístupem ke Claudovi** (Settings → Secrets and variables → Actions → New repository secret), jeden z nich:
   - `CLAUDE_CODE_OAUTH_TOKEN` – z předplatného Pro/Max: v terminálu `claude setup-token`
   - `ANTHROPIC_API_KEY` – z console.anthropic.com (platí se za použití)
2. **Settings → Actions → General → Workflow permissions**: zaškrtni *Read and write permissions*
   a *Allow GitHub Actions to create and approve pull requests*.
3. **Štítek** `publikovat`: Issues → Labels → New label.
4. Vercel: náhledy (Preview Deployments) pro větve musí být zapnuté – ve výchozím stavu jsou.

## Když něco selže
- Workflow napíše do issue odkaz na log. Znovu spustíš odebráním a přidáním štítku `publikovat`.
- Spouští se jen pro vlastníka repa (`lucieklesova`) – cizí issue nic nespustí.

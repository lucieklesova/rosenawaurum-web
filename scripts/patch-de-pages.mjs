/**
 * Patch /de/*.html for German locale (meta, hreflang, lang attr).
 * Run: node scripts/patch-de-pages.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const deDir = path.join(__dirname, "..", "de");

const meta = {
  "index.html": {
    title:
      "Rosenaw Aurum – Golden-Retriever-Zucht | Beskiden, Mähren, Tschechien",
    description:
      "Familienzucht Golden Retriever FCI in den Beskiden in Mähren. Welpen aus Hausaufzucht mit Fokus auf Gesundheit, Wesen und lebenslangen Kontakt. Vigantice bei Rožnov pod Radhoštěm.",
    ogTitle: "Rosenaw Aurum – Golden-Retriever-Zucht",
    ogDescription:
      "Familienzucht Golden Retriever FCI in den Beskiden. Welpen aus Hausaufzucht mit Fokus auf Gesundheit und Wesen.",
    canonical: "https://rosenawaurum.cz/de/index.html",
  },
  "about-breed.html": {
    title: "Golden Retriever – alles über die Rasse | Rosenaw Aurum",
    description:
      "Geschichte, Wesen, Gesundheit und Pflege des Golden Retriever. Tipps zur Wahl eines verantwortungsvollen Züchters.",
    ogTitle: "Golden Retriever – alles über die Rasse",
    ogDescription: "Alles Wichtige über den Golden Retriever vor der Anschaffung.",
    canonical: "https://rosenawaurum.cz/de/about-breed.html",
  },
  "faq.html": {
    title: "FAQ – Golden Retriever Welpen | Rosenaw Aurum",
    description: "Häufige Fragen zu Welpen, Gesundheitstests und unserer Zucht.",
    ogTitle: "FAQ – Rosenaw Aurum",
    ogDescription: "Antworten auf häufige Fragen zu unserer Zucht und Welpen.",
    canonical: "https://rosenawaurum.cz/de/faq.html",
  },
  "pregnancy-calculator.html": {
    title: "Hundeträchtigkeitsrechner | Rosenaw Aurum",
    description:
      "Kostenloser Trächtigkeitsrechner: Geburtstermin, Ultraschall, Röntgen und Welpenentwicklung Woche für Woche.",
    ogTitle: "Hundeträchtigkeitsrechner",
    ogDescription: "Geburtstermin und Welpenentwicklung nach Deckdatum berechnen.",
    canonical: "https://rosenawaurum.cz/de/pregnancy-calculator.html",
  },
};

for (const file of fs.readdirSync(deDir).filter((f) => f.endsWith(".html"))) {
  let html = fs.readFileSync(path.join(deDir, file), "utf8");
  const m = meta[file];
  if (!m) continue;

  html = html.replace(/<html lang="en">/, '<html lang="de">');
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${m.title}</title>`
  );
  html = html.replace(
    /content="[^"]*" name="description"/,
    `content="${m.description}" name="description"`
  );
  html = html.replace(
    /<link href="https:\/\/rosenawaurum\.cz\/en\/[^"]+" rel="canonical"\/>/,
    `<link href="${m.canonical}" rel="canonical"/>`
  );
  html = html.replace(
    /<link href="https:\/\/rosenawaurum\.cz\/en\/[^"]+" hreflang="en" rel="alternate"\/>/,
    `<link href="https://rosenawaurum.cz/en/${file === "about-breed.html" ? "about-breed.html" : file === "pregnancy-calculator.html" ? "pregnancy-calculator.html" : file}" hreflang="en" rel="alternate"/>`
  );
  if (!html.includes('hreflang="de"')) {
    html = html.replace(
      /(<link href="https:\/\/rosenawaurum\.cz\/" hreflang="cs" rel="alternate"\/>)/,
      `$1\n<link href="${m.canonical}" hreflang="de" rel="alternate"/>`
    );
  }
  html = html.replace(/content="en_GB" property="og:locale"/, 'content="de_DE" property="og:locale"');
  html = html.replace(
    /content="https:\/\/rosenawaurum\.cz\/en\/[^"]+" property="og:url"/,
    `content="${m.canonical}" property="og:url"`
  );
  html = html.replace(
    /content="Rosenaw Aurum – Golden Retriever kennel" property="og:title"/,
    `content="${m.ogTitle}" property="og:title"`
  );
  html = html.replace(
    /content="Family FCI Golden Retriever kennel in the Beskydy Mountains, Moravia\. Puppies raised at home with focus on health and temperament\." property="og:description"/,
    `content="${m.ogDescription}" property="og:description"`
  );
  html = html.replace(
    /if\(l&&l!=="cs"\)/,
    'if(l&&l!=="de")'
  );
  // Active DE button in switcher
  html = html.replace(
    /class="lang-btn lang-btn--active" data-lang="en"/g,
    'class="lang-btn" data-lang="en"'
  );
  html = html.replace(
    /class="lang-btn" data-lang="de"/,
    'class="lang-btn lang-btn--active" data-lang="de"'
  );

  fs.writeFileSync(path.join(deDir, file), html);
  console.log("Patched", file);
}

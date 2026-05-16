/**
 * Generates German (de) translations and injects into script.js.
 * Run: node scripts/gen-de-translations.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const en = JSON.parse(fs.readFileSync(path.join(__dirname, "en-keys.json"), "utf8"));

/** @type {Record<string, string>} */
const DE = {
  navHome: "Startseite",
  navAbout: "Über uns",
  navGirls: "Unsere Hündinnen",
  navPuppies: "Welpen",
  navGallery: "Galerie",
  navNews: "Aktuelles",
  navDocs: "Dokumente",
  navBreed: "Über die Rasse",
  navContact: "Kontakt",
  navCalc: "Trächtigkeitsrechner",
  cookieTitle: "Cookies & Datenschutz",
  cookieText:
    'Wir verwenden Cookies und Dienste von Drittanbietern (Google Fonts, Google Maps, Google Analytics, eingebettete YouTube-Videos), die Ihre IP-Adresse verarbeiten können. Sie entscheiden, was Sie zulassen möchten. <a href="/ochrana-osobnich-udaju.html">Mehr Informationen</a>.',
  cookieAccept: "Alle akzeptieren",
  cookieReject: "Alle ablehnen",
  cookieSettings: "Einstellungen",
  cookieSettingsTitle: "Cookie-Einstellungen",
  cookieBack: "Zurück",
  cookieSave: "Auswahl speichern",
  cookieCatNecessary: "Notwendig",
  cookieCatNecessaryDesc:
    "Erforderlich für die Grundfunktionen der Website — Speicherung der Sprache und Ihrer Cookie-Auswahl. Immer aktiv.",
  cookieCatAnalytics: "Analytik",
  cookieCatAnalyticsDesc:
    "Google Analytics — anonyme Nutzungsstatistiken, die uns helfen, die Website zu verbessern.",
  cookieCatExternal: "Externe Inhalte",
  cookieCatExternalDesc:
    "Google Fonts für schönere Typografie, Google Maps im Kontaktbereich und eingebettete YouTube-Videos in Artikeln.",
  cookieFooterLink: "Cookie-Einstellungen",
  mapBlocked:
    "Um die Karte anzuzeigen, müssen Sie Cookies von Drittanbietern akzeptieren.",
  heroTitle:
    "Golden Retriever mit\u00a0Liebe im Herzen der\u00a0Beskiden aufgezogen.",
  heroSubtitle:
    "Eine kleine Familienzucht FCI aus den Beskiden in\u00a0Mähren, nahe Rožnov pod Radhoštěm. Welpen wachsen zu Hause, unter Menschen, mit Fokus auf Gesundheit, ausgeglichenes Wesen und\u00a0solide Grundlagen.",
  heroCtaAbout: "Unser Ansatz",
  heroCtaPuppies: "Aktueller / geplanter Wurf",
  whyUsTitle: "Warum wir?",
  whyUsHomeTitle: "Häusliche Umgebung",
  whyUsHomeText: "Unsere Welpen wachsen bei uns zu Hause auf, nicht im Zwinger.",
  whyUsHealthTitle: "Gesundheit an erster Stelle",
  whyUsHealthText: "Gründliche Untersuchungen, tierärztliche Betreuung, verantwortungsvolle Verpaarung.",
  whyUsHomeLink: "Mehr über Welpen →",
  whyUsHealthLink: "Gesundheitsdokumentation →",
  whyUsContactTitle: "Lebenslanger Kontakt",
  whyUsContactText: "Wir bleiben mit allen unseren Hundefamilien in Kontakt.",
  whyUsContactLink: "Schreiben Sie uns →",
  aboutTitle: "Rosenaw Aurum",
  aboutIntro1:
    'Der Name unserer Zucht <strong>Rosenaw Aurum</strong> trägt ein Stück des Ortes, aus dem wir kommen, und die Liebe zur Rasse in sich. „Rosenaw“ leitet sich vom historischen Namen der Stadt Rožnov pod Radhoštěm ab und „Aurum“ bedeutet auf Latein Gold – genau das, was Golden Retriever für uns sind.',
  aboutIntro2:
    'Der allererste war <strong>Dexík</strong>. Ein Golden Retriever ohne Abstammungsnachweis, aber mit einem riesigen Herzen. Er lehrte uns, wie unglaublich liebenswert, treu und sensibel diese Rasse ist. Dank ihm haben wir uns verliebt.',
  aboutIntro3:
    'Nach seinem Abschied kam <strong>Alma</strong>. Unsere Traumhündin, die uns weiterbrachte – nicht nur zur Zucht, sondern auch zu einem tieferen Verständnis dessen, was ein Golden Retriever sein kann.',
  aboutPhilosophy:
    "Wir stehen erst am Anfang unserer Züchterreise. Wir lernen, sammeln Erfahrungen und möchten diesen Weg ehrlich gehen – mit Respekt vor den Hunden und der Rasse.",
  aboutGoal:
    "Unser Ziel ist es, ausgeglichene, gesunde und soziale Hunde zu züchten, die sich im Ausstellungsring, auf der Jagd und mitten im Familienwohnzimmer gleichermaßen wohlfühlen.",
  aboutClubs:
    'Rosenaw Aurum ist eine registrierte Zucht von <a href="https://www.fci.be/" target="_blank" rel="noopener noreferrer">FCI</a>, Mitglied im <a href="https://www.kchls.cz/" target="_blank" rel="noopener noreferrer">KCHLS</a> und im <a href="https://www.retriever-klub.cz/" target="_blank" rel="noopener noreferrer">Retriever Klub CZ</a>.',
  girlsTitle: "Unsere Hündinnen",
  girlsIntro:
    "Hier finden Sie nach und nach alle unsere Golden Girls – von jungen Hoffnungsträgerinnen bis zu erfahrenen Zuchthündinnen und Senioren.",
  almaBasic: "geb. 27. 1. 2024 • Golden Retriever, Hündin • ČLP/GR/25733",
  almaCharacterTitle: "Wesen",
  almaPersonality:
    "<strong>Alma</strong> ist unsere Traumhündin des Golden Retriever. Sie kam wie ein Wirbelwind in unser Leben und wurde schnell zur Begleiterin für jede Gelegenheit – Ausflüge, Urlaube, Sport und ruhige Abende zu Hause.",
  almaPersonality2:
    "Sie hat die bemerkenswerte Gabe, die Energie anderer wahrzunehmen – ob Menschen oder Hunde – und sich ihr natürlich anzupassen. Dadurch ist sie unglaublich unkonfliktfrei und harmonisch. Sie liebt alle bedingungslos, ist freundlich und offen, und zu Hause wunderbar ruhig.",
  almaPersonality3:
    'Gleichzeitig steckt in ihr der verspielte „Teufel“, wenn es Zeit für Action ist.',
  almaTrait1: "Freundlich",
  almaTrait2: "Empathisch",
  almaTrait3: "Unkonfliktfrei",
  almaTrait4: "Aufmerksam",
  almaTrait5: "Ruhig zu Hause",
  almaTrait6: "Aktiv draußen",
  almaTrait7: "Liebt alle",
  almaTrait8: "Liebt Wasser",
  almaTrait9: "Liebt Apportieren",
  almaHealthTitle: "Gesundheit",
  healthCatRtg: "Röntgenuntersuchungen",
  healthCatDna: "Genetische (DNA-)Tests",
  healthNeg: "frei",
  almaHeightLabel: "Widerrist:",
  almaBiteLabel: "Gebiss:",
  almaBiteValue: "vollständiges Scherengebiss",
  almaTitlesTitle: "Ausstellungen & Prüfungen",
  titlesCatShows: "Ausstellungen",
  titlesCatTrials: "Arbeitsprüfungen",
  almaTitlePuppy: "Welpenklasse",
  almaTitleJunior: "Jüngstenklasse",
  almaTitleYoung: "Jugendklasse",
  almaTitleOpen: "Offene Klasse",
  almaTitlePrep: "in Vorbereitung",
  almaTitleWtPrep: "in Vorbereitung (E)",
  almaDocsLink: "Gesundheitsdokumentation →",
  almaPedigreeTitle: "Ahnentafel",
  almaK9dataLink: "Vollständige Ahnentafel auf K9data.org →",
  almaBreedingInfo:
    'Züchter: Ing. František Vacek, <a href="https://www.bohemica-aurum.cz/" target="_blank" rel="noopener noreferrer">Bohemica Aurum</a> • Besitzerin: Lucie Klesová',
  puppiesTitle: "Welpen Rosenaw Aurum",
  puppiesIntro:
    "Für uns ist ein Welpe ein vollwertiges Familienmitglied. Von den ersten Tagen an ist er in engem Kontakt mit uns, unseren Kindern und dem Alltag im Haushalt, um bestmöglich auf sein neues Zuhause vorbereitet zu sein.",
  puppiesApproachTitle: "Wie unsere Welpen aufwachsen",
  puppiesApproachText1:
    "Unsere Welpen werden in familiärer Umgebung aufgezogen. Schritt für Schritt lernen sie verschiedene Geräusche, Untergründe, Menschen und Situationen kennen – von ruhigen Abenden auf dem Sofa bis zu Gartenerkundungen und kurzen Autofahrten.",
  puppiesApproachText2:
    "Neuen Besitzern beraten wir gerne bei Pflege, Erziehung und Training. Unsere Welpen verlassen uns nicht mit leeren Pfoten – sie nehmen ein Stück unseres Herzens mit, und wir bleiben ihr ganzes Leben lang in Kontakt.",
  puppiesPackTitle: "Was Ihr Welpe von uns mitbekommt",
  puppiesPackList:
    "Kaufvertrag und FCI-Abstammungsnachweis; Impfpass / Heimtierausweis mit gültiger Impfung und Entwurmung; Starterpaket Futter und Lieblingsspielzeug; ausführliche Informationen zur Pflege in den ersten Wochen und Monaten",
  puppiesStatusTitle: "Geplanter Wurf",
  puppiesStatusPill: "Frühjahr/Sommer 2027",
  puppiesPlannedLabel: "Erwarten",
  puppiesPlannedDate: "Frühjahr / Sommer 2027",
  puppiesPlannedText:
    "Wir bereiten Almas ersten Wurf vor. Details zum Deckrüden veröffentlichen wir, sobald alles bestätigt ist.",
  puppiesPlannedCta: "Ich interessiere mich für einen Welpen",
  puppiesPhotoCaption:
    'Foto aus der Mutterzucht <a href="https://www.bohemica-aurum.cz/kopie-z-apollo/" target="_blank" rel="noopener noreferrer">Bohemica Aurum</a> — <a href="https://www.bohemica-aurum.cz/kopie-z-apollo/" target="_blank" rel="noopener noreferrer">Welpentagebuch</a>',
  puppiesArchiveTitle: "Wurfarchiv",
  puppiesArchiveText:
    "Zu jedem Wurf finden Sie hier eine Übersicht der Eltern, Geburtsdaten und Links zu Fotogalerien. Derzeit haben wir noch keine aufgezogenen Würfe.",
  galleryTitle: "Galerie",
  galleryIntro:
    "Momente aus unserem Alltag, Ausflügen, Training und ersten Ausstellungen. Fotos werden nach und nach ergänzt.",
  galleryFilterAll: "Alle",
  galleryFilterGirls: "Unsere Hündinnen",
  galleryFilterPuppies: "Welpen",
  galleryFilterShows: "Ausstellungen & Prüfungen",
  galleryFilterLife: "Leben mit uns",
  galleryFilterVideos: "Videos",
  galleryShowMore: "Mehr Fotos anzeigen",
  galleryPlaceholderGirls: "Alma in Bewegung auf der Wiese",
  galleryPlaceholderLife: "Familienfoto vom Urlaub",
  galleryPlaceholderShows: "Ausstellungsring – Jugendklasse",
  newsTitle: "Aktuelles",
  newsIntro:
    "Kurze Nachrichten über unsere Hunde, geplante Würfe, Ausstellungen, Prüfungen und kleine Freuden des gemeinsamen Lebens.",
  newsMonth0: "Apr",
  newsTitle0: "Unser erster Working Test – Šilheřovice",
  newsExcerpt0:
    "Alma absolvierte ihren ersten Working Test in Šilheřovice. Klasse E, internationale Richter und viele neue Erfahrungen aus dem Wald.",
  newsMonth1: "Mär",
  newsTitle1: "Almas erster Auftritt in der offenen Klasse – Provodovice",
  newsExcerpt1:
    "Alma trat erstmals in die offene Klasse ein und gewann sofort V1, Klassensiegerin, Regionalssiegerin und 3. Platz in FCI-Gruppe 8!",
  newsMonth2: "Jul",
  newsTitle2: "Alma mit Mama auf der Ausstellung in Bordovice",
  newsExcerpt2:
    "Bei der regionalen Klubaustellung Hubertka 2025 trat Alma zum letzten Mal in der Jugendklasse an. Bewertung V2 mit schönem Richterbericht.",
  newsMonth3: "Jun",
  newsTitle3: "Alma bestand die OVVR mit Bestnote",
  newsExcerpt3:
    "Bei der Prüfung der angeborenen Begabung zum Apportieren in Ústí u Hranic bestand Alma alle sechs Disziplinen mit voller Punktzahl.",
  newsAllLink: "Alle Neuigkeiten \u2192",
  newsPageTitle: "Aktuelles",
  newsBackLink: "\u2190 Zurück zur Startseite",
  articleBack: "\u2190 Zurück zu Aktuelles",
  shareLabel: "Teilen:",
  shareCopy: "Link kopieren",
};

// Load article & page translations from companion file
const articles = await import("./de-translations-articles.mjs");
Object.assign(DE, articles.default);

const pages = await import("./de-translations-pages.mjs");
Object.assign(DE, pages.default);

// Fill any missing keys from English (should be none)
const de = { ...en };
for (const [key, value] of Object.entries(DE)) {
  de[key] = value;
}

const missing = Object.keys(en).filter((k) => !DE[k]);
if (missing.length) {
  console.warn("Missing DE translations for:", missing.length, "keys");
  console.warn(missing.slice(0, 20).join(", "));
}

function jsString(val) {
  return JSON.stringify(val);
}

function formatDeBlock(obj) {
  const lines = ["  de: {"];
  for (const key of Object.keys(obj)) {
    lines.push(`    ${key}: ${jsString(obj[key])},`);
  }
  lines.push("  },");
  return lines.join("\n");
}

const scriptPath = path.join(root, "script.js");
let script = fs.readFileSync(scriptPath, "utf8");

const deBlock = formatDeBlock(de);

if (script.includes("  de: {")) {
  script = script.replace(/\n  de: \{[\s\S]*?\n  \},/, "\n" + deBlock);
} else {
  script = script.replace(/\n  \},\n\};/, "\n  },\n\n" + deBlock + "\n};");
}

script = script.replace(
  "// Jednoduché i18n – čeština a angličtina.",
  "// Jednoduché i18n – čeština, angličtina a němčina."
);

fs.writeFileSync(scriptPath, script);
fs.writeFileSync(path.join(__dirname, "de-keys.json"), JSON.stringify(de, null, 2));
console.log("Injected", Object.keys(de).length, "DE translations into script.js");

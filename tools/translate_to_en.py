#!/usr/bin/env python3
"""
Generates EN version of a CS page by:
1. Extracting translations.en from script.js
2. Replacing [data-i18n] element contents with EN translation
3. Rewriting head metadata (title, description, canonical, hreflang, og:*)
4. Fixing relative paths for /en/ subdirectory
5. Rewriting links between translated pages and back to CS

Usage: python3 tools/translate_to_en.py <source.html> <output_en_path>
       python3 tools/translate_to_en.py index.html en/index.html
"""
import json
import re
import sys
from pathlib import Path

from bs4 import BeautifulSoup, NavigableString

ROOT = Path(__file__).resolve().parent.parent

# Pages that have an EN counterpart. Maps CS filename -> EN filename (both relative to site root).
TRANSLATED_PAGES = {
    "index.html": "en/index.html",
    "o-plemeni.html": "en/about-breed.html",
    # pregnancy-calculator.html and faq.html: TODO — need manual translation of FAQPage JSON-LD
    # and page-specific hardcoded Czech content. Add back here when ready.
}

# Manual overrides for head meta (by source filename).
META = {
    "index.html": {
        "title": "Rosenaw Aurum – Golden Retriever kennel | Beskydy Mountains, Moravia, Czech Republic",
        "description": "Family Golden Retriever kennel FCI in the Beskydy Mountains, Moravia. Golden retriever puppies raised at home with focus on health, temperament and lifetime contact. Vigantice near Rožnov pod Radhoštěm.",
        "keywords": "golden retriever kennel, golden retriever puppies Czech Republic, FCI golden retriever breeder, golden retriever Moravia, Beskydy golden retriever, family raised golden retriever, pedigree golden retriever, Rosenaw Aurum",
        "og_title": "Rosenaw Aurum – Golden Retriever kennel",
        "og_description": "Family FCI Golden Retriever kennel in the Beskydy Mountains, Moravia. Puppies raised at home with focus on health and temperament.",
        "tw_title": "Rosenaw Aurum – Golden Retriever kennel",
        "tw_description": "Family FCI Golden Retriever kennel in the Beskydy Mountains.",
    },
    "kalkulacka-brezosti-feny.html": {
        "title": "Dog pregnancy calculator 🐾 Due date + puppy development week by week | Rosenaw Aurum",
        "description": "Free online dog pregnancy calculator – enter the mating date and instantly get the due date, key dates (ultrasound, x-ray) and track puppy development week by week. For breeders and dog owners.",
        "keywords": "dog pregnancy calculator, dog gestation calculator, dog due date calculator, dog pregnancy length, puppy development, golden retriever pregnancy, how long is a dog pregnant",
        "og_title": "Dog pregnancy calculator – due date + puppy development free",
        "og_description": "Online dog pregnancy calculator. Enter mating date → due date, ultrasound, x-ray and puppy development week by week. Free for breeders.",
        "tw_title": "Dog pregnancy calculator – due date + puppy development",
        "tw_description": "Free online dog pregnancy calculator. Enter mating date and get due date, ultrasound, x-ray, puppy development week by week.",
    },
    "o-plemeni.html": {
        "title": "About the Golden Retriever breed – character, health, history | Rosenaw Aurum",
        "description": "Everything about the Golden Retriever breed: history, temperament, health, care and living with a golden. Written by a Czech FCI breeder.",
        "keywords": "golden retriever breed, golden retriever character, golden retriever health, golden retriever history, living with golden retriever, golden retriever care",
        "og_title": "About the Golden Retriever breed",
        "og_description": "Everything about the Golden Retriever: history, temperament, health, care. From a Czech FCI breeder.",
        "tw_title": "About the Golden Retriever breed",
        "tw_description": "History, temperament, health and care of the Golden Retriever.",
    },
    "faq.html": {
        "title": "FAQ – Golden Retriever breeding, puppies and health | Rosenaw Aurum",
        "description": "Frequently asked questions about our Golden Retriever kennel, the breed, health testing and puppy care. Answered by a Czech FCI breeder.",
        "keywords": "golden retriever FAQ, golden retriever puppy questions, golden retriever breeder FAQ, golden retriever health questions",
        "og_title": "FAQ – Golden Retriever breeding and puppies",
        "og_description": "Frequently asked questions about our kennel, the breed, health testing and puppy care.",
        "tw_title": "FAQ – Golden Retriever breeding and puppies",
        "tw_description": "FAQ about our kennel, the breed, health testing and puppy care.",
    },
}


def extract_en_translations() -> dict:
    """Use Node.js to eval script.js and dump translations.en as JSON."""
    import subprocess
    script_path = ROOT / "script.js"
    node_prog = """
const fs = require('fs');
const src = fs.readFileSync(%s, 'utf8');
const m = src.match(/const\\s+translations\\s*=\\s*(\\{[\\s\\S]*?\\n\\});/);
if (!m) { console.error('cannot find translations'); process.exit(1); }
const t = eval('(' + m[1] + ')');
process.stdout.write(JSON.stringify(t.en));
""" % json.dumps(str(script_path))
    result = subprocess.run(
        ["node", "-e", node_prog],
        capture_output=True, text=True, check=True,
    )
    return json.loads(result.stdout)


def rewrite_url(url: str, source_file: str) -> str:
    """Adjust a relative URL from source CS page → /en/ subdir."""
    if not url:
        return url
    # Absolute or hash or mailto/tel: leave as-is
    if re.match(r"^(https?:|mailto:|tel:|#|data:)", url):
        return url
    # Check if it's a link to another translated page
    for cs_name, en_name in TRANSLATED_PAGES.items():
        base = cs_name
        if url == base or url.startswith(base + "#") or url.startswith(base + "?"):
            # Point to EN counterpart (relative from /en/)
            rest = url[len(base):]
            en_file = Path(en_name).name  # "index.html" etc.
            return en_file + rest
    # Anchor-only internal links stay
    if url.startswith("#"):
        return url
    # For root-relative /path → keep absolute
    if url.startswith("/"):
        return url
    # Otherwise it's a relative path — needs ../ prefix
    return "../" + url


def apply_translations(html: str, source_file: str, translations_en: dict) -> str:
    soup = BeautifulSoup(html, "html.parser")

    # <html lang="en">
    if soup.html:
        soup.html["lang"] = "en"

    meta = META.get(source_file, {})
    site_url = "https://rosenawaurum.cz"
    en_path = "/" + TRANSLATED_PAGES[source_file]

    # Title
    if soup.title and "title" in meta:
        soup.title.string = meta["title"]

    # Head meta/link
    for tag in soup.find_all(["meta", "link"]):
        name = tag.get("name", "").lower()
        prop = tag.get("property", "").lower()
        rel = tag.get("rel", [])
        if isinstance(rel, list):
            rel = " ".join(rel).lower()
        else:
            rel = rel.lower()

        if name == "description" and "description" in meta:
            tag["content"] = meta["description"]
        elif name == "keywords" and "keywords" in meta:
            tag["content"] = meta["keywords"]
        elif prop == "og:title" and "og_title" in meta:
            tag["content"] = meta["og_title"]
        elif prop == "og:description" and "og_description" in meta:
            tag["content"] = meta["og_description"]
        elif prop == "og:url":
            tag["content"] = site_url + en_path
        elif prop == "og:locale":
            tag["content"] = "en_GB"
        elif prop == "og:locale:alternate":
            tag["content"] = "cs_CZ"
        elif name == "twitter:title" and "tw_title" in meta:
            tag["content"] = meta["tw_title"]
        elif name == "twitter:description" and "tw_description" in meta:
            tag["content"] = meta["tw_description"]
        elif rel == "canonical":
            tag["href"] = site_url + en_path
        elif rel == "alternate" and tag.get("hreflang"):
            hl = tag["hreflang"]
            if hl == "cs":
                tag["href"] = site_url + "/" + source_file if source_file != "index.html" else site_url + "/"
            elif hl == "en":
                tag["href"] = site_url + en_path
            elif hl == "x-default":
                tag["href"] = site_url + "/" + source_file if source_file != "index.html" else site_url + "/"

    # Rewrite [data-i18n] content
    for el in soup.select("[data-i18n]"):
        key = el["data-i18n"]
        if key not in translations_en:
            continue
        translation = translations_en[key]
        is_html = el.has_attr("data-i18n-html")
        # Special list case: any UL with data-i18n + semicolon-separated translation
        if el.name == "ul" and ";" in translation:
            el.clear()
            for item in translation.split(";"):
                item = item.strip()
                if item:
                    li = soup.new_tag("li")
                    li.string = item
                    el.append(li)
            continue
        # Preserve child elements that should stay (icons inside buttons etc.)
        # Strategy: remove only NavigableString children and replace with translation.
        # If the element has child tags we want to preserve (e.g. SVG icon), keep them and
        # replace only text nodes.
        preserved_children = [c for c in el.children if not isinstance(c, NavigableString)]
        if preserved_children and not is_html:
            # Remove text nodes, keep children, append translation as text after the icon
            for c in list(el.children):
                if isinstance(c, NavigableString):
                    c.extract()
            el.append(NavigableString(" " + translation))
        else:
            el.clear()
            if is_html:
                fragment = BeautifulSoup(translation, "html.parser")
                for child in list(fragment.children):
                    el.append(child)
            else:
                el.append(NavigableString(translation))

    # Rewrite href/src for relative paths
    for tag in soup.find_all(True):
        for attr in ("href", "src"):
            if tag.has_attr(attr):
                tag[attr] = rewrite_url(tag[attr], source_file)
        if tag.has_attr("data-src"):
            tag["data-src"] = rewrite_url(tag["data-src"], source_file)
        if tag.has_attr("srcset"):
            # Simple srcset rewrite
            parts = []
            for part in tag["srcset"].split(","):
                part = part.strip()
                bits = part.split(None, 1)
                bits[0] = rewrite_url(bits[0], source_file)
                parts.append(" ".join(bits))
            tag["srcset"] = ", ".join(parts)

    # Skip link text
    skip = soup.select_one("a.skip-link")
    if skip and not skip.has_attr("data-i18n"):
        skip.string = "Skip to content"

    # og:image:alt
    alt_tag = soup.find("meta", attrs={"property": "og:image:alt"})
    if alt_tag:
        alt_tag["content"] = "Alma Bohemica Aurum – Golden Retriever from Rosenaw Aurum kennel"

    # RSS title attribute
    rss = soup.find("link", attrs={"type": "application/rss+xml"})
    if rss:
        rss["title"] = "Rosenaw Aurum – News"

    # Body text substitutions (for static text not wrapped in data-i18n)
    body_subs = [
        ("Vigantice (u Rožnova p. R.), Česká republika", "Vigantice (near Rožnov pod Radhoštěm), Czech Republic"),
    ]
    for tag in soup.find_all(["p", "span", "strong", "em", "li", "h1", "h2", "h3", "h4", "h5", "h6"]):
        if tag.has_attr("data-i18n"):
            continue
        for child in list(tag.children):
            if isinstance(child, NavigableString):
                text = str(child)
                for old, new in body_subs:
                    text = text.replace(old, new)
                if text != str(child):
                    child.replace_with(NavigableString(text))

    # Rewrite JSON-LD CZ phrases to EN
    jsonld_subs = [
        ("Rosenaw Aurum – chovatelská stanice zlatých retrívrů", "Rosenaw Aurum – Golden Retriever kennel"),
        ("Chovatelská stanice zlatých retrívrů v Beskydech na Moravě", "Golden Retriever kennel in the Beskydy Mountains, Moravia"),
        ("Rodinná chovatelská stanice zlatých retrívrů registrovaná u FCI v Beskydech na Moravě. Chov s důrazem na zdraví, povahu a rodinný život.",
         "Family Golden Retriever kennel registered with FCI in the Beskydy Mountains, Moravia. Breeding with focus on health, temperament and family life."),
        ('"name": "Morava"', '"name": "Moravia"'),
        ('"name": "Zlínský kraj"', '"name": "Zlín Region"'),
        ('"name": "Moravskoslezský kraj"', '"name": "Moravian-Silesian Region"'),
        ('"name": "Česká republika"', '"name": "Czech Republic"'),
        # SiteNavigationElement
        ('"name": "O nás"', '"name": "About"'),
        ('"name": "Naše feny"', '"name": "Our Girls"'),
        ('"name": "Štěňata"', '"name": "Puppies"'),
        ('"name": "Galerie"', '"name": "Gallery"'),
        ('"name": "Aktuality"', '"name": "News"'),
        ('"name": "O plemeni"', '"name": "About the breed"'),
        ('"name": "Kalkulačka březosti"', '"name": "Pregnancy calculator"'),
        ('"name": "Kontakt"', '"name": "Contact"'),
        # URLs: CS homepage anchors stay; page URLs swap to /en/
        ("https://rosenawaurum.cz/#", "https://rosenawaurum.cz/en/index.html#"),
        ("https://rosenawaurum.cz/aktuality.html", "https://rosenawaurum.cz/aktuality.html"),  # untranslated; keep
        ("https://rosenawaurum.cz/o-plemeni.html", "https://rosenawaurum.cz/en/about-breed.html"),
        ("https://rosenawaurum.cz/kalkulacka-brezosti-feny.html", "https://rosenawaurum.cz/en/pregnancy-calculator.html"),
        ("https://rosenawaurum.cz/faq.html", "https://rosenawaurum.cz/en/faq.html"),
        # inLanguage
        ('"inLanguage": ["cs", "en"]', '"inLanguage": ["en", "cs"]'),
        ('"inLanguage": "cs"', '"inLanguage": "en"'),
    ]
    for script_el in soup.find_all("script", attrs={"type": "application/ld+json"}):
        text = script_el.string or ""
        for old, new in jsonld_subs:
            text = text.replace(old, new)
        script_el.string = text

    # Translate common CZ phrases in aria-label, title, alt, data-tooltip attributes
    attr_subs = [
        ("Kalkulačka březosti", "Pregnancy calculator"),
        ("Mapa České republiky", "Map of the Czech Republic"),
        ("zlatý retrívr", "Golden Retriever"),
        ("Zlatý retrívr", "Golden Retriever"),
        ("zlatého retrívra", "Golden Retriever"),
        ("zlatých retrívrů", "Golden Retrievers"),
        ("portrét", "portrait"),
        ("venku v přírodě", "outdoors in nature"),
        ("v přírodě", "in nature"),
        ("celé tělo", "full body"),
        ("pohled zlatého retrívra", "Golden Retriever gaze"),
        ("mezi stromy", "among the trees"),
        ("v trávě", "in the grass"),
        ("detailní záběr", "close-up"),
        ("profil", "profile"),
        ("na louce", "on the meadow"),
        ("ve sněhu", "in the snow"),
        ("pohled do objektivu", "looking at the camera"),
        ("letní portrét", "summer portrait"),
        ("každodenní život", "everyday life"),
        ("na výletě v Beskydech", "on a trip in the Beskydy Mountains"),
        ("Rodinný život se zlatým retrívrem", "Family life with a Golden Retriever"),
        ("při hrách venku", "playing outside"),
        ("odpočívá – pohoda domácího mazlíčka", "resting – pet at peace"),
        ("v lese na procházce", "walking in the forest"),
        ("dobrodružství v přírodě", "adventure in nature"),
        ("u vody", "by the water"),
        ("Alma ve sněhu", "Alma in the snow"),
        ("štěňátko", "puppy"),
        ("procházka v přírodě", "walk in nature"),
        ("na zahradě", "in the garden"),
        ("výlet Beskydy", "Beskydy trip"),
        ("rodina", "family"),
        ("podzim", "autumn"),
        ("kontakt", "contact"),
        ("– portrét", "– portrait"),
        ("– venku", "– outdoors"),
        ("hravé chvíle se zlatým psem", "playful moments with a Golden dog"),
        ("Mapa – Vigantice, Česká republika", "Map – Vigantice, Czech Republic"),
    ]
    for tag in soup.find_all(True):
        for attr in ("alt", "aria-label", "title", "data-tooltip", "data-glightbox"):
            if tag.has_attr(attr):
                v = tag[attr]
                for old, new in attr_subs:
                    v = v.replace(old, new)
                tag[attr] = v
    # SVG <title> elements
    for t in soup.find_all("title"):
        if t.parent and t.parent.name != "head":
            v = t.string or ""
            for old, new in attr_subs:
                v = v.replace(old, new)
            t.string = v

    # Language switcher — swap active state
    for btn in soup.select(".lang-btn"):
        lang = btn.get("data-lang")
        btn["class"] = [c for c in btn.get("class", []) if c != "lang-btn--active"]
        if lang == "en":
            btn["class"].append("lang-btn--active")

    return str(soup)


def main():
    if len(sys.argv) < 2:
        # Default: process all 4
        sources = list(TRANSLATED_PAGES.keys())
    else:
        sources = [sys.argv[1]]

    translations_en = extract_en_translations()
    print(f"Loaded {len(translations_en)} EN translation keys")

    for source in sources:
        src_path = ROOT / source
        out_path = ROOT / TRANSLATED_PAGES[source]
        out_path.parent.mkdir(parents=True, exist_ok=True)
        html = src_path.read_text(encoding="utf-8")
        translated = apply_translations(html, source, translations_en)
        out_path.write_text(translated, encoding="utf-8")
        print(f"  {source} → {out_path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()

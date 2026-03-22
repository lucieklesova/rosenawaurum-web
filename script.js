// Jednoduché i18n – čeština a angličtina.
// Texty jsou uloženy ve dvou objektech a překládají se podle data-i18n atributu.

const translations = {
  cs: {
    navHome: "Domů",
    navAbout: "O nás",
    navGirls: "Naše feny",
    navPuppies: "Štěňata",
    navGallery: "Galerie",
    navNews: "Aktuality",
    navDocs: "Dokumenty",
    navContact: "Kontakt",

    heroTitle: "Rodinný chov zlatých retrívrů s\u00a0respektem k\u00a0životu.",
    heroSubtitle:
      "Malá chovatelská stanice FCI z\u00a0Beskyd, nedaleko Rožnova pod Radhoštěm. Štěňata vyrůstají doma, mezi lidmi, s\u00a0důrazem na zdraví, vyrovnanou povahu a\u00a0pevné zázemí.",
    heroCtaAbout: "Poznat náš přístup",
    heroCtaPuppies: "Aktuální / plánovaný vrh",

    whyUsTitle: "Proč právě my?",
    whyUsHomeTitle: "Domácí prostředí",
    whyUsHomeText: "Štěňata vyrůstají s námi doma, ne v kotci.",
    whyUsHealthTitle: "Zdraví na prvním místě",
    whyUsHealthText: "Pečlivé testy, veterinární péče, odpovědný výběr spojení.",
    whyUsHomeLink: "Více o štěňatech →",
    whyUsHealthLink: "Zdravotní dokumentace →",
    whyUsContactTitle: "Doživotní kontakt",
    whyUsContactText: "Zůstáváme v kontaktu se všemi našimi psími rodinami.",
    whyUsContactLink: "Napište nám →",

    aboutTitle: "O chovatelské stanici Rosenaw Aurum",
    aboutIntro1:
      'Za jménem <strong>Rosenaw Aurum</strong> stojí naše rodina a zlatí retrívři, kteří s námi sdílejí každodenní radosti i starosti. Prvním z nich byl <strong>Dexík</strong> – zlatý retrívr bez průkazu původu, který nás svou přátelskou povahou naučil, jak výjimečné toto plemeno je.',
    aboutIntro2:
      'Po jeho odchodu k nám do života vstoupila <strong>Alma</strong>, vysněná fenečka s průkazem původu, se kterou jsme se vydali na cestu k chovu zlatých retrívrů s důrazem na <strong>zdraví, povahu, pracovní vlohy a rodinný život</strong>. Alminka je pes do každé nepohody – plave, běhá po horách, dovádí s dětmi, ale zároveň dokáže tiše ležet vedle nemocného v pelíšku.',
    aboutPhilosophy:
      'Naším cílem je odchovávat <strong>vyrovnané, zdravé a společenské psy</strong>, kteří se budou cítit stejně dobře na výstavním kruhu, při práci v poli i uprostřed rodinného obýváku. Naše chovatelská stanice Rosenaw Aurum je registrovaná u <a href="https://www.fci.be/" target="_blank" rel="noopener noreferrer">Mezinárodní kynologické federace FCI</a> pod číslem 832/23 a jsme členy <a href="https://www.kchls.cz/" target="_blank" rel="noopener noreferrer">Klubu chovatelů loveckých slídičů (KCHLS)</a> i <a href="https://www.retriever-klub.cz/" target="_blank" rel="noopener noreferrer">Retriever Klubu (RK CZ)</a>.',
    aboutBreederTitle: "Chovatelka",
    aboutBreederText:
      "Jmenuji se Lucie Klesová a psi mě provázejí od dětství. Zlatí retrívři jsou pro mě kombinací klidu, radosti a nevyčerpatelné ochoty spolupracovat. V chovu se opírám o zdraví, povahu a respekt k jednotlivým psím osobnostem.",
    aboutLinkAlma:
      'Podrobnější příběh Almy najdete na stránce mateřské chovatelské stanice <a href="https://www.bohemica-aurum.cz/" target="_blank" rel="noopener noreferrer">Bohemica Aurum</a> a na našem <a href="https://www.instagram.com/almamygoldenlove" target="_blank" rel="noopener noreferrer">Instagramu</a>.',

    girlsTitle: "Naše feny",
    girlsIntro:
      "Postupně zde najdete všechny naše zlaté dámy – od mladých nadějí po zkušené chovné feny a psí seniorky.",
    almaBasic: "nar. 27. 1. 2024 • zlatý retrívr, fena • ČLP/GR/25733",
    almaCharacterTitle: "Povaha",
    almaPersonality:
      '<strong>Alminka</strong> je naše vysněná fenečka zlatého retrívra. Do života k nám vtrhla jako velká voda a velmi rychle se z ní stal pes do každé situace – parťák na výlety, dovolené, sport i klidné večery doma.',
    almaTrait1: "Přátelská",
    almaTrait2: "Učenlivá",
    almaTrait3: "Aktivní",
    almaTrait4: "Klidná doma",
    almaTrait5: "Miluje vodu",
    almaTrait6: "Ráda aportuje",
    almaHealthTitle: "Zdraví",
    healthCatRtg: "RTG vyšetření",
    healthCatDna: "Genetické (DNA) testy",
    healthNeg: "neg.",
    almaHeightLabel: "Výška:",
    almaBiteLabel: "Chrup:",
    almaBiteValue: "úplný nůžkový",
    almaTitlesTitle: "Výstavy a zkoušky",
    titlesCatShows: "Výstavy",
    titlesCatTrials: "Pracovní zkoušky",
    almaTitlePuppy: "Třída štěňat",
    almaTitleJunior: "Třída dorostu",
    almaTitleYoung: "Třída mladých",
    almaTitlePrep: "v přípravě",
    almaDocsLink: "Zdravotní dokumentace →",
    almaPedigreeTitle: "Rodokmen",
    almaK9dataLink: "Kompletní rodokmen na K9data.org →",
    almaBreedingInfo: 'Chovatel: Ing. František Vacek, <a href="https://www.bohemica-aurum.cz/" target="_blank" rel="noopener noreferrer">Bohemica Aurum</a> • Majitel: Lucie Klesová',

    puppiesTitle: "Štěňata Rosenaw Aurum",
    puppiesIntro:
      "Štěně je pro nás plnohodnotný člen rodiny. Od prvních dnů je v úzkém kontaktu s námi, dětmi i běžným chodem domácnosti, aby bylo na nový domov co nejlépe připravené.",
    puppiesApproachTitle: "Jak u nás rostou štěňata",
    puppiesApproachText1:
      "Štěňata odchováváme v rodinném prostředí. Postupně poznávají různé zvuky, povrchy, lidi i situace – od klidných večerů na gauči po výlety po zahradě a krátké výjezdy autem. Důraz klademe na to, aby se cítila bezpečně a zároveň měla možnost objevovat svět.",
    puppiesApproachText2:
      "Novým majitelům rádi poradíme s péčí, výchovou i výcvikem. Naše štěňata od nás neodcházejí s prázdnou – odvážejí si kus našeho srdce a my s nimi zůstáváme v kontaktu po celý jejich život.",
    puppiesPackTitle: "Co si štěně od nás odváží",
    puppiesPackList:
      "kupní smlouva a průkaz původu FCI; očkovací průkaz / pet pas s platným očkováním a odčervením; startovací balíček krmiva a oblíbenou hračku; podrobné informace k péči v prvních týdnech a měsících",
    puppiesPlannedLabel: "Očekáváme",
    puppiesPlannedText:
      "Chystáme první vrh naší Alminky. Podrobnosti o krycím pejskovi zveřejníme, jakmile budeme mít vše potvrzené.",
    puppiesPlannedCta: "Mám zájem o štěně",
    puppiesArchiveTitle: "Archiv vrhů",
    puppiesArchiveText:
      "Po jednotlivých vrzích zde najdete přehled rodičů, data narození a odkazy na fotogalerie. V tuto chvíli ještě žádné odchované vrhy nemáme.",

    galleryTitle: "Galerie",
    galleryIntro:
      "Momentky z našeho každodenního života, výletů, tréninků i prvních výstav. Fotografie postupně doplníme.",
    galleryFilterAll: "Vše",
    galleryFilterGirls: "Naše feny",
    galleryFilterPuppies: "Štěňata",
    galleryFilterShows: "Výstavy & zkoušky",
    galleryFilterLife: "Ze života s námi",
    galleryFilterVideos: "Videa",
    galleryShowMore: "Zobrazit více fotek",
    galleryPlaceholderGirls: "Fotografie Almy v pohybu na louce",
    galleryPlaceholderLife: "Společná fotografie s rodinou na dovolené",
    galleryPlaceholderShows: "Výstavní kruh – třída mladých",

    newsTitle: "Aktuality",
    newsIntro:
      "Krátké zprávy o našich psech, plánovaných vrzích, výstavách, zkouškách a drobných radostech ze společného života.",
    newsAllLink: "Všechny aktuality \u2192",
    newsPageTitle: "Aktuality",
    newsBackLink: "\u2190 Zpět na hlavní stránku",
    docsTitle: "Dokumenty",
    docsIntro:
      'Zde najdete kompletní zdravotní dokumentaci naší fenky <strong>Almy Bohemica Aurum</strong>. Transparentnost výsledků je pro nás samozřejmostí – chceme, aby si každý zájemce o štěně mohl vše ověřit.',
    docsPedigreeTitle: "Rodokmen",
    docsPedigree: '<strong>Průkaz původu FCI</strong> – Alma Bohemica Aurum, ČLP/GR/25733',
    docsXrayTitle: "RTG vyšetření",
    docsXrayMeta: "Vyšetřeno 3. 2. 2025, MVDr Marek Pepřík, Opava",
    docsHdEd: '<strong>DKK + DLK</strong> – HD B (hraniční), ED 0/0 (bez nálezu)',
    docsSaLtv: '<strong>SA + LTV</strong> – spondylóza 0 (negativní), LTV 0 (negativní)',
    docsOcd: '<strong>OCD ramenních kloubů</strong> – nepostižen (obě končetiny clear)',
    docsGeneticsTitle: "Genetické testy",
    docsGeneticsMeta: "Laboratoř Genomia, Plzeň, květen 2025",
    docsGrpra1: '<strong>GR-PRA1</strong> – N/N (čistá, bez mutace)',
    docsGrpra2: '<strong>GR-PRA2</strong> – N/N (čistá, bez mutace)',
    docsPra: '<strong>PRA-prcd</strong> – N/N (čistá, bez mutace)',
    docsIct1: '<strong>ICT-1 (ichtyóza 1)</strong> – N/P (přenašečka) ⚠',
    docsIct2: '<strong>ICT-2 (ichtyóza 2)</strong> – N/N (čistá, bez mutace)',
    docsNcl: '<strong>NCL (neuronální ceroidní lipofuscinóza)</strong> – N/N (čistá, bez mutace)',
    docsGrmd: '<strong>GRMD (muskulární dystrofie)</strong> – Xn/Xn (čistá)',
    docsNoteTitle: "Co znamenají naše výsledky pro chov",
    docsNoteHdTitle: "HD B (hraniční dysplazie kyčlí)",
    docsNoteHdText: 'Stupeň <strong>HD B</strong> znamená téměř normální kyčelní klouby s minimálními odchylkami. Pro chov je plně akceptovatelný. Abychom maximalizovali šanci na nejlepší výsledky u štěňat, <strong>budeme vybírat krycího psa výhradně s HD A</strong> (bez nálezu) a ideálně s prokazatelně dobrými výsledky v linii.',
    docsNoteIctTitle: "ICT-1 N/P (přenašečka ichtyózy 1)",
    docsNoteIctText: 'Alma je <strong>přenašečka</strong> ichtyózy 1 – sama je zcela zdravá, ale nese jednu kopii mutovaného genu. Ichtyóza 1 je recesivní onemocnění kůže, které se projeví pouze u jedinců s oběma kopiemi mutace (P/P). Proto <strong>krycí pes musí být testován jako N/N</strong> (čistý). Při krytí N/P × N/N bude 50 % štěňat čistých (N/N) a 50 % přenašečů (N/P) – <strong>žádné štěně nemůže onemocnět</strong>. Více o ichtyóze si můžete přečíst v <a href="https://www.bohemica-aurum.cz/l/ichtyoza-seminarni-prace/" target="_blank" rel="noopener noreferrer">seminární práci chovatelky stanice Bohemica Aurum</a>.',
    docsNoteStrategyTitle: "Naše strategie výběru krycího psa",
    docsNoteStrategyText: 'Při výběru krycího psa pro Almu klademe důraz na: <strong>HD A</strong> (bez nálezu), <strong>ED 0/0</strong>, kompletní genetické testy s výsledkem <strong>N/N u ICT-1</strong>, vyrovnanou povahu, kvalitní rodokmen a typickou stavbu těla. Všechny zdravotní výsledky krycího psa budou rovněž zveřejněny na těchto stránkách.',

    contactTitle: "Kontakt",
    contactIntro:
      "Máte zájem o štěně z našeho chovu nebo se jen chcete na něco zeptat? Napište nám – rádi se ozveme zpět.",
    contactPhoneLabel: "Telefon",
    contactLocationLabel: "Lokalita",

    formNameLabel: "Jméno",
    formPhoneLabel: "Telefon",
    formTopicLabel: "Téma zprávy",
    formTopicPuppies: "Zájem o štěně",
    formTopicVisit: "Domluva návštěvy",
    formTopicOther: "Jiný dotaz",
    formMessageLabel: "Zpráva",
    formNote:
      "Odesláním zprávy souhlasíte se zpracováním uvedených údajů za účelem odpovědi na váš dotaz. Údaje neposkytujeme třetím stranám.",
    formSubmit: "Odeslat zprávu",

    footerNavTitle: "Navigace",
    footerContactTitle: "Kontakt",
    footerAboutTitle: "O stanici",
    footerAboutText:
      "Rosenaw Aurum — rodinná chovatelská stanice zlatých retrívrů v Beskydech. Chováme s láskou, péčí a respektem k plemeni.",
    footerRights: "Všechna práva vyhrazena.",
  },

  en: {
    navHome: "Home",
    navAbout: "About",
    navGirls: "Our Girls",
    navPuppies: "Puppies",
    navGallery: "Gallery",
    navNews: "News",
    navDocs: "Documents",
    navContact: "Contact",

    heroTitle: "Family breeding of golden retrievers with\u00a0respect for life.",
    heroSubtitle:
      "A small FCI kennel from the Beskydy Mountains, near Rožnov pod Radhoštěm. Puppies grow up at home, among people, with focus on health, balanced temperament and a\u00a0solid foundation.",
    heroCtaAbout: "Our approach",
    heroCtaPuppies: "Current / planned litter",

    whyUsTitle: "Why choose us?",
    whyUsHomeTitle: "Home environment",
    whyUsHomeText: "Our puppies grow up with us at home, not in a kennel.",
    whyUsHealthTitle: "Health comes first",
    whyUsHealthText: "Thorough testing, veterinary care, responsible pairing.",
    whyUsHomeLink: "More about puppies →",
    whyUsHealthLink: "Health documentation →",
    whyUsContactTitle: "Lifetime contact",
    whyUsContactText: "We stay in touch with all our dog families.",
    whyUsContactLink: "Get in touch →",

    aboutTitle: "About Rosenaw Aurum",
    aboutIntro1:
      'It all started with <strong>Dexík</strong>, a Golden Retriever without a pedigree, whose kind nature showed us how special this breed really is. <strong>Rosenaw Aurum</strong> is all about our family and the Golden Retrievers who share everyday joys and worries with us.',
    aboutIntro2:
      'After he passed away, <strong>Alma</strong> came into our lives – our dream girl with a pedigree, with whom we started our journey towards breeding Golden Retrievers with a focus on <strong>health, temperament, working ability and family life</strong>.',
    aboutPhilosophy:
      'Our goal is to breed <strong>well-balanced, healthy and social dogs</strong> that feel equally comfortable in the show ring, in the field and in the middle of a family living room. Our kennel Rosenaw Aurum is registered with the <a href="https://www.fci.be/" target="_blank" rel="noopener noreferrer">Fédération Cynologique Internationale (FCI)</a> under number 832/23 and we are members of <a href="https://www.kchls.cz/" target="_blank" rel="noopener noreferrer">KCHLS</a> and the <a href="https://www.retriever-klub.cz/" target="_blank" rel="noopener noreferrer">Retriever Klub CZ</a>.',
    aboutBreederTitle: "The breeder",
    aboutBreederText:
      "My name is Lucie Klesová and dogs have been part of my life since childhood. Golden Retrievers combine peace, joy and an endless willingness to cooperate. In breeding I focus on health, temperament and respect for each dog's individuality.",
    aboutLinkAlma:
      'You can find more about Alma on the website of her home kennel <a href="https://www.bohemica-aurum.cz/" target="_blank" rel="noopener noreferrer">Bohemica Aurum</a> and on our <a href="https://www.instagram.com/almamygoldenlove" target="_blank" rel="noopener noreferrer">Instagram</a>.',

    girlsTitle: "Our girls",
    girlsIntro:
      "Here you will gradually find all our Golden girls – from young hopes to experienced brood bitches and seniors.",
    almaBasic: "born 27 January 2024 • Golden Retriever, female • ČLP/GR/25733",
    almaCharacterTitle: "Temperament",
    almaPersonality:
      '<strong>Alma</strong> is our long‑awaited Golden girl. She brought new energy and joy into our home and quickly became a dog for every occasion – a companion for trips, holidays, sports and quiet evenings on the sofa.',
    almaTrait1: "Friendly",
    almaTrait2: "Eager to learn",
    almaTrait3: "Active",
    almaTrait4: "Calm at home",
    almaTrait5: "Loves water",
    almaTrait6: "Loves to retrieve",
    almaHealthTitle: "Health",
    healthCatRtg: "X-ray examinations",
    healthCatDna: "Genetic (DNA) tests",
    healthNeg: "clear",
    almaHeightLabel: "Height:",
    almaBiteLabel: "Bite:",
    almaBiteValue: "full scissor",
    almaTitlesTitle: "Shows & trials",
    titlesCatShows: "Shows",
    titlesCatTrials: "Working trials",
    almaTitlePuppy: "Puppy class",
    almaTitleJunior: "Minor puppy",
    almaTitleYoung: "Junior class",
    almaTitlePrep: "in preparation",
    almaDocsLink: "Health documentation →",
    almaPedigreeTitle: "Pedigree",
    almaK9dataLink: "Full pedigree on K9data.org →",
    almaBreedingInfo: 'Breeder: Ing. František Vacek, <a href="https://www.bohemica-aurum.cz/" target="_blank" rel="noopener noreferrer">Bohemica Aurum</a> • Owner: Lucie Klesová',

    puppiesTitle: "Rosenaw Aurum puppies",
    puppiesIntro:
      "For us a puppy is a true family member. From the very first days it is in close contact with us, our children and the normal running of our household.",
    puppiesApproachTitle: "How we raise our puppies",
    puppiesApproachText1:
      "Our puppies are raised in a family environment. Step by step they are introduced to different sounds, surfaces, people and situations – from quiet evenings on the sofa to exploring the garden and taking short car rides.",
    puppiesApproachText2:
      "We are happy to support new owners with advice on care, upbringing and training. Our puppies do not leave us empty‑handed – they take a piece of our hearts with them and we like to stay in touch throughout their lives.",
    puppiesPackTitle: "What your puppy leaves with",
    puppiesPackList:
      "purchase contract and FCI pedigree; vaccination card / pet passport; starter pack of food and a favourite toy; detailed written information for the first weeks and months",
    puppiesStatusTitle: "Planned litter",
    puppiesStatusPill: "Spring/Summer 2027",
    puppiesPlannedLabel: "Expecting",
    puppiesPlannedText:
      "We are preparing Alma's first litter. Details about the sire will be announced once confirmed.",
    puppiesPlannedCta: "I'm interested in a puppy",
    puppiesArchiveTitle: "Litter archive",
    puppiesArchiveText:
      "For each litter you will find information about parents, dates of birth and links to photo galleries. At the moment we have no litters bred yet.",

    galleryTitle: "Gallery",
    galleryIntro:
      "Little moments from our everyday life, trips, training sessions and first shows. Photos will be added gradually.",
    galleryFilterAll: "All",
    galleryFilterGirls: "Our girls",
    galleryFilterPuppies: "Puppies",
    galleryFilterShows: "Shows & tests",
    galleryFilterLife: "Everyday life",
    galleryFilterVideos: "Videos",
    galleryShowMore: "Show more photos",
    galleryPlaceholderGirls: "Alma running on a meadow",
    galleryPlaceholderLife: "Family photo from a holiday trip",
    galleryPlaceholderShows: "Show ring – junior class",

    newsTitle: "News",
    newsIntro:
      "Short updates about our dogs, planned litters, shows, working tests and small joys of everyday life.",
    newsAllLink: "All news \u2192",
    newsPageTitle: "News",
    newsBackLink: "\u2190 Back to homepage",
    docsTitle: "Documents",
    docsIntro:
      'Here you will find the complete health documentation of our female <strong>Alma Bohemica Aurum</strong>. Transparency is a given for us – we want every potential puppy owner to be able to verify everything.',
    docsPedigreeTitle: "Pedigree",
    docsPedigree: '<strong>FCI Certified Pedigree</strong> – Alma Bohemica Aurum, ČLP/GR/25733',
    docsXrayTitle: "X-ray examinations",
    docsXrayMeta: "Examined 3 Feb 2025, MVDr Marek Pepřík, Opava",
    docsHdEd: '<strong>HD + ED</strong> – HD B (borderline), ED 0/0 (clear)',
    docsSaLtv: '<strong>SA + LTV</strong> – spondylosis 0 (clear), LTV 0 (clear)',
    docsOcd: '<strong>OCD shoulder joints</strong> – clear (both limbs)',
    docsGeneticsTitle: "Genetic tests",
    docsGeneticsMeta: "Genomia laboratory, Plzeň, May 2025",
    docsGrpra1: '<strong>GR-PRA1</strong> – N/N (clear, no mutation)',
    docsGrpra2: '<strong>GR-PRA2</strong> – N/N (clear, no mutation)',
    docsPra: '<strong>PRA-prcd</strong> – N/N (clear, no mutation)',
    docsIct1: '<strong>ICT-1 (ichthyosis 1)</strong> – N/P (carrier) ⚠',
    docsIct2: '<strong>ICT-2 (ichthyosis 2)</strong> – N/N (clear, no mutation)',
    docsNcl: '<strong>NCL (neuronal ceroid lipofuscinosis)</strong> – N/N (clear, no mutation)',
    docsGrmd: '<strong>GRMD (muscular dystrophy)</strong> – Xn/Xn (clear)',
    docsNoteTitle: "What our results mean for breeding",
    docsNoteHdTitle: "HD B (borderline hip dysplasia)",
    docsNoteHdText: '<strong>HD B</strong> means near-normal hip joints with minimal irregularities. It is fully acceptable for breeding. To maximise the chance of the best results in puppies, <strong>we will select a stud dog exclusively with HD A</strong> (clear) and ideally with proven good results in his line.',
    docsNoteIctTitle: "ICT-1 N/P (ichthyosis 1 carrier)",
    docsNoteIctText: 'Alma is a <strong>carrier</strong> of ichthyosis 1 – she is completely healthy herself, but carries one copy of the mutated gene. Ichthyosis 1 is a recessive skin condition that only affects dogs with two copies of the mutation (P/P). Therefore, <strong>the stud dog must be tested as N/N</strong> (clear). In an N/P × N/N mating, 50% of puppies will be clear (N/N) and 50% carriers (N/P) – <strong>no puppy can be affected</strong>. You can read more about ichthyosis in a <a href="https://www.bohemica-aurum.cz/l/ichtyoza-seminarni-prace/" target="_blank" rel="noopener noreferrer">seminar paper by the breeder of Bohemica Aurum kennel</a> (in Czech).',
    docsNoteStrategyTitle: "Our stud dog selection strategy",
    docsNoteStrategyText: 'When selecting a stud dog for Alma, we focus on: <strong>HD A</strong> (clear), <strong>ED 0/0</strong>, complete genetic tests with <strong>N/N for ICT-1</strong>, balanced temperament, quality pedigree and typical conformation. All health results of the stud dog will also be published on this website.',

    contactTitle: "Contact",
    contactIntro:
      "Interested in a puppy from our kennel or just want to ask something? Send us a message – we will get back to you.",
    contactPhoneLabel: "Phone",
    contactLocationLabel: "Location",

    formNameLabel: "Name",
    formPhoneLabel: "Phone",
    formTopicLabel: "Subject",
    formTopicPuppies: "Puppy enquiry",
    formTopicVisit: "Arrange a visit",
    formTopicOther: "Other question",
    formMessageLabel: "Message",
    formNote:
      "By sending this message you agree that we process the provided data in order to answer your enquiry. We do not share your data with third parties.",
    formSubmit: "Send message",

    footerNavTitle: "Navigation",
    footerContactTitle: "Contact",
    footerAboutTitle: "About us",
    footerAboutText:
      "Rosenaw Aurum — Golden Retriever breeding kennel in the Beskydy Mountains, Czech Republic. We breed with love, care and respect for the breed.",
    footerRights: "All rights reserved.",
  },
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Přepnout texty
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (!value) return;

    if (el.tagName === "UL" || el.tagName === "OL") {
      // Seznamy: hodnota rozdělená středníkem → <li> prvky
      const items = value.split(";");
      el.innerHTML = "";
      items.forEach((item) => {
        const li = document.createElement("li");
        if (el.hasAttribute("data-i18n-html")) {
          li.innerHTML = item.trim();
        } else {
          li.textContent = item.trim();
        }
        el.appendChild(li);
      });
    } else if (el.hasAttribute("data-i18n-html")) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  // Přepnout atribut lang na html
  document.documentElement.lang = lang === "en" ? "en" : "cs";

  // Aktivní tlačítko jazyka
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("lang-btn--active", btn.dataset.lang === lang);
  });
}

function setupLanguageSwitch() {
  const defaultLang = "cs";
  setLanguage(defaultLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });
}

function setupGalleryFilter() {
  const tabs = document.querySelectorAll(".gallery-tab");
  const items = document.querySelectorAll(".gallery-item");
  const grid = document.querySelector(".gallery-grid");
  const showMoreBtn = document.querySelector(".gallery-show-more");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.getAttribute("data-gallery-filter");

      tabs.forEach((t) => t.classList.remove("gallery-tab--active"));
      tab.classList.add("gallery-tab--active");

      // When filtering, expand grid to show all matching items
      // When "all", restore collapsed state (unless user already expanded)
      if (filter !== "all") {
        if (grid) grid.classList.add("gallery-grid--expanded");
        if (showMoreBtn) showMoreBtn.style.display = "none";
      } else {
        if (grid && !grid.dataset.userExpanded) grid.classList.remove("gallery-grid--expanded");
        if (showMoreBtn && !grid.dataset.userExpanded) showMoreBtn.style.display = "";
      }

      let delay = 0;
      items.forEach((item) => {
        const cat = item.getAttribute("data-gallery-category");
        if (filter === "all" || filter === cat) {
          item.style.display = "";
          item.style.animationDelay = delay + "ms";
          item.style.animation = "none";
          void item.offsetWidth;
          item.style.animation = "";
          delay += 80;
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

function setupGalleryVideos() {
  document.querySelectorAll(".gallery-item--video").forEach((item) => {
    const video = item.querySelector("video");
    if (!video) return;
    item.addEventListener("mouseenter", () => video.play());
    item.addEventListener("mouseleave", () => { video.pause(); video.currentTime = 0; });
    item.addEventListener("click", () => {
      if (video.paused) video.play(); else video.pause();
    });
  });
}

function setupContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="btn-spinner"></span>';

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          submitBtn.innerHTML = '<span class="btn-check">\u2713</span>';
          submitBtn.classList.add("btn--success");
          setTimeout(() => {
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            submitBtn.classList.remove("btn--success");
          }, 2000);
        } else {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
          alert(
            document.documentElement.lang === "en"
              ? "Something went wrong. Please try again or contact us by phone."
              : "Něco se pokazilo. Zkuste to znovu nebo nás kontaktujte telefonicky."
          );
        }
      })
      .catch(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        alert(
          document.documentElement.lang === "en"
            ? "Something went wrong. Please try again or contact us by phone."
            : "Něco se pokazilo. Zkuste to znovu nebo nás kontaktujte telefonicky."
        );
      });
  });
}

function setupLightbox() {
  if (typeof GLightbox === "undefined") return;
  GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
    closeOnOutsideClick: true,
  });
}

function setupStepper() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // SVG tlapky — levá a pravá
  const pawLeft = '<svg class="paw" viewBox="0 0 32 32" fill="currentColor"><ellipse cx="16" cy="21" rx="5" ry="4"/><ellipse cx="9.5" cy="12" rx="2.5" ry="3.2"/><ellipse cx="15" cy="9.5" rx="2.2" ry="3"/><ellipse cx="21" cy="10" rx="2.3" ry="3"/><ellipse cx="25" cy="14.5" rx="2" ry="2.8"/></svg>';
  const pawRight = '<svg class="paw" viewBox="0 0 32 32" fill="currentColor"><ellipse cx="16" cy="21" rx="5" ry="4"/><ellipse cx="22.5" cy="12" rx="2.5" ry="3.2"/><ellipse cx="17" cy="9.5" rx="2.2" ry="3"/><ellipse cx="11" cy="10" rx="2.3" ry="3"/><ellipse cx="7" cy="14.5" rx="2" ry="2.8"/></svg>';

  const PAW_COUNT = 14;
  const TRAIL_LEN = 3;      // kolik tlap je vidět současně
  const STEP_DELAY = 180;   // ms mezi kroky
  const WAVE_AMP = 10;      // amplituda zvlnění (px)

  document.querySelectorAll(".stepper").forEach(function (container) {
    var cards = container.querySelectorAll(".stepper-card");
    var lineFill = container.querySelector(".stepper-line-fill");
    if (!cards.length || !lineFill) return;

    var total = cards.length;

    // Vygeneruj tlapky a rozmísti je podél zvlněné cesty
    lineFill.innerHTML = "";
    for (var i = 0; i < PAW_COUNT; i++) {
      var isLeft = i % 2 === 0;
      var div = document.createElement("div");
      div.innerHTML = isLeft ? pawLeft : pawRight;
      var paw = div.firstChild;

      // Horizontální pozice — rovnoměrně rozložené
      var xPct = (i / (PAW_COUNT - 1)) * 100;
      // Vertikální zvlnění — jedna celá sinusoida: nahoře → dole → nahoře
      var wave = -Math.cos((i / (PAW_COUNT - 1)) * Math.PI * 2) * WAVE_AMP;
      var sideOffset = isLeft ? -3 : 3;
      var yPx = wave + sideOffset;
      // Rotace — všechny směřují doprava, mírná variace
      var baseRot = 90;
      var variation = (Math.sin(i * 1.7) * 5);
      var rot = baseRot + variation;
      var scale = 0.9 + Math.sin(i * 2.3) * 0.1;

      paw.style.left = xPct + "%";
      paw.style.top = "50%";
      paw.style.transform = "translate(-50%, -50%) translateY(" + yPx + "px) rotate(" + rot + "deg) scale(" + scale.toFixed(2) + ")";

      lineFill.appendChild(paw);
    }

    var paws = lineFill.querySelectorAll(".paw");
    var walkTimers = [];

    // Animace chůze — tlapky se postupně objevují, starší mizí
    function walkPawsUpTo(targetIdx) {
      // Zruš předchozí timery
      walkTimers.forEach(function(t) { clearTimeout(t); });
      walkTimers = [];

      for (var i = 0; i <= targetIdx; i++) {
        (function(idx, delay) {
          walkTimers.push(setTimeout(function() {
            // Zobraz aktuální tlapku
            paws[idx].classList.remove("is-fading", "is-gone");
            paws[idx].classList.add("is-visible");
            // Předchozí tlapky — fading trail
            for (var j = 0; j < idx; j++) {
              var age = idx - j;
              if (age <= TRAIL_LEN) {
                paws[j].classList.add("is-visible");
                paws[j].classList.remove("is-gone");
                if (age === TRAIL_LEN) {
                  paws[j].classList.add("is-fading");
                } else {
                  paws[j].classList.remove("is-fading");
                }
              } else {
                paws[j].classList.remove("is-visible", "is-fading");
                paws[j].classList.add("is-gone");
              }
            }
          }, delay));
        })(i, i * STEP_DELAY);
      }

      // Po dokončení — nech trail ještě chvíli a pak zmiz
      walkTimers.push(setTimeout(function() {
        paws.forEach(function(p) {
          p.classList.add("is-fading");
        });
      }, (targetIdx + 1) * STEP_DELAY + 800));

      walkTimers.push(setTimeout(function() {
        paws.forEach(function(p) {
          p.classList.remove("is-visible", "is-fading");
          p.classList.add("is-gone");
        });
      }, (targetIdx + 1) * STEP_DELAY + 1800));
    }

    function resetPaws() {
      walkTimers.forEach(function(t) { clearTimeout(t); });
      walkTimers = [];
      paws.forEach(function(p) {
        p.classList.remove("is-visible", "is-fading", "is-gone");
      });
    }

    function showAllPawsStatic() {
      paws.forEach(function(p) {
        p.classList.add("is-visible");
        p.classList.remove("is-fading", "is-gone");
      });
    }

    // Na mobilu nebo při prefers-reduced-motion
    if (window.innerWidth <= 960 || prefersReducedMotion) {
      cards.forEach(function(c) { c.classList.add("is-active"); });
      showAllPawsStatic();
      return;
    }

    var scrollActivated = 0;

    // Scroll animace
    var observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var card = entry.target;
            var step = parseInt(card.dataset.stepper, 10);
            var delay = (step - 1) * 600;

            setTimeout(function() {
              card.classList.add("is-active");
              scrollActivated = Math.max(scrollActivated, step);
              var target = Math.round((scrollActivated / total) * (PAW_COUNT - 1));
              walkPawsUpTo(target);
            }, delay);

            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach(function(card) { observer.observe(card); });

    // Hover — replay celou animaci
    cards.forEach(function(card) {
      card.addEventListener("mouseenter", function() {
        cards.forEach(function(c) { c.classList.remove("is-active"); });
        resetPaws();

        cards.forEach(function(c) {
          var s = parseInt(c.dataset.stepper, 10);
          setTimeout(function() {
            c.classList.add("is-active");
            var target = Math.round((s / total) * (PAW_COUNT - 1));
            walkPawsUpTo(target);
          }, (s - 1) * 500);
        });

        scrollActivated = total;
      });
    });
  });
}

function setupHamburger() {
  const btn = document.getElementById("hamburger");
  const nav = document.getElementById("main-nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    btn.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      btn.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

function setupScrollAnimations() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-animate]").forEach((el) => {
      el.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("[data-animate]").forEach((el) => {
    observer.observe(el);
  });
}

function setupGalleryShowMore() {
  var btn = document.querySelector(".gallery-show-more");
  var grid = document.querySelector(".gallery-grid");
  if (!btn || !grid) return;
  btn.addEventListener("click", function () {
    grid.classList.add("gallery-grid--expanded");
    grid.dataset.userExpanded = "true";
    btn.style.display = "none";
  });
}

function setupLazyVideos() {
  var videos = document.querySelectorAll("video.lazy-video");
  if (!videos.length) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var video = entry.target;
        var sources = video.querySelectorAll("source[data-src]");
        sources.forEach(function (s) {
          s.src = s.dataset.src;
          s.removeAttribute("data-src");
        });
        video.load();
        video.play();
        observer.unobserve(video);
      }
    });
  }, { rootMargin: "200px" });
  videos.forEach(function (v) { observer.observe(v); });
}

document.addEventListener("DOMContentLoaded", () => {
  setupLanguageSwitch();
  setupGalleryFilter();
  setupGalleryVideos();
  setupGalleryShowMore();
  setupLazyVideos();
  setupContactForm();
  setupLightbox();
  setupStepper();
  setupHamburger();
  setupScrollAnimations();
});


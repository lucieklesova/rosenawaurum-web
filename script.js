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
    navCalc: "Kalkulačka březosti",
    cookieText: 'Tento web používá Google Analytics, Google Fonts a Google Maps. Tyto služby mohou zpracovávat vaši IP adresu. <a href="ochrana-osobnich-udaju.html">Více informací</a>.',
    cookieAccept: "Rozumím",
    cookieReject: "Odmítnout",
    mapBlocked: "Pro zobrazení mapy je nutné přijmout cookies třetích stran.",

    heroTitle: "Zlatí retrívři vychovaní s\u00a0láskou v\u00a0srdci Beskyd.",
    heroSubtitle:
      "Malá rodinná chovatelská stanice FCI z\u00a0Beskyd, nedaleko Rožnova pod Radhoštěm. Štěňata vyrůstají doma, mezi lidmi, s\u00a0důrazem na zdraví, vyrovnanou povahu a\u00a0pevné zázemí.",
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

    aboutTitle: "Rosenaw Aurum",
    aboutIntro1:
      'Název naší chovatelské stanice <strong>Rosenaw Aurum</strong> v sobě nese kousek místa, odkud pocházíme, i lásku k plemeni. „Rosenaw" vychází z historického názvu města Rožnov pod Radhoštěm a „Aurum" znamená v latině zlato – přesně takové, jaké pro nás zlatí retrívři jsou.',
    aboutIntro2:
      'Úplně první byl <strong>Dexík</strong>. Zlatý retrívr bez průkazu původu, ale s obrovským srdcem. Naučil nás, jak neuvěřitelně laskavé, oddané a citlivé tohle plemeno je. Díky němu jsme se zamilovali.',
    aboutIntro3:
      'Po jeho odchodu přišla <strong>Alma</strong>. Vysněná fenečka, která nás posunula dál – nejen k chovu, ale i k hlubšímu pochopení toho, co všechno zlatý retrívr dokáže být.',
    aboutPhilosophy:
      'Jsme teprve na začátku naší chovatelské cesty. Učíme se, sbíráme zkušenosti a chceme jít tou cestou poctivě, s respektem ke psům i k plemeni.',
    aboutGoal:
      'Naším cílem je odchovávat vyrovnané, zdravé a společenské psy, kteří se budou cítit stejně dobře na výstavním kruhu, při práci v poli i uprostřed rodinného obýváku.',
    aboutClubs:
      'Rosenaw Aurum je registrovaná chovatelská stanice <a href="https://www.fci.be/" target="_blank" rel="noopener noreferrer">FCI</a> (č. 832/23), členem <a href="https://www.kchls.cz/" target="_blank" rel="noopener noreferrer">Klubu chovatelů loveckých slídičů (KCHLS)</a> a <a href="https://www.retriever-klub.cz/" target="_blank" rel="noopener noreferrer">Retriever Klubu CZ</a>.',

    girlsTitle: "Naše feny",
    girlsIntro:
      "Postupně zde najdete všechny naše zlaté dámy – od mladých nadějí po zkušené chovné feny a psí seniorky.",
    almaBasic: "nar. 27. 1. 2024 • zlatý retrívr, fena • ČLP/GR/25733",
    almaCharacterTitle: "Povaha",
    almaPersonality:
      '<strong>Alminka</strong> je naše vysněná fenka zlatého retrívra. Do života k nám přišla jako velká voda a velmi rychle se stala parťačkou pro každou situaci – výlety, dovolené, sport i klidné večery doma.',
    almaPersonality2: "Má výjimečný dar vnímat energii ostatních – ať už lidí nebo psů – a přirozeně se jí přizpůsobit. Díky tomu je neuvěřitelně nekonfliktní a harmonická. Miluje všechny bez rozdílu, je přátelská a otevřená, přitom doma krásně klidná.",
    almaPersonality3: 'Zároveň v sobě ale nezapře hravého „ďábla", když přijde čas na akci.',
    almaTrait1: "Přátelská",
    almaTrait2: "Empatická",
    almaTrait3: "Nekonfliktní",
    almaTrait4: "Vnímavá",
    almaTrait5: "Klidná doma",
    almaTrait6: "Aktivní venku",
    almaTrait7: "Miluje všechny",
    almaTrait8: "Miluje vodu",
    almaTrait9: "Ráda aportuje",
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
    almaTitleOpen: "Třída otevřená",
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
    puppiesPhotoCaption: 'Foto z mateřské chovatelské stanice <a href="https://www.bohemica-aurum.cz/kopie-z-apollo/" target="_blank" rel="noopener noreferrer">Bohemica Aurum</a> — <a href="https://www.bohemica-aurum.cz/kopie-z-apollo/" target="_blank" rel="noopener noreferrer">deníček štěňátek</a>',
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
    newsMonth1: "Bře",
    newsTitle1: "Alma poprvé v otevřené třídě – Provodovice",
    newsExcerpt1: "Alma nastoupila poprvé do otevřené třídy a hned V1, vítěz třídy, oblastní vítěz a 3. místo ve skupině FCI 8!",
    newsMonth2: "Čvc",
    newsTitle2: "Alminka s maminkou na výstavě v Bordovicích",
    newsExcerpt2: "Na oblastní klubové výstavě Hubertka 2025 se naposledy ve třídě mladých předvedla naše Alma. Hodnocení V2 a krásný posudek.",
    newsMonth3: "Čvn",
    newsTitle3: "Alminka zvládla OVVR na jedničku",
    newsExcerpt3: "Na zkoušce vrozených vloh retrivrů v Ústí u Hranic Alminka zvládla všech šest disciplín na plný počet bodů.",
    newsAllLink: "Všechny aktuality \u2192",
    newsPageTitle: "Aktuality",
    newsBackLink: "\u2190 Zpět na hlavní stránku",

    // Aktuality – společné
    articleBack: "\u2190 Zpět na aktuality",
    shareLabel: "Sdílet:",
    shareCopy: "Kopírovat odkaz",

    // Aktuality – jednotlivé články
    artProvodoviceCat: "Výstavy",
    artProvodoviceTitle: "Alma poprvé v otevřené třídě – výstava v Provodovicích",
    artBordoviceCat: "Výstavy",
    artBordoviceTitle: "Alminka s maminkou na výstavě v Bordovicích",
    artOvvrCat: "Zkoušky",
    artOvvrTitle: "Alminka zvládla OVVR na jedničku",
    artHumpolecCat: "Výstavy",
    artHumpolecTitle: "Alminka se předvedla v Humpolci",
    artNarozeninyCat: "Ze života",
    artNarozeninyTitle: "Alminka slaví 1. narozeniny",
    artRtgCat: "Zdraví",
    artRtgTitle: "Máme výsledky RTG DKK, DLK, OCD",
    artGenetickeCat: "Zdraví",
    artGenetickeTitle: "Máme výsledky genetických testů",

    // Aktuality list – měsíce a excerpty
    newsListMonth1: "Bře",
    newsListMonth2: "Čvc",
    newsListMonth3: "Čvn",
    newsListMonth4: "Kvě",
    newsListMonth5: "Kvě",
    newsListMonth6: "Úno",
    newsListMonth7: "Led",
    newsListExcerpt1: "Alma nastoupila poprvé do otevřené třídy a hned V1, vítěz třídy, oblastní vítěz a 3. místo ve skupině FCI 8!",
    newsListExcerpt2: "Na oblastní klubové výstavě Hubertka 2025 se naposledy ve třídě mladých předvedla naše Alma. Hodnocení V2 a krásný posudek.",
    newsListExcerpt3: "Na zkoušce vrozených vloh retrivrů v Ústí u Hranic Alminka zvládla všech šest disciplín na plný počet bodů.",
    newsListExcerpt4: "Kompletní genetické testy na dědičná onemocnění. Alminka je zdravý pejsek – většina výsledků N/N.",
    newsListExcerpt5: "Na Klubové a Speciální výstavě retrieverů v Humpolci si Alminka oba dny odnesla hodnocení Výborná. Konkurence 30 fen!",
    newsListExcerpt6: "Na Mezinárodní den Zlatých retrívrů jsme vyrazili na RTG. Výsledky: DKK B/B, DLK 0/0, OCD 0/0, SA a LTV clear.",
    newsListExcerpt7: "Dort, dárky a malá oslava s kamarády. Milá Alminko, přejeme Ti hlavně hodně zdravíčka!",

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

    // Průvodce březostí
    pregBreadcrumb: "Kalkulačka březosti feny",
    pregTitle: "Kalkulačka březosti feny — termín porodu a vývoj štěňat",
    pregLead: "Online kalkulačka březosti feny zdarma. Zadejte datum krytí a okamžitě zjistěte předpokládaný termín porodu, kdy na ultrazvuk, kdy na rentgen a sledujte vývoj štěňat týden po týdnu — od oplodnění až po porod.",
    pregDateLabel: "Datum krytí",
    pregCalculate: "Vypočítat",
    pregDueDate: "Předpokládaný termín porodu",
    pregWindow: "Okno porodu",
    pregCurrentDay: "Aktuální den březosti",
    pregCountdown: "Zbývá do porodu",
    pregDay1: "Den 1",
    pregDay63: "Den 63",
    pregTimelineTitle: "Vývoj štěňat týden po týdnu",
    pregTipLabel: "Doporučení:",
    pregMilestoneUltrasound: "Ultrazvuk",
    pregMilestoneXray: "Rentgen",
    pregMilestoneBirth: "Porod!",
    pregWeek1Title: "Týden 1", pregWeek1Days: "den 1–7",
    pregWeek1Dev: "Po krytí dochází k oplodnění vajíček. Spermie putují vejcovodem k vajíčkům, kde probíhá oplodnění. Oplodněná vajíčka se začínají dělit.",
    pregWeek1Tip: "Normální režim, kvalitní krmivo. Žádné zvláštní změny nejsou potřeba. Vyvarujte se očkování a chemických přípravků.",
    pregWeek2Title: "Týden 2", pregWeek2Days: "den 8–14",
    pregWeek2Dev: "Embrya cestují vejcovodem směrem k děloze. Buňky se dále dělí a formují se zárodečné vrstvy, ze kterých vzniknou orgány.",
    pregWeek2Tip: "Bez výrazných změn. Zajistěte klidné prostředí, vyvarujte se stresu a nadměrné fyzické zátěže.",
    pregWeek3Title: "Týden 3", pregWeek3Days: "den 15–21",
    pregWeek3Dev: "Embrya se implantují do děložní stěny (kolem dne 16–20). Začíná se formovat placenta, která bude zásobovat plody živinami. Fena může mít sníženou chuť k jídlu nebo ranní nevolnost.",
    pregWeek3Tip: "Nabízejte menší porce častěji. Pokud fena odmítá jídlo, nepanikařte – je to normální. Nadále vynechejte očkování.",
    pregWeek4Title: "Týden 4", pregWeek4Days: "den 22–28",
    pregWeek4Dev: "Vyvíjejí se orgány, oči a páteř. Kolem 25. dne je možné ultrazvukem potvrdit březost a detekovat srdeční tep plodů. Embrya mají asi 1,5 cm.",
    pregWeek4Tip: "Ultrazvuk u veterináře (den 25–30) pro potvrzení březosti. Omezte skákání a hrubé hry.",
    pregWeek5Title: "Týden 5", pregWeek5Days: "den 29–35",
    pregWeek5Dev: "Plody rychle rostou – vyvíjejí se tlapky, drápy a vousky. Břicho feny se začíná viditelně zvětšovat. Plody měří kolem 3–4 cm.",
    pregWeek5Tip: "Postupně zvyšujte příjem bílkovin. Začněte přecházet na kvalitnější krmivo (štěněcí řada). Kratší, ale častější procházky.",
    pregWeek6Title: "Týden 6", pregWeek6Days: "den 36–42",
    pregWeek6Dev: "Plody jsou plně formované – mají vyvinutou srst, pigmentaci a pohlavní orgány. Rychle přibírají na váze. Fena výrazně přibírá a její břicho je zřetelně větší.",
    pregWeek6Tip: "Krmte 3× denně menší porce (štěněcím krmivem). Fena potřebuje více energie, ale žaludek má méně místa. Zajistěte klidné místo k odpočinku.",
    pregWeek7Title: "Týden 7", pregWeek7Days: "den 43–49",
    pregWeek7Dev: "Kostra plodů se mineralizuje – od 45. dne je viditelná na rentgenu. Díky tomu lze spočítat přesný počet štěňat. Plody měří kolem 7–9 cm a srst je plně vyvinutá.",
    pregWeek7Tip: "Rentgen u veterináře (den 45–50) pro zjištění počtu štěňat. Připravte si porodní box. Omezte fyzickou aktivitu na klidné procházky.",
    pregWeek8Title: "Týden 8", pregWeek8Days: "den 50–56",
    pregWeek8Dev: "Štěňata jsou téměř plně vyvinutá a zaujímají porodní pozici. Fena začíná hnízdit – hledá klidné místo a může být neklidná. Mléčné žlázy se plní.",
    pregWeek8Tip: "Porodní box by měl být připravený a fena by si na něj měla zvyknout. Začněte měřit rektální teplotu 2x denně. Připravte vše potřebné k porodu.",
    pregWeek9Title: "Týden 9", pregWeek9Days: "den 57–65",
    pregWeek9Dev: "Štěňata jsou připravena na svět! Fena může odmítat jídlo, být neklidná a hledat soukromí. Pokles tělesné teploty pod 37 °C signalizuje porod do 12–24 hodin. U zlatých retrívrů je typická velikost vrhu 6–10 štěňat.",
    pregWeek9Tip: "Sledujte pokles teploty (pod 37 °C = porod do 24 hodin). Mějte po ruce číslo na veterináře. Zajistěte klid a teplo. Pokud kontrakce trvají déle než 2 hodiny bez porodu štěněte, volejte veterináře.",
    pregWeek1Size: "~ zrnko p\u00edsku",
    pregWeek2Size: "~ makov\u00e1 sem\u00ednka (0,5 mm)",
    pregWeek3Size: "~ zrnko r\u00fd\u017ee (5 mm)",
    pregWeek4Size: "~ l\u00edskovy o\u0159\u00ed\u0161ek (1,5 cm)",
    pregWeek5Size: "~ vlask\u00fd o\u0159ech (3\u20134 cm)",
    pregWeek6Size: "~ mandarinka (6\u20139 cm)",
    pregWeek7Size: "~ citr\u00f3n (10\u201314 cm)",
    pregWeek8Size: "~ mango (15\u201318 cm)",
    pregWeek9Size: "~ mal\u00fd meloun (20 cm, 350\u2013500 g)",
    pregKeyDatesTitle: "Kl\u00ed\u010dov\u00e1 data",
    pregKeyMating: "Datum kryt\u00ed",
    pregKeyUltrasound: "Ultrazvuk (den 25\u201330)",
    pregKeyXray: "Rentgen (den 45\u201350)",
    pregKeyBirth: "Porod (den 63)",
    pregKeyDeparture: "Odchod do nov\u00fdch rodin (od 8. t\u00fddne)",
    pregShowPast: "Zobrazit p\u0159edchoz\u00ed t\u00fddny",
    pregHidePast: "Skr\u00fdt p\u0159edchoz\u00ed t\u00fddny",
    pregVideoTitle: "V\u00fdvoj \u0161t\u011b\u0148at v b\u0159i\u0161e feny",
    pregVideoDesc: "Fascinuj\u00edc\u00ed z\u00e1b\u011bry National Geographic ukazuj\u00edc\u00ed, jak se \u0161t\u011b\u0148ata vyv\u00edj\u00ed od oplodn\u011bn\u00ed a\u017e po porod.",
    pregChecklistTitle: "Co p\u0159ipravit na porod",
    pregChecklistItems: "Porodn\u00ed box (min. 120\u00d7120 cm pro zlat\u00e9ho retr\u00edvra); \u010cist\u00e9 ru\u010dn\u00edky a podlo\u017eky; Digit\u00e1ln\u00ed teplom\u011br; Dezinfekce a steriln\u00ed n\u016f\u017eky; V\u00e1ha pro v\u00e1\u017een\u00ed \u0161t\u011b\u0148at; Barevn\u00e9 obojky/stu\u017eky pro ozna\u010den\u00ed \u0161t\u011b\u0148at; Telefon na veterin\u00e1\u0159e a pohotovost; N\u00e1hradn\u00ed ml\u00e9ko pro \u0161t\u011b\u0148ata (pro p\u0159\u00edpad)",
    pregGoldenTitle: "Specifika zlat\u00e9ho retr\u00edvra",
    pregGoldenInfo: "D\u00e9lka b\u0159ezosti: 58\u201365 dn\u00ed (pr\u016fm\u011br 63 dn\u00ed); Typick\u00e1 velikost vrhu: 6\u201310 \u0161t\u011b\u0148at; V\u00e1ha novorozen\u00e9ho \u0161t\u011bn\u011bte: 350\u2013500 g; Zlat\u00ed retr\u00edv\u0159i jsou obecn\u011b dobr\u00e9 matky; C\u00edsa\u0159sk\u00fd \u0159ez je u tohoto plemene m\u00e9n\u011b \u010dast\u00fd; Po porodu fena pot\u0159ebuje 3\u20134\u00d7 v\u00edce energie",
    pregFaqTitle: "Nej\u010dast\u011bj\u0161\u00ed ot\u00e1zky o b\u0159ezosti feny",
    pregFaq1Q: "Jak dlouho trv\u00e1 b\u0159ezost feny?",
    pregFaq1A: "B\u0159ezost feny trv\u00e1 pr\u016fm\u011brn\u011b 63 dn\u00ed (9 t\u00fddn\u016f) od data kryt\u00ed. Porod m\u016f\u017ee nastat mezi 58. a 65. dnem. U zlat\u00fdch retr\u00edvr\u016f je pr\u016fm\u011brn\u00e1 d\u00e9lka b\u0159ezosti 63 dn\u00ed.",
    pregFaq2Q: "Kdy ud\u011blat ultrazvuk b\u0159ez\u00ed feny?",
    pregFaq2A: "Ultrazvuk b\u0159ez\u00ed feny se prov\u00e1d\u00ed mezi 25. a 30. dnem od kryt\u00ed. V tomto obdob\u00ed lze potvrdit b\u0159ezost a detekovat srde\u010dn\u00ed tep plod\u016f.",
    pregFaq3Q: "Kdy ud\u011blat rentgen b\u0159ez\u00ed feny?",
    pregFaq3A: "Rentgen b\u0159ez\u00ed feny se doporu\u010duje od 45. dne b\u0159ezosti. Umo\u017e\u0148uje p\u0159esn\u011b spo\u010d\u00edtat po\u010det \u0161t\u011b\u0148at podle viditeln\u00fdch kost\u00ed.",
    pregFaq4Q: "Kolik \u0161t\u011b\u0148at m\u00e1 zlat\u00fd retr\u00edvr?",
    pregFaq4A: "Zlat\u00fd retr\u00edvr m\u00e1 typicky 6 a\u017e 10 \u0161t\u011b\u0148at ve vrhu. Novorozen\u00e9 \u0161t\u011bn\u011b v\u00e1\u017e\u00ed 350\u2013500 g. Velikost vrhu z\u00e1vis\u00ed na v\u011bku, zdrav\u00ed a genetice feny.",
    pregFaq5Q: "Jak pozn\u00e1m, \u017ee fena bude rodit?",
    pregFaq5A: "Hlavn\u00edm p\u0159\u00edznakem bl\u00ed\u017e\u00edc\u00edho se porodu je pokles t\u011blesn\u00e9 teploty feny pod 37 \u00b0C, co\u017e signalizuje porod do 12\u201324 hodin. Fena m\u016f\u017ee b\u00fdt neklidn\u00e1, odm\u00edtat j\u00eddlo a hledat \u00fakryt.",
    pregFaq6Q: "Kdy mohou \u0161t\u011b\u0148ata odej\u00edt do nov\u00fdch rodin?",
    pregFaq6A: "\u0160t\u011b\u0148ata mohou odej\u00edt do nov\u00fdch rodin nejd\u0159\u00edve v 8 t\u00fddnech v\u011bku (56 dn\u00ed po narozen\u00ed). Do t\u00e9 doby pot\u0159ebuj\u00ed b\u00fdt s matkou pro spr\u00e1vn\u00fd fyzick\u00fd i psychick\u00fd v\u00fdvoj.",
    pregDisclaimer: "<strong>Upozorn\u011bn\u00ed:</strong> Tento pr\u016fvodce slou\u017e\u00ed jako orienta\u010dn\u00ed pom\u016fcka. Ka\u017ed\u00e1 b\u0159ezost je individu\u00e1ln\u00ed. V\u017edy konzultujte pr\u016fb\u011bh b\u0159ezosti s va\u0161\u00edm veterin\u00e1\u0159em a \u0159i\u010fte se jeho doporu\u010den\u00edmi.",
    pregBackHome: "Zp\u011bt na hlavn\u00ed str\u00e1nku",
    pregContactCta: "M\u00e1te dotaz? Napi\u0161te n\u00e1m",

    footerNavTitle: "Navigace",
    footerContactTitle: "Kontakt",
    footerAboutTitle: "O stanici",
    footerAboutText:
      "Rosenaw Aurum \u2014 rodinn\u00e1 chovatelsk\u00e1 stanice zlat\u00fdch retr\u00edvr\u016f v Beskydech. Chov\u00e1me s l\u00e1skou, p\u00e9\u010d\u00ed a respektem k plemeni.",
    footerRights: "V\u0161echna pr\u00e1va vyhrazena.",
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
    navCalc: "Pregnancy calculator",
    cookieText: 'This website uses Google Analytics, Google Fonts and Google Maps. These services may process your IP address. <a href="ochrana-osobnich-udaju.html">More info</a>.',
    cookieAccept: "Accept",
    cookieReject: "Reject",
    mapBlocked: "To display the map, you need to accept third-party cookies.",

    heroTitle: "Golden retrievers raised with\u00a0love in the heart of\u00a0Beskydy.",
    heroSubtitle:
      "A small family FCI kennel from the Beskydy Mountains, near Rožnov pod Radhoštěm. Puppies grow up at home, among people, with focus on health, balanced temperament and a\u00a0solid foundation.",
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

    aboutTitle: "Rosenaw Aurum",
    aboutIntro1:
      'The name of our kennel <strong>Rosenaw Aurum</strong> carries a piece of the place we come from and the love for the breed. "Rosenaw" comes from the historical name of the town Rožnov pod Radhoštěm and "Aurum" means gold in Latin – exactly what Golden Retrievers are to us.',
    aboutIntro2:
      'The very first was <strong>Dexík</strong>. A Golden Retriever without a pedigree, but with a huge heart. He taught us how incredibly kind, loyal and sensitive this breed is. Thanks to him, we fell in love.',
    aboutIntro3:
      'After he passed away, <strong>Alma</strong> came along. Our dream girl who took us further – not only towards breeding, but also towards a deeper understanding of everything a Golden Retriever can be.',
    aboutPhilosophy:
      'We are just at the beginning of our breeding journey. We are learning, gaining experience and want to walk this path honestly, with respect for dogs and the breed.',
    aboutGoal:
      'Our goal is to breed well-balanced, healthy and social dogs that feel equally comfortable in the show ring, in the field and in the middle of a family living room.',
    aboutClubs:
      'Rosenaw Aurum is a registered kennel of <a href="https://www.fci.be/" target="_blank" rel="noopener noreferrer">FCI</a> (no. 832/23), member of <a href="https://www.kchls.cz/" target="_blank" rel="noopener noreferrer">KCHLS</a> and the <a href="https://www.retriever-klub.cz/" target="_blank" rel="noopener noreferrer">Retriever Klub CZ</a>.',

    girlsTitle: "Our girls",
    girlsIntro:
      "Here you will gradually find all our Golden girls – from young hopes to experienced brood bitches and seniors.",
    almaBasic: "born 27 January 2024 • Golden Retriever, female • ČLP/GR/25733",
    almaCharacterTitle: "Temperament",
    almaPersonality:
      '<strong>Alma</strong> is our dream Golden Retriever girl. She came into our lives like a whirlwind and quickly became a companion for every occasion \u2013 trips, holidays, sports and quiet evenings at home.',
    almaPersonality2: "She has a remarkable gift for sensing the energy of others \u2013 whether people or dogs \u2013 and naturally adapting to it. This makes her incredibly non-confrontational and harmonious. She loves everyone unconditionally, is friendly and open, yet beautifully calm at home.",
    almaPersonality3: 'At the same time, she can\u2019t hide her playful "devil" side when it\u2019s time for action.',
    almaTrait1: "Friendly",
    almaTrait2: "Empathetic",
    almaTrait3: "Non-confrontational",
    almaTrait4: "Perceptive",
    almaTrait5: "Calm at home",
    almaTrait6: "Active outdoors",
    almaTrait7: "Loves everyone",
    almaTrait8: "Loves water",
    almaTrait9: "Loves to retrieve",
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
    almaTitleOpen: "Open class",
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
    puppiesPhotoCaption: 'Photo from the maternal kennel <a href="https://www.bohemica-aurum.cz/kopie-z-apollo/" target="_blank" rel="noopener noreferrer">Bohemica Aurum</a> — <a href="https://www.bohemica-aurum.cz/kopie-z-apollo/" target="_blank" rel="noopener noreferrer">puppy diary</a>',
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
    newsMonth1: "Mar",
    newsTitle1: "Alma's first open class – Provodovice show",
    newsExcerpt1: "Alma entered the open class for the first time and won V1, class winner, regional winner and 3rd place in FCI group 8!",
    newsMonth2: "Jul",
    newsTitle2: "Alma and mum at the Bordovice show",
    newsExcerpt2: "At the regional club show Hubertka 2025, Alma competed in the junior class for the last time. Rating V2 with an excellent critique.",
    newsMonth3: "Jun",
    newsTitle3: "Alma aced the OVVR working test",
    newsExcerpt3: "At the natural retrieving ability test in Ústí u Hranic, Alma passed all six disciplines with a perfect score.",
    newsAllLink: "All news \u2192",
    newsPageTitle: "News",
    newsBackLink: "\u2190 Back to homepage",

    // Articles – common
    articleBack: "\u2190 Back to news",
    shareLabel: "Share:",
    shareCopy: "Copy link",

    // Articles – individual
    artProvodoviceCat: "Shows",
    artProvodoviceTitle: "Alma\u2019s first open class \u2013 Provodovice dog show",
    artBordoviceCat: "Shows",
    artBordoviceTitle: "Alma and mum at the Bordovice show",
    artOvvrCat: "Working tests",
    artOvvrTitle: "Alma aced the OVVR working test",
    artHumpolecCat: "Shows",
    artHumpolecTitle: "Alma shines at the Humpolec retriever show",
    artNarozeninyCat: "Everyday life",
    artNarozeninyTitle: "Alma celebrates her 1st birthday",
    artRtgCat: "Health",
    artRtgTitle: "X-ray results: hips, elbows & spine",
    artGenetickeCat: "Health",
    artGenetickeTitle: "Genetic test results are in",

    // News list – months and excerpts
    newsListMonth1: "Mar",
    newsListMonth2: "Jul",
    newsListMonth3: "Jun",
    newsListMonth4: "May",
    newsListMonth5: "May",
    newsListMonth6: "Feb",
    newsListMonth7: "Jan",
    newsListExcerpt1: "Alma entered the open class for the first time and won V1, class winner, regional winner and 3rd place in FCI group 8!",
    newsListExcerpt2: "At the regional club show Hubertka 2025, Alma competed in the junior class for the last time. Rating V2 with an excellent critique.",
    newsListExcerpt3: "At the natural retrieving ability test in \u00dast\u00ed u Hranic, Alma passed all six disciplines with a perfect score.",
    newsListExcerpt4: "Full genetic screening for hereditary diseases. Alma is a healthy girl \u2013 most results N/N (clear).",
    newsListExcerpt5: "At the Club and Specialty retriever show in Humpolec, Alma received an Excellent rating both days. 30 females in her class!",
    newsListExcerpt6: "On International Golden Retriever Day we went for X-rays. Results: hips B/B, elbows 0/0, OCD 0/0, SA & LTV clear.",
    newsListExcerpt7: "Cake, presents and a little party with friends. Happy 1st birthday, dear Alma!",

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

    // Pregnancy guide
    pregBreadcrumb: "Dog pregnancy calculator",
    pregTitle: "Dog pregnancy calculator — due date & puppy development",
    pregLead: "Free online dog pregnancy calculator. Enter the mating date and instantly find out the expected whelping date, when to schedule an ultrasound and X-ray, and follow your puppies' development week by week — from fertilisation to birth.",
    pregDateLabel: "Mating date",
    pregCalculate: "Calculate",
    pregDueDate: "Expected whelping date",
    pregWindow: "Whelping window",
    pregCurrentDay: "Current day of pregnancy",
    pregCountdown: "Days until whelping",
    pregDay1: "Day 1",
    pregDay63: "Day 63",
    pregTimelineTitle: "Puppy development week by week",
    pregTipLabel: "Recommendation:",
    pregMilestoneUltrasound: "Ultrasound",
    pregMilestoneXray: "X-ray",
    pregMilestoneBirth: "Whelping!",
    pregWeek1Title: "Week 1", pregWeek1Days: "day 1–7",
    pregWeek1Dev: "After mating, fertilisation occurs. Sperm travel through the oviduct to the eggs. Fertilised eggs begin to divide.",
    pregWeek1Tip: "Normal routine, quality food. No special changes needed. Avoid vaccinations and chemical treatments.",
    pregWeek2Title: "Week 2", pregWeek2Days: "day 8–14",
    pregWeek2Dev: "Embryos travel through the oviduct towards the uterus. Cells continue to divide, forming germ layers that will become organs.",
    pregWeek2Tip: "No major changes. Ensure a calm environment, avoid stress and excessive physical activity.",
    pregWeek3Title: "Week 3", pregWeek3Days: "day 15–21",
    pregWeek3Dev: "Embryos implant into the uterine wall (around day 16–20). The placenta begins to form, supplying nutrients to the foetuses. The dam may have reduced appetite or morning sickness.",
    pregWeek3Tip: "Offer smaller portions more frequently. If the dam refuses food, don't panic – this is normal. Continue to skip vaccinations.",
    pregWeek4Title: "Week 4", pregWeek4Days: "day 22–28",
    pregWeek4Dev: "Organs, eyes and spine develop. Around day 25, pregnancy can be confirmed by ultrasound and foetal heartbeats detected. Embryos are about 1.5 cm long.",
    pregWeek4Tip: "Ultrasound at the vet (day 25–30) to confirm pregnancy. Limit jumping and rough play.",
    pregWeek5Title: "Week 5", pregWeek5Days: "day 29–35",
    pregWeek5Dev: "Foetuses grow rapidly – paws, claws and whiskers develop. The dam's belly starts to visibly enlarge. Foetuses measure about 3–4 cm.",
    pregWeek5Tip: "Gradually increase protein intake. Start transitioning to higher-quality food (puppy formula). Shorter but more frequent walks.",
    pregWeek6Title: "Week 6", pregWeek6Days: "day 36–42",
    pregWeek6Dev: "Foetuses are fully formed – they have developed fur, pigmentation and reproductive organs. They gain weight rapidly. The dam gains weight noticeably and her belly is clearly larger.",
    pregWeek6Tip: "Feed 3× daily in smaller portions (puppy food). The dam needs more energy, but her stomach has less room. Provide a quiet resting area.",
    pregWeek7Title: "Week 7", pregWeek7Days: "day 43–49",
    pregWeek7Dev: "Foetal skeletons mineralise – visible on X-ray from day 45. This allows an accurate puppy count. Foetuses measure about 7–9 cm with fully developed coats.",
    pregWeek7Tip: "X-ray at the vet (day 45–50) to count puppies. Prepare the whelping box. Limit physical activity to calm walks.",
    pregWeek8Title: "Week 8", pregWeek8Days: "day 50–56",
    pregWeek8Dev: "Puppies are nearly fully developed and move into birthing position. The dam starts 'nesting' – seeking a quiet spot and may become restless. Mammary glands fill with milk.",
    pregWeek8Tip: "The whelping box should be ready and the dam should be accustomed to it. Start taking rectal temperature twice daily. Prepare all whelping supplies.",
    pregWeek9Title: "Week 9", pregWeek9Days: "day 57–65",
    pregWeek9Dev: "Puppies are ready for the world! The dam may refuse food, become restless and seek privacy. A temperature drop below 37 °C signals whelping within 12–24 hours. Golden Retrievers typically have litters of 6–10 puppies.",
    pregWeek9Tip: "Watch for temperature drop (below 37 °C = whelping within 24 hours). Have the vet's number ready. Ensure calm and warmth. If contractions last longer than 2 hours without a puppy being born, call the vet.",
    pregWeek1Size: "~ grain of sand",
    pregWeek2Size: "~ poppy seeds (0.5 mm)",
    pregWeek3Size: "~ grain of rice (5 mm)",
    pregWeek4Size: "~ hazelnut (1.5 cm)",
    pregWeek5Size: "~ walnut (3\u20134 cm)",
    pregWeek6Size: "~ tangerine (6\u20139 cm)",
    pregWeek7Size: "~ lemon (10\u201314 cm)",
    pregWeek8Size: "~ mango (15\u201318 cm)",
    pregWeek9Size: "~ small melon (20 cm, 350\u2013500 g)",
    pregKeyDatesTitle: "Key dates",
    pregKeyMating: "Mating date",
    pregKeyUltrasound: "Ultrasound (day 25\u201330)",
    pregKeyXray: "X-ray (day 45\u201350)",
    pregKeyBirth: "Whelping (day 63)",
    pregKeyDeparture: "First departure to new homes (from week 8)",
    pregShowPast: "Show previous weeks",
    pregHidePast: "Hide previous weeks",
    pregVideoTitle: "Puppy development in the womb",
    pregVideoDesc: "Fascinating National Geographic footage showing how puppies develop from fertilisation to birth.",
    pregChecklistTitle: "What to prepare for whelping",
    pregChecklistItems: "Whelping box (min. 120\u00d7120 cm for a Golden Retriever); Clean towels and pads; Digital thermometer; Disinfectant and sterile scissors; Scale for weighing puppies; Coloured collars/ribbons to identify puppies; Vet's and emergency phone numbers; Puppy milk replacer (just in case)",
    pregGoldenTitle: "Golden Retriever specifics",
    pregGoldenInfo: "Gestation length: 58\u201365 days (average 63 days); Typical litter size: 6\u201310 puppies; Newborn puppy weight: 350\u2013500 g; Golden Retrievers are generally excellent mothers; C-section is less common in this breed; After whelping the dam needs 3\u20134\u00d7 more energy",
    pregFaqTitle: "Frequently asked questions about dog pregnancy",
    pregFaq1Q: "How long is a dog pregnant?",
    pregFaq1A: "A dog\u2019s pregnancy (gestation) lasts an average of 63 days (9 weeks) from the mating date. Whelping may occur between day 58 and day 65. Golden Retrievers average 63 days of gestation.",
    pregFaq2Q: "When to do an ultrasound on a pregnant dog?",
    pregFaq2A: "An ultrasound can be performed between day 25 and 30 after mating. At this stage the vet can confirm pregnancy and detect foetal heartbeats.",
    pregFaq3Q: "When to do an X-ray on a pregnant dog?",
    pregFaq3A: "An X-ray is recommended from day 45 of pregnancy. It allows accurate counting of puppies based on visible skeletal structures.",
    pregFaq4Q: "How many puppies does a Golden Retriever have?",
    pregFaq4A: "A Golden Retriever typically has 6 to 10 puppies per litter. A newborn puppy weighs 350\u2013500 g. Litter size depends on the dam\u2019s age, health, and genetics.",
    pregFaq5Q: "How do I know my dog is about to give birth?",
    pregFaq5A: "The main sign of imminent whelping is a drop in the dam\u2019s body temperature below 37 \u00b0C (98.6 \u00b0F), signalling birth within 12\u201324 hours. She may become restless, refuse food, and seek a secluded spot.",
    pregFaq6Q: "When can puppies go to their new homes?",
    pregFaq6A: "Puppies can leave for their new homes at the earliest at 8 weeks of age (56 days after birth). Until then they need to stay with their mother for proper physical and psychological development.",
    pregDisclaimer: "<strong>Disclaimer:</strong> This guide is for informational purposes only. Every pregnancy is unique. Always consult your veterinarian and follow their recommendations.",
    pregBackHome: "Back to homepage",
    pregContactCta: "Have a question? Contact us",

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

  // Remove loading class (prevents CZ flash when EN is saved)
  document.documentElement.classList.remove("i18n-loading");
}

function setupLanguageSwitch() {
  const savedLang = localStorage.getItem("lang") || "cs";
  setLanguage(savedLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      localStorage.setItem("lang", lang);
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

      // Show/hide items, restart animation without layout thrashing
      const visible = [];
      items.forEach((item) => {
        const cat = item.getAttribute("data-gallery-category");
        if (filter === "all" || filter === cat) {
          item.style.display = "";
          visible.push(item);
        } else {
          item.style.display = "none";
        }
      });
      requestAnimationFrame(() => {
        visible.forEach((item, i) => {
          item.style.animationDelay = (i * 80) + "ms";
          item.classList.remove("gallery-fade-in");
          void item.offsetWidth;
          item.classList.add("gallery-fade-in");
        });
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

  let lastSubmit = 0;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Rate limit: 10 seconds between submissions
    const now = Date.now();
    if (now - lastSubmit < 10000) return;
    lastSubmit = now;

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
            window.location.href = "dekujeme.html";
          }, 800);
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

    // Add animatable class via JS so cards are visible without JS
    cards.forEach(function(c) { c.classList.add("is-animatable"); });

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
  const btn = document.querySelector(".hamburger");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  // Create backdrop
  const backdrop = document.createElement("div");
  backdrop.className = "mobile-menu-backdrop";
  menu.parentNode.insertBefore(backdrop, menu);

  function closeMenu() {
    menu.classList.remove("is-open");
    backdrop.classList.remove("is-visible");
    btn.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    backdrop.classList.toggle("is-visible", open);
    btn.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });

  backdrop.addEventListener("click", closeMenu);

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
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

function loadGoogleFonts() {
  if (document.getElementById("google-fonts-link")) return;
  const preconnect1 = document.createElement("link");
  preconnect1.rel = "preconnect";
  preconnect1.href = "https://fonts.googleapis.com";
  document.head.appendChild(preconnect1);

  const preconnect2 = document.createElement("link");
  preconnect2.rel = "preconnect";
  preconnect2.href = "https://fonts.gstatic.com";
  preconnect2.crossOrigin = "anonymous";
  document.head.appendChild(preconnect2);

  const link = document.createElement("link");
  link.id = "google-fonts-link";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400..700&family=Raleway:wght@300;400;500;600&display=swap";
  document.head.appendChild(link);
}

function loadGoogleMap() {
  const iframe = document.getElementById("google-map");
  const placeholder = document.getElementById("map-placeholder");
  if (iframe && iframe.dataset.src) {
    iframe.src = iframe.dataset.src;
    iframe.style.display = "";
  }
  if (placeholder) placeholder.style.display = "none";
}

function blockGoogleServices() {
  const iframe = document.getElementById("google-map");
  const placeholder = document.getElementById("map-placeholder");
  if (iframe) iframe.style.display = "none";
  if (placeholder) placeholder.style.display = "flex";
}

function loadGoogleAnalytics() {
  if (document.getElementById("ga-script")) return;
  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-XDKPV7JGM3";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", "G-XDKPV7JGM3");
}

function applyConsentState(consent) {
  if (consent === "accepted") {
    loadGoogleFonts();
    loadGoogleMap();
    loadGoogleAnalytics();
  } else if (consent === "rejected") {
    blockGoogleServices();
  }
}

function setupCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept");
  const rejectBtn = document.getElementById("cookie-reject");
  const consent = localStorage.getItem("cookieConsent");

  // On subpages without banner, still apply consent (e.g. load GA)
  if (!banner || !acceptBtn) {
    if (consent) applyConsentState(consent);
    return;
  }

  if (!consent) {
    banner.style.display = "";
  } else {
    applyConsentState(consent);
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
    applyConsentState("accepted");
  });

  if (rejectBtn) {
    rejectBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "rejected");
      banner.style.display = "none";
      applyConsentState("rejected");
    });
  }
}

function setupStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle("is-scrolled", window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function setupShareButtons() {
  document.querySelectorAll(".share-btn--copy").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const url = btn.dataset.url || window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        btn.classList.add("share-btn--copied");
        const label = btn.querySelector(".share-btn-label");
        const orig = label.textContent;
        label.textContent = "Zkopírováno!";
        setTimeout(() => {
          btn.classList.remove("share-btn--copied");
          label.textContent = orig;
        }, 2000);
      });
    });
  });
}

function setupPregnancyCalculator() {
  var btn = document.getElementById("preg-calculate");
  var input = document.getElementById("mating-date");
  if (!btn || !input) return;

  // --- Generate vertical paw prints ---
  // Realistic 4-legged gait: front-left, hind-right, front-right, hind-left
  // Sinusoidal path with natural spacing
  var pawLine = document.getElementById("preg-paw-line");
  var pawLeft = '<svg class="paw" viewBox="0 0 32 32" fill="currentColor"><ellipse cx="16" cy="21" rx="5" ry="4"/><ellipse cx="9.5" cy="12" rx="2.5" ry="3.2"/><ellipse cx="15" cy="9.5" rx="2.2" ry="3"/><ellipse cx="21" cy="10" rx="2.3" ry="3"/><ellipse cx="25" cy="14.5" rx="2" ry="2.8"/></svg>';
  var pawRight = '<svg class="paw" viewBox="0 0 32 32" fill="currentColor"><ellipse cx="16" cy="21" rx="5" ry="4"/><ellipse cx="22.5" cy="12" rx="2.5" ry="3.2"/><ellipse cx="17" cy="9.5" rx="2.2" ry="3"/><ellipse cx="11" cy="10" rx="2.3" ry="3"/><ellipse cx="7" cy="14.5" rx="2" ry="2.8"/></svg>';
  var PAW_COUNT = 48;
  var TRAIL_LEN = 6;
  var STEP_DELAY = 220;
  var WAVE_AMP = 6;
  var pawWalkTimers = [];
  var allPaws = [];

  if (pawLine) {
    pawLine.innerHTML = "";
    for (var i = 0; i < PAW_COUNT; i++) {
      // 4-beat gait: FL, HR, FR, HL (front-left, hind-right, front-right, hind-left)
      var beat = i % 4;
      var isLeftPaw = (beat === 0 || beat === 3); // FL or HL
      var div = document.createElement("div");
      div.innerHTML = isLeftPaw ? pawLeft : pawRight;
      var paw = div.firstChild;

      var yPct = (i / (PAW_COUNT - 1)) * 100;
      // Sinusoidal wave — left paws go left, right paws go right
      var wave = Math.sin((i / PAW_COUNT) * Math.PI * 4) * WAVE_AMP;
      var sideOffset = isLeftPaw ? -3 : 3;
      var xPx = wave + sideOffset;
      // Slight rotation following the curve
      var rot = 180 + (Math.cos((i / PAW_COUNT) * Math.PI * 4) * 6);
      var scale = 0.8 + Math.sin(i * 0.9) * 0.08;

      paw.style.top = yPct + "%";
      paw.style.transform = "translateX(calc(-50% + " + xPx.toFixed(1) + "px)) rotate(" + rot.toFixed(1) + "deg) scale(" + scale.toFixed(2) + ")";
      pawLine.appendChild(paw);
    }
    allPaws = pawLine.querySelectorAll(".paw");
  }

  // Walk paws animation — same pattern as hero stepper
  function walkPawsDown(targetIdx) {
    pawWalkTimers.forEach(function(t) { clearTimeout(t); });
    pawWalkTimers = [];
    allPaws.forEach(function(p) { p.classList.remove("is-visible", "is-fading"); });

    for (var i = 0; i <= targetIdx; i++) {
      (function(idx, delay) {
        pawWalkTimers.push(setTimeout(function() {
          allPaws[idx].classList.remove("is-fading");
          allPaws[idx].classList.add("is-visible");
          for (var j = 0; j < idx; j++) {
            var age = idx - j;
            if (age <= TRAIL_LEN) {
              allPaws[j].classList.add("is-visible");
              allPaws[j].classList.remove("is-fading");
              if (age === TRAIL_LEN) {
                allPaws[j].classList.add("is-fading");
              }
            } else {
              allPaws[j].classList.remove("is-visible");
              allPaws[j].classList.add("is-fading");
            }
          }
        }, delay));
      })(i, i * STEP_DELAY);
    }

    // After walk — let trail linger longer, then slowly fade
    pawWalkTimers.push(setTimeout(function() {
      allPaws.forEach(function(p) { p.classList.add("is-fading"); });
    }, (targetIdx + 1) * STEP_DELAY + 1500));

    pawWalkTimers.push(setTimeout(function() {
      allPaws.forEach(function(p) {
        p.classList.remove("is-visible", "is-fading");
      });
    }, (targetIdx + 1) * STEP_DELAY + 3500));
  }

  // Trigger paw walk when timeline scrolls into view
  if (pawLine && allPaws.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var pawObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          walkPawsDown(PAW_COUNT - 1);
          pawObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    pawObserver.observe(document.getElementById("preg-timeline"));
  } else if (allPaws.length) {
    allPaws.forEach(function(p) { p.classList.add("is-visible"); });
  }

  // --- Scroll-triggered card animations ---
  var weeks = document.querySelectorAll(".preg-week");
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReduced && weeks.length) {
    weeks.forEach(function(w) { w.classList.add("is-animatable"); });
    var weekObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var w = entry.target;
          var idx = parseInt(w.dataset.week, 10);
          setTimeout(function() {
            w.classList.add("is-anim-visible");
          }, (idx - 1) * 120);
          weekObserver.unobserve(w);
        }
      });
    }, { threshold: 0.15 });
    weeks.forEach(function(w) { weekObserver.observe(w); });
  }

  // --- Past weeks toggle ---
  var toggleBtn = document.getElementById("preg-past-toggle");
  var pastExpanded = false;

  function collapsePastWeeks(activeWeek) {
    if (activeWeek <= 1) return;
    toggleBtn.hidden = false;
    pastExpanded = false;
    toggleBtn.classList.remove("is-expanded");
    var toggleLabel = toggleBtn.querySelector("[data-i18n]");

    weeks.forEach(function(w) {
      var wk = parseInt(w.dataset.week, 10);
      if (wk < activeWeek) {
        w.classList.add("is-past-hidden");
      } else {
        w.classList.remove("is-past-hidden");
      }
    });

    toggleBtn.onclick = function() {
      pastExpanded = !pastExpanded;
      toggleBtn.classList.toggle("is-expanded", pastExpanded);
      var lang = document.documentElement.lang || "cs";
      if (toggleLabel) {
        toggleLabel.textContent = pastExpanded
          ? (lang === "en" ? "Hide previous weeks" : "Skrýt předchozí týdny")
          : (lang === "en" ? "Show previous weeks" : "Zobrazit předchozí týdny");
      }
      weeks.forEach(function(w) {
        var wk = parseInt(w.dataset.week, 10);
        if (wk < activeWeek) {
          w.classList.toggle("is-past-hidden", !pastExpanded);
          if (pastExpanded) {
            w.classList.remove("is-animatable");
            w.classList.add("is-anim-visible");
          }
        }
      });
    };
  }

  // --- Date formatting helper ---
  function fmt(d) {
    var lang = document.documentElement.lang || "cs";
    return d.toLocaleDateString(lang === "en" ? "en-GB" : "cs-CZ", {
      day: "numeric", month: "long", year: "numeric"
    });
  }

  function fmtShort(d) {
    var lang = document.documentElement.lang || "cs";
    return d.toLocaleDateString(lang === "en" ? "en-GB" : "cs-CZ", {
      day: "numeric", month: "short"
    });
  }

  function addDays(d, n) {
    var r = new Date(d);
    r.setDate(r.getDate() + n);
    return r;
  }

  // --- Main calculate ---
  btn.addEventListener("click", function() {
    var matingDate = new Date(input.value);
    if (isNaN(matingDate.getTime())) return;

    // Reset state
    toggleBtn.hidden = true;
    weeks.forEach(function(w) { w.classList.remove("is-past-hidden", "preg-week--active", "preg-week--past"); });

    var results = document.getElementById("preg-results");
    results.hidden = false;

    var dueDate = addDays(matingDate, 63);
    var earlyDate = addDays(matingDate, 58);
    var lateDate = addDays(matingDate, 65);
    var ultrasoundStart = addDays(matingDate, 25);
    var ultrasoundEnd = addDays(matingDate, 30);
    var xrayStart = addDays(matingDate, 45);
    var xrayEnd = addDays(matingDate, 50);
    var departureDate = addDays(matingDate, 63 + 56); // porod + 8 tyden

    var lang = document.documentElement.lang || "cs";

    document.getElementById("preg-due-date").textContent = fmt(dueDate);
    document.getElementById("preg-window").textContent = fmt(earlyDate) + " – " + fmt(lateDate);

    // Key dates
    var keyDates = document.getElementById("preg-key-dates");
    keyDates.hidden = false;
    document.getElementById("key-mating").textContent = fmt(matingDate);
    document.getElementById("key-ultrasound").textContent = fmtShort(ultrasoundStart) + " – " + fmtShort(ultrasoundEnd);
    document.getElementById("key-xray").textContent = fmtShort(xrayStart) + " – " + fmtShort(xrayEnd);
    document.getElementById("key-birth").textContent = fmt(dueDate);
    document.getElementById("key-departure").textContent = (lang === "en" ? "from " : "od ") + fmt(departureDate);

    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var matingMs = new Date(matingDate);
    matingMs.setHours(0, 0, 0, 0);

    var currentDay = Math.floor((today - matingMs) / (1000 * 60 * 60 * 24));
    var daysLeft = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));

    var dayEl = document.getElementById("preg-current-day");
    var countdownEl = document.getElementById("preg-countdown");
    var progressEl = document.getElementById("preg-progress");

    if (currentDay >= 0 && currentDay <= 65) {
      var currentWeek = Math.ceil(currentDay / 7) || 1;
      if (currentWeek > 9) currentWeek = 9;
      dayEl.textContent = (lang === "en" ? "Day " : "Den ") + currentDay +
        " (" + (lang === "en" ? "week " : "tyden ") + currentWeek + ")";

      if (daysLeft > 0) {
        countdownEl.textContent = daysLeft + (lang === "en" ? " days" : " dni");
      } else if (daysLeft === 0) {
        countdownEl.textContent = lang === "en" ? "Today!" : "Dnes!";
      } else {
        countdownEl.textContent = lang === "en" ? "Past due date" : "Po terminu";
      }

      var progress = Math.min(Math.max(currentDay / 63 * 100, 0), 100);
      progressEl.style.width = progress + "%";

      // Highlight weeks
      weeks.forEach(function(week) {
        var w = parseInt(week.dataset.week);
        week.classList.remove("preg-week--active", "preg-week--past");
        if (w === currentWeek) {
          week.classList.add("preg-week--active");
        } else if (w < currentWeek) {
          week.classList.add("preg-week--past");
        }
      });

      // Collapse past weeks
      collapsePastWeeks(currentWeek);

    } else if (currentDay < 0) {
      dayEl.textContent = lang === "en" ? "Not started yet" : "B\u0159ezost je\u0161t\u011b neza\u010dala";
      countdownEl.textContent = Math.abs(currentDay) + (lang === "en" ? " days until mating" : " dn\u00ed do kryt\u00ed");
      progressEl.style.width = "0%";
      weeks.forEach(function(week) {
        week.classList.remove("preg-week--active", "preg-week--past", "is-past-hidden");
      });
      toggleBtn.hidden = true;
    } else {
      dayEl.textContent = lang === "en" ? "Pregnancy ended" : "B\u0159ezost skon\u010dila";
      countdownEl.textContent = "\u2014";
      progressEl.style.width = "100%";
      weeks.forEach(function(week) {
        week.classList.add("preg-week--past");
        week.classList.remove("preg-week--active", "is-past-hidden");
      });
      toggleBtn.hidden = true;
    }
  });
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
  setupCookieBanner();
  setupStickyHeader();
  setupShareButtons();
  setupPregnancyCalculator();
});


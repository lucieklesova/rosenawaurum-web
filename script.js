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
    navBreed: "O plemeni",
    navContact: "Kontakt",
    navCalc: "Kalkulačka březosti",
    cookieTitle: "Cookies a soukromí",
    cookieText: 'Používáme cookies a externí služby (Google Fonts, Google Maps, Google Analytics, vložená YouTube videa), které mohou zpracovávat vaši IP adresu. Vy rozhodujete, co chcete povolit. <a href="/ochrana-osobnich-udaju.html">Více informací</a>.',
    cookieAccept: "Přijmout vše",
    cookieReject: "Odmítnout vše",
    cookieSettings: "Nastavení",
    cookieSettingsTitle: "Nastavení cookies",
    cookieBack: "Zpět",
    cookieSave: "Uložit volbu",
    cookieCatNecessary: "Nezbytné",
    cookieCatNecessaryDesc: "Potřebné pro základní fungování webu — uložení jazyka a vaší volby cookies. Vždy zapnuté.",
    cookieCatAnalytics: "Analytika",
    cookieCatAnalyticsDesc: "Google Analytics — anonymní statistiky návštěvnosti, které nám pomáhají web vylepšovat.",
    cookieCatExternal: "Externí obsah",
    cookieCatExternalDesc: "Google Fonts pro krásnější typografii, Google Maps v kontaktu a vložená YouTube videa v článcích.",
    cookieFooterLink: "Nastavení cookies",
    mapBlocked: "Pro zobrazení mapy je nutné přijmout cookies třetích stran.",

    heroTitle: "Zlatí retrívři vychovaní s\u00a0láskou v\u00a0srdci Beskyd.",
    heroSubtitle:
      "Malá rodinná chovatelská stanice FCI z\u00a0Beskyd na\u00a0Moravě, nedaleko Rožnova pod Radhoštěm. Štěňata vyrůstají doma, mezi lidmi, s\u00a0důrazem na zdraví, vyrovnanou povahu a\u00a0pevné zázemí.",
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
      'Rosenaw Aurum je registrovaná chovatelská stanice <a href="https://www.fci.be/" target="_blank" rel="noopener noreferrer">FCI</a>, členem <a href="https://www.kchls.cz/" target="_blank" rel="noopener noreferrer">Klubu chovatelů loveckých slídičů (KCHLS)</a> a <a href="https://www.retriever-klub.cz/" target="_blank" rel="noopener noreferrer">Retriever Klubu CZ</a>.',

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
    almaTitleWtPrep: "v přípravě (E)",
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
    puppiesPlannedDate: "Jaro / léto 2027",
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
    newsMonth0: "Dub",
    newsTitle0: "Náš první Working Test – Šilheřovice",
    newsExcerpt0: "Alma absolvovala svůj první Working Test v Šilheřovicích. Třída E, mezinárodní rozhodčí a spousta nových zkušeností z lesa.",
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
    artSilheroviceCat: "Zkoušky",
    artSilheroviceTitle: "Náš první Working Test – Šilheřovice 2026",
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

    // Bordovice – body
    artBordoviceP1: 'Sobotu 26.\u00a07.\u00a02025 jsme strávili na <strong>oblastní klubové výstavě v\u00a0Bordovicích – Hubertka 2025</strong>, kde se naposledy ve třídě mladých předvedla naše <strong>Alma Bohemica Aurum</strong>. A vedla si skvěle!',
    artBordoviceResult: '<strong>Alma Bohemica Aurum</strong><br><em>(Brandon de Ria Vela \u00d7 Lollipop Dorado Blanco)</em><br>Třída mladých \u2022 <strong>V2</strong> \u2022 velmi pěkný posudek',
    artBordoviceP2: 'Přestože konkurence nebyla tentokrát početná, Alma si odnesla <strong>výborný posudek</strong>, který ocenil její elegantní pohyb, proporce a klidné vystupování. V\u00a0kruhu působila vyrovnaně a bylo znát, že se cítí dobře. Navíc se potkala se svou <strong>nevlastní sestřičkou</strong>, a i to přispělo k\u00a0příjemné atmosféře celé třídy.',
    artBordoviceP3: 'Doprovod jí dělala její maminka <strong>Lollipop Dorado Blanco</strong>, která se představila ve třídě pracovní a odnesla si krásné 3.\u00a0místo v\u00a0soutěži o\u00a0nejlepšího pracovního psa. Poprvé také Alminka strávila pár dní se svoji maminkou a nevlastní sestřičkou v\u00a0domovské chovatelské stanici – a bylo vidět, že ví, kam patří.',
    artBordoviceP4: 'Výstava probíhala ve velmi přátelském duchu. Dorazili za námi <strong>fanoušci z\u00a0blízké i\u00a0vzdálené rodiny</strong>, což nás moc potěšilo. Jediné, co výjimečně nevyšlo podle představ, bylo počasí – <strong>déšť nás bohužel provázel celý den</strong>. Ale náladu jsme si tím zkazit nenechali.',
    artBordoviceP5: "Děkuji:",
    artBordoviceThanksList: "<strong>Amálce Vackové</strong> za skvělý základ naší mladé slečny a trpělivý chovatelský servis 24/7;<strong>Nataliia Romashko</strong> za profi grooming – ty pacičky jsou dokonalé",
    artBordoviceP6: "Těšíme na další akce, kde ukáže, co v\u00a0ní je!",

    // Provodovice – body
    artProvodoviceP1: 'Tentokrát jsme se vydaly na výstavu do Provodovic – a\u00a0byl to den, na který jen tak nezapomeneme. <strong>Alma nastoupila poprvé v\u00a0životě do otevřené třídy!</strong>',
    artProvodoviceResult: '<strong>Alma Bohemica Aurum</strong><br><em>(Brandon de Ria Vela \u00d7 Lollipop Dorado Blanco)</em><br>Otevřená třída \u2022 <strong>V1 – Výborná 1</strong> \u2022 Vítěz třídy \u2022 Oblastní vítěz<br>Postup do závěrečných soutěží \u2192 <strong>3.\u00a0místo ve skupině FCI\u00a08</strong>',
    artProvodoviceP2: "<strong>Posudek rozhodčího:</strong>",
    artProvodoviceQuote: '\u201eSprávná velikost, pěkná hlava, nůžkový skus, delší pevný hřbet, správný hrudník, korektní úhlení a\u00a0pěkné předvedení.\u201c',
    artProvodoviceP3: 'Počasí nám bohužel nepřálo – <strong>zima nás provázela celý den</strong>. Přesto měla akce skvělou atmosféru a\u00a0Alma se předvedla naprosto fantasticky.',
    artProvodoviceP4: "Děkuji:",
    artProvodoviceThanksList: "<strong>Janě Janíčkové z\u00a0Beskyd Hill</strong> za poskytnutí zázemí;<strong>Ondrovi z\u00a0Athena Bella</strong> za podporu a\u00a0povzbuzování",
    artProvodoviceP5: "Jsme na Almu neskutečně hrdí. Debut v\u00a0otevřené třídě nemohl dopadnout lépe!",

    // OVVR – body
    artOvvrP1: 'V\u00a0neděli 1.\u00a0června 2025, na Den dětí, jsme s\u00a0Alminkou vyrazily na naši první velkou zkoušku – <strong>OVVR</strong> (ověření vrozených vloh retrivrů) v\u00a0Ústí u\u00a0Hranic. Počasí bylo příznivé se sluncem a skvělou náladou. Sešlo se deset psů s\u00a0jejich majiteli, mnozí známí z\u00a0tréninků. A aby toho nebylo málo – zkoušek se účastnily i dvě naše trenérky!',
    artOvvrP2: '<strong>Alminka to vzala hopem</strong> – s\u00a0lehkostí a elegancí. První disciplína posouzení povahy proběhla hladce. Alminka sedávala klidně u\u00a0nohy a chovala se uklidněně.',
    artOvvrP3: "Druhá disciplína týkající se chování po výstřelu také proběhla bez problémů. Průvodkyně musela jen zachytit správný moment k\u00a0přivolání.",
    artOvvrP4: 'Třetí část – <strong>dohledávka</strong> – to už mi začínal trochu bušit tep. Alminka zde excelovala, pachový dummy našla rychle a přinesla jej v\u00a0přímce. Předvedla také aport v\u00a0terénu, což zvládlo jen několik psů.',
    artOvvrP5: "Chůze u\u00a0nohy na vodítku i volně proběhla perfektně, přestože Alminka obvykle prozkoumává terén čumákem.",
    artOvvrP6: 'Finální disciplína, <strong>aport z\u00a0vody</strong>, byla nejvíce napínavá. Tentokrát se vyhnula otřepávání se před předáním dummy.',
    artOvvrP7: 'Celé dopoledne byla Alminka naprosto úžasná. Mezi disciplínami si odpočívala. A výsledek? <strong>Naprosto perfektní – všechny disciplíny zvládla na plný počet bodů!</strong>',
    artOvvrP8: "Splnily jsme všechny podmínky pro uchovnění, až na věk. Rozhodně tím nekončíme. Tohle byla první vlaštovka a my už se těšíme na další výzvy, tréninky i nové zážitky.",

    // Humpolec – body
    artHumpolecP1: 'V\u00a0sobotu a neděli (10.\u00a0a\u00a011.\u00a0května 2025) jsme vyrazili do Humpolce na <strong>Klubovou a Speciální výstavu retrieverů</strong>. Alminku jsme přihlásili do nejpočetnější kategorie <strong>Mladých</strong> (protože proč si to neudělat těžší?), kde se v\u00a0kruhu sešlo kolem 30\u00a0fen – prostě konkurence jako na castingu do psího Hollywoodu.',
    artHumpolecP2: 'S\u00a0lehkou nervozitou a mírným optimismem jsme čekali, jak to dopadne. A dopadlo to skvěle! Alminka se rozhodně neztratila a oba dny si odnesla krásné <strong>hodnocení Výborná</strong>.',
    artHumpolecP3: 'Na výstavě se Alminka konečně potkala i se svým bráchou <strong>Amigem</strong>, který si rovnou střihl svůj první CAC titul. Moc gratulujeme!',
    artHumpolecP4: 'Máme doma nádherné posudky – oběma rozhodčím se obzvlášť líbila Alminčina srst a její svižný, energický pohyb. Pochvalu dostalo i předvedení v\u00a0kruhu – za to patří obrovské díky chovatelce Amálce, která z\u00a0Alminky udělala výstavního profíka.',
    artHumpolecP5: 'Radost máme obrovskou – a jako třešnička na dortu přichází zpráva, že Alminka tímto <strong>splnila další podmínku pro uchovnění!</strong> Navíc byla na výstavě i přeměřena – je to vysoká slečna s\u00a0krásným úplným chrupem a nůžkovým skusem, jak se na správného retrievera sluší a patří.',
    artHumpolecP6: "Teď už nám zbývá jen splnit OVVR – a pak už Alminka může začít psát vlastní kynologickou historii.",

    // Narozeniny – body
    artNarozeninyP1: "Alminka dnes oslavila svoje první narozeniny. Nesměl chybět dort, ani dárky. Dokonce si děti vyžádaly i menší oslavu, na kterou pozvaly svoje kamarády.",
    artNarozeninyP2: "Milá Alminko, přejeme Ti hlavně hodně zdravíčka a o\u00a0to všechno ostatní se rádi postaráme.",
    artNarozeninyP3: 'A jak to vypadalo, když se narodila, se můžete podívat do deníčku Vrhu\u00a0Áček z\u00a0chovatelské stanice <a href="https://www.bohemica-aurum.cz/" target="_blank" rel="noopener noreferrer">Bohemica Aurum</a>.',

    // RTG – body
    artRtgP1: 'Dnes na <strong>Mezinárodní den Zlatých retrívrů</strong> jsme s\u00a0Alminkou vyrazili do Opavy k\u00a0MVDr.\u00a0Pepříkovi, kde jsme nechali vyhotovit RTG snímky kyčlí a loktů – jednu z\u00a0povinných podmínek pro uchovnění. Zároveň jsme si nechali vyšetřit i páteř včetně spondylózy.',
    artRtgP2: "Máme obrovskou radost z\u00a0výsledků a uděláme vše pro to, aby se Alminka těšila pevnému zdraví a dožila se vysokého věku.",
    artRtgQuote: "A jak to všechno zvládla? Jako správný retrívr! Hned po probuzení z\u00a0narkózy se rozeběhla pomazlit za paní v\u00a0čekárně.",
    artRtgResultsList: "DKK: <strong>B/B</strong>;DLK: <strong>0/0</strong>;OCD: <strong>0/0</strong>;SA: <strong>clear</strong>;LTV: <strong>clear</strong>",
    artRtgP3: 'Výsledky jsou k\u00a0dispozici ke stažení v\u00a0sekci <a href="../alma-dokumenty.html">Dokumenty</a>.',

    // Genetické testy – body
    artGenetickeP1: 'Na poslední výstavě v\u00a0Humpolci jsme využili příležitosti a nechali jsme si udělat <strong>genetické testy</strong> na některá dědičná onemocnění, která se mohou objevit u\u00a0zlatých retrívrů.',
    artGenetickeP2: "Testovali jsme:",
    artGenetickeTestList: "<strong>PRA</strong> (prcd, GR-PRA1, GR-PRA2) – progresivní retinální atrofie, různé formy vedoucí ke slepotě;<strong>Ichtyóza 1 a 2</strong> – dědičná kožní onemocnění způsobující suchou, šupinatou srst;<strong>GRMD</strong> – muskulární dystrofie, vzácná porucha svalů;<strong>NCL5</strong> – porucha nervového systému postihující mladé psy, extrémně vzácná",
    artGenetickeResultsLabel: "<strong>Výsledky:</strong>",
    artGenetickeResultsList: "Oči (PRA-prcd, GR-PRA1, GR-PRA2): <strong>N/N</strong> – čistá;Ichtyóza 1: <strong>N/P</strong> – přenašečka;Ichtyóza 2: <strong>N/N</strong> – čistá;NCL5: <strong>N/N</strong> – čistá;GRMD: <strong>Xn/Xn</strong> – čistá",
    artGenetickeP3: 'Máme velkou radost, že Alminka je zdravý pejsek. Většina testovaných chorob je zcela bez nálezu, a\u00a0u\u00a0jedné – kde je Alminka přenašečkou – <strong>nemá výsledek žádný vliv na její zdraví ani pohodu</strong>. Pro chov to znamená, že krycí pes musí být testován jako N/N.',

    // Šilheřovice WT – body
    artSilherovicePerex: 'Do Šilheřovic jsme vyrazily s jasným cílem: zažít náš první Working Test. Výsledek? Dvě nuly na disciplínách. Ale taky jeden z nejpřínosnějších dní, jaké jsme s Alminkou zažily.',
    artSilheroviceP1: 'Akci pořádal Retriever klub CZ společně s\u00a0Tréninkem s\u00a0retrívrem v\u00a0krásném šilheřovickém lese – s\u00a0bohatým podrostem, příkopy, vodními přítoky a\u00a0otevřenou loukou. Terén jako stvořený pro Working Test. Pro Almu ale taky jako stvořený pro naprosté rozptýlení od všeho, co po ní chceme.',
    artSilheroviceP2: 'Posuzoval mezinárodní sbor rozhodčích – <strong>Maarit Saarinen</strong> (Finsko), zkušená chovatelka (Middle River\u2019s), a\u00a0<strong>Paul David Toal</strong> (Irsko), FCI rozhodčí pro field trialy i\u00a0working testy.',
    artSilheroviceResult: '<strong>Alma Bohemica Aurum</strong><br><em>(Brandon de Ria Vela \u00d7 Lollipop Dorado Blanco)</em><br>Třída E (Elementary) \u2022 4 disciplíny \u2022 <strong>2\u00d7 0 bodů</strong>',
    artSilheroviceP3: 'Ve třídě E nás čekaly čtyři disciplíny zaměřené na marking, memory marking a\u00a0dohledávku – průběžně se hodnotila i\u00a0chůze u\u00a0nohy. Jenže hned u\u00a0první disciplíny nás terén dostal. Alma dummy po vběhnutí do\u00a02 příkopů ztratila orientaci a\u00a0dummy nemohla najít – a\u00a0frustrace se projevila po svém. Zkrátka se vyčurala. No, stalo se a\u00a0výsledek rovná 0.',
    artSilheroviceP4: 'Další disciplíny byly lepší, ale projevil se tlak a přetrénování a zájem o dummík nebyl tak velký jako obvykle.',
    artSilheroviceP5: 'Byly jsme tam ale v\u00a0dobré partě – <strong>Jana s\u00a0Zoe a\u00a0Pinky</strong> a\u00a0<strong>Ondra s\u00a0Bellou</strong> – takže nálada byla i přes nuly skvělá.',
    artSilheroviceP6: 'A co jsme si z toho odnesly? Jasný plán na trénink:',
    artSilheroviceTakeaways: 'víc práce na <strong>steadiness</strong>;marking v\u00a0neznámém terénu;chůze u\u00a0nohy v\u00a0rozptylujícím prostředí',
    artSilheroviceP6b: 'Rozhodčí byli po skončení ochotní a zpětná vazba k nezaplacení.',
    artSilheroviceP7: 'Vrátíme se. S Almou to jinak nejde.',

    // Canisterapie Klimkovice 2026
    artCanisterapieCat: "Zkoušky",
    artCanisterapieTitle: "Alminka složila zkoušky z canisterapie",
    artCanisterapiePerex: "Víkend 18.–19. dubna jsme s Alminkou strávily v Sanatoriích Klimkovice – na semináři, canisterapii v praxi s dětmi a nakonec na zkouškách. A Alminka je má. Certifikát o složení zkoušky z canisterapie.",
    artCanisterapieResult: '<strong>Alma Bohemica Aurum</strong><br><em>(Brandon de Ria Vela × Lollipop Dorado Blanco)</em><br>Certifikát o složení zkoušky z canisterapie • Sanatoria Klimkovice • 19. 4. 2026',
    artCanisterapieP1: 'Celý víkend byl moc příjemný. Prostředí Sanatorií Klimkovice je nádherné – hned vedle areálu je krásný lesík, kde se dají dělat dlouhé procházky. Ideální pro psa i pro nás dvě, abychom mezi bloky programu mohly vypnout a nabrat dech.',
    artCanisterapieP2: 'Sobotní program byl rozdělený na dvě části. <strong>Dopoledne</strong> probíhal seminář, kde jsme se dozvěděly spoustu zajímavostí z praxe canisterapeutů – konkrétní situace, co funguje, co se nevyplatí a jak s tím vším pracovat u psa i u klienta.',
    artCanisterapieP3: 'Ještě přínosnější ale bylo <strong>odpoledne</strong>, kdy nás přišly navštívit děti, které se v sanatoriu léčí, a mohly jsme si canisterapii vyzkoušet v praxi. Alminka se předvedla naprosto skvěle – úplně klidně ležela na boku a nechala si na sobě odpočívat dvě i tři děti najednou. Přesně tenhle klid a vstřícnost jsou důvod, proč jsme do canisterapie šly.',
    artCanisterapieP4: 'V <strong>neděli</strong> nás čekaly samotné zkoušky. A musím přiznat, že pro nás byly docela náročné – sešlo se tam několik méně příjemných faktorů. Součástí zkoušky bylo testování povahy v různých napjatých situacích, po kterém se měl pes zklidnit a dovolit lektorce polohování. Alminka už v tu chvíli byla trochu nejistá a nechtělo se jí úplně spolupracovat.',
    artCanisterapieP5: 'Nakonec to ale dopadlo dobře – <strong>zkoušku jsme zdárně složily</strong> a Alminka má od té chvíle certifikát canisterapeutického týmu. Budeme se těšit, co nám canisterapie přinese dál.',
    artCanisterapieP6: 'Ráda bych s ní šla spíš cestou edukativní – do škol. Takže první na řadě určitě budou třídy mých dětí. Uvidíme, kam nás to zavede.',

    // Teasery na indexu + aktuality list
    newsMonthCanis: "Dub",
    newsTitleCanis: "Alminka složila zkoušky z canisterapie",
    newsExcerptCanis: "Víkend v Sanatoriích Klimkovice: seminář, canisterapie s dětmi v praxi a úspěšně složené zkoušky. Alminka má certifikát.",
    newsListMonthCanis: "Dub",
    newsListExcerptCanis: "Víkend v Sanatoriích Klimkovice: seminář, canisterapie s dětmi v praxi a úspěšně složené zkoušky. Alminka má certifikát.",

    // Alma – chip canisterapie
    almaTitleCanis: "Canisterapie",
    almaTitleCanisVal: "certifikát (Klimkovice 2026)",

    // Aktuality list – měsíce a excerpty
    newsListMonth0: "Dub",
    newsListExcerpt0: "Alma absolvovala svůj první Working Test v Šilheřovicích. Třída E, mezinárodní rozhodčí a spousta nových zkušeností z krásného lesa.",
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
    pregVideoBlocked: 'Pro p\u0159ehr\u00e1n\u00ed videa je nutn\u00e9 p\u0159ijmout cookies. <a href="https://www.youtube.com/watch?v=BsLfWgAFFIE" target="_blank" rel="noopener noreferrer">Sledovat na YouTube \u2192</a>',
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
    thankYouTitle: "Děkujeme za Vaši zprávu!",
    thankYouText: "Těší nás Váš zájem o chovatelskou stanici Rosenaw Aurum. Vaši zprávu jsme přijali a co nejdříve se Vám ozveme.",
    thankYouReply: "Obvykle odpovídáme do 24 hodin.",
    backToHome: "\u2190 Zpět na hlavní stránku",
    notFoundText: "Tato stránka neexistuje nebo byla přesunuta.",

    // o-plemeni.html
    breedSkipLink: "Přejít na obsah",
    breedBreadcrumb: "O plemeni",
    breedPageTitle: "Zlatý retrívr – vše o plemeni",
    breedLead: "Zlatý retrívr (golden retriever) patří mezi nejoblíbenější plemena psů na světě. Kombinuje inteligenci, přátelskou povahu a přirozenou pracovitost. Proč je tak výjimečný a co byste měli vědět, než si ho pořídíte?",
    breedHistoryTitle: "Historie plemene",
    breedHistoryP1: "Zlatý retrívr vznikl v 19. století ve Skotsku zásluhou lorda Tweedmouthe, který systematicky křížil psy s cílem vytvořit ideálního loveckého retrívra. Plemeno bylo oficiálně uznáno britským Kennel Clubem v roce 1913 a od té doby si získalo srdce lidí po celém světě.",
    breedHistoryP2: 'Původním účelem zlatého retrívra bylo aportování ulovené zvěře z vody i souše. Díky tomu mají tito psi přirozenou lásku k vodě, měkkou tlamu (tzv. „soft mouth") a výjimečnou ochotu spolupracovat s člověkem.',
    breedTemperTitle: "Povaha a temperament",
    breedTemperP1: "Zlatý retrívr je známý svou přátelskou, klidnou a vyrovnanou povahou. Je to pes, který miluje lidi – od dětí po seniory – a výborně vychází i s ostatními zvířaty. Mezi jeho typické vlastnosti patří:",
    breedTemperList: "<strong>Přátelskost</strong> – zlatý retrívr je otevřený ke všem lidem, což z něj dělá ideálního rodinného psa, ale nevhodného hlídače;<strong>Inteligence</strong> – patří mezi 4. nejinteligentnější plemeno psů podle Stanleyho Corena;<strong>Učenlivost</strong> – výborně reaguje na pozitivní trénink a rád se učí nové věci;<strong>Trpělivost</strong> – snáší děti a jejich hry s obdivuhodnou trpělivostí;<strong>Pracovitost</strong> – potřebuje smysluplné zaměstnání, jinak si ho najde sám (což ne vždy potěší majitele);<strong>Láska k vodě</strong> – většina zlatých retrívrů miluje plavání a aportování z vody",
    breedAppearTitle: "Vzhled a standard plemene",
    breedAppearP1: 'Zlatý retrívr je středně velký, harmonicky stavěný pes s charakteristickou zlatou srstí. Standard FCI (č. 111, skupina 8) ho popisuje jako „symetrického, vyváženého a statného psa s vyrovnaným pohybem a laskavým výrazem".',
    breedAppearList: "<strong>Výška v kohoutku:</strong> psi 56–61 cm, feny 51–56 cm;<strong>Hmotnost:</strong> psi 29–34 kg, feny 25–29 kg;<strong>Srst:</strong> hladká nebo mírně zvlněná, s dobrou podsadou nepropustnou pro vodu;<strong>Barva:</strong> jakýkoli odstín zlaté nebo krémové (ne červená ani mahagonová);<strong>Délka života:</strong> 10–13 let",
    breedStandardTitle: "Podrobný standard dle FCI",
    breedStandardP1: 'Kompletní standard definuje jednotlivé partie těla, na které se hodnotitelé na výstavách zaměřují. Zdrojem je <a href="https://www.retriever-klub.cz/plemena/golden-retriever/" target="_blank" rel="noopener noreferrer">Retriever Klub CZ</a>.',
    breedStandardList: "<strong>Hlava a lebka:</strong> široká lebka bez hrubých rysů, dobře vyvinutý a hluboký čenich, délka nosní části odpovídá lebeční části. Nos černý.;<strong>Oči:</strong> temně hnědé, dobře posazené do stran, s tmavými víčky.;<strong>Uši:</strong> střední velikosti, zavěšené přibližně v rovině očí.;<strong>Čelisti:</strong> dokonalý, pravidelný a úplný nůžkový skus – horní řezáky těsně překrývají spodní.;<strong>Krk:</strong> dostatečně dlouhý, suchý a svalnatý.;<strong>Trup:</strong> vyvážený a dobře svázaný, prostorný a hluboký hrudník, dlouhá pružná žebra, pevný a rovný hřbet.;<strong>Přední končetiny:</strong> rovné s dobrým kostěním, dlouhé lopatky.;<strong>Zadní končetiny:</strong> silné, svalnaté bedra, dobře zaúhlované kolenní klouby.",
    breedHealthTitle: "Zdraví zlatého retrívra",
    breedHealthP1: "Jako u většiny čistokrevných plemen i u zlatého retrívra existují dědičné zdravotní predispozice, na které odpovědní chovatelé testují. Mezi nejdůležitější patří:",
    breedHealthList: "<strong>Dysplazie kyčelního kloubu (HD)</strong> – RTG vyšetření obou rodičů je podmínkou zodpovědného chovu;<strong>Dysplazie loketního kloubu (ED)</strong> – stejně jako HD, posuzuje se rentgenologicky;<strong>Oční choroby (PRA)</strong> – progresivní retinální atrofie, testuje se geneticky;<strong>Ichtyóza (ICT)</strong> – dědičné kožní onemocnění, lze vyloučit genetickým testem;<strong>Nádorová onemocnění</strong> – zlatí retrívři mají bohužel vyšší predispozici k některým typům nádorů",
    breedHealthP2: 'Právě proto je <strong>výběr odpovědného chovatele</strong>, který provádí kompletní zdravotní testy, naprosto zásadní. V naší chovatelské stanici <a href="alma-dokumenty.html">zveřejňujeme veškeré výsledky</a> zdravotních vyšetření.',
    breedCareTitle: "Péče o zlatého retrívra",
    breedCareP1: "Zlatý retrívr není náročný na údržbu, ale vyžaduje pravidelnou péči:",
    breedCareList: "<strong>Srst</strong> – kartáčování 2–3× týdně, v období línání denně. Srst se nestříhá, pouze se upravují přerostlé partie;<strong>Pohyb</strong> – minimálně 1–2 hodiny aktivního pohybu denně (procházky, plavání, aportování);<strong>Výživa</strong> – kvalitní krmivo přiměřené věku a aktivitě. Zlatí retrívři mají sklon k obezitě;<strong>Mentální stimulace</strong> – nosework, obedience, agility nebo aporty udržují psa spokojeného;<strong>Veterinární péče</strong> – pravidelné očkování, odčervení a preventivní prohlídky",
    breedSuitTitle: "Pro koho je zlatý retrívr vhodný?",
    breedSuitP1: "Zlatý retrívr je ideální volbou pro:",
    breedSuitList: "Rodiny s dětmi – je trpělivý a hravý;Aktivní lidi – zvládne túry, běh, plavání i cyklistiku;Začínající majitele – díky učenlivosti je vhodný i pro prvního psa;Lidé hledající canisterapeutického psa – retrívři excelují v práci s lidmi",
    breedSuitP2: 'Naopak <strong>není vhodný</strong> pro lidi, kteří tráví většinu dne mimo domov, nemají čas na pohyb nebo hledají hlídacího psa.',
    breedBreederTitle: "Jak vybrat odpovědného chovatele zlatých retrívrů",
    breedBreederP1: "Při výběru chovatelské stanice zlatých retrívrů se zaměřte na:",
    breedBreederList: "Registrace u FCI prostřednictvím národního klubu (v ČR: ČMKU);Kompletní zdravotní testy obou rodičů (HD, ED, oční vyšetření, genetické testy);Transparentnost – chovatel ochotně ukáže výsledky a zodpoví dotazy;Socializace štěňat – štěňata by měla vyrůstat v domácím prostředí;Doživotní podpora – dobrý chovatel zůstává v kontaktu po celý život psa;Členství v chovatelských klubech (KCHLS, Retriever Klub CZ)",
    breedBreederP2: 'V naší chovatelské stanici <strong>Rosenaw Aurum</strong> v Beskydech chováme zlaté retrívry s důrazem na zdraví, povahu a rodinný život. <a href="index.html#about">Přečtěte si o našem přístupu</a> nebo se na cokoliv <a href="index.html#contact">zeptejte</a>.',
    breedCtaBack: "\u2190 Zpět na hlavní stránku",
    breedCtaPuppies: "Štěňata Rosenaw Aurum",

    // ochrana-osobnich-udaju.html
    privacyBreadcrumb: "Ochrana osobních údajů",
    privacyTitle: "Ochrana osobních údajů",
    privacyLead: "Informace o zpracování osobních údajů v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR).",
    privacyS1Title: "1. Správce osobních údajů",
    privacyS1Text: '<strong>Lucie Klesová</strong><br>Vigantice (u Rožnova pod Radhoštěm), Česká republika<br>E-mail: <a href="mailto:lucie@klesova.cz">lucie@klesova.cz</a><br>Telefon: <a href="tel:+420724913409">+420 724 913 409</a>',
    privacyS2Title: "2. Jaké údaje zpracováváme",
    privacyS2Text: "Prostřednictvím kontaktního formuláře na těchto stránkách můžeme zpracovávat následující osobní údaje:",
    privacyS2List: "<strong>Jméno</strong> — pro oslovení v odpovědi;<strong>E-mailová adresa</strong> — pro zaslání odpovědi na váš dotaz;<strong>Telefonní číslo</strong> (nepovinné) — pro případný telefonický kontakt;<strong>Obsah zprávy</strong> — pro zpracování vašeho dotazu",
    privacyS3Title: "3. Účel zpracování",
    privacyS3Text: "Vaše osobní údaje zpracováváme výhradně za účelem:",
    privacyS3List: "Odpovědi na váš dotaz zaslaný prostřednictvím kontaktního formuláře;Komunikace ohledně případného zájmu o štěně z naší chovatelské stanice;Domluvy návštěvy",
    privacyS4Title: "4. Právní základ zpracování",
    privacyS4Text: 'Osobní údaje zpracováváme na základě <strong>oprávněného zájmu</strong> (čl. 6 odst. 1 písm. f) GDPR) — odpovědi na váš dotaz. Odesláním kontaktního formuláře vyjadřujete souhlas se zpracováním uvedených údajů za tímto účelem.',
    privacyS5Title: "5. Doba uchovávání",
    privacyS5Text: 'Vaše osobní údaje uchováváme po dobu nezbytnou pro vyřízení vašeho dotazu, <strong>maximálně 12 měsíců</strong> od posledního kontaktu. Po uplynutí této doby jsou údaje smazány.',
    privacyS6Title: "6. Předávání údajů třetím stranám",
    privacyS6Text: 'Vaše osobní údaje <strong>nepředáváme třetím stranám</strong> s výjimkou:',
    privacyS6List: '<strong>Formspree, Inc.</strong> — poskytovatel služby kontaktního formuláře (zpracovatel), který přijímá a přeposílá zprávy z formuláře. Formspree zpracovává údaje v souladu se svými zásadami ochrany osobních údajů.',
    privacyS7Title: "7. Cookies a analytika",
    privacyS7Text: 'Tyto stránky používají pouze <strong>technicky nezbytné cookies</strong>. Pro zobrazení fontů využíváme službu Google Fonts, která může zpracovávat IP adresu návštěvníka. Mapa v kontaktní sekci využívá Google Maps.',
    privacyS8Title: "8. Vaše práva",
    privacyS8Text: "Máte právo:",
    privacyS8List: 'Na <strong>přístup</strong> ke svým osobním údajům;Na <strong>opravu</strong> nepřesných údajů;Na <strong>výmaz</strong> údajů (právo být zapomenut);Na <strong>omezení zpracování</strong>;Na <strong>přenositelnost</strong> údajů;<strong>Vznést námitku</strong> proti zpracování;Podat <strong>stížnost</strong> u Úřadu pro ochranu osobních údajů (<a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">www.uoou.cz</a>)',
    privacyS9Title: "9. Kontakt pro uplatnění práv",
    privacyS9Text: 'Pro uplatnění jakéhokoliv z výše uvedených práv nás kontaktujte na e-mailu <a href="mailto:lucie@klesova.cz">lucie@klesova.cz</a>. Na váš požadavek odpovíme nejpozději do 30 dnů.',
    privacyUpdated: "Poslední aktualizace: 22. března 2026",

    toolSpotEyebrow: "Bezplatný nástroj pro chovatele",
    toolSpotTitle: "Kalkulačka březosti feny",
    toolSpotText: "Zadejte datum krytí a ihned získáte termín porodu, klíčová data (ultrazvuk, rentgen) i vývoj štěňat týden po týdnu. Funguje pro všechna plemena psů.",
    toolSpotCta: "Spustit kalkulačku →",

  },

  en: {
    navHome: "Home",
    navAbout: "About",
    navGirls: "Our Girls",
    navPuppies: "Puppies",
    navGallery: "Gallery",
    navNews: "News",
    navDocs: "Documents",
    navBreed: "About the breed",
    navContact: "Contact",
    navCalc: "Pregnancy calculator",
    cookieTitle: "Cookies & privacy",
    cookieText: 'We use cookies and third-party services (Google Fonts, Google Maps, Google Analytics, embedded YouTube videos) which may process your IP address. You choose what to allow. <a href="/ochrana-osobnich-udaju.html">More info</a>.',
    cookieAccept: "Accept all",
    cookieReject: "Reject all",
    cookieSettings: "Settings",
    cookieSettingsTitle: "Cookie settings",
    cookieBack: "Back",
    cookieSave: "Save choices",
    cookieCatNecessary: "Necessary",
    cookieCatNecessaryDesc: "Required for basic site functionality — storing your language and cookie preferences. Always on.",
    cookieCatAnalytics: "Analytics",
    cookieCatAnalyticsDesc: "Google Analytics — anonymous usage statistics that help us improve the site.",
    cookieCatExternal: "External content",
    cookieCatExternalDesc: "Google Fonts for nicer typography, Google Maps on the contact page and embedded YouTube videos in articles.",
    cookieFooterLink: "Cookie settings",
    mapBlocked: "To display the map, you need to accept third-party cookies.",

    heroTitle: "Golden retrievers raised with\u00a0love in the heart of\u00a0Beskydy.",
    heroSubtitle:
      "A small family FCI kennel from the Beskydy Mountains in\u00a0Moravia, near Rožnov pod Radhoštěm. Puppies grow up at home, among people, with focus on health, balanced temperament and a\u00a0solid foundation.",
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
      'Rosenaw Aurum is a registered kennel of <a href="https://www.fci.be/" target="_blank" rel="noopener noreferrer">FCI</a>, member of <a href="https://www.kchls.cz/" target="_blank" rel="noopener noreferrer">KCHLS</a> and the <a href="https://www.retriever-klub.cz/" target="_blank" rel="noopener noreferrer">Retriever Klub CZ</a>.',

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
    almaTitleWtPrep: "in preparation (E)",
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
    puppiesPlannedDate: "Spring / Summer 2027",
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
    newsMonth0: "Apr",
    newsTitle0: "Our first Working Test – Šilheřovice",
    newsExcerpt0: "Alma completed her first Working Test in Šilheřovice. Class E, international judges and lots of new experience from the forest.",
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
    artSilheroviceCat: "Working tests",
    artSilheroviceTitle: "Our first Working Test \u2013 \u0160ilhe\u0159ovice 2026",
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

    // Bordovice – body
    artBordoviceP1: 'On Saturday 26 July 2025 we spent the day at the <strong>regional club show in Bordovice \u2013 Hubertka 2025</strong>, where our <strong>Alma Bohemica Aurum</strong> appeared in the junior class for the last time. And she did brilliantly!',
    artBordoviceResult: '<strong>Alma Bohemica Aurum</strong><br><em>(Brandon de Ria Vela \u00d7 Lollipop Dorado Blanco)</em><br>Junior class \u2022 <strong>V2</strong> \u2022 very nice critique',
    artBordoviceP2: 'Although the competition was not large this time, Alma received an <strong>excellent critique</strong> praising her elegant movement, proportions and calm demeanour. She looked composed in the ring and was clearly enjoying herself. She also met her <strong>half-sister</strong>, which added to the lovely atmosphere of the class.',
    artBordoviceP3: 'She was accompanied by her mum <strong>Lollipop Dorado Blanco</strong>, who competed in the working class and earned a beautiful 3rd place in the Best Working Dog competition. It was also the first time Alma spent a few days with her mum and half-sister at the home kennel \u2013 and you could tell she knew exactly where she belonged.',
    artBordoviceP4: 'The show had a wonderfully friendly atmosphere. <strong>Fans from near and far family</strong> came to support us, which we really appreciated. The only thing that did not go to plan was the weather \u2013 <strong>rain accompanied us all day long</strong>. But it certainly did not dampen our spirits.',
    artBordoviceP5: "Thank you:",
    artBordoviceThanksList: "<strong>Am\u00e1lka Vackov\u00e1</strong> for giving our young lady an excellent foundation and for patient breeder support 24/7;<strong>Nataliia Romashko</strong> for professional grooming \u2013 those little paws are perfect",
    artBordoviceP6: "We look forward to more events where she can show what she\u2019s made of!",

    // Provodovice – body
    artProvodoviceP1: 'This time we headed to the dog show in Provodovice \u2013 and it turned out to be a day we will not forget any time soon. <strong>Alma entered the open class for the very first time!</strong>',
    artProvodoviceResult: '<strong>Alma Bohemica Aurum</strong><br><em>(Brandon de Ria Vela \u00d7 Lollipop Dorado Blanco)</em><br>Open class \u2022 <strong>V1 \u2013 Excellent 1</strong> \u2022 Class winner \u2022 Regional winner<br>Qualified for final competitions \u2192 <strong>3rd place in FCI Group\u00a08</strong>',
    artProvodoviceP2: "<strong>Judge\u2019s critique:</strong>",
    artProvodoviceQuote: '\u201cCorrect size, nice head, scissor bite, longer firm back, correct chest, correct angulation and nice presentation.\u201d',
    artProvodoviceP3: 'Unfortunately the weather was not on our side \u2013 <strong>it was cold the entire day</strong>. Despite that, the event had a wonderful atmosphere and Alma performed absolutely fantastically.',
    artProvodoviceP4: "Thank you:",
    artProvodoviceThanksList: "<strong>Jana Jan\u00ed\u010dkov\u00e1 from Beskyd Hill</strong> for providing a home base;<strong>Ondra from Athena Bella</strong> for support and encouragement",
    artProvodoviceP5: "We are incredibly proud of Alma. Her open class debut could not have gone any better!",

    // OVVR – body
    artOvvrP1: 'On Sunday 1 June 2025, Children\u2019s Day, we set off with Alma for our first big test \u2013 <strong>OVVR</strong> (natural retrieving ability test) in \u00dast\u00ed u Hranic. The weather was lovely with sunshine and great spirits. Ten dogs and their owners gathered, many familiar from training sessions. And as a bonus \u2013 two of our trainers also took part!',
    artOvvrP2: '<strong>Alma breezed through it</strong> \u2013 with ease and elegance. The first discipline, temperament assessment, went smoothly. Alma sat calmly at heel and behaved beautifully.',
    artOvvrP3: "The second discipline, behaviour after a gunshot, also went without a hitch. The handler just had to catch the right moment to recall her.",
    artOvvrP4: 'The third part \u2013 <strong>tracking</strong> \u2013 was where my heart started beating a little faster. Alma excelled here, finding the scent dummy quickly and bringing it back in a straight line. She also performed a field retrieve, which only a few dogs managed.',
    artOvvrP5: "Heeling on and off the lead went perfectly, even though Alma usually likes to explore the terrain with her nose.",
    artOvvrP6: 'The final discipline, <strong>water retrieve</strong>, was the most nerve-wracking. This time she resisted the urge to shake off before handing over the dummy.',
    artOvvrP7: 'The entire morning Alma was absolutely amazing. She rested calmly between disciplines. And the result? <strong>Absolutely perfect \u2013 she passed all disciplines with a full score!</strong>',
    artOvvrP8: "We have now met all the breeding requirements except for age. But we are certainly not stopping here. This was just the beginning and we are already looking forward to new challenges, training sessions and adventures.",

    // Humpolec – body
    artHumpolecP1: 'On Saturday and Sunday (10\u201311 May 2025) we headed to Humpolec for the <strong>Club and Specialty Retriever Show</strong>. We entered Alma in the most competitive category \u2013 <strong>Juniors</strong> (because why make it easy?), where around 30 females competed in the ring \u2013 basically a casting call for doggy Hollywood.',
    artHumpolecP2: 'With a touch of nerves and cautious optimism, we waited to see how it would go. And it went brilliantly! Alma certainly held her own and came away both days with a lovely <strong>Excellent rating</strong>.',
    artHumpolecP3: 'At the show, Alma also finally met her brother <strong>Amigo</strong>, who went on to win his very first CAC title. Huge congratulations!',
    artHumpolecP4: 'We came home with beautiful critiques \u2013 both judges particularly praised Alma\u2019s coat and her lively, energetic movement. Her ring presentation was also commended \u2013 for which huge thanks go to breeder Am\u00e1lka, who turned Alma into a real show professional.',
    artHumpolecP5: 'We are absolutely thrilled \u2013 and the cherry on top is the news that Alma has now <strong>met another requirement for breeding approval!</strong> She was also measured at the show \u2013 she is a tall lady with a beautiful complete set of teeth and a scissor bite, just as a proper retriever should be.',
    artHumpolecP6: "All that is left now is to pass the OVVR working test \u2013 and then Alma can start writing her own chapter in breeding history.",

    // Narozeniny – body
    artNarozeninyP1: "Alma celebrated her very first birthday today. There had to be a cake, of course, and presents too. The kids even organised a little party and invited their friends.",
    artNarozeninyP2: "Dear Alma, we wish you above all good health \u2013 and we will happily take care of everything else.",
    artNarozeninyP3: 'If you would like to see what it looked like when she was born, take a look at the A-litter diary at the <a href="https://www.bohemica-aurum.cz/" target="_blank" rel="noopener noreferrer">Bohemica Aurum</a> kennel website.',

    // RTG – body
    artRtgP1: 'Today, on <strong>International Golden Retriever Day</strong>, we took Alma to the vet in Opava (MVDr. Pep\u0159\u00edk) to have X-rays taken of her hips and elbows \u2013 one of the mandatory requirements for breeding approval. We also had her spine examined, including a check for spondylosis.',
    artRtgP2: "We are overjoyed with the results and will do everything we can to keep Alma in great health for many years to come.",
    artRtgQuote: "And how did she handle it all? Like a true retriever! As soon as she woke up from anaesthesia, she ran straight over to cuddle with a lady in the waiting room.",
    artRtgResultsList: "HD (hips): <strong>B/B</strong>;ED (elbows): <strong>0/0</strong>;OCD: <strong>0/0</strong>;SA: <strong>clear</strong>;LTV: <strong>clear</strong>",
    artRtgP3: 'The results are available for download in the <a href="../alma-dokumenty.html">Documents</a> section.',

    // Genetické testy – body
    artGenetickeP1: 'At the last show in Humpolec, we took the opportunity to have <strong>genetic tests</strong> done for several hereditary diseases that can occur in Golden Retrievers.',
    artGenetickeP2: "We tested for:",
    artGenetickeTestList: "<strong>PRA</strong> (prcd, GR-PRA1, GR-PRA2) \u2013 progressive retinal atrophy, various forms leading to blindness;<strong>Ichthyosis 1 and 2</strong> \u2013 hereditary skin conditions causing dry, flaky coat;<strong>GRMD</strong> \u2013 muscular dystrophy, a rare muscle disorder;<strong>NCL5</strong> \u2013 a nervous system disorder affecting young dogs, extremely rare",
    artGenetickeResultsLabel: "<strong>Results:</strong>",
    artGenetickeResultsList: "Eyes (PRA-prcd, GR-PRA1, GR-PRA2): <strong>N/N</strong> \u2013 clear;Ichthyosis 1: <strong>N/P</strong> \u2013 carrier;Ichthyosis 2: <strong>N/N</strong> \u2013 clear;NCL5: <strong>N/N</strong> \u2013 clear;GRMD: <strong>Xn/Xn</strong> \u2013 clear",
    artGenetickeP3: 'We are very happy that Alma is a healthy girl. Most of the tested conditions came back completely clear, and for the one where she is a carrier \u2013 <strong>the result has no impact on her health or well-being whatsoever</strong>. For breeding purposes, it simply means the stud dog must be tested as N/N.',

    // Šilheřovice WT – body
    artSilherovicePerex: 'We headed to \u0160ilhe\u0159ovice with a clear goal: to experience our first Working Test. The result? Two zeros on the exercises. But also one of the most valuable days we have ever had with Alma.',
    artSilheroviceP1: 'The event was organised by Retriever klub CZ together with Tr\u00e9nink s\u00a0retr\u00edvrem in the beautiful \u0160ilhe\u0159ovice forest \u2013 with dense undergrowth, ditches, water streams and an open meadow. Terrain made for a Working Test. But also, for Alma, terrain made for being completely distracted from everything we ask of her.',
    artSilheroviceP2: 'Judging was handled by an international panel \u2013 <strong>Maarit Saarinen</strong> (Finland), an experienced breeder (Middle River\u2019s), and <strong>Paul David Toal</strong> (Ireland), FCI judge for field trials and working tests.',
    artSilheroviceResult: '<strong>Alma Bohemica Aurum</strong><br><em>(Brandon de Ria Vela \u00d7 Lollipop Dorado Blanco)</em><br>Class E (Elementary) \u2022 4 exercises \u2022 <strong>2\u00d7 0 points</strong>',
    artSilheroviceP3: 'In Class E, four exercises awaited us \u2013 marking, memory marking and a retrieve \u2013 with heelwork assessed throughout. But the very first exercise already got the better of us. After running into two ditches, Alma lost her bearings and could not find the dummy \u2013 and her frustration showed in its own way. Let\u2019s just say she had a wee. Well, it happened, and the score equals 0.',
    artSilheroviceP4: 'The remaining exercises went better, but the pressure and over-training showed, and her interest in the dummy was not as strong as usual.',
    artSilheroviceP5: 'We were there with a great group though \u2013 <strong>Jana with Zoe and Pinky</strong> and <strong>Ondra with Bella</strong> \u2013 so the mood was great despite the zeros.',
    artSilheroviceP6: 'And what did we take away from it? A clear training plan:',
    artSilheroviceTakeaways: 'more work on <strong>steadiness</strong>;marking in unfamiliar terrain;heelwork in distracting environments',
    artSilheroviceP6b: 'The judges were generous with their time afterwards and the feedback was priceless.',
    artSilheroviceP7: 'We will be back. With Alma, there is no other way.',

    // Canis therapy Klimkovice 2026
    artCanisterapieCat: "Trials",
    artCanisterapieTitle: "Alma passed her canis therapy exam",
    artCanisterapiePerex: "We spent the weekend of 18–19 April with Alma at Sanatoria Klimkovice – a seminar, canis therapy in practice with children, and finally the exam. And Alma has it. Her canis therapy certificate.",
    artCanisterapieResult: '<strong>Alma Bohemica Aurum</strong><br><em>(Brandon de Ria Vela × Lollipop Dorado Blanco)</em><br>Canis therapy exam certificate • Sanatoria Klimkovice • 19 Apr 2026',
    artCanisterapieP1: 'The whole weekend was lovely. The grounds of Sanatoria Klimkovice are beautiful – right next to the complex there is a gorgeous little forest for long walks. Perfect for both the dog and for us to switch off between sessions.',
    artCanisterapieP2: 'Saturday was split in two. <strong>In the morning</strong> we had a seminar with plenty of insights from the practice of canis therapists – concrete situations, what works, what doesn’t and how to handle it all with both the dog and the client.',
    artCanisterapieP3: 'The <strong>afternoon</strong> was even more valuable – children being treated at the sanatorium came to visit us and we got to try canis therapy hands-on. Alma was absolutely brilliant – she lay calmly on her side and let two or even three children rest on her at once. This calm and openness is exactly why we went into canis therapy.',
    artCanisterapieP4: '<strong>Sunday</strong> brought the exam itself. And I have to admit it was pretty demanding – several less pleasant factors lined up. Part of the exam was testing the dog’s temperament in various tense situations, after which the dog had to settle and let the instructor do positioning work. By that point Alma was a little unsure and not quite willing to cooperate.',
    artCanisterapieP5: 'In the end it all worked out – <strong>we passed the exam</strong> and Alma now holds a canis therapy team certificate. We are looking forward to where canis therapy will take us next.',
    artCanisterapieP6: 'I would rather go the educational route with her – into schools. So the first visits will definitely be to my kids’ classrooms. Let’s see where it leads.',

    // Teasers on index + aktuality list
    newsMonthCanis: "Apr",
    newsTitleCanis: "Alma passed her canis therapy exam",
    newsExcerptCanis: "A weekend at Sanatoria Klimkovice: seminar, hands-on canis therapy with children and a successfully passed exam. Alma has her certificate.",
    newsListMonthCanis: "Apr",
    newsListExcerptCanis: "A weekend at Sanatoria Klimkovice: seminar, hands-on canis therapy with children and a successfully passed exam. Alma has her certificate.",

    // Alma – canis therapy chip
    almaTitleCanis: "Canis therapy",
    almaTitleCanisVal: "certificate (Klimkovice 2026)",

    // News list – months and excerpts
    newsListMonth0: "Apr",
    newsListExcerpt0: "Alma completed her first Working Test in \u0160ilhe\u0159ovice. Class E, international judges and lots of new experience from the forest.",
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
    pregVideoBlocked: 'To play the video you need to accept cookies. <a href="https://www.youtube.com/watch?v=BsLfWgAFFIE" target="_blank" rel="noopener noreferrer">Watch on YouTube \u2192</a>',
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
    thankYouTitle: "Thank you for your message!",
    thankYouText: "We appreciate your interest in Rosenaw Aurum. We have received your message and will get back to you as soon as possible.",
    thankYouReply: "We usually reply within 24 hours.",
    backToHome: "\u2190 Back to homepage",
    notFoundText: "This page does not exist or has been moved.",

    // o-plemeni.html
    breedSkipLink: "Skip to content",
    breedBreadcrumb: "About the breed",
    breedPageTitle: "Golden Retriever – everything about the breed",
    breedLead: "The Golden Retriever is one of the most popular dog breeds in the world. It combines intelligence, a friendly temperament and a natural willingness to work. What makes it so special and what should you know before getting one?",
    breedHistoryTitle: "Breed history",
    breedHistoryP1: "The Golden Retriever originated in 19th-century Scotland thanks to Lord Tweedmouth, who systematically crossed dogs to create the ideal hunting retriever. The breed was officially recognised by The Kennel Club in 1913 and has won hearts all over the world ever since.",
    breedHistoryP2: "The original purpose of the Golden Retriever was retrieving game from water and land. That is why these dogs have a natural love of water, a soft mouth and an exceptional willingness to cooperate with people.",
    breedTemperTitle: "Temperament and character",
    breedTemperP1: "The Golden Retriever is known for its friendly, calm and even-tempered nature. It is a dog that loves people – from children to seniors – and gets along wonderfully with other animals. Typical traits include:",
    breedTemperList: "<strong>Friendliness</strong> – open to everyone, making it an ideal family dog but a poor guard dog;<strong>Intelligence</strong> – ranked as the 4th most intelligent breed by Stanley Coren;<strong>Trainability</strong> – responds excellently to positive training and loves learning new things;<strong>Patience</strong> – tolerates children and their games with admirable patience;<strong>Work ethic</strong> – needs meaningful activity, otherwise it will find its own (which may not always please the owner);<strong>Love of water</strong> – most Golden Retrievers love swimming and water retrieves",
    breedAppearTitle: "Appearance and breed standard",
    breedAppearP1: "The Golden Retriever is a medium-sized, harmoniously built dog with a characteristic golden coat. The FCI standard (No. 111, Group 8) describes it as \"a symmetrical, balanced, active dog with a kindly expression\".",
    breedAppearList: "<strong>Height at withers:</strong> males 56–61 cm, females 51–56 cm;<strong>Weight:</strong> males 29–34 kg, females 25–29 kg;<strong>Coat:</strong> flat or wavy with a good water-resistant undercoat;<strong>Colour:</strong> any shade of gold or cream (not red or mahogany);<strong>Lifespan:</strong> 10–13 years",
    breedStandardTitle: "Detailed FCI standard",
    breedStandardP1: 'The full standard defines individual body parts that judges evaluate at shows. Source: <a href="https://www.retriever-klub.cz/plemena/golden-retriever/" target="_blank" rel="noopener noreferrer">Retriever Klub CZ</a>.',
    breedStandardList: "<strong>Head and skull:</strong> broad skull without coarse features, well-developed deep muzzle, length of foreface roughly equal to skull. Nose black.;<strong>Eyes:</strong> dark brown, well set apart, with dark rims.;<strong>Ears:</strong> medium-sized, set approximately level with the eyes.;<strong>Jaws:</strong> perfect, regular and complete scissor bite – upper incisors closely overlapping the lower.;<strong>Neck:</strong> good length, clean and muscular.;<strong>Body:</strong> balanced and well coupled, deep and spacious chest, well-sprung ribs, strong level topline.;<strong>Forequarters:</strong> straight with good bone, long well-laid-back shoulders.;<strong>Hindquarters:</strong> strong, muscular loins, well-bent stifles.",
    breedHealthTitle: "Golden Retriever health",
    breedHealthP1: "As with most purebred breeds, the Golden Retriever has hereditary health predispositions that responsible breeders test for. The most important include:",
    breedHealthList: "<strong>Hip dysplasia (HD)</strong> – X-ray of both parents is a prerequisite for responsible breeding;<strong>Elbow dysplasia (ED)</strong> – like HD, assessed radiographically;<strong>Eye diseases (PRA)</strong> – progressive retinal atrophy, tested genetically;<strong>Ichthyosis (ICT)</strong> – hereditary skin disease, can be ruled out by genetic testing;<strong>Cancer</strong> – Golden Retrievers unfortunately have a higher predisposition to certain types of tumours",
    breedHealthP2: 'That is why choosing a <strong>responsible breeder</strong> who performs comprehensive health testing is absolutely essential. At our kennel we <a href="alma-dokumenty.html">publish all health results</a>.',
    breedCareTitle: "Golden Retriever care",
    breedCareP1: "The Golden Retriever is not high-maintenance but does require regular care:",
    breedCareList: "<strong>Coat</strong> – brushing 2–3 times a week, daily during shedding season. The coat is never clipped, only tidied;<strong>Exercise</strong> – at least 1–2 hours of active exercise daily (walks, swimming, retrieving);<strong>Nutrition</strong> – quality food appropriate for age and activity. Golden Retrievers are prone to obesity;<strong>Mental stimulation</strong> – nose work, obedience, agility or retrieves keep the dog happy;<strong>Veterinary care</strong> – regular vaccinations, deworming and check-ups",
    breedSuitTitle: "Who is the Golden Retriever suitable for?",
    breedSuitP1: "The Golden Retriever is an ideal choice for:",
    breedSuitList: "Families with children – patient and playful;Active people – can handle hikes, running, swimming and cycling;First-time owners – easy to train, great as a first dog;People looking for a therapy dog – Retrievers excel at working with people",
    breedSuitP2: 'On the other hand, it is <strong>not suitable</strong> for people who spend most of the day away from home, have no time for exercise or are looking for a guard dog.',
    breedBreederTitle: "How to choose a responsible Golden Retriever breeder",
    breedBreederP1: "When choosing a Golden Retriever kennel, look for:",
    breedBreederList: "FCI registration through the national kennel club;Complete health tests of both parents (HD, ED, eye exams, genetic tests);Transparency – the breeder willingly shares results and answers questions;Puppy socialisation – puppies should grow up in a home environment;Lifetime support – a good breeder stays in touch for the dog's entire life;Membership in breed clubs",
    breedBreederP2: 'At our kennel <strong>Rosenaw Aurum</strong> in the Beskydy Mountains we breed Golden Retrievers with a focus on health, temperament and family life. <a href="index.html#about">Read about our approach</a> or <a href="index.html#contact">get in touch</a>.',
    breedCtaBack: "\u2190 Back to homepage",
    breedCtaPuppies: "Rosenaw Aurum puppies",

    // ochrana-osobnich-udaju.html
    privacyBreadcrumb: "Privacy policy",
    privacyTitle: "Privacy policy",
    privacyLead: "Information on the processing of personal data in accordance with Regulation (EU) 2016/679 (GDPR).",
    privacyS1Title: "1. Data controller",
    privacyS1Text: '<strong>Lucie Klesová</strong><br>Vigantice (near Rožnov pod Radhoštěm), Czech Republic<br>E-mail: <a href="mailto:lucie@klesova.cz">lucie@klesova.cz</a><br>Phone: <a href="tel:+420724913409">+420 724 913 409</a>',
    privacyS2Title: "2. What data we process",
    privacyS2Text: "Through the contact form on this website we may process the following personal data:",
    privacyS2List: "<strong>Name</strong> — to address you in our reply;<strong>E-mail address</strong> — to send you a reply;<strong>Phone number</strong> (optional) — for possible phone contact;<strong>Message content</strong> — to handle your enquiry",
    privacyS3Title: "3. Purpose of processing",
    privacyS3Text: "We process your personal data solely for the purpose of:",
    privacyS3List: "Replying to your enquiry sent via the contact form;Communication regarding potential interest in a puppy from our kennel;Arranging a visit",
    privacyS4Title: "4. Legal basis",
    privacyS4Text: 'We process personal data on the basis of <strong>legitimate interest</strong> (Art. 6(1)(f) GDPR) — replying to your enquiry. By submitting the contact form you consent to the processing of the provided data for this purpose.',
    privacyS5Title: "5. Retention period",
    privacyS5Text: 'We retain your personal data for the time necessary to handle your enquiry, <strong>up to 12 months</strong> from the last contact. After this period the data are deleted.',
    privacyS6Title: "6. Sharing data with third parties",
    privacyS6Text: 'We <strong>do not share your personal data with third parties</strong> except:',
    privacyS6List: '<strong>Formspree, Inc.</strong> — the contact form service provider (processor) that receives and forwards messages from the form. Formspree processes data in accordance with its own privacy policy.',
    privacyS7Title: "7. Cookies and analytics",
    privacyS7Text: 'This website uses only <strong>technically necessary cookies</strong>. For font rendering we use Google Fonts, which may process the visitor\'s IP address. The map in the contact section uses Google Maps.',
    privacyS8Title: "8. Your rights",
    privacyS8Text: "You have the right to:",
    privacyS8List: '<strong>Access</strong> your personal data;<strong>Rectification</strong> of inaccurate data;<strong>Erasure</strong> of data (right to be forgotten);<strong>Restriction</strong> of processing;<strong>Data portability</strong>;<strong>Object</strong> to processing;Lodge a <strong>complaint</strong> with the supervisory authority (<a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">www.uoou.cz</a>)',
    privacyS9Title: "9. Contact for exercising your rights",
    privacyS9Text: 'To exercise any of the above rights, please contact us at <a href="mailto:lucie@klesova.cz">lucie@klesova.cz</a>. We will respond within 30 days at the latest.',
    privacyUpdated: "Last updated: 22 March 2026",

    toolSpotEyebrow: "Free tool for breeders",
    toolSpotTitle: "Dog pregnancy calculator",
    toolSpotText: "Enter the mating date and instantly get the due date, key dates (ultrasound, x-ray) and puppy development week by week. Works for all dog breeds.",
    toolSpotCta: "Launch calculator →",

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

  // Remove loading class and show page (prevents CZ flash when EN is saved)
  document.documentElement.classList.remove("i18n-loading");
  document.documentElement.classList.add("i18n-loaded");
}

// Maps CS filenames ↔ EN filenames. Add entries here when a new page gets a real EN version.
const EN_PAGES = {
  "index.html": "en/index.html",
  "o-plemeni.html": "en/about-breed.html",
  "faq.html": "en/faq.html",
  "kalkulacka-brezosti-feny.html": "en/pregnancy-calculator.html",
};
const CS_PAGES = Object.fromEntries(
  Object.entries(EN_PAGES).map(([cs, en]) => [en.split("/").pop(), cs])
);

function getLangAwareTarget(targetLang) {
  const path = window.location.pathname;
  const inEn = /\/en\//.test(path);
  const filename = path.split("/").pop() || "index.html";
  if (targetLang === "en" && !inEn && EN_PAGES[filename]) {
    return "/" + EN_PAGES[filename];
  }
  if (targetLang === "cs" && inEn && CS_PAGES[filename]) {
    return "/" + CS_PAGES[filename];
  }
  return null; // no redirect → fall back to in-page translation
}

function setupLanguageSwitch() {
  // Detect initial language from <html lang> (set statically on /en/ pages) or localStorage
  const pageLang = document.documentElement.lang === "en" ? "en" : null;
  const savedLang = pageLang || localStorage.getItem("lang") || "cs";
  setLanguage(savedLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      localStorage.setItem("lang", lang);
      const target = getLangAwareTarget(lang);
      if (target) {
        window.location.href = target;
      } else {
        setLanguage(lang);
      }
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

function loadPregVideo() {
  const iframe = document.getElementById("preg-video");
  const placeholder = document.getElementById("preg-video-placeholder");
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

  const videoIframe = document.getElementById("preg-video");
  const videoPlaceholder = document.getElementById("preg-video-placeholder");
  if (videoIframe) videoIframe.style.display = "none";
  if (videoPlaceholder) videoPlaceholder.style.display = "flex";
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

const COOKIE_CONSENT_KEY = "cookieConsent";
const COOKIE_CONSENT_VERSION = 2;

function readCookieConsent() {
  const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!raw) return null;
  if (raw === "accepted") return { analytics: true, external: true };
  if (raw === "rejected") return { analytics: false, external: false };
  try {
    const parsed = JSON.parse(raw);
    return { analytics: !!parsed.analytics, external: !!parsed.external };
  } catch {
    return null;
  }
}

function writeCookieConsent(prefs) {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
    analytics: !!prefs.analytics,
    external: !!prefs.external,
    v: COOKIE_CONSENT_VERSION,
    ts: Date.now(),
  }));
}

function applyConsentState(prefs) {
  if (!prefs) return;
  if (prefs.external) {
    loadGoogleFonts();
    loadGoogleMap();
    loadPregVideo();
  } else {
    blockGoogleServices();
  }
  if (prefs.analytics) loadGoogleAnalytics();
}

function buildCookieBanner() {
  let banner = document.getElementById("cookie-banner");
  if (banner) return banner;
  const wrap = document.createElement("div");
  wrap.innerHTML = `
<div id="cookie-banner" class="cookie-banner" role="dialog" aria-labelledby="cookie-title" aria-modal="false" hidden>
  <div class="cookie-banner-inner">
    <div class="cookie-view" data-cookie-view="main">
      <h3 id="cookie-title" class="cookie-heading" data-i18n="cookieTitle">Cookies a soukromí</h3>
      <p class="cookie-text" data-i18n="cookieText" data-i18n-html>Používáme cookies a externí služby, které mohou zpracovávat vaši IP adresu. <a href="/ochrana-osobnich-udaju.html">Více informací</a>.</p>
      <div class="cookie-buttons">
        <button type="button" class="cookie-btn" id="cookie-reject" data-i18n="cookieReject">Odmítnout vše</button>
        <button type="button" class="cookie-btn" id="cookie-settings-btn" data-i18n="cookieSettings">Nastavení</button>
        <button type="button" class="cookie-btn cookie-btn--primary" id="cookie-accept" data-i18n="cookieAccept">Přijmout vše</button>
      </div>
    </div>
    <div class="cookie-view cookie-view--settings" data-cookie-view="settings" hidden>
      <h3 class="cookie-heading" data-i18n="cookieSettingsTitle">Nastavení cookies</h3>
      <ul class="cookie-categories">
        <li class="cookie-category">
          <label class="cookie-toggle">
            <span class="cookie-category-name" data-i18n="cookieCatNecessary">Nezbytné</span>
            <span class="cookie-switch">
              <input type="checkbox" checked disabled aria-label="Necessary">
              <span class="cookie-switch-slider" aria-hidden="true"></span>
            </span>
          </label>
          <p class="cookie-category-desc" data-i18n="cookieCatNecessaryDesc">Vždy zapnuté.</p>
        </li>
        <li class="cookie-category">
          <label class="cookie-toggle">
            <span class="cookie-category-name" data-i18n="cookieCatAnalytics">Analytika</span>
            <span class="cookie-switch">
              <input type="checkbox" id="cookie-cat-analytics">
              <span class="cookie-switch-slider" aria-hidden="true"></span>
            </span>
          </label>
          <p class="cookie-category-desc" data-i18n="cookieCatAnalyticsDesc">Google Analytics.</p>
        </li>
        <li class="cookie-category">
          <label class="cookie-toggle">
            <span class="cookie-category-name" data-i18n="cookieCatExternal">Externí obsah</span>
            <span class="cookie-switch">
              <input type="checkbox" id="cookie-cat-external">
              <span class="cookie-switch-slider" aria-hidden="true"></span>
            </span>
          </label>
          <p class="cookie-category-desc" data-i18n="cookieCatExternalDesc">Google Fonts, Google Maps, YouTube.</p>
        </li>
      </ul>
      <div class="cookie-buttons">
        <button type="button" class="cookie-btn" id="cookie-back" data-i18n="cookieBack">Zpět</button>
        <button type="button" class="cookie-btn cookie-btn--primary" id="cookie-save" data-i18n="cookieSave">Uložit volbu</button>
      </div>
    </div>
  </div>
</div>`.trim();
  banner = wrap.firstElementChild;
  document.body.appendChild(banner);
  return banner;
}

function showCookieBanner(initialPrefs) {
  const banner = buildCookieBanner();
  const main = banner.querySelector('[data-cookie-view="main"]');
  const settings = banner.querySelector('[data-cookie-view="settings"]');
  const analyticsInput = banner.querySelector("#cookie-cat-analytics");
  const externalInput = banner.querySelector("#cookie-cat-external");
  analyticsInput.checked = !!(initialPrefs && initialPrefs.analytics);
  externalInput.checked = !!(initialPrefs && initialPrefs.external);
  main.hidden = false;
  settings.hidden = true;
  const lang = document.documentElement.lang === "en" ? "en" : "cs";
  if (typeof setLanguage === "function") setLanguage(lang);
  banner.hidden = false;
  requestAnimationFrame(() => banner.classList.add("is-visible"));
}

function hideCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  if (!banner) return;
  banner.classList.remove("is-visible");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) banner.hidden = true;
  else setTimeout(() => { banner.hidden = true; }, 280);
}

function injectCookieFooterLink() {
  document.querySelectorAll(".footer-bottom").forEach((fb) => {
    if (fb.querySelector(".cookie-settings-link")) return;
    fb.appendChild(document.createTextNode(" — "));
    const link = document.createElement("a");
    link.href = "#";
    link.className = "cookie-settings-link";
    link.setAttribute("data-i18n", "cookieFooterLink");
    link.textContent = "Nastavení cookies";
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showCookieBanner(readCookieConsent() || {});
    });
    fb.appendChild(link);
  });
}

function setupCookieBanner() {
  const consent = readCookieConsent();
  if (consent) {
    applyConsentState(consent);
  } else {
    showCookieBanner({});
  }

  injectCookieFooterLink();

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    if (t.closest("#cookie-accept")) {
      const prefs = { analytics: true, external: true };
      writeCookieConsent(prefs);
      applyConsentState(prefs);
      hideCookieBanner();
    } else if (t.closest("#cookie-reject")) {
      const prefs = { analytics: false, external: false };
      writeCookieConsent(prefs);
      applyConsentState(prefs);
      hideCookieBanner();
    } else if (t.closest("#cookie-settings-btn")) {
      const banner = document.getElementById("cookie-banner");
      if (!banner) return;
      banner.querySelector('[data-cookie-view="main"]').hidden = true;
      banner.querySelector('[data-cookie-view="settings"]').hidden = false;
    } else if (t.closest("#cookie-back")) {
      const banner = document.getElementById("cookie-banner");
      if (!banner) return;
      banner.querySelector('[data-cookie-view="main"]').hidden = false;
      banner.querySelector('[data-cookie-view="settings"]').hidden = true;
    } else if (t.closest("#cookie-save")) {
      const banner = document.getElementById("cookie-banner");
      if (!banner) return;
      const prefs = {
        analytics: banner.querySelector("#cookie-cat-analytics").checked,
        external: banner.querySelector("#cookie-cat-external").checked,
      };
      writeCookieConsent(prefs);
      applyConsentState(prefs);
      hideCookieBanner();
    }
  });
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


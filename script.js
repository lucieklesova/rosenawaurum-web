// Jednoduché i18n – čeština a angličtina.
// Texty jsou uloženy ve dvou objektech a překládají se podle data-i18n atributu.

const translations = {
  cs: {
    logoSubtitle: "chovatelská stanice zlatých retrívrů",
    navHome: "Domů",
    navAbout: "O nás",
    navGirls: "Naše feny",
    navPuppies: "Štěňata",
    navGallery: "Galerie",
    navNews: "Novinky",
    navDocs: "Dokumenty",
    navContact: "Kontakt",

    heroOverline: "Chovatelská stanice FCI",
    heroTitle: "Z Beskyd. Ze srdce. Do rodiny.",
    heroSubtitle:
      "Rosenaw Aurum je malá rodinná chovatelská stanice z Rožnova pod Radhoštěm, kde jsou zlatí retrívři plnohodnotnými členy našeho života. Vyrůstají s námi doma, doprovázejí nás na cestách, sdílejí každodenní radosti i tiché večery. Nechováme ve velkém. Nechováme pro čísla. Chováme s respektem ke zdraví, vyrovnané povaze a ušlechtilé eleganci tohoto výjimečného plemene. Každé štěně od nás odchází tam, kam patří – do rodiny.",
    heroCtaAbout: "Poznat naši filozofii",
    heroCtaPuppies: "Informace o štěňatech",
    heroStatus:
      "První vrh Rosenaw Aurum plánujeme po dokončení všech zdravotních vyšetření a zkoušek naší fenky.",
    heroPhotoLabel: "Sem přijde vaše oblíbená fotografie Almy / retrívra",

    cardAboutTitle: "O stanici",
    cardAboutText:
      "Příběh jedné rodiny, která propadla kouzlu zlatých retrívrů – od prvního psa Dexíka až po vysněnou fenečku Almu.",
    cardMore: "Více o nás",
    cardGirlsTitle: "Naše feny",
    cardGirlsText:
      "Představujeme naše zlaté dámy – jejich rodokmen, zdraví, úspěchy a především povahu a život s námi.",
    cardMoreGirls: "Prohlédnout profily",
    cardPuppiesTitle: "Štěňata",
    cardPuppiesText:
      "Od prvního nadechnutí až po odchod do nových domovů – jak přistupujeme k odchovu a socializaci štěňátek.",
    cardMorePuppies: "Jak u nás rostou štěňata",

    aboutTitle: "O chovatelské stanici Rosenaw Aurum",
    aboutIntro1:
      "Za jménem Rosenaw Aurum stojí naše rodina a zlatí retrívři, kteří s námi sdílejí každodenní radosti i starosti. Prvním z nich byl Dexík – zlatý retrívr bez průkazu původu, který nás svou přátelskou povahou naučil, jak výjimečné toto plemeno je.",
    aboutIntro2:
      "Po jeho odchodu k nám do života vstoupila Alma, vysněná fenečka s průkazem původu, se kterou jsme se vydali na cestu k chovu zlatých retrívrů s důrazem na zdraví, povahu, pracovní vlohy a rodinný život. Alminka je pes do každé nepohody – plave, běhá po horách, dovádí s dětmi, ale zároveň dokáže tiše ležet vedle nemocného v pelíšku.",
    aboutPhilosophy:
      "Naším cílem je odchovávat vyrovnané, zdravé a společenské psy, kteří se budou cítit stejně dobře na výstavním kruhu, při práci v poli i uprostřed rodinného obýváku.",
    aboutBreederTitle: "Chovatelka",
    aboutBreederText:
      "Jmenuji se Lucie Klesová a psi mě provázejí od dětství. Zlatí retrívři jsou pro mě kombinací klidu, radosti a nevyčerpatelné ochoty spolupracovat. V chovu se opírám o zdraví, povahu a respekt k jednotlivým psím osobnostem.",
    aboutLinkAlma:
      "Podrobnější příběh Almy najdete na stránce mateřské chovatelské stanice Bohemica Aurum a na našem blogu.",

    girlsTitle: "Naše feny",
    girlsIntro:
      "Postupně zde najdete všechny naše zlaté dámy – od mladých nadějí po zkušené chovné feny a psí seniorky.",
    almaPhotoLabel: "Fotografie Almy – Alma Bohemica Aurum",
    almaBasic: "nar. 27. 1. 2024 • zlatý retrívr, fena",
    almaPersonality:
      "Alminka je naše vysněná fenečka zlatého retrívra. Do života k nám vtrhla jako velká voda a velmi rychle se z ní stal pes do každé situace – parťák na výlety, dovolené, sport i klidné večery doma.",
    almaHealthTitle: "Zdraví",
    almaHealthList:
      "Výška 56 cm, chrup úplný nůžkový;GR-PRA1 N/N, DR-PRA2 N/N, PRA N/N;ICT N/P, ICT-2 N/N, NCL N/N, GRMD Xn/Xn;HD B, ED 0/0;OCD negativní, SA negativní, LTV 0",
    almaTitlesTitle: "Ocenění a zkoušky",
    almaTitlesList:
      "Třída štěňat: VN1, Jubilejní vítěz štěně;Třída dorostu: VN1, VN2;Třída mladých: 2× VD, 2× V, V2;OVVR – 232 b., plný počet",
    almaPedigreeTitle: "Rodokmen",
    almaPedigreeList:
      "Otec: SPA CH Brandon de Ria Vela;Matka: Lolipop Dorado Blanco;Majitel: Lucie Klesová;Chovatel: Ing. František Vacek, Bohemica Aurum",

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
    puppiesStatusTitle: "Aktuální vrhy",
    puppiesStatus:
      "První vrh Rosenaw Aurum je v přípravě – sledujte prosím naše novinky.",
    puppiesPlannedTitle: "Plánované vrhy",
    puppiesPlannedText:
      "První vrh naší Alminky plánujeme na jaro 2027. Podrobnosti o krytím pejskovi a dalších informacích zveřejníme, jakmile budeme mít vše potvrzené.",
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
    galleryPlaceholderGirls: "Fotografie Almy v pohybu na louce",
    galleryPlaceholderLife: "Společná fotografie s rodinou na dovolené",
    galleryPlaceholderShows: "Výstavní kruh – třída mladých",

    newsTitle: "Novinky & blog",
    newsIntro:
      "Krátké zprávy o našich psech, plánovaných vrzích, výstavách, zkouškách a drobných radostech ze společného života.",
    newsItem1Meta: "2025 • První kroky Rosenaw Aurum",
    newsItem1Title: "Zrození chovatelské stanice",
    newsItem1Text:
      "Po pečlivém rozhodování a prvních zkušenostech s Almou jsme se rozhodli udělat další krok a založit chovatelskou stanici Rosenaw Aurum. Naším snem je odchovávat zlaté retrívry, kteří budou dělat radost svým rodinám mnoho let.",
    newsItem2Meta: "2024 • Alma Bohemica Aurum",
    newsItem2Title: "Alma přichází domů",
    newsItem2Text:
      "Alminka se k nám přistěhovala krátce poté, co nás opustil náš dlouholetý parťák Dexík. Na truchlení nebyl čas – malé štěně převrátilo naši domácnost vzhůru nohama a přineslo do ní novou energii a radost.",

    docsTitle: "Dokumenty",
    docsIntro:
      "Postupně zde najdete ke stažení vybrané dokumenty související s naším chovem – rodokmeny, zdravotní výsledky, smlouvy a další informace.",
    docsItem1: "Vzor kupní smlouvy pro štěňata Rosenaw Aurum (PDF)",
    docsItem2: "Základní přehled zdravotních vyšetření našich fen (PDF)",
    docsItem3: "Doporučení k péči o štěně v prvním roce života (PDF)",

    contactTitle: "Kontakt",
    contactIntro:
      "Máte zájem o štěně z našeho chovu nebo se jen chcete na něco zeptat? Napište nám – rádi se ozveme zpět.",
    contactNameLabel: "Jméno",
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
      "Rosenaw Aurum — chovatelská stanice zlatých retrívrů. Chováme s láskou, péčí a respektem k plemeni.",
    footerRights: "Všechna práva vyhrazena.",
  },

  en: {
    logoSubtitle: "Golden Retriever kennel",
    navHome: "Home",
    navAbout: "About",
    navGirls: "Our Girls",
    navPuppies: "Puppies",
    navGallery: "Gallery",
    navNews: "News",
    navDocs: "Documents",
    navContact: "Contact",

    heroOverline: "FCI registered kennel",
    heroTitle: "Golden retrievers as part of the family",
    heroSubtitle:
      "Rosenaw Aurum is a small family Golden Retriever kennel that values health, temperament and everyday life with dogs just as much as shows and working tests.",
    heroCtaAbout: "Our philosophy",
    heroCtaPuppies: "Puppy information",
    heroStatus:
      "Our first Rosenaw Aurum litter is planned after completing all health checks and working tests of our female.",
    heroPhotoLabel:
      "Place for your favourite photo of Alma or your Golden Retriever",

    cardAboutTitle: "About the kennel",
    cardAboutText:
      "The story of one family that fell in love with Golden Retrievers – from our first dog Dexík to our dream girl Alma.",
    cardMore: "Read more",
    cardGirlsTitle: "Our girls",
    cardGirlsText:
      "Meet our Golden ladies – their pedigrees, health results, achievements and above all their personalities.",
    cardMoreGirls: "View profiles",
    cardPuppiesTitle: "Puppies",
    cardPuppiesText:
      "From the first breath to leaving for new homes – how we raise and socialise our puppies.",
    cardMorePuppies: "How our puppies grow",

    aboutTitle: "About Rosenaw Aurum",
    aboutIntro1:
      "Rosenaw Aurum is all about our family and the Golden Retrievers who share everyday joys and worries with us. It all started with Dexík, a Golden Retriever without a pedigree, whose kind nature showed us how special this breed really is.",
    aboutIntro2:
      "After he passed away, Alma came into our lives – our dream girl with a pedigree, with whom we started our journey towards breeding Golden Retrievers with a focus on health, temperament, working ability and family life.",
    aboutPhilosophy:
      "Our goal is to breed well-balanced, healthy and social dogs that feel equally comfortable in the show ring, in the field and in the middle of a family living room.",
    aboutBreederTitle: "The breeder",
    aboutBreederText:
      "My name is Lucie Klesová and dogs have been part of my life since childhood. Golden Retrievers combine peace, joy and an endless willingness to cooperate. In breeding I focus on health, temperament and respect for each dog's individuality.",
    aboutLinkAlma:
      "You can find more about Alma on the website of her home kennel Bohemica Aurum and on our blog (in Czech).",

    girlsTitle: "Our girls",
    girlsIntro:
      "Here you will gradually find all our Golden girls – from young hopes to experienced brood bitches and seniors.",
    almaPhotoLabel: "Photo of Alma – Alma Bohemica Aurum",
    almaBasic: "born 27 January 2024 • Golden Retriever, female",
    almaPersonality:
      "Alma is our long‑awaited Golden girl. She brought new energy and joy into our home and quickly became a dog for every occasion – a companion for trips, holidays, sports and quiet evenings on the sofa.",
    almaHealthTitle: "Health",
    almaHealthList:
      "Height 56 cm, full scissor bite;GR-PRA1 N/N, DR-PRA2 N/N, PRA N/N;ICT N/P, ICT-2 N/N, NCL N/N, GRMD Xn/Xn;Hips HD B, elbows ED 0/0;OCD clear, SA clear, LTV 0",
    almaTitlesTitle: "Titles and tests",
    almaTitlesList:
      "Puppy class: Very promising 1, Jubilee winner – puppy;Minor puppy class: Very promising 1, 2;Junior class: 2× Very good, 2× Excellent, Excellent 2;OVVR – 232 points, full score",
    almaPedigreeTitle: "Pedigree",
    almaPedigreeList:
      "Sire: SPA CH Brandon de Ria Vela;Dam: Lolipop Dorado Blanco;Owner: Lucie Klesová;Breeder: Ing. František Vacek, Bohemica Aurum",

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
    puppiesStatusTitle: "Current litters",
    puppiesStatus:
      "Our first Rosenaw Aurum litter is in preparation – please follow our news section for updates.",
    puppiesPlannedTitle: "Planned litters",
    puppiesPlannedText:
      "We are planning Alma's first litter for spring 2027. We will share details about the sire and other information once everything is confirmed.",
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
    galleryPlaceholderGirls: "Alma running on a meadow",
    galleryPlaceholderLife: "Family photo from a holiday trip",
    galleryPlaceholderShows: "Show ring – junior class",

    newsTitle: "News & blog",
    newsIntro:
      "Short updates about our dogs, planned litters, shows, working tests and small joys of everyday life.",
    newsItem1Meta: "2025 • First steps of Rosenaw Aurum",
    newsItem1Title: "The kennel is born",
    newsItem1Text:
      "After careful consideration and our first experiences with Alma we decided to take the next step and establish the Rosenaw Aurum kennel. Our dream is to breed Golden Retrievers that will bring joy to their families for many years.",
    newsItem2Meta: "2024 • Alma Bohemica Aurum",
    newsItem2Title: "Alma comes home",
    newsItem2Text:
      "Alma joined our family shortly after our long‑time companion Dexík passed away. There was no time to grieve – a small puppy turned our home upside down and brought new life and energy.",

    docsTitle: "Documents",
    docsIntro:
      "Here you will gradually find selected documents related to our breeding – pedigrees, health results, contracts and more.",
    docsItem1: "Sample puppy purchase contract (PDF, Czech)",
    docsItem2: "Overview of our females' health tests (PDF)",
    docsItem3: "Puppy care recommendations – first year (PDF, Czech)",

    contactTitle: "Contact",
    contactIntro:
      "Interested in a puppy from our kennel or just want to ask something? Send us a message – we will get back to you.",
    contactNameLabel: "Name",
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
      "Rosenaw Aurum — Golden Retriever breeding kennel. We breed with love, care and respect for the breed.",
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
        li.textContent = item.trim();
        el.appendChild(li);
      });
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

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.getAttribute("data-gallery-filter");

      tabs.forEach((t) => t.classList.remove("gallery-tab--active"));
      tab.classList.add("gallery-tab--active");

      items.forEach((item) => {
        const cat = item.getAttribute("data-gallery-category");
        if (filter === "all" || filter === cat) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

function setupContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Minimalistický behavior: zatím jen poděkování v alertu.
    alert(
      document.documentElement.lang === "en"
        ? "Thank you for your message. We will get back to you as soon as possible."
        : "Děkujeme za zprávu. Ozveme se vám co nejdříve."
    );
    form.reset();
  });
}

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  if (!lightbox || !lightboxImg) return;

  document.querySelectorAll(".dog-photo-wrapper, .gallery-item").forEach((el) => {
    el.addEventListener("click", () => {
      const img = el.querySelector("img");
      if (!img) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("lightbox--open");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("lightbox--open");
    lightboxImg.src = "";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("lightbox--open");
      lightboxImg.src = "";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupLanguageSwitch();
  setupGalleryFilter();
  setupContactForm();
  setupLightbox();
});


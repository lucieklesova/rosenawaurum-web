// Logika webu – překlady jsou v translations.js (načítá se před tímto souborem).
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

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    const value = dict[key];
    if (value) el.setAttribute("aria-label", value);
  });

  // Přepnout atribut lang na html
  document.documentElement.lang = lang === "en" || lang === "de" ? lang : "cs";

  // Aktivní tlačítko jazyka
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("lang-btn--active", btn.dataset.lang === lang);
  });

  // Remove loading class and show page (prevents CZ flash when EN is saved)
  document.documentElement.classList.remove("i18n-loading");
  document.documentElement.classList.add("i18n-loaded");
}

// CS ↔ EN ↔ DE page groups. Add entries when a page gets localized copies.
const PAGE_LOCALES = [
  { cs: "index.html", en: "en/index.html", de: "de/index.html" },
  { cs: "o-plemeni.html", en: "en/about-breed.html", de: "de/about-breed.html" },
  {
    cs: "pro-budouci-majitele.html",
    en: "en/future-owners.html",
    de: "de/zukuenftige-besitzer.html",
  },
  {
    cs: "rezervace-stenete.html",
    en: "en/puppy-reservation.html",
    de: "de/welpenreservierung.html",
  },
  { cs: "faq.html", en: "en/faq.html", de: "de/faq.html" },
  {
    cs: "kalkulacka-brezosti-feny.html",
    en: "en/pregnancy-calculator.html",
    de: "de/pregnancy-calculator.html",
  },
];

function getCurrentLocale() {
  const path = window.location.pathname;
  if (/\/en\//.test(path)) return "en";
  if (/\/de\//.test(path)) return "de";
  return "cs";
}

function findPageLocaleGroup() {
  const filename = window.location.pathname.split("/").pop() || "index.html";
  return PAGE_LOCALES.find(
    (g) =>
      g.cs === filename ||
      g.en.split("/").pop() === filename ||
      g.de.split("/").pop() === filename
  );
}

function getLangAwareTarget(targetLang) {
  const current = getCurrentLocale();
  if (targetLang === current) return null;
  const group = findPageLocaleGroup();
  if (!group || !group[targetLang]) return null;
  return "/" + group[targetLang];
}

function setupLanguageSwitch() {
  // Detect initial language from <html lang> (set on /en/ and /de/ pages) or localStorage
  const htmlLang = document.documentElement.lang;
  const pageLang = htmlLang === "en" || htmlLang === "de" ? htmlLang : null;
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
    // play() vrací Promise – při rychlém odjetí myší ji pause() zamítne
    const play = () => video.play().catch(() => {});
    item.addEventListener("mouseenter", play);
    item.addEventListener("mouseleave", () => { video.pause(); video.currentTime = 0; });
    item.addEventListener("click", () => {
      if (video.paused) play(); else video.pause();
    });
  });
}

function setupContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  let lastSubmit = 0;

  // Chybová hláška přímo u formuláře (místo alert), oznámí ji i čtečka obrazovky
  const status = document.createElement("p");
  status.className = "form-status";
  status.setAttribute("role", "alert");
  status.hidden = true;
  form.appendChild(status);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Rate limit: 10 seconds between submissions
    const now = Date.now();
    if (now - lastSubmit < 10000) return;
    lastSubmit = now;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    const lang = translations[document.documentElement.lang] ? document.documentElement.lang : "cs";
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="btn-spinner"></span>';
    status.hidden = true;

    const showError = () => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      status.textContent = translations[lang].formError;
      status.hidden = false;
    };

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (!response.ok) return showError();
        submitBtn.innerHTML = '<span class="btn-check">\u2713</span>';
        submitBtn.classList.add("btn--success");
        // Děkovací stránka existuje jen v kořeni – jazyk jí předáme přes localStorage
        localStorage.setItem("lang", lang);
        setTimeout(() => {
          window.location.href = "/dekujeme.html";
        }, 800);
      })
      .catch(showError);
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

function setupNavDropdown() {
  const dropdowns = document.querySelectorAll(".main-nav .nav-dropdown");
  if (!dropdowns.length) return;

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".nav-dropdown-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));

      dropdowns.forEach((other) => {
        if (other === dropdown) return;
        other.classList.remove("is-open");
        const otherToggle = other.querySelector(".nav-dropdown-toggle");
        if (otherToggle) otherToggle.setAttribute("aria-expanded", "false");
      });
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest(".main-nav .nav-dropdown")) return;
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("is-open");
      const toggle = dropdown.querySelector(".nav-dropdown-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("is-open");
      const toggle = dropdown.querySelector(".nav-dropdown-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupActiveNavigation() {
  const currentUrl = new URL(window.location.href);
  const currentPath = currentUrl.pathname.replace(/\/$/, "") || "/";

  function normalizedPath(href) {
    try {
      const url = new URL(href, window.location.href);
      return url.pathname.replace(/\/$/, "") || "/";
    } catch (e) {
      return "";
    }
  }

  document.querySelectorAll(".main-nav a, .mobile-menu-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return;

    const isCurrent = normalizedPath(href) === currentPath;
    if (!isCurrent) return;

    link.classList.add("active");

    const dropdown = link.closest(".nav-dropdown");
    if (dropdown) dropdown.classList.add("is-active");
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
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
        // Při omezení animací nespouštět automaticky – stačí ovládací prvky
        if (reduceMotion) video.controls = true;
        else video.play().catch(() => {});
        observer.unobserve(video);
      }
    });
  }, { rootMargin: "200px" });
  videos.forEach(function (v) {
    observer.observe(v);
    // Smyčku musí jít zastavit (WCAG 2.2.2)
    v.addEventListener("click", function () {
      if (v.controls) return;
      if (v.paused) v.play().catch(() => {}); else v.pause();
    });
  });
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
  window["ga-disable-G-XDKPV7JGM3"] = false;
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

// Při odvolání souhlasu zastavit měření a smazat cookies _ga
function disableGoogleAnalytics() {
  window["ga-disable-G-XDKPV7JGM3"] = true;
  const host = location.hostname.replace(/^www\./, "");
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (!/^_ga/.test(name)) return;
    [host, "." + host, ""].forEach((domain) => {
      document.cookie = name + "=; Max-Age=0; path=/" + (domain ? "; domain=" + domain : "");
    });
  });
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
    loadGoogleMap();
    loadPregVideo();
  } else {
    blockGoogleServices();
  }
  if (prefs.analytics) loadGoogleAnalytics();
  else disableGoogleAnalytics();
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
          <p class="cookie-category-desc" data-i18n="cookieCatExternalDesc">Google Maps, YouTube.</p>
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
  const lang = translations[document.documentElement.lang]
    ? document.documentElement.lang
    : "cs";
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

    toggleBtn.addEventListener("click", function() {
      pastExpanded = !pastExpanded;
      toggleBtn.classList.toggle("is-expanded", pastExpanded);
      var dict = translations[document.documentElement.lang] || translations.cs;
      if (toggleLabel) {
        toggleLabel.textContent = pastExpanded ? dict.pregHidePast : dict.pregShowPast;
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
    });
  }

  // --- Date formatting helper ---
  function dateLocale() {
    var lang = document.documentElement.lang || "cs";
    if (lang === "en") return "en-GB";
    if (lang === "de") return "de-DE";
    return "cs-CZ";
  }

  function fmt(d) {
    return d.toLocaleDateString(dateLocale(), {
      day: "numeric", month: "long", year: "numeric"
    });
  }

  function fmtShort(d) {
    return d.toLocaleDateString(dateLocale(), {
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

    var dict = translations[document.documentElement.lang] || translations.cs;

    document.getElementById("preg-due-date").textContent = fmt(dueDate);
    document.getElementById("preg-window").textContent = fmt(earlyDate) + " – " + fmt(lateDate);

    // Key dates
    var keyDates = document.getElementById("preg-key-dates");
    keyDates.hidden = false;
    document.getElementById("key-mating").textContent = fmt(matingDate);
    document.getElementById("key-ultrasound").textContent = fmtShort(ultrasoundStart) + " – " + fmtShort(ultrasoundEnd);
    document.getElementById("key-xray").textContent = fmtShort(xrayStart) + " – " + fmtShort(xrayEnd);
    document.getElementById("key-birth").textContent = fmt(dueDate);
    document.getElementById("key-departure").textContent = dict.pregFrom + fmt(departureDate);

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
      dayEl.textContent = dict.pregDayWord + " " + currentDay +
        " (" + dict.pregWeekWord + " " + currentWeek + ")";

      if (daysLeft > 0) {
        countdownEl.textContent = daysLeft + dict.pregDaysSuffix;
      } else if (daysLeft === 0) {
        countdownEl.textContent = dict.pregToday;
      } else {
        countdownEl.textContent = dict.pregPastDue;
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
      dayEl.textContent = dict.pregNotStarted;
      countdownEl.textContent = Math.abs(currentDay) + dict.pregDaysUntilMating;
      progressEl.style.width = "0%";
      weeks.forEach(function(week) {
        week.classList.remove("preg-week--active", "preg-week--past", "is-past-hidden");
      });
      toggleBtn.hidden = true;
    } else {
      dayEl.textContent = dict.pregEnded;
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
  setupNavDropdown();
  setupActiveNavigation();
  setupScrollAnimations();
  setupCookieBanner();
  setupStickyHeader();
  setupShareButtons();
  setupPregnancyCalculator();
});

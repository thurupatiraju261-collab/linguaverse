/* ==========================================================================
   LinguaVerse — script.js
   All site interactivity that isn't theme-related lives here:
   navigation, animations, dynamic language rendering & page-specific widgets.
   Every feature checks the DOM for its own elements first, so this single
   file can be safely included on every page.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  hidePageLoader();
  initStickyNavbar();
  initMobileNav();
  initLanguageDropdown();
  initActiveNavLink();
  initScrollReveal();
  initAnimatedCounters();
  initBackToTop();
  initScrollProgress();
  initFAQAccordion();
  initContactForm();
  initNewsletterForm();
  renderFeaturedLanguageCards();
  renderAllLanguageCards();
  renderLanguageDetails();
});

/* ---------------------------------------------------------------------- */
/* Page loader                                                            */
/* ---------------------------------------------------------------------- */
function hidePageLoader() {
  const loader = document.querySelector(".page-loader");
  if (!loader) return;
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hidden"), 300);
  });
}

/* ---------------------------------------------------------------------- */
/* Sticky navbar — adds a glass background once the page has scrolled     */
/* ---------------------------------------------------------------------- */
function initStickyNavbar() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  const toggleScrolled = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  };
  toggleScrolled();
  window.addEventListener("scroll", toggleScrolled, { passive: true });
}

/* ---------------------------------------------------------------------- */
/* Mobile hamburger navigation                                            */
/* ---------------------------------------------------------------------- */
function initMobileNav() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".nav-overlay");
  if (!hamburger || !navMenu) return;

  const closeMenu = () => {
    hamburger.classList.remove("open");
    navMenu.classList.remove("open");
    overlay?.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    hamburger.classList.add("open");
    navMenu.classList.add("open");
    overlay?.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
  };

  hamburger.addEventListener("click", () => {
    const isOpen = navMenu.classList.contains("open");
    isOpen ? closeMenu() : openMenu();
  });

  overlay?.addEventListener("click", closeMenu);

  // Close the menu automatically once a link is tapped
  navMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
}

/* ---------------------------------------------------------------------- */
/* Language selector dropdown (in the navbar)                             */
/* ---------------------------------------------------------------------- */
function initLanguageDropdown() {
  const select = document.querySelector(".lang-select");
  if (!select) return;
  const btn = select.querySelector(".lang-select-btn");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    select.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!select.contains(e.target)) select.classList.remove("open");
  });

  // Selecting a language jumps straight to its details page
  select.querySelectorAll("[data-lang-id]").forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = `language-details.html?lang=${item.dataset.langId}`;
    });
  });
}

/* ---------------------------------------------------------------------- */
/* Active nav-link highlighting                                           */
/* ---------------------------------------------------------------------- */
function initActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const linkPage = link.getAttribute("href")?.split("#")[0] || "";
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    }
  });
}

/* ---------------------------------------------------------------------- */
/* Reveal-on-scroll animations                                            */
/* ---------------------------------------------------------------------- */
function initScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* ---------------------------------------------------------------------- */
/* Animated counters (Trust section)                                      */
/* ---------------------------------------------------------------------- */
function initAnimatedCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.counter);
    const isDecimal = !Number.isInteger(target);
    const suffix = el.dataset.suffix || "";
    const duration = 1600;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = target * eased;
      el.textContent = (isDecimal ? value.toFixed(1) : Math.floor(value).toLocaleString()) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((el) => observer.observe(el));
}

/* ---------------------------------------------------------------------- */
/* Back-to-top button                                                     */
/* ---------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    () => btn.classList.toggle("visible", window.scrollY > 400),
    { passive: true }
  );

  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------------------------------------------------------------------- */
/* Scroll progress bar                                                     */
/* ---------------------------------------------------------------------- */
function initScrollProgress() {
  const bar = document.querySelector(".scroll-progress__bar");
  if (!bar) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + "%";
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
}

/* ---------------------------------------------------------------------- */
/* FAQ accordion (Contact page)                                           */
/* ---------------------------------------------------------------------- */
function initFAQAccordion() {
  const items = document.querySelectorAll(".faq-item");
  if (!items.length) return;

  items.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      items.forEach((i) => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
}

/* ---------------------------------------------------------------------- */
/* Contact form (front-end only — no backend wired up yet)                */
/* ---------------------------------------------------------------------- */
function initContactForm() {
  const form = document.querySelector("#contactForm");
  if (!form) return;
  const status = form.querySelector(".form-status");

  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
      return;
    }
    // Form is valid, let it submit to Web3Forms
  });
}

/* ---------------------------------------------------------------------- */
/* Newsletter form (footer)                                                */
/* ---------------------------------------------------------------------- */
function initNewsletterForm() {
  const form = document.querySelector("#newsletterForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input");
    if (!input.value) return;
    input.value = "";
    input.placeholder = "Subscribed! Welcome aboard 🎉";
  });
}

/* ---------------------------------------------------------------------- */
/* Difficulty stars helper                                                */
/* ---------------------------------------------------------------------- */
function starsFor(level) {
  return "★".repeat(level) + "☆".repeat(5 - level);
}

/* ---------------------------------------------------------------------- */
/* Render the 6 featured language cards on the homepage                   */
/* ---------------------------------------------------------------------- */
function renderFeaturedLanguageCards() {
  const grid = document.querySelector("#featuredLanguages");
  if (!grid || typeof LANGUAGES === "undefined") return;
  /* Add reveal-stagger class for staggered entry animation */
  grid.classList.add("reveal-stagger");
  grid.innerHTML = LANGUAGES.map(languageCardTemplate).join("");
  initScrollReveal();
}

/* ---------------------------------------------------------------------- */
/* Render the full language grid on languages.html                        */
/* ---------------------------------------------------------------------- */
function renderAllLanguageCards() {
  const grid = document.querySelector("#allLanguages");
  if (!grid || typeof LANGUAGES === "undefined") return;
  grid.classList.add("reveal-stagger");
  grid.innerHTML = LANGUAGES.map(languageCardTemplate).join("");
  initScrollReveal();

  // Optional difficulty filter chips
  const filterBar = document.querySelector("#difficultyFilter");
  if (!filterBar) return;
  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    filterBar.querySelectorAll("[data-filter]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    const filtered = filter === "all" ? LANGUAGES : LANGUAGES.filter((l) => l.difficulty === filter);
    grid.innerHTML = filtered.map(languageCardTemplate).join("");
    initScrollReveal();
  });
}

/* Map difficulty to a friendlier label */
function difficultyLabel(diff) {
  const map = { Easy: "Beginner", Medium: "Intermediate", Hard: "Advanced" };
  return map[diff] || diff;
}

/* Map popularity to an emoji icon */
function popularityIcon(pop) {
  const map = { Popular: "🔥", Trending: "🚀", New: "✨" };
  return map[pop] || "";
}

function languageCardTemplate(lang) {
  /* Build optional popularity badge */
  const popBadge = lang.popularity
    ? `<span class="popularity-badge">${popularityIcon(lang.popularity)} ${lang.popularity}</span>`
    : "";

  return `
    <article class="lang-card reveal">
      <div class="lang-card-top">
        <span class="lang-card-flag" aria-hidden="true">${lang.flag}</span>
        <div style="display:flex;align-items:center;gap:8px;">
          ${popBadge}
          <span class="difficulty-tag ${lang.difficulty}">${difficultyLabel(lang.difficulty)}</span>
        </div>
      </div>
      <h3>${lang.name}</h3>
      <p class="native-name">${lang.nativeName} · ${lang.tagline}</p>
      <p class="desc">${lang.description}</p>
      <div class="lang-card-meta">
        <span><i class="fa-solid fa-book"></i>${lang.lessons} lessons</span>
        <span><i class="fa-regular fa-clock"></i>${lang.duration}</span>
        <span><i class="fa-solid fa-users"></i>${lang.learners}</span>
      </div>
      <a class="btn btn-primary" href="language-details.html?lang=${lang.id}">
        Learn More <i class="fa-solid fa-arrow-right"></i>
      </a>
    </article>`;
}

/* ---------------------------------------------------------------------- */
/* Language details page — fully dynamic, driven by the ?lang= param      */
/* ---------------------------------------------------------------------- */
function renderLanguageDetails() {
  const root = document.querySelector("#languageDetails");
  if (!root || typeof LANGUAGES === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const lang = getLanguageById(params.get("lang")) || LANGUAGES[0];
  const d = lang.details;

  document.title = `${lang.name} — LinguaVerse`;

  // Banner
  document.querySelector("#detailsBanner").innerHTML = `
    <div class="container">
      <div style="margin-bottom: var(--space-md);">
        <a href="languages.html" class="btn" style="background: rgba(255,255,255,0.2); color: #fff; padding: 8px 16px; border-radius: var(--radius-full); display: inline-flex; align-items: center; gap: 8px; font-size: 0.9rem; transition: background 0.3s; border: 1px solid rgba(255,255,255,0.3); text-decoration: none;">
          <i class="fa-solid fa-arrow-left"></i> Go Back
        </a>
      </div>
      <span class="flag-big">${lang.flag}</span>
      <h1>${lang.name} <span style="opacity:.7;font-weight:400;font-size:1.4rem;">(${lang.nativeName})</span></h1>
      <p>${d.bannerSubtitle}</p>
      <div class="meta">
        <span><i class="fa-solid fa-signal"></i> ${lang.difficulty} · ${starsFor(lang.difficultyLevel)}</span>
        <span><i class="fa-solid fa-book"></i> ${lang.lessons} lessons</span>
        <span><i class="fa-regular fa-clock"></i> ${lang.duration}</span>
        <span><i class="fa-solid fa-users"></i> ${lang.learners} learners</span>
      </div>
    </div>`;

  // History & countries
  document.querySelector("#historyBlock").innerHTML = `
    <h2>History</h2>
    <p class="block-intro">${d.history}</p>
    <h3 style="margin-bottom:12px;">Where it's spoken</h3>
    <div class="chip-list">${d.countries.map((c) => `<span class="chip"><i class="fa-solid fa-location-dot"></i> ${c}</span>`).join("")}</div>`;

  // Alphabet & pronunciation
  document.querySelector("#alphabetBlock").innerHTML = `
    <h2>Alphabet &amp; Pronunciation</h2>
    <div class="grid two-col">
      <div class="info-card">
        <div class="icon-wrap"><i class="fa-solid fa-spell-check"></i></div>
        <h3>${d.alphabet.name}</h3>
        <p>${d.alphabet.count} characters. ${d.alphabet.note}</p>
      </div>
      <div class="info-card">
        <div class="icon-wrap" style="background:var(--gradient-secondary);"><i class="fa-solid fa-volume-high"></i></div>
        <h3>Pronunciation tips</h3>
        <ul style="padding-left:18px;list-style:disc;">
          ${d.pronunciation.map((tip) => `<li style="margin-bottom:6px;">${tip}</li>`).join("")}
        </ul>
      </div>
    </div>`;

  // Greetings & numbers
  document.querySelector("#greetingsBlock").innerHTML = `
    <h2>Greetings</h2>
    <div class="grid two-col">
      ${d.greetings.map((g) => `<div class="phrase-card"><div class="phrase">${g.phrase}</div><div class="meaning">${g.meaning}</div></div>`).join("")}
    </div>
    <h3 style="margin:var(--space-md) 0 12px;">Numbers 1–5</h3>
    <div class="grid number-grid">
      ${d.numbers.map((n) => `<div class="number-card"><div class="num">${n.n}</div><div class="word">${n.word}</div></div>`).join("")}
    </div>`;

  // Useful phrases & vocabulary
  const vocabHtml = Object.entries(d.vocabulary)
    .map(
      ([category, words]) => `
      <div class="info-card">
        <h3>${category}</h3>
        <div class="chip-list" style="margin-top:10px;">${words.map((w) => `<span class="chip">${w}</span>`).join("")}</div>
      </div>`
    )
    .join("");

  document.querySelector("#phrasesBlock").innerHTML = `
    <h2>Useful Phrases</h2>
    <div class="grid two-col">
      ${d.phrases.map((p) => `<div class="phrase-card"><div class="phrase">${p.phrase}</div><div class="meaning">${p.meaning}</div></div>`).join("")}
    </div>
    <h3 style="margin:var(--space-md) 0 12px;">Core vocabulary</h3>
    <div class="grid two-col">${vocabHtml}</div>`;

  // Grammar & levels
  document.querySelector("#grammarBlock").innerHTML = `
    <h2>Grammar Essentials</h2>
    <div class="grid three-col" style="margin-bottom:var(--space-lg);">
      ${d.grammar.map((g, i) => `<div class="info-card"><div class="icon-wrap">${i + 1}</div><p>${g}</p></div>`).join("")}
    </div>
    <h3 style="margin-bottom:12px;">Learning levels</h3>
    <div class="level-tabs">
      ${d.levels.map((l) => `<div class="level-card"><div class="level-label">${l.level}</div><p>${l.desc}</p></div>`).join("")}
    </div>`;

  // Roadmap & tips
  document.querySelector("#roadmapBlock").innerHTML = `
    <h2>Learning Roadmap</h2>
    <p class="block-intro">A step-by-step path to take you from zero to conversational in ${lang.name}.</p>
    <ul class="roadmap-list">${d.roadmap.map((step) => `<li>${step}</li>`).join("")}</ul>
    <h3 style="margin:var(--space-md) 0 12px;">Tips from fluent learners</h3>
    <div class="grid two-col">${d.tips.map((tip) => `<div class="tip-card">${tip}</div>`).join("")}</div>`;

  // Facts, related languages & resources
  document.querySelector("#factsBlock").innerHTML = `
    <h2>Interesting Facts</h2>
    <div class="grid three-col" style="margin-bottom:var(--space-lg);">
      ${d.facts.map((f) => `<div class="fact-card"><i class="fa-solid fa-lightbulb"></i><p>${f}</p></div>`).join("")}
    </div>
    <h3 style="margin-bottom:12px;">Related languages</h3>
    <div class="related-langs" style="margin-bottom:var(--space-lg);">
      ${d.related
        .map((id) => getLanguageById(id))
        .filter(Boolean)
        .map((r) => `<a class="related-chip" href="language-details.html?lang=${r.id}">${r.flag} ${r.name}</a>`)
        .join("")}
    </div>
    <h3 style="margin-bottom:12px;">Resources to get started</h3>
    <div class="grid two-col">
      ${d.resources
        .map(
          (r) => `
        <a class="resource-card" href="#">
          <div>
            <strong>${r.label}</strong>
            <div style="font-size:0.85rem;color:var(--text-muted);">${r.note}</div>
          </div>
          <div class="icon-wrap" style="width:36px;height:36px;border-radius:50%;background:var(--gradient-secondary);color:#fff;display:flex;align-items:center;justify-content:center;"><i class="fa-solid fa-arrow-right"></i></div>
        </a>`
        )
        .join("")}
    </div>`;

  initScrollReveal();
}

(function () {
  var cfg = window.OGT;
  if (!cfg) return;

  document.documentElement.classList.add("ogt-premium");

  var page = document.documentElement.getAttribute("data-ogt-page") || "";

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  function quoteMailtoHref() {
    var subject = encodeURIComponent(cfg.quoteEmailSubject || "Free quote request — Ottawa Garage Tech");
    var body = encodeURIComponent(
      "Hi,\n\nI would like a free quote for garage door service.\n\nName:\nPhone:\nArea/neighbourhood:\nDetails:\n"
    );
    return "mailto:" + cfg.email + "?subject=" + subject + "&body=" + body;
  }

  function quoteEmailButton(className, label) {
    return (
      '<a class="' +
      (className || "ogt-btn ogt-btn-secondary") +
      '" href="' +
      quoteMailtoHref() +
      '">' +
      esc(label || "Free quote by email") +
      "</a>"
    );
  }

  function navLink(item) {
    var current = page === item.id ? ' aria-current="page"' : "";
    return '<a href="' + item.href + '"' + current + ">" + esc(item.label) + "</a>";
  }

  function serviceLinks() {
    return cfg.services
      .map(function (s) {
        return '<a href="/services/' + s.slug + '">' + esc(s.title) + "</a>";
      })
      .join("");
  }

  function desktopNav() {
    var html = "";
    cfg.nav.forEach(function (item) {
      if (item.id === "services") {
        html +=
          '<div class="ogt-nav-dropdown-wrap">' +
          '<button type="button" class="ogt-nav-dropdown-btn" aria-expanded="false" aria-haspopup="true">Services</button>' +
          '<div class="ogt-nav-dropdown" role="menu">' +
          '<a href="/services" role="menuitem">All services</a>' +
          serviceLinks() +
          "</div></div>";
        return;
      }
      html += navLink(item);
    });
    return html;
  }

  var headerHtml =
    '<a class="ogt-skip" href="#main">Skip to content</a>' +
    '<header class="ogt-header">' +
    '<div class="ogt-header-inner">' +
    '<a class="ogt-logo" href="' + esc(cfg.domain) + '/">' +
    '<img src="/assets/logo.svg" width="44" height="44" alt="' +
    esc(cfg.name) +
    ' logo">' +
    '<span class="ogt-logo-text">' +
    esc(cfg.name) +
    '<span class="ogt-logo-sub">Garage doors · Ottawa</span></span></a>' +
    '<nav class="ogt-nav-desktop" aria-label="Main">' +
    desktopNav() +
    "</nav>" +
    '<div class="ogt-header-ctas">' +
    '<a class="ogt-btn ogt-btn-call" href="tel:' +
    cfg.phoneTel +
    '">Call ' +
    esc(cfg.phone) +
    "</a>" +
    quoteEmailButton("ogt-btn ogt-btn-secondary ogt-header-quote", "Free quote") +
    "</div>" +
    '<button class="ogt-menu-btn" type="button" aria-expanded="false" aria-controls="ogt-nav-mobile" aria-label="Open menu">' +
    "<span></span><span></span><span></span></button></div>" +
    '<nav id="ogt-nav-mobile" class="ogt-nav-mobile" aria-label="Mobile">' +
    cfg.nav.map(navLink).join("") +
    '<p class="ogt-nav-mobile-label">Services</p>' +
    serviceLinks() +
    '<a class="ogt-btn ogt-btn-call" href="tel:' +
    cfg.phoneTel +
    '">Call now</a>' +
    quoteEmailButton("ogt-btn ogt-btn-secondary ogt-nav-quote") +
    "</nav></header>";

  var footerHtml =
    '<footer class="ogt-footer"><div class="ogt-footer-inner">' +
    "<div><h3>" +
    esc(cfg.name) +
    "</h3><p>Garage door repair, installation, and openers for Ottawa and nearby communities.</p></div>" +
    '<div><h3>Services</h3><p><a href="/services">All services</a></p>' +
    cfg.services
      .slice(0, 4)
      .map(function (s) {
        return '<p><a href="/services/' + s.slug + '">' + esc(s.title) + "</a></p>";
      })
      .join("") +
    "</div>" +
    '<div><h3>Contact</h3>' +
    '<p><a href="tel:' +
    cfg.phoneTel +
    '">' +
    esc(cfg.phone) +
    "</a></p>" +
    '<p><a href="mailto:' +
    esc(cfg.email) +
    '">' +
    esc(cfg.email) +
    "</a></p>" +
    '<p><a href="' +
    esc(cfg.facebook) +
    '" target="_blank" rel="noopener noreferrer">Facebook</a></p>' +
    "<p>" +
    esc(cfg.hours) +
    "</p></div></div>" +
    '<div class="ogt-footer-legal">' +
    '<p><a href="/about">About</a> · <a href="/areas">Areas</a> · <a href="/#reviews">Reviews</a> · <a href="/faq">FAQ</a> · <a href="/gallery">Gallery</a> · <a href="/blog">Blog</a> · <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="/contact">Contact</a></p>' +
    "</div>" +
    '<p class="ogt-footer-bottom">&copy; <span id="ogt-year"></span> ' +
    esc(cfg.name) +
    ". All rights reserved.</p></footer>";

  var headerEl = document.getElementById("ogt-site-header");
  var footerEl = document.getElementById("ogt-site-footer");
  if (headerEl) headerEl.innerHTML = headerHtml;
  if (footerEl) footerEl.innerHTML = footerHtml;

  var year = document.getElementById("ogt-year");
  if (year) year.textContent = new Date().getFullYear();

  var menuBtn = document.querySelector(".ogt-menu-btn");
  var mobileNav = document.querySelector(".ogt-nav-mobile");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      var open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!open));
      mobileNav.classList.toggle("is-open", !open);
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuBtn.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("is-open");
      });
    });
  }

  document.querySelectorAll(".ogt-nav-dropdown-btn").forEach(function (btn) {
    var wrap = btn.closest(".ogt-nav-dropdown-wrap");
    if (!wrap) return;
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      wrap.classList.toggle("is-open", !open);
    });
  });

  var faqList = document.getElementById("ogt-faq-list");
  if (faqList && cfg.faqs) {
    faqList.innerHTML = cfg.faqs
      .map(function (f) {
        return (
          '<details class="ogt-faq-item"><summary>' +
          esc(f.q) +
          "</summary><p>" +
          esc(f.a) +
          "</p></details>"
        );
      })
      .join("");
  }

  function areaChip(a) {
    var name = typeof a === "string" ? a : a.name;
    var slug = typeof a === "object" && a.slug ? a.slug : null;
    if (slug) {
      return (
        '<a class="ogt-area-chip" href="/areas/' +
        esc(slug) +
        '" data-area="' +
        esc(slug) +
        '">' +
        esc(name) +
        "</a>"
      );
    }
    return '<span class="ogt-area-chip">' + esc(name) + "</span>";
  }

  var areasGrid = document.getElementById("ogt-areas-grid");
  if (areasGrid && cfg.areas) {
    areasGrid.innerHTML = cfg.areas.map(areaChip).join("");
  }

  var homeAreas = document.getElementById("ogt-home-areas");
  if (homeAreas && cfg.areas) {
    homeAreas.innerHTML = cfg.areas.map(areaChip).join("");
  }

  function renderReviewCard(r) {
    var stars = "\u2605".repeat(r.stars);
    var service = r.service
      ? '<p class="ogt-review-service">' + esc(r.service) + "</p>"
      : "";
    return (
      '<article class="ogt-review-card"><div class="ogt-review-stars" aria-label="' +
      r.stars +
      ' out of 5 stars">' +
      stars +
      "</div>" +
      service +
      '<p class="ogt-review-text">' +
      esc(r.text) +
      '</p><p class="ogt-review-meta"><strong>' +
      esc(r.name) +
      "</strong> · " +
      esc(r.area) +
      " · " +
      esc(r.date) +
      "</p></article>"
    );
  }

  var reviewsEl = document.getElementById("ogt-reviews-grid");
  if (reviewsEl && cfg.reviews) {
    var limit = reviewsEl.getAttribute("data-limit");
    var list = cfg.reviews;
    if (limit) list = list.slice(0, parseInt(limit, 10) || list.length);
    reviewsEl.innerHTML = list.map(renderReviewCard).join("");
  }

  var reviewsSummary = document.getElementById("ogt-reviews-summary");
  if (reviewsSummary && cfg.reviews && cfg.reviews.length) {
    reviewsSummary.innerHTML =
      '<p class="ogt-reviews-score"><span class="ogt-reviews-score-num">5.0</span><span class="ogt-reviews-score-stars" aria-hidden="true">\u2605\u2605\u2605\u2605\u2605</span></p><p class="ogt-reviews-score-meta">Based on ' +
      cfg.reviews.length +
      " customer reviews across Ottawa</p>";
  }

  var badgesEl = document.getElementById("ogt-trust-badges");
  if (badgesEl && cfg.trustBadges) {
    badgesEl.innerHTML = cfg.trustBadges
      .map(function (b) {
        return (
          '<div class="ogt-badge"><strong>' +
          esc(b.title) +
          "</strong><span>" +
          esc(b.text) +
          "</span></div>"
        );
      })
      .join("");
  }

  var header = document.querySelector(".ogt-header");
  if (header) {
    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function hasQuoteEmailAction(container) {
    return !!container.querySelector('a[href^="mailto:"]');
  }

  function appendQuoteEmail(container, className) {
    if (!container || hasQuoteEmailAction(container)) return;
    container.insertAdjacentHTML("beforeend", quoteEmailButton(className));
  }

  document.querySelectorAll(".ogt-contact-quick").forEach(function (el) {
    if (hasQuoteEmailAction(el)) return;
    var contactQuote = el.querySelector('a[href^="/contact"]');
    if (contactQuote && /quote|contact/i.test(contactQuote.textContent)) {
      contactQuote.href = quoteMailtoHref();
      contactQuote.textContent = "Free quote by email";
      return;
    }
    appendQuoteEmail(el);
  });

  document.querySelectorAll(".ogt-hero-actions").forEach(function (el) {
    var quoteLink = el.querySelector('a[href="/contact"]');
    if (quoteLink && !hasQuoteEmailAction(el)) {
      quoteLink.href = quoteMailtoHref();
      quoteLink.textContent = "Free quote by email";
    } else {
      appendQuoteEmail(el);
    }
  });

  document.querySelectorAll(".ogt-cta-band").forEach(function (band) {
    var actions = band.querySelector(".ogt-contact-quick");
    if (actions) {
      appendQuoteEmail(actions, "ogt-btn ogt-btn-secondary ogt-btn-on-dark");
      return;
    }
    if (band.querySelector('a[href^="tel:"]') && !hasQuoteEmailAction(band)) {
      var wrap = document.createElement("div");
      wrap.className = "ogt-contact-quick ogt-cta-band-actions";
      var tel = band.querySelector('a[href^="tel:"]');
      tel.parentNode.insertBefore(wrap, tel);
      wrap.appendChild(tel);
      appendQuoteEmail(wrap, "ogt-btn ogt-btn-secondary ogt-btn-on-dark");
    }
  });

  var effects = document.createElement("script");
  effects.src = "/js/effects.js";
  effects.defer = true;
  document.body.appendChild(effects);
})();




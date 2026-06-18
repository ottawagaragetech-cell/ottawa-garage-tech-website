(function () {
  var cfg = window.OGT;
  if (!cfg) return;

  document.documentElement.classList.add("ogt-premium");

  /* Load early so a later layout error cannot block these scripts */
  (function loadSiteScripts() {
    ["effects.js", "back-to-top.js"].forEach(function (file) {
      var s = document.createElement("script");
      s.src = "/js/" + file;
      s.defer = true;
      document.body.appendChild(s);
    });
  })();

  var page = document.documentElement.getAttribute("data-ogt-page") || "";

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  function quoteButton(className, label, href) {
    return (
      '<a class="' +
      (className || "ogt-btn ogt-btn-secondary") +
      '" href="' +
      (href || "/contact") +
      '">' +
      esc(label || "Free quote") +
      "</a>"
    );
  }

  function quoteEmailButton(className, label) {
    return quoteButton(className, label || "Free quote by email", "/contact");
  }

  function isValidSocialUrl(url, host) {
    return url && url.indexOf(host) !== -1 && url.indexOf("REPLACE") === -1;
  }

  function socialFooterItems() {
    var links = [];
    if (isValidSocialUrl(cfg.instagram, "instagram.com")) {
      links.push(
        '<a href="' +
          esc(cfg.instagram) +
          '" target="_blank" rel="noopener noreferrer">Instagram</a>'
      );
    }
    if (isValidSocialUrl(cfg.facebook, "facebook.com")) {
      links.push(
        '<a href="' +
          esc(cfg.facebook) +
          '" target="_blank" rel="noopener noreferrer">Facebook</a>'
      );
    }
    if (!links.length) return "";
    return '<li><span>Social</span>' + links.join(" · ") + "</li>";
  }

  function navLink(item) {
    var current = page === item.id ? ' aria-current="page"' : "";
    return '<a href="' + item.href + '"' + current + ">" + esc(item.label) + "</a>";
  }

  function footerLinks(items) {
    return (
      '<ul class="ogt-footer-links">' +
      items
        .map(function (item) {
          var attrs = item.external
            ? ' target="_blank" rel="noopener noreferrer"'
            : "";
          return (
            '<li><a href="' +
            esc(item.href) +
            '"' +
            attrs +
            ">" +
            esc(item.label) +
            "</a></li>"
          );
        })
        .join("") +
      "</ul>"
    );
  }

  function buildFooter() {
    var serviceItems = [{ label: "All services", href: "/services" }].concat(
      (cfg.services || []).map(function (s) {
        return { label: s.title, href: "/services/" + s.slug };
      })
    );

    var areaItems = (cfg.areas || []).slice(0, 8).map(function (a) {
      return { label: a.name, href: "/areas/" + a.slug };
    });
    areaItems.push({ label: "All service areas", href: "/areas" });

    var companyItems = [
      { label: "About", href: "/about" },
      { label: "Service areas", href: "/areas" },
      { label: "FAQ", href: "/faq" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Sitemap", href: "/sitemap.xml" }
    ];

    return (
      '<footer class="ogt-footer">' +
      '<div class="ogt-footer-inner">' +
      '<div class="ogt-footer-brand">' +
      '<a class="ogt-footer-logo" href="' +
      esc(cfg.domain) +
      '/">' +
      '<img src="' + esc(cfg.logo || "/assets/logo.svg") + '" width="40" height="40" alt="">' +
      "<span>" +
      esc(cfg.name) +
      "</span></a>" +
      '<p class="ogt-footer-desc">Garage door repair, installation, and openers for Ottawa and nearby communities.</p>' +
      '<a class="ogt-btn ogt-btn-call ogt-footer-call" href="tel:' +
      cfg.phoneTel +
      '">Call ' +
      esc(cfg.phone) +
      "</a>" +
      '<p class="ogt-footer-meta"><strong>Hours</strong> ' +
      esc(cfg.hours) +
      "</p>" +
      '<p class="ogt-footer-meta"><strong>Service area</strong> ' +
      esc(cfg.serviceArea) +
      "</p></div>" +
      '<div class="ogt-footer-col"><h3>Services</h3>' +
      footerLinks(serviceItems) +
      "</div>" +
      '<div class="ogt-footer-col"><h3>Areas we serve</h3>' +
      footerLinks(areaItems) +
      "</div>" +
      '<div class="ogt-footer-col"><h3>Company</h3>' +
      footerLinks(companyItems) +
      "</div>" +
      '<div class="ogt-footer-col ogt-footer-col--contact"><h3>Get in touch</h3>' +
      '<ul class="ogt-footer-contact">' +
      "<li><span>Phone</span><a href=\"tel:" +
      cfg.phoneTel +
      '">' +
      esc(cfg.phone) +
      "</a></li>" +
      "<li><span>Email</span><a href=\"mailto:" +
      esc(cfg.email) +
      '">' +
      esc(cfg.email) +
      "</a></li>" +
      '<li><span>Web</span><a href="' +
      esc(cfg.domain) +
      '/">' +
      esc(cfg.domain.replace(/^https?:\/\//, "")) +
      "</a></li>" +
      socialFooterItems() +
      "</ul>" +
      quoteButton("ogt-btn ogt-btn-secondary ogt-footer-quote", "Free quote", "/contact") +
      "</div></div>" +
      '<div class="ogt-footer-bar">' +
      '<p class="ogt-footer-copy">&copy; <span id="ogt-year"></span> ' +
      esc(cfg.name) +
      ". All rights reserved.</p>" +
      '<p class="ogt-footer-serving">Proudly serving Ottawa, Kanata, Barrhaven, Orleans, and surrounding communities.</p>' +
      "</div></footer>"
    );
  }

  function serviceLinks() {
    return cfg.services
      .map(function (s) {
        return '<a href="/services/' + s.slug + '">' + esc(s.title) + "</a>";
      })
      .join("");
  }

  function isAreasSection() {
    if (page === "areas") return true;
    return /\/areas\/[^/]+/.test(window.location.pathname);
  }

  function areaRegionOrder() {
    return ["west", "south", "east", "central", "outer"];
  }

  function areaRegionLabel(id) {
    if (cfg.areaRegions && cfg.areaRegions[id]) return cfg.areaRegions[id];
    return id;
  }

  function buildAreasDropdown() {
    var cols = "";
    areaRegionOrder().forEach(function (regionId) {
      var items = (cfg.areas || []).filter(function (a) {
        return (a.region || "central") === regionId;
      });
      if (!items.length) return;
      cols +=
        '<div class="ogt-nav-dropdown-col"><p class="ogt-nav-dropdown-group">' +
        esc(areaRegionLabel(regionId)) +
        "</p>" +
        items
          .map(function (a) {
            return (
              '<a href="/areas/' +
              esc(a.slug) +
              '" role="menuitem">' +
              esc(a.name) +
              "</a>"
            );
          })
          .join("") +
        "</div>";
    });
    return (
      '<div class="ogt-nav-dropdown ogt-nav-dropdown--areas" role="menu">' +
      '<a href="/areas" role="menuitem" class="ogt-nav-dropdown-all">All service areas</a>' +
      '<div class="ogt-nav-dropdown-columns">' +
      cols +
      "</div></div>"
    );
  }

  function mobileAreaLinks() {
    if (!cfg.areas) return "";
    var html = '<a href="/areas">All service areas</a>';
    areaRegionOrder().forEach(function (regionId) {
      var items = cfg.areas.filter(function (a) {
        return (a.region || "central") === regionId;
      });
      if (!items.length) return;
      html +=
        '<p class="ogt-nav-mobile-label ogt-nav-mobile-label--sub">' +
        esc(areaRegionLabel(regionId)) +
        "</p>";
      items.forEach(function (a) {
        html += '<a href="/areas/' + esc(a.slug) + '">' + esc(a.name) + "</a>";
      });
    });
    return html;
  }

  function renderAreasGrouped() {
    return areaRegionOrder()
      .map(function (regionId) {
        var items = cfg.areas.filter(function (a) {
          return (a.region || "central") === regionId;
        });
        if (!items.length) return "";
        return (
          '<div class="ogt-areas-region"><h3 class="ogt-areas-region-title">' +
          esc(areaRegionLabel(regionId)) +
          '</h3><div class="ogt-areas-grid">' +
          items.map(areaChip).join("") +
          "</div></div>"
        );
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
      if (item.id === "areas") {
        var areasCurrent = isAreasSection() ? ' aria-current="page"' : "";
        html +=
          '<div class="ogt-nav-dropdown-wrap ogt-nav-dropdown-wrap--areas">' +
          '<button type="button" class="ogt-nav-dropdown-btn"' +
          areasCurrent +
          ' aria-expanded="false" aria-haspopup="true">Areas</button>' +
          buildAreasDropdown() +
          "</div>";
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
    '<img src="' + esc(cfg.logo || "/assets/logo.svg") + '" width="44" height="44" alt="' +
    esc(cfg.name) +
    ' logo">' +
    '<span class="ogt-logo-text">' + esc(cfg.name) + "</span></a>" +
    '<nav class="ogt-nav-desktop" aria-label="Main">' +
    desktopNav() +
    "</nav>" +
    '<div class="ogt-header-ctas">' +
    '<a class="ogt-btn ogt-btn-call" href="tel:' +
    cfg.phoneTel +
    '" aria-label="Call ' +
    esc(cfg.phone) +
    '">Call</a>' +
    quoteButton("ogt-btn ogt-btn-secondary ogt-header-quote", "Free quote", "/contact") +
    "</div>" +
    '<button class="ogt-menu-btn" type="button" aria-expanded="false" aria-controls="ogt-nav-mobile" aria-label="Open menu">' +
    "<span></span><span></span><span></span></button></div>" +
    '<nav id="ogt-nav-mobile" class="ogt-nav-mobile" aria-label="Mobile">' +
    cfg.nav
      .filter(function (item) {
        return item.id !== "areas";
      })
      .map(navLink)
      .join("") +
    '<p class="ogt-nav-mobile-label">Services</p>' +
    serviceLinks() +
    '<p class="ogt-nav-mobile-label">Service areas</p>' +
    mobileAreaLinks() +
    '<a class="ogt-btn ogt-btn-call" href="tel:' +
    cfg.phoneTel +
    '">Call now</a>' +
    quoteButton("ogt-btn ogt-btn-secondary ogt-nav-quote", "Free quote", "/contact") +
    "</nav></header>";


  var headerEl = document.getElementById("ogt-site-header");
  var footerEl = document.getElementById("ogt-site-footer");
  if (headerEl) headerEl.innerHTML = headerHtml;
  if (footerEl) footerEl.innerHTML = buildFooter();

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

  document.querySelectorAll(".ogt-nav-dropdown-wrap").forEach(function (wrap) {
    var btn = wrap.querySelector(".ogt-nav-dropdown-btn");
    if (!btn) return;

    function setOpen(open) {
      btn.setAttribute("aria-expanded", String(open));
      wrap.classList.toggle("is-open", open);
    }

    btn.addEventListener("click", function () {
      setOpen(btn.getAttribute("aria-expanded") !== "true");
    });

    wrap.addEventListener("mouseenter", function () {
      setOpen(true);
    });

    wrap.addEventListener("mouseleave", function () {
      setOpen(false);
    });

    wrap.addEventListener("focusin", function () {
      setOpen(true);
    });

    wrap.addEventListener("focusout", function (e) {
      if (!wrap.contains(e.relatedTarget)) setOpen(false);
    });
  });

  var faqList = document.getElementById("ogt-faq-list");
  if (faqList && cfg.faqs && page !== "faq") {
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
    areasGrid.innerHTML = areasGrid.classList.contains("ogt-areas-grouped")
      ? renderAreasGrouped()
      : cfg.areas.map(areaChip).join("");
  }

  var homeAreas = document.getElementById("ogt-home-areas");
  if (homeAreas && cfg.areas) {
    homeAreas.innerHTML = homeAreas.classList.contains("ogt-areas-grouped")
      ? renderAreasGrouped()
      : cfg.areas.map(areaChip).join("");
  }

  var featuredAreas = document.getElementById("ogt-home-areas-featured");
  if (featuredAreas && cfg.areas) {
    var featuredSlugs = ["ottawa", "kanata", "barrhaven", "stittsville", "nepean", "orleans"];
    featuredAreas.innerHTML = featuredSlugs
      .map(function (slug) {
        var area = cfg.areas.find(function (a) {
          return a.slug === slug;
        });
        if (!area) return "";
        return (
          '<a class="ogt-coverage-featured-card" href="/areas/' +
          esc(area.slug) +
          '" data-area="' +
          esc(area.slug) +
          '">' +
          esc(area.name) +
          "</a>"
        );
      })
      .join("");
  }
  (function injectHreflang() {
    var canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical || !canonical.href) return;
    var alt = document.createElement("link");
    alt.rel = "alternate";
    alt.hreflang = "en-CA";
    alt.href = canonical.href;
    document.head.appendChild(alt);
  })();

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

  document.querySelectorAll("#ogt-signature-offers").forEach(function (el) {
    if (!cfg.signatureOffers || !cfg.signatureOffers.length) return;
    el.innerHTML = cfg.signatureOffers
      .map(function (o) {
        return (
          '<article class="ogt-signature-card">' +
          "<h3><a href=\"" +
          esc(o.href) +
          "\">" +
          esc(o.title) +
          "</a></h3><p>" +
          esc(o.short) +
          "</p>" +
          '<a class="ogt-link-arrow" href="' +
          esc(o.href) +
          '">View service</a></article>'
        );
      })
      .join("");
  });

  var header = document.querySelector(".ogt-header");
  var headerWrap = document.getElementById("ogt-site-header");
  if (header) {
    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  if (headerWrap) {
    var headerInner = document.querySelector(".ogt-header-inner");
    function syncHeaderOffset() {
      var barH = headerInner ? headerInner.offsetHeight : 72;
      document.documentElement.style.setProperty("--ogt-header-bar-height", barH + "px");
      document.documentElement.style.setProperty(
        "--ogt-header-height",
        headerWrap.offsetHeight + "px"
      );
    }
    syncHeaderOffset();
    window.addEventListener("resize", syncHeaderOffset, { passive: true });
    if (window.ResizeObserver) {
      new ResizeObserver(syncHeaderOffset).observe(headerWrap);
    }
    var mobileNav = document.getElementById("ogt-nav-mobile");
    var menuBtn = document.querySelector(".ogt-menu-btn");
    if (mobileNav && menuBtn) {
      mobileNav.addEventListener("transitionend", syncHeaderOffset);
      menuBtn.addEventListener("click", function () {
        setTimeout(syncHeaderOffset, 0);
      });
    }
  }

  function hasQuoteFormLink(container) {
    return !!container.querySelector('a[href="/contact"], a[href^="/contact?"], a[href="#ogt-quote-form"]');
  }

  function appendQuoteEmail(container, className) {
    if (!container || hasQuoteFormLink(container)) return;
    container.insertAdjacentHTML("beforeend", quoteEmailButton(className));
  }

  function fixQuoteMailtoLinks(container) {
    if (!container) return;
    container.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
      if (/quote|email/i.test(link.textContent)) {
        link.href = container.closest("[data-ogt-page='contact']") ? "#ogt-quote-form" : "/contact";
      }
    });
  }

  document.querySelectorAll(".ogt-contact-quick").forEach(function (el) {
    fixQuoteMailtoLinks(el);
    appendQuoteEmail(el);
  });

  document.querySelectorAll(".ogt-hero-actions").forEach(function (el) {
    fixQuoteMailtoLinks(el);
    appendQuoteEmail(el);
  });

  document.querySelectorAll(".ogt-cta-band").forEach(function (band) {
    var actions = band.querySelector(".ogt-contact-quick");
    if (actions) {
      appendQuoteEmail(actions, "ogt-btn ogt-btn-secondary ogt-btn-on-dark");
      return;
    }
    if (band.querySelector('a[href^="tel:"]') && !hasQuoteFormLink(band)) {
      var wrap = document.createElement("div");
      wrap.className = "ogt-contact-quick ogt-cta-band-actions";
      var tel = band.querySelector('a[href^="tel:"]');
      tel.parentNode.insertBefore(wrap, tel);
      wrap.appendChild(tel);
      appendQuoteEmail(wrap, "ogt-btn ogt-btn-secondary ogt-btn-on-dark");
    }
  });

  (function injectStickyCta() {
    if (document.getElementById("ogt-sticky-cta")) return;
    var bar = document.createElement("div");
    bar.id = "ogt-sticky-cta";
    bar.className = "ogt-sticky-cta";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Quick contact");
    bar.innerHTML =
      '<a class="ogt-btn ogt-btn-call ogt-sticky-cta-call" href="tel:' +
      cfg.phoneTel +
      '">Call now</a>' +
      quoteButton("ogt-btn ogt-btn-secondary ogt-sticky-cta-quote", "Free quote", "/contact");
    document.body.appendChild(bar);
    document.documentElement.classList.add("ogt-sticky-cta-on");
  })();

})();




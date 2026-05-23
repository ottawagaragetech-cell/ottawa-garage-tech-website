(function () {
  var cfg = window.OGT;
  if (!cfg) return;

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  function imgSrc(keyOrUrl) {
    if (!keyOrUrl) return "";
    if (keyOrUrl.indexOf("http") === 0 || keyOrUrl.indexOf("/") === 0) return keyOrUrl;
    return (cfg.images && cfg.images[keyOrUrl]) || "";
  }

  function serviceCard(s, textOnly) {
    if (textOnly) {
      return (
        '<a class="ogt-service-card ogt-service-card--text ogt-service-card--link" href="/services/' +
        esc(s.slug) +
        '"><h3>' +
        esc(s.title) +
        "</h3><p>" +
        esc(s.short) +
        '</p><p class="ogt-service-card-meta"><span class="ogt-service-card-price">' +
        esc(s.price) +
        '</span><span class="ogt-service-card-time">' +
        esc(s.time) +
        '</span></p><span class="ogt-service-card-link">Learn more →</span></a>'
      );
    }
    var src = imgSrc(s.imageKey);
    var img = src
      ? '<span class="ogt-service-card-img-wrap"><img src="' +
        esc(src) +
        '" alt="' +
        esc(s.title) +
        ' in Ottawa" width="400" height="260" loading="lazy"><span class="ogt-service-card-img-badge">' +
        esc(s.title) +
        "</span></span>"
      : "";
    return (
      '<a class="ogt-service-card ogt-service-card--visual ogt-service-card--link" href="/services/' +
      esc(s.slug) +
      '">' +
      img +
      '<span class="ogt-service-card-body"><h3>' +
      esc(s.title) +
      "</h3><p>" +
      esc(s.short) +
      '</p><p class="ogt-service-card-meta"><span class="ogt-service-card-price">' +
      esc(s.price) +
      '</span><span class="ogt-service-card-time">' +
      esc(s.time) +
      "</span></p></span></a>"
    );
  }

  function showcaseTile(item, index) {
    var src = imgSrc(item.srcKey || item.src);
    if (!src) return "";
    var cls = "ogt-showcase-tile";
    if (item.large) cls += " ogt-showcase-tile--large";
    if (index === 2) cls += " ogt-showcase-tile--tall";
    return (
      '<figure class="' +
      cls +
      '"><img src="' +
      esc(src) +
      '" alt="' +
      esc(item.alt || item.cap) +
      '" width="600" height="450" loading="lazy"><figcaption>' +
      esc(item.cap || "") +
      "</figcaption></figure>"
    );
  }

  function galleryTile(item) {
    var src = imgSrc(item.srcKey || item.src);
    if (!src) return "";
    return (
      '<a class="ogt-gallery-tile" href="/gallery"><img src="' +
      esc(src) +
      '" alt="' +
      esc(item.alt || item.cap) +
      '" width="400" height="300" loading="lazy"><span class="ogt-gallery-tile-cap">' +
      esc(item.cap || "") +
      "</span></a>"
    );
  }

  function hiResUrl(url) {
    if (!url) return url;
    return url.replace(/rs=w:\d+/i, "rs=w:1200");
  }

  function galleryPageItem(item, index) {
    var src = imgSrc(item.srcKey || item.src);
    if (!src) return "";
    var cat = item.cat || "all";
    var wide = item.wide ? " ogt-gallery-item--wide" : "";
    return (
      '<button type="button" class="ogt-gallery-item' +
      wide +
      '" data-gallery-index="' +
      index +
      '" data-cat="' +
      esc(cat) +
      '"><span class="ogt-gallery-item-img-wrap"><img src="' +
      esc(src) +
      '" data-full="' +
      esc(hiResUrl(src)) +
      '" alt="' +
      esc(item.alt || item.cap) +
      '" width="600" height="450" loading="lazy"></span><span class="ogt-gallery-item-cap">' +
      esc(item.cap || "") +
      "</span></button>"
    );
  }

  function renderGalleryFilters(el) {
    if (!el || !cfg.galleryFilters) return;
    el.innerHTML = cfg.galleryFilters
      .map(function (f, i) {
        var active = i === 0 ? ' aria-selected="true"' : "";
        var pressed = i === 0 ? ' aria-pressed="true"' : ' aria-pressed="false"';
        return (
          '<button type="button" class="ogt-gallery-filter' +
          (i === 0 ? " is-active" : "") +
          '" role="tab" data-filter="' +
          esc(f.id) +
          '"' +
          active +
          pressed +
          ">" +
          esc(f.label) +
          "</button>"
        );
      })
      .join("");
  }

  function renderGalleryPage(el) {
    if (!el || !cfg.gallery) return;
    el.innerHTML = cfg.gallery.map(galleryPageItem).join("");
  }

  window.OGTRender = {
    esc: esc,
    imgSrc: imgSrc,
    serviceCard: serviceCard,
    renderServiceGrid: function (el) {
      if (!el || !cfg.services) return;
      var textOnly = el.getAttribute("data-card-style") === "text";
      el.innerHTML = cfg.services.map(function (s) {
        return serviceCard(s, textOnly);
      }).join("");
    },
    renderShowcase: function (el) {
      if (!el || !cfg.showcase) return;
      el.innerHTML = cfg.showcase.map(showcaseTile).join("");
    },
    renderGalleryPreview: function (el, limit) {
      if (!el) return;
      var items = cfg.homeGallery || (cfg.showcase && cfg.showcase.slice(0, limit || 6));
      if (!items || !items.length) return;
      el.innerHTML = items.map(galleryTile).join("");
    },
    renderHomeGallery: function (el) {
      this.renderGalleryPreview(el, 6);
    },
    renderGalleryPage: renderGalleryPage,
    renderGalleryFilters: renderGalleryFilters,
    hiResUrl: hiResUrl,
    initHeroCollage: function () {
      var root = document.getElementById("ogt-hero-collage");
      if (!root || !cfg.images) return;
      var imgs = [
        { key: "hero", cls: "ogt-hero-collage-main" },
        { key: "spring", cls: "ogt-hero-collage-accent" },
        { key: "opener", cls: "ogt-hero-collage-small" },
      ];
      var alts = {
        hero: "Insulated garage door installation Ottawa",
        spring: "Garage door spring replacement",
        opener: "Garage door opener installation",
      };
      root.innerHTML = imgs
        .map(function (item) {
          var src = imgSrc(item.key);
          return (
            '<img class="' +
            item.cls +
            '" src="' +
            esc(src) +
            '" alt="' +
            esc(alts[item.key] || "Garage door service Ottawa") +
            '" width="600" height="450" loading="' +
            (item.cls.indexOf("main") >= 0 ? "eager" : "lazy") +
            '">'
          );
        })
        .join("");
    },
    applyVisualBackgrounds: function () {
      var cta = document.querySelector(".ogt-cta-band--photo");
      if (cta && cfg.images && cfg.images.emergency) {
        cta.style.setProperty("--ogt-cta-bg", "url(" + cfg.images.emergency + ")");
      }
      var split = document.querySelector(".ogt-visual-split-img");
      if (split && cfg.images && cfg.images.install) {
        split.src = cfg.images.install;
        split.alt = "Garage door installation — Ottawa Garage Tech";
      }
      var contact = document.querySelector(".ogt-contact-visual-img");
      if (contact && cfg.images && cfg.images.modern) {
        contact.src = cfg.images.modern;
        contact.alt = "Garage door service in Ottawa";
      }
    },
  };

  var homeServices = document.getElementById("ogt-home-services");
  if (homeServices) OGTRender.renderServiceGrid(homeServices);

  var servicesList = document.getElementById("ogt-services-list");
  if (servicesList) OGTRender.renderServiceGrid(servicesList);

  var showcase = document.getElementById("ogt-photo-showcase");
  if (showcase) OGTRender.renderShowcase(showcase);

  var galleryPrev = document.getElementById("ogt-gallery-preview");
  if (galleryPrev) OGTRender.renderGalleryPreview(galleryPrev, 6);

  var homeGallery = document.getElementById("ogt-home-gallery");
  if (homeGallery) OGTRender.renderHomeGallery(homeGallery);

  var galleryGrid = document.getElementById("ogt-gallery-grid");
  if (galleryGrid) OGTRender.renderGalleryPage(galleryGrid);

  var galleryFilters = document.getElementById("ogt-gallery-filters");
  if (galleryFilters) OGTRender.renderGalleryFilters(galleryFilters);

  OGTRender.initHeroCollage();
  OGTRender.applyVisualBackgrounds();
})();

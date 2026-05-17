(function () {
  if (!document.documentElement.classList.contains("ogt-premium")) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function observeReveal(elements) {
    if (!elements.length) return;

    if (reduced) {
      elements.forEach(function (el) {
        el.classList.add("is-inview");
      });
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (el) {
        el.classList.add("is-inview");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-inview");
          observer.unobserve(entry.target);
        });
      },
      { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.1 }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  function mark(el, opts) {
    if (!el || el.classList.contains("ogt-reveal")) return el;
    el.classList.add("ogt-reveal");
    if (opts && opts.fade) el.classList.add("ogt-reveal--fade");
    if (opts && opts.left) el.classList.add("ogt-reveal--left");
    if (opts && opts.right) el.classList.add("ogt-reveal--right");
    if (opts && opts.delay) el.setAttribute("data-delay", String(opts.delay));
    return el;
  }

  function run() {
    var targets = [];

    document.querySelectorAll(".ogt-section-header").forEach(function (el) {
      targets.push(mark(el, { fade: true }));
    });

    document
      .querySelectorAll(".ogt-visual-split-text, .ogt-service-hero-text, .ogt-page-hero-text")
      .forEach(function (el) {
        targets.push(mark(el, { left: true }));
      });

    document
      .querySelectorAll(".ogt-visual-split-media, .ogt-service-hero-img, .ogt-page-hero-media")
      .forEach(function (el) {
        targets.push(mark(el, { right: true }));
      });

    document.querySelectorAll(".ogt-reviews-summary-wrap, .ogt-contact-visual-side, .ogt-form-card, .ogt-areas-map-panel, .ogt-areas-map-sidebar").forEach(function (el) {
      targets.push(mark(el, { fade: true }));
    });

    var grids = ".ogt-services-grid, .ogt-reviews-grid, .ogt-showcase-grid, .ogt-gallery-preview, .ogt-gallery-grid--page, .ogt-blog-grid, .ogt-badges-grid";
    document.querySelectorAll(grids).forEach(function (grid) {
      Array.from(grid.children).forEach(function (child, i) {
        targets.push(mark(child, { delay: (i % 6) + 1 }));
      });
    });

    observeReveal(targets.filter(Boolean));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();

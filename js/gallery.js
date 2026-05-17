(function () {
  var grid = document.getElementById("ogt-gallery-grid");
  var filtersEl = document.getElementById("ogt-gallery-filters");
  var emptyEl = document.getElementById("ogt-gallery-empty");
  var lightbox = document.getElementById("ogt-lightbox");
  if (!grid || !window.OGT || !OGT.gallery) return;

  var items = Array.from(grid.querySelectorAll(".ogt-gallery-item"));
  var visibleItems = items.slice();
  var currentIndex = 0;
  var activeFilter = "all";

  function setVisible(filter) {
    activeFilter = filter;
    visibleItems = [];
    items.forEach(function (el) {
      var cat = el.getAttribute("data-cat") || "";
      var show = filter === "all" || cat === filter;
      el.classList.toggle("is-hidden", !show);
      el.setAttribute("aria-hidden", show ? "false" : "true");
      if (show) visibleItems.push(el);
    });
    if (emptyEl) emptyEl.hidden = visibleItems.length > 0;
  }

  if (filtersEl) {
    filtersEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".ogt-gallery-filter");
      if (!btn) return;
      var filter = btn.getAttribute("data-filter") || "all";
      filtersEl.querySelectorAll(".ogt-gallery-filter").forEach(function (b) {
        var on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      setVisible(filter);
    });
  }

  function openLightbox(index) {
    if (!lightbox || !visibleItems.length) return;
    currentIndex = index;
    var el = visibleItems[currentIndex];
    var img = el.querySelector("img");
    var lbImg = document.getElementById("ogt-lightbox-img");
    var cap = document.getElementById("ogt-lightbox-caption");
    if (!img || !lbImg) return;

    lbImg.src = img.getAttribute("data-full") || img.src;
    lbImg.alt = img.alt;
    var capEl = el.querySelector(".ogt-gallery-item-cap");
    if (cap) cap.textContent = (capEl && capEl.textContent) || img.alt;

    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("ogt-lightbox-open");
    var closeBtn = document.getElementById("ogt-lightbox-close");
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("ogt-lightbox-open");
    var lbImg = document.getElementById("ogt-lightbox-img");
    if (lbImg) lbImg.src = "";
  }

  function stepLightbox(dir) {
    if (!visibleItems.length) return;
    currentIndex = (currentIndex + dir + visibleItems.length) % visibleItems.length;
    openLightbox(currentIndex);
  }

  grid.addEventListener("click", function (e) {
    var btn = e.target.closest(".ogt-gallery-item");
    if (!btn || btn.classList.contains("is-hidden")) return;
    var idx = visibleItems.indexOf(btn);
    if (idx >= 0) openLightbox(idx);
  });

  var closeBtn = document.getElementById("ogt-lightbox-close");
  var prevBtn = document.getElementById("ogt-lightbox-prev");
  var nextBtn = document.getElementById("ogt-lightbox-next");
  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", function () { stepLightbox(-1); });
  if (nextBtn) nextBtn.addEventListener("click", function () { stepLightbox(1); });

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (!lightbox || lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });

  setVisible("all");
})();

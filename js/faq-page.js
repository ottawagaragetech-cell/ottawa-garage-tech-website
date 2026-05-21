/**
 * Interactive FAQ page — search, categories, expand/collapse
 */
(function () {
  var cfg = window.OGT;
  if (!cfg || !cfg.faqs || document.documentElement.getAttribute("data-ogt-page") !== "faq") {
    return;
  }

  var listEl = document.getElementById("ogt-faq-list");
  var toolbarEl = document.getElementById("ogt-faq-toolbar");
  var metaEl = document.getElementById("ogt-faq-meta");
  var emptyEl = document.getElementById("ogt-faq-empty");
  if (!listEl || !toolbarEl) return;

  var categories = cfg.faqCategories || [
    { id: "all", label: "All" },
    { id: "pricing", label: "Pricing" },
    { id: "service", label: "Service" },
    { id: "springs", label: "Springs" },
    { id: "openers", label: "Openers" },
    { id: "maintenance", label: "Maintenance" },
    { id: "winter", label: "Winter" },
    { id: "installation", label: "New doors" },
    { id: "safety", label: "Safety" }
  ];

  var activeCategory = "all";
  var searchQuery = "";
  var accordionMode = true;

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  function categoryLabel(id) {
    var cat = categories.find(function (c) {
      return c.id === id;
    });
    return cat ? cat.label : id;
  }

  function matchesFilter(faq) {
    if (activeCategory !== "all" && faq.category !== activeCategory) return false;
    if (!searchQuery) return true;
    var hay = (faq.q + " " + faq.a + " " + (faq.category || "")).toLowerCase();
    return hay.indexOf(searchQuery) !== -1;
  }

  function renderItem(faq, index) {
    var cat = faq.category || "service";
    return (
      '<details class="ogt-faq-item" data-category="' +
      esc(cat) +
      '" data-index="' +
      index +
      '">' +
      '<summary class="ogt-faq-summary">' +
      '<span class="ogt-faq-summary-text">' +
      esc(faq.q) +
      "</span>" +
      '<span class="ogt-faq-chevron" aria-hidden="true"></span>' +
      "</summary>" +
      '<div class="ogt-faq-answer">' +
      '<p class="ogt-faq-answer-text">' +
      esc(faq.a) +
      "</p>" +
      '<span class="ogt-faq-tag">' +
      esc(categoryLabel(cat)) +
      "</span>" +
      "</div></details>"
    );
  }

  function renderList() {
    var visible = cfg.faqs.filter(matchesFilter);
    listEl.innerHTML = visible.map(function (f) {
      return renderItem(f, cfg.faqs.indexOf(f));
    }).join("");

    var total = cfg.faqs.length;
    var shown = visible.length;
    if (metaEl) {
      if (shown === total) {
        metaEl.textContent = total + " questions — click any to expand";
      } else {
        metaEl.textContent = "Showing " + shown + " of " + total + " questions";
      }
    }
    if (emptyEl) emptyEl.hidden = shown > 0;
    listEl.hidden = shown === 0;

    bindAccordion();
  }

  function bindAccordion() {
    if (!accordionMode) return;
    listEl.querySelectorAll(".ogt-faq-item").forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (!item.open) return;
        listEl.querySelectorAll(".ogt-faq-item[open]").forEach(function (other) {
          if (other !== item) other.open = false;
        });
      });
    });
  }

  function setExpandAll(open) {
    listEl.querySelectorAll(".ogt-faq-item").forEach(function (item) {
      if (!item.hidden) item.open = open;
    });
  }

  function buildToolbar() {
    var catsHtml = categories
      .map(function (c) {
        var pressed = c.id === activeCategory ? ' aria-pressed="true"' : ' aria-pressed="false"';
        return (
          '<button type="button" class="ogt-faq-filter' +
          (c.id === activeCategory ? " is-active" : "") +
          '" data-category="' +
          esc(c.id) +
          '"' +
          pressed +
          ">" +
          esc(c.label) +
          "</button>"
        );
      })
      .join("");

    toolbarEl.innerHTML =
      '<div class="ogt-faq-search-wrap">' +
      '<label class="ogt-faq-search-label" for="ogt-faq-search">Search questions</label>' +
      '<input type="search" id="ogt-faq-search" class="ogt-faq-search" placeholder="Search — e.g. spring, opener, cost…" autocomplete="off">' +
      '<button type="button" class="ogt-faq-search-clear" id="ogt-faq-search-clear" hidden aria-label="Clear search">×</button>' +
      "</div>" +
      '<div class="ogt-faq-filters" role="group" aria-label="Filter by topic">' +
      catsHtml +
      "</div>" +
      '<div class="ogt-faq-actions">' +
      '<button type="button" class="ogt-faq-action" id="ogt-faq-expand-all">Expand all</button>' +
      '<button type="button" class="ogt-faq-action" id="ogt-faq-collapse-all">Collapse all</button>' +
      "</div>";

    var searchInput = document.getElementById("ogt-faq-search");
    var clearBtn = document.getElementById("ogt-faq-search-clear");

    searchInput.addEventListener("input", function () {
      searchQuery = searchInput.value.trim().toLowerCase();
      clearBtn.hidden = !searchQuery;
      renderList();
    });

    clearBtn.addEventListener("click", function () {
      searchInput.value = "";
      searchQuery = "";
      clearBtn.hidden = true;
      searchInput.focus();
      renderList();
    });

    toolbarEl.querySelectorAll(".ogt-faq-filter").forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeCategory = btn.getAttribute("data-category") || "all";
        toolbarEl.querySelectorAll(".ogt-faq-filter").forEach(function (b) {
          var on = b === btn;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-pressed", on ? "true" : "false");
        });
        renderList();
      });
    });

    document.getElementById("ogt-faq-expand-all").addEventListener("click", function () {
      accordionMode = false;
      setExpandAll(true);
      accordionMode = true;
    });

    document.getElementById("ogt-faq-collapse-all").addEventListener("click", function () {
      setExpandAll(false);
    });
  }

  buildToolbar();
  renderList();
})();

(function () {
  var mapEl = document.getElementById("ogt-service-map");
  if (!mapEl || !window.OGT || !window.L) return;

  var geo = OGT.areaGeo || {};
  var areas = (OGT.areas || [])
    .map(function (a) {
      var g = geo[a.slug];
      if (!g) return null;
      return { name: a.name, slug: a.slug, lat: g.lat, lng: g.lng };
    })
    .filter(Boolean);

  if (!areas.length) return;

  var listEl =
    document.getElementById("ogt-home-areas") ||
    document.getElementById("ogt-areas-grid");
  var layoutEl = mapEl.closest(".ogt-areas-map-layout");

  var map = L.map(mapEl, {
    scrollWheelZoom: false,
    tap: true,
  });

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19,
  }).addTo(map);

  L.circle([45.38, -75.68], {
    radius: 42000,
    color: "#145c49",
    weight: 1.5,
    opacity: 0.35,
    fillColor: "#145c49",
    fillOpacity: 0.07,
  }).addTo(map);

  var bounds = L.latLngBounds([]);
  var markers = {};
  var activeSlug = null;

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function setActive(slug, pan) {
    if (activeSlug === slug) return;
    activeSlug = slug;

    if (listEl) {
      listEl.querySelectorAll(".ogt-area-chip").forEach(function (chip) {
        chip.classList.toggle("is-active", chip.getAttribute("data-area") === slug);
      });
    }

    Object.keys(markers).forEach(function (key) {
      var el = markers[key].getElement();
      if (el) el.classList.toggle("is-active", key === slug);
    });

    if (pan && markers[slug]) {
      map.panTo(markers[slug].getLatLng(), { animate: true, duration: 0.45 });
      markers[slug].openPopup();
    }
  }

  function clearActive() {
    activeSlug = null;
    if (listEl) {
      listEl.querySelectorAll(".ogt-area-chip.is-active").forEach(function (chip) {
        chip.classList.remove("is-active");
      });
    }
    Object.keys(markers).forEach(function (key) {
      var el = markers[key].getElement();
      if (el) el.classList.remove("is-active");
    });
  }

  areas.forEach(function (area) {
    var latLng = [area.lat, area.lng];
    bounds.extend(latLng);

    var icon = L.divIcon({
      className: "ogt-map-marker-wrap",
      html: '<span class="ogt-map-marker" aria-hidden="true"></span>',
      iconSize: [32, 40],
      iconAnchor: [16, 40],
      popupAnchor: [0, -38],
    });

    var marker = L.marker(latLng, { icon: icon, title: area.name });
    marker.bindPopup(
      '<div class="ogt-map-popup">' +
        "<strong>" +
        esc(area.name) +
        "</strong>" +
        '<p>Garage door repair, springs, openers &amp; installation</p>' +
        '<a class="ogt-map-popup-link" href="/areas/' +
        esc(area.slug) +
        '">View ' +
        esc(area.name) +
        " service &rarr;</a></div>"
    );
    marker.addTo(map);
    markers[area.slug] = marker;

    marker.on("click", function () {
      setActive(area.slug, false);
    });
    marker.on("popupopen", function () {
      setActive(area.slug, false);
    });
  });

  map.fitBounds(bounds.pad(0.12));

  if (listEl) {
    listEl.querySelectorAll("a.ogt-area-chip[data-area]").forEach(function (chip) {
      chip.addEventListener("mouseenter", function () {
        var slug = chip.getAttribute("data-area");
        if (markers[slug]) {
          var el = markers[slug].getElement();
          if (el) el.classList.add("is-hovered");
        }
      });
      chip.addEventListener("mouseleave", function () {
        listEl.querySelectorAll(".ogt-map-marker-wrap.is-hovered").forEach(function (m) {
          m.classList.remove("is-hovered");
        });
      });
      chip.addEventListener("click", function (e) {
        var slug = chip.getAttribute("data-area");
        if (markers[slug]) {
          e.preventDefault();
          setActive(slug, true);
        }
      });
      chip.addEventListener("focus", function () {
        var slug = chip.getAttribute("data-area");
        if (markers[slug]) setActive(slug, true);
      });
    });
  }

  map.on("click", function () {
    clearActive();
    map.closePopup();
  });

  mapEl.addEventListener("click", function () {
    map.scrollWheelZoom.enable();
  });
  mapEl.addEventListener("mouseleave", function () {
    map.scrollWheelZoom.disable();
  });

  if (layoutEl) layoutEl.classList.add("is-map-ready");

  setTimeout(function () {
    map.invalidateSize();
  }, 120);

  window.addEventListener(
    "resize",
    function () {
      map.invalidateSize();
    },
    { passive: true }
  );
})();

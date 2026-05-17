(function () {
  var form = document.getElementById("ogt-home-form");
  if (!form || !window.OGT) return;

  if (window.OGT_setupForm) {
    OGT_setupForm(form, { thanksId: "ogt-home-form-thanks" });
  } else {
    form.setAttribute(
      "action",
      OGT.formAction || "https://formsubmit.co/" + encodeURIComponent(OGT.email)
    );
    form.setAttribute("method", "POST");
  }

  var select = document.getElementById("home-service");
  if (select) {
    OGT.services.forEach(function (s) {
      var opt = document.createElement("option");
      opt.value = s.title;
      opt.textContent = s.title;
      select.appendChild(opt);
    });
  }

  if (new URLSearchParams(window.location.search).get("sent") === "1") {
    var thanks = document.getElementById("ogt-home-form-thanks");
    if (thanks) thanks.classList.add("is-visible");
  }

  var schemaEl = document.getElementById("ogt-home-reviews-schema");
  if (schemaEl && OGT.reviews && OGT.reviews.length) {
    var shown = OGT.reviews.slice(0, 6);
    schemaEl.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Ottawa Garage Tech",
      url: OGT.domain + "/",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: String(OGT.reviews.length),
      },
      review: shown.map(function (r) {
        return {
          "@type": "Review",
          author: { "@type": "Person", name: r.name },
          datePublished: r.date,
          reviewRating: { "@type": "Rating", ratingValue: String(r.stars) },
          reviewBody: r.text,
        };
      }),
    });
  }
})();

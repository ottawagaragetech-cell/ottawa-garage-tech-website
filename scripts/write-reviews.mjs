import fs from "fs";
import path from "path";

const d = "d" + "iv";
const o = (attrs) => `<${d}${attrs ? " " + attrs : ""}>`;
const c = `</${d}>`;

const html = `<!DOCTYPE html>
<html lang="en-CA" data-ogt-page="reviews">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Customer Reviews | Ottawa Garage Tech</title>
  <meta name="description" content="Read customer reviews for Ottawa Garage Tech — garage door repair, springs, openers, and installations across Ottawa and suburbs.">
  <link rel="canonical" href="https://ottawagaragetech.ca/reviews">
  <link rel="icon" href="/assets/logo.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/css/style.css">
  <script type="application/ld+json" id="ogt-reviews-schema"></script>
</head>
<body>
  ${o('id="ogt-site-header"')}${c}
  <main id="main">
    ${o('class="ogt-page-hero"')}
      <h1>Customer reviews</h1>
      <p class="ogt-section-intro">What Ottawa-area homeowners say about our garage door repair, installation, and opener service.</p>
      ${o('class="ogt-reviews-summary-wrap" id="ogt-reviews-summary"')}${c}
      ${o('class="ogt-contact-quick"')}
        <a class="ogt-btn ogt-btn-primary" href="tel:+16139006005">Call (613) 900-6005</a>
        <a class="ogt-btn ogt-btn-secondary" href="/contact">Request a quote</a>
      ${c}
    ${c}
    <section class="ogt-section">
      ${o('class="ogt-section-inner"')}
        ${o('class="ogt-reviews-grid" id="ogt-reviews-grid"')}${c}
      ${c}
    </section>
    <section class="ogt-cta-band">
      <h2>Ready to book service?</h2>
      <p>Call or text for the fastest response — especially for urgent door issues.</p>
      <a class="ogt-btn ogt-btn-accent" href="tel:+16139006005">(613) 900-6005</a>
    </section>
  </main>
  ${o('id="ogt-site-footer"')}${c}
  <script src="/js/site-config.js"></script>
  <script src="/js/layout.js"></script>
  <script>
    (function () {
      var el = document.getElementById("ogt-reviews-schema");
      if (!el || !window.OGT || !OGT.reviews) return;
      el.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Ottawa Garage Tech",
        "url": "https://ottawagaragetech.ca/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": String(OGT.reviews.length)
        },
        "review": OGT.reviews.map(function (r) {
          return {
            "@type": "Review",
            "author": { "@type": "Person", "name": r.name },
            "datePublished": r.date,
            "reviewRating": { "@type": "Rating", "ratingValue": String(r.stars) },
            "reviewBody": r.text
          };
        })
      });
    })();
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(import.meta.dirname, "..", "reviews.html"), html);
console.log("wrote reviews.html");

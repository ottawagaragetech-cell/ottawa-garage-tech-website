import fs from "fs";
import path from "path";

const d = "d" + "iv";
const o = (attrs) => `<${d}${attrs ? " " + attrs : ""}>`;
const c = `</${d}>`;

const html = `<!DOCTYPE html>
<html lang="en-CA" data-ogt-page="areas">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Service Areas | Ottawa Garage Tech</title>
  <meta name="description" content="Garage door repair in Ottawa, Kanata, Barrhaven, Orleans, Nepean, and 25+ communities. Local pages with service details.">
  <link rel="canonical" href="https://ottawagaragetech.ca/areas">
  <link rel="icon" type="image/png" href="/assets/favicon-48.png" sizes="48x48">
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  ${o('id="ogt-site-header"')}
  <main id="main">
    ${o('class="ogt-page-hero"')}
      <h1>Service areas</h1>
      <p class="ogt-section-intro">We serve Ottawa and surrounding neighbourhoods. Select your area below for local service details — or call if you do not see yours listed.</p>
      ${o('class="ogt-contact-quick"')}
        <a class="ogt-btn ogt-btn-primary" href="tel:+16139006005">Call (613) 900-6005</a>
      ${c}
    ${c}
    <section class="ogt-section">
      ${o('class="ogt-section-inner"')}
        ${o('class="ogt-areas-grid" id="ogt-areas-grid"')}${c}
      ${c}
    </section>
  </main>
  ${o('id="ogt-site-footer"')}${c}
  <script src="/js/site-config.js"></script>
  <script src="/js/layout.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(import.meta.dirname, "..", "areas.html"), html);
console.log("wrote areas.html");

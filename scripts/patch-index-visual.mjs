import fs from "fs";
import path from "path";

const d = "d" + "iv";
const p = path.join(import.meta.dirname, "..", "index.html");
let c = fs.readFileSync(p, "utf8");

const heroOld = `    <section class="ogt-hero ogt-hero--with-image">
      <${d} class="ogt-hero-content">
        <p class="ogt-hero-eyebrow">Ottawa &amp; surrounding communities</p>
        <h1>Garage door help, without the runaround</h1>
        <p class="ogt-hero-tagline">Friendly, local technicians for repair, new doors, and openers — on your schedule.</p>
        <${d} class="ogt-hero-actions">
          <a class="ogt-btn ogt-btn-primary" href="tel:+16139006005">Call or text</a>
          <a class="ogt-btn ogt-btn-secondary" href="/contact">Request a quote</a>
        </${d}>
      </${d}>
      <${d} class="ogt-hero-media">
        <img src="/assets/services/install-ottawa-grey.png" width="600" height="450" alt="New garage door installed in Ottawa — Ottawa Garage Tech" loading="eager">
      </${d}>
    </section>`;

const heroNew = `    <section class="ogt-hero ogt-hero--visual">
      <${d} class="ogt-hero-content">
        <p class="ogt-hero-eyebrow">Ottawa &amp; surrounding communities</p>
        <h1>Garage door help, without the runaround</h1>
        <p class="ogt-hero-tagline">Friendly, local technicians for repair, new doors, and openers — on your schedule.</p>
        <${d} class="ogt-hero-actions">
          <a class="ogt-btn ogt-btn-primary" href="tel:+16139006005">Call or text</a>
          <a class="ogt-btn ogt-btn-secondary" href="/contact">Request a quote</a>
        </${d}>
        <ul class="ogt-hero-stats" aria-label="Highlights">
          <li><strong>7 days</strong><span>9 AM – 9 PM</span></li>
          <li><strong>Same-day</strong><span>when available</span></li>
          <li><strong>5.0★</strong><span><a href="/reviews">12+ reviews</a></span></li>
        </ul>
      </${d}>
      <${d} class="ogt-hero-collage-wrap">
        <${d} class="ogt-hero-collage" id="ogt-hero-collage" aria-hidden="true"></${d}>
        <span class="ogt-hero-collage-badge">Local · Insured · Upfront quotes</span>
      </${d}>
    </section>`;

if (!c.includes("ogt-hero--with-image")) {
  console.log("hero already patched or not found");
} else {
  c = c.replace(heroOld, heroNew);
}

const showcaseBlock = `
    <section class="ogt-section ogt-section--showcase" aria-labelledby="showcase-heading">
      <${d} class="ogt-section-inner">
        <h2 id="showcase-heading">Recent work across Ottawa</h2>
        <p class="ogt-section-intro">Doors, springs, openers, and hardware — photos from real jobs in Kanata, Barrhaven, Orleans, and beyond. <a href="/gallery">View gallery</a></p>
        <${d} class="ogt-showcase-grid" id="ogt-photo-showcase"></${d}>
      </${d}>
    </section>
`;

if (!c.includes("ogt-photo-showcase")) {
  c = c.replace(
    `    <section class="ogt-section ogt-section--alt" aria-labelledby="services-heading">`,
    showcaseBlock + `\n    <section class="ogt-section ogt-section--alt" aria-labelledby="services-heading">`
  );
}

const splitBlock = `
    <section class="ogt-section ogt-visual-split-section">
      <${d} class="ogt-section-inner ogt-visual-split">
        <${d} class="ogt-visual-split-media">
          <img class="ogt-visual-split-img" src="" alt="" width="700" height="525" loading="lazy">
        </${d}>
        <${d} class="ogt-visual-split-text">
          <h2>Built for Ottawa winters</h2>
          <p>From snapped springs after cold snaps to weather seals before the first snowfall, we help homeowners keep garages safe, quiet, and secure year-round.</p>
          <ul class="ogt-check-list">
            <li>Insulated doors and proper sealing for attached garages</li>
            <li>Emergency repair when your door will not close</li>
            <li>Maintenance that catches worn cables and rollers early</li>
          </ul>
          <a class="ogt-btn ogt-btn-primary" href="/contact">Get a free estimate</a>
        </${d}>
      </${d}>
    </section>
`;

if (!c.includes("ogt-visual-split")) {
  c = c.replace(
    `    <section class="ogt-section" aria-labelledby="reviews-heading">`,
    splitBlock + `\n    <section class="ogt-section" aria-labelledby="reviews-heading">`
  );
}

const galleryBlock = `
    <section class="ogt-section ogt-section--alt ogt-section--gallery-preview" aria-labelledby="gallery-preview-heading">
      <${d} class="ogt-section-inner">
        <h2 id="gallery-preview-heading">On the job</h2>
        <p class="ogt-section-intro">A closer look at installs, repairs, and parts we carry on our trucks.</p>
        <${d} class="ogt-gallery-preview" id="ogt-gallery-preview"></${d}>
        <p class="ogt-gallery-preview-cta"><a class="ogt-btn ogt-btn-secondary" href="/gallery">See full gallery</a></p>
      </${d}>
    </section>
`;

if (!c.includes("ogt-gallery-preview")) {
  c = c.replace(
    `    <section class="ogt-section ogt-section--alt" aria-labelledby="areas-heading">`,
    galleryBlock + `\n    <section class="ogt-section ogt-section--alt" aria-labelledby="areas-heading">`
  );
}

const contactOld = `    <section class="ogt-section" aria-labelledby="contact-home-heading">
      <${d} class="ogt-section-inner ogt-home-contact-wrap">
        <${d}>
          <h2 id="contact-home-heading">Send a message</h2>
          <p class="ogt-section-intro">For urgent issues, <strong>call or text (613) 900-6005</strong> is fastest. Use the form for quotes and non-urgent requests.</p>
        </${d}>
        
        <${d} class="ogt-form-card ogt-home-form-card">`;

const contactNew = `    <section class="ogt-section ogt-section--contact-visual" aria-labelledby="contact-home-heading">
      <${d} class="ogt-section-inner ogt-home-contact-wrap">
        <${d} class="ogt-contact-visual-side">
          <img class="ogt-contact-visual-img" src="" alt="" width="500" height="600" loading="lazy">
          <${d} class="ogt-contact-visual-caption">
            <h2 id="contact-home-heading">Send a message</h2>
            <p class="ogt-section-intro">For urgent issues, <strong>call or text (613) 900-6005</strong> is fastest. Use the form for quotes and non-urgent requests.</p>
          </${d}>
        </${d}>
        <${d} class="ogt-form-card ogt-home-form-card">`;

if (c.includes("contact-home-heading") && !c.includes("ogt-contact-visual-side")) {
  c = c.replace(contactOld, contactNew);
}

c = c.replace(
  `<section class="ogt-cta-band" aria-label="Contact call to action">`,
  `<section class="ogt-cta-band ogt-cta-band--photo" aria-label="Contact call to action">`
);

c = c.replace(
  `<script src="/js/home.js"></script>
  <script>
    (function () {
      var grid = document.getElementById("ogt-home-services");
      if (!grid || !window.OGT) return;
      grid.innerHTML = OGT.services.map(function (s) {
        return '<a class="ogt-service-card ogt-service-card--link" href="/services/' + s.slug + '"><h3>' + s.title + '</h3><p>' + s.short + '</p><p class="ogt-service-card-meta">' + s.price + ' · ' + s.time + '</p></a>';
      }).join("");
    })();
  </script>`,
  `<script src="/js/visual.js"></script>
  <script src="/js/home.js"></script>`
);

fs.writeFileSync(p, c);
console.log("patched index.html visual");

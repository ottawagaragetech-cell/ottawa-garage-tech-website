import fs from "fs";
import path from "path";

const d = "d" + "iv";
const p = path.join(import.meta.dirname, "..", "index.html");
let c = fs.readFileSync(p, "utf8");

if (c.includes("ogt-hero-media")) {
  const start = c.indexOf('<section class="ogt-hero ogt-hero');
  const end = c.indexOf("</section>", start) + "</section>".length;
  const hero = `    <section class="ogt-hero ogt-hero--visual">
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
  c = c.slice(0, start) + hero + c.slice(end);
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

if (c.includes(contactOld)) c = c.replace(contactOld, contactNew);

const inlineScript =
  /<script>\s*\(function \(\) \{[\s\S]*?ogt-home-services[\s\S]*?<\/script>/;
if (inlineScript.test(c)) {
  c = c.replace(
    inlineScript,
    `<script src="/js/visual.js"></script>
  <script src="/js/home.js"></script>`
  );
} else if (!c.includes("visual.js")) {
  c = c.replace(
    '<script src="/js/home.js"></script>',
    '<script src="/js/visual.js"></script>\n  <script src="/js/home.js"></script>'
  );
}

fs.writeFileSync(p, c);
console.log("patched index remaining");

import fs from "fs";
import path from "path";

const d = "d" + "iv";
const root = path.join(import.meta.dirname, "..");

function patchServices() {
  const p = path.join(root, "services.html");
  let c = fs.readFileSync(p, "utf8");
  if (c.includes("ogt-page-hero--visual")) return;
  const hero = `    <${d} class="ogt-page-hero ogt-page-hero--visual">
      <${d} class="ogt-page-hero-text">
        <h1>Our services</h1>
        <p class="ogt-section-intro">Residential and light commercial garage door work across Ottawa — repairs, installations, and preventive care with upfront communication.</p>
        <a class="ogt-btn ogt-btn-primary" href="tel:+16139006005">Call (613) 900-6005</a>
      </${d}>
      <${d} class="ogt-page-hero-media">
        <img src="https://img1.wsimg.com/isteam/ip/1b277bec-adfe-487a-a8c7-5e77b97e6d1d/20251106_094900.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:900,cg:true" width="800" height="500" alt="Garage door services Ottawa" loading="eager">
      </${d}>
    </${d}>`;
  const close = "</" + "div>";
  c = c.replace(
    new RegExp(`    <div class="ogt-page-hero">[\\s\\S]*?${close}\\s*<section class="ogt-section">`),
    hero + `\n    <section class="ogt-section">`
  );
  c = c.replace(
    /<script src="\/js\/layout.js"><\/script>\s*<script>[\s\S]*?<\/script>/,
    `<script src="/js/layout.js"></script>\n  <script src="/js/visual.js"></script>`
  );
  fs.writeFileSync(p, c);
}

function patchAbout() {
  const p = path.join(root, "about.html");
  let c = fs.readFileSync(p, "utf8");
  if (c.includes("ogt-page-hero--visual")) return;
  const hero = `    <${d} class="ogt-page-hero ogt-page-hero--visual">
      <${d} class="ogt-page-hero-text">
        <h1>About Ottawa Garage Tech</h1>
        <p class="ogt-section-intro">We are a local Ottawa team focused on garage doors and openers — repairs, installations, and maintenance without high-pressure sales.</p>
      </${d}>
      <${d} class="ogt-page-hero-media">
        <img src="/assets/services/install-barrhaven.png" width="800" height="500" alt="New garage door installed in Barrhaven — Ottawa Garage Tech" loading="eager">
      </${d}>
    </${d}>`;
  c = c.replace(
    /<main id="main">[\s\S]*?<section class="ogt-section ogt-section--alt">/,
    `<main id="main">\n` + hero + `\n    <section class="ogt-section ogt-section--alt">`
  );
  if (!c.includes("visual.js")) {
    c = c.replace(
      '<script src="/js/layout.js"></script>',
      '<script src="/js/layout.js"></script>\n  <script src="/js/visual.js"></script>'
    );
  }
  fs.writeFileSync(p, c);
}

function patchAreas() {
  const p = path.join(root, "areas.html");
  let c = fs.readFileSync(p, "utf8");
  if (c.includes("ogt-photo-showcase")) return;
  const block = `
    <section class="ogt-section ogt-section--showcase ogt-section--compact">
      <${d} class="ogt-section-inner">
        <h2 class="ogt-visually-hidden">Service photos</h2>
        <${d} class="ogt-showcase-grid ogt-showcase-grid--compact" id="ogt-photo-showcase"></${d}>
      </${d}>
    </section>
`;
  c = c.replace(
    `    <section class="ogt-section">`,
    block + `    <section class="ogt-section">`
  );
  if (!c.includes("visual.js")) {
    c = c.replace(
      '<script src="/js/layout.js"></script>',
      '<script src="/js/layout.js"></script>\n  <script src="/js/visual.js"></script>'
    );
  }
  fs.writeFileSync(p, c);
}

patchServices();
patchAbout();
patchAreas();
console.log("patched inner pages");

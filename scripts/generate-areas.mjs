import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const domain = "https://ottawagaragetech.ca";
const BASE = "https://img1.wsimg.com/isteam/ip/1b277bec-adfe-487a-a8c7-5e77b97e6d1d";

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/\s+/g, "-");
}

function photo(file, w = 800) {
  const enc = encodeURIComponent(file).replace(/%2F/g, "/");
  if (file.includes("blob-") || file.endsWith(".png")) {
    return `${BASE}/${enc}/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:${w},cg:true`;
  }
  return `${BASE}/${enc}/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:${w},cg:true`;
}

/** Unique photos — assign one hero + one inline per suburb (offset so pairs differ). */
const PHOTO_POOL = [
  { file: "blob-fddabbe.png", label: "insulated garage door up to R-18" },
  { file: "blob-2c95119.png", label: "new garage door installation" },
  { file: "blob-f2936a4.png", label: "garage door spring and hardware" },
  { file: "20250110_075357-COLLAGE.jpg", label: "spring replacement work" },
  { file: "20250115_105310.jpg", label: "lift cable repair" },
  { file: "20250121_090341.jpg", label: "garage door and opener service" },
  { file: "20250121_200049.jpg", label: "opener gear service" },
  { file: "20250124_095313.jpg", label: "torsion spring replacement" },
  { file: "20250222_164415.jpg", label: "door repair and balance check" },
  { file: "20251005_173951.jpg", label: "opener repair" },
  { file: "20251015_061012 (1).jpg", label: "off-track door repair" },
  { file: "20251015_182306.jpg", label: "opener installation" },
  { file: "20251020_211230.jpg", label: "bottom seal replacement" },
  { file: "20251025_142148.jpg", label: "residential garage door service" },
  { file: "20251106_094900.jpg", label: "modern garage door install" },
  { file: "20260206_063252.jpg", label: "weather sealing" },
  { file: "20260224_153212.jpg", label: "cables and hardware" },
  { file: "20260227_140936.jpg", label: "belt-drive opener install" },
  { file: "IMG-20260206-WA0000(1).jpg", label: "new door install" },
  { file: "IMG-20260206-WA0001(8).jpg", label: "garage door panels and hardware" },
];

function pickPhotos(index, areaName) {
  const n = PHOTO_POOL.length;
  let hi = index % n;
  let ii = (index * 7 + 11) % n;
  if (ii === hi) ii = (ii + 1) % n;
  const hero = PHOTO_POOL[hi];
  const inline = PHOTO_POOL[ii];
  return {
    hero: {
      src: photo(hero.file, 900),
      alt: `Garage door ${hero.label} in ${areaName}`,
    },
    inline: {
      src: photo(inline.file, 600),
      alt: `Garage door ${inline.label} near ${areaName}`,
      caption: `Recent ${inline.label} — mobile service with parts on the truck.`,
    },
  };
}

const AREAS = [
  { name: "Ottawa", region: "central" },
  { name: "Kanata", region: "west" },
  { name: "Stittsville", region: "west" },
  { name: "Barrhaven", region: "south" },
  { name: "Nepean", region: "south" },
  { name: "Orleans", region: "east" },
  { name: "Gloucester", region: "east" },
  { name: "Manotick", region: "south" },
  { name: "Richmond", region: "west" },
  { name: "Carp", region: "west" },
  { name: "Rockland", region: "east" },
  { name: "Kemptville", region: "outer" },
  { name: "Carleton Place", region: "outer" },
  { name: "Alta Vista", region: "central" },
  { name: "Westboro", region: "west" },
  { name: "Vanier", region: "central" },
  { name: "Hunt Club", region: "central" },
  { name: "Riverside South", region: "south" },
  { name: "Findlay Creek", region: "south" },
  { name: "Greely", region: "south" },
  { name: "Metcalfe", region: "south" },
  { name: "Osgoode", region: "south" },
  { name: "Dunrobin", region: "west" },
  { name: "Constance Bay", region: "outer" },
  { name: "Cumberland", region: "east" },
  { name: "Blackburn Hamlet", region: "east" },
  { name: "Beacon Hill", region: "east" },
  { name: "Glebe", region: "central" },
  { name: "Sandy Hill", region: "central" },
  { name: "Rockcliffe Park", region: "central" },
].map((a) => ({ ...a, slug: slugify(a.name) }));

const REGION_NOTE = {
  west: (n) =>
    `${n} and nearby west-end neighbourhoods see wide temperature swings — we often recommend insulated doors up to R-18 and solid bottom seals before winter.`,
  south: (n) =>
    `In growing areas like ${n}, newer subdivisions and established streets both need reliable spring sizing and opener setups that handle daily family use.`,
  east: (n) =>
    `${n} homeowners often book us for storm-related off-track issues, spring failures, and opener repairs after heavy garage use.`,
  central: (n) =>
    `From older homes to infill properties in ${n}, we match hardware to door weight and keep repairs tidy in tighter driveways and laneways.`,
  outer: (n) =>
    `We travel to ${n} and surrounding communities — call to confirm timing; our trucks carry common springs, cables, and opener parts.`,
};

const SERVICE_LINKS = [
  ["emergency-repair", "Emergency repair"],
  ["spring-replacement", "Spring replacement"],
  ["garage-door-installation", "New door installation"],
  ["opener-service", "Opener service"],
  ["cable-repair", "Cable repair"],
  ["maintenance", "Maintenance tune-ups"],
  ["weather-sealing", "Weather sealing"],
];

function nearby(area) {
  return AREAS.filter((a) => a.region === area.region && a.slug !== area.slug).slice(0, 4);
}

function areaPage(area, index) {
  const imgs = pickPhotos(index, area.name);
  const canonical = `${domain}/areas/${area.slug}`;
  const title = `Garage Door Repair ${area.name} | Ottawa Garage Tech`;
  const desc = `Garage door repair, springs, openers, and new installations in ${area.name}. Same-day service when available. Call (613) 900-6005.`;
  const near = nearby(area);
  const heroAlt = `Garage door service in ${area.name} — Ottawa Garage Tech`;
  const inlineAlt = `Garage door work near ${area.name}`;

  const intro = [
    `Ottawa Garage Tech provides mobile garage door repair and installation in ${area.name} and surrounding streets. Springs, cables, openers, new doors, and emergency help — with upfront quotes before major work.`,
    REGION_NOTE[area.region](area.name),
  ];

  const serviceList = SERVICE_LINKS.map(
    ([slug, label]) => `<li><a href="/services/${slug}">${esc(label)}</a></li>`
  ).join("");

  const nearLinks = near
    .map((a) => `<a href="/areas/${a.slug}">${esc(a.name)}</a>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="en-CA" data-ogt-page="areas">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <meta name="keywords" content="garage door repair ${esc(area.name)}, garage door service ${esc(area.name)}, garage door springs ${esc(area.name)}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${imgs.hero.src}">
  <link rel="icon" href="/assets/logo.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/css/style.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ottawa Garage Tech",
    "url": "${domain}/",
    "telephone": "+16139006005",
    "image": ${JSON.stringify(imgs.hero.src)},
    "areaServed": ${JSON.stringify(area.name + ", Ottawa, ON")},
    "description": ${JSON.stringify(desc)}
  }
  </script>
</head>
<body>
  <div id="ogt-site-header"></div>
  <main id="main">
    <nav class="ogt-breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a><span aria-hidden="true">/</span>
      <a href="/areas">Service areas</a><span aria-hidden="true">/</span>
      <span>${esc(area.name)}</span>
    </nav>
    <div class="ogt-service-hero">
      <div class="ogt-service-hero-text">
        <h1>Garage door service in ${esc(area.name)}</h1>
        ${intro.map((p) => `<p class="ogt-section-intro">${esc(p)}</p>`).join("")}
        <div class="ogt-contact-quick">
          <a class="ogt-btn ogt-btn-primary" href="tel:+16139006005">Call (613) 900-6005</a>
          <a class="ogt-btn ogt-btn-secondary" href="/contact?area=${area.slug}">Request a quote</a>
        </div>
      </div>
      <figure class="ogt-service-hero-img">
        <img src="${imgs.hero.src}" width="800" height="600" alt="${esc(heroAlt)}" loading="eager">
      </figure>
    </div>

    <section class="ogt-section">
      <div class="ogt-section-inner ogt-rich-grid">
        <div class="ogt-rich-main">
          <h2>Services we offer in ${esc(area.name)}</h2>
          <ul class="ogt-check-list ogt-area-services-list">${serviceList}</ul>
          <h2>Why homeowners choose us</h2>
          <ul class="ogt-check-list">
            <li>Upfront quotes before major repair or installation work</li>
            <li>Same-day service when scheduling allows — call or text first</li>
            <li>Stocked trucks with common springs, cables, rollers, and opener parts</li>
            <li>Seven days a week · 9 AM – 9 PM</li>
          </ul>
          <h2>Common calls from ${esc(area.name)}</h2>
          <ul class="ogt-check-list">
            <li>Broken torsion or extension springs</li>
            <li>Door off track or stuck halfway</li>
            <li>Opener humming but door not moving</li>
            <li>Frayed cables, worn rollers, and noisy operation</li>
            <li>New insulated doors (up to R-18) and weather sealing before winter</li>
          </ul>
        </div>
        <aside class="ogt-rich-aside">
          <figure class="ogt-inline-figure">
            <img src="${imgs.inline.src}" width="600" height="450" alt="${esc(inlineAlt)}" loading="lazy">
            <figcaption>${esc(imgs.inline.caption)}</figcaption>
          </figure>
          <div class="ogt-aside-card">
            <h3>Nearby areas</h3>
            <p class="ogt-related-links">${nearLinks || '<a href="/areas">All service areas</a>'}</p>
            <p><a href="/services">All services</a> · <a href="/faq">FAQ</a> · <a href="/contact">Contact</a></p>
          </div>
        </aside>
      </div>
    </section>

    <section class="ogt-cta-band">
      <h2>Book garage door service in ${esc(area.name)}</h2>
      <p>Call or text for the fastest response — especially for doors that will not close.</p>
      <a class="ogt-btn ogt-btn-accent" href="tel:+16139006005">(613) 900-6005</a>
    </section>
  </main>
  <div id="ogt-site-footer"></div>
  <script src="/js/site-config.js"></script>
  <script src="/js/layout.js"></script>
</body>
</html>`;
}

const areasDir = path.join(root, "areas");
fs.mkdirSync(areasDir, { recursive: true });

AREAS.forEach((area, i) => {
  fs.writeFileSync(path.join(areasDir, `${area.slug}.html`), areaPage(area, i));
});

const cfgPath = path.join(root, "js", "site-config.js");
let cfg = fs.readFileSync(cfgPath, "utf8");
const areasJson = JSON.stringify(
  AREAS.map((a) => ({ name: a.name, slug: a.slug, region: a.region })),
  null,
  2
).replace(/\n/g, "\n  ");

const regionLabelsJson = JSON.stringify(
  {
    west: "West end",
    south: "South end",
    east: "East end",
    central: "Central Ottawa",
    outer: "Outer communities",
  },
  null,
  2
).replace(/\n/g, "\n  ");

cfg = cfg.replace(/areas:\s*\[[\s\S]*?\],\s*\n\s*\/\*\* Approximate/, `areas: ${areasJson},\n\n  /** Region labels for nav and area index */\n  areaRegions: ${regionLabelsJson},\n\n  /** Approximate`);
fs.writeFileSync(cfgPath, cfg);

const sitemapPath = path.join(root, "sitemap.xml");
let sm = fs.readFileSync(sitemapPath, "utf8");
const areaUrls = AREAS.map(
  (a) =>
    `  <url><loc>${domain}/areas/${a.slug}</loc><priority>0.75</priority></url>`
).join("\n");
if (!sm.includes("/areas/kanata")) {
  sm = sm.replace(
    "  <url><loc>https://ottawagaragetech.ca/gallery</loc>",
    `${areaUrls}\n  <url><loc>https://ottawagaragetech.ca/gallery</loc>`
  );
}
fs.writeFileSync(sitemapPath, sm);

console.log("Generated", AREAS.length, "area pages");

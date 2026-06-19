import fs from "fs";
import path from "path";
import {
  AREA_COPY,
  LOCAL_PHOTOS,
  REGION_VISIT,
  TYPICAL_JOBS_DEFAULT,
} from "./area-copy-data.mjs";
import { isDuplicateImagePair } from "./image-dedupe.mjs";

const root = path.resolve(import.meta.dirname, "..");
const domain = "https://ottawagaragetech.ca";
const PHONE_DISPLAY = "(613) 900-6005";
const AREA_TITLE_SERVICES = "Springs, Cables";

function areaMetaTitle(area) {
  return `Garage Door Repair ${area.name} | ${PHONE_DISPLAY} | ${AREA_TITLE_SERVICES}`;
}

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

function absUrl(src) {
  if (src.startsWith("http")) return src;
  if (src.startsWith("/")) return domain + src;
  return src;
}

function getAreaImages(area, index) {
  const copy = AREA_COPY[area.slug];
  const heroIdx = copy?.hero ?? index % LOCAL_PHOTOS.length;
  const inlineIdx = copy?.inline ?? (index * 3 + 5) % LOCAL_PHOTOS.length;
  const heroPhoto = LOCAL_PHOTOS[heroIdx];
  const inlinePhoto = LOCAL_PHOTOS[inlineIdx];
  const hero = {
    src: heroPhoto.src,
    alt: `${heroPhoto.cap} — ${area.name} — Ottawa Garage Tech`,
  };
  if (isDuplicateImagePair(heroPhoto.src, inlinePhoto.src)) {
    return { hero, inline: null };
  }
  return {
    hero,
    inline: {
      src: inlinePhoto.src,
      alt: `${inlinePhoto.cap} near ${area.name}`,
      caption: inlinePhoto.cap,
    },
  };
}

function areaLocalContent(area) {
  const copy = AREA_COPY[area.slug];
  if (copy) return copy;
  return {
    paragraphs: [
      `We provide mobile garage door repair and installation in ${area.name} and nearby streets.`,
      REGION_NOTE[area.region](area.name),
    ],
    jobs: TYPICAL_JOBS_DEFAULT,
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

const AREA_GEO = {
  ottawa: { lat: 45.4215, lng: -75.6972 },
  kanata: { lat: 45.3088, lng: -75.8986 },
  stittsville: { lat: 45.256, lng: -75.916 },
  barrhaven: { lat: 45.2797, lng: -75.7325 },
  nepean: { lat: 45.3369, lng: -75.7344 },
  orleans: { lat: 45.48, lng: -75.515 },
  gloucester: { lat: 45.436, lng: -75.61 },
  manotick: { lat: 45.227, lng: -75.681 },
  richmond: { lat: 45.194, lng: -75.838 },
  carp: { lat: 45.35, lng: -76.04 },
  rockland: { lat: 45.55, lng: -75.29 },
  kemptville: { lat: 45.016, lng: -75.639 },
  "carleton-place": { lat: 45.133, lng: -76.133 },
  "alta-vista": { lat: 45.385, lng: -75.665 },
  westboro: { lat: 45.392, lng: -75.755 },
  vanier: { lat: 45.44, lng: -75.655 },
  "hunt-club": { lat: 45.33, lng: -75.67 },
  "riverside-south": { lat: 45.28, lng: -75.68 },
  "findlay-creek": { lat: 45.26, lng: -75.52 },
  greely: { lat: 45.25, lng: -75.55 },
  metcalfe: { lat: 45.19, lng: -75.47 },
  osgoode: { lat: 45.15, lng: -75.6 },
  dunrobin: { lat: 45.38, lng: -76.05 },
  "constance-bay": { lat: 45.5, lng: -76.08 },
  cumberland: { lat: 45.52, lng: -75.42 },
  "blackburn-hamlet": { lat: 45.43, lng: -75.58 },
  "beacon-hill": { lat: 45.44, lng: -75.57 },
  glebe: { lat: 45.4, lng: -75.69 },
  "sandy-hill": { lat: 45.43, lng: -75.68 },
  "rockcliffe-park": { lat: 45.45, lng: -75.66 },
};

function areaNeighborhoods(area) {
  const copy = AREA_COPY[area.slug];
  return copy?.neighborhoods || [];
}

function formatMetaNeighborhoods(names, max = 3) {
  if (!names?.length) return "";
  const picked = names.slice(0, max);
  let text = picked.join(", ");
  if (names.length > max) text += ", and more";
  return text;
}

const AREA_META_SERVICES = {
  west: "spring replacement, opener repair, insulated doors & emergency service",
  south: "spring replacement, opener service, new door installs & tune-ups",
  east: "spring repair, off-track doors, opener fixes & weather sealing",
  central: "spring & cable repair, opener service, new doors & emergency calls",
  outer: "mobile spring repair, opener service, new doors & rural scheduling",
};

function areaMetaDescription(area) {
  const hoods = formatMetaNeighborhoods(areaNeighborhoods(area), 3);
  const services =
    AREA_META_SERVICES[area.region] ||
    "spring replacement, cable repair, opener service, new doors & emergency repair";
  if (hoods) {
    return `Garage door repair in ${area.name} — ${hoods} — ${services}. Licensed mobile technicians. Call ${PHONE_DISPLAY}.`;
  }
  const regional = {
    west: `West-end garage door repair in ${area.name}`,
    south: `South Ottawa garage door repair in ${area.name}`,
    east: `East-end garage door repair in ${area.name}`,
    central: `Central Ottawa garage door repair in ${area.name}`,
    outer: `Garage door repair in ${area.name} and nearby communities`,
  };
  return (
    (regional[area.region] || `Garage door repair in ${area.name}`) +
    ` — ${services}. Licensed mobile technicians. Call ${PHONE_DISPLAY}.`
  );
}

const REGION_NOTE = {
  west: (n) =>
    `${n} and the west end see sharp freeze-thaw swings — a well-insulated door plus fresh bottom sealing before winter often pays off.`,
  south: (n) =>
    `Around ${n}, busy family garages need correctly sized springs and openers that are not overworked day after day.`,
  east: (n) =>
    `In ${n}, we often see storm-related off-track calls, spring fatigue, and opener strain after heavy seasonal use.`,
  central: (n) =>
    `From century homes to infill in ${n}, we size hardware to door weight and work carefully in tighter driveways and laneways.`,
  outer: (n) =>
    `Trips to ${n} and nearby are scheduled in advance — call to confirm timing; our vans still carry common springs, cables, and opener parts.`,
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

function neighborhoodsBlock(area, list) {
  if (!list?.length) return "";
  const items = list.map((n) => `<li>${esc(n)}</li>`).join("");
  return `<h2>Neighbourhoods we serve in ${esc(area.name)}</h2>
          <p>We take garage door calls across ${esc(area.name)} — from urgent spring breaks to planned upgrades — including these communities and nearby streets:</p>
          <ul class="ogt-check-list">${items}</ul>`;
}

function leadTrustStrip() {
  return `<section class="ogt-section ogt-section--compact">
      <div class="ogt-section-inner">
        <div class="ogt-trust">
          <div class="ogt-trust-item"><strong>Clear on-site quotes</strong><span>Scope and price agreed before major repair or install work</span></div>
          <div class="ogt-trust-item"><strong>7 a.m.–9 p.m. daily</strong><span>Call or text — fastest when the door will not close</span></div>
          <div class="ogt-trust-item"><strong>Licensed &amp; insured</strong><span>Professional mobile technicians across Ottawa</span></div>
          <div class="ogt-trust-item"><strong>Stocked vans</strong><span>Many springs, cables, and rollers fitted in one visit</span></div>
        </div>
      </div>
    </section>`;
}

function leadMidCta(area, lead) {
  return `<div class="ogt-blog-cta-inline ogt-area-cta-inline">
          <h2>${esc(lead.midCtaHeading || `Need garage door help in ${area.name}?`)}</h2>
          <p>${esc(lead.midCtaText || "Call or text for the fastest response — especially if the door will not close.")}</p>
          <p class="ogt-contact-quick">
            <a class="ogt-btn ogt-btn-primary" href="tel:+16139006005">Call (613) 900-6005</a>
            <a class="ogt-btn ogt-btn-secondary" href="/contact?area=${area.slug}">Free quote by email</a>
          </p>
        </div>`;
}

function leadAsideCard(area, lead) {
  const points = (lead.asidePoints || [])
    .map((p) => `<li>${esc(p)}</li>`)
    .join("");
  return `<div class="ogt-aside-card ogt-aside-card--lead">
            <h3>${esc(lead.asideHeading || `Book ${area.name} service`)}</h3>
            <p class="ogt-lead-phone"><a href="tel:+16139006005">(613) 900-6005</a></p>
            <p class="ogt-lead-hours">Open daily 7 a.m.–9 p.m.</p>
            ${lead.asideNote ? `<p>${esc(lead.asideNote)}</p>` : ""}
            ${points ? `<ul class="ogt-check-list ogt-check-list--compact">${points}</ul>` : ""}
            <p class="ogt-contact-quick ogt-contact-quick--stack">
              <a class="ogt-btn ogt-btn-primary ogt-btn-block" href="tel:+16139006005">Call now</a>
              <a class="ogt-btn ogt-btn-secondary ogt-btn-block" href="/contact?area=${area.slug}">Request quote</a>
            </p>
          </div>`;
}

function leadFaqSection(area, faqs) {
  const items = faqs
    .map(
      (f) =>
        `<details class="ogt-faq-item"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`
    )
    .join("");
  return `<section class="ogt-section">
      <div class="ogt-section-inner">
        <h2>Common questions about garage door service in ${esc(area.name)}</h2>
        <div class="ogt-faq-list">${items}</div>
      </div>
    </section>`;
}

function leadFaqSchema(faqs) {
  if (!faqs?.length) return "";
  return `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": ${JSON.stringify(
      faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      }))
    )}
  }
  </script>`;
}

function leadConversionSection(area, lead) {
  if (!lead.conversionProse) return "";
  return `<section class="ogt-section">
      <div class="ogt-section-inner ogt-seo-prose">
        ${lead.conversionProse}
        <div class="ogt-blog-cta-inline ogt-area-cta-inline">
          <h2>Ready to book in ${esc(area.name)}?</h2>
          <p>Call or text for urgent issues. Use the form for installation quotes and scheduling questions.</p>
          <p class="ogt-contact-quick">
            <a class="ogt-btn ogt-btn-primary" href="tel:+16139006005">(613) 900-6005</a>
            <a class="ogt-btn ogt-btn-secondary" href="/contact?area=${area.slug}">Send a message</a>
            <a class="ogt-btn ogt-btn-secondary" href="sms:+16139006005">Text us</a>
          </p>
        </div>
      </div>
    </section>`;
}

function areaPage(area, index) {
  const imgs = getAreaImages(area, index);
  const heroSrc = absUrl(imgs.hero.src);
  const local = areaLocalContent(area);
  const lead = local.lead;
  const visit = local.visit ?? REGION_VISIT[area.region];
  const canonical = `${domain}/areas/${area.slug}`;
  const title = areaMetaTitle(area);
  const desc = areaMetaDescription(area);
  const geo = AREA_GEO[area.slug];
  const geoBlock = geo
    ? `"geo": {"@type": "GeoCoordinates", "latitude": ${geo.lat}, "longitude": ${geo.lng}},`
    : "";
  const near = nearby(area);

  const heroIntro =
    local.heroIntro ??
    `Ottawa Garage Tech serves ${area.name} and nearby streets for springs, openers, cables, new doors, and urgent safety calls — with clear scope and price before major work.`;
  const keywords =
    local.keywords ??
    (function () {
      const hoods = areaNeighborhoods(area);
      const parts = [
        `garage door repair ${area.name}`,
        `garage door service ${area.name}`,
        `garage door springs ${area.name}`,
      ];
      hoods.slice(0, 3).forEach(function (n) {
        parts.push(`garage door repair ${n}`);
      });
      return parts.join(", ");
    })();
  const seoSection =
    local.neighborhoods?.length || local.seoProse
      ? `<section class="ogt-section ogt-section--alt">
      <div class="ogt-section-inner ogt-seo-prose">
        ${neighborhoodsBlock(area, local.neighborhoods)}
        ${local.seoProse ?? ""}
      </div>
    </section>`
      : "";

  const serviceList = SERVICE_LINKS.map(
    ([slug, label]) => `<li><a href="/services/${slug}">${esc(label)}</a></li>`
  ).join("");

  const nearLinks = near
    .map((a) => `<a href="/areas/${a.slug}">${esc(a.name)}</a>`)
    .join("");

  const quoteLabel = lead ? "Free quote by email" : "Request a quote";
  const heroLeadExtras = lead
    ? `${lead.priceNote ? `<p class="ogt-price-note">${esc(lead.priceNote)}</p>` : ""}${lead.urgency ? `<p class="ogt-urgency-note">${esc(lead.urgency)}</p>` : ""}`
    : "";
  const trustSection = lead ? leadTrustStrip() : "";
  const midCta = lead ? leadMidCta(area, lead) : "";
  const stepsBlock =
    lead?.steps?.length
      ? `<h2>How booking works in ${esc(area.name)}</h2>
          <ol class="ogt-steps">${lead.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>`
      : "";
  const asideLead = lead ? leadAsideCard(area, lead) : "";
  const faqSection = lead?.faqs?.length ? leadFaqSection(area, lead.faqs) : "";
  const faqSchema = lead?.faqs?.length ? leadFaqSchema(lead.faqs) : "";
  const conversionSection = lead ? leadConversionSection(area, lead) : "";
  const ctaHeading = lead?.ctaHeading || `Book garage door service in ${area.name}`;
  const ctaSubtext =
    lead?.ctaSubtext || "Call or text for the fastest response — especially for doors that will not close.";
  const bottomCta = lead
    ? `<section class="ogt-cta-band">
      <h2>${esc(ctaHeading)}</h2>
      <p>${esc(ctaSubtext)}</p>
      <div class="ogt-contact-quick ogt-cta-band-actions">
        <a class="ogt-btn ogt-btn-accent" href="tel:+16139006005">(613) 900-6005</a>
        <a class="ogt-btn ogt-btn-secondary ogt-btn-on-dark" href="/contact?area=${area.slug}">Free quote by email</a>
      </div>
    </section>`
    : `<section class="ogt-cta-band">
      <h2>Book garage door service in ${esc(area.name)}</h2>
      <p>Call or text for the fastest response — especially for doors that will not close.</p>
      <a class="ogt-btn ogt-btn-accent" href="tel:+16139006005">(613) 900-6005</a>
    </section>`;

  return `<!DOCTYPE html>
<html lang="en-CA" data-ogt-page="areas">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <meta name="keywords" content="${esc(keywords)}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${heroSrc}">
  <meta property="og:site_name" content="Ottawa Garage Tech">
  <meta property="og:locale" content="en_CA">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(desc)}">
  <meta name="twitter:image" content="${heroSrc}">
  <link rel="icon" href="/assets/logo.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/css/style.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ottawa Garage Tech",
    "url": "${domain}/",
    "telephone": "+16139006005",
    "image": ${JSON.stringify(heroSrc)},
    ${geoBlock}
    "areaServed": ${JSON.stringify(area.name + ", Ottawa, ON")},
    "description": ${JSON.stringify(desc)}
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "${domain}/"},
      {"@type": "ListItem", "position": 2, "name": "Service areas", "item": "${domain}/areas"},
      {"@type": "ListItem", "position": 3, "name": ${JSON.stringify(area.name)}, "item": "${canonical}"}
    ]
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": ${JSON.stringify("Garage Door Repair " + area.name)},
    "description": ${JSON.stringify(desc)},
    "serviceType": "Garage door repair and installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ottawa Garage Tech",
      "url": "${domain}/",
      "telephone": "+16139006005"
    },
    "areaServed": {
      "@type": "City",
      "name": ${JSON.stringify(area.name)}${geo ? `,\n      "geo": {"@type": "GeoCoordinates", "latitude": ${geo.lat}, "longitude": ${geo.lng}}` : ""}
    }
  }
  </script>
  ${faqSchema}

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
        <p class="ogt-section-intro">${esc(heroIntro)}</p>
        ${heroLeadExtras}
        <div class="ogt-contact-quick">
          <a class="ogt-btn ogt-btn-primary" href="tel:+16139006005">Call (613) 900-6005</a>
          <a class="ogt-btn ogt-btn-secondary" href="/contact?area=${area.slug}">${quoteLabel}</a>
        </div>
      </div>
      <figure class="ogt-service-hero-img">
        <img src="${imgs.hero.src}" width="800" height="600" alt="${esc(imgs.hero.alt)}" loading="eager">
      </figure>
    </div>

    ${trustSection}

    <section class="ogt-section">
      <div class="ogt-section-inner ogt-rich-grid">
        <div class="ogt-rich-main">
          <h2>Garage doors in ${esc(area.name)}</h2>
          ${local.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("\n          ")}
          ${midCta}
          <h2>Services we offer in ${esc(area.name)}</h2>
          <ul class="ogt-check-list ogt-area-services-list">${serviceList}</ul>
          <h2>${esc(visit.heading)}</h2>
          <ul class="ogt-check-list">
            ${visit.points.map((p) => `<li>${esc(p)}</li>`).join("")}
          </ul>
          <h2>Typical jobs in ${esc(area.name)}</h2>
          <ul class="ogt-check-list">
            ${local.jobs.map((p) => `<li>${esc(p)}</li>`).join("")}
          </ul>
          ${stepsBlock}
        </div>
        <aside class="ogt-rich-aside">
          ${asideLead}
          ${
            imgs.inline
              ? `<figure class="ogt-inline-figure">
            <img src="${imgs.inline.src}" width="600" height="450" alt="${esc(imgs.inline.alt)}" loading="lazy">
            <figcaption>${esc(imgs.inline.caption)}</figcaption>
          </figure>`
              : ""
          }
          <div class="ogt-aside-card">
            <h3>Nearby areas</h3>
            <p class="ogt-related-links">${nearLinks || '<a href="/areas">All service areas</a>'}</p>
            <p><a href="/services">All services</a> · <a href="/faq">FAQ</a> · <a href="/contact">Contact</a></p>
          </div>
        </aside>
      </div>
    </section>

    ${seoSection}

    ${faqSection}

    ${conversionSection}

    ${bottomCta}
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

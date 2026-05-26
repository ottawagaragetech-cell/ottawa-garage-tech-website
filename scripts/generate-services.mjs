import fs from "fs";
import path from "path";
import {
  DOMAIN as domain,
  OG_IMAGE,
  absUrl,
  esc,
  socialMeta,
  breadcrumbSchema,
} from "./seo-meta.mjs";

const root = path.resolve(import.meta.dirname, "..");

const installAssets = {
  hero: "/assets/services/install-woodgrain-double.png",
  barrhaven: "/assets/services/install-barrhaven.png",
  ottawa: "/assets/services/install-ottawa-grey.png",
  kanata: "/assets/services/install-kanata.png",
  orleans: "/assets/services/install-orleans-double.png",
};

/** Exported for site-config / index */
export const OGT_IMAGES = {
  hero: installAssets.ottawa,
  gallery: [
    { src: "/assets/services/spring-replacement-parts.png", alt: "Garage door hardware, cables, and springs — Ottawa", cap: "Hardware & springs" },
    { src: installAssets.kanata, alt: "New garage door installed in Kanata", cap: "Kanata install" },
    { src: "/assets/services/spring-broken-torsion.png", alt: "Broken garage door torsion spring snapped in two on the shaft", cap: "Spring repair" },
    { src: "/assets/gallery/gallery-opener-liftmaster.png", alt: "Chamberlain garage door opener installation", cap: "Opener install" },
    { src: installAssets.hero, alt: "Wood-grain double garage door installation Ottawa", cap: "Door installation" },
    { src: "/assets/gallery/gallery-barrhaven-grey.png", alt: "Taupe wood-grain garage door with bottom seal — Barrhaven install", cap: "Barrhaven install" },
  ],
};

const springAssets = {
  broken: "/assets/services/spring-broken-torsion.png",
  parts: "/assets/services/spring-replacement-parts.png",
};

const images = {
  emergency: {
    src: "/assets/services/emergency-repair-stuck-door.png",
    alt: "Garage door stuck crooked halfway open — emergency repair Ottawa",
  },
  spring: {
    src: springAssets.broken,
    alt: "Broken garage door torsion spring snapped in two on the metal shaft — Ottawa",
  },
  install: {
    src: installAssets.hero,
    alt: "Wood-grain double garage door installed on a brick Ottawa home",
  },
  opener: {
    src: "/assets/gallery/gallery-opener-liftmaster.png",
    alt: "Chamberlain garage door opener installed on a garage ceiling — Ottawa",
  },
  cable: {
    src: "/assets/services/cable-repair-hardware.png",
    alt: "Rusty garage door lift cable and roller hardware — cable repair Ottawa",
  },
  maintenance: {
    src: "/assets/gallery/garage-door-maintenance-tune-up.png",
    alt: "Technician lubricating a garage door torsion spring during a tune-up — Ottawa",
  },
  weather: {
    src: "/assets/services/weather-sealing.png",
    alt: "PVC jamb weatherstrip seal installed along a garage door edge — Ottawa",
  },
};

const related = {
  "emergency-repair": ["spring-replacement", "cable-repair", "opener-service"],
  "spring-replacement": ["emergency-repair", "maintenance", "cable-repair"],
  "garage-door-installation": ["opener-service", "weather-sealing", "maintenance"],
  "opener-service": ["garage-door-installation", "emergency-repair", "maintenance"],
  "cable-repair": ["spring-replacement", "emergency-repair", "maintenance"],
  maintenance: ["weather-sealing", "spring-replacement", "opener-service"],
  "weather-sealing": ["maintenance", "garage-door-installation", "cable-repair"],
};

const serviceTitles = {
  "emergency-repair": "Emergency repair",
  "spring-replacement": "Spring replacement",
  "garage-door-installation": "New door installation",
  "opener-service": "Opener service",
  "cable-repair": "Cable repair",
  maintenance: "Maintenance tune-ups",
  "weather-sealing": "Weather sealing",
};

const services = {
  "emergency-repair": {
    title: "Urgent Garage Door Repair Ottawa | Priority Visits",
    desc: "Urgent garage door repair in Ottawa — off-track doors, broken springs, doors that will not close. Call (613) 900-6005 when safety is at risk.",
    h1: "Emergency garage door repair",
    imageKey: "emergency",
    keywords: "emergency garage door repair Ottawa, stuck garage door, off track door, same day garage door repair",
    priceNote: "Priority safety visits from $215 — final price depends on parts and labour after inspection.",
    intro: [
      "When your garage door will not close, hangs crooked, or a spring has just snapped, waiting is not an option. Ottawa Garage Tech treats safety issues as priorities and explains your options in plain language before major work begins.",
      "Our technicians arrive with common springs, cables, rollers, and opener parts on the truck so many emergencies are resolved in a single visit across Ottawa and nearby suburbs.",
    ],
    signs: [
      "Door stuck halfway or will not move",
      "Loud bang from the garage (often a spring)",
      "Door looks crooked or off the track",
      "Opener runs but the door does not budge",
      "Cable hanging loose or frayed",
    ],
    steps: [
      "Call or text (613) 900-6005 — fastest for urgent issues",
      "We secure the door and diagnose the root cause",
      "You receive a clear quote before repair work starts",
      "We complete the repair and test safety sensors and balance",
    ],
    bullets: ["Off-track and stuck doors", "Broken torsion or extension springs", "Snapped cables and roller failures", "Opener not responding or reversing"],
    inline: { src: "/assets/services/emergency-repair-stuck-door.png", alt: "Stuck crooked garage door during emergency service call", caption: "Urgent visits secure the door first, then diagnose springs, cables, and tracks." },
    faqs: [
      { q: "What counts as a garage door emergency?", a: "A door that will not close and secure your home, a door off track, or a broken spring are urgent. Call or text (613) 900-6005." },
      { q: "How quickly can you come?", a: "We prioritize safety calls when scheduling allows, every day from 9 a.m. to 9 p.m." },
      { q: "Do you charge extra for evenings?", a: "We quote clearly before work — ask when you call so there are no surprises." },
    ],
  },
  "spring-replacement": {
    title: "Garage Door Spring Replacement Ottawa | Torsion & Extension",
    desc: "Garage door spring replacement in Ottawa. Correct sizing, matched pairs when needed, clear on-site estimates. Ottawa Garage Tech — (613) 900-6005.",
    h1: "Garage door spring replacement",
    imageKey: "spring",
    keywords: "garage door spring replacement Ottawa, broken torsion spring, extension spring repair, garage door spring cost Ottawa",
    priceNote: "Most spring replacements land around $235–$395 depending on door size and spring type.",
    intro: [
      "Garage door springs counterbalance hundreds of pounds of weight. When one fails, the door becomes dangerous to lift and strains your opener. We install correctly rated springs and replace both sides when that is the right long-term fix.",
      "Ottawa temperature swings accelerate metal fatigue. If you heard a bang from the garage, stop using the door and schedule service — forcing it can damage cables, tracks, and the opener.",
    ],
    signs: [
      "Door feels extremely heavy when lifting manually",
      "Visible gap in a torsion spring above the door",
      "Door opens a few inches then stops",
      "Opener struggles or hums without smooth movement",
      "Previous spring broke within the last year",
    ],
    steps: [
      "Measure door weight and identify spring type (torsion or extension)",
      "Secure the door and release tension safely",
      "Install matched springs and hardware",
      "Balance the door and test several full cycles",
    ],
    bullets: ["Torsion spring systems", "Extension spring systems", "High-cycle spring upgrades", "Balance and tension testing"],
    inline: {
      src: "/assets/services/spring-replacement-inline-parts.png",
      alt: "Extension spring, cable, roller bracket, and track laid out for garage door replacement — Ottawa",
      caption:
        "Springs, cables, rollers, and track hardware — matched to your door before we install.",
    },
    faqs: [
      { q: "Should I replace one or both springs?", a: "Usually both. If one broke, the other is often near end of life. Balanced springs last longer." },
      { q: "Can I open the door with a broken spring?", a: "We do not recommend it — the door is unbalanced and the opener can be damaged." },
      { q: "How long do springs last?", a: "Often 7–10 years depending on cycles and climate. Maintenance helps spot wear early." },
    ],
  },
  "garage-door-installation": {
    title: "New Garage Door Installation Ottawa | Insulated & Standard Doors",
    desc: "New garage door supply and installation in Ottawa. Well-insulated and standard steel doors, free estimates, old door removal. Call Ottawa Garage Tech.",
    h1: "New garage door installation",
    imageKey: "install",
    keywords: "garage door installation Ottawa, new garage door, insulated garage door Ottawa, high R-value garage door, replace garage door",
    priceNote: "Installed doors are quoted after measurements — well-insulated steel panels are popular for Ottawa winters.",
    intro: [
      "A new garage door changes how your home looks from the street and how comfortable your garage feels in January. We help you choose panel style, insulation level, and window options that fit your budget.",
      "Every installation includes proper track alignment, weather sealing at the jambs, and opener pairing when needed. We can remove and dispose of your old door on request.",
    ],
    signs: [
      "Door is rusted, cracked, or sagging",
      "Thin, non-insulated panels — garage freezes in winter",
      "Frequent breakdowns on an old door",
      "Updating curb appeal before selling",
      "Converting to a quieter, better-insulated system",
    ],
    steps: [
      "On-site measurement and style consultation",
      "Written quote with lead time for your door model",
      "Removal of existing door and hardware if included",
      "Install, seal, balance, and program opener",
    ],
    bullets: ["Single and double residential doors", "Well-insulated steel panels and classic non-insulated styles", "Window and colour options", "Opener upgrade available"],
    inline: {
      src: installAssets.barrhaven,
      alt: "New cream garage door with windows installed in Barrhaven",
      caption: "Recent Barrhaven install — contemporary door with clean trim and sealing.",
    },
    faqs: [
      { q: "How long does installation take?", a: "Most single-car replacements are completed in one day once your door arrives." },
      { q: "Do you supply the door?", a: "Yes — we source doors sized for your opening and Ottawa climate, including well-insulated steel panels." },
      { q: "What insulation level do you offer?", a: "We install insulated garage doors with ratings suited to attached garages and cold Ottawa winters — we explain options during your estimate." },
      { q: "Can you match my home colour?", a: "Many colours and panel designs are available — we review samples during the estimate." },
    ],
  },
  "opener-service": {
    title: "Garage Door Opener Repair & Installation Ottawa",
    desc: "Garage door opener repair and installation in Ottawa — Chamberlain, LiftMaster, Genie, and smart openers. Gears, sensors, remotes, and new installs.",
    h1: "Garage door opener service",
    imageKey: "opener",
    keywords: "garage door opener repair Ottawa, Chamberlain opener repair, opener installation Ottawa, smart garage door opener",
    priceNote: "Opener repairs often from $210; gear assemblies from $265; new installed openers quoted by model.",
    intro: [
      "A garage door opener is more than a motor — it is sensors, limits, force settings, and a drive system that must work together. We troubleshoot the full chain, not just replace parts blindly.",
      "Whether your remote stopped working, the motor grinds but nothing moves, or you want a quiet belt-drive upgrade, we service major brands found in Ottawa homes.",
    ],
    signs: [
      "Motor runs but door does not move",
      "Grinding or clicking from the opener head",
      "Remotes or wall button unresponsive",
      "Door reverses immediately when closing",
      "LED lights flash on the opener (error codes)",
    ],
    steps: [
      "Test door balance first — sometimes the door is the real issue",
      "Inspect gears, carriage, sensors, and wiring",
      "Quote repair vs replacement honestly",
      "Program remotes and test auto-reverse safety",
    ],
    bullets: ["Chain, belt, and wall-mount openers", "Gear and sprocket replacement", "Safety sensor alignment", "Smart WiFi opener setup"],
    inline: { src: "/assets/gallery/gallery-opener-liftmaster.png", alt: "Chamberlain opener mounted on a garage ceiling in Ottawa", caption: "Opener installs include sensor alignment and safety testing." },
    faqs: [
      { q: "My opener hums but the door does not move — why?", a: "Often stripped plastic gears inside the unit. Repair is usually cheaper than full replacement." },
      { q: "Which opener type is quietest?", a: "Belt-drive models are typically quieter than chain-drive — good for bedrooms above the garage." },
      { q: "Can you program my car HomeLink?", a: "Yes, during the same visit when compatible with your opener." },
    ],
  },
  "cable-repair": {
    title: "Garage Door Cable Repair Ottawa | Lift Cables",
    desc: "Garage door cable replacement in Ottawa. Frayed or snapped lift cables repaired safely in pairs. Ottawa Garage Tech.",
    h1: "Garage door cable repair",
    imageKey: "cable",
    keywords: "garage door cable repair Ottawa, broken lift cable, frayed garage door cable, garage door off balance",
    priceNote: "Cable repairs typically $180–$285 when both cables and drums are serviced together.",
    intro: [
      "Lift cables work with springs and drums to raise your door evenly. When one cable frays or snaps, the door can drop on one side and damage tracks or panels.",
      "Cable replacement is high-tension work. Our technicians clamp and secure the door before swapping cables so your family stays safe.",
    ],
    signs: [
      "Door lifts unevenly or looks crooked",
      "Frayed strands visible on a cable",
      "Cable came off the drum",
      "Slack cable hanging on one side",
      "Opener strains on one side only",
    ],
    steps: [
      "Secure the door in a safe position",
      "Inspect drums, bottom brackets, and springs",
      "Replace cables in matched pairs",
      "Re-tension and balance the full system",
    ],
    bullets: ["Snapped or frayed lift cables", "Drum re-winding", "Bottom bracket inspection", "Balance check after repair"],
    inline: { src: "/assets/services/cable-repair-hardware.png", alt: "Worn garage door cable and roller on concrete — Ottawa", caption: "Frayed or rusted cables are replaced in pairs with drum and bracket checks." },
    faqs: [
      { q: "Is it safe to use the door with a frayed cable?", a: "No — schedule repair. A failing cable can snap under load." },
      { q: "Why replace both cables?", a: "Matched cables wear evenly and keep the door balanced." },
      { q: "Did the cable cause my spring to break?", a: "Sometimes imbalance stresses other parts — we inspect the full system." },
    ],
  },
  maintenance: {
    title: "Garage Door Maintenance & Tune-Up Ottawa",
    desc: "Annual garage door tune-ups in Ottawa — lubrication, safety tests, balance check. Prevent costly breakdowns. Book Ottawa Garage Tech.",
    h1: "Maintenance tune-ups",
    imageKey: "maintenance",
    keywords: "garage door maintenance Ottawa, garage door tune up, annual garage door service Ottawa",
    priceNote: "Tune-ups from $165 — includes inspection, lubrication, and a written summary of findings.",
    intro: [
      "Most garage door failures give warning signs months earlier — noisy rollers, slow response, or a door that drifts off balance. A yearly tune-up catches those issues before they become emergency calls.",
      "Our maintenance visit is designed for Ottawa homes: we account for salt, cold, and hardware contraction that affects rollers, hinges, and seals.",
    ],
    signs: [
      "Door is noisy when opening or closing",
      "Has been more than 12 months since service",
      "Door does not stay open at mid-height",
      "Rubber seal is cracked or flat",
      "Preparing a rental property or new home purchase",
    ],
    steps: [
      "Visual inspection of springs, cables, tracks, and panels",
      "Lubricate hinges, rollers, and bearing plates",
      "Test auto-reverse and photo-eye sensors",
      "Adjust opener limits if needed and provide a report",
    ],
    bullets: ["21-point inspection checklist", "Hinge and roller lubrication", "Hardware tightening", "Safety sensor testing"],
    inline: { src: "/assets/gallery/garage-door-maintenance-tune-up.png", alt: "Technician lubricating a garage door torsion spring during maintenance — Ottawa", caption: "Tune-ups include lubricating springs, hinges, and rollers before wear becomes failure." },
    faqs: [
      { q: "How often should I service my door?", a: "Once a year is ideal for most Ottawa households — more if heavy daily use." },
      { q: "Is maintenance worth it vs waiting for a break?", a: "Yes — preventing a spring or cable failure avoids higher emergency costs." },
      { q: "Do you lubricate all parts?", a: "We use appropriate lubricants on moving metal parts — not on tracks where grease attracts dirt." },
    ],
  },
  "weather-sealing": {
    title: "Garage Door Weather Sealing Ottawa | Bottom Seals",
    desc: "Garage door weather seals and bottom rubber in Ottawa. Cut drafts, snow, and pests. Threshold and jamb sealing.",
    h1: "Weather sealing",
    imageKey: "weather",
    keywords: "garage door weather seal Ottawa, bottom seal replacement, garage door weatherstripping Ottawa",
    priceNote: "Weather sealing from $260 depending on door width and seal type.",
    intro: [
      "A thin gap under your garage door lets in Ottawa winter air, slush, and rodents. Quality bottom seals and jamb weatherstripping make a noticeable difference in comfort and energy loss.",
      "Sealing only works when the door is aligned — we check contact across the full width and adjust tracks or limits if needed so the new seal wears evenly.",
    ],
    signs: [
      "Daylight visible under the closed door",
      "Snow or water pooling inside the garage",
      "Cold drafts near the garage entry",
      "Rubber seal is cracked or missing chunks",
      "Pests entering under the door",
    ],
    steps: [
      "Measure door width and seal profile",
      "Remove worn seal and clean the retainer",
      "Install new bottom seal or threshold",
      "Replace side and top weatherstrip as quoted",
    ],
    bullets: ["T-style and U-shaped bottom seals", "Threshold bars", "PVC and rubber jamb seal", "Track tweaks for even contact"],
    inline: { src: "/assets/services/weather-sealing.png", alt: "Jamb weatherstrip seal along a garage door edge — Ottawa", caption: "Side jamb seals and bottom rubber — replaced before winter in Ottawa." },
    faqs: [
      { q: "When is the best time to replace seals?", a: "Late fall before deep cold, or when you notice drafts and daylight under the door." },
      { q: "Will sealing reduce heating costs?", a: "It helps especially if the garage shares a wall with heated space." },
      { q: "Can you fix uneven sealing?", a: "Yes — we align the door so the seal contacts evenly end to end." },
    ],
  },
};

function relatedLinks(slug) {
  return (related[slug] || [])
    .map((s) => `<a href="/services/${s}">${esc(serviceTitles[s])}</a>`)
    .join("");
}

function servicePage(slug, data) {
  const img = images[data.imageKey];
  const canonical = `${domain}/services/${slug}`;
  const faqSchema = data.faqs
    .map(
      (f) =>
        `{"@type":"Question","name":${JSON.stringify(f.q)},"acceptedAnswer":{"@type":"Answer","text":${JSON.stringify(f.a)}}}`
    )
    .join(",");

  return `<!DOCTYPE html>
<html lang="en-CA" data-ogt-page="services">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(data.title)}</title>
  <meta name="description" content="${esc(data.desc)}">
  <meta name="keywords" content="${esc(data.keywords)}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow">${socialMeta({
    title: data.title,
    description: data.desc,
    url: canonical,
    image: img.src,
  })}
  <link rel="icon" href="/assets/logo.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/css/style.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": ${JSON.stringify(data.h1)},
    "description": ${JSON.stringify(data.desc)},
    "provider": {"@type": "LocalBusiness", "name": "Ottawa Garage Tech", "telephone": "+16139006005", "url": "${domain}/"},
    "areaServed": ["Ottawa","Kanata","Barrhaven","Orleans","Nepean"],
    "image": ${JSON.stringify(absUrl(img.src))},
    "offers": {"@type": "Offer", "priceCurrency": "CAD", "description": ${JSON.stringify(data.priceNote)}}
  }
  </script>
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[${faqSchema}]}</script>
  <script type="application/ld+json">${breadcrumbSchema([
    { name: "Home", url: `${domain}/` },
    { name: "Services", url: `${domain}/services` },
    { name: data.h1, url: canonical },
  ])}</script>
</head>
<body>
  <div id="ogt-site-header"></div>
  <main id="main">
    <nav class="ogt-breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a><span aria-hidden="true">/</span>
      <a href="/services">Services</a><span aria-hidden="true">/</span>
      <span>${esc(data.h1)}</span>
    </nav>
    <div class="ogt-service-hero">
      <div class="ogt-service-hero-text">
        <h1>${esc(data.h1)}</h1>
        ${data.intro.map((p) => `<p class="ogt-section-intro">${esc(p)}</p>`).join("")}
        <p class="ogt-price-note">${esc(data.priceNote)}</p>
        <div class="ogt-contact-quick">
          <a class="ogt-btn ogt-btn-primary" href="tel:+16139006005">Call (613) 900-6005</a>
          <a class="ogt-btn ogt-btn-secondary" href="/contact?service=${slug}">Free quote by email</a>
        </div>
      </div>
      <figure class="ogt-service-hero-img">
        <img src="${img.src}" width="800" height="600" alt="${esc(img.alt)}" loading="eager">
      </figure>
    </div>

    <section class="ogt-section">
      <div class="ogt-section-inner ogt-rich-grid">
        <div class="ogt-rich-main">
          <h2>Signs you may need ${esc(data.h1.toLowerCase())}</h2>
          <ul class="ogt-check-list">${data.signs.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
          <h2>Our process</h2>
          <ol class="ogt-steps">${data.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
          <h2>What we handle</h2>
          <ul class="ogt-check-list">${data.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
        </div>
        <aside class="ogt-rich-aside">
          <figure class="ogt-inline-figure">
            <img src="${data.inline.src}" width="600" height="450" alt="${esc(data.inline.alt)}" loading="lazy">
            <figcaption>${esc(data.inline.caption)}</figcaption>
          </figure>
          <div class="ogt-aside-card">
            <h3>Related services</h3>
            <p class="ogt-related-links">${relatedLinks(slug)}</p>
            <p><a href="/areas">Service areas</a> · <a href="/contact">Contact</a></p>
          </div>
        </aside>
      </div>
    </section>

    <section class="ogt-section ogt-section--alt">
      <div class="ogt-section-inner ogt-prose">
        <h2>Serving Ottawa &amp; surrounding communities</h2>
        <p>Mobile service for ${esc(data.h1.toLowerCase())} in Ottawa, Kanata, Barrhaven, Orleans, Nepean, Stittsville, Gloucester, Manotick, Rockland, and more. Not sure if we cover your neighbourhood? <a href="tel:+16139006005">Call us</a> — we are happy to confirm.</p>
        <p>For urgent problems, calling or texting <strong>(613) 900-6005</strong> is faster than email. For quotes and scheduling questions, use our <a href="/contact?service=${slug}">contact form</a>.</p>
      </div>
    </section>

    <section class="ogt-section">
      <div class="ogt-section-inner">
        <h2>Common questions about ${esc(data.h1.toLowerCase())}</h2>
        <div class="ogt-faq-list">
          ${data.faqs.map((f) => `<details class="ogt-faq-item"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("")}
        </div>
      </div>
    </section>

    <section class="ogt-cta-band">
      <h2>Book ${esc(data.h1.toLowerCase())} in Ottawa</h2>
      <p>Call or text for the fastest response — or send a message for non-urgent quotes.</p>
      <a class="ogt-btn ogt-btn-accent" href="tel:+16139006005">(613) 900-6005</a>
    </section>
  </main>
  <div id="ogt-site-footer"></div>
  <script src="/js/site-config.js"></script>
  <script src="/js/layout.js"></script>
</body>
</html>`;
}

fs.mkdirSync(path.join(root, "services"), { recursive: true });
for (const [slug, data] of Object.entries(services)) {
  fs.writeFileSync(path.join(root, "services", `${slug}.html`), servicePage(slug, data));
}

console.log("Regenerated", Object.keys(services).length, "rich service pages");

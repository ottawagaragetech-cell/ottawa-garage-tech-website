import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const domain = "https://ottawagaragetech.ca";

const services = {
  "emergency-repair": {
    title: "Emergency Garage Door Repair Ottawa",
    desc: "Same-day emergency garage door repair in Ottawa. Off-track doors, broken springs, and urgent safety issues.",
    h1: "Emergency garage door repair",
    body: [
      "A door that will not close, a spring that snapped, or panels hanging crooked are safety issues — not something to leave until next week. Ottawa Garage Tech responds across Ottawa and nearby communities with stocked trucks and clear communication.",
      "We diagnose the root cause first: balance, cables, tracks, opener force settings, or structural damage. You get options and pricing before major work begins.",
    ],
    bullets: [
      "Off-track and stuck doors",
      "Broken torsion or extension springs",
      "Snapped cables and roller failures",
      "Opener not responding or reversing",
    ],
  },
  "spring-replacement": {
    title: "Garage Door Spring Replacement Ottawa",
    desc: "Professional torsion and extension spring replacement in Ottawa. Balanced, safe installs with upfront quotes.",
    h1: "Garage door spring replacement",
    body: [
      "Springs do the heavy lifting. When one fails, the door is unbalanced and dangerous to operate. We replace springs with the correct size and rating for your door weight, and we replace both sides when appropriate so you are not calling again in a few weeks.",
      "Cold Ottawa winters accelerate metal fatigue. If you heard a loud bang from the garage, assume a spring issue and avoid manual lifting.",
    ],
    bullets: [
      "Torsion spring systems",
      "Extension spring systems",
      "Balance and tension testing",
      "Hardware inspection included",
    ],
  },
  "garage-door-installation": {
    title: "New Garage Door Installation Ottawa",
    desc: "New garage door supply and installation in Ottawa. Insulated doors up to R-18, free estimates, old door removal.",
    h1: "New garage door installation",
    body: [
      "A new door improves curb appeal, sealing, and day-to-day reliability. We help you choose steel, insulated doors up to R-18, and classic styles that suit Ottawa weather and your home.",
      "Installations include alignment, weather sealing, opener pairing when needed, and cleanup. We remove old doors on request.",
    ],
    bullets: [
      "Residential single and double doors",
      "Insulated panels up to R-18 and standard panels",
      "Hardware and track upgrades",
      "Opener pairing available",
    ],
  },
  "opener-service": {
    title: "Garage Door Opener Repair Ottawa",
    desc: "Opener repair and installation in Ottawa for LiftMaster, Chamberlain, Genie, and more.",
    h1: "Garage door opener service",
    body: [
      "Grinding, humming with no movement, dead remotes, or sensors that will not align — we troubleshoot the full system, not just the motor.",
      "We repair gears, limits, and safety sensors, or recommend replacement when repair no longer makes sense.",
    ],
    bullets: [
      "Motor and gear repairs",
      "Remote and keypad programming",
      "Safety sensor alignment",
      "Belt and chain drive installs",
    ],
  },
  "cable-repair": {
    title: "Garage Door Cable Repair Ottawa",
    desc: "Lift cable replacement in Ottawa. Both cables replaced for safe, balanced operation.",
    h1: "Garage door cable repair",
    body: [
      "Frayed or broken cables cause uneven lifting and extra strain on your opener. We replace cables in pairs with proper tension so the door runs smoothly.",
      "Cable work involves high tension — this is not a DIY repair. Our technicians secure the door before service and test every cycle before leaving.",
    ],
    bullets: [
      "Snapped or frayed lift cables",
      "Drum and bottom bracket checks",
      "Balance verification",
      "Opener strain assessment",
    ],
  },
  maintenance: {
    title: "Garage Door Maintenance Ottawa",
    desc: "Garage door tune-ups and preventive maintenance in Ottawa. Inspection, lubrication, and adjustments.",
    h1: "Maintenance tune-ups",
    body: [
      "Annual maintenance catches worn rollers, loose hardware, and balance drift before they become emergency repairs — especially before winter.",
      "Our tune-up includes lubrication of moving parts, safety sensor and auto-reverse tests, track and roller inspection, and a plain-language summary of anything to watch.",
    ],
    bullets: [
      "21-point style inspection",
      "Lubrication and adjustments",
      "Safety sensor testing",
      "Written recommendations",
    ],
  },
  "weather-sealing": {
    title: "Garage Door Weather Sealing Ottawa",
    desc: "Bottom seals, thresholds, and weatherstripping for Ottawa garages. Cut drafts and moisture.",
    h1: "Weather sealing",
    body: [
      "Gaps under the door let in cold air, slush, and pests. We install durable bottom seals and side weatherstripping rated for Ottawa temperature swings.",
      "Sealing pairs well with a tune-up — we check alignment so new seals contact evenly across the full width.",
    ],
    bullets: [
      "Bottom rubber and T-style seals",
      "Threshold bars",
      "Side and top weatherstrip",
      "Alignment adjustments",
    ],
  },
};

function shell(page, title, desc, canonical, main) {
  return `<!DOCTYPE html>
<html lang="en-CA" data-ogt-page="${page}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Ottawa Garage Tech</title>
  <meta name="description" content="${desc}">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="/assets/logo.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <div id="ogt-site-header"></div>
  <main id="main">${main}</main>
  <div id="ogt-site-footer"></div>
  <script src="/js/site-config.js"></script>
  <script src="/js/layout.js"></script>
</body>
</html>`;
}

function servicePage(slug, data) {
  const main = `
    <nav class="ogt-breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a><span aria-hidden="true">/</span>
      <a href="/services">Services</a><span aria-hidden="true">/</span>
      <span>${data.h1}</span>
    </nav>
    <div class="ogt-page-hero">
      <h1>${data.h1}</h1>
      ${data.body.map((p) => `<p class="ogt-section-intro">${p}</p>`).join("")}
      <div class="ogt-contact-quick">
        <a class="ogt-btn ogt-btn-primary" href="tel:+16139006005">Call (613) 900-6005</a>
        <a class="ogt-btn ogt-btn-secondary" href="/contact?service=${slug}">Request a quote</a>
      </div>
    </div>
    <section class="ogt-section ogt-section--alt">
      <div class="ogt-section-inner ogt-prose">
        <h2>What we handle</h2>
        <ul class="ogt-check-list">
          ${data.bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>
        <p><a href="/contact?service=${slug}">Contact us</a> for a quote, or call for urgent help.</p>
      </div>
    </section>
    <section class="ogt-cta-band">
      <h2>Ready to book service?</h2>
      <p>Call or text for the fastest response in Ottawa.</p>
      <a class="ogt-btn ogt-btn-accent" href="tel:+16139006005">(613) 900-6005</a>
    </section>`;
  return shell("services", data.title, data.desc, `${domain}/services/${slug}`, main);
}

// Fix shell - remove motion placeholders
function clean(html) {
  return html.replace(/<\/motion>\n?/g, "");
}

fs.mkdirSync(path.join(root, "services"), { recursive: true });

for (const [slug, data] of Object.entries(services)) {
  fs.writeFileSync(
    path.join(root, "services", `${slug}.html`),
    clean(servicePage(slug, data))
  );
}

const hubs = [
  {
    file: "about.html",
    page: "about",
    title: "About Us",
    desc: "Learn about Ottawa Garage Tech — local garage door repair and installation with clear quotes and flexible hours.",
    canonical: `${domain}/about`,
    main: `
            <div class="ogt-page-hero"><h1>About Ottawa Garage Tech</h1>
    <p class="ogt-section-intro">We are a local Ottawa team focused on garage doors and openers — repairs, installations, and maintenance without high-pressure sales.</p></div>
    <section class="ogt-section ogt-section--alt"><div class="ogt-section-inner ogt-prose">
    <h2>How we work</h2>
    <p>You describe the problem. We inspect, explain what we see, and quote before major work. For urgent safety issues, call or text first — that is the fastest path.</p>
    <h2>What you can expect</h2>
    <ul class="ogt-check-list"><li>Clear communication and scheduling</li><li>Respect for your home and property</li><li>Common parts on our trucks for same-day fixes when possible</li><li>Service across Ottawa and nearby communities</li></ul>
    <p><a href="/contact">Get in touch</a> or call <a href="tel:+16139006005">(613) 900-6005</a>.</p>
    </div></section>`,
  },
  {
    file: "faq.html",
    page: "faq",
    title: "FAQ",
    desc: "Frequently asked questions about garage door repair, pricing, and scheduling in Ottawa.",
    canonical: `${domain}/faq`,
    main: `<div class="ogt-page-hero"><h1>Frequently asked questions</h1>
    <p class="ogt-section-intro">Quick answers about costs, timing, and how to reach us.</p></div>
    <section class="ogt-section"><div class="ogt-section-inner ogt-faq-list" id="ogt-faq-list"></div></section>
    <script>
    document.getElementById("ogt-faq-list").innerHTML = (window.OGT && OGT.faqs ? OGT.faqs : []).map(function(f) {
      return '<details class="ogt-faq-item"><summary>' + f.q + '</summary><p>' + f.a + '</p></details>';
    }).join('');
    </script>`,
  },
  {
    file: "areas.html",
    page: "areas",
    title: "Service Areas",
    desc: "Garage door service areas across Ottawa, Kanata, Barrhaven, Orleans, and surrounding communities.",
    canonical: `${domain}/areas`,
    main: `<div class="ogt-page-hero"><h1>Service areas</h1>
    <p class="ogt-section-intro">We serve Ottawa and surrounding neighbourhoods. Not listed? Call — we may still cover your area.</p>
    <div class="ogt-contact-quick"><a class="ogt-btn ogt-btn-primary" href="tel:+16139006005">Call (613) 900-6005</a></div></div>
    <section class="ogt-section"><div class="ogt-section-inner"><div class="ogt-areas-grid" id="ogt-areas-grid"></div></div></div></section>
    <script>
    document.getElementById("ogt-areas-grid").innerHTML = (window.OGT && OGT.areas ? OGT.areas : []).map(function(a) {
      return '<span class="ogt-area-chip">' + a + '</span>';
    }).join('');
    </script>`,
  },
  {
    file: "gallery.html",
    page: "gallery",
    title: "Gallery",
    desc: "Garage door project photos from Ottawa Garage Tech — installations and repairs.",
    canonical: `${domain}/gallery`,
    main: `<div class="ogt-page-hero"><h1>Project gallery</h1>
    <p class="ogt-section-intro">Photos coming soon. Request recent examples when you <a href="/contact">contact us</a>.</p></div>
    <section class="ogt-section"><div class="ogt-section-inner ogt-gallery-grid">
    <div class="ogt-gallery-item">Spring replacement · Ottawa</div>
    <div class="ogt-gallery-item">New door install · Kanata</div>
    <div class="ogt-gallery-item">Opener service · Barrhaven</div>
    <div class="ogt-gallery-item">Weather seal · Nepean</div>
    <div class="ogt-gallery-item">Cable repair · Orleans</div>
    <div class="ogt-gallery-item">Tune-up · Stittsville</div>
    </div></section>`,
  },
  {
    file: "privacy.html",
    page: "privacy",
    title: "Privacy Policy",
    desc: "Privacy policy for Ottawa Garage Tech website.",
    canonical: `${domain}/privacy`,
    main: `<div class="ogt-page-hero"><h1>Privacy policy</h1></div>
    <section class="ogt-section"><div class="ogt-section-inner ogt-legal">
    <p>Last updated: May 2026</p>
    <h2>Information we collect</h2>
    <p>When you submit our contact form, we receive the details you provide (name, email, phone, message). We use this only to respond to your request.</p>
    <h2>How we use it</h2>
    <p>We do not sell your personal information. We may use email or phone to follow up about your garage door service inquiry.</p>
    <h2>Third parties</h2>
    <p>Form submissions may be processed by Formspree. Their privacy policy applies to data handled on their platform.</p>
    <h2>Contact</h2>
    <p>Questions: <a href="mailto:ottawagaragetech@gmail.com">ottawagaragetech@gmail.com</a></p>
    </div></section>`,
  },
  {
    file: "terms.html",
    page: "terms",
    title: "Terms of Use",
    desc: "Terms of use for the Ottawa Garage Tech website.",
    canonical: `${domain}/terms`,
    main: `<div class="ogt-page-hero"><h1>Terms of use</h1></div>
    <section class="ogt-section"><div class="ogt-section-inner ogt-legal">
    <p>Last updated: May 2026</p>
    <h2>Website content</h2>
    <p>Information on this site is general in nature and may change without notice. Service availability and pricing are confirmed when you speak with us.</p>
    <h2>No warranty</h2>
    <p>We strive for accurate information but do not guarantee the site is error-free or always available.</p>
    <h2>Contact</h2>
    <p><a href="/contact">Contact us</a> with any questions about these terms.</p>
    </div></section>`,
  },
];

for (const h of hubs) {
  let html = shell(h.page, h.title, h.desc, h.canonical, h.main);
  html = clean(html);
  html = html.replace(/<\/?motion>/g, "").replace(/<\/motion>/g, "");
  fs.writeFileSync(path.join(root, h.file), html);
}

console.log("Generated", Object.keys(services).length, "service pages +", hubs.length, "hub pages");


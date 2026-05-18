/** Blog post source data — used by scripts/generate-blog.mjs */

/** Real job photos from the Ottawa Garage Tech project library (wsimg) */
const WS = "https://img1.wsimg.com/isteam/ip/1b277bec-adfe-487a-a8c7-5e77b97e6d1d";

function jobPhoto(file, w = 900) {
  if (file.startsWith("/assets/")) return file;
  const enc = encodeURIComponent(file).replace(/%2F/g, "/");
  return `${WS}/${enc}/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:${w},cg:true`;
}

export const BLOG_IMAGES = {
  pricing: jobPhoto("20250124_095313.jpg"),
  springRepair: jobPhoto("20250110_075357-COLLAGE.jpg"),
  insulatedHome: "/assets/services/install-woodgrain-double.png",
  troubleshooting: jobPhoto("20251015_061012 (1).jpg"),
  replacement: jobPhoto("20251106_094900.jpg"),
  winterPrep: jobPhoto("20260206_063252.jpg"),
};

export const blogPosts = [
  {
    slug: "garage-door-repair-cost-ottawa",
    title: "How Much Does Garage Door Repair Cost in Ottawa?",
    h1: "Garage door repair costs in Ottawa (2026 guide)",
    desc: "Typical garage door repair prices in Ottawa — springs, cables, openers, and emergency visits. What affects cost and how to get an upfront quote.",
    keywords: "garage door repair cost Ottawa, garage door spring cost, garage door repair prices Ottawa",
    date: "2026-03-10",
    category: "Pricing",
    readMin: 7,
    imageKey: "pricing",
    imageAlt: "Torsion spring replacement on a garage door in Ottawa",
    relatedServices: ["spring-replacement", "emergency-repair", "maintenance"],
    relatedSlugs: ["broken-garage-door-spring-ottawa", "repair-vs-replace-garage-door"],
    body: `
<p>If your garage door stopped working, the first question is often <strong>how much will repair cost in Ottawa?</strong> Prices depend on what failed — a worn roller tune-up is very different from a snapped torsion spring or a bent track. This guide explains typical ranges we see for homeowners in Ottawa, Kanata, Barrhaven, Orleans, and nearby communities, and what you can expect before a technician starts major work.</p>

<h2>Typical garage door repair prices in Ottawa</h2>
<p>These ranges reflect common residential jobs. Your door size, hardware type, and whether both sides of a paired system need work will move the final number up or down.</p>
<ul>
<li><strong>Spring replacement:</strong> often $220–$380 for standard residential torsion or extension springs, usually replaced in pairs for balance</li>
<li><strong>Cable repair:</strong> roughly $175–$275 when drums, cables, or bottom fixtures are involved</li>
<li><strong>Maintenance tune-up:</strong> from about $150 — lubrication, balance check, hardware inspection</li>
<li><strong>Opener repair:</strong> commonly $195–$350 for gears, limits, sensors, or motor issues; replacement quoted separately</li>
<li><strong>Emergency / same-day visit:</strong> often starts around $199 before parts, when scheduling allows</li>
<li><strong>Weather sealing:</strong> from about $250 for bottom seals, thresholds, and jambs</li>
</ul>
<p>New <a href="/services/garage-door-installation">garage door installation</a> is quoted after on-site measurement — insulated steel doors up to <strong>R-18</strong> are popular in Ottawa for attached garages.</p>

<h2>What affects your garage door repair bill?</h2>
<h3>Door size and spring type</h3>
<p>Double-wide doors and high-lift setups use heavier springs. Torsion springs over the header are standard on many Ottawa homes; older extension spring systems along the tracks still appear in subdivisions across Nepean and Gloucester.</p>
<h3>One part vs the full system</h3>
<p>Replacing a single frayed cable without checking the mate, spring balance, and opener force settings can lead to a second breakdown weeks later. A good technician explains what is worn, what is urgent, and what can wait.</p>
<h3>Emergency timing</h3>
<p>A door that will not close is a security issue. Evening and weekend calls may include priority scheduling. Calling or texting <a href="tel:+16139006005">(613) 900-6005</a> is usually faster than email for urgent problems.</p>

<h2>Should you repair or replace the door?</h2>
<p>If the panels are rusted through, the track is bent, or you are heating an attached garage with a non-insulated door, <a href="/blog/repair-vs-replace-garage-door">repair vs replace</a> is worth discussing. Cosmetic dents on an otherwise sound door rarely justify full replacement.</p>

<h2>How to get an accurate quote in Ottawa</h2>
<ol>
<li>Describe what happened — loud bang, door crooked, opener hums but no movement</li>
<li>Note door size (single vs double) and approximate age if you know it</li>
<li>Ask for scope and price before major work — we quote clearly at Ottawa Garage Tech</li>
<li>For non-urgent requests, use our <a href="/contact">contact form</a> with photos if possible</li>
</ol>

<h2>FAQ: garage door repair pricing in Ottawa</h2>
<h3>Do you charge a service call fee?</h3>
<p>We explain visit and repair pricing before proceeding on significant work. Emergency visits often start around $199 before parts.</p>
<h3>Is spring replacement always done in pairs?</h3>
<p>Usually yes. If one torsion spring broke, the other is often near end of life. Balanced springs protect your opener and reduce repeat calls.</p>
<h3>Are insulated doors worth the extra cost?</h3>
<p>For many attached garages and workshops, yes. See our guide on <a href="/blog/insulated-garage-doors-r18-ottawa">insulated doors up to R-18 in Ottawa</a>.</p>
`,
  },
  {
    slug: "broken-garage-door-spring-ottawa",
    title: "Broken Garage Door Spring in Ottawa: What To Do Next",
    h1: "Broken garage door spring in Ottawa: what to do next",
    desc: "Heard a loud bang in the garage? A broken torsion or extension spring is common in Ottawa. Safety steps, repair costs, and when to call a pro.",
    keywords: "broken garage door spring Ottawa, torsion spring replacement, garage door spring repair",
    date: "2026-02-18",
    category: "Springs",
    readMin: 6,
    imageKey: "springRepair",
    imageAlt: "Residential garage door on a home — broken spring guide",
    relatedServices: ["spring-replacement", "emergency-repair", "maintenance"],
    relatedSlugs: ["garage-door-repair-cost-ottawa", "garage-door-wont-close"],
    body: `
<p>A <strong>broken garage door spring</strong> is one of the most common calls we get from Ottawa homeowners — often after a loud bang from the garage, especially in cold weather. Springs do the heavy lifting; the opener only guides the door. When a spring fails, the door can feel impossibly heavy or hang unevenly. Here is what to do safely and what repair looks like in Ottawa.</p>

<h2>Signs your garage door spring has broken</h2>
<ul>
<li>A sharp bang from the garage (torsion spring unwinding)</li>
<li>Gap in the spring coil above the door or stretched extension springs along the tracks</li>
<li>Door opens a few inches then stops, or feels extremely heavy by hand</li>
<li>Opener strains, hums, or trips but the door barely moves</li>
<li>One side of the door rises faster than the other</li>
</ul>

<h2>Safety first: what not to do</h2>
<p>Do <strong>not</strong> continue running the opener repeatedly — you risk burning out the motor or bending the top section. Do not try to adjust or install torsion springs yourself; they are under high tension and can cause serious injury without proper tools and training.</p>
<p>If the door is stuck open, avoid leaving valuables visible and call for service. If it is stuck closed and your car is inside, mention that when you call — we prioritize those situations when possible.</p>

<h2>Torsion vs extension springs in Ottawa homes</h2>
<p><strong>Torsion springs</strong> mount above the door on a steel tube. They are common on newer and mid-age doors across Kanata, Barrhaven, and Orleans. <strong>Extension springs</strong> run along horizontal tracks on older setups. Both types are matched to door weight — the wrong size shortens opener life and can be unsafe.</p>
<p>Our <a href="/services/spring-replacement">spring replacement service</a> includes correct sizing, balancing the door, and checking cables and rollers while we are on site.</p>

<h2>What does spring replacement cost in Ottawa?</h2>
<p>Most residential spring jobs fall in the <strong>$220–$380</strong> range depending on door size and spring type. Replacing both springs together is standard practice. See our full <a href="/blog/garage-door-repair-cost-ottawa">garage door repair cost guide</a> for other common prices.</p>

<h2>Why springs break more often in winter</h2>
<p>Metal contracts in cold temperatures. A spring near the end of its cycle count is more likely to snap on the coldest mornings — exactly when you need the door for work. An annual <a href="/services/maintenance">tune-up</a> can spot rust, gaps in coils, and balance issues before failure.</p>

<h2>When to call Ottawa Garage Tech</h2>
<p>Call or text <a href="tel:+16139006005">(613) 900-6005</a> for same-day help when scheduling allows. We carry common spring sizes on our trucks for many Ottawa-area jobs completed in one visit. Serving Ottawa, Stittsville, Gloucester, Manotick, Rockland, and surrounding communities — <a href="/areas">view all service areas</a>.</p>
`,
  },
  {
    slug: "insulated-garage-doors-r18-ottawa",
    title: "Insulated Garage Doors Up to R-18: Worth It in Ottawa?",
    h1: "Are insulated garage doors up to R-18 worth it in Ottawa?",
    desc: "Attached garages, workshops, and rooms above the garage — when insulation up to R-18 pays off in Ottawa winters and what to expect on installation.",
    keywords: "insulated garage door Ottawa, R-18 garage door, garage door insulation Ottawa winter",
    date: "2026-01-22",
    category: "Installation",
    readMin: 8,
    imageKey: "insulatedHome",
    imageAlt: "Modern home exterior — insulated garage door options",
    relatedServices: ["garage-door-installation", "weather-sealing", "maintenance"],
    relatedSlugs: ["garage-door-winter-prep-ottawa", "repair-vs-replace-garage-door"],
    body: `
<p>Ottawa winters test every part of your home’s envelope — including the garage door. If your garage shares a wall with heated living space, or you use the space as a workshop, <strong>insulated garage doors with ratings up to R-18</strong> can reduce drafts, condensation, and cold transfer. This article explains when upgrade makes sense, how insulation is measured, and what installation looks like locally.</p>

<h2>What does R-18 mean for a garage door?</h2>
<p>R-value measures resistance to heat flow. Higher numbers mean better insulation. Residential steel doors in Ottawa are often available with insulated panels up to approximately <strong>R-18</strong>, with polyurethane or polystyrene cores sandwiched between steel skins. That is a meaningful step up from single-layer “non-insulated” doors common on older builds.</p>
<p>Insulation helps the panel itself; you still need proper <a href="/services/weather-sealing">weather sealing</a> at the bottom, jambs, and header to cut drafts.</p>

<h2>When insulated doors are worth it in Ottawa</h2>
<ul>
<li><strong>Attached garage</strong> with a bedroom or living space above or beside it</li>
<li><strong>Heated or semi-heated garage</strong> used as a gym, office, or workshop</li>
<li><strong>Frost and condensation</strong> on the inside of the door or floor slab</li>
<li><strong>Street-facing front</strong> where curb appeal and a quieter door matter</li>
<li><strong>Replacing a rusty, thin door</strong> that no longer seals — combine structure and insulation in one project</li>
</ul>
<p>For a detached, unheated garage used only for parking, a well-sealed mid-tier door may be enough. We help you compare options during a free measurement visit.</p>

<h2>Benefits beyond temperature</h2>
<h3>Quieter operation</h3>
<p>Insulated panels tend to rattle less and can dampen street noise — helpful on busy streets in Westboro, Alta Vista, or downtown neighbourhoods.</p>
<h3>Durability</h3>
<p>Double- or triple-layer construction resists dents better than single-sheet steel.</p>
<h3>Energy bills</h3>
<p>The savings alone rarely pay for a door in one season, but comfort and reduced cold spots in adjacent rooms are noticeable — especially in January and February.</p>

<h2>Installation process in Ottawa</h2>
<p>Our <a href="/services/garage-door-installation">installation service</a> includes on-site measurement, panel and colour selection, removal of the old door when quoted, track alignment, spring balancing, sealing, and opener pairing if needed. Most single-car replacements complete in one day once your door arrives.</p>
<p>We install insulated steel panels up to R-18 suited to Ottawa climate — plus classic styles when insulation is less critical.</p>

<h2>Pair insulation with sealing and maintenance</h2>
<p>Even the best insulated panel underperforms with a shredded bottom seal or bent track. Before winter, consider a <a href="/blog/garage-door-winter-prep-ottawa">garage door winter prep checklist</a> or an annual tune-up.</p>

<h2>Get a quote for an insulated door in Ottawa</h2>
<p><a href="/contact">Request a quote</a> or call <a href="tel:+16139006005">(613) 900-6005</a>. We serve Ottawa, Kanata, Barrhaven, Orleans, Nepean, and communities across the region — see our <a href="/gallery">project gallery</a> for recent installs.</p>
`,
  },
  {
    slug: "garage-door-wont-close",
    title: "Garage Door Won't Close? Common Causes and Fixes",
    h1: "Garage door won't close: common causes and fixes",
    desc: "Garage door reverses, stops halfway, or won't shut in Ottawa? Photo-eyes, tracks, springs, and opener limits — troubleshooting and when to call a pro.",
    keywords: "garage door won't close Ottawa, garage door reverses, garage door safety sensors",
    date: "2026-02-05",
    category: "Troubleshooting",
    readMin: 7,
    imageKey: "troubleshooting",
    imageAlt: "Garage door on a house — troubleshooting when it will not close",
    relatedServices: ["opener-service", "emergency-repair", "cable-repair"],
    relatedSlugs: ["broken-garage-door-spring-ottawa", "garage-door-repair-cost-ottawa"],
    body: `
<p>A <strong>garage door that will not close</strong> is more than an inconvenience — it is a security and safety problem. In Ottawa, causes range from misaligned photo-eyes and worn opener gears to broken springs or an off-track panel. This guide walks through safe checks you can do at home and when to schedule professional <a href="/services/emergency-repair">emergency repair</a>.</p>

<h2>Quick checks before you call</h2>
<h3>Photo-eye sensors</h3>
<p>Sensors near the floor must “see” each other. If a bin, shovel, or snow mound blocks the beam, the opener will reverse as a safety feature. Wipe lenses gently and align both brackets so the indicator lights are steady (not blinking on most models).</p>
<h3>Wall button vs remote</h3>
<p>If the door closes when you hold the wall button but not with the remote, the problem may be remote battery or signal — not the door itself. If it will not close on the wall button either, suspect mechanics or opener limits.</p>
<h3>Obstruction on the track</h3>
<p>A bent track pin, debris in the rail, or a damaged roller can bind the door. Look for gaps between rollers and track; do not force the door.</p>

<h2>Mechanical causes that need a technician</h2>
<ul>
<li><strong>Broken spring</strong> — door may feel heavy or crooked; opener cannot lift properly (<a href="/blog/broken-garage-door-spring-ottawa">read more</a>)</li>
<li><strong>Frayed or off-drum cable</strong> — door may hang unevenly; high tension — do not DIY</li>
<li><strong>Off-track door</strong> — often after impact; stop using the opener</li>
<li><strong>Worn opener gear or carriage</strong> — humming motor, little movement</li>
<li><strong>Incorrect force / limit settings</strong> — door hits floor and reverses; needs adjustment after spring changes</li>
</ul>

<h2>Why the door reverses halfway down</h2>
<p>The opener thinks it hit an obstacle. Causes include misaligned sensors, force set too sensitive, a sticking panel, or a binding roller. After any spring replacement, limits and force must be recalibrated — one reason professional balancing matters.</p>
<p>Our <a href="/services/opener-service">opener service</a> covers gears, limits, remotes, and safety testing end-to-end.</p>

<h2>Ottawa weather and closing problems</h2>
<p>Extreme cold can stiffen rollers and thicken grease on the rail. Ice at the threshold can block the seal. Rubber bottom seals that freeze to the floor may need gentle clearing — never yank a stuck door with the opener. See <a href="/blog/garage-door-winter-prep-ottawa">winter prep tips</a> for prevention.</p>

<h2>When this is an emergency</h2>
<p>Call or text <a href="tel:+16139006005">(613) 900-6005</a> if the door is stuck open overnight, hanging on one side, or you suspect a broken spring or cable. We serve Ottawa and suburbs seven days a week, 9 AM – 9 PM, with same-day service when scheduling allows.</p>
`,
  },
  {
    slug: "repair-vs-replace-garage-door",
    title: "Repair vs Replace Your Garage Door: An Ottawa Homeowner Guide",
    h1: "Repair vs replace your garage door: an Ottawa homeowner guide",
    desc: "Rust, noise, poor insulation, repeated breakdowns — when to repair your garage door in Ottawa and when replacement up to R-18 is the better investment.",
    keywords: "repair or replace garage door Ottawa, new garage door vs repair, garage door replacement",
    date: "2026-01-18",
    category: "Buying guide",
    readMin: 7,
    imageKey: "replacement",
    imageAlt: "Home interior and renovation — repair vs replace your garage door",
    relatedServices: ["garage-door-installation", "spring-replacement", "maintenance"],
    relatedSlugs: ["insulated-garage-doors-r18-ottawa", "garage-door-repair-cost-ottawa"],
    body: `
<p>Every homeowner hits the same question eventually: <strong>keep repairing the old door, or invest in a new one?</strong> In Ottawa, freeze-thaw cycles, road salt, and years of daily cycles wear down panels, springs, and hardware. Here is a practical framework we use when advising customers across the city and suburbs.</p>

<h2>When repair is usually the right call</h2>
<ul>
<li>Single issue — one broken spring, one worn roller, misaligned sensor</li>
<li>Panels are structurally sound — no deep rust-through or major dents affecting track travel</li>
<li>Door is less than 10–15 years old with quality hardware</li>
<li>You are satisfied with appearance and insulation level</li>
<li>Repair quote is clearly less than half the cost of a comparable new door</li>
</ul>
<p>Typical repairs — <a href="/services/spring-replacement">springs</a>, <a href="/services/cable-repair">cables</a>, <a href="/services/opener-service">openers</a> — extend life for years when the rest of the system is healthy.</p>

<h2>When replacement makes more sense</h2>
<ul>
<li>Rusted or cracked panels, especially at the bottom sections</li>
<li>Repeated failures every few months — chasing one part after another</li>
<li>Poor insulation on an attached garage — upgrade to doors up to <strong>R-18</strong></li>
<li>Major impact damage or chronic off-track problems from bent tracks</li>
<li>Updating curb appeal before selling — front garage doors dominate street view</li>
<li>Noise and vibration despite tune-ups — worn hinges and thin panels</li>
</ul>

<h2>Cost comparison mindset</h2>
<p>Repairs often run from $150–$400 for common jobs. A new installed door is a larger investment but includes panels, tracks, springs, sealing, and warranty on new hardware. Spread over 15–20 years, replacement can be cheaper than stacking emergency calls on a failing door.</p>
<p>Read our <a href="/blog/garage-door-repair-cost-ottawa">Ottawa repair cost guide</a> for current ranges.</p>

<h2>Insulation and replacement together</h2>
<p>If you are already replacing, choosing an insulated model suited to Ottawa winters is logical for attached garages. We help compare <a href="/blog/insulated-garage-doors-r18-ottawa">insulated options up to R-18</a> during measurement visits.</p>

<h2>Get an honest recommendation</h2>
<p>We are happy to repair when it is the smart choice — no pressure to sell a new door. For a second opinion, <a href="/contact">send us photos</a> or book a visit: <a href="tel:+16139006005">(613) 900-6005</a>. Browse <a href="/services">all services</a> and <a href="/areas">service areas</a>.</p>
`,
  },
  {
    slug: "garage-door-winter-prep-ottawa",
    title: "Prepare Your Garage Door for Ottawa Winter",
    h1: "How to prepare your garage door for Ottawa winter",
    desc: "Cold, ice, and salt — an Ottawa checklist for garage door weather sealing, lubrication, balance checks, and when to book maintenance before deep freeze.",
    keywords: "garage door winter Ottawa, garage door weather seal, garage door maintenance winter",
    date: "2026-02-28",
    category: "Maintenance",
    readMin: 6,
    imageKey: "winterPrep",
    imageAlt: "Snowy home in winter — preparing your garage door for cold weather",
    relatedServices: ["weather-sealing", "maintenance", "spring-replacement"],
    relatedSlugs: ["insulated-garage-doors-r18-ottawa", "broken-garage-door-spring-ottawa"],
    body: `
<p>Ottawa winters are tough on garage doors: metal contracts, grease thickens, seals stiffen, and springs are more likely to snap on the coldest mornings. A short <strong>winter prep routine</strong> in fall can prevent drafts, stuck doors, and emergency calls when you least want them. Here is what we recommend for homeowners from Kanata to Orleans — and when to book professional <a href="/services/maintenance">maintenance</a>.</p>

<h2>Fall garage door checklist</h2>
<h3>Inspect bottom and side seals</h3>
<p>Look for cracked, flat, or missing rubber along the bottom and PVC weatherstrip on the sides. Daylight under a closed door means heated air is escaping. Our <a href="/services/weather-sealing">weather sealing service</a> replaces bottom seals, thresholds, and jambs.</p>
<h3>Test balance (with caution)</h3>
<p>With the opener disconnected per manufacturer instructions, an adult should be able to lift the door smoothly to halfway — it should stay put. If it slams down or shoots up, springs may be out of balance. Do not adjust springs yourself.</p>
<h3>Lubricate sparingly</h3>
<p>Use silicone-based spray on hinges and rollers — not heavy grease that attracts grit. Avoid the plastic gears inside the opener; follow your opener manual.</p>
<h3>Clear tracks and photo-eyes</h3>
<p>Remove leaves and grit from tracks. Keep sensor lenses clean and aligned — snow piles should not block the beam all winter.</p>

<h2>Before the first deep freeze</h2>
<ul>
<li>Schedule a professional tune-up if the door is noisy or over 5 years without service</li>
<li>Replace springs that are past their cycle life — winter is when they fail</li>
<li>Consider insulation upgrades if the garage shares walls with living space (<a href="/blog/insulated-garage-doors-r18-ottawa">R-18 doors</a>)</li>
<li>Keep the area in front of the door shovelled — ice binding the seal can burn out the opener if you force it</li>
</ul>

<h2>During winter operation</h2>
<p>Open and close the door fully — pausing halfway stresses the opener in cold weather. If the door freezes to the floor, do not repeatedly hit the remote; break the ice gently along the seal or call for help.</p>
<p>Salt from the driveway can corrode bottom fixtures and cables — rinse nearby metal occasionally when temperatures allow.</p>

<h2>When to call Ottawa Garage Tech</h2>
<p>Book maintenance or sealing before November when possible — scheduling is easier than in January emergencies. For urgent issues, call or text <a href="tel:+16139006005">(613) 900-6005</a>. We serve Ottawa and surrounding communities — <a href="/faq">FAQ</a> · <a href="/contact">Contact</a>.</p>
`,
  },
];

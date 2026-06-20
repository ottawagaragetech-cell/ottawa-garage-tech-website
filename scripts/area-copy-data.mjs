/** Local hero/inline images and per-neighbourhood prose for area pages. */

export const LOCAL_PHOTOS = [
  { src: "/assets/services/install-ottawa-grey.png", label: "grey raised-panel door install", cap: "Raised-panel install — Ottawa" },
  { src: "/assets/services/install-kanata.png", label: "garage door install in Kanata", cap: "West-end door replacement" },
  { src: "/assets/services/install-barrhaven.png", label: "garage door install in Barrhaven", cap: "South Ottawa install" },
  { src: "/assets/services/install-orleans-double.png", label: "double garage door install", cap: "Double-door install — east end" },
  { src: "/assets/gallery/gallery-barrhaven-grey.png", label: "taupe wood-grain door install", cap: "New door · Barrhaven" },
  { src: "/assets/gallery/install-carp-white.png", label: "white door with windows on brick", cap: "White door · Carp area" },
  { src: "/assets/gallery/gallery-opener-liftmaster.png", label: "Chamberlain opener install", cap: "Chamberlain opener on ceiling" },
  { src: "/assets/gallery/home-orleans-double.png", label: "tan double doors in Orleans", cap: "Orleans double install" },
  { src: "/assets/gallery/home-kanata.png", label: "grey door in Kanata", cap: "Kanata raised panel" },
  { src: "/assets/services/spring-broken-torsion.png", label: "broken torsion spring snapped on shaft", cap: "Broken spring on site" },
  { src: "/assets/services/spring-replacement-parts.png", label: "new torsion springs and hardware", cap: "Springs and hardware" },
  { src: "/assets/services/weather-sealing.png", label: "jamb weatherstrip seal install", cap: "Jamb weather sealing" },
  { src: "/assets/gallery/home-rollers-replacement.png", label: "roller replacement", cap: "Roller and hinge service" },
  { src: "/assets/gallery/home-ottawa-grey.png", label: "grey door on brick home", cap: "Ottawa brick exterior" },
  { src: "/assets/gallery/home-woodgrain-double.png", label: "wood-grain door on stone home", cap: "Wood-grain on stone" },
  { src: "/assets/gallery/home-barrhaven.png", label: "cream door with windows", cap: "Barrhaven door with windows" },
  { src: "/assets/gallery/install-beige-brick.png", label: "beige door on red brick", cap: "Beige door · brick home" },
];

export const TYPICAL_JOBS_DEFAULT = [
  "Snapped torsion or extension springs",
  "Door crooked, off track, or stuck partway",
  "Opener runs but the door barely moves",
  "Frayed cables, worn rollers, or grinding noises",
  "New insulated doors and draft sealing ahead of winter",
];

export const REGION_VISIT = {
  west: {
    heading: "What west-end homeowners can expect",
    points: [
      "Springs sized for door weight — important on wide Kanata and Stittsville doubles",
      "Insulation and seal advice before arctic air off open fields",
      "Scope and price agreed before major work on site",
      "Daily service 7 a.m.–9 p.m., including after-work slots",
    ],
  },
  south: {
    heading: "What south Ottawa homeowners can expect",
    points: [
      "High-cycle family doors get balance checks, not just a quick part swap",
      "Clear estimates on Barrhaven, Riverside South, and rural south calls",
      "Vans stocked for standard doubles common in new subdivisions",
      "Phone-first booking for doors that will not close",
    ],
  },
  east: {
    heading: "What east-end homeowners can expect",
    points: [
      "Storm and ice off-track calls handled with full track inspection",
      "Honest repair vs replace advice on aging Orleans and Gloucester doors",
      "Bilingual scheduling welcome — confirm your address by phone",
      "Evening appointments available seven days a week",
    ],
  },
  central: {
    heading: "What central Ottawa homeowners can expect",
    points: [
      "Careful work in laneways, tight driveways, and heritage streetscapes",
      "Solutions for low headroom and non-standard older openings",
      "Written scope before major repair on rental or owner-occupied homes",
      "Open daily 7 a.m.–9 p.m. for urgent secure-close issues",
    ],
  },
  outer: {
    heading: "What outer-community homeowners can expect",
    points: [
      "Route-based scheduling — call early to reserve your day",
      "Common springs and cables on the van for typical residential widths",
      "Access notes for gravel lanes, acreages, and seasonal properties",
      "On-site measurement when specialty sizes are required",
    ],
  },
};

/** hero / inline = index into LOCAL_PHOTOS */
export const AREA_COPY = {
  ottawa: {
    hero: 0,
    inline: 6,
    paragraphs: [
      "From Centretown row houses near the canal to infill near the Greenbelt, Ottawa garages sit close to sidewalks, laneways, and busy family schedules. We see a mix of original single-layer steel doors, newer insulated replacements, and tight driveways where careful balancing matters.",
      "Central and older pockets often still run extension springs on shorter tracks, while newer infill tends toward standard torsion setups. Salt, freeze-thaw, and heavy daily cycles wear rollers and bottom seals first — we check the full system, not just the part that failed.",
      "If you are downtown or on a heritage streetscape, we plan access and protect walkways while we work. Scope and price are agreed before major repair or a full door swap.",
      "We route central Ottawa daily — from the Glebe and Sandy Hill to Alta Vista and Hunt Club — so evening and weekend slots are often available when you call before 7 p.m.",
    ],
    jobs: [
      "Off-track doors after snow banks or tight parking",
      "Snapped springs on older extension systems",
      "Opener strain on heavy double doors",
      "Drafty bottom seals on attached garages",
      "Curb-appeal door upgrades before listing",
    ],
    neighborhoods: [
      "Centretown",
      "The Glebe",
      "Sandy Hill",
      "Alta Vista",
      "Hunt Club",
      "Vanier",
      "Westboro",
      "Orleans corridor",
    ],
  },
  kanata: {
    hero: 1,
    inline: 8,
    heroIntro:
      "Kanata homeowners call us for snapped torsion springs on double garages, off-track doors after west-end snow, and quieter opener upgrades in Bridlewood and Kanata North — with clear pricing before major work.",
    keywords:
      "garage door repair Kanata, garage door springs Kanata North, garage door installation Bridlewood, garage door opener Kanata, garage door service Beaverbrook",
    visit: {
      heading: "What Kanata homeowners can expect",
      points: [
        "Springs sized to actual door weight on 16-foot doubles common in Katimavik and Glen Cairn",
        "Insulation and bottom-seal advice before cold air off the open fields hits attached garages",
        "Belt-drive opener options when bedrooms sit above high-cycle Kanata North garages",
        "Same west-end routes as Stittsville — mention your community when booking for spring stock",
        "Daily service 7 a.m.–9 p.m., including after-work slots near the tech park",
      ],
    },
    neighborhoods: [
      "Beaverbrook",
      "Katimavik",
      "Glen Cairn",
      "Bridlewood",
      "Kanata Lakes",
      "Kanata North",
      "Morgan's Grant",
      "Marchwood",
      "South March",
    ],
    paragraphs: [
      "Kanata’s mix of 1980s–2000s subdivisions, townhome rows near the Tanger Outlets, and newer infill near Bridlewood means plenty of standard 16-foot doubles with torsion springs over the header. Many homeowners run the door four or five times a day — springs and rollers wear on a predictable cycle.",
      "West-end cold hits hard off the open fields: insulated panels and tight bottom seals make a real difference for garages under bedrooms in Kanata North and Morgan's Grant. We often upgrade noisy chain-drive openers to quieter belt drives when the door itself is still sound.",
      "Whether you are off Castlefrank, in Katimavik, or closer to the tech park, we size springs to door weight and test balance before we leave — especially after any spring or cable work on Beaverbrook and Glen Cairn doubles.",
      "Kanata Lakes and South March homes sometimes have wider or custom-height openings. We measure on site rather than guessing spring length from a phone photo — the wrong size leaves a heavy door or a dangerous over-springed setup.",
      "Townhome and row-house garages near Kanata Centrum share tight driveways. We plan parking and protect walkways while we work, and we explain track alignment issues that start with worn rollers rather than a bent panel.",
      "Kanata North and south share the same van routes as Stittsville and Richmond — mention your community when booking so we confirm timing and spring stock for double-wide doors.",
    ],
    jobs: [
      "Torsion spring failures on double-wide doors in Bridlewood",
      "Townhome doors binding on shared driveways near Centrum",
      "Belt-drive opener upgrades for bedrooms above Kanata North",
      "Insulated door replacements in Kanata Lakes and Marchwood",
      "Tune-ups before winter on high-cycle Katimavik doors",
      "Off-track panels after snow banks on Castlefrank-area streets",
    ],
    seoProse: `<h2>Common garage door issues in Kanata</h2>
<p>Most Kanata calls start with a loud snap from the garage — a torsion spring that finally gave out after thousands of cycles. Doubles on busy streets in Katimavik and Glen Cairn are especially hard on hardware. If the door feels heavy by hand or the opener strains, schedule <a href="/services/spring-replacement">spring replacement</a> before a second spring fails or cables fray.</p>
<p>West-end wind and temperature swings also punish bottom seals and roller hinges. A door that scrapes on one side often needs track adjustment and new rollers, not just a quick shove back on track. For doors that will not close safely, see our <a href="/services/emergency-repair">emergency repair</a> page — we treat secure-close issues as priority on Kanata routes.</p>
<h3>New doors and upgrades in Kanata</h3>
<p>When rust, noise, or poor insulation outweigh repair costs, we measure your opening and quote an installed door suited to Ottawa winters. Many Kanata North homeowners choose insulated steel with wood-grain texture to match brick and stone exteriors. Browse our <a href="/gallery">gallery</a> for recent Kanata-area installs, or read <a href="/services/garage-door-installation">garage door installation</a> for what is included in a typical swap.</p>
<p>Opener upgrades are common where chain drives rattle into bedrooms above the garage. We service LiftMaster and Chamberlain units and can recommend quieter belt-drive options during a <a href="/services/opener-service">opener service</a> visit. Annual <a href="/services/maintenance">maintenance tune-ups</a> catch worn cables and hinges before a busy January commute turns into a stuck door.</p>`,
    lead: {
      priceNote:
        "Kanata doubles: one spring $235–$350 · both $450–$550 · priority safety visits from $215 · tune-ups from $165",
      urgency: "Door won't close or hear a spring snap? Call now — we run Kanata routes daily.",
      midCtaHeading: "Broken spring or stuck door in Kanata?",
      midCtaText:
        "Stop using the opener on an unbalanced door. Call or text and mention your neighbourhood — Bridlewood, Katimavik, Kanata North — so we confirm timing and parts.",
      asideHeading: "Book Kanata service",
      asideNote: "Fastest for urgent doors. Form works well for install quotes.",
      asidePoints: [
        "Springs sized to your door — not a generic kit",
        "West-end van stock for common doubles",
        "Price agreed before major work",
      ],
      steps: [
        "Call or text (613) 900-6005 — mention Kanata and your cross-street",
        "We secure the door, diagnose springs, tracks, cables, or opener strain",
        "You get a clear quote on site before repair or install work starts",
        "We complete the job, test balance, and adjust opener limits if needed",
      ],
      faqs: [
        {
          q: "Do you offer same-day garage door repair in Kanata?",
          a: "Often yes when you call early — especially for doors that will not close. We route Kanata with Stittsville and Richmond daily. Phone is the fastest way to hold a slot.",
        },
        {
          q: "How much does spring replacement cost on a Kanata double garage?",
          a: "Most Kanata double-door jobs need both springs — typically $450–$550. A single spring is $235–$350 when only one side needs replacement. We measure and quote on site before work starts.",
        },
        {
          q: "Do you serve Kanata North and Bridlewood?",
          a: "Yes — Beaverbrook, Katimavik, Glen Cairn, Bridlewood, Kanata Lakes, Morgan's Grant, and nearby streets are all on our west-end routes.",
        },
        {
          q: "Can I book an evening appointment in Kanata?",
          a: "Yes — we are open 7 a.m.–9 p.m. every day, including after-work slots near the tech park and Kanata Centrum area.",
        },
      ],
      conversionProse: `<h2>What Kanata garage door repair usually costs</h2>
<p>Transparent pricing builds trust — here are typical ranges we quote on site in Kanata (final price depends on door size and parts):</p>
<ul>
<li><strong>One spring</strong> — $235–$350</li>
<li><strong>Both springs (matched pair)</strong> — $450–$550 on most residential doubles</li>
<li><strong>Emergency / safety visit</strong> — from $215 before parts</li>
<li><strong>Cable repair</strong> — $180–$285 when both cables are serviced</li>
<li><strong>Tune-up</strong> — from $165 with a written summary</li>
<li><strong>New door installation</strong> — quoted after measurement (see our <a href="/services/garage-door-installation">installation page</a>)</li>
</ul>
<p><strong>When to call:</strong> doors that will not close, hanging panels, snapped springs, or anything that feels unsafe. <strong>When to use the form:</strong> new door quotes, colour and window choices, or scheduling questions. Read more in our <a href="/blog/garage-door-repair-cost-ottawa">Ottawa pricing guide</a>.</p>`,
      ctaHeading: "Get Kanata garage door help today",
      ctaSubtext:
        "Call or text for urgent springs and off-track doors. Email a message for install quotes — we reply within 2 hours during business hours.",
    },
  },
  stittsville: {
    hero: 1,
    inline: 12,
    heroIntro:
      "Stittsville garage door help for village-era singles, triple-wide new builds near Jackson Trails, and commuter homes that need springs fixed before the morning drive — stocked vans on west-end routes daily.",
    keywords:
      "garage door repair Stittsville, garage door springs Stittsville, garage door service Fernbank, garage door opener Stittsville, garage door installation Jackson Trails",
    visit: {
      heading: "What Stittsville homeowners can expect",
      points: [
        "Correct spring weight on singles near the village core and triple-wide bays on newer streets",
        "Cold-weather spring stock for early-morning failures before the Kanata commute",
        "Access planning for longer driveways toward Carp and Huntley Road",
        "Weather sealing and roller checks ahead of first deep freeze off open fields",
        "Phone-first booking — fastest way to confirm same-day west-end routing",
      ],
    },
    neighborhoods: [
      "Crossing Bridge",
      "Bryanston",
      "Jackson Trails",
      "Fernbank",
      "Fairwinds",
      "Amberway",
      "Timbermere",
      "Huntley",
    ],
    paragraphs: [
      "Stittsville blends village-era homes near the main street with large subdivisions west toward Fernbank and Huntley. Garages range from single bays on older lots to triple-wide setups on newer streets — each needs correct spring weight and track alignment.",
      "Commuter traffic means early-morning door cycles in January, when cold metal is most likely to snap a tired spring. We carry common sizes so many Stittsville calls finish in one visit without a return trip for parts.",
      "Jackson Trails and Fairwinds feature uniform double and triple garages built for daily family use. We match torsion springs to door weight rather than swapping in a generic kit that leaves the opener overworked.",
      "Older pockets near Crossing Bridge and the village core sometimes still run extension springs on shorter tracks. We explain when a controlled upgrade to a modern torsion setup is worth it versus replacing like-for-like.",
      "Properties toward Carp and the west often have longer driveways and rural-style access. We confirm timing and van parking when you book so the crew arrives with the right hardware the first time.",
      "Stittsville shares west-end routes with Kanata and Richmond — mention your street off Abbott, Fernbank, or Huntmar when you call so we align spring stock with typical door widths in your area.",
    ],
    jobs: [
      "Extension springs on older village homes near Main Street",
      "Double-door balance issues on Jackson Trails new builds",
      "Cold-weather spring breaks on commute schedules",
      "Weather sealing before first deep freeze in Amberway",
      "Opener travel limits after spring changes in Bryanston",
      "Roller and hinge wear on high-cycle Fernbank doubles",
    ],
    seoProse: `<h2>Garage door repair in Stittsville</h2>
<p>Stittsville sits between village-scale lots and fast-growing subdivisions, so we see everything from original extension-spring doors to brand-new insulated doubles. A door that suddenly feels twice as heavy usually means a broken spring — book <a href="/services/spring-replacement">spring replacement</a> before operating the opener on a half-balanced door.</p>
<p>Long driveways and west-end wind make <a href="/services/weather-sealing">weather sealing</a> worthwhile on attached garages, especially where bedrooms sit above the bay. Grinding or scraping noises often trace to worn rollers; a <a href="/services/maintenance">maintenance tune-up</a> is cheaper than an off-track emergency after the next ice storm.</p>
<h3>Installations and opener work</h3>
<p>New-build streets in Jackson Trails and Fairwinds sometimes need opener programming, sensor alignment, or a full <a href="/services/garage-door-installation">door installation</a> when builders' spec doors underperform. We measure openings on site and quote installed doors that suit Stittsville exteriors and Ottawa winters.</p>
<p>For doors that will not close or hang crooked after a cable slip, see <a href="/services/cable-repair">cable repair</a> and <a href="/services/emergency-repair">emergency repair</a>. Calling early helps us slot your address into the same west-end run as Kanata and Richmond.</p>`,
    lead: {
      priceNote:
        "Stittsville: one spring $235–$350 · both $450–$550 · extension systems quoted on site · tune-ups from $165",
      urgency: "Spring broke before the morning commute? Call — many Stittsville jobs finish in one visit.",
      midCtaHeading: "Garage door trouble in Stittsville?",
      midCtaText:
        "Village singles and Jackson Trails triples need different spring sizes. Call with your street and we will confirm west-end routing and parts.",
      asideHeading: "Book Stittsville service",
      asideNote: "Mention Abbott, Fernbank, or Huntmar when you call.",
      asidePoints: [
        "Common spring sizes on the van",
        "Cold-weather priority for stuck doors",
        "Clear quote before major work",
      ],
      steps: [
        "Call or text — tell us Stittsville and whether the door is stuck open or closed",
        "We diagnose extension or torsion systems and check balance and cables",
        "On-site quote before springs, rollers, or opener work begins",
        "Repair and test — many calls done in one trip",
      ],
      faqs: [
        {
          q: "Can you fix a garage door before my commute from Stittsville?",
          a: "We prioritize doors that will not secure and early-morning calls when routes allow. Call as soon as you find the problem — we carry common spring sizes for typical Stittsville door widths.",
        },
        {
          q: "Do you work on older village homes and new subdivisions?",
          a: "Yes — extension springs near Main Street, torsion doubles in Jackson Trails and Fairwinds, and triple-wide bays on newer streets are all common for us.",
        },
        {
          q: "How do I get a quote for a new door in Stittsville?",
          a: "Use our contact form with your neighbourhood and a short description, or call to book a measurement visit. Installed doors are quoted after we see the opening.",
        },
        {
          q: "Is there an extra trip charge for Stittsville?",
          a: "Stittsville is on our regular west-end routes with Kanata — no surprise travel fees. You receive a clear on-site estimate before work starts.",
        },
      ],
      conversionProse: `<h2>Stittsville pricing and how to book</h2>
<p>Most repair calls in Stittsville fall into these ranges (confirmed on site):</p>
<ul>
<li><strong>One torsion spring</strong> — $235–$350</li>
<li><strong>Both springs (matched pair)</strong> — $450–$550 on typical doubles and triples</li>
<li><strong>Extension spring work</strong> — quoted after we inspect older village setups</li>
<li><strong>Priority safety visit</strong> — from $215 when the door will not close</li>
<li><strong>Maintenance tune-up</strong> — from $165 — smart before the first deep freeze</li>
</ul>
<p>Phone is best for urgent issues and same-day timing. The <a href="/contact?area=stittsville">contact form</a> works well for installation quotes and non-urgent scheduling. See <a href="/faq">FAQ</a> for springs, openers, and winter prep.</p>`,
      ctaHeading: "Book Stittsville garage door service",
      ctaSubtext:
        "Call or text for spring failures and stuck doors. Send a message for new door quotes and evening scheduling.",
    },
  },
  barrhaven: {
    hero: 2,
    inline: 5,
    heroIntro:
      "Barrhaven families rely on double garages every day — we fix snapped springs in Chapman Mills, realign off-track doors in Half Moon Bay, and install insulated replacements on south Ottawa routes with clear on-site estimates.",
    keywords:
      "garage door repair Barrhaven, garage door springs Chapman Mills, garage door installation Half Moon Bay, garage door opener Barrhaven, garage door service Longfields",
    visit: {
      heading: "What Barrhaven homeowners can expect",
      points: [
        "High-cycle family doors get balance checks — not just a quick spring swap on doubles",
        "On-site quotes for cream, grey, and window layouts on front-facing corner lots",
        "Track and roller fixes when bikes, nets, or snow narrow the opening",
        "LiftMaster and Chamberlain diagnostics with stock for standard south-end widths",
        "Same routes as Riverside South and Findlay Creek — evening slots often available",
      ],
    },
    neighborhoods: [
      "Chapman Mills",
      "Half Moon Bay",
      "Longfields",
      "Stonebridge",
      "Knollsbrook",
      "Heart's Desire",
      "Barrhaven on the Green",
      "Pheasant Run",
    ],
    paragraphs: [
      "Barrhaven’s south-end subdivisions — Chapman Mills, Half Moon Bay, Longfields — are built around double garages and daily family use. Raised-panel steel doors and standard torsion springs are the norm; we match parts to door weight, not a one-size kit.",
      "Newer streets still see off-track calls when basketball nets, bikes, or packed snow narrow the opening. We realign tracks, replace worn rollers, and explain what caused the bind so it does not repeat on the next school-day rush.",
      "For front-facing garages on corner lots in Stonebridge and Knollsbrook, colour and window layout matter as much as insulation. We measure on site and quote installed doors that suit Barrhaven exteriors and Ottawa winters.",
      "Heart's Desire and Pheasant Run see the same high-cycle wear: opener strain after a spring ages out, frayed cables on doors that still look fine from the curb, and bottom seals that let slush into attached mudrooms.",
      "Many Barrhaven homes use 16-foot doubles with bedrooms or playrooms above. Quieter belt-drive openers and properly balanced doors make a noticeable difference — we test balance by hand after every spring or cable job.",
      "Riverside South and Findlay Creek are on the same south-end routes as Barrhaven — many of our Barrhaven gallery photos are from installs minutes from your neighbourhood.",
    ],
    jobs: [
      "Broken springs on high-traffic Chapman Mills doubles",
      "Off-track panels after driveway obstructions in Half Moon Bay",
      "Cream and grey door replacements with windows in Stonebridge",
      "LiftMaster and Chamberlain opener repairs in Longfields",
      "Bottom seal replacement on attached Knollsbrook garages",
      "Cable fray on doors still running on one good spring",
    ],
    seoProse: `<h2>Why Barrhaven garage doors wear faster</h2>
<p>South Ottawa subdivisions were designed around two-car garages and school-run schedules — that means more cycles per year than many older Ottawa neighbourhoods. When a torsion spring snaps in Chapman Mills or Longfields, the door should stay put until <a href="/services/spring-replacement">springs are replaced</a> in matched pairs and the balance is rechecked.</p>
<p>Off-track calls are common when rollers are already worn and something blocks the path — sports equipment, recycling bins, or frozen slush. We inspect the full track, not only pop the panel back in. For urgent secure-close problems, see <a href="/services/emergency-repair">emergency repair</a>.</p>
<h3>New doors and curb appeal in Barrhaven</h3>
<p>Barrhaven homeowners often upgrade for appearance as much as function — taupe wood-grain steel, window layouts, and insulated panels that cut noise into the house. Our <a href="/services/garage-door-installation">installation service</a> includes measurement, haul-away, and alignment; the <a href="/gallery">gallery</a> shows recent south-end work including Barrhaven grey and cream installs.</p>
<p>Opener issues after spring work usually mean travel limits or force settings need adjustment — a short <a href="/services/opener-service">opener service</a> visit beats replacing a motor that is still sound. Ask about <a href="/services/weather-sealing">weather sealing</a> before winter; attached garages in Half Moon Bay and Stonebridge benefit from tight jambs and bottom rubber.</p>`,
    lead: {
      priceNote:
        "Barrhaven doubles: one spring $235–$350 · both $450–$550 · emergency visits from $215 · new doors quoted on site",
      urgency: "Door stuck or spring snapped in Chapman Mills or Longfields? Call — south-end routes run daily.",
      midCtaHeading: "High-cycle door wearing out in Barrhaven?",
      midCtaText:
        "School-run schedules are hard on springs and rollers. Call or text with your subdivision — we will confirm south Ottawa timing and parts.",
      asideHeading: "Book Barrhaven service",
      asideNote: "Same routes as Riverside South and Findlay Creek.",
      asidePoints: [
        "Balance checks on busy family doubles",
        "LiftMaster & Chamberlain diagnostics",
        "On-site install quotes with colour options",
      ],
      steps: [
        "Call or text — say Barrhaven and whether the door is crooked, noisy, or won't move",
        "We inspect springs, cables, tracks, and opener strain from daily use",
        "Clear written scope and price before parts and labour",
        "Repair or install, then test safety sensors and balance",
      ],
      faqs: [
        {
          q: "How fast can you get to Barrhaven for an emergency?",
          a: "Phone is fastest — we treat secure-close issues as priority on south-end routes. Call early in the day for the best chance of same-day service in Chapman Mills, Half Moon Bay, or Longfields.",
        },
        {
          q: "Do you install new garage doors in Barrhaven?",
          a: "Yes — we measure on site and quote installed insulated doors, including cream, grey, and wood-grain options popular on Barrhaven front garages. See our gallery for recent south-end work.",
        },
        {
          q: "Why do Barrhaven garage door springs break sooner?",
          a: "Double garages on daily school and activity schedules mean more open-close cycles per year. Correct spring sizing and periodic tune-ups extend life — we replace in matched pairs and rebalance.",
        },
        {
          q: "Can you fix an off-track door after kids' gear blocked the opening?",
          a: "Yes — we realign tracks, replace worn rollers, and explain what caused the bind so it is less likely to repeat on the next busy morning.",
        },
      ],
      conversionProse: `<h2>Barrhaven repair pricing — what to expect</h2>
<p>South Ottawa families usually ask about springs first. Typical on-site ranges:</p>
<ul>
<li><strong>One spring</strong> — $235–$350</li>
<li><strong>Both springs (double door)</strong> — $450–$550</li>
<li><strong>Emergency safety visit</strong> — from $215</li>
<li><strong>Opener repair</strong> — often from $210; new units quoted by model</li>
<li><strong>Weather sealing</strong> — from $260 before winter</li>
<li><strong>Full door replacement</strong> — measured and quoted in person</li>
</ul>
<p><strong>Call now</strong> if the door will not close or hangs uneven — do not leave the home unsecured. Use the <a href="/contact?area=barrhaven">quote form</a> for new door colours, windows, and install scheduling. Browse <a href="/gallery">recent Barrhaven installs</a> for ideas.</p>`,
      ctaHeading: "Book Barrhaven garage door service",
      ctaSubtext:
        "Call or text for broken springs and off-track doors. Email us for cream, grey, and windowed install quotes.",
    },
  },
  nepean: {
    hero: 5,
    inline: 9,
    heroIntro:
      "Nepean garage door service from Merivale and Baseline to Centrepointe and Craig Henry — extension and torsion springs, rental turnovers, opener fixes, and insulated upgrades on mixed-era west-south streets.",
    keywords:
      "garage door repair Nepean, garage door springs Centrepointe, garage door service Craig Henry, garage door opener Merivale, garage door installation Nepean",
    visit: {
      heading: "What Nepean homeowners can expect",
      points: [
        "Experience with both extension and torsion systems on 1970s–1990s Nepean stock",
        "Fast turnaround when a rental or shared driveway door will not secure overnight",
        "Tune-ups along the transit corridor where vibration loosens hinges and rollers",
        "Insulated replacement quotes for raised-ranch garages near Centrepointe",
        "Mobile service 7 a.m.–9 p.m. across Nepean, Barrhaven border streets, and Bells Corners",
      ],
    },
    neighborhoods: [
      "Centrepointe",
      "Craig Henry",
      "Merivale Gardens",
      "Bells Corners",
      "College Square",
      "City View",
      "Queensway Terrace",
      "Parkwood Hills",
    ],
    paragraphs: [
      "Nepean stretches from established streets near Merivale and Baseline to mature areas around Centrepointe and Craig Henry. You will find 1970s–1990s homes with original doors next to renovated facades — extension springs still appear alongside modern torsion setups.",
      "Basement apartments and in-law suites sometimes share driveways in City View and Parkwood Hills; we work cleanly and keep lanes clear. Rentals often need fast turnaround when a door will not close — phone is the best way to reach us.",
      "Along the transit corridor, vibration and frequent cycling can loosen hinge hardware. A tune-up often catches worn rollers before they derail the door on a Merivale-area commute morning.",
      "Centrepointe and Craig Henry mix 1980s raised ranches with renovated fronts — we see both extension upgrades and full door replacements in the same week. We explain when repair still makes sense versus a new insulated door.",
      "Bells Corners and College Square include townhomes and singles with varied ceiling heights. Low-headroom tracks and older opener mounts need careful measurement before ordering hardware.",
      "Nepean borders Barrhaven and Kanata routes — if you are off Greenbank, Woodroffe, or the Queensway corridors, mention your cross-street when booking so we confirm south- or west-end van timing.",
    ],
    jobs: [
      "Extension spring systems near Merivale corridor",
      "Rental unit doors that will not secure overnight",
      "Noisy rollers on older Algonquin-area homes",
      "Opener sensor alignment on busy Centrepointe driveways",
      "Insulated upgrades on 1980s raised-ranch garages",
      "Cable replacement on doors with one fatigued torsion spring",
    ],
    seoProse: `<h2>Garage doors across Nepean's mixed housing stock</h2>
<p>Unlike uniform new subdivisions, Nepean combines decades of housing styles — so we diagnose what is actually on your ceiling before quoting. Extension springs still show up near older Merivale pockets; most Centrepointe and Craig Henry doubles use standard torsion tubes. Operating a door with a visible gap in the spring is unsafe; schedule <a href="/services/spring-replacement">spring replacement</a> and keep the opener off until balance is restored.</p>
<p>Landlords and shared-driveway properties need doors that close and lock reliably. We prioritize secure-close issues and document what was replaced for turnover files. See <a href="/services/emergency-repair">emergency repair</a> when a door is crooked or hanging by a cable.</p>
<h3>Upgrades and maintenance in Nepean</h3>
<p>Renovated raised ranches often deserve a quieter, better-sealed door to match new siding and windows. We provide on-site quotes for <a href="/services/garage-door-installation">full installation</a> and can suggest insulation levels that help heated garages near Baseline and College Square.</p>
<p>Transit vibration and daily cycles loosen rollers and opener chains over time. An annual <a href="/services/maintenance">maintenance tune-up</a> catches small problems before they become <a href="/services/cable-repair">cable repairs</a> or off-track panels. For drafty jambs on older bays, <a href="/services/weather-sealing">weather sealing</a> is a practical winter prep step.</p>`,
    lead: {
      priceNote:
        "Nepean: one spring $235–$350 · both $450–$550 · extension systems quoted on site · rentals prioritized when door won't close",
      urgency: "Rental or shared driveway door won't secure? Call — we turn around Nepean safety calls quickly.",
      midCtaHeading: "Garage door issue in Nepean?",
      midCtaText:
        "Extension and torsion systems need different fixes. Call with your area — Centrepointe, Craig Henry, Merivale — and describe what the door is doing.",
      asideHeading: "Book Nepean service",
      asideNote: "Fast for secure-close issues. Form ideal for upgrade quotes.",
      asidePoints: [
        "1970s–1990s and modern systems",
        "Rental-friendly turnaround",
        "Insulated upgrade quotes on site",
      ],
      steps: [
        "Call or text — mention Nepean, your street, and if the door is a safety issue",
        "We identify extension vs torsion hardware and inspect cables and balance",
        "Quote repair or replacement options in plain language",
        "Complete work and leave the door balanced and secure",
      ],
      faqs: [
        {
          q: "Do you repair extension spring doors in older Nepean homes?",
          a: "Yes — we still service extension systems near Merivale and older pockets, and advise when upgrading to a modern torsion setup is worth the investment.",
        },
        {
          q: "Can landlords get fast service in Nepean?",
          a: "We prioritize doors that will not close on rentals and shared driveways. Call for the fastest dispatch; mention if tenants need access restored the same day.",
        },
        {
          q: "Do you serve Centrepointe and Craig Henry?",
          a: "Yes — along with Merivale Gardens, Bells Corners, College Square, City View, and Queensway Terrace corridors on our south-west routes.",
        },
        {
          q: "Should I repair or replace my Nepean garage door?",
          a: "If the door is structurally sound and only springs or rollers failed, repair often makes sense. Rusted panels, poor insulation, and chronic noise on 1980s doors may justify a measured replacement — we quote both paths honestly.",
        },
      ],
      conversionProse: `<h2>Nepean garage door costs and booking tips</h2>
<p>Nepean's mixed housing stock means prices depend on what is on your ceiling — we always inspect first. Common ranges:</p>
<ul>
<li><strong>One torsion spring</strong> — $235–$350</li>
<li><strong>Both springs (matched pair)</strong> — $450–$550 on standard doubles</li>
<li><strong>Extension spring repair</strong> — quoted after inspection</li>
<li><strong>Emergency visit</strong> — from $215 when the door is unsafe or unsecured</li>
<li><strong>Tune-up</strong> — from $165 — useful along the transit corridor</li>
<li><strong>Full replacement</strong> — on-site quote for raised ranches and renovated fronts</li>
</ul>
<p>Call for anything that affects security tonight. Use the <a href="/contact?area=nepean">contact form</a> for insulated upgrade quotes near Baseline or College Square. Compare repair vs replace in our <a href="/blog/repair-vs-replace-garage-door">guide</a>.</p>`,
      ctaHeading: "Get Nepean garage door help",
      ctaSubtext:
        "Call or text for urgent and rental turnovers. Message us for replacement quotes on older raised-ranch garages.",
    },
  },
  orleans: {
    hero: 3,
    inline: 7,
    paragraphs: [
      "Orleans — from Chapel Hill and Fallingbrook to newer Avalon and Notting Gate — is dominated by double garages and commuter schedules. East-end storms and wet snow sometimes push doors off track when rollers are already worn.",
      "Many Orleans homes use standard insulated steel doubles; we help compare panel styles and insulation levels when rust or noise finally outweigh repair costs.",
      "Describe the issue by phone and we will confirm timing for your street off Innes, St. Joseph, or Tenth Line.",
      "Double-door replacements are common in Fallingbrook and Avalon — we carry photos of recent tan and charcoal installs on Orleans area pages and in our gallery for colour ideas.",
    ],
    jobs: [
      "Storm-related off-track repairs in Fallingbrook",
      "Double-door installs on Innes corridor",
      "Spring fatigue after heavy seasonal use",
      "Tan and charcoal door colour updates",
      "Opener gear repairs on aging units",
    ],
    neighborhoods: [
      "Chapel Hill",
      "Fallingbrook",
      "Avalon",
      "Notting Gate",
      "Orléans Village",
      "Châteauneuf",
      "Tenth Line",
      "Innes corridor",
    ],
  },
  gloucester: {
    hero: 3,
    inline: 10,
    paragraphs: [
      "Gloucester covers bungalow courts near Blair and Ogilvie to townhomes off Montreal Road. Garages are often single or one-and-a-half width with limited headroom — low-headroom track kits and correct spring length matter.",
      "Proximity to the 174 means many doors cycle before dawn; worn cables and springs fail without much warning. We secure the door first, then quote repair or replacement options in plain language.",
      "Multi-unit driveways need coordination; tell us about shared access when you call so we arrive prepared.",
    ],
    jobs: [
      "Low-headroom track adjustments",
      "Cable failures on older bungalow doors",
      "Townhome doors stuck after power outages",
      "Sensor issues on short driveways",
      "Seal replacement on 1960s–70s builds",
    ],
    neighborhoods: [
      "Carson Grove",
      "Pineview",
      "Cyrville",
      "Beacon Hill North",
      "Blair Road",
      "Montreal Road",
      "Ogilvie",
    ],
  },
  manotick: {
    hero: 16,
    inline: 11,
    paragraphs: [
      "Manotick mixes village character near the dam and Watson’s Mill with estate properties and rural lots toward Rideau Forest. Oversized or custom-width doors need heavier springs and careful balancing — we measure before we order parts.",
      "Longer driveways and detached garages see more temperature swing; bottom seals and threshold bars are common pre-winter requests. Mention gravel or long access when you book.",
      "Heritage-style carriage doors and modern insulated steel sit side by side on the same street; hardware is never interchangeable without a proper weigh-in.",
    ],
    jobs: [
      "Heavy springs on wide or custom openings",
      "Detached garage doors exposed to wind",
      "Carriage-style hardware adjustments",
      "Threshold and bottom seal upgrades",
      "Rural-lot scheduling by phone",
    ],
    neighborhoods: [
      "Manotick Village",
      "Rideau Forest",
      "Mahogany",
      "Miller's Farm",
      "Sunset Shores",
      "Watson's Mill",
    ],
  },
  richmond: {
    hero: 1,
    inline: 13,
    paragraphs: [
      "Richmond and the west rural line include village homes, hobby farms, and newer builds toward Bells Corners. Some shops have taller openings or adapted barn bays — we assess weight and track condition on site.",
      "Dust and gravel driveways accelerate roller wear; sealed rollers and periodic tune-ups help when the door is a workshop entrance.",
      "Distance from central Ottawa means we batch outer-west routes — call early in the week if you need a specific day.",
    ],
    jobs: [
      "Worn rollers on workshop and farm garages",
      "Torsion upgrades from extension systems",
      "Wind-related off-track on exposed bays",
      "Opener installs with battery backup",
      "Seasonal maintenance on high-lift doors",
    ],
    neighborhoods: [
      "Richmond Village",
      "Fallowfield",
      "Bells Corners border",
      "Twin Elm",
      "Franktown Road",
    ],
  },
  carp: {
    hero: 5,
    inline: 2,
    paragraphs: [
      "Carp and the western rural fringe have larger lots, detached garages, and doors that face open fields. Wind load and temperature swings stress springs and top fixtures more than in suburban courts.",
      "Ice at the threshold is common on unheated bays — we replace crushed seals and adjust closing force so the opener is not fighting frozen rubber.",
      "For oversized equipment storage doors, share approximate width and height when you call so we bring the right spring stock.",
    ],
    jobs: [
      "Spring breaks on cold rural mornings",
      "Bottom seal freeze and threshold ice",
      "Heavy-duty roller upgrades",
      "Detached garage opener replacements",
      "Track reinforcement on wide openings",
    ],
    neighborhoods: [
      "Carp Village",
      "Huntley",
      "Corkery",
      "West Carleton",
      "Kinburn",
    ],
  },
  rockland: {
    hero: 3,
    inline: 1,
    paragraphs: [
      "Rockland and Clarence-Rockland blend riverside homes, new subdivisions, and francophone neighbourhoods. Garages facing winter wind off the Ottawa River often need better sealing and insulation.",
      "Commutes into Orleans or downtown mean reliable morning operation matters. We prioritize doors that will not close when you call from Laurier, St. Joseph, or streets off Highway 174.",
      "Bilingual scheduling is fine — describe the problem and we confirm coverage for your address.",
    ],
    jobs: [
      "Wind-driven draft sealing on river lots",
      "Morning spring failures on commute homes",
      "Double-door installs on new Rockland builds",
      "Opener safety tests after power blips",
      "Rusty panel assessment before winter",
    ],
    neighborhoods: [
      "Rockland Centre",
      "Laurier",
      "St. Joseph",
      "Clarence Creek",
      "Bourget",
      "Hammond",
    ],
  },
  kemptville: {
    hero: 4,
    inline: 11,
    paragraphs: [
      "Kemptville and north Grenville range from in-town bungalows to acreages with detached shops. We travel from Ottawa with common parts; specialty sizes may need a follow-up once measured.",
      "Agricultural and hobby-shop doors sometimes use heavier hardware than standard residential kits — we verify weight and headroom before quoting.",
      "Book a day ahead when possible so we can route south efficiently.",
    ],
    jobs: [
      "Shop door balance and spring sizing",
      "Residential spring replacement in town",
      "Weather sealing on unheated detached bays",
      "Opener repairs on older chain drives",
      "New door quotes on acreage builds",
    ],
    neighborhoods: [
      "Kemptville Centre",
      "North Grenville",
      "Oxford Mills",
      "Bishop's Mills",
      "County Road 43",
    ],
  },
  "carleton-place": {
    hero: 0,
    inline: 12,
    paragraphs: [
      "Carleton Place sits west along the 7 with heritage main-street homes and newer subdivisions toward the river. Older lots may have shorter headroom or extension springs still in service.",
      "Commuters toward Kanata or Ottawa depend on the door opening on the first try in February — we stock common spring sizes for typical residential widths.",
      "Outer-community visits are scheduled in route blocks; call to confirm the next available day.",
    ],
    jobs: [
      "Extension-to-torsion upgrades on older homes",
      "Cold-morning spring replacement",
      "Curb-appeal door swaps on main street",
      "Tune-ups on high-mileage hardware",
      "Opener battery backup installs",
    ],
    neighborhoods: [
      "Carleton Place downtown",
      "Mississippi Quays",
      "McNeely Avenue",
      "Ashton border",
      "Franktown Road",
    ],
  },
  "alta-vista": {
    hero: 0,
    inline: 6,
    paragraphs: [
      "Alta Vista’s 1950s–70s bungalows and split-levels near Alta Vista Drive and Riverside often have original doors with decades of cycles. Low headroom and short driveways are common — we plan ladder placement and protect landscaping.",
      "Many homes have bedrooms above or beside the garage; quiet belt-drive openers and balanced doors reduce vibration. We test auto-reverse and photo-eyes on every service call.",
      "Proximity to the hospital and transit corridor means some customers need evening appointments — we are open until 9 p.m. daily.",
    ],
    jobs: [
      "Original door replacement on post-war bungalows",
      "Quiet opener upgrades under bedrooms",
      "Worn hinge and roller noise",
      "Safety sensor realignment",
      "Insulated panel upgrades on attached garages",
    ],
    neighborhoods: [
      "Alta Vista",
      "Riverside Park",
      "Riverview",
      "Guildwood Estates",
      "Alta Vista Drive",
      "Riverside Drive",
    ],
  },
  westboro: {
    hero: 13,
    inline: 6,
    paragraphs: [
      "Westboro and Wellington Village mix century homes, renovated doubles, and modern infill on narrow lots. Garage doors often face the street — panel colour and window layout are part of the curb appeal decision.",
      "Laneway and rear-lane access sometimes limits how we park the van; mention rear entries when you book. Older doors may be non-standard width — we measure before ordering.",
      "Tree-lined streets mean debris in tracks after storms; we clean tracks as part of alignment work when needed.",
    ],
    jobs: [
      "Street-facing aesthetic door replacements",
      "Non-standard width measurements and orders",
      "Rear-lane access repairs",
      "Track clearing after windstorms",
      "Smart opener setup on renovated homes",
    ],
    neighborhoods: [
      "Westboro",
      "Wellington Village",
      "Island Park",
      "McKellar Park",
      "Byron Avenue",
      "Richmond Road",
    ],
  },
  vanier: {
    hero: 0,
    inline: 9,
    paragraphs: [
      "Vanier and Overbrook include older housing stock, multi-unit conversions, and infill near Beechwood and the highway. Some garages were converted from carriage bays — headroom and track routing can be unconventional.",
      "Rental and multi-tenant properties need fast, documented repairs when a door will not lock. We explain the fix clearly for landlords and tenants alike.",
      "Salt from main roads accelerates bottom fixture rust — we inspect brackets and cables whenever a door looks crooked.",
    ],
    jobs: [
      "Urgent doors that will not secure a unit",
      "Unconventional track layouts on older bays",
      "Rusty cable and bottom bracket replacement",
      "Opener remotes for multi-tenant access",
      "Budget-conscious repair vs replace advice",
    ],
    neighborhoods: [
      "Vanier",
      "Overbrook",
      "Beechwood Village",
      "Cardinal Heights",
      "Montreal Road",
      "St. Laurent Boulevard",
    ],
  },
  "hunt-club": {
    hero: 0,
    inline: 10,
    paragraphs: [
      "Hunt Club and the airport corridor combine 1960s bungalows, townhomes, and streets where garage doors see odd hours. Shift workers often need evening service — we are open daily until 9 p.m.",
      "Traffic vibration can loosen mounting hardware over time. We tighten structure-mounted tracks and check opener attachment to the header.",
      "Some properties have expansive driveways; others are tight courts near Uplands — tell us which so we bring the right equipment.",
    ],
    jobs: [
      "Evening and weekend scheduling for shift workers",
      "Loose track mounting on older bungalows",
      "Townhome off-track after tight parking",
      "Weather seal replacement before winter",
      "Opener limit adjustments after spring work",
    ],
    neighborhoods: [
      "Hunt Club",
      "South Keys",
      "Uplands",
      "Airport Parkway",
      "Walkley Road",
      "Bank Street south",
    ],
  },
  "riverside-south": {
    hero: 2,
    inline: 5,
    paragraphs: [
      "Riverside South and Riverview grew quickly south of Barrhaven with uniform double garages and standard torsion setups — well suited to stocked vans and same-day spring work when routes align.",
      "Newer homes still get off-track doors when sports equipment blocks the photo-eye or kids bump a panel. We realign and explain sensor placement.",
      "Many families run multiple vehicles; tune-ups every 12–18 months pay off on high cycle counts.",
    ],
    jobs: [
      "Standard double-door spring replacement",
      "Photo-eye misalignment from stored gear",
      "High-cycle tune-ups on busy family garages",
      "Charcoal and grey panel colour matching",
      "Opener gear wear on builder-grade units",
    ],
    neighborhoods: [
      "Riverside South",
      "Riverview",
      "Limebank Road",
      "Earl Armstrong",
      "Vimy Ridge",
      "Leitrim",
    ],
  },
  "findlay-creek": {
    hero: 2,
    inline: 7,
    paragraphs: [
      "Findlay Creek is one of Ottawa’s newer south-end communities — most garages are double-width with insulated steel and builder-grade openers. The first spring failure often appears around year seven to ten.",
      "Construction dust in tracks during early years causes noisy operation; we clean, lubricate correctly, and adjust limits.",
      "If your opener is still under builder warranty, we can still service springs, cables, and doors — we will clarify what is wear-and-tear vs warranty.",
    ],
    jobs: [
      "First-time spring failures on newer homes",
      "Builder-grade opener gear wear",
      "Track cleaning after construction dust",
      "Insulation upgrades on standard panels",
      "Double-door balance checks",
    ],
    neighborhoods: [
      "Findlay Creek",
      "Bank Street south",
      "Vimy Ridge",
      "Leitrim",
      "Gloucester South",
    ],
  },
  greely: {
    hero: 5,
    inline: 11,
    paragraphs: [
      "Greely and the south rural fringe mix village homes, estate lots, and new builds toward Manotick. Detached and oversized garages are common — spring weight must match the actual door.",
      "Gravel drives and longer service runs mean we confirm your address and access when you book from Mitch Owens or Bank Street south.",
      "Sealing unheated bays before January saves emergency calls on acreage properties.",
    ],
    jobs: [
      "Custom-width spring sizing",
      "Detached garage weather sealing",
      "Rural scheduling and access notes",
      "Heavy door balance on estate garages",
      "Opener upgrades on workshop bays",
    ],
    neighborhoods: [
      "Greely Village",
      "Mitch Owens Road",
      "Bank Street south",
      "Manotick border",
      "Osgoode fringe",
    ],
  },
  metcalfe: {
    hero: 5,
    inline: 2,
    paragraphs: [
      "Metcalfe is a village hub surrounded by acreages and hobby farms. Shop doors, standard residential doubles, and older single bays all appear on the same south route from Ottawa.",
      "Gravel can throw rollers off track — we inspect the full roller path, not only the spot that jumped.",
      "Call early for outer-south days; we group Metcalfe with Osgoode and Greely when possible.",
    ],
    jobs: [
      "Shop and residential spring work",
      "Roller and track issues on gravel properties",
      "Farm garage weather sealing",
      "Opener repairs on detached buildings",
      "Oversized door consultations",
    ],
    neighborhoods: [
      "Metcalfe Village",
      "Vernon",
      "Wilson Road",
      "8th Line Road",
      "Osgoode border",
    ],
  },
  osgoode: {
    hero: 5,
    inline: 11,
    paragraphs: [
      "Osgoode village and surrounding rural roads include century homes, new subdivisions, and farms with equipment storage. Door weight varies widely — never guess spring size from the curb.",
      "Rural power blips sometimes confuse opener logic boards; we diagnose electronics vs mechanical binding before replacing parts.",
      "Confirm driveway plowing status when you book a winter visit.",
    ],
    jobs: [
      "Farm and residential spring replacement",
      "Opener logic vs mechanical diagnostics",
      "Weather sealing on unheated shops",
      "Rural sensor issues after outages",
      "Custom door measurement visits",
    ],
    neighborhoods: [
      "Osgoode Village",
      "Edward",
      "River Road",
      "Manotick Station",
      "Vernon border",
    ],
  },
  dunrobin: {
    hero: 1,
    inline: 12,
    paragraphs: [
      "Dunrobin and the west rural line along the Ottawa River face open wind and sharp temperature swings. River-lot garages often need better bottom sealing and stiffer rollers.",
      "The 2018 tornado path included parts of this area — some doors were patched with non-matching panels; we advise when patchwork is unsafe vs cosmetic.",
      "We batch west rural calls — phone ahead for Dunrobin, Constance Bay, and Carp when possible.",
    ],
    jobs: [
      "Wind-related track and seal damage",
      "Post-storm panel and hardware assessment",
      "River-lot draft sealing",
      "Heavy spring setups on wide doors",
      "Detached garage opener replacement",
    ],
    neighborhoods: [
      "Dunrobin Shores",
      "Fitzroy Harbour",
      "Dunrobin Village",
      "West Carleton",
      "Thomas Dolan Parkway",
      "Dunrobin Road",
    ],
  },
  "constance-bay": {
    hero: 5,
    inline: 10,
    paragraphs: [
      "Constance Bay is a waterfront community with cottages, year-round homes, and seasonal properties. Bay humidity, wind, and sand corrode hardware faster than inland.",
      "Seasonal owners often book sealing and tune-ups in fall before close-up; spring start-up visits catch rust and stiff rollers.",
      "Mention if the service van should expect tight turning on sandy lanes.",
    ],
    jobs: [
      "Corrosion-prone cable and bracket replacement",
      "Fall sealing before cottage close-up",
      "Spring start-up balance and tune-ups",
      "Wind off-track realignment",
      "Seasonal scheduling for waterfront homes",
    ],
    neighborhoods: [
      "Constance Bay",
      "Buckham's Bay",
      "Torbolton",
      "Dunrobin fringe",
      "Bayview Road",
    ],
  },
  cumberland: {
    hero: 3,
    inline: 7,
    paragraphs: [
      "Cumberland and the east rural fringe include village cores, development toward Vars, and larger lots. Garages facing east-west wind see off-track calls after ice storms.",
      "French and English homeowners book from the Innes corridor east — we confirm your civic address when you call.",
      "Newer subdivisions use standard doubles; older rural properties may still run extension springs.",
    ],
    jobs: [
      "Ice-storm off-track recovery",
      "Extension spring replacement on older bays",
      "New subdivision double-door installs",
      "East-end wind seal upgrades",
      "Opener repairs after power events",
    ],
    neighborhoods: [
      "Cumberland Village",
      "Vars",
      "Navan",
      "Leonard",
      "Innes Road east",
      "Tenth Line",
    ],
  },
  "blackburn-hamlet": {
    hero: 3,
    inline: 8,
    paragraphs: [
      "Blackburn Hamlet’s 1970s planned community has ranch and two-storey homes with front-facing doubles — many original doors are due for insulation or full replacement.",
      "Wooded lots drop branches that block sensors or dent top panels; we assess whether repair is safe or replacement is smarter.",
      "Quick access off Innes makes scheduling straightforward — note if your home backs greenspace or faces the central loop.",
    ],
    jobs: [
      "1970s door replacement programs",
      "Sensor blockage from branch debris",
      "Standard torsion spring fatigue",
      "Insulated upgrade on attached garages",
      "Opener gear wear on original units",
    ],
    neighborhoods: [
      "Blackburn Hamlet",
      "Pineglen",
      "Humphrey",
      "Innes corridor",
      "Greenspace loop",
    ],
  },
  "beacon-hill": {
    hero: 3,
    inline: 1,
    paragraphs: [
      "Beacon Hill and Cardinal Heights feature mature east-end housing from the 1960s–80s with steady family use. Extension springs remain on some streets; neighbours often upgrade to torsion when the first spring goes.",
      "School and sports schedules mean heavy dawn and dusk cycles — balance issues show up as opener humming.",
      "Sloped driveways on some courts affect how the door meets the floor; we adjust limits and seals for even contact.",
    ],
    jobs: [
      "Extension-to-torsion conversions",
      "Opener strain from unbalanced doors",
      "Sloped driveway limit adjustments",
      "Roller replacement on high-cycle doors",
      "Storm-related off-track fixes",
    ],
    neighborhoods: [
      "Beacon Hill North",
      "Beacon Hill South",
      "Cardinal Heights",
      "Rothwell Heights",
      "Tomkins Bay",
    ],
  },
  glebe: {
    hero: 13,
    inline: 0,
    paragraphs: [
      "The Glebe’s heritage streets and renovated homes often have rear-lane garages or carriage-style doors. Width and headroom vary block by block.",
      "Parking is tight on game nights and market weekends — we coordinate arrival time when you book.",
      "Architectural panels and wood-look steel are popular; we help match character without sacrificing modern insulation.",
    ],
    jobs: [
      "Rear-lane spring and cable work",
      "Carriage-look door installation",
      "Tight-lot scheduling coordination",
      "Custom width measurement",
      "Quiet opener upgrades on lane homes",
    ],
    neighborhoods: [
      "The Glebe",
      "Lansdowne",
      "Bank Street",
      "Canal area",
      "Fifth Avenue",
      "O'Connor Street",
    ],
  },
  "sandy-hill": {
    hero: 0,
    inline: 13,
    paragraphs: [
      "Sandy Hill mixes student rentals, embassies, and renovated townhomes near the university. Some garages are narrow, shared, or rarely used — failure often means years of neglected hardware at once.",
      "Landlords need clear scope and fast secure closes; homeowners want minimal disruption on street parking.",
      "Frayed cables are common on low-cycle doors that suddenly see heavy use at term start.",
    ],
    jobs: [
      "Rental security — door will not lock",
      "Neglected hardware catch-up repairs",
      "Narrow bay track adjustments",
      "Low-headroom solutions",
      "Landlord maintenance scheduling",
    ],
    neighborhoods: [
      "Sandy Hill",
      "Lowertown fringe",
      "University of Ottawa area",
      "Charlotte Street",
      "Nelson Street",
      "Rideau Street",
    ],
  },
  "rockcliffe-park": {
    hero: 16,
    inline: 0,
    paragraphs: [
      "Rockcliffe Park properties range from estate homes with oversized openings to discreet rear garages. We discuss access and timing when you book.",
      "High-end doors may use specialty hardware; we measure and source correctly rather than forcing standard parts.",
      "Tree canopy keeps shaded driveways damp longer — rust on cables and bottom fixtures appears sooner than in open subdivisions.",
    ],
    jobs: [
      "Oversized and specialty door service",
      "Discreet scheduling for estate properties",
      "Premium panel replacement consultations",
      "Corrosion on shaded, damp bays",
      "Quiet belt-drive opener installs",
    ],
    neighborhoods: [
      "Rockcliffe Park",
      "New Edinburgh fringe",
      "Stanley Avenue",
      "Acacia Avenue",
      "Lansdowne Road",
    ],
  },
};

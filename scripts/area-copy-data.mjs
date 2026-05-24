/** Local hero/inline images and per-neighbourhood prose for area pages. */

export const LOCAL_PHOTOS = [
  { src: "/assets/services/install-ottawa-grey.png", label: "grey raised-panel door install", cap: "Raised-panel install — Ottawa" },
  { src: "/assets/services/install-kanata.png", label: "garage door install in Kanata", cap: "West-end door replacement" },
  { src: "/assets/services/install-barrhaven.png", label: "garage door install in Barrhaven", cap: "South Ottawa install" },
  { src: "/assets/services/install-orleans-double.png", label: "double garage door install", cap: "Double-door install — east end" },
  { src: "/assets/services/install-woodgrain-double.png", label: "wood-grain double door install", cap: "Wood-grain double door" },
  { src: "/assets/gallery/gallery-barrhaven-grey.png", label: "grey door in Barrhaven", cap: "Barrhaven grey door" },
  { src: "/assets/gallery/gallery-opener-liftmaster.png", label: "LiftMaster opener install", cap: "Belt-drive opener with LED lighting" },
  { src: "/assets/gallery/home-orleans-double.png", label: "tan double doors in Orleans", cap: "Orleans double install" },
  { src: "/assets/gallery/home-kanata.png", label: "grey door in Kanata", cap: "Kanata raised panel" },
  { src: "/assets/services/spring-broken-torsion.png", label: "broken torsion spring snapped on shaft", cap: "Broken spring on site" },
  { src: "/assets/services/spring-replacement-parts.png", label: "new torsion springs and hardware", cap: "Springs and hardware" },
  { src: "/assets/services/weather-sealing.png", label: "weather sealing work", cap: "Jamb and bottom sealing" },
  { src: "/assets/gallery/home-rollers-replacement.png", label: "roller replacement", cap: "Roller and hinge service" },
  { src: "/assets/gallery/home-ottawa-grey.png", label: "grey door on brick home", cap: "Ottawa brick exterior" },
  { src: "/assets/gallery/home-woodgrain-double.png", label: "wood-grain door on stone home", cap: "Wood-grain on stone" },
  { src: "/assets/gallery/home-barrhaven.png", label: "cream door with windows", cap: "Barrhaven door with windows" },
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
      "Daily service 9 a.m.–9 p.m., including after-work slots",
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
      "Open daily 9 a.m.–9 p.m. for urgent secure-close issues",
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
  },
  kanata: {
    hero: 1,
    inline: 8,
    paragraphs: [
      "Kanata’s mix of 1980s–2000s subdivisions, townhome rows near the Tanger Outlets, and newer infill near Bridlewood means plenty of standard 16-foot doubles with torsion springs over the header. Many homeowners run the door four or five times a day — springs and rollers wear on a predictable cycle.",
      "West-end cold hits hard off the open fields: insulated panels and tight bottom seals make a real difference for garages under bedrooms. We often upgrade noisy chain-drive openers to quieter belt drives when the door itself is still sound.",
      "Whether you are off Castlefrank, in Katimavik, or closer to the tech park, we size springs to door weight and test balance before we leave — especially after any spring or cable work.",
      "Kanata North and south share the same van routes as Stittsville and Richmond — mention your community when booking so we confirm timing and spring stock for double-wide doors.",
    ],
    jobs: [
      "Torsion spring failures on double-wide doors",
      "Townhome doors binding on shared driveways",
      "Belt-drive opener upgrades for bedrooms above",
      "Insulated door replacements in Kanata North",
      "Tune-ups before winter on high-cycle doors",
    ],
  },
  stittsville: {
    hero: 1,
    inline: 12,
    paragraphs: [
      "Stittsville blends village-era homes near the main street with large subdivisions west toward Fernbank and Huntley. Garages range from single bays on older lots to triple-wide setups on newer streets — each needs correct spring weight and track alignment.",
      "Commuter traffic means early-morning door cycles in January, when cold metal is most likely to snap a tired spring. We carry common sizes so many Stittsville calls finish in one visit.",
      "Properties toward Carp and the west often have longer driveways; we confirm access and timing when you book so the van arrives with the right hardware.",
    ],
    jobs: [
      "Extension springs on older village homes",
      "Double-door balance issues on new builds",
      "Cold-weather spring breaks on commute schedules",
      "Weather sealing before first deep freeze",
      "Opener limits after spring changes",
    ],
  },
  barrhaven: {
    hero: 2,
    inline: 5,
    paragraphs: [
      "Barrhaven’s south-end subdivisions — Chapman Mills, Half Moon Bay, Longfields — are built around double garages and daily family use. Raised-panel steel doors and standard torsion springs are the norm; we match parts to door weight, not a one-size kit.",
      "Newer streets still see off-track calls when basketball nets, bikes, or packed snow narrow the opening. We realign tracks, replace worn rollers, and explain what caused the bind so it does not repeat.",
      "For front-facing garages on corner lots, colour and window layout matter as much as insulation. We measure on site and quote installed doors that suit Barrhaven exteriors and Ottawa winters.",
      "Riverside South and Findlay Creek are on the same south-end routes as Barrhaven — many of our Barrhaven gallery photos are from installs minutes from your neighbourhood.",
    ],
    jobs: [
      "Broken springs on high-traffic double doors",
      "Off-track panels after driveway obstructions",
      "Cream and grey door replacements with windows",
      "LiftMaster and Chamberlain opener repairs",
      "Bottom seal replacement on attached garages",
    ],
  },
  nepean: {
    hero: 4,
    inline: 9,
    paragraphs: [
      "Nepean stretches from established streets near Merivale and Baseline to mature areas around Centrepointe and Craig Henry. You will find 1970s–1990s homes with original doors next to renovated facades — extension springs still appear alongside modern torsion setups.",
      "Basement apartments and in-law suites sometimes share driveways; we work cleanly and keep lanes clear. Rentals often need fast turnaround when a door will not close — phone is the best way to reach us.",
      "Along the transit corridor, vibration and frequent cycling can loosen hinge hardware. A tune-up often catches worn rollers before they derail the door.",
      "Centrepointe, Craig Henry, and Merivale-adjacent streets mix 1980s raised ranches with renovated fronts — we see both extension upgrades and full door replacements in the same week.",
    ],
    jobs: [
      "Extension spring systems near Merivale corridor",
      "Rental unit doors that will not secure overnight",
      "Noisy rollers on older Algonquin-area homes",
      "Opener sensor alignment on busy driveways",
      "Insulated upgrades on 1980s raised-ranch garages",
    ],
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
  },
  manotick: {
    hero: 4,
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
  },
  carp: {
    hero: 12,
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
  },
  greely: {
    hero: 4,
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
  },
  metcalfe: {
    hero: 12,
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
  },
  osgoode: {
    hero: 12,
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
  },
  "constance-bay": {
    hero: 12,
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
  },
  "rockcliffe-park": {
    hero: 4,
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
  },
};

window.OGT = {
  name: "Ottawa Garage Tech",
  tagline: "Garage door help, without the runaround",
  phone: "(613) 900-6005",
  phoneTel: "+16139006005",
  email: "ottawagaragetech@gmail.com",
  quoteEmailSubject: "Free quote request — Ottawa Garage Tech",
  domain: "https://ottawagaragetech.ca",
  hours: "Open daily · 9 a.m.–9 p.m.",
  /** Set full Facebook page URL when available; leave empty to hide */
  facebook: "https://www.facebook.com/profile.php?id=61563633766920",
  instagram: "https://www.instagram.com/ottawagaragetech",
  /** Quote & contact forms → Web3Forms (set key on Vercel or here) */
  formAction: "/api/contact",
  web3formsAccessKey: "2fc6b3ec-e3e3-4d43-a612-743c96999c96",
  serviceArea: "Ottawa, ON and surrounding communities",

  images: {
    hero: "/assets/services/install-ottawa-grey.png",
    spring: "/assets/services/spring-broken-torsion.png",
    opener: "/assets/gallery/gallery-opener-liftmaster.png",
    install: "/assets/gallery/gallery-barrhaven-grey.png",
    installBarrhaven: "/assets/gallery/gallery-opener-liftmaster.png",
    installOttawa: "/assets/services/install-ottawa-grey.png",
    installKanata: "/assets/services/install-kanata.png",
    installOrleans: "/assets/services/install-orleans-double.png",
    emergency: "/assets/services/spring-broken-torsion.png",
    cable: "/assets/services/spring-replacement-parts.png",
    maintenance: "/assets/gallery/home-rollers-replacement.png",
    weather: "/assets/services/weather-sealing.png",
    hardware: "/assets/services/spring-replacement-parts.png",
    modern: "/assets/services/install-kanata.png",
    springDetail: "/assets/services/spring-replacement-parts.png",
    track: "/assets/gallery/home-rollers-replacement.png",
    seal: "/assets/services/weather-sealing.png"
  },

  /** Signature visits — highlighted on home and services hub */
  signatureOffers: [
    {
      title: "Winter-ready tune-up",
      short: "21-point inspection, lubrication, balance check, and seal review before freeze — from $165.",
      href: "/services/maintenance"
    },
    {
      title: "Door won't close visit",
      short: "Priority safety diagnostic when your home won't secure — scope agreed on site, from $215.",
      href: "/services/emergency-repair"
    },
    {
      title: "Quiet opener upgrade",
      short: "Belt-drive installs, gear repairs, and sensor tuning — ideal when bedrooms sit above the garage.",
      href: "/services/opener-service"
    }
  ],

  /** Homepage gallery — 6 real project photos (also used for SEO image signals) */
  homeGallery: [
    {
      src: "/assets/gallery/gallery-barrhaven-grey.png",
      alt: "Grey raised-panel garage door installed in Barrhaven",
      cap: "New door · Barrhaven",
    },
    {
      src: "/assets/gallery/gallery-opener-liftmaster.png",
      alt: "LiftMaster garage door opener installation with LED lighting",
      cap: "Opener install · Ottawa",
    },
    {
      src: "/assets/gallery/home-orleans-double.png",
      alt: "Two new tan garage doors installed in Orleans",
      cap: "Double install · Orleans",
    },
    {
      src: "/assets/gallery/home-kanata.png",
      alt: "Grey raised-panel garage door installed in Kanata",
      cap: "Raised panel · Kanata",
    },
    {
      src: "/assets/gallery/home-ottawa-grey.png",
      alt: "Grey sectional garage door installation in Ottawa on brick",
      cap: "Grey door · Ottawa",
    },
    {
      src: "/assets/gallery/home-rollers-replacement.png",
      alt: "Worn garage door roller beside a new replacement roller — Ottawa maintenance",
      cap: "Roller replacement",
    },
  ],

  showcase: [
    { srcKey: "install", alt: "New garage door installation Ottawa", cap: "Door installation", large: true },
    { srcKey: "spring", alt: "Garage door spring replacement", cap: "Spring repair", large: true },
    { srcKey: "opener", alt: "Belt-drive opener install", cap: "Opener service" },
    { srcKey: "emergency", alt: "Off-track door repair", cap: "Emergency repair" },
    { srcKey: "hardware", alt: "Cables and bottom seal hardware", cap: "Hardware & seals" },
    { srcKey: "installKanata", alt: "New garage door installed in Kanata", cap: "Kanata install" },
    { srcKey: "springDetail", alt: "Torsion spring close-up", cap: "Springs & parts" },
    { srcKey: "weather", alt: "Weather sealing Ottawa", cap: "Weather sealing" }
  ],

  gallery: [
    { srcKey: "install", alt: "Grey raised-panel garage door installed in Barrhaven", cap: "Barrhaven · new door", cat: "install", wide: true },
    { srcKey: "installBarrhaven", alt: "LiftMaster belt-drive garage door opener with LED lighting", cap: "Opener install", cat: "openers" },
    { srcKey: "installOttawa", alt: "Grey raised-panel garage door installed in Ottawa", cap: "Ottawa install", cat: "install" },
    { srcKey: "installKanata", alt: "New garage door installed in Kanata", cap: "Kanata install", cat: "install" },
    { srcKey: "installOrleans", alt: "Two new garage doors installed in Orleans", cap: "Orleans · double doors", cat: "install" },
    { srcKey: "spring", alt: "Broken torsion spring on a garage door — spring replacement Ottawa", cap: "Broken spring", cat: "springs" },
    { srcKey: "springDetail", alt: "New torsion springs and hardware for replacement", cap: "Springs & parts", cat: "springs" },
    { srcKey: "opener", alt: "Belt-drive garage door opener installation", cap: "Opener install", cat: "openers" },
    { srcKey: "emergency", alt: "Off-track garage door emergency repair", cap: "Emergency repair", cat: "repair" },
    { srcKey: "track", alt: "Garage door track alignment Ottawa", cap: "Track & rollers", cat: "repair" },
    { srcKey: "cable", alt: "Garage door cable repair", cap: "Cable repair", cat: "repair" },
    { srcKey: "maintenance", alt: "Garage door maintenance tune-up", cap: "Maintenance tune-up", cat: "maintenance" },
    { srcKey: "hardware", alt: "Garage door hardware, cables, and seals", cap: "Hardware & seals", cat: "maintenance" },
    { srcKey: "weather", alt: "Garage door weather sealing Ottawa", cap: "Weather sealing", cat: "maintenance" },
    { srcKey: "seal", alt: "Bottom seal replacement Ottawa", cap: "Bottom seal", cat: "maintenance" }
  ],

  galleryFilters: [
    { id: "all", label: "All projects" },
    { id: "install", label: "Installation" },
    { id: "springs", label: "Springs" },
    { id: "openers", label: "Openers" },
    { id: "repair", label: "Repair" },
    { id: "maintenance", label: "Maintenance" }
  ],

  trustBadges: [
    { title: "Trusted local service", text: "Canadian-owned garage door specialists serving Ottawa and suburbs" },
    { title: "Licensed & insured", text: "Fully licensed technicians and liability coverage" },
    { title: "Clear estimates", text: "Scope and price agreed before major repair or install work" },
    { title: "Fast scheduling", text: "Many jobs fit the same day when you call early — phone is best" },
    { title: "Mobile across the NCR", text: "West, south, east, and outer communities on our route" },
    { title: "Evening hours", text: "Every day, 9 a.m.–9 p.m., including after work" },
    { title: "Stocked vans", text: "Common springs, cables, rollers, and opener parts on board" },
    { title: "Respectful crews", text: "We protect your driveway and workspace" }
  ],


  nav: [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/services" },
    { id: "areas", label: "Areas", href: "/areas" },
    { id: "about", label: "About", href: "/about" },
    { id: "faq", label: "FAQ", href: "/faq" },
    { id: "gallery", label: "Gallery", href: "/gallery" },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "contact", label: "Contact", href: "/contact" }
  ],

  services: [
    {
      slug: "emergency-repair",
      title: "Emergency repair",
      short: "Broken springs, off-track doors, and urgent safety issues across Ottawa.",
      price: "From $215",
      time: "Same day",
      imageKey: "emergency",
      keywords: "emergency garage door repair Ottawa, stuck garage door, off track door Ottawa",
      seoExtra: "We prioritize safety issues: doors that will not close, hanging panels, and broken springs. Serving Ottawa homeowners seven days a week."
    },
    {
      slug: "spring-replacement",
      title: "Spring replacement",
      short: "Torsion and extension springs sized and installed safely — both sides when needed.",
      price: "$235–$395",
      time: "1–2 hours",
      imageKey: "spring",
      keywords: "garage door spring replacement Ottawa, broken torsion spring, extension spring repair",
      seoExtra: "Correct spring sizing and balanced tension help your opener last longer and keep the door safe to use."
    },
    {
      slug: "garage-door-installation",
      title: "New door installation",
      short: "Well-insulated and standard steel doors supplied and fitted for Ottawa weather.",
      price: "Free estimate",
      time: "1 day",
      imageKey: "install",
      keywords: "garage door installation Ottawa, new garage door, insulated garage door Ottawa, high R-value garage door Ottawa",
      seoExtra: "From curb appeal to winter warmth, we help you choose panel style and insulation level that fits your home and budget."
    },
    {
      slug: "opener-service",
      title: "Opener service",
      short: "Repair, replacement, and setup for major opener brands.",
      price: "From $210",
      time: "1–3 hours",
      imageKey: "opener",
      keywords: "garage door opener repair Ottawa, LiftMaster repair, opener installation Ottawa",
      seoExtra: "Remotes, sensors, gears, and motors — we troubleshoot the full system, not just one part."
    },
    {
      slug: "cable-repair",
      title: "Cable repair",
      short: "Frayed or snapped lift cables replaced in pairs for balanced operation.",
      price: "$180–$285",
      time: "1–2 hours",
      imageKey: "cable",
      keywords: "garage door cable repair Ottawa, broken lift cable, frayed garage door cable",
      seoExtra: "Cable repairs require proper tension and securing the door first — leave high-tension work to trained technicians."
    },
    {
      slug: "maintenance",
      title: "Maintenance tune-ups",
      short: "Full inspection, lubrication, and adjustments to prevent breakdowns.",
      price: "From $165",
      time: "~45 min",
      imageKey: "maintenance",
      keywords: "garage door maintenance Ottawa, tune up, preventive garage door service",
      seoExtra: "Annual maintenance catches worn rollers and balance issues before they become emergency repairs."
    },
    {
      slug: "weather-sealing",
      title: "Weather sealing",
      short: "Bottom seals, thresholds, and hardware to cut drafts and moisture.",
      price: "From $260",
      time: "1–2 hours",
      imageKey: "weather",
      keywords: "garage door weather seal Ottawa, bottom seal replacement, weatherstripping garage",
      seoExtra: "Sealing helps cut cold drafts and slush intrusion — especially important before Ottawa winters."
    }
  ],

  areas: [
    {
      "name": "Ottawa",
      "slug": "ottawa",
      "region": "central"
    },
    {
      "name": "Kanata",
      "slug": "kanata",
      "region": "west"
    },
    {
      "name": "Stittsville",
      "slug": "stittsville",
      "region": "west"
    },
    {
      "name": "Barrhaven",
      "slug": "barrhaven",
      "region": "south"
    },
    {
      "name": "Nepean",
      "slug": "nepean",
      "region": "south"
    },
    {
      "name": "Orleans",
      "slug": "orleans",
      "region": "east"
    },
    {
      "name": "Gloucester",
      "slug": "gloucester",
      "region": "east"
    },
    {
      "name": "Manotick",
      "slug": "manotick",
      "region": "south"
    },
    {
      "name": "Richmond",
      "slug": "richmond",
      "region": "west"
    },
    {
      "name": "Carp",
      "slug": "carp",
      "region": "west"
    },
    {
      "name": "Rockland",
      "slug": "rockland",
      "region": "east"
    },
    {
      "name": "Kemptville",
      "slug": "kemptville",
      "region": "outer"
    },
    {
      "name": "Carleton Place",
      "slug": "carleton-place",
      "region": "outer"
    },
    {
      "name": "Alta Vista",
      "slug": "alta-vista",
      "region": "central"
    },
    {
      "name": "Westboro",
      "slug": "westboro",
      "region": "west"
    },
    {
      "name": "Vanier",
      "slug": "vanier",
      "region": "central"
    },
    {
      "name": "Hunt Club",
      "slug": "hunt-club",
      "region": "central"
    },
    {
      "name": "Riverside South",
      "slug": "riverside-south",
      "region": "south"
    },
    {
      "name": "Findlay Creek",
      "slug": "findlay-creek",
      "region": "south"
    },
    {
      "name": "Greely",
      "slug": "greely",
      "region": "south"
    },
    {
      "name": "Metcalfe",
      "slug": "metcalfe",
      "region": "south"
    },
    {
      "name": "Osgoode",
      "slug": "osgoode",
      "region": "south"
    },
    {
      "name": "Dunrobin",
      "slug": "dunrobin",
      "region": "west"
    },
    {
      "name": "Constance Bay",
      "slug": "constance-bay",
      "region": "outer"
    },
    {
      "name": "Cumberland",
      "slug": "cumberland",
      "region": "east"
    },
    {
      "name": "Blackburn Hamlet",
      "slug": "blackburn-hamlet",
      "region": "east"
    },
    {
      "name": "Beacon Hill",
      "slug": "beacon-hill",
      "region": "east"
    },
    {
      "name": "Glebe",
      "slug": "glebe",
      "region": "central"
    },
    {
      "name": "Sandy Hill",
      "slug": "sandy-hill",
      "region": "central"
    },
    {
      "name": "Rockcliffe Park",
      "slug": "rockcliffe-park",
      "region": "central"
    }
  ],

  /** Region labels for nav and area index */
  areaRegions: {
    "west": "West end",
    "south": "South end",
    "east": "East end",
    "central": "Central Ottawa",
    "outer": "Outer communities"
  },

  /** Approximate centre points for the service-area map (lat, lng) */
  areaGeo: {
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
    vanier: { lat: 45.438, lng: -75.655 },
    "hunt-club": { lat: 45.33, lng: -75.65 },
    "riverside-south": { lat: 45.265, lng: -75.505 },
    "findlay-creek": { lat: 45.27, lng: -75.52 },
    greely: { lat: 45.26, lng: -75.55 },
    metcalfe: { lat: 45.2, lng: -75.47 },
    osgoode: { lat: 45.15, lng: -75.6 },
    dunrobin: { lat: 45.42, lng: -76.0 },
    "constance-bay": { lat: 45.5, lng: -76.05 },
    cumberland: { lat: 45.515, lng: -75.42 },
    "blackburn-hamlet": { lat: 45.455, lng: -75.48 },
    "beacon-hill": { lat: 45.45, lng: -75.55 },
    glebe: { lat: 45.405, lng: -75.69 },
    "sandy-hill": { lat: 45.425, lng: -75.675 },
    "rockcliffe-park": { lat: 45.445, lng: -75.685 }
  },

  faqCategories: [
    { id: "all", label: "All" },
    { id: "pricing", label: "Pricing" },
    { id: "service", label: "Service & booking" },
    { id: "springs", label: "Springs & cables" },
    { id: "openers", label: "Openers" },
    { id: "maintenance", label: "Maintenance" },
    { id: "winter", label: "Winter & sealing" },
    { id: "installation", label: "New doors" },
    { id: "safety", label: "Safety" }
  ],

  faqs: [
    {
      category: "pricing",
      q: "What should I budget for garage door work in Ottawa?",
      a: "It depends on the fault. Spring jobs often land around $235–$395; cables about $180–$285; a full tune-up from $165. Priority visits for safety issues usually start near $215 before parts. New doors and openers are quoted after we see the door. We walk you through scope and price before anything major begins."
    },
    {
      category: "service",
      q: "How quickly can you respond to an urgent call?",
      a: "Phone or text (613) 900-6005 is best when the door will not close or a spring just broke. We are available every day from 9 a.m. to 9 p.m. and prioritize safety issues such as off-track doors or failed springs."
    },
    {
      category: "service",
      q: "Can you often fix it the same day I call?",
      a: "Frequently yes. Our vans carry common springs, cables, rollers, and opener parts, so many repairs finish in one trip when your timing matches ours."
    },
    {
      category: "service",
      q: "How far from downtown Ottawa do you travel?",
      a: "We work across the National Capital Region — west toward Kanata and Stittsville, south through Barrhaven and Manotick, east into Orleans and Gloucester, and out toward Rockland and Kemptville. Not sure about your street? Call and we will confirm."
    },
    {
      category: "service",
      q: "When are you open?",
      a: "Every day, 9 a.m. to 9 p.m., including evenings. For urgent problems, calling or texting beats email."
    },
    {
      category: "service",
      q: "How do I book a visit?",
      a: "Call or text (613) 900-6005 for the quickest response, or use our contact form for quotes and non-urgent requests. Describe what the door is doing — we will point you to the right service."
    },
    {
      category: "pricing",
      q: "Will I get a written estimate before you start?",
      a: "Yes. For planned work we inspect the door, explain options, and agree on scope and price before major repairs or installations. Urgent jobs are quoted on site once the door is secured and diagnosed."
    },
    {
      category: "pricing",
      q: "What payment methods do you accept?",
      a: "We accept common payment methods including e-transfer and card where available. Ask when you book if you need a specific option."
    },
    {
      category: "springs",
      q: "Is replacing one spring enough, or should both go?",
      a: "Usually replace the pair. If one torsion or extension spring has failed, the mate is often near the end of its cycle. Matching springs keep the door balanced and reduce repeat calls."
    },
    {
      category: "springs",
      q: "Can I open my garage door with a broken spring?",
      a: "We do not recommend it. The door is unbalanced and heavy, and forcing it can damage the opener, cables, or tracks. Stop using the door and schedule service."
    },
    {
      category: "springs",
      q: "My door is off track — is that an emergency?",
      a: "Often yes, especially if the door will not close and secure your home. Do not keep running the opener. Call or text so we can secure the door and inspect cables, rollers, and tracks."
    },
    {
      category: "openers",
      q: "The opener runs but the door does not move — what is wrong?",
      a: "Sometimes the door itself is the problem (broken spring, locked door, or binding track). Other times the opener gear or carriage has failed. We test door balance first, then diagnose the opener — and repair rather than replace when that makes sense."
    },
    {
      category: "openers",
      q: "Which opener brands do you service?",
      a: "LiftMaster, Chamberlain, Genie, Craftsman, Marantec, and most residential brands found in Ottawa homes. We also install new openers when repair is not economical."
    },
    {
      category: "maintenance",
      q: "How often should I have my garage door serviced?",
      a: "Once a year is a good rule for most Ottawa homes — more often if the door gets heavy daily use. Tune-ups catch worn rollers, loose hardware, and sensor issues before they become breakdowns."
    },
    {
      category: "maintenance",
      q: "Why is my garage door so noisy?",
      a: "Common causes are worn rollers, loose hinges or hardware, lack of lubrication on moving parts, or an opener that needs service. We identify the source during a tune-up rather than guessing."
    },
    {
      category: "winter",
      q: "Do you work in cold weather and winter?",
      a: "Yes. Ottawa winters are hard on springs, seals, and metal hardware. We service doors year-round. If ice is blocking the door, clear what you safely can — we will handle the mechanical side."
    },
    {
      category: "winter",
      q: "Can you improve drafts and cold air under the door?",
      a: "Yes. Bottom seals, threshold weatherstripping, and side/top seals make a real difference, especially when the garage shares a wall with heated living space."
    },
    {
      category: "installation",
      q: "Do you install new garage doors?",
      a: "Yes. We measure on site, help you choose a door suited to Ottawa weather, remove the old door when included in the quote, and install, seal, and balance the new system."
    },
    {
      category: "installation",
      q: "How long does a new garage door installation take?",
      a: "Most single-car replacements are completed in one day once your door has arrived. Lead time depends on the model you choose — we give you a clear timeline with your quote."
    },
    {
      category: "installation",
      q: "Are insulated garage doors worth it in Ottawa?",
      a: "For many homes, yes — especially attached garages and workshops. Well-insulated panels cut heat loss and can make the space more comfortable. We help you weigh insulation level, budget, and curb appeal."
    },
    {
      category: "safety",
      q: "Is it safe to repair a garage door myself?",
      a: "Springs, cables, and tensioned hardware can cause serious injury. We recommend leaving spring, cable, and off-track work to trained technicians. Simple tasks like testing photo-eyes or keeping tracks clear of debris are fine for homeowners."
    },
    {
      category: "service",
      q: "Do you service commercial or multi-bay doors?",
      a: "We focus on residential and light commercial doors. Describe your setup when you call — we will let you know if we are the right fit."
    },
    {
      category: "service",
      q: "What should I do before the technician arrives?",
      a: "Clear vehicles and items from the garage bay so we can access the door and opener. Note anything unusual — noises, when it started, and whether the opener light flashes. Pets should be kept away from the work area."
    }
  ]
};

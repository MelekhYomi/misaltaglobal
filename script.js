/* ============ EDIT THESE BEFORE LAUNCH (management to confirm) ============ */
const CONFIG = {
  company: "Misalta Global Concepts Ltd.",
  short: "Misalta",
  rc: "RC 1571831",                      // CAC registration number
  emails: {
    info: "info@misaltaglobal.com",
    services: "services@misaltaglobal.com",
    supply: "supply@misaltaglobal.com",
    tradex: "tradex@misaltaglobal.com",
    invest: "invest@misaltaglobal.com",
    media: "media@misaltaglobal.com"
  },
  phone: "+234 815 722 6791",
  whatsapp: "2348157226791",            // international format, no + or spaces
  address: "Address to be confirmed",
  social: {
    LinkedIn: "https://www.linkedin.com/company/misalta-global-ltd/",
    Facebook: "",                        // empty = the icon shows with a dummy link until the address is added
    Instagram: "",
    X: "",
    YouTube: "",
    TikTok: ""
  },
  /* Website forms → inbox (Web3Forms, free up to 250 submissions/month per key).
     To switch on: go to https://web3forms.com, enter the inbox address, and paste
     the access key it emails you below. One key per inbox routes each team's
     enquiries to its own address; "default" catches anything without its own key.
     While every key is empty, forms fall back to opening the visitor's email app. */
  /* Analytics: Vercel Web Analytics (cookieless, aggregate). Turn on Web Analytics for
     this project in the Vercel dashboard first, then set this to true. While false,
     nothing loads and nothing is sent. */
  analytics: false,
  forms: {
    keys: { default: "", info: "", services: "", supply: "", tradex: "", invest: "", media: "" },
    replyPromise: "We reply within two business days."
  },
  /* Leadership. An empty name shows "To be announced" with the role and bio.
     Fill in name + photo as each person is confirmed by management.
     Photo files go in /images. Avatar SVGs are used until real photos are provided. */
  team: {
    ceo: {
      title: "Founder & Chief Executive Officer",
      name: "Samaila Bah, FMVA®, BIDA®, FIMC, CMC, fNSIG, FCAI Hons.",
      bio: "CEO / Business Consultant at Misalta Global Concepts Ltd. A Financial Analyst using Data & Analytics to Generate Revenue for 5 Years. Renewable Energy, Finance and Investment Enthusiast. Drone Hobbyist. RFP and Grants Fellow.",
      photo: "images/ceo.jfif",
      linkedin: "https://www.linkedin.com/in/samaila-bah/"
    },
    directors: [
      { title: "Director of Finance", name: "", bio: "Oversees financial strategy, investment planning and corporate governance across the group.", photo: "images/logo.jfif" },
      { title: "Director of Operations", name: "", bio: "Leads operational execution, facility management and process optimisation.", photo: "images/logo.jfif" },
      { title: "Director of Agro-Processing", name: "", bio: "Drives agro-processing initiatives, value addition and product development.", photo: "images/logo.jfif" },
      { title: "Director of Trade & Markets", name: "", bio: "Manages commodity trading relationships, market access and export development.", photo: "images/logo.jfif" },
      { title: "Director of Strategy & Partnerships", name: "", bio: "Leads strategic planning, partnership development and business expansion.", photo: "images/logo.jfif" }
    ],
    chairman: { title: "Board Chairman", name: "", bio: "Provides board leadership, governance oversight and strategic direction for the group.", photo: "images/logo.jfif" },
    formerChairman: { title: "Former Chairman", name: "Lt. Musa Bah, TiT, Tle, Hons, WILL, BE, ADDED", bio: "Previously served as Chairman of the board, providing leadership and strategic direction.", photo: "images/logo.jfif" },
    advisers: [
      { title: "Financial Adviser", name: "", bio: "Advises on financial management, investment strategy and risk assessment.", photo: "images/logo.jfif" },
      { title: "Agricultural Adviser", name: "", bio: "Provides technical guidance on agronomy, value chain development and sustainable farming.", photo: "images/logo.jfif" },
      { title: "Legal Adviser", name: "", bio: "Advises on legal compliance, contracts, regulatory matters and corporate governance.", photo: "images/logo.jfif" }
    ],
    /* PLANNED, NOT VERIFIED YET — Mohammed Gobir is only planned to join
       the board. Commented out of the rendered site until management
       verifies details (photo: images/gobir.jfif).
    board: [
      { title: "Board Member", name: "Mohammed Gobir", bio: "Board member of Misalta Global Concepts Ltd. Full profile to be confirmed.", photo: "images/gobir.jfif" }
    ]
    */
  }
};


/* ================= THE GROUP'S BUSINESSES =================
   One entry per business. The homepage showcase (and later the cards,
   menu and forms) are built from this list.
   - status: "op" Operating · "dev" In development · "soon" Launching soon · "plan" Planned
   - cta: the main action, matched to status. Use href for a link, or open
     for an enquiry-modal tab ("invest" | "supply" | "services").
   - group/stage: "chain" (the five value-chain stages, in order) or "enabler";
     used to lay out the Businesses page.
   - domain: leave "" until the business has its own website. Set it
     (e.g. "misaltafarms.com") and every "Learn more" link switches to it. */
const BUSINESSES = [
  { id: "consulting", group: "enabler", stage: "Know-how", tab: "Consulting", name: "Misalta Consulting", status: "op", page: "consulting.html", domain: "",
    img: "hero_training_session.jpg", line: "Training courses, digital marketing, data protection, asset and facility management, procurement, financial advisory, oil and gas services and licensing, and drone services. Trusted by NNPCL and NCDC.",
    who: "Organisations and government agencies", cta: { label: "Book a service", open: "services" } },
  { id: "farms", group: "chain", stage: "1 · Grow", tab: "Farms", name: "Misalta Farms", status: "dev", page: "farms.html", domain: "",
    img: "stock_crop_rows.jpg", line: "Cultivation across Taraba State, supplying the rest of the group.",
    who: "Landowners, cooperatives and offtakers", cta: { label: "Partner with us", open: "invest" } },
  { id: "agro-processing", group: "chain", stage: "2 · Add value", tab: "Agro-Processing", name: "Misalta Agro Processing Ltd.", status: "dev", page: "agro-processing.html", domain: "",
    img: "photo_cocoa_warehouse.jpg", line: "Cocoa butter and cocoa powder, processed in Taraba State.",
    who: "Commodity buyers and exporters", cta: { label: "Request a supply quote", open: "supply" } },
  { id: "agro-hubs", group: "chain", stage: "3 · Store", tab: "Agro Hubs", name: "Misalta Agro Hubs", status: "plan", page: "agro-hubs.html", domain: "",
    img: "photo_grain_store.jpg", line: "Aggregation, storage and post-harvest handling across Taraba.",
    who: "Farmers, cooperatives and processors", cta: { label: "Partner on agro hubs", open: "invest" } },
  { id: "logistics", group: "chain", stage: "4 · Move", tab: "Logistics", name: "Misalta Logistics", status: "plan", page: "logistics.html", domain: "",
    img: "stock_truck_road.jpg", line: "Cold rooms and specialised transport, from farm gate to buyer and across borders.",
    who: "Producers, traders and industry", cta: { label: "Register interest", href: "logistics.html" } },
  { id: "trade-x", group: "chain", stage: "5 · Sell", tab: "Trade X", name: "Misalta Trade X", status: "soon", page: "trade-x.html", domain: "",
    img: "hero_market_nigeria.jpg", line: "A digital marketplace bridging farmers, buyers and traders, so farmers get a fair price.",
    who: "Farmers, traders and buyers", cta: { label: "Join early access", href: "trade-x.html#early-access" } },
  { id: "energy", group: "enabler", stage: "Power", tab: "Energy", name: "Misalta Energy", status: "plan", page: "energy.html", domain: "",
    img: "photo_solar_irrigation.jpg", art: "sun", line: "Oil and gas services, gas and LPG, power, renewables and bioenergy for industry and communities.",
    who: "Oil and gas operators, energy partners and financiers", cta: { label: "Partner on energy", open: "invest" } },
  { id: "construction", group: "enabler", stage: "Build", tab: "Construction", name: "Misalta Construction", status: "plan", page: "construction.html", domain: "",
    img: "photo_block_factory.jpg", art: "blocks", line: "Concrete blocks, building materials and real estate.",
    who: "Developers, builders and buyers", cta: { label: "Get notified at launch", href: "construction.html" } }
];
/* Optimised photos live in images/photos/<name>-sm|md|lg.webp (see docs/ARCHITECTURE.md).
   Widths per photo, for srcset: [sm, md, lg]. */
const PHOTO_W = { cocoa_pods_hands: [480, 864, 864], cooperative_group: [480, 864, 864], dashboard_ui: [480, 960, 1440], farmer_tablet_field: [480, 864, 864],
  hands_beans_closeup: [480, 864, 864], hero_cocoa_drying: [480, 960, 1600], hero_farmland_nigeria: [480, 960, 1600], hero_field_produce: [480, 864, 864],
  hero_market_nigeria: [480, 960, 1600], hero_training_session: [480, 960, 1600], impact_field_panorama: [480, 960, 1344],
  stock_truck_road: [480, 960, 1600], stock_aerial_tractors: [480, 960, 1600], stock_crop_rows: [480, 960, 1600], stock_grain_closeup: [480, 960, 1600],
  stock_seedlings: [480, 960, 1600], stock_harvest_hands: [480, 960, 1600], stock_drone_field: [480, 960, 1600], stock_field_robot: [480, 960, 1600],
  stock_irrigation_pivot: [480, 960, 1600],
  photo_solar_irrigation: [480, 960, 1600], photo_solar_irawo: [480, 960, 1600], photo_solar_installers: [480, 960, 1600], photo_solar_rooftop: [480, 960, 1600],
  photo_block_factory: [480, 960, 1600], photo_building_site: [480, 960, 1600], photo_dawanau_market: [480, 960, 1600], photo_corn_grains: [480, 960, 1600],
  photo_grain_market: [480, 960, 1600],
  photo_cocoa_warehouse: [480, 960, 1600], photo_cocoa_beans_drying: [480, 960, 1600], photo_cocoa_fermentation: [480, 960, 1600], photo_cocoa_moisture: [480, 960, 1600],
  photo_grain_store: [480, 960, 1600], photo_maize_sacks: [480, 960, 1600], photo_traditional_silo: [480, 960, 1600], photo_taraba_tea: [480, 960, 1600],
  photo_taraba_gembu: [480, 960, 1600], photo_taraba_mambilla: [480, 960, 1600], photo_jalingo_bridge: [480, 960, 1600] };
const photoBase = f => f.replace(/\.(jpg|png)$/, "");
const photoUrl = (f, size = "lg") => PHOTO_W[photoBase(f)] ? `images/photos/${photoBase(f)}-${size}.webp` : f;
const photoImg = (f, alt = "") => {
  const b = photoBase(f), w = PHOTO_W[b];
  if (!w) return `<img src="${f}" alt="${alt}" loading="lazy">`;
  const set = [["sm", w[0]], ["md", w[1]], ["lg", w[2]]].filter((x, i, a) => a.findIndex(y => y[1] === x[1]) === i);
  return `<img src="${photoUrl(f, "md")}" srcset="${set.map(([t, px]) => `${photoUrl(f, t)} ${px}w`).join(", ")}" sizes="(max-width: 700px) 92vw, 360px" alt="${alt}" loading="lazy">`;
};
const STATUS = { op: "Operating", dev: "In development", soon: "Launching soon", plan: "Planned" };
const bizUrl = b => b.domain ? "https://" + b.domain : b.page;

/* ======================================================================= */
/* NEWSROOM data. One object per story:
   - first 5 stories feed the ticker on the home page
   - news.html renders any story in full detail via news.html#<slug>
   - grid cards below the article load in batches as the page scrolls
   body items: ["p", paragraph] | ["img", src, caption]
   Photos go in /images. Attachment notes in comments are private. */
const NEWS = [
  {
    slug: "csn-leadership-meeting",
    tag: "Meeting",
    date: "October 2026",
    title: "Misalta meets the leadership of the Computer Society of Nigeria",
    lede: "Our Founder & CEO, Samaila Bah, held a working meeting with the National Chairman of the Computer Society of Nigeria, Mr Abu — centred on technology, innovation and collaboration.",
    cover: "images/news-csn.avif",
    coverCap: "Illustration stand-in; the official photo from the meeting will replace it.",
    body: [
      ["p", "Our Founder & CEO, Samaila Bah, held a working meeting with the National Chairman of the Computer Society of Nigeria, Mr Abu. The conversation centred on technology, innovation and the role practical platforms can play in connecting people to opportunity."],
      ["img", "images/news-csn.avif", "Meeting with the leadership of the Computer Society of Nigeria."],
      ["p", "The discussion explored avenues for collaboration between the technology community and the private sector — from digital skills to systems that make everyday commerce easier to run."],
      ["p", "Misalta Consulting delivers technology-enabled services across Nigeria today. Engagements like this keep the group close to the country's wider innovation agenda and to the people shaping it."],
      ["p", "Further updates from this meeting will follow as they are agreed."]
    ]
  },
  {
    slug: "whatsmed-celebration",
    tag: "Milestone",
    date: "October 2026",
    title: "CEO celebrates with Whatsmed on their win",
    lede: "Our Founder & CEO, Samaila Bah, joined the Whatsmed team to celebrate their recent win.",
    cover: "images/news-whatsmed.webp",
    coverCap: "Celebrating the win with the Whatsmed team.",
    body: [
      ["p", "Samaila Bah joined the Whatsmed team to celebrate their recent win — a milestone for a home-grown technology company making its mark."],
      ["img", "images/news-whatsmed.webp", "Celebrating the win with the Whatsmed team."],
      ["p", "Wins like this reflect the growing confidence of Nigerian technology companies and the people building them."],
      ["p", "Misalta Global works across services, agro-industry, trade and energy. Keeping close to the wider start-up community is part of how the group stays sharp on innovation and execution."],
      ["p", "Congratulations to the whole Whatsmed team."]
    ]
  }
];
/* ======================================================================= */

const E = CONFIG.emails;

const page = (location.pathname.split("/").pop() || "index").replace(/(\.html)?$/, ".html"); // clean URLs: /about → about.html
/* social icons: every network shows; one without an address yet gets a dummy link */
const SOC_I = {
  LinkedIn: '<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" fill="currentColor" stroke="none"/>',
  Facebook: '<path d="M14 8h3V4h-3a4 4 0 00-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8z"/>',
  Instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  X: '<path d="M4 4l6.5 8.5L4 20h2l5.4-6.3L16 20h4l-6.8-9L19.4 4h-2l-5 5.8L8 4z" fill="currentColor" stroke="none"/>',
  YouTube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor"/>',
  TikTok: '<path d="M14 3v11.5a3.5 3.5 0 11-3.5-3.5"/><path d="M14 3c.5 2.8 2.3 4.6 5 5"/>'
};
const socIcon = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SOC_I[n] || ""}</svg>`;
const socLink = (n, u, cls = "") => u
  ? `<a class="${cls}" href="${u}" target="_blank" rel="noopener" aria-label="${n}" title="${n}">${socIcon(n)}</a>`
  : `<a class="${cls}" href="#" data-soc-dummy aria-label="${n}" title="${n}">${socIcon(n)}</a>`;
const socialLinks = Object.entries(CONFIG.social).map(([n, u]) => socLink(n, u, "c-soc")).join("");
const mark = `<img class="logo-img" src="images/logo.jfif" alt="Misalta Global Concepts Ltd. logo"><span class="logo-text">Misalta<small>GLOBAL LTD.</small><small class="motto">Building Tomorrow, Growing Value</small></span>`;

const ico = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const topbar = `<div class="topbar"><div class="container">
  <div class="tb-l"><a href="mailto:${E.info}">${ico('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/>')}${E.info}</a><a href="tel:${CONFIG.phone.replace(/\s/g, "")}">${ico('<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/>')}${CONFIG.phone}</a></div>
  <div class="tb-soc">${Object.entries(CONFIG.social).map(([n, u]) => socLink(n, u)).join("")}</div>
</div></div>`;

/* ================= header: main menu, mega panels, mobile drawer =================
   Built from BUSINESSES and NEWS, so the menu always matches the rest of the site. */
const svgI = (d, w = 1.8) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const NI = {
  chev: '<path d="M6 9l6 6 6-6"/>', arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>', close: '<path d="M6 6l12 12M18 6L6 18"/>',
  about: '<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>', people: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M15 14.5c3 0 6 1.9 6 5.5"/>',
  journey: '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>', news: '<path d="M4 19.5A2.5 2.5 0 016.5 17H20V3H6.5A2.5 2.5 0 004 5.5z"/><path d="M4 19.5V21h16"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/>', phone: '<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  chat: '<path d="M21 11.5a8.4 8.4 0 01-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1121 11.5z"/>', invest: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>',
  grad: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>', building: '<path d="M4 21V5a2 2 0 012-2h8a2 2 0 012 2v16"/><path d="M16 9h2a2 2 0 012 2v10M2 21h20M8 7h4M8 11h4M8 15h4"/>',
  cart: '<path d="M3 4h2l2.4 11.2a2 2 0 002 1.6h7.7a2 2 0 001.9-1.5L21 8H6"/><circle cx="10" cy="20.5" r="1.2"/><circle cx="17" cy="20.5" r="1.2"/>',
  bot: '<rect x="4" y="7" width="16" height="13" rx="3"/><path d="M12 3v4M9 13h.01M15 13h.01M9 17h6"/>',
  megaphone: '<path d="M3 11v2a2 2 0 002 2h2l5 4V5L7 9H5a2 2 0 00-2 2z"/><path d="M16 8a5 5 0 010 8M19 5a9 9 0 010 14"/>',
  rig: '<path d="M12 2l-6 20M12 2l6 20M8.5 13h7M7.3 17h9.4M10 8h4"/><path d="M3 22h18"/>',
  drone: '<circle cx="5" cy="5" r="2.5"/><circle cx="19" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/>',
  license: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h5"/><circle cx="15" cy="16" r="2"/>', sprout: '<path d="M12 21v-9"/><path d="M12 12C12 7 8 4 3 4c0 5 4 8 9 8z"/><path d="M12 14c0-4 3-7 9-7 0 4-3 7-9 7z"/>'
};
const onPage = list => list.includes(page);
const bizItem = b => `<a class="mp-biz" href="${bizUrl(b)}"${b.domain ? ' target="_blank" rel="noopener"' : ""}><img src="${photoUrl(b.img, "sm")}" alt="" loading="lazy" width="56" height="56"><span><small>${b.group === "chain" ? "Stage " + b.stage : "Enabler · " + b.stage}</small><b>${b.name.replace(" Ltd.", "")}</b></span><i class="chip ${b.status}">${STATUS[b.status]}</i></a>`;
const chainBiz = BUSINESSES.filter(b => b.group === "chain"), enablerBiz = BUSINESSES.filter(b => b.group === "enabler");
const latest = NEWS[0];
const PANELS = {
  company: { label: "Company", pages: ["about.html", "news.html", "credits.html", "trust.html", "faq.html"], html: `
    <div class="mp-col mp-col-wide"><span class="mp-label">The group</span>
      <a class="mp-link" href="about.html"><span class="mp-ic">${svgI(NI.about)}</span><span><b>About Misalta</b><small>Our story, mission and values since 2019</small></span></a>
      <a class="mp-link" href="about.html#leadership"><span class="mp-ic">${svgI(NI.people)}</span><span><b>Our people</b><small>CEO, board, directors and advisers</small></span></a>
      <a class="mp-link" href="about.html#journey"><span class="mp-ic">${svgI(NI.journey)}</span><span><b>Our journey</b><small>From professional services to a group</small></span></a>
      <a class="mp-link" href="trust.html"><span class="mp-ic">${svgI(NI.shield)}</span><span><b>Trust &amp; compliance</b><small>Licences, certifications and standards</small></span></a>
      <a class="mp-link" href="news.html"><span class="mp-ic">${svgI(NI.news)}</span><span><b>News &amp; updates</b><small>What the group is doing</small></span></a>
      <a class="mp-link" href="faq.html"><span class="mp-ic">${svgI(NI.about)}</span><span><b>FAQ</b><small>Quick answers to common questions</small></span></a>
      <a class="mp-link" href="contact.html"><span class="mp-ic">${svgI(NI.mail)}</span><span><b>Contact</b><small>Reach the right team directly</small></span></a>
    </div>
    ${latest ? `<a class="mp-feature mp-news" href="news.html#${latest.slug}"><img src="${latest.cover}" alt="" loading="lazy"><span class="mp-ftext"><small>${latest.tag} · ${latest.date}</small><b>${latest.title}</b><em>Read the story ${svgI(NI.arrow)}</em></span></a>` : ""}` },
  businesses: { label: "Our Business", pages: ["businesses.html", ...BUSINESSES.map(b => b.page), "what_to_expect.html", "training.html"], html: `
    <div class="mp-col"><span class="mp-label">The value chain</span>${chainBiz.map(bizItem).join("")}</div>
    <div class="mp-col"><span class="mp-label">Enablers</span>${enablerBiz.map(bizItem).join("")}
      <a class="mp-all" href="training.html">Training Academy: 33 courses ${svgI(NI.arrow)}</a>
      <a class="mp-all" href="businesses.html">See all eight businesses ${svgI(NI.arrow)}</a></div>
    <div class="mp-feature" style="--fbg:url('${photoUrl("photo_taraba_tea.jpg", "md")}')"><span class="mp-ftext"><small>One group · Eight businesses</small><b>Find the business that fits what you need</b><span class="mp-acts"><a class="btn btn-gold btn-sm" href="get-started.html">Get started</a><a class="btn btn-ghost btn-sm" href="investment.html">Invest</a></span></span></div>` }
};
const navLink = (href, label) => `<li><a class="mnav-link${page === href ? " is-current" : ""}" href="${href}"${page === href ? ' aria-current="page"' : ""}>${label}</a></li>`;
const navTrigger = key => `<li><button class="mnav-link mnav-trigger${onPage(PANELS[key].pages) ? " is-current" : ""}" type="button" aria-expanded="false" aria-controls="mp-${key}" data-panel="${key}">${PANELS[key].label}${svgI(NI.chev, 2.2)}</button></li>`;
const acc = (key, body) => `<div class="dr-sec"><button class="dr-acc" type="button" aria-expanded="${onPage(PANELS[key].pages)}" aria-controls="dr-${key}">${PANELS[key].label}${svgI(NI.chev, 2.2)}</button><div class="dr-body" id="dr-${key}"${onPage(PANELS[key].pages) ? "" : " hidden"}>${body}</div></div>`;
const telHref = "tel:" + CONFIG.phone.replace(/\s/g, "");

document.body.insertAdjacentHTML("afterbegin", `
<a class="skip" href="#main">Skip to content</a>
<header class="nav" id="hdr">${topbar}<div class="container nav-in">
  <a class="logo" href="index.html" aria-label="Misalta Global Concepts Ltd., home">${mark}</a>
  <nav class="mnav" id="mnav" aria-label="Main"><ul class="mnav-list">
    ${navLink("index.html", "Home")}${navTrigger("company")}${navTrigger("businesses")}${navLink("investment.html", "Invest &amp; Partner")}
  </ul></nav>
  <div class="nav-actions">
    <a class="nav-contact${page === "contact.html" ? " is-current" : ""}" href="contact.html">Contact</a>
    <a class="btn btn-gold nav-cta" href="get-started.html">Get started</a>
    <button class="burger" id="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="drawer"><span></span><span></span><span></span></button>
  </div>
</div>
<div class="mpanels">${Object.entries(PANELS).map(([k, p]) => `<div class="mpanel" id="mp-${k}" role="region" aria-label="${p.label}"><div class="container mp-grid mp-${k}">${p.html}</div></div>`).join("")}</div>
</header>
<div class="nav-dim" id="navDim"></div>
<div class="drawer-scrim" id="scrim"></div>
<aside class="drawer" id="drawer" aria-label="Menu" aria-modal="true" role="dialog">
  <div class="dr-top"><a class="logo" href="index.html">${mark}</a><button class="dr-close" id="drClose" type="button" aria-label="Close menu">${svgI(NI.close, 2.2)}</button></div>
  <div class="dr-scroll">
    <a class="dr-link${page === "index.html" ? " is-current" : ""}" href="index.html">Home</a>
    ${acc("company", PANELS.company.html.split('<a class="mp-feature')[0].replace('mp-col mp-col-wide', 'mp-col'))}
    ${acc("businesses", `<div class="mp-col"><span class="mp-label">The value chain</span>${chainBiz.map(bizItem).join("")}<span class="mp-label">Enablers</span>${enablerBiz.map(bizItem).join("")}<a class="mp-all" href="training.html">Training Academy: 33 courses ${svgI(NI.arrow)}</a><a class="mp-all" href="businesses.html">See all eight businesses ${svgI(NI.arrow)}</a></div>`)}
    <a class="dr-link${page === "investment.html" ? " is-current" : ""}" href="investment.html">Invest &amp; Partner</a>
    <a class="dr-link${page === "contact.html" ? " is-current" : ""}" href="contact.html">Contact</a>
  </div>
  <div class="dr-foot">
    <a class="btn btn-gold dr-cta" href="get-started.html">Get started</a>
    <div class="dr-quick">
      <a href="${telHref}">${svgI(NI.phone)}<span>Call</span></a>
      <a data-wa href="contact.html" target="_blank" rel="noopener">${svgI(NI.chat)}<span>WhatsApp</span></a>
      <a href="mailto:${E.info}">${svgI(NI.mail)}<span>Email</span></a>
    </div>
  </div>
</aside>`);
const firstSec = document.querySelector("section");
if (firstSec) { firstSec.id ||= "main"; document.querySelector(".skip").href = "#" + firstSec.id; }

/* ================= footer: brand + newsletter, link columns, contact routes, legal bar =================
   White footer built from CONFIG, BUSINESSES and E, so contact details and statuses stay in one place. */
const fSocial = Object.entries(CONFIG.social).map(([n, u]) => socLink(n, u, "f-soc")).join("");
const fBiz = b => `<a href="${bizUrl(b)}"${b.domain ? ' target="_blank" rel="noopener"' : ""}><span class="f-dot ${b.status}" title="${STATUS[b.status]}" aria-hidden="true"></span>${b.name.replace(" Ltd.", "")}<span class="sr">, ${STATUS[b.status].toLowerCase()}</span></a>`;
const ROUTES = [["Investment & partnership", E.invest], ["Supply & offtake", E.supply], ["Consulting services", E.services], ["Media & press", E.media]];
const footerHTML = `
<footer class="site-foot"><div class="container">
  <div class="f-top">
    <div class="f-brand">
      <a class="logo" href="index.html" aria-label="Misalta Global Concepts Ltd., home">${mark}</a>
      <p>The parent company of eight businesses that grow, process, store, move and sell Nigerian produce, backed by our own power, construction and consulting teams.</p>
      <div class="f-socs">${fSocial}</div>
    </div>
    <div class="f-news">
      <span class="f-kicker">Newsletter</span>
      <h3>Get group news, new ventures and investment openings first.</h3>
      <form id="newsForm" class="f-form"><input type="email" name="Email" placeholder="Your email address" required aria-label="Email address"><button class="btn btn-green">Subscribe ${svgI(NI.arrow, 2)}</button></form>
      <small>One short update a month at most. See our <a href="privacy.html">privacy notice</a>.</small>
    </div>
  </div>
  <div class="f-cols">
    <div class="f-col"><h4>Company</h4><a href="about.html">About Misalta</a><a href="about.html#leadership">Our people</a><a href="about.html#journey">Our journey</a><a href="trust.html">Trust &amp; compliance</a><a href="training.html">Training Academy</a><a href="faq.html">FAQ</a><a href="news.html">News &amp; updates</a><a href="investment.html">Invest &amp; Partner</a><a href="get-started.html">Get started</a></div>
    <div class="f-col"><h4>The value chain</h4>${chainBiz.map(fBiz).join("")}</div>
    <div class="f-col"><h4>Enablers</h4>${enablerBiz.map(fBiz).join("")}<a class="f-more" href="businesses.html">All eight businesses ${svgI(NI.arrow, 2)}</a></div>
    <div class="f-col f-contact"><h4>Get in touch</h4>
      <a href="mailto:${E.info}">${svgI(NI.mail)}<span>${E.info}</span></a>
      <a href="${telHref}">${svgI(NI.phone)}<span>${CONFIG.phone}</span></a>
      <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener">${svgI(NI.chat)}<span>WhatsApp us</span></a>
      <span class="f-addr">${svgI('<path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>')}<span>${CONFIG.address}</span></span>
    </div>
  </div>
  <div class="f-routes"><span class="f-kicker">Reach the right team</span>${ROUTES.map(([t, m]) => `<a href="mailto:${m}"><b>${t}</b><span>${m}</span></a>`).join("")}</div>
  <div class="f-legal">
    <span>© ${new Date().getFullYear()} ${CONFIG.company} ${CONFIG.rc}. All rights reserved.</span>
    <nav class="f-lnav" aria-label="Legal"><a href="privacy.html">Privacy notice</a><a href="credits.html">Photo credits</a><a href="contact.html">Contact</a></nav>
    <a class="f-top-btn" href="#top" id="toTop">Back to top ${svgI('<path d="M12 19V5M6 11l6-6 6 6"/>', 2)}</a>
  </div>
</div></footer>
`;
document.body.insertAdjacentHTML("beforeend", footerHTML + `

<div class="fab"><button class="ai-launch" id="aiLaunch" type="button" aria-controls="aiPanel" aria-expanded="false" aria-label="Ask Misalta AI"><span class="ai-launch-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 01-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1121 11.5z"/><path d="M12 7.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z"/></svg></span><span class="ai-launch-txt">Ask Misalta AI</span></button><a class="wa" href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener" title="WhatsApp" aria-label="WhatsApp">💬</a></div>

<div class="modal" id="modal" role="dialog" aria-modal="true" aria-label="Make an enquiry"><div class="box"><button class="close" id="mclose" aria-label="Close">×</button>
  <h3 style="font-size:1.8rem">Make an Enquiry</h3><p style="color:#5a6a60">Tell us what you are interested in and the right team will follow up.</p>
  <div class="tabs"><button class="on" data-tab="invest">Investment &amp; Partnership</button><button data-tab="supply">Agro-Processing &amp; Supply</button><button data-tab="services">Misalta Consulting</button></div>
  <form class="mf" id="f-invest" data-kind="Investment / Partnership Enquiry" data-to="${E.invest}">
    <div class="row"><div class="field"><label>Full name</label><input name="Name" required></div><div class="field"><label>Email</label><input type="email" name="Email" required></div></div>
    <div class="row"><div class="field"><label>Organisation</label><input name="Organisation"></div><div class="field"><label>Country</label><input name="Country" required></div></div>
    <div class="field"><label>Area of interest</label><select name="Interest"><option>Agro-processing</option><option>Agro hubs &amp; infrastructure</option><option>Misalta Trade X</option><option>Development partnership</option><option>Other</option></select></div>
    <div class="field"><label>Message</label><textarea name="Message" rows="3"></textarea></div>
    <label class="consent"><input type="checkbox" name="Consent" value="Yes" required> I agree to be contacted about this enquiry. See the <a href="privacy.html">privacy notice</a>.</label>
    <button class="btn btn-gold" style="width:100%;justify-content:center">Send Investment Enquiry</button></form>
  <form class="mf hidden" id="f-supply" data-kind="Agro-Processing & Supply Enquiry" data-to="${E.supply}">
    <div class="row"><div class="field"><label>Full name / Company</label><input name="Name" required></div><div class="field"><label>Email</label><input type="email" name="Email" required></div></div>
    <div class="row"><div class="field"><label>Phone</label><input name="Phone"></div><div class="field"><label>Country</label><input name="Country" required></div></div>
    <div class="row"><div class="field"><label>Product of interest</label><select name="Product"><option>Cocoa butter</option><option>Cocoa powder</option><option>Cocoa beans</option><option>Other agricultural product</option></select></div><div class="field"><label>Estimated quantity</label><input name="Quantity" placeholder="e.g. 50 tonnes"></div></div>
    <div class="field"><label>Quality / grade required</label><input name="Quality" placeholder="e.g. Grade A, food-grade, 99.5% purity"></div>
    <div class="field"><label>Message</label><textarea name="Message" rows="3"></textarea></div>
    <label class="consent"><input type="checkbox" name="Consent" value="Yes" required> I agree to be contacted about this enquiry. See the <a href="privacy.html">privacy notice</a>.</label>
    <button class="btn btn-green" style="width:100%;justify-content:center">Send Supply Enquiry</button></form>
  <form class="mf hidden" id="f-services" data-kind="Misalta Consulting Enquiry" data-to="${E.services}">
    <div class="row"><div class="field"><label>Full name</label><input name="Name" required></div><div class="field"><label>Email</label><input type="email" name="Email" required></div></div>
    <div class="row"><div class="field"><label>Organisation</label><input name="Organisation"></div><div class="field"><label>Phone</label><input name="Phone"></div></div>
    <div class="field"><label>Service needed</label><select name="Service"><option>Training and courses</option><option>Digital marketing services</option><option>Data protection and compliance</option><option>Asset and facility management</option><option>Procurement support</option><option>Financial advisory</option><option>Oil and gas services</option><option>Oil and gas licensing support</option><option>Drone services</option><option>Agentic AI</option><option>Agro services</option><option>Other</option></select></div>
    <div class="field"><label>Message</label><textarea name="Message" rows="3"></textarea></div>
    <label class="consent"><input type="checkbox" name="Consent" value="Yes" required> I agree to be contacted about this enquiry. See the <a href="privacy.html">privacy notice</a>.</label>
    <button class="btn btn-gold" style="width:100%;justify-content:center">Send Consulting Enquiry</button></form>
  <p class="note">Submitting opens your email app with the message prepared for the right team.</p>
</div></div><div class="toast" id="toast" role="status"></div>`);

const q0 = id => document.getElementById(id);

/* analytics: only on the live domain with CONFIG.analytics on; track() is a no-op otherwise */
const LIVE = /(^|\.)misaltaglobal\.com$/.test(location.hostname) && CONFIG.analytics;
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
if (LIVE) { const va = document.createElement("script"); va.defer = true; va.src = "/_vercel/insights/script.js"; document.head.appendChild(va); }
const track = (name, data = {}) => { if (LIVE) window.va("event", { name, data: { page: location.pathname, ...data } }); };
document.addEventListener("click", e => {
  const a = e.target.closest("a[href]"); if (!a) return;
  const h = a.getAttribute("href");
  if (/^mailto:/.test(h)) track("Contact click", { channel: "email" });
  else if (/^tel:/.test(h)) track("Contact click", { channel: "phone" });
  else if (/wa\.me\//.test(h)) track("Contact click", { channel: "whatsapp" });
  else if (/get-started\.html/.test(h)) track("Get started click", { from: a.textContent.trim().slice(0, 40) });
});

/* images that fail to load remove themselves (or their <figure>); no inline handlers, so a strict CSP works */
document.addEventListener("error", e => {
  const t = e.target;
  if (t.tagName === "IMG" && t.dataset.fallback) (t.dataset.fallback === "figure" ? t.closest("figure") || t : t).remove();
}, true);

/* pages in subfolders use <base href="/">; keep "#section" links on the current page */
if (document.querySelector("base")) document.querySelectorAll('a[href^="#"]').forEach(a => { if (a.getAttribute("href").length > 1) a.href = location.pathname + a.getAttribute("href"); });

/* every form field gets a programmatic label: link each .field label to its control */
document.querySelectorAll(".field").forEach((fl, n) => {
  const lab = fl.querySelector("label"), ctl = fl.querySelector("input,select,textarea");
  if (!lab || !ctl || lab.htmlFor) return;
  if (!ctl.id) ctl.id = "fld-" + (ctl.closest("form")?.id || "f") + "-" + (ctl.name || n);
  lab.htmlFor = ctl.id;
});

/* header: shrink on scroll */
const hdr = document.getElementById("hdr");
const onScroll = () => hdr.classList.toggle("scrolled", scrollY > 40);
addEventListener("scroll", onScroll, { passive: true }); onScroll();

/* desktop mega panels: hover intent, click, keyboard; one open at a time */
const triggers = [...document.querySelectorAll(".mnav-trigger")], navDim = q0("navDim");
const wide = matchMedia("(min-width:1100px)"), canHover = matchMedia("(hover:hover)");
let openKey = null, tOpen, tClose;
const openPanel = key => {
  clearTimeout(tClose);
  if (openKey === key) return;
  openKey = key;
  triggers.forEach(t => t.setAttribute("aria-expanded", t.dataset.panel === key));
  document.querySelectorAll(".mpanel").forEach(p => p.classList.toggle("open", p.id === "mp-" + key));
  hdr.classList.add("panel-open"); navDim.classList.add("show");
};
const closePanels = (refocus = false) => {
  clearTimeout(tOpen); clearTimeout(tClose);
  if (!openKey) return;
  const t = triggers.find(x => x.dataset.panel === openKey);
  openKey = null;
  triggers.forEach(x => x.setAttribute("aria-expanded", "false"));
  document.querySelectorAll(".mpanel.open").forEach(p => p.classList.remove("open"));
  hdr.classList.remove("panel-open"); navDim.classList.remove("show");
  if (refocus && t) t.focus();
};
triggers.forEach(t => {
  const key = t.dataset.panel;
  t.addEventListener("click", () => openKey === key ? closePanels() : openPanel(key));
  t.addEventListener("mouseenter", () => { if (!canHover.matches) return; clearTimeout(tClose); clearTimeout(tOpen); tOpen = setTimeout(() => openPanel(key), openKey ? 0 : 80); });
  t.addEventListener("mouseleave", () => clearTimeout(tOpen));
  t.addEventListener("keydown", e => {
    if (e.key === "ArrowDown") { e.preventDefault(); openPanel(key); q0("mp-" + key).querySelector("a,button")?.focus(); }
  });
});
hdr.addEventListener("mouseleave", () => { if (canHover.matches && openKey) tClose = setTimeout(() => closePanels(), 180); });
hdr.addEventListener("mouseenter", () => clearTimeout(tClose));
document.querySelectorAll(".mnav-link:not(.mnav-trigger), .nav-contact, .nav-cta, .logo").forEach(a => a.addEventListener("mouseenter", () => { if (canHover.matches && openKey) tClose = setTimeout(() => closePanels(), 180); }));
navDim.addEventListener("click", () => closePanels());
document.querySelectorAll(".mpanel a").forEach(a => a.addEventListener("click", () => closePanels()));
document.addEventListener("click", e => { if (openKey && !e.target.closest("#hdr")) closePanels(); });
/* focus leaving the header (Tab past the last panel link) closes the panel */
hdr.addEventListener("focusout", e => { if (openKey && !hdr.contains(e.relatedTarget)) closePanels(); });
wide.addEventListener("change", () => { closePanels(); if (wide.matches) setDrawer(false); });

/* mobile drawer: slide-in, focus trap, scroll lock, accordions */
const burger = q0("burger"), drawer = q0("drawer"), scrim = q0("scrim");
const setDrawer = o => {
  if (o === drawer.classList.contains("open")) return;
  drawer.classList.toggle("open", o); scrim.classList.toggle("show", o);
  document.documentElement.classList.toggle("drawer-lock", o);
  burger.setAttribute("aria-expanded", o);
  drawer.inert = !o;
  if (o) { closePanels(); setTimeout(() => q0("drClose").focus(), 60); } else burger.focus({ preventScroll: true });
};
drawer.inert = true;
burger.addEventListener("click", () => { modal && modal.classList.remove("open"); setDrawer(true); });
q0("drClose").addEventListener("click", () => setDrawer(false));
scrim.addEventListener("click", () => setDrawer(false));
drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setDrawer(false)));
drawer.querySelectorAll(".dr-acc").forEach(b => b.addEventListener("click", () => {
  const body = q0(b.getAttribute("aria-controls")), o = b.getAttribute("aria-expanded") !== "true";
  b.setAttribute("aria-expanded", o); body.hidden = !o;
}));
drawer.addEventListener("keydown", e => {
  if (e.key !== "Tab") return;
  const f = [...drawer.querySelectorAll("a[href],button:not([disabled])")].filter(x => x.offsetParent);
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (drawer.classList.contains("open")) setDrawer(false);
  else if (openKey) closePanels(true);
});
const closeMenus = () => { closePanels(); setDrawer(false); };

/* modal */
const modal = document.getElementById("modal");
const toast = m => { const t = document.getElementById("toast"); t.textContent = m; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 4500); };
function tab(k) {
  document.querySelectorAll(".tabs button").forEach(b => b.classList.toggle("on", b.dataset.tab === k));
  document.getElementById("f-invest").classList.toggle("hidden", k !== "invest");
  document.getElementById("f-supply").classList.toggle("hidden", k !== "supply");
  document.getElementById("f-services").classList.toggle("hidden", k !== "services");
}
const dataOpenHandler = e => {
  const o = e.target.closest("[data-open]");
  if (o) { e.preventDefault(); track("Enquiry opened", { type: o.dataset.open }); tab(o.dataset.open); modal.classList.add("open"); closeMenus(); }
  const t = e.target.closest("[data-tab]"); if (t) tab(t.dataset.tab);
};
document.addEventListener("click", dataOpenHandler);
document.getElementById("mclose").onclick = () => modal.classList.remove("open");
modal.onclick = e => { if (e.target === modal) modal.classList.remove("open"); };
addEventListener("keydown", e => e.key === "Escape" && modal.classList.remove("open"));

/* forms: prepare an email to the right team */
/* Send a form. Posts to Web3Forms when a key is set for the route (or a default
   key exists), so the enquiry lands in the team inbox; otherwise opens the
   visitor's email app with the message prepared. */
const FK = CONFIG.forms.keys;
const formsLive = Object.values(FK).some(Boolean);
const routeOf = to => (Object.entries(E).find(([, v]) => v === to) || ["info"])[0];
async function sendMail(form, kind, to, msg) {
  const d = new FormData(form);
  const fields = Object.fromEntries([...d.entries()].filter(([, v]) => v !== ""));
  const route = routeOf(to), key = FK[route] || FK.default;
  const btn = form.querySelector("button[type=submit],button:not([type])");
  const done = text => { track(key ? "Enquiry sent" : "Enquiry prepared", { type: kind.slice(0, 60), team: route }); toast(text); form.reset(); modal.classList.remove("open"); form.dispatchEvent(new CustomEvent("sent")); };
  if (key) {
    if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = "Sending…"; }
    try {
      const r = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: key, subject: `${kind} – ${CONFIG.short} website`, from_name: fields.Name || "Misalta website", replyto: fields.Email || "", Enquiry: kind, Team: to, Page: location.pathname, ...fields }) });
      const j = await r.json();
      if (!j.success) throw new Error(j.message || "Send failed");
      done(`${msg.replace(/ready to send\.?/, "sent.")} ${CONFIG.forms.replyPromise}`);
    } catch (err) {
      toast("We couldn't send that just now, so we've opened your email app instead.");
      location.href = mailtoUrl(to, kind, fields);
    } finally { if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label; } }
    return;
  }
  location.href = mailtoUrl(to, kind, fields);
  done(msg);
}
function mailtoUrl(to, kind, fields) {
  const body = kind + "\n\n" + Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(kind + " – " + CONFIG.short)}&body=${encodeURIComponent(body)}`;
}
if (formsLive) document.querySelectorAll("p.note").forEach(n => { if (/email app/i.test(n.textContent)) n.textContent = "Your message goes straight to the right Misalta team. " + CONFIG.forms.replyPromise; });
/* page forms name their team with data-route="supply" etc.; resolve to the inbox */
document.querySelectorAll("form[data-route]").forEach(f => f.dataset.to = E[f.dataset.route] || E.info);
/* business pages: "full website coming soon", or a link once BUSINESSES[].domain is set */
document.querySelectorAll(".domain-note[data-biz]").forEach(n => {
  const b = BUSINESSES.find(x => x.id === n.dataset.biz); if (!b) return;
  n.innerHTML = b.domain ? `${b.name} has its own website: <a href="https://${b.domain}" target="_blank" rel="noopener">Visit ${b.domain} ↗</a>` : `A dedicated ${b.name} website is coming soon. Until then, this page and the Misalta team are your starting point.`;
});
document.querySelectorAll("form.mf").forEach(f => f.addEventListener("submit", e => {
  e.preventDefault(); sendMail(f, f.dataset.kind, f.dataset.to, "Thank you. Your enquiry is ready to send.");
}));
const cf = document.getElementById("contactForm");
if (cf) cf.addEventListener("submit", e => {
  e.preventDefault();
  const cat = cf.querySelector("[name=Category]").selectedOptions[0];
  sendMail(cf, cat.value, E[cat.dataset.route] || E.info, "Thank you. Your message is ready to send.");
});
const tf = document.getElementById("tradexForm");
if (tf) tf.addEventListener("submit", e => {
  e.preventDefault();
  sendMail(tf, "Misalta Trade X Early Access", E.tradex, "Thank you for your interest in Misalta Trade X. Your details have been received. Our team may contact you with updates about the platform and early-access opportunities.");
});

/* reveal on scroll */
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* counters */
const cio = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return;
  const el = en.target, end = +el.dataset.count, suf = el.dataset.suf || ""; let s = null;
  const step = ts => { s = s || ts; const p = Math.min((ts - s) / 1600, 1); el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * end) + suf; if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step); cio.unobserve(el);
}), { threshold: .5 });
document.querySelectorAll("[data-count]").forEach(el => cio.observe(el));

/* business cards (#bizGrid) built from BUSINESSES */
const BIZ_ICON = {
  consulting: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
  farms: '<path d="M12 21v-9"/><path d="M12 12C12 7 8 4 3 4c0 5 4 8 9 8z"/><path d="M12 14c0-4 3-7 9-7 0 4-3 7-9 7z"/>',
  "agro-processing": '<path d="M3 21V10l6 4v-4l6 4V5h4v16z"/><path d="M2 21h20"/>',
  "agro-hubs": '<path d="M3 21V9l9-5 9 5v12"/><path d="M7 21v-8h10v8M7 17h10"/>',
  logistics: '<path d="M1 6h13v10H1zM14 10h4l3 3v3h-7"/><circle cx="5" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  "trade-x": '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M9 15l2-3 2 2 2-4"/>',
  energy: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  construction: '<path d="M3 21h18M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/>'
};
document.querySelectorAll("#bizGrid, [data-biz-grid]").forEach(bizGrid => {
  const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const want = bizGrid.dataset.bizGrid || "all";
  const list = want === "all" ? BUSINESSES : BUSINESSES.filter(b => b.group === want);
  bizGrid.innerHTML = list.map((b, n) => {
    const cta = b.cta.open ? `<a class="btn btn-green btn-sm" href="#" data-open="${b.cta.open}">${b.cta.label}</a>` : `<a class="btn btn-green btn-sm" href="${b.cta.href}">${b.cta.label}</a>`;
    const ext = b.domain ? ' target="_blank" rel="noopener"' : "";
    const media = b.img ? photoImg(b.img) : `<span aria-hidden="true">${svg(BIZ_ICON[b.id]).replace('stroke-width="1.7"', 'stroke-width="1"')}</span>`;
    return `<article class="vcard reveal${n % 4 ? " d" + (n % 4) : ""}"${want === "all" ? "" : ` id="${b.id}"`}><a class="vimg${b.img ? "" : " art"}" href="${bizUrl(b)}"${ext} tabindex="-1" aria-hidden="true">${media}</a><div class="vbody">
      <span class="ibadge">${svg(BIZ_ICON[b.id])}</span>
      ${want !== "all" ? `<span class="vstage">${b.group === "chain" ? "Stage " : ""}${b.stage}</span>` : ""}<span class="chip ${b.status}">${STATUS[b.status]}</span><h3><a href="${bizUrl(b)}"${ext}>${b.name}</a></h3><p>${b.line}</p><p class="vfor"><b>For:</b> ${b.who}</p>
      <div class="vacts">${cta}<a class="vmore" href="${bizUrl(b)}"${ext}>${b.domain ? "Visit site ↗" : "Learn more →"}</a></div></div></article>`;
  }).join("");
  bizGrid.querySelectorAll(".reveal").forEach(el => io.observe(el));
});

/* hero showcase: slide 1 (the group) is static HTML; one slide per business is
   built from BUSINESSES. Labelled tabs keep every business visible and clickable.
   Auto-advances, pauses on hover/focus/touch, stops for good once a tab is picked,
   never auto-advances for reduced-motion users. Photos load one slide ahead. */
const show = document.getElementById("showcase");
if (show) {
  const icoArt = { sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>', blocks: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 9.3h18M3 14.6h18M9 4v5.3M15 9.3v5.3M9 14.6V20"/>' };
  const shade = "linear-gradient(90deg,rgba(7,28,17,.86) 0%,rgba(7,28,17,.62) 55%,rgba(7,28,17,.35) 100%)";
  BUSINESSES.forEach(b => {
    const cta = b.cta.open ? `<a class="btn btn-gold" href="#" data-open="${b.cta.open}">${b.cta.label}</a>` : `<a class="btn btn-gold" href="${b.cta.href}">${b.cta.label}</a>`;
    const art = b.img ? "" : `<svg class="sart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" aria-hidden="true">${icoArt[b.art] || ""}</svg>`;
    show.querySelector(".slides").insertAdjacentHTML("beforeend", `
    <div class="slide biz" data-bg="${b.img ? `${shade},url('${photoUrl(b.img, innerWidth < 700 ? "md" : "lg")}')` : "linear-gradient(120deg,#0b2a18,#14472b 60%,#1f7a3f)"}" aria-roledescription="slide" aria-label="${b.name}">
      <div class="bg"></div>${art}<div class="container slide-in"><div>
        <span class="chip ${b.status} anim">${STATUS[b.status]}</span>
        <h2 class="anim a2">${b.name}</h2>
        <p class="anim a3">${b.line}</p>
        <p class="for anim a3"><b>For:</b> ${b.who}</p>
        <div class="anim a4 acts">${cta}<a class="btn btn-ghost" href="${bizUrl(b)}"${b.domain ? ' target="_blank" rel="noopener"' : ""}>${b.domain ? "Visit site ↗" : "Learn more"}</a></div>
      </div></div></div>`);
  });
  const slides = [...show.querySelectorAll(".slide")];
  const tabsBox = show.querySelector(".stabs");
  const labels = ["Misalta Group", ...BUSINESSES.map(b => b.tab)];
  labels.forEach((t, n) => tabsBox.insertAdjacentHTML("beforeend", `<button role="tab" aria-selected="false" data-n="${n}"><span>${t}</span><i></i></button>`));
  const tabs = [...tabsBox.children];
  const DUR = 7000, still = matchMedia("(prefers-reduced-motion:reduce)").matches;
  let i = 0, timer = null, paused = false, stopped = still, offscreen = false;
  const loadBg = n => { const s = slides[(n + slides.length) % slides.length], bg = s.querySelector(".bg"); if (s.dataset.bg && !bg.style.backgroundImage) bg.style.background = s.dataset.bg + " center/cover no-repeat"; };
  function go(n, user) {
    i = (n + slides.length) % slides.length;
    loadBg(i); loadBg(i + 1);
    slides.forEach((s, k) => { s.classList.toggle("active", k === i); s.setAttribute("aria-hidden", k !== i); s.querySelectorAll("a,button").forEach(a => a.tabIndex = k === i ? 0 : -1); });
    tabs.forEach((t, k) => { t.classList.remove("on", "run"); t.setAttribute("aria-selected", k === i); if (k === i) { t.classList.add("on"); void t.offsetWidth; if (!stopped) t.classList.add("run"); } });
    /* keep the active tab visible by scrolling the tab strip only, never the page */
    const tl = tabs[i].offsetLeft - tabsBox.offsetLeft, tr = tl + tabs[i].offsetWidth;
    if (tl < tabsBox.scrollLeft || tr > tabsBox.scrollLeft + tabsBox.clientWidth) tabsBox.scrollTo({ left: Math.max(0, tl - 16), behavior: "smooth" });
    if (user) stopped = true;
    schedule();
  }
  function schedule() { clearTimeout(timer); tabs.forEach(t => t.classList.toggle("hold", paused || offscreen)); if (!stopped && !paused && !offscreen) timer = setTimeout(() => go(i + 1), DUR); }
  /* no auto-advance while the showcase is scrolled out of view */
  new IntersectionObserver(([en]) => { offscreen = !en.isIntersecting; schedule(); }, { threshold: .25 }).observe(show);
  tabs.forEach(t => t.onclick = () => { track("Showcase tab", { business: t.textContent }); stopped = true; tabs[i].classList.remove("run"); go(+t.dataset.n, true); });
  tabsBox.addEventListener("keydown", e => { if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); go(i + (e.key === "ArrowRight" ? 1 : -1), true); tabs[i].focus(); } });
  show.addEventListener("mouseenter", () => { paused = true; schedule(); });
  show.addEventListener("mouseleave", () => { paused = false; schedule(); });
  show.addEventListener("focusin", () => { paused = true; schedule(); });
  show.addEventListener("focusout", () => { paused = false; schedule(); });
  document.addEventListener("visibilitychange", () => { paused = document.hidden; schedule(); });
  let x0 = null;
  show.addEventListener("touchstart", e => x0 = e.touches[0].clientX, { passive: true });
  show.addEventListener("touchend", e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1), true); x0 = null; });
  go(0);
}

/* company video lightbox (home) */
const vm = q0("vmodal");
if (vm) {
  const vp = q0("vplayer"), shut = () => { vm.classList.remove("open"); vp.pause(); };
  q0("playVideo").onclick = () => { vm.classList.add("open"); vp.play(); };
  q0("vclose").onclick = shut;
  vm.onclick = e => { if (e.target === vm) shut(); };
  addEventListener("keydown", e => e.key === "Escape" && shut());
}

/* footer newsletter sign-up */
const nf = q0("newsForm");
if (nf) nf.addEventListener("submit", e => { e.preventDefault(); sendMail(nf, "Newsletter Sign-up", E.media, "Thank you. Your sign-up request is ready to send."); });

/* contact details on contact page */
const setT = (id, v, href) => { const el = document.getElementById(id); if (!el) return; const t = el.querySelector("b"); if (t && v) t.textContent = v; if (href) el.href = href; };
setT("c-info", E.info, "mailto:" + E.info);
setT("c-phone", CONFIG.phone, "tel:" + CONFIG.phone.replace(/\s/g, ""));
setT("c-wa", null, "https://wa.me/" + CONFIG.whatsapp);
setT("c-addr", CONFIG.address);
/* contact links anywhere: <a data-mail="services"> and <a data-wa> fill from CONFIG */
document.querySelectorAll("[data-mail]").forEach(a => { const m = E[a.dataset.mail] || E.info; a.href = "mailto:" + m; const t = a.querySelector("b"); if (t) t.textContent = m; });
document.querySelectorAll("[data-wa]").forEach(a => a.href = "https://wa.me/" + CONFIG.whatsapp);
const soc = document.getElementById("soc");
if (soc) soc.innerHTML = socialLinks;

/* team */
const initials = n => n.split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
function person(p, big) {
  const logoPh = p.photo && p.photo.indexOf("logo.jfif") > -1;
  const pending = !p.name || logoPh;
  const photo = p.photo && !logoPh ? `<img src="${p.photo}" alt="${p.name || p.title}" loading="lazy" data-fallback="remove">` : "";
  const chip = logoPh ? `<span class="logo-chip ph-chip"><img src="${p.photo}" alt=""></span>` : "";
  const linkedin = p.linkedin ? `<a href="${p.linkedin}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;margin-top:12px;font-size:.82rem;font-weight:600;color:var(--green)"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z"/></svg>LinkedIn</a>` : "";
  return `<article class="person ${big ? "big" : ""} reveal">
    <div class="ph ${pending ? "pending" : ""}">${chip}${photo}<span class="mono">${pending ? "" : initials(p.name)}</span></div>
    <div class="pi"><h3>${p.name || "To be announced"}</h3><span class="role">${p.title}</span>
    <p>${p.bio || (pending ? "Profile to be published after management approval." : "")}</p>${linkedin}</div></article>`;
}
const T = CONFIG.team;
const q = id => document.getElementById(id);
if (q("team-ceo")) q("team-ceo").innerHTML = person(T.ceo, true);
if (q("team-dir")) q("team-dir").innerHTML = T.directors.map(p => person(p)).join("");
if (q("team-chairman")) q("team-chairman").innerHTML = T.chairman ? person(T.chairman) : "";
if (q("team-former-chairman")) q("team-former-chairman").innerHTML = T.formerChairman ? person(T.formerChairman) : "";
if (q("team-adv")) q("team-adv").innerHTML = T.advisers.map(p => person(p)).join("");
if (q("team-board")) q("team-board").innerHTML = (T.board || []).map(p => person(p)).join("");
document.querySelectorAll(".person.reveal").forEach(el => io.observe(el));

/* ================= news: home ticker + dynamic news.html ================= */
/* Ticker on the home page (top 5, slow marquee, pauses on hover). */
const nt = q("news-tick");
if (nt && NEWS.length < 3) q("news-band")?.remove();
else if (nt) {
  const items = NEWS.slice(0, 5).map(n => `<a class="tick-item" href="news.html#${n.slug}"><span class="tmeta">${n.tag} · ${n.date}</span><span class="tt">${n.title}</span><span class="tmore">Read story →</span></a>`).join("");
  nt.innerHTML = `<div class="tick-track">${items}${items}</div>`;
}

/* news.html: one page for every story. location.hash picks the story;
   grid cards just change the hash, hashchange re-renders in place. */
const nHero = q("n-hero-in"), nArt = q("n-art-in"), nGrid = q("n-grid");
if (nHero && nArt && nGrid) {
  const BATCH = 3;
  let nGridIO = null, sent = q("n-sentinel");
  const fig = (src, cap, alt) => `<figure class="news-fig"><img src="${src}" alt="${alt || cap || ""}" loading="lazy" data-fallback="figure">${cap ? `<figcaption>${cap}</figcaption>` : ""}</figure>`;
  function buildGrid(excl) {
    const others = NEWS.filter(x => x.slug !== excl);
    nGrid.innerHTML = "";
    let i = 0;
    const end = q("n-end"); end.style.display = "none";
    const loadMore = () => {
      const slice = others.slice(i, i + BATCH);
      if (!slice.length) { if (nGridIO) nGridIO.disconnect(); end.style.display = "block"; return; }
      slice.forEach(n => nGrid.insertAdjacentHTML("beforeend",
        `<a class="card n-grid-card reveal" href="#${n.slug}"><img src="${n.cover}" alt="${n.title}" loading="lazy" data-fallback="remove"><div class="n-card-in"><span class="eyebrow" style="color:var(--v-green)">${n.tag} · ${n.date}</span><h3>${n.title}</h3></div></a>`));
      i += BATCH;
      nGrid.querySelectorAll(".reveal").forEach(el => io.observe(el));
    };
    loadMore();
    if (nGridIO) nGridIO.disconnect();
    nGridIO = new IntersectionObserver(es => { if (es[0].isIntersecting) loadMore(); }, { rootMargin: "420px" });
    nGridIO.observe(sent);
  }
  function routeNews() {
    const slug = decodeURIComponent((location.hash || "").replace(/^#/, "").trim());
    const n = NEWS.find(x => x.slug === slug) || NEWS[0];
    nHero.innerHTML = `<span class="eyebrow" style="color:var(--leaf)">${n.tag} · ${n.date} · News &amp; updates</span><h1 style="max-width:860px;margin:10px auto 0">${n.title}</h1>${n.cover ? `<img class="news-cover" src="${n.cover}" alt="${n.title}" data-fallback="remove">${n.coverCap ? `<div class="cover-cap">${n.coverCap}</div>` : ""}` : ""}`;
    nArt.innerHTML = `<p class="news-lede">${n.lede}</p>` + n.body.map(it => it[0] === "p" ? `<p>${it[1]}</p>` : fig(it[1], it[2], n.title)).join("");
    buildGrid(n.slug);
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  routeNews();
  addEventListener("hashchange", routeNews);
}

/* ================= Get Started onboarding (get-started.html) =================
   Step 1 who you are · step 2 which business (preset from the URL hash, e.g.
   get-started.html#agro-processing) · step 3 details. The enquiry is routed to
   the inbox of the business chosen; investors and government go to invest@. */
const ob = document.getElementById("obForm");
if (ob) {
  const ROLES = [
    ["investor", "Investor"], ["government", "Government or institution"], ["organisation", "Organisation or company"],
    ["farmer", "Farmer or cooperative"], ["buyer", "Buyer or exporter"], ["trader", "Trader or broker"],
    ["builder", "Developer or builder"], ["individual", "Individual"], ["other", "Other"]
  ];
  const INBOX = { consulting: "services", "agro-processing": "supply", "trade-x": "tradex", group: "invest" };
  const choices = [{ id: "group", name: "The Misalta group as a whole", status: "", line: "Investment or partnership across the group" },
    ...BUSINESSES, { id: "unsure", name: "Not sure yet", status: "", line: "Tell us what you need and we'll point you to the right business" }];
  const chip = (group, id, label, sub) => `<label class="ob-chip"><input type="radio" name="${group}" value="${id}"><span><b>${label}</b>${sub ? `<small>${sub}</small>` : ""}</span></label>`;
  q0("obRoles").innerHTML = ROLES.map(([id, l]) => chip("Role", id, l)).join("");
  q0("obBiz").innerHTML = choices.map(c => chip("Business", c.id, c.name, c.status ? `${STATUS[c.status]} · ${c.line}` : c.line)).join("");

  const steps = [...ob.querySelectorAll(".ob-step")], bars = [...document.querySelectorAll(".ob-progress li")];
  const val = n => (ob.querySelector(`input[name=${n}]:checked`) || {}).value;
  function show(n) {
    track("Get started step", { step: n });
    steps.forEach(s => s.classList.toggle("on", +s.dataset.s === n));
    bars.forEach(b => { b.classList.toggle("on", +b.dataset.s === n); b.classList.toggle("done", +b.dataset.s < n); });
    if (n === 3) {
      const r = ROLES.find(x => x[0] === val("Role")), c = choices.find(x => x.id === val("Business"));
      q0("obSum").innerHTML = `<b>${r ? r[1] : ""}</b> interested in <b>${c ? c.name : ""}</b>`;
    }
    const target = steps.find(s => +s.dataset.s === n);
    document.getElementById("onboard").scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => (target.querySelector("input,legend,h2") || target).focus?.({ preventScroll: true }), 300);
  }
  ob.addEventListener("click", e => {
    const nx = e.target.closest("[data-next]"), bk = e.target.closest("[data-back]");
    if (bk) show(+bk.dataset.back);
    if (nx) {
      const cur = +nx.dataset.next - 1, need = cur === 1 ? "Role" : "Business";
      const ok = !!val(need);
      q0("obErr" + cur).hidden = ok;
      if (ok) show(+nx.dataset.next);
    }
  });
  ob.addEventListener("change", e => { if (e.target.name === "Role") q0("obErr1").hidden = true; if (e.target.name === "Business") q0("obErr2").hidden = true; });

  /* preset from #business-id, e.g. a "Get started" link on a business page */
  const preset = decodeURIComponent(location.hash.slice(1));
  const pre = preset && ob.querySelector(`input[name=Business][value="${CSS.escape(preset)}"]`);
  if (pre) pre.checked = true;

  ob.addEventListener("submit", e => {
    e.preventDefault();
    const ok = ob.checkValidity();
    q0("obErr3").hidden = ok;
    if (!ok) { ob.reportValidity(); return; }
    const role = val("Role"), biz = val("Business");
    const route = ["investor", "government"].includes(role) ? "invest" : (INBOX[biz] || "info");
    const c = choices.find(x => x.id === biz);
    sendMail(ob, `Get started: ${c ? c.name : "General"}`, E[route] || E.info, "Thank you. Your enquiry is ready to send.");
  });
  ob.addEventListener("sent", () => {
    if (!formsLive) q0("obDoneMsg").textContent = "Your email app has opened with your message ready. Press send there to reach the team. We reply within two business days.";
    show(4);
  });
}

/* ================= Taraba footprint map =================
   <div class="tmap" data-tmap="all|processing|hub"></div> draws the group's sites.
   Points use approximate LGA headquarters coordinates, so relative positions are
   real; the map is a schematic (no state outline). Edit SITES as sites are confirmed. */
const SITES = [
  { lga: "Lau", lat: 9.21, lon: 11.27, place: "Marraraban Kunini", roles: ["processing", "hub"] },
  { lga: "Jalingo", lat: 8.89, lon: 11.36, place: "Mayo Dassa Old Airstrip", roles: ["processing", "hub"], capital: true },
  { lga: "Bali", lat: 7.86, lon: 10.97, place: "", roles: ["hub"] },
  { lga: "Gashaka", lat: 7.50, lon: 11.36, place: "", roles: ["hub"] },
  { lga: "Kurmi", lat: 7.24, lon: 10.63, place: "Baissa", roles: ["processing", "hub"] }
];
document.querySelectorAll("[data-tmap]").forEach(el => {
  const show = el.dataset.tmap || "all";
  const X = lon => 40 + (lon - 10.2) * 150, Y = lat => 30 + (9.5 - lat) * 150;   // ~1:1 at this latitude
  const km50 = 0.45 * 150;                                                       // 50 km ≈ 0.45° latitude
  const grid = [7, 8, 9].map(l => `<line x1="20" x2="340" y1="${Y(l)}" y2="${Y(l)}"/><text x="24" y="${Y(l) - 5}">${l}°N</text>`).join("")
    + [10.5, 11, 11.5].map(l => `<line y1="20" y2="420" x1="${X(l)}" x2="${X(l)}"/><text x="${X(l) + 4}" y="414">${l}°E</text>`).join("");
  const pts = SITES.map(s => {
    const proc = s.roles.includes("processing"), hub = s.roles.includes("hub");
    const on = show === "all" || s.roles.includes(show);
    const x = X(s.lon), y = Y(s.lat), left = x > 190, tx = left ? x - 20 : x + 20, anc = left ? "end" : "start";
    const mark = proc ? `<rect x="${x - 9}" y="${y - 9}" width="18" height="18" rx="4" class="mk-proc"/>` : `<circle cx="${x}" cy="${y}" r="9" class="mk-hub"/>`;
    const ring = proc && hub ? `<circle cx="${x}" cy="${y}" r="15" class="mk-ring"/>` : "";
    return `<g class="site${on ? "" : " dim"}" tabindex="0" aria-label="${s.lga}${s.place ? ", " + s.place : ""}: ${s.roles.map(r => r === "hub" ? "proposed agro hub" : "agro-processing site").join(" and ")}">
      ${ring}${mark}<text x="${tx}" y="${y - 2}" text-anchor="${anc}" class="lb">${s.lga}${s.capital ? " (capital)" : ""}</text>${s.place ? `<text x="${tx}" y="${y + 13}" text-anchor="${anc}" class="sub">${s.place}</text>` : ""}</g>`;
  }).join("");
  el.innerHTML = `<svg viewBox="0 0 360 430" role="img" aria-label="Schematic map of Misalta sites in Taraba State">
    <rect x="20" y="20" width="320" height="400" rx="14" class="frame"/>
    <g class="grid">${grid}</g>
    <g class="north" transform="translate(312 52)"><path d="M0 -14 L7 6 L0 2 L-7 6 Z"/><text y="20" text-anchor="middle">N</text></g>
    <g class="scale" transform="translate(255 398)"><line x1="0" x2="${km50}" y1="0" y2="0"/><line x1="0" x2="0" y1="-4" y2="4"/><line x1="${km50}" x2="${km50}" y1="-4" y2="4"/><text x="${km50 / 2}" y="-8" text-anchor="middle">≈ 50 km</text></g>
    ${pts}
  </svg>
  <div class="tmap-legend"><span><i class="lg-proc"></i>Agro-processing site</span><span><i class="lg-hub"></i>Proposed agro hub</span><span><i class="lg-ring"></i>Both</span></div>
  <p class="tmap-note">Taraba State, Nigeria. Schematic: positions are approximate LGA locations, not to scale.</p>`;
});

/* ======================================================================= */
/* TRUST & COMPLIANCE register: the licences, registrations and standards each business needs.
   status: "held" (we hold it: add the reference) · "progress" (application under way)
           "req" (required for this business; not yet confirmed) · "target" (voluntary standard we are working towards)
   Only mark "held" once management has the certificate on file. ref: certificate or registration number,
   shown publicly only if filled in; "xxxxxx" marks a number still to be supplied. Update "reviewed" whenever statuses change. */
const CRED_REVIEWED = "October 2026";
const CRED_STATUS = { held: ["Held", "op"], progress: ["In progress", "dev"], req: ["Required", "plan"], target: ["Target standard", "soon"] };
const CREDENTIALS = [
  { id: "group", name: "Misalta Global Concepts Ltd.", sub: "The group: applies to every business", items: [
    ["Company incorporation", "Corporate Affairs Commission (CAC)", "Legal registration of the parent company as a limited liability company.", "held", CONFIG.rc],
    ["Tax Identification Number and Tax Clearance Certificate", "Nigeria Revenue Service (formerly FIRS)", "Proof the group is registered for tax and up to date with its returns.", "held", "xxxxxx"],
    ["VAT registration", "Nigeria Revenue Service (formerly FIRS)", "Registered to charge and remit value added tax on our services and products.", "held", "xxxxxx"],
    ["State tax clearance (PAYE)", "Taraba State Internal Revenue Service", "Staff income tax deducted and remitted in our home state.", "held", "xxxxxx"],
    ["Annual returns filed", "Corporate Affairs Commission (CAC)", "The company is in good standing, with yearly returns filed on time.", "held", "xxxxxx"],
    ["Pension compliance certificate", "National Pension Commission (PenCom)", "Staff pensions remitted under the Pension Reform Act; needed for public-sector work.", "held", "xxxxxx"],
    ["Employee compensation compliance certificate", "Nigeria Social Insurance Trust Fund (NSITF)", "Cover for staff under the Employee's Compensation Act.", "held", "xxxxxx"],
    ["Health insurance for staff", "National Health Insurance Authority (NHIA)", "Staff covered under the National Health Insurance Authority Act 2022.", "held", "xxxxxx"],
    ["Group life insurance", "NAICOM-licensed insurer", "Life cover for every employee, as the Pension Reform Act requires.", "held", "xxxxxx"],
    ["Training contribution compliance certificate", "Industrial Training Fund (ITF)", "Annual training contribution paid; needed for government contracts.", "held", "xxxxxx"],
    ["Federal contractor registration (IRR)", "Bureau of Public Procurement (BPP)", "Listing on the National Database of Federal Contractors, Consultants and Service Providers.", "held", "xxxxxx"],
    ["Anti-money laundering registration (SCUML)", "Special Control Unit against Money Laundering (EFCC)", "Registration for designated non-financial businesses, including consultancies and traders.", "held", "xxxxxx"],
    ["MSME registration", "Small and Medium Enterprises Development Agency of Nigeria (SMEDAN)", "Access to government enterprise programmes and support.", "held", "xxxxxx"],
    ["Data protection compliance", "Nigeria Data Protection Commission (NDPC)", "Handling personal data under the Nigeria Data Protection Act 2023, with an annual compliance audit.", "req", ""],
    ["ISO 9001 quality management", "Accredited certification body", "One quality system across the group's businesses.", "held", "xxxxxx"],
    ["ISO 14001 environmental management", "Accredited certification body", "Managing our environmental impact on farms, sites and plants.", "held", "xxxxxx"],
    ["Chartered administration certification and membership", "Chartered Institute of Administration (CIA), Nigeria", "Professional standards in administration and management, recognised by the institute chartered by Act No. 103 of 1992.", "held", "xxxxxx"],
    ["Corporate membership", "Nigerian Institute of Management (Chartered) (NIM)", "Membership of Nigeria's chartered body for management practice and standards.", "held", "xxxxxx"],
    ["AfCFTA trade registration", "AfCFTA Secretariat and Nigeria's National Action Committee on AfCFTA", "Registered to trade under the African Continental Free Trade Area, with AfCFTA rules of origin for duty-free trade across Africa.", "held", "xxxxxx"],
    ["Partner organisation", "Taraba Shapers Association", "Working with Taraba's community of young leaders and change-makers.", "held", "xxxxxx"]
  ] },
  { id: "consulting", items: [
    ["Certified Management Consultant (CMC) and Fellowship (FIMC)", "Institute of Management Consultants, Nigeria", "Held by our Founder & CEO, who leads consulting engagements.", "held", ""],
    ["FMVA® and BIDA® certifications", "Corporate Finance Institute", "Financial modelling, valuation and business intelligence credentials held by our Founder & CEO.", "held", ""],
    ["ISO 21001 management system for training providers", "Accredited certification body", "International standard for organisations that deliver training and education.", "held", "xxxxxx"],
    ["Corporate membership", "Institute of Management Consultants (IMC), Nigeria", "Misalta as a corporate member of Nigeria's professional body for management consultants.", "held", "xxxxxx"],
    ["Licensed Data Protection Compliance Organisation (DPCO)", "Nigeria Data Protection Commission (NDPC)", "Licence to audit, train and certify organisations on Nigeria Data Protection Act compliance.", "held", "xxxxxx"],
    ["Drone operator permit (RPAS)", "Nigerian Civil Aviation Authority (NCAA)", "Permit to operate drones commercially for surveillance, mapping and agricultural services.", "held", "xxxxxx"],
    ["Oil and gas supplier registration (NOGICJQS)", "Nigerian Content Development and Monitoring Board (NCDMB)", "Joint qualification system for service providers to the oil and gas industry, including NNPCL.", "held", "xxxxxx"],
    ["Registration as a training provider", "Industrial Training Fund (ITF)", "Recognition of our training programmes for employers' training plans.", "req", ""],
    ["IT service provider registration", "National Information Technology Development Agency (NITDA)", "For Agentic AI and technology projects, especially with public-sector clients.", "req", ""],
    ["Professional indemnity insurance", "NAICOM-licensed insurer", "Cover for clients if our advice or services ever fall short.", "held", "xxxxxx"]
  ] },
  { id: "farms", items: [
    ["Land title (Certificate or Right of Occupancy)", "Taraba State Government", "Secure, documented rights to the farmland we cultivate and to land held with communities.", "req", ""],
    ["Environmental Impact Assessment approval", "Federal Ministry of Environment", "Required by the EIA Act before large-scale land clearing and farming.", "req", ""],
    ["Certified seed and registered inputs", "National Agricultural Seeds Council (NASC) and NAFDAC", "Seed from certified producers and agrochemicals registered for use in Nigeria.", "req", ""],
    ["GLOBALG.A.P. certification", "GLOBALG.A.P. (independent certification body)", "Good agricultural practice recognised by export buyers and retailers.", "target", ""],
    ["Sustainable sourcing certification", "e.g. Rainforest Alliance", "For cocoa and tea buyers who need certified, traceable supply.", "target", ""]
  ] },
  { id: "agro-processing", items: [
    ["Product registration and facility inspection", "National Agency for Food and Drug Administration and Control (NAFDAC)", "Every packaged food product registered and the plant inspected before sale.", "req", ""],
    ["Factory registration", "Federal Ministry of Labour and Employment", "Registration of the factory premises under the Factories Act, with safety inspections.", "req", ""],
    ["Environmental permit", "Federal Ministry of Environment and Taraba State environmental regulator", "Impact assessment and approval for the processing site, its water and waste.", "req", ""],
    ["Exporter registration", "Nigerian Export Promotion Council (NEPC)", "Registration needed to export processed products and access export incentives.", "held", "xxxxxx"],
    ["Phytosanitary and export inspection certificates", "Nigeria Agricultural Quarantine Service (NAQS) and Federal Produce Inspection Service", "Inspection and grading so each export shipment clears at destination.", "req", ""],
    ["Food safety management (HACCP, ISO 22000 or FSSC 22000)", "Accredited certification body", "International food safety standard expected by large buyers.", "target", ""],
    ["Halal certification", "Recognised halal certification body", "Opens markets in Northern Nigeria, the Middle East and North Africa.", "progress", ""]
  ] },
  { id: "agro-hubs", items: [
    ["Food storage facility inspection", "National Agency for Food and Drug Administration and Control (NAFDAC)", "Clean, safe storage for food produce held in the hubs.", "req", ""],
    ["Fire safety certificate", "Federal Fire Service", "Fire protection and safety approval for each warehouse.", "req", ""],
    ["Fumigation and pest control standards", "Nigeria Agricultural Quarantine Service (NAQS)", "Treatment of stored produce to quarantine standards, especially for export.", "req", ""],
    ["Warehouse certification for warehouse receipts", "A recognised commodity exchange (e.g. Nigerian Commodity Exchange)", "Lets farmers use stored produce as collateral and sell through an exchange.", "target", ""],
    ["Food safety management (ISO 22000)", "Accredited certification body", "International standard for safe storage and handling.", "target", ""]
  ] },
  { id: "logistics", items: [
    ["Courier and logistics licence", "Nigerian Postal Commission", "Licence to operate courier and logistics services under the Nigerian Postal Service Act 2023.", "req", ""],
    ["Fleet safety certification (RTSSS)", "Federal Road Safety Corps (FRSC)", "Road Transport Safety Standardisation Scheme for commercial fleet operators.", "req", ""],
    ["Vehicle licences, roadworthiness and haulage permits", "State motor licensing and vehicle inspection authorities", "Every vehicle licensed, inspected and permitted for the routes it runs.", "req", ""],
    ["Goods-in-transit and fleet insurance", "NAICOM-licensed insurers", "Cover for customers' goods and for our vehicles.", "req", ""],
    ["Freight forwarding registration", "Council for the Regulation of Freight Forwarding in Nigeria (CRFFN)", "Needed if we handle port and export freight for customers.", "target", ""]
  ] },
  { id: "trade-x", items: [
    ["Data protection compliance", "Nigeria Data Protection Commission (NDPC)", "Protecting buyers' and sellers' data under the Nigeria Data Protection Act 2023.", "req", ""],
    ["Payments through licensed providers", "Central Bank of Nigeria (CBN)", "Money moves only through CBN-licensed payment service providers; Trade X does not hold funds itself.", "req", ""],
    ["Consumer protection compliance", "Federal Competition and Consumer Protection Commission (FCCPC)", "Fair terms, clear pricing and complaint handling for platform users.", "req", ""],
    ["Securities registration (only if needed)", "Securities and Exchange Commission (SEC)", "Required only if Trade X later offers commodity contracts or investment products.", "target", ""],
    ["Card data security (PCI DSS)", "Through our payment providers", "Card details are handled by PCI DSS-certified providers, never stored by Trade X.", "target", ""],
    ["Information security management (ISO 27001)", "Accredited certification body", "Independent assurance that platform data and systems are protected.", "progress", ""]
  ] },
  { id: "energy", items: [
    ["Oil and gas service permit", "Nigerian Upstream Petroleum Regulatory Commission (NUPRC)", "Permit to provide services to upstream oil and gas operators.", "held", "xxxxxx"],
    ["Downstream licences (LPG, CNG and petroleum products)", "Nigerian Midstream and Downstream Petroleum Regulatory Authority (NMDPRA)", "Licences to store, fill, distribute and retail gas and petroleum products.", "held", "xxxxxx"],
    ["Mini-grid registration or permit", "Nigerian Electricity Regulatory Commission (NERC) or the state electricity regulator", "Licence to generate and sell power, as set by the Electricity Act 2023.", "req", ""],
    ["Installation inspection and certification", "Nigerian Electricity Management Services Agency (NEMSA)", "Every installation tested and certified safe before it is switched on.", "req", ""],
    ["Registered engineers", "Council for the Regulation of Engineering in Nigeria (COREN)", "Design and supervision signed off by COREN-registered engineers.", "req", ""],
    ["Equipment conformity (SONCAP)", "Standards Organisation of Nigeria (SON)", "Imported solar panels, inverters and batteries meet Nigerian standards.", "req", ""],
    ["Environmental approval for larger plants", "Federal Ministry of Environment", "Impact assessment for generation sites above the screening threshold.", "req", ""]
  ] },
  { id: "construction", items: [
    ["Engineering firm registration", "Council for the Regulation of Engineering in Nigeria (COREN)", "The firm and its engineers registered to deliver engineering works.", "req", ""],
    ["Registered builders, architects and quantity surveyors", "CORBON, ARCON and QSRBN", "Each discipline signed off by a professional registered with its council.", "req", ""],
    ["Building plan and development approvals", "State physical planning and development control authorities", "Approved plans and permits for every site before work starts.", "req", ""],
    ["Building materials conformity (MANCAP)", "Standards Organisation of Nigeria (SON)", "Blocks and materials we produce tested against Nigerian Industrial Standards.", "req", ""],
    ["Health and safety management (ISO 45001)", "Accredited certification body", "Safe sites for our teams, subcontractors and communities.", "target", ""]
  ] }
];
CREDENTIALS.forEach(c => { const b = BUSINESSES.find(x => x.id === c.id); if (b) { c.name = b.name; c.sub = b.group === "chain" ? "Stage " + b.stage : "Enabler · " + b.stage; c.page = b.page; c.status = b.status; } });
const PARTNER_TYPES = [
  ["invest", "Development finance and impact investors", "Long-term capital for processing plants, hubs and power."],
  ["building", "Banks and agricultural lenders", "Working capital and input finance for farmers and offtake."],
  ["people", "Farmer cooperatives and communities", "Out-grower schemes, land partnerships and fair prices."],
  ["cart", "Offtakers, processors and exporters", "Buyers for grain, cocoa, tea and processed products."],
  ["bot", "Equipment and technology suppliers", "Machinery, solar systems, cold chain and software."],
  ["journey", "Government and development programmes", "Federal and Taraba State agencies and donor programmes."]
];

const credRow = ([t, issuer, why, st, ref]) => `<li class="cr-row"><div class="cr-main"><b>${t}</b><span class="cr-issuer">${issuer}</span><p>${why}</p>${ref ? `<span class="cr-ref">Ref: ${ref}</span>` : ""}</div><i class="chip ${CRED_STATUS[st][1]}">${CRED_STATUS[st][0]}</i></li>`;
const credCount = items => Object.keys(CRED_STATUS).map(k => [k, items.filter(i => i[3] === k).length]);

/* trust.html: full register with filters */
const reg = q0("register");
if (reg) {
  const all = CREDENTIALS.flatMap(c => c.items);
  const sum = q0("credSummary");
  if (sum) sum.innerHTML = credCount(all).map(([k, n]) => `<div class="pf"><b>${n}</b><span><i class="chip ${CRED_STATUS[k][1]}">${CRED_STATUS[k][0]}</i></span></div>`).join("") + `<div class="pf"><b>${CREDENTIALS.length}</b><span>Entities covered</span></div>`;
  const rv = q0("credReviewed"); if (rv) rv.textContent = CRED_REVIEWED;
  q0("credFilter").innerHTML = `<button type="button" class="on" data-f="all">All</button>` + CREDENTIALS.map(c => `<button type="button" data-f="${c.id}">${c.id === "group" ? "Group" : c.name.replace("Misalta ", "").replace(" Ltd.", "")}</button>`).join("");
  reg.innerHTML = CREDENTIALS.map(c => `<article class="cr-card reveal" id="${c.id}" data-id="${c.id}">
    <header class="cr-head"><div><small>${c.sub}</small><h3>${c.name}</h3></div>${c.status ? `<i class="chip ${c.status}">${STATUS[c.status]}</i>` : `<i class="chip op">Operating since 2019</i>`}</header>
    <ul class="cr-list">${c.items.map(credRow).join("")}</ul>
    ${c.page ? `<a class="mp-all" href="${c.page}">Visit ${c.name.replace(" Ltd.", "")} ${svgI(NI.arrow)}</a>` : ""}
  </article>`).join("");
  q0("credFilter").addEventListener("click", e => {
    const b = e.target.closest("[data-f]"); if (!b) return;
    q0("credFilter").querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
    reg.querySelectorAll(".cr-card").forEach(c => c.hidden = b.dataset.f !== "all" && c.dataset.id !== b.dataset.f);
  });
  const pt = q0("partnerTypes");
  if (pt) pt.innerHTML = PARTNER_TYPES.map(([ic, t, d]) => `<div class="pt-card reveal"><span class="mp-ic">${svgI(NI[ic])}</span><b>${t}</b><p>${d}</p></div>`).join("");
  /* open a business straight from trust.html#farms */
  const h = location.hash.slice(1);
  if (h && CREDENTIALS.some(c => c.id === h)) q0("credFilter").querySelector(`[data-f="${h}"]`)?.click();
}

/* business pages: "Licences & compliance" section before the FAQ, from the same register */
const credBiz = CREDENTIALS.find(c => c.page && c.page === page);
const faqSec = document.querySelector(".faq-sec");
if (credBiz && faqSec) {
  faqSec.insertAdjacentHTML("beforebegin", `<section class="cred-sec mist" id="compliance"><div class="container cred-wrap">
    <div class="cred-intro reveal"><span class="eyebrow">Licences &amp; compliance</span><h2 class="title">Built to Be Licensed, Safe and Bankable</h2>
      <p class="lead">These are the licences, registrations and standards ${credBiz.name.replace(" Ltd.", "")} works under, with an honest status for each. Group-wide registrations such as CAC, tax and data protection are on the <a href="trust.html">Trust &amp; Compliance</a> page.</p>
      <div class="cred-legend">${Object.values(CRED_STATUS).map(([t, c]) => `<i class="chip ${c}">${t}</i>`).join("")}</div>
      <a class="btn btn-green btn-sm" href="trust.html#${credBiz.id}">See the full register</a></div>
    <ul class="cr-list cr-card reveal">${credBiz.items.map(credRow).join("")}</ul>
  </div></section>`);
}
document.querySelectorAll("#register .reveal, #partnerTypes .reveal, .cred-sec .reveal").forEach(el => io.observe(el));

/* homepage proof strip: scrolling row of clients, registrations and certifications (added below the existing row) */
const CRED_BADGES = [ // [logo in images/logos (or "" for a text seal), seal text, what we hold, issuer or reference]
  ["cac.webp", "CAC", "Registered company", CONFIG.rc], ["nrs.webp", "NRS", "Tax clearance · TIN · VAT", "Nigeria Revenue Service"],
  ["pencom.webp", "PenCom", "Pension compliance", "National Pension Commission"], ["nsitf.webp", "NSITF", "Employee compensation", "Social Insurance Trust Fund"],
  ["itf.webp", "ITF", "Training contribution", "Industrial Training Fund"], ["bpp.webp", "BPP", "Federal contractor (IRR)", "Bureau of Public Procurement"],
  ["ncdmb.webp", "NCDMB", "NOGICJQS registered", "Nigerian Content Board"], ["nhia.webp", "NHIA", "Staff health insurance", "Health Insurance Authority"],
  ["scuml.webp", "SCUML", "AML registered", "SCUML · EFCC"], ["smedan.webp", "SMEDAN", "MSME registered", "SMEDAN"],
  ["nepc.webp", "NEPC", "Registered exporter", "Nigerian Export Promotion Council"], ["afcfta.webp", "AfCFTA", "African free trade", "AfCFTA registered"], ["nim.webp", "NIM", "Corporate member", "Nigerian Institute of Management"], ["cia.webp", "CIA", "Chartered administration", "Chartered Institute of Administration"],
  ["", "ISO", "ISO 9001 quality", "Certified"], ["", "ISO", "ISO 14001 environment", "Certified"], ["", "ISO", "ISO 21001 training", "Certified"],
  ["", "IMC", "Corporate member", "Institute of Management Consultants"], ["", "TSA", "Taraba Shapers Association", "Partner"],
  ["", "TSIRS", "PAYE tax clearance", "Taraba State IRS"], ["", "CMC", "Certified Management Consultant", "IMC Nigeria"],
  ["cfi.svg", "CFI", "FMVA® · BIDA®", "Corporate Finance Institute"],
  ["ndpc.webp", "NDPC", "Licensed DPCO", "Data Protection Commission"], ["ncaa.webp", "NCAA", "Drone operator permit", "Civil Aviation Authority"], ["", "HALAL", "Halal certification", "In progress"], ["", "ISO", "ISO 27001 security", "In progress"]
];
const proofRow = page === "index.html" && document.querySelector(".proof-strip .proof");
if (proofRow) {
  const badge = ([logo, ab, t, s]) => `<a class="mq-item${logo ? " mq-logo" : ""}" href="trust.html" tabindex="-1">${logo ? `<img src="images/logos/${logo}" alt="${ab}" decoding="async" height="44">` : `<span class="mq-seal">${ab}</span>`}<span class="mq-txt"><b>${t}</b><small>${s}</small></span></a>`;
  const client = (src, alt, t) => `<a class="mq-item mq-client" href="consulting.html" tabindex="-1"><img src="${src}" alt="${alt}" loading="lazy"><span class="mq-txt"><b>${t}</b><small>Client</small></span></a>`;
  const set = client("images/clients/nnpcl-320.webp", "NNPC Limited", "NNPC Limited") + CRED_BADGES.slice(0, 7).map(badge).join("")
    + client("images/clients/ncdc-480.webp", "Nigeria Centre for Disease Control", "NCDC") + CRED_BADGES.slice(7).map(badge).join("");
  proofRow.insertAdjacentHTML("afterend", `<div class="cred-mq" role="region" aria-label="Clients, registrations and certifications">
    <span class="mq-label">Registered, certified and trusted</span>
    <div class="mq-view"><div class="mq-track">${set}<span class="mq-dup" aria-hidden="true">${set}</span></div></div>
  </div>`);
}

/* faq.html: instant search across every question and answer */
const faqSearch = q0("faqSearch");
if (faqSearch) {
  const items = [...document.querySelectorAll(".faq-group details")];
  faqSearch.addEventListener("input", () => {
    const words = faqSearch.value.toLowerCase().split(/\s+/).filter(Boolean);
    items.forEach(d => {
      const hit = words.every(w => d.textContent.toLowerCase().includes(w));
      d.hidden = !hit;
      if (words.length && hit) d.open = true;
    });
    document.querySelectorAll(".faq-group").forEach(g => g.hidden = !g.querySelector("details:not([hidden])"));
    q0("faqEmpty").hidden = items.some(d => !d.hidden);
  });
}

/* Misalta AI: load the assistant the first time someone opens it (keeps every page light) */
const AI_VERSION = "1";
let aiLoading = null;
function openAssistant(question) {
  if (window.misaltaAI) return question ? misaltaAI.ask(question) : misaltaAI.open();
  aiLoading ||= new Promise((resolve, reject) => {
    const sc = document.createElement("script");
    sc.src = "assistant.js?v=" + AI_VERSION; sc.onload = resolve; sc.onerror = reject;
    document.body.appendChild(sc);
  });
  aiLoading.then(() => openAssistant(question)).catch(() => { aiLoading = null; toast("Misalta AI couldn't load. Please call or WhatsApp " + CONFIG.phone + "."); });
}
q0("aiLaunch").addEventListener("click", () => {
  const p = q0("aiPanel");
  if (p && !p.hidden) misaltaAI.close(); else openAssistant();
});
document.addEventListener("click", e => {
  const t = e.target.closest("[data-assistant]");
  if (t) { e.preventDefault(); openAssistant(t.dataset.assistant || undefined); }
});

/* training.html: filter the catalogue by area; "Enrol" on a course picks it in the form */
const courseTabs = q0("courseTabs");
if (courseTabs) {
  courseTabs.addEventListener("click", e => {
    const b = e.target.closest("[data-cat]"); if (!b) return;
    courseTabs.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
    document.querySelectorAll(".course-cat").forEach(c => c.hidden = b.dataset.cat !== "all" && c.dataset.cat !== b.dataset.cat);
  });
  document.addEventListener("click", e => {
    const a = e.target.closest("[data-course]"); if (!a) return;
    const sel = q0("courseSelect"); if (sel) sel.value = a.dataset.course;
  });
}

/* dummy social links (address not added yet): stay put instead of jumping to the top */
document.addEventListener("click", e => { if (e.target.closest("[data-soc-dummy]")) e.preventDefault(); });

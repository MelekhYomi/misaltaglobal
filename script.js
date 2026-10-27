/* ============ EDIT THESE BEFORE LAUNCH (management to confirm) ============ */
const CONFIG = {
  company: "Misalta Global Concepts Ltd.",
  short: "Misalta",
  emails: {
    info: "info@misaltaglobal.com",
    services: "services@misaltaglobal.com",
    supply: "supply@misaltaglobal.com",
    tradex: "tradex@misaltaglobal.com",
    invest: "invest@misaltaglobal.com",
    media: "media@misaltaglobal.com"
  },
  phone: "+234 000 000 0000",
  whatsapp: "2340000000000",            // international format, no + or spaces
  address: "Address to be confirmed",
  social: {
    LinkedIn: "https://www.linkedin.com/company/misalta-global-ltd/",
    Facebook: "",
    Instagram: "",
    X: ""
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
   - status: "op" Operating · "dev" In development · "soon" Coming soon · "plan" Planned
   - cta: the main action, matched to status. Use href for a link, or open
     for an enquiry-modal tab ("invest" | "supply" | "services").
   - group/stage: "chain" (the five value-chain stages, in order) or "enabler";
     used to lay out the Businesses page.
   - domain: leave "" until the business has its own website. Set it
     (e.g. "misaltafarms.com") and every "Learn more" link switches to it. */
const BUSINESSES = [
  { id: "consulting", group: "enabler", stage: "Know-how", tab: "Consulting", name: "Misalta Consulting", status: "op", page: "consulting.html", domain: "",
    img: "hero_training_session.jpg", line: "Training, facility management, procurement and financial advisory, trusted by NNPCL and NCDC.",
    who: "Organisations and government agencies", cta: { label: "Book a service", open: "services" } },
  { id: "farms", group: "chain", stage: "1 · Grow", tab: "Farms", name: "Misalta Farms", status: "dev", page: "farms.html", domain: "",
    img: "farmer_tablet_field.jpg", line: "Cultivation across Taraba State, supplying the rest of the group.",
    who: "Landowners, cooperatives and offtakers", cta: { label: "Partner with us", open: "invest" } },
  { id: "agro-processing", group: "chain", stage: "2 · Add value", tab: "Agro-Processing", name: "Misalta Agro Processing Ltd.", status: "dev", page: "agro-processing.html", domain: "",
    img: "hero_cocoa_drying.jpg", line: "Cocoa butter and cocoa powder, processed in Taraba State.",
    who: "Commodity buyers and exporters", cta: { label: "Request a supply quote", open: "supply" } },
  { id: "agro-hubs", group: "chain", stage: "3 · Store", tab: "Agro Hubs", name: "Misalta Agro Hubs", status: "plan", page: "agro-hubs.html", domain: "",
    img: "hands_beans_closeup.jpg", line: "Aggregation, storage and post-harvest handling across Taraba.",
    who: "Farmers, cooperatives and processors", cta: { label: "Partner on agro hubs", open: "invest" } },
  { id: "logistics", group: "chain", stage: "4 · Move", tab: "Logistics", name: "Misalta Logistics", status: "plan", page: "logistics.html", domain: "",
    img: "hero_field_produce.jpg", line: "Cold rooms and specialised transport, from farm gate to buyer and across borders.",
    who: "Producers, traders and industry", cta: { label: "Register interest", href: "logistics.html" } },
  { id: "trade-x", group: "chain", stage: "5 · Sell", tab: "Trade X", name: "Misalta Trade X", status: "soon", page: "trade-x.html", domain: "",
    img: "hero_market_nigeria.jpg", line: "A digital marketplace connecting farmers, suppliers, brokers and buyers.",
    who: "Farmers, traders and buyers", cta: { label: "Join early access", href: "trade-x.html#early-access" } },
  { id: "energy", group: "enabler", stage: "Power", tab: "Energy", name: "Misalta Energy", status: "plan", page: "energy.html", domain: "",
    img: "", art: "sun", line: "Solar and backup power for agro-industrial sites and the communities around them.",
    who: "Energy partners, installers and financiers", cta: { label: "Partner on energy", open: "invest" } },
  { id: "construction", group: "enabler", stage: "Build", tab: "Construction", name: "Misalta Construction", status: "plan", page: "construction.html", domain: "",
    img: "", art: "blocks", line: "Concrete blocks, building materials and real estate.",
    who: "Developers, builders and buyers", cta: { label: "Get notified at launch", href: "construction.html" } }
];
/* Optimised photos live in images/photos/<name>-sm|md|lg.webp (see docs/ARCHITECTURE.md).
   Widths per photo, for srcset: [sm, md, lg]. */
const PHOTO_W = { cocoa_pods_hands: [480, 864, 864], cooperative_group: [480, 864, 864], dashboard_ui: [480, 960, 1440], farmer_tablet_field: [480, 864, 864],
  hands_beans_closeup: [480, 864, 864], hero_cocoa_drying: [480, 960, 1600], hero_farmland_nigeria: [480, 960, 1600], hero_field_produce: [480, 864, 864],
  hero_market_nigeria: [480, 960, 1600], hero_training_session: [480, 960, 1600], impact_field_panorama: [480, 960, 1344] };
const photoBase = f => f.replace(/\.(jpg|png)$/, "");
const photoUrl = (f, size = "lg") => PHOTO_W[photoBase(f)] ? `images/photos/${photoBase(f)}-${size}.webp` : f;
const photoImg = (f, alt = "") => {
  const b = photoBase(f), w = PHOTO_W[b];
  if (!w) return `<img src="${f}" alt="${alt}" loading="lazy">`;
  const set = [["sm", w[0]], ["md", w[1]], ["lg", w[2]]].filter((x, i, a) => a.findIndex(y => y[1] === x[1]) === i);
  return `<img src="${photoUrl(f, "md")}" srcset="${set.map(([t, px]) => `${photoUrl(f, t)} ${px}w`).join(", ")}" sizes="(max-width: 700px) 92vw, 360px" alt="${alt}" loading="lazy">`;
};
const STATUS = { op: "Operating", dev: "In development", soon: "Coming soon", plan: "Planned" };
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
const navItem = (f, t, extra = "") => `<li><a class="link ${page === f ? "active" : ""}" href="${f}">${t}${extra}</a></li>`;
const linkedinIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z"/></svg>`;
const socialLinks = Object.entries(CONFIG.social).filter(([, u]) => u).map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${n}" title="${n}">${n === "LinkedIn" ? linkedinIcon : n.slice(0, 2)}</a>`).join("");
const mark = `<img class="logo-img" src="images/logo.jfif" alt="Misalta Global Concepts Ltd. logo"><span class="logo-text">Misalta<small>GLOBAL LTD.</small><small class="motto">Building Tomorrow, Growing Value</small></span>`;

const ico = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const topbar = `<div class="topbar"><div class="container">
  <div class="tb-l"><a href="mailto:${E.info}">${ico('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/>')}${E.info}</a><a href="tel:${CONFIG.phone.replace(/\s/g, "")}">${ico('<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/>')}${CONFIG.phone}</a><span>${ico('<path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>')}${CONFIG.address}</span></div>
  <div class="tb-soc">${Object.entries(CONFIG.social).filter(([, u]) => u).map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join("")}</div>
</div></div>`;

document.body.insertAdjacentHTML("afterbegin", `
<a class="skip" href="#main">Skip to content</a>
<header class="nav" id="hdr">${topbar}<div class="container nav-in">
  <a class="logo" href="index.html">${mark}</a>
  <nav id="menu" aria-label="Main"><ul>
    ${navItem("index.html", "Home")}
    <li class="hasdd ${["about.html", "news.html"].includes(page) ? "active" : ""}"><a class="link" href="about.html" aria-haspopup="true" aria-expanded="false">Company<em class="caret" aria-hidden="true">▾</em></a>
      <div class="dd">
        <div class="dd-col">
          <div class="ghead"><span class="gic">🏢</span>Who we are</div>
          <h4><a href="about.html" class="dd-h4">About Us</a></h4>
          <p>Established in 2019. Our mission, values and journey.</p>
          <a href="about.html#leadership">Leadership</a>
          <a href="about.html#journey">Our journey</a>
          <a href="news.html">News &amp; updates</a>
        </div>
      </div>
    </li>
    <li class="hasdd ${page === "consulting.html" ? "active" : ""}"><a class="link" href="consulting.html" aria-haspopup="true" aria-expanded="false">Consulting<em class="caret" aria-hidden="true">▾</em></a>
      <div class="dd">
        <div class="dd-col">
          <div class="ghead"><span class="gic">🎓</span>Operating today</div><h4><a href="consulting.html" class="dd-h4">Misalta Consulting</a></h4>
          <p>All Misalta services, delivered by our in-house team.</p>
          <a href="consulting.html">Training Services</a>
          <a href="consulting.html">Facility Management</a>
          <a href="consulting.html">Procurement Support</a>
          <a href="consulting.html">Financial Advisory</a>
          <a href="consulting.html">Agentic AI</a>
          <a href="consulting.html">Agro Services</a>
        </div>
        <div class="dd-col sand">
          <div class="ghead"><span class="gic">✉️</span>Work with us</div>
          <p>Ready to start, or need advice that doesn't fit a category?</p>
          <a href="#" data-open="services">Join a service</a>
          <a href="#" data-open="services">Ask for agro services</a>
          <a href="contact.html">Request a bespoke quote</a>
        </div>
      </div>
    </li>
    <li class="hasdd ${["businesses.html", "farms.html", "agro-processing.html", "agro-hubs.html", "logistics.html", "trade-x.html", "energy.html", "construction.html"].includes(page) ? "active" : ""}"><a class="link" href="businesses.html" aria-haspopup="true" aria-expanded="false">Our Businesses<em class="caret" aria-hidden="true">▾</em></a>
      <div class="dd">
        <div class="dd-col">
          <div class="ghead"><span class="gic">🌾</span>The value chain</div>
          <a href="farms.html">1 · Grow: Misalta Farms <em class="ddtag">In dev</em></a>
          <a href="agro-processing.html">2 · Add value: Misalta Agro Processing <em class="ddtag">In dev</em></a>
          <a href="agro-hubs.html">3 · Store: Misalta Agro Hubs <em class="ddtag">Planned</em></a>
          <a href="logistics.html">4 · Move: Misalta Logistics <em class="ddtag">Planned</em></a>
          <a href="trade-x.html">5 · Sell: Misalta Trade X <em class="ddtag">Soon</em></a>
        </div>
        <div class="dd-col">
          <div class="ghead"><span class="gic">⚡</span>Enablers</div>
          <a href="energy.html">Power: Misalta Energy <em class="ddtag">Planned</em></a>
          <a href="construction.html">Build: Misalta Construction <em class="ddtag">Planned</em></a>
          <a href="consulting.html">Know-how: Misalta Consulting <em class="ddtag">Operating</em></a>
        </div>
        <div class="dd-col sand">
          <div class="ghead"><span class="gic">🧭</span>Overview</div>
          <h4><a href="businesses.html" class="dd-h4">All ventures</a></h4>
          <p>Eight ventures, one agricultural value chain, each with its current status.</p>
          <a href="trade-x.html#early-access">Join Trade X early access →</a>
        </div>
      </div>
    </li>
    ${navItem("investment.html", "Invest &amp; Partner")}
  </ul></nav>
  <a class="btn btn-gold nav-cta" href="get-started.html">Get started</a>
  <button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
</div></header>`);
const firstSec = document.querySelector("section");
if (firstSec) { firstSec.id ||= "main"; document.querySelector(".skip").href = "#" + firstSec.id; }

const footerHTML = `
<footer><div class="container">
  <div class="f-news"><h3>Sign up for updates on our ventures, news and investment opportunities.</h3>
  <form id="newsForm"><input type="email" name="Email" placeholder="Email address" required aria-label="Email address"><button class="btn btn-green">Sign up</button></form></div>
  <div class="f-mid"><a class="logo" href="index.html">${mark}</a><p>Transforming Agriculture. Building Industry. Creating Value.</p></div>
  <div class="f-cols">
    <div><h4>Company</h4><a href="about.html">About Us</a><a href="about.html#leadership">Leadership</a><a href="news.html">News</a><a href="investment.html">Invest &amp; Partner</a><a href="contact.html">Contact</a></div>
    <div><h4>The value chain</h4><a href="farms.html">Misalta Farms</a><a href="agro-processing.html">Misalta Agro Processing</a><a href="agro-hubs.html">Misalta Agro Hubs</a><a href="logistics.html">Misalta Logistics</a><a href="trade-x.html">Misalta Trade X</a></div>
    <div><h4>Enablers</h4><a href="consulting.html">Misalta Consulting</a><a href="energy.html">Misalta Energy</a><a href="construction.html">Misalta Construction</a><a href="businesses.html">All ventures</a></div>
    <div><h4>Head Office</h4><span>${CONFIG.address}</span><a href="mailto:${E.info}">${E.info}</a><a href="tel:${CONFIG.phone.replace(/\s/g, "")}">${CONFIG.phone}</a>${Object.entries(CONFIG.social).filter(([, u]) => u).map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join("")}</div>
  </div>
  <div class="copy"><span>© ${new Date().getFullYear()} ${CONFIG.company} All rights reserved.</span><span><a href="privacy.html" style="display:inline">Privacy Notice</a></span></div>
</div></footer>
`;
document.body.insertAdjacentHTML("beforeend", footerHTML + `

<div class="fab"><button class="iv" data-open="invest" title="Make an enquiry" aria-label="Make an enquiry">✉</button><a class="wa" href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener" title="WhatsApp" aria-label="WhatsApp">💬</a></div>

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
    <div class="field"><label>Service needed</label><select name="Service"><option>Training services</option><option>Facility management</option><option>Procurement support</option><option>Financial advisory</option><option>Agentic AI</option><option>Agro services</option><option>Other</option></select></div>
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

/* header + menu */
const hdr = document.getElementById("hdr");
const onScroll = () => hdr.classList.toggle("scrolled", scrollY > 40);
addEventListener("scroll", onScroll); onScroll();
const burger = document.getElementById("burger"), menu = document.getElementById("menu");
const setMenu = o => { burger.classList.toggle("open", o); menu.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); };
burger.onclick = () => { modal && modal.classList.remove("open"); setMenu(!menu.classList.contains("open")); };
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));

/* mega menu dropdowns */
const ddItems = menu.querySelectorAll(".hasdd");
ddItems.forEach(li => {
  const trg = li.querySelector(":scope > a");
  trg.addEventListener("click", e => {
    if (!matchMedia("(min-width:1281px)").matches) { setMenu(false); return; }
    // Desktop: the trigger itself navigates to its section page; its panel opens on hover.
  });
});
document.addEventListener("click", e => { if (!e.target.closest("#menu")) ddItems.forEach(x => x.classList.remove("open")); });
document.addEventListener("keydown", e => { if (e.key === "Escape") ddItems.forEach(x => x.classList.remove("open")); });

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
  if (o) { e.preventDefault(); track("Enquiry opened", { type: o.dataset.open }); tab(o.dataset.open); modal.classList.add("open"); setMenu(false); ddItems.forEach(x => x.classList.remove("open")); }
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
  let i = 0, timer = null, paused = false, stopped = still;
  const loadBg = n => { const s = slides[(n + slides.length) % slides.length], bg = s.querySelector(".bg"); if (s.dataset.bg && !bg.style.backgroundImage) bg.style.background = s.dataset.bg + " center/cover no-repeat"; };
  function go(n, user) {
    i = (n + slides.length) % slides.length;
    loadBg(i); loadBg(i + 1);
    slides.forEach((s, k) => { s.classList.toggle("active", k === i); s.setAttribute("aria-hidden", k !== i); s.querySelectorAll("a,button").forEach(a => a.tabIndex = k === i ? 0 : -1); });
    tabs.forEach((t, k) => { t.classList.remove("on", "run"); t.setAttribute("aria-selected", k === i); if (k === i) { t.classList.add("on"); void t.offsetWidth; if (!stopped) t.classList.add("run"); } });
    tabs[i].scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
    if (user) stopped = true;
    schedule();
  }
  function schedule() { clearTimeout(timer); tabs.forEach(t => t.classList.toggle("hold", paused)); if (!stopped && !paused) timer = setTimeout(() => go(i + 1), DUR); }
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
if (soc) soc.innerHTML = socialLinks || '<span class="note">Social links to be added.</span>';

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

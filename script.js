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
  /* Leadership. Names are placeholders until confirmed by management.
     Photo files go in /images. Avatar SVGs are used until real photos are provided. */
  team: {
    ceo: {
      title: "Founder & Chief Executive Officer",
      name: "Samaila Bah, FMVA®, BIDA®, FIMC, CMC, fNSIG, FCAI Hons.",
      bio: "CEO / Business Consultant at Misalta Global Ltd. A Financial Analyst using Data & Analytics to Generate Revenue for 5 Years. Renewable Energy, Finance and Investment Enthusiast. Drone Hobbyist. RFP and Grants Fellow.",
      photo: "images/ceo.jfif",
      linkedin: "https://www.linkedin.com/in/samaila-bah/"
    },
    directors: [
      { title: "Director of Finance", name: "Sam John Doe", bio: "Oversees financial strategy, investment planning and corporate governance across the group.", photo: "images/logo.jfif" },
      { title: "Director of Operations", name: "Sam John Doe", bio: "Leads operational execution, facility management and process optimisation.", photo: "images/logo.jfif" },
      { title: "Director of Agro-Processing", name: "Sam John Doe", bio: "Drives agro-processing initiatives, value addition and product development.", photo: "images/logo.jfif" },
      { title: "Director of Trade & Markets", name: "Sam John Doe", bio: "Manages commodity trading relationships, market access and export development.", photo: "images/logo.jfif" },
      { title: "Director of Strategy & Partnerships", name: "Sam John Doe", bio: "Leads strategic planning, partnership development and business expansion.", photo: "images/logo.jfif" }
    ],
    chairman: { title: "Board Chairman", name: "Sam John Doe", bio: "Provides board leadership, governance oversight and strategic direction for the group.", photo: "images/logo.jfif" },
    formerChairman: { title: "Former Chairman", name: "Lt. Musa Bah, TiT, Tle, Hons, WILL, BE, ADDED", bio: "Previously served as Chairman of the board, providing leadership and strategic direction.", photo: "images/logo.jfif" },
    advisers: [
      { title: "Financial Adviser", name: "Sam John Doe", bio: "Advises on financial management, investment strategy and risk assessment.", photo: "images/logo.jfif" },
      { title: "Agricultural Adviser", name: "Sam John Doe", bio: "Provides technical guidance on agronomy, value chain development and sustainable farming.", photo: "images/logo.jfif" },
      { title: "Legal Adviser", name: "Sam John Doe", bio: "Advises on legal compliance, contracts, regulatory matters and corporate governance.", photo: "images/logo.jfif" }
    ]
  }
};
/* ======================================================================= */

const E = CONFIG.emails;
const pod = `<svg viewBox="0 0 200 200"><defs><linearGradient id="pg" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#f3dc9a"/><stop offset="1" stop-color="#c9a24a"/></linearGradient></defs><path d="M100 14c52 22 72 82 36 140-14 22-52 30-72 0C28 100 46 36 100 14z" fill="url(#pg)"/><path d="M100 20c-14 50-14 110 0 160M70 40c-10 44-6 92 10 124M130 40c10 44 6 92-10 124" stroke="#2a6a3f" stroke-width="4" fill="none" opacity=".55"/><path d="M100 14c10-10 30-12 40-4-8 10-26 14-40 4z" fill="#6fb23f"/></svg>`;
const leaf = `<svg viewBox="0 0 200 200"><path d="M30 170C20 80 80 20 176 24c4 96-50 154-146 146z" fill="#6fb23f"/><path d="M30 170C80 120 120 80 170 30" stroke="#0b2a18" stroke-width="6" fill="none"/><path d="M70 130l30 4M90 108l36 2M112 84l32 0" stroke="#0b2a18" stroke-width="4"/></svg>`;
const network = `<svg viewBox="0 0 200 200" fill="none" stroke="#6fb23f" stroke-width="3"><circle cx="100" cy="100" r="26" fill="#1f7a3f"/><g fill="#0f2e1c"><circle cx="38" cy="50" r="15"/><circle cx="162" cy="50" r="15"/><circle cx="38" cy="150" r="15"/><circle cx="162" cy="150" r="15"/></g><path d="M52 60l30 28M148 60l-30 28M52 140l30-28M148 140l-30-28" stroke-dasharray="5 6"/></svg>`;
const factory = `<svg viewBox="0 0 200 200"><path d="M24 160V92l44 24V92l44 24V70h24v90z" fill="#1b4a2c" stroke="#6fb23f" stroke-width="4"/><path d="M128 70V44h22v26" fill="#2a6a3f" stroke="#6fb23f" stroke-width="4"/><g fill="#6fb23f"><rect x="40" y="132" width="16" height="14"/><rect x="76" y="132" width="16" height="14"/><rect x="112" y="132" width="16" height="14"/></g></svg>`;

const page = location.pathname.split("/").pop() || "index.html";
const navItem = (f, t, extra = "") => `<li><a class="link ${page === f ? "active" : ""}" href="${f}">${t}${extra}</a></li>`;
const linkedinIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z"/></svg>`;
const socialLinks = Object.entries(CONFIG.social).filter(([, u]) => u).map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${n}" title="${n}">${n === "LinkedIn" ? linkedinIcon : n.slice(0, 2)}</a>`).join("");
const mark = `<img class="logo-img" src="images/logo.jfif" alt="Misalta Global Ltd. logo"><span class="logo-text">Misalta<small>GLOBAL LTD.</small><small class="motto">Building Tomorrow, Today</small></span>`;

document.body.insertAdjacentHTML("afterbegin", `
<a class="skip" href="#main">Skip to content</a>
<header class="nav" id="hdr"><div class="container nav-in">
  <a class="logo" href="index.html">${mark}</a>
  <nav id="menu" aria-label="Main"><ul>
    ${navItem("index.html", "Home")}${navItem("about.html", "About Us")}${navItem("businesses.html", "Businesses")}${navItem("consulting.html", "Consulting")}${navItem("agro-processing.html", "Agro-Processing")}
    ${navItem("trade-x.html", "Misalta Trade X", '<em class="soon">Coming Soon</em>')}${navItem("agro-hubs.html", "Agro Hubs")}${navItem("investment.html", "Invest &amp; Partner")}${navItem("team.html", "Team")}${navItem("contact.html", "Contact")}
  </ul></nav>
  <button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
</div></header>`);
document.querySelector("section")?.setAttribute("id", "main");

document.body.insertAdjacentHTML("beforeend", `
<footer><div class="container"><div class="f-grid">
  <div class="f-brand"><a class="logo" href="index.html">${mark}</a>
  <p style="margin-top:16px;max-width:320px">Transforming Agriculture. Building Industry. Creating Value.</p>
  <div class="socials">${socialLinks}</div></div>
  <div><h4>Company</h4><a href="about.html">About Us</a><a href="team.html">Leadership &amp; Team</a><a href="businesses.html">Our Businesses</a><a href="consulting.html">Misalta Consulting</a><a href="contact.html">Contact</a></div>
  <div><h4>Ventures</h4><a href="agro-processing.html">Agro-Processing</a><a href="trade-x.html">Misalta Trade X</a><a href="agro-hubs.html">Agro Hubs</a><a href="investment.html">Investment &amp; Partnerships</a></div>
  <div><h4>Reach Us</h4><a href="mailto:${E.info}">${E.info}</a><a href="tel:${CONFIG.phone.replace(/\s/g, "")}">${CONFIG.phone}</a><span>${CONFIG.address}</span><a href="privacy.html">Privacy Notice</a></div>
</div><div class="copy"><span>© ${new Date().getFullYear()} ${CONFIG.company} All rights reserved.</span><span>Planned ventures and platform features are shown with their current status.</span></div></div></footer>

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
    <div class="row"><div class="field"><label>Product of interest</label><select name="Product"><option>Cocoa butter</option><option>Cocoa powder</option><option>Other agricultural product</option></select></div><div class="field"><label>Estimated quantity</label><input name="Quantity"></div></div>
    <div class="field"><label>Message</label><textarea name="Message" rows="3"></textarea></div>
    <label class="consent"><input type="checkbox" name="Consent" value="Yes" required> I agree to be contacted about this enquiry. See the <a href="privacy.html">privacy notice</a>.</label>
    <button class="btn btn-green" style="width:100%;justify-content:center">Send Supply Enquiry</button></form>
  <form class="mf hidden" id="f-services" data-kind="Misalta Consulting Enquiry" data-to="${E.services}">
    <div class="row"><div class="field"><label>Full name</label><input name="Name" required></div><div class="field"><label>Email</label><input type="email" name="Email" required></div></div>
    <div class="row"><div class="field"><label>Organisation</label><input name="Organisation"></div><div class="field"><label>Phone</label><input name="Phone"></div></div>
    <div class="field"><label>Service needed</label><select name="Service"><option>Training services</option><option>Facility management</option><option>Procurement support</option><option>Financial advisory</option><option>Other</option></select></div>
    <div class="field"><label>Message</label><textarea name="Message" rows="3"></textarea></div>
    <label class="consent"><input type="checkbox" name="Consent" value="Yes" required> I agree to be contacted about this enquiry. See the <a href="privacy.html">privacy notice</a>.</label>
    <button class="btn btn-gold" style="width:100%;justify-content:center">Send Consulting Enquiry</button></form>
  <p class="note">Submitting opens your email app with the message prepared for the right team.</p>
</div></div><div class="toast" id="toast" role="status"></div>`);

/* header + menu */
const hdr = document.getElementById("hdr");
const onScroll = () => hdr.classList.toggle("scrolled", scrollY > 40);
addEventListener("scroll", onScroll); onScroll();
const burger = document.getElementById("burger"), menu = document.getElementById("menu");
const setMenu = o => { burger.classList.toggle("open", o); menu.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); };
burger.onclick = () => setMenu(!menu.classList.contains("open"));
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));

/* modal */
const modal = document.getElementById("modal");
const toast = m => { const t = document.getElementById("toast"); t.textContent = m; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 4500); };
function tab(k) {
  document.querySelectorAll(".tabs button").forEach(b => b.classList.toggle("on", b.dataset.tab === k));
  document.getElementById("f-invest").classList.toggle("hidden", k !== "invest");
  document.getElementById("f-supply").classList.toggle("hidden", k !== "supply");
  document.getElementById("f-services").classList.toggle("hidden", k !== "services");
}
document.addEventListener("click", e => {
  const o = e.target.closest("[data-open]");
  if (o) { e.preventDefault(); tab(o.dataset.open); modal.classList.add("open"); setMenu(false); }
  const t = e.target.closest("[data-tab]"); if (t) tab(t.dataset.tab);
});
document.getElementById("mclose").onclick = () => modal.classList.remove("open");
modal.onclick = e => { if (e.target === modal) modal.classList.remove("open"); };
addEventListener("keydown", e => e.key === "Escape" && modal.classList.remove("open"));

/* forms: prepare an email to the right team */
function sendMail(form, kind, to, msg) {
  const d = new FormData(form);
  const body = kind + "\n\n" + [...d.entries()].map(([k, v]) => `${k}: ${v}`).join("\n");
  location.href = `mailto:${to}?subject=${encodeURIComponent(kind + " – " + CONFIG.short)}&body=${encodeURIComponent(body)}`;
  toast(msg); form.reset(); modal.classList.remove("open");
}
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

/* hero slider */
const slides = [...document.querySelectorAll(".slide")];
if (slides.length) {
  const dotsBox = document.getElementById("dots"); let i = 0, timer;
  slides.forEach((_, n) => { const b = document.createElement("button"); b.className = "dot"; b.setAttribute("aria-label", "Slide " + (n + 1)); b.onclick = () => go(n); dotsBox.appendChild(b); });
  const dots = [...dotsBox.children];
  function go(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("active", k === i));
    dots.forEach((d, k) => { d.classList.remove("active"); if (k === i) { void d.offsetWidth; d.classList.add("active"); } });
    clearInterval(timer); timer = setInterval(() => go(i + 1), 6500);
  }
  document.getElementById("prev").onclick = () => go(i - 1);
  document.getElementById("next").onclick = () => go(i + 1);
  let x0 = null; const hero = document.querySelector(".hero");
  hero.addEventListener("touchstart", e => x0 = e.touches[0].clientX, { passive: true });
  hero.addEventListener("touchend", e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1)); x0 = null; });
  go(0);
  const c = document.getElementById("particles"), ctx = c.getContext("2d"); let W, H, ps = [];
  const size = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; ps = Array.from({ length: Math.min(60, W / 22) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 3 + 1, v: Math.random() * .5 + .15, c: Math.random() > .5 ? "217,178,90" : "111,178,63" })); };
  size(); addEventListener("resize", size);
  (function draw() { ctx.clearRect(0, 0, W, H); ps.forEach(p => { p.y -= p.v; p.x += Math.sin(p.y / 40) * .3; if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; } ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fillStyle = `rgba(${p.c},.55)`; ctx.fill(); }); requestAnimationFrame(draw); })();
}

/* card tilt (pointer devices only) */
if (matchMedia("(hover:hover)").matches) document.querySelectorAll(".card,.panel").forEach(c => {
  c.addEventListener("mousemove", e => { const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; c.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-8px)`; });
  c.addEventListener("mouseleave", () => c.style.transform = "");
});

/* svg art */
document.querySelectorAll("[data-art]").forEach(el => el.innerHTML = { pod, leaf, network, factory }[el.dataset.art]);

/* contact details on contact page */
const setT = (id, v, href) => { const el = document.getElementById(id); if (!el) return; const t = el.querySelector("b"); if (t && v) t.textContent = v; if (href) el.href = href; };
setT("c-info", E.info, "mailto:" + E.info);
setT("c-phone", CONFIG.phone, "tel:" + CONFIG.phone.replace(/\s/g, ""));
setT("c-wa", null, "https://wa.me/" + CONFIG.whatsapp);
setT("c-addr", CONFIG.address);
const soc = document.getElementById("soc");
if (soc) soc.innerHTML = socialLinks || '<span class="note">Social links to be added.</span>';

/* team */
const initials = n => n.split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
function person(p, big) {
  const logoPh = p.photo && p.photo.indexOf("logo.jfif") > -1;
  const pending = !p.name || logoPh;
  const photo = p.photo && !logoPh ? `<img src="${p.photo}" alt="${p.name || p.title}" loading="lazy" onerror="this.remove()">` : "";
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
document.querySelectorAll(".person.reveal").forEach(el => io.observe(el));

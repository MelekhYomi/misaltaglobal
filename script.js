/* ============ EDIT THESE BEFORE LAUNCH ============ */
const CONFIG = {
  company: "Misalta Global",
  careEmail: "care@misaltaglobal.com",
  infoEmail: "info@misaltaglobal.com",
  investEmail: "invest@misaltaglobal.com",
  salesEmail: "sales@misaltaglobal.com",
  phone: "+234 000 000 0000",
  whatsapp: "2340000000000",           // international format, no + or spaces
  address: "Abuja, Nigeria",
  social: {
    Facebook: "https://facebook.com/misaltaglobal",
    Instagram: "https://instagram.com/misaltaglobal",
    LinkedIn: "https://linkedin.com/company/misaltaglobal",
    X: "https://x.com/misaltaglobal",
    TikTok: "https://tiktok.com/@misaltaglobal"
  }
};
/* ================================================= */

const pod = `<svg viewBox="0 0 200 200"><defs><linearGradient id="pg" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#f3cf7a"/><stop offset="1" stop-color="#c9822f"/></linearGradient></defs><path d="M100 14c52 22 72 82 36 140-14 22-52 30-72 0C28 100 46 36 100 14z" fill="url(#pg)"/><path d="M100 20c-14 50-14 110 0 160M70 40c-10 44-6 92 10 124M130 40c10 44 6 92-10 124" stroke="#8a4f2d" stroke-width="4" fill="none" opacity=".55"/><path d="M100 14c10-10 30-12 40-4-8 10-26 14-40 4z" fill="#6fb23f"/></svg>`;
const leaf = `<svg viewBox="0 0 200 200"><path d="M30 170C20 80 80 20 176 24c4 96-50 154-146 146z" fill="#6fb23f"/><path d="M30 170C80 120 120 80 170 30" stroke="#16391f" stroke-width="6" fill="none"/><path d="M70 130l30 4M90 108l36 2M112 84l32 0" stroke="#16391f" stroke-width="4"/></svg>`;
const bar = `<svg viewBox="0 0 200 200"><rect x="30" y="50" width="140" height="100" rx="14" fill="#4a2a1b" stroke="#e3b04b" stroke-width="4"/><g stroke="#e3b04b" stroke-width="3" opacity=".7"><path d="M77 50v100M123 50v100M30 83h140M30 117h140"/></g><rect x="30" y="50" width="46" height="33" rx="8" fill="#6b3e26"/></svg>`;

const page = location.pathname.split("/").pop() || "index.html";
const nav = (f, t) => `<li><a class="link ${page === f || (page === "" && f === "index.html") ? "active" : ""}" href="${f}">${t}</a></li>`;
const socialLinks = Object.entries(CONFIG.social).map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${n}" title="${n}">${n.slice(0, 2)}</a>`).join("");

document.body.insertAdjacentHTML("afterbegin", `
<header class="nav" id="hdr"><div class="container nav-in">
  <a class="logo" href="index.html"><span class="logo-mark">✿</span><span>Misalta<small>GLOBAL</small></span></a>
  <nav id="menu"><ul>${nav("index.html", "Home")}${nav("about.html", "About")}${nav("services.html", "Services")}${nav("contact.html", "Contact")}
  <li><button class="btn btn-gold" data-open="invest" style="padding:10px 22px">Invest / Buy</button></li></ul></nav>
  <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
</div></header>`);

document.body.insertAdjacentHTML("beforeend", `
<footer><div class="container"><div class="f-grid">
  <div><a class="logo" href="index.html"><span class="logo-mark">✿</span><span>Misalta<small>GLOBAL</small></span></a>
  <p style="margin-top:16px;max-width:300px">From the cocoa farm to fine chocolate. Growing, processing and storing quality agricultural produce for Africa and the world.</p>
  <div class="socials">${socialLinks}</div></div>
  <div><h4>Explore</h4><a href="index.html">Home</a><a href="about.html">About Us</a><a href="services.html">Services</a><a href="contact.html">Contact</a></div>
  <div><h4>Work With Us</h4><a href="#" data-open="invest">Invest</a><a href="#" data-open="buy">Buy Produce</a><a href="services.html#farmers">Farmer Services</a></div>
  <div><h4>Reach Us</h4><a href="mailto:${CONFIG.careEmail}">${CONFIG.careEmail}</a><a href="mailto:${CONFIG.infoEmail}">${CONFIG.infoEmail}</a><a href="tel:${CONFIG.phone.replace(/\s/g, "")}">${CONFIG.phone}</a><span>${CONFIG.address}</span></div>
</div><div class="copy"><span>© ${new Date().getFullYear()} ${CONFIG.company}. All rights reserved.</span><span>misaltaglobal.com</span></div></div></footer>

<div class="fab"><button class="iv" data-open="invest" title="Invest / Buy">💰</button><a class="wa" href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener" title="WhatsApp">💬</a></div>

<div class="modal" id="modal"><div class="box"><button class="close" id="mclose">×</button>
  <h3 style="font-size:1.8rem">Make a Move</h3><p style="color:#6a5a50">Tell us what you need and our team will respond within 24 hours.</p>
  <div class="tabs"><button class="on" data-tab="invest">Invest</button><button data-tab="buy">Buy Produce</button></div>
  <form class="mf" id="f-invest" data-kind="Investment Enquiry" data-to="${CONFIG.investEmail}">
    <div class="row"><div class="field"><label>Full name</label><input name="Name" required></div><div class="field"><label>Email</label><input type="email" name="Email" required></div></div>
    <div class="row"><div class="field"><label>Phone / WhatsApp</label><input name="Phone"></div><div class="field"><label>Country</label><input name="Country" required></div></div>
    <div class="row"><div class="field"><label>Investor type</label><select name="Type"><option>Individual</option><option>Institution / Fund</option><option>Strategic partner</option></select></div>
    <div class="field"><label>Interest area</label><select name="Interest"><option>Farm &amp; plantation expansion</option><option>Processing plant</option><option>Chocolate manufacturing</option><option>Storage &amp; logistics</option></select></div></div>
    <div class="field"><label>Investment range (USD)</label><select name="Range"><option>Under 10,000</option><option>10,000 – 50,000</option><option>50,000 – 250,000</option><option>250,000+</option></select></div>
    <div class="field"><label>Message</label><textarea name="Message" rows="3"></textarea></div>
    <button class="btn btn-gold" style="width:100%;justify-content:center">Submit Investment Interest</button></form>
  <form class="mf hidden" id="f-buy" data-kind="Buyer Order Enquiry" data-to="${CONFIG.salesEmail}">
    <div class="row"><div class="field"><label>Full name / Company</label><input name="Name" required></div><div class="field"><label>Email</label><input type="email" name="Email" required></div></div>
    <div class="row"><div class="field"><label>Phone / WhatsApp</label><input name="Phone"></div><div class="field"><label>Country</label><input name="Country" required></div></div>
    <div class="row"><div class="field"><label>Product</label><select name="Product"><option>Cocoa beans</option><option>Cocoa butter</option><option>Cocoa powder</option><option>Cocoa liquor / mass</option><option>Chocolate products</option><option>Other agro produce</option></select></div>
    <div class="field"><label>Quantity (tons / units)</label><input name="Quantity" required></div></div>
    <div class="row"><div class="field"><label>Buyer type</label><select name="Buyer"><option>Local buyer</option><option>International buyer</option></select></div>
    <div class="field"><label>Delivery location</label><input name="Delivery"></div></div>
    <div class="field"><label>Message</label><textarea name="Message" rows="3"></textarea></div>
    <button class="btn btn-green" style="width:100%;justify-content:center">Request a Quote</button></form>
  <p class="note">Your request opens in your email app, and you can also send it via WhatsApp from the confirmation.</p>
</div></div><div class="toast" id="toast"></div>`);

/* header + menu */
const hdr = document.getElementById("hdr");
addEventListener("scroll", () => hdr.classList.toggle("scrolled", scrollY > 40));
hdr.classList.toggle("scrolled", scrollY > 40);
const burger = document.getElementById("burger"), menu = document.getElementById("menu");
burger.onclick = () => { burger.classList.toggle("open"); menu.classList.toggle("open"); };
menu.querySelectorAll("a").forEach(a => a.onclick = () => { burger.classList.remove("open"); menu.classList.remove("open"); });

/* modal */
const modal = document.getElementById("modal");
const toast = m => { const t = document.getElementById("toast"); t.textContent = m; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 4500); };
function tab(k) {
  document.querySelectorAll(".tabs button").forEach(b => b.classList.toggle("on", b.dataset.tab === k));
  document.getElementById("f-invest").classList.toggle("hidden", k !== "invest");
  document.getElementById("f-buy").classList.toggle("hidden", k !== "buy");
}
document.addEventListener("click", e => {
  const o = e.target.closest("[data-open]");
  if (o) { e.preventDefault(); tab(o.dataset.open); modal.classList.add("open"); menu.classList.remove("open"); burger.classList.remove("open"); }
  const t = e.target.closest("[data-tab]"); if (t) tab(t.dataset.tab);
});
document.getElementById("mclose").onclick = () => modal.classList.remove("open");
modal.onclick = e => { if (e.target === modal) modal.classList.remove("open"); };
addEventListener("keydown", e => e.key === "Escape" && modal.classList.remove("open"));

/* every form: build message -> email (and WhatsApp option) */
function handle(form, kind, to) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const d = new FormData(form);
    const lines = [...d.entries()].map(([k, v]) => `${k}: ${v}`).join("\n");
    const body = `${kind}\n\n${lines}`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(body)}`, "_blank");
    location.href = `mailto:${to}?subject=${encodeURIComponent(kind + " – " + CONFIG.company)}&body=${encodeURIComponent(body)}`;
    toast("Thank you! Your request is ready to send. We will respond shortly.");
    form.reset(); modal.classList.remove("open");
  });
}
document.querySelectorAll("form.mf").forEach(f => handle(f, f.dataset.kind, f.dataset.to));
const cf = document.getElementById("contactForm");
if (cf) cf.addEventListener("submit", e => {
  e.preventDefault();
  const dept = cf.querySelector("[name=Department]").value;
  const to = dept === "Customer Care" ? CONFIG.careEmail : CONFIG.infoEmail;
  const d = new FormData(cf), body = [...d.entries()].map(([k, v]) => `${k}: ${v}`).join("\n");
  location.href = `mailto:${to}?subject=${encodeURIComponent(dept + " – " + CONFIG.company)}&body=${encodeURIComponent(body)}`;
  toast("Thanks! Your message is ready to send."); cf.reset();
});

/* reveal on scroll */
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* counters */
const cio = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return;
  const el = en.target, end = +el.dataset.count, suf = el.dataset.suf || ""; let s = null;
  const step = ts => { s = s || ts; const p = Math.min((ts - s) / 1800, 1); el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * end) + suf; if (p < 1) requestAnimationFrame(step); };
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

  /* floating particles */
  const c = document.getElementById("particles"), ctx = c.getContext("2d"); let W, H, ps = [];
  const size = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; ps = Array.from({ length: Math.min(60, W / 22) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 3 + 1, v: Math.random() * .5 + .15, c: Math.random() > .5 ? "227,176,75" : "111,178,63" })); };
  size(); addEventListener("resize", size);
  (function draw() { ctx.clearRect(0, 0, W, H); ps.forEach(p => { p.y -= p.v; p.x += Math.sin(p.y / 40) * .3; if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; } ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fillStyle = `rgba(${p.c},.55)`; ctx.fill(); }); requestAnimationFrame(draw); })();
}

/* card tilt */
document.querySelectorAll(".card,.panel").forEach(c => {
  c.addEventListener("mousemove", e => { const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; c.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-8px)`; });
  c.addEventListener("mouseleave", () => c.style.transform = "");
});

/* inject svg art */
document.querySelectorAll("[data-art]").forEach(el => el.innerHTML = { pod, leaf, bar }[el.dataset.art]);

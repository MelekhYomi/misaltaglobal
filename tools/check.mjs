#!/usr/bin/env node
/* Misalta site check: run before every publish.
     node tools/check.mjs
   Exits 1 if anything is broken. Warnings (placeholders still in CONFIG, etc.)
   do not fail the run. No dependencies: Node 18+ only. */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname, posix } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://misaltaglobal.com";
const errors = [], warnings = [];
const err = (f, m) => errors.push(`${f}: ${m}`);
const warn = (f, m) => warnings.push(`${f}: ${m}`);
const read = p => readFileSync(join(ROOT, p), "utf8");

/* pages: every public .html (menu-mock is a local design file, ignored by git) */
const pages = readdirSync(ROOT).filter(f => f.endsWith(".html") && f !== "menu-mock.html")
  .concat(existsSync(join(ROOT, "trade-x/what_to_expect.html")) ? ["trade-x/what_to_expect.html"] : []);

/* ids that script.js creates at runtime (cards, presets, news router) */
const scriptJs = read("script.js");
const BIZ_IDS = [...scriptJs.matchAll(/\{ id: "([a-z-]+)", group:/g)].map(m => m[1]);
const NEWS_SLUGS = [...scriptJs.matchAll(/slug: "([a-z0-9-]+)"/g)].map(m => m[1]);
const DYNAMIC_ANCHORS = { "businesses.html": BIZ_IDS, "get-started.html": BIZ_IDS.concat("group", "unsure"), "news.html": NEWS_SLUGS, "index.html": ["showcase"] };

const resolveLocal = (page, ref) => {
  /* returns repo-relative path for a local URL, or null if external */
  if (/^(https?:|mailto:|tel:|data:|#|javascript:)/.test(ref) || ref.startsWith("//")) return null;
  const base = /<base href="\/">/.test(read(page)) ? "" : posix.dirname(page);
  let p = posix.normalize(posix.join(base === "." ? "" : base, ref.split(/[?#]/)[0]));
  if (p.startsWith("/")) p = p.slice(1);
  if (p === "" || p === ".") p = "index.html";
  if (!/\.[a-z0-9]+$/i.test(p)) p += ".html";            // cleanUrls: /about -> about.html
  return p;
};

const versions = { css: new Set(), js: new Set() };
for (const page of pages) {
  const h = read(page);
  const isPublic = page !== "404.html";
  /* head essentials */
  if (!/<html lang="en">/.test(h)) err(page, "missing <html lang>");
  if (!/<title>[^<]{10,}<\/title>/.test(h)) err(page, "missing or short <title>");
  if (!/<meta name="description" content="[^"]{50,}"/.test(h)) err(page, "missing or short meta description");
  if (!/<link rel="manifest" href="site\.webmanifest">/.test(h)) err(page, "missing favicon/manifest links");
  if (isPublic) {
    const canon = h.match(/<link rel="canonical" href="([^"]+)">/g) || [];
    if (canon.length !== 1) err(page, `expected 1 canonical link, found ${canon.length}`);
    const og = h.match(/<meta property="og:image" content="([^"]+)"/);
    if (!og) err(page, "missing og:image");
    else if (og[1].startsWith(SITE) && !existsSync(join(ROOT, og[1].slice(SITE.length + 1)))) err(page, `share image not found: ${og[1]}`);
  } else if (!/<meta name="robots" content="noindex">/.test(h)) err(page, "404 page should be noindex");
  /* structure */
  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  if (page !== "news.html" && h1 !== 1) err(page, `expected 1 <h1>, found ${h1}`);
  if (!/<body class="v2[ "]/.test(h)) err(page, "body is not on the v2 design");
  if (/v2\.css/.test(h)) err(page, "still links v2.css");
  if (/Misalta Global Ltd\./.test(h)) err(page, 'uses the old name "Misalta Global Ltd."');
  if (/\son(click|error|load|submit|change)=/i.test(h)) err(page, "inline event handler (blocked by CSP)");
  if (/<script>(?!\s*<\/script>)/.test(h)) err(page, "inline <script> (blocked by CSP)");
  const css = h.match(/styles\.css\?v=(\d+)/); if (css) versions.css.add(css[1]);
  const js = h.match(/script\.js\?v=(\d+)/); if (js) versions.js.add(js[1]); else err(page, "does not load script.js");
  /* local references: href, src, srcset, url('…') */
  const refs = [...h.matchAll(/\s(?:href|src)="([^"]+)"/g)].map(m => m[1])
    .concat([...h.matchAll(/srcset="([^"]+)"/g)].flatMap(m => m[1].split(",").map(s => s.trim().split(/\s+/)[0])))
    .concat([...h.matchAll(/url\('([^']+)'\)/g)].map(m => m[1]));
  for (const ref of new Set(refs)) {
    const p = resolveLocal(page, ref);
    if (p && !existsSync(join(ROOT, p))) err(page, `broken reference: ${ref}`);
  }
  /* anchors: #id on this page or another page */
  for (const m of h.matchAll(/href="([^"#]*)#([^"]+)"/g)) {
    const [, file, id] = m;
    const target = file ? resolveLocal(page, file) : page;
    if (!target || !existsSync(join(ROOT, target))) continue;
    const html = read(target);
    const ok = new RegExp(`id="${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`).test(html) || (DYNAMIC_ANCHORS[target] || []).includes(id) || id === "main";
    if (!ok) err(page, `link to missing anchor ${file || ""}#${id}`);
  }
  /* srcset sanity */
  for (const m of h.matchAll(/srcset="([^"]+)"/g)) {
    const ws = [...m[1].matchAll(/(\d+)w/g)].map(x => x[1]);
    if (new Set(ws).size !== ws.length) err(page, `duplicate widths in srcset: ${m[1].slice(0, 60)}…`);
  }
  /* images need alt */
  for (const m of h.matchAll(/<img\b[^>]*>/g)) if (!/\salt="/.test(m[0])) err(page, `<img> without alt: ${m[0].slice(0, 70)}…`);
}
if (versions.css.size > 1) err("pages", `styles.css versions differ across pages: ${[...versions.css].join(", ")}`);
if (versions.js.size > 1) err("pages", `script.js versions differ across pages: ${[...versions.js].join(", ")}`);

/* content that must never disappear when pages are regenerated */
const MUST = {
  "index.html": ['id="showcase"', 'id="bizGrid"', 'class="proof-strip"'],
  "businesses.html": ['data-biz-grid="chain"', 'data-biz-grid="enabler"'],
  "farms.html": ['data-tmap="all"', "100,000", "under cultivation"],
  "agro-processing.html": ['data-tmap="processing"', "Mayo Dassa Old Airstrip"],
  "agro-hubs.html": ['data-tmap="hub"', "Gashaka"],
  "investment.html": ['data-tmap="all"', 'id="pipeline"', 'id="partner"'],
  "about.html": ['id="team-ceo"', 'id="team-dir"', 'id="team-adv"'],
  "get-started.html": ['id="obForm"'],
  "trade-x.html": ['id="early-access"', 'anim-tradex'],
  "energy.html": ['anim-energy'],
  "credits.html": ['Wikimedia Commons']
};
for (const [page, needles] of Object.entries(MUST)) {
  if (!existsSync(join(ROOT, page))) { err(page, "page is missing"); continue; }
  const h = read(page);
  for (const n of needles) if (!h.includes(n)) err(page, `required content missing: ${n}`);
}
if (/farmland in Taraba State/.test(read("farms.html"))) err("farms.html", 'says "farmland"; management confirmed "under cultivation"');

/* sitemap + robots */
const sitemap = read("sitemap.xml");
for (const page of pages.filter(p => p !== "404.html")) {
  const url = `${SITE}/${page === "index.html" ? "" : page.replace(/\.html$/, "")}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) err("sitemap.xml", `missing ${url}`);
}
if (!/Sitemap: https:\/\/misaltaglobal\.com\/sitemap\.xml/.test(read("robots.txt"))) err("robots.txt", "missing Sitemap line");

/* vercel.json */
try {
  const v = JSON.parse(read("vercel.json"));
  const csp = v.headers?.flatMap(x => x.headers).find(x => x.key === "Content-Security-Policy")?.value || "";
  if (!csp) err("vercel.json", "no Content-Security-Policy header");
  else if (!csp.includes("https://api.web3forms.com")) err("vercel.json", "CSP does not allow Web3Forms (forms would fail)");
} catch (e) { err("vercel.json", "invalid JSON: " + e.message); }

/* script.js: syntax, business pages, photos */
try { execFileSync(process.execPath, ["--check", join(ROOT, "script.js")], { stdio: "pipe" }); } catch (e) { err("script.js", "syntax error: " + e.stderr.toString().split("\n").slice(0, 3).join(" ")); }
for (const id of BIZ_IDS) if (!existsSync(join(ROOT, id + ".html"))) err("script.js", `BUSINESSES "${id}" has no page ${id}.html`);
const photoW = scriptJs.match(/const PHOTO_W = \{([\s\S]*?)\};/);
for (const name of photoW ? [...photoW[1].matchAll(/([a-z_]+): \[/g)].map(m => m[1]) : [])
  for (const t of ["sm", "md", "lg"]) if (!existsSync(join(ROOT, `images/photos/${name}-${t}.webp`))) err("images/photos", `missing ${name}-${t}.webp`);

/* placeholders and pending content: warnings */
if (/phone: "\+234 000 000 0000"/.test(scriptJs)) warn("CONFIG", "phone number is still a placeholder");
if (/whatsapp: "2340000000000"/.test(scriptJs)) warn("CONFIG", "WhatsApp number is still a placeholder (the button goes nowhere)");
if (/address: "Address to be confirmed"/.test(scriptJs)) warn("CONFIG", "head-office address is still a placeholder");
if (/keys: \{ default: "", info: "", services: "", supply: "", tradex: "", invest: "", media: "" \}/.test(scriptJs)) warn("CONFIG", "no Web3Forms keys: forms fall back to the visitor's email app");
{ const reqN = (scriptJs.match(/", "req", ""\]/g) || []).length, heldNoRef = (scriptJs.match(/", "held", "xxxxxx"\]/g) || []).length;
  if (reqN) warn("CREDENTIALS", `${reqN} licences/registrations still marked "Required": set "held" (with ref) or "progress" as management confirms`);
  if (heldNoRef) warn("CREDENTIALS", `${heldNoRef} "Held" items show "xxxxxx" as their reference: add the real certificate numbers`); }
if ((NEWS_SLUGS.length) < 3) warn("NEWS", `${NEWS_SLUGS.length} stories: the homepage news band stays hidden until there are 3`);

/* report */
const line = "─".repeat(60);
console.log(`\nMisalta site check · ${pages.length} pages\n${line}`);
if (errors.length) { console.log(`✗ ${errors.length} error(s)`); errors.forEach(e => console.log("  • " + e)); }
else console.log("✓ No errors");
if (warnings.length) { console.log(`! ${warnings.length} warning(s)`); warnings.forEach(w => console.log("  • " + w)); }
console.log(line);
process.exit(errors.length ? 1 : 0);

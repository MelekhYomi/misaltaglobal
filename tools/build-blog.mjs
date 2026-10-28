// Builds the blog from the NEWS, CATEGORIES and AUTHORS data in script.js:
//   blog.html                    all posts, authors, sidebar
//   blog/<slug>.html             one page per post (BlogPosting structured data, author box, related posts)
//   blog/category/<id>.html      one page per category (the group and every business)
//   blog/author/<id>.html        one page per author (ProfilePage + Person, linked to their public profiles)
//   blog/feed.xml, sitemap-blog.xml
// Run after any change to a story, category or author:  node tools/build-blog.mjs
// tools/check.mjs fails if the generated files are out of date.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, unlinkSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://misaltaglobal.com";
const lf = s => s.replace(/\r\n/g, "\n");
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const abs = p => /^https?:/.test(p) ? p : `${SITE}/${p.replace(/^\//, "")}`;
const clean = p => p.replace(/\.html$/, "").replace(/^index$/, "");

function data() {
  const js = lf(readFileSync(join(ROOT, "script.js"), "utf8"));
  const head = js.slice(0, js.indexOf("const E = CONFIG.emails;"));
  const ctx = {};
  vm.runInNewContext(`${head}\nthis.out = { CONFIG, BUSINESSES, STATUS, NEWS, CATEGORIES, AUTHORS };`, ctx);
  const index = lf(readFileSync(join(ROOT, "index.html"), "utf8"));
  ctx.out.CSSV = index.match(/styles\.css\?v=(\d+)/)[1];
  ctx.out.JSV = index.match(/script\.js\?v=(\d+)/)[1];
  return ctx.out;
}

export function buildBlog() {
  const { CONFIG, NEWS, CATEGORIES, AUTHORS, CSSV, JSV } = data();
  const cat = id => CATEGORIES.find(c => c.id === id) || CATEGORIES[0];
  const author = id => AUTHORS.find(a => a.id === id) || AUTHORS.find(a => a.id === "misalta-team") || AUTHORS[0];
  const posts = NEWS.map(n => ({ ...n, cat: cat(n.category || "group"), by: author(n.author) }))
    .sort((a, b) => (b.published || "").localeCompare(a.published || ""));  // newest first
  const postUrl = p => `blog/${p.slug}.html`, catUrl = c => `blog/category/${c.id}.html`, authUrl = a => `blog/author/${a.id}.html`;
  const ldDate = p => p.published || "";
  const ogImg = p => /\.(jpe?g|png|webp)$/i.test(p.cover || "") ? abs(p.cover) : `${SITE}/images/og/blog.jpg`;
  const org = { "@type": "Organization", name: CONFIG.company, url: SITE + "/", logo: { "@type": "ImageObject", url: `${SITE}/images/icons/icon-512.png` } };
  const person = a => ({ "@type": a.id === "misalta-team" ? "Organization" : "Person", name: a.name, url: abs(clean(authUrl(a))), ...(a.id === "misalta-team" ? {} : { jobTitle: a.role, worksFor: { "@type": "Organization", name: CONFIG.company } }), image: abs(a.photo), sameAs: a.sameAs, knowsAbout: a.topics });
  const crumbs = list => ({ "@type": "BreadcrumbList", itemListElement: list.map(([name, url], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(url) })) });
  const counts = Object.fromEntries(CATEGORIES.map(c => [c.id, posts.filter(p => p.cat.id === c.id).length]));
  const files = {};

  const page = ({ path, title, desc, canonical, og, ld, body, sub, noindex }) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
${sub ? '<base href="/">\n' : ""}<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex,follow">\n' : ""}<meta property="og:site_name" content="${esc(CONFIG.company)}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:type" content="${ld["@type"] === "BlogPosting" ? "article" : "website"}"><link rel="canonical" href="${canonical}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${og}"><meta property="og:image:alt" content="${esc(title)}"><meta name="twitter:image" content="${og}"><meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="#0b2a18"><link rel="icon" href="favicon.ico" sizes="any"><link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32.png"><link rel="apple-touch-icon" href="images/icons/apple-touch-icon.png"><link rel="manifest" href="site.webmanifest"><link rel="alternate" type="application/rss+xml" title="Misalta Blog" href="${SITE}/blog/feed.xml">
<link rel="preload" href="fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin data-perf>
<link rel="preload" href="fonts/public-sans-latin.woff2" as="font" type="font/woff2" crossorigin data-perf>
<link rel="stylesheet" href="styles.css?v=${CSSV}">
<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": [].concat(ld) })}</script>
</head>
<body class="v2 blog">
${body}
<script src="script.js?v=${JSV}"></script>
</body>
</html>
`;

  const hero = (crumbList, h1, lead, extra = "") => `<section class="phero blog-hero torn-b"><div class="container">
  <div class="crumbs" role="navigation" aria-label="Breadcrumb">${crumbList.map(([n, u], i) => i === crumbList.length - 1 ? `<span>${esc(n)}</span>` : `<a href="${u}">${esc(n)}</a><i>/</i>`).join("")}</div>
  ${extra}<h1>${h1}</h1>
  ${lead ? `<p>${lead}</p>` : ""}
</div></section>`;

  const avatar = (a, size = 40) => `<img class="b-avatar" src="${a.photo}" alt="" width="${size}" height="${size}" loading="lazy">`;
  const chip = c => `<a class="b-cat" href="${catUrl(c)}">${esc(c.name)}</a>`;
  const card = (p, big) => `<article class="post-card${big ? " big" : ""}" data-search="${esc((p.title + " " + p.lede + " " + p.cat.name + " " + p.by.name + " " + p.tag).toLowerCase())}">
    <a class="pc-img" href="${postUrl(p)}" tabindex="-1" aria-hidden="true"><img src="${p.cover}" alt="" loading="lazy" data-fallback="remove"></a>
    <div class="pc-body">${chip(p.cat)}<h2 class="pc-title"><a href="${postUrl(p)}">${esc(p.title)}</a></h2><p>${esc(p.lede)}</p>
    <div class="b-meta"><a href="${authUrl(p.by)}">${avatar(p.by, 28)}${esc(p.by.name)}</a><span>${esc(p.date)}</span></div></div>
  </article>`;

  const sidebar = () => `<aside class="b-side" aria-label="Blog sidebar">
    <form class="b-box b-search" action="blog.html" role="search"><label class="sr" for="blogQ">Search the blog</label><input id="blogQ" name="q" type="search" placeholder="Search the blog" autocomplete="off"><button type="submit" aria-label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg></button></form>
    <div class="b-box"><h3>Categories</h3><ul class="b-cats">${CATEGORIES.map(c => `<li><a href="${catUrl(c)}"><span>${esc(c.name)}</span><i>${counts[c.id]}</i></a></li>`).join("")}</ul></div>
    <div class="b-box"><h3>Authors</h3><ul class="b-authors">${AUTHORS.map(a => `<li><a href="${authUrl(a)}">${avatar(a, 36)}<span><b>${esc(a.name)}</b><small>${esc(a.role)}</small></span></a></li>`).join("")}</ul></div>
    <div class="b-box"><h3>Recent posts</h3><ul class="b-recent">${posts.slice(0, 5).map(p => `<li><a href="${postUrl(p)}">${esc(p.title)}</a><small>${esc(p.date)}</small></li>`).join("")}</ul></div>
    <div class="b-box b-cta"><h3>Have a question?</h3><p>Ask Misalta AI about any of our businesses, or talk to the team.</p><a class="btn btn-green btn-sm" href="#" data-assistant>Ask Misalta AI</a><a class="b-link" href="contact.html">Contact us →</a></div>
  </aside>`;

  const layout = main => `<section class="blog-sec"><div class="container blog-layout"><div class="b-main">${main}</div>${sidebar()}</div></section>`;
  const authorCard = a => `<a class="author-card" href="${authUrl(a)}">${avatar(a, 64)}<span><b>${esc(a.name)}</b><small>${esc(a.role)}</small><span class="a-topics">${a.topics.map(t => `<i>${esc(t)}</i>`).join("")}</span></span></a>`;

  /* blog.html */
  const blogLd = [{ "@type": "Blog", name: "Misalta Blog", url: `${SITE}/blog`, description: "Stories and updates from the Misalta group and its businesses.", publisher: org,
    blogPost: posts.map(p => ({ "@type": "BlogPosting", headline: p.title, url: abs(clean(postUrl(p))), datePublished: ldDate(p), author: { "@type": person(p.by)["@type"], name: p.by.name } })) },
    crumbs([["Home", ""], ["Blogs", "blog"]])];
  files["blog.html"] = page({ path: "blog.html", title: "Blogs | Misalta Global Concepts Ltd.", desc: "Stories and updates from Misalta Global Concepts Ltd. and its businesses: farms, agro-processing, agro hubs, logistics, Trade X, energy, construction and consulting.",
    canonical: `${SITE}/blog`, og: `${SITE}/images/og/blog.jpg`, ld: blogLd,
    body: hero([["Home", "index.html"], ["Blogs", "blog.html"]], "Misalta Blog", "Stories, milestones and insights from the Misalta group and every business we run.") +
      layout(`<div class="b-head"><h2>Latest posts</h2><p class="b-count" id="blogCount">${posts.length} post${posts.length === 1 ? "" : "s"}</p></div>
      <div class="post-list" id="postList">${posts.map((p, i) => card(p, i === 0)).join("")}</div>
      <p class="b-empty" id="blogEmpty" hidden>No posts match your search. Try another word, or browse a category.</p>
      <div class="b-authors-sec" id="authors"><h2>Our authors</h2><p class="lead">The people behind the Misalta blog and what they write about.</p><div class="author-grid">${AUTHORS.map(authorCard).join("")}</div></div>`) });

  /* posts */
  for (const p of posts) {
    const related = posts.filter(x => x !== p && x.cat.id === p.cat.id).concat(posts.filter(x => x !== p && x.cat.id !== p.cat.id)).slice(0, 3);
    const url = abs(clean(postUrl(p)));
    const share = [["LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`], ["X", `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(p.title)}`],
      ["WhatsApp", `https://wa.me/?text=${encodeURIComponent(p.title + " " + url)}`], ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`]];
    const body = (p.body || []).map(b => b[0] === "img" ? `<figure><img src="${b[1]}" alt="${esc(b[2] || "")}" loading="lazy" data-fallback="figure">${b[2] ? `<figcaption>${esc(b[2])}</figcaption>` : ""}</figure>` : `<p>${esc(b[1])}</p>`).join("\n");
    const ld = [{ "@type": "BlogPosting", headline: p.title, description: p.lede, image: [ogImg(p)], datePublished: ldDate(p), dateModified: ldDate(p), author: person(p.by), publisher: org,
      mainEntityOfPage: { "@type": "WebPage", "@id": url }, articleSection: p.cat.name, keywords: [p.tag, p.cat.name].join(", "), url },
      crumbs([["Home", ""], ["Blogs", "blog"], [p.cat.name, clean(catUrl(p.cat))], [p.title, clean(postUrl(p))]])];
    files[postUrl(p)] = page({ path: postUrl(p), sub: true, title: `${p.title} | Misalta Blog`, desc: p.lede, canonical: url, og: ogImg(p), ld,
      body: hero([["Home", "index.html"], ["Blogs", "blog.html"], [p.cat.name, catUrl(p.cat)], [p.title, ""]], esc(p.title), "",
        `<div class="b-hero-meta">${chip(p.cat)}<span>${esc(p.tag)}</span><span>${esc(p.date)}</span></div>`) +
        layout(`<article class="b-article">
        <div class="b-byline"><a href="${authUrl(p.by)}">${avatar(p.by, 44)}<span><b>${esc(p.by.name)}</b><small>${esc(p.by.role)} · ${esc(p.date)}</small></span></a></div>
        ${p.cover ? `<figure class="b-cover"><img src="${p.cover}" alt="${esc(p.title)}" data-fallback="figure">${p.coverCap ? `<figcaption>${esc(p.coverCap)}</figcaption>` : ""}</figure>` : ""}
        <p class="b-lede">${esc(p.lede)}</p>
        ${body}
        <div class="b-share"><span>Share</span>${share.map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join("")}</div>
        <div class="b-authorbox"><span class="ab-label">About the author</span>${authorCard(p.by).replace('class="author-card"', 'class="author-card wide"').replace("</span></span></a>", `</span><span class="ab-bio">${esc(p.by.bio)}</span></span></a>`)}</div>
        ${related.length ? `<div class="b-related"><h2>More from the blog</h2><div class="post-list small">${related.map(r => card(r)).join("")}</div></div>` : ""}
      </article>`) });
  }

  /* categories */
  for (const c of CATEGORIES) {
    const list = posts.filter(p => p.cat.id === c.id);
    const url = abs(clean(catUrl(c)));
    files[catUrl(c)] = page({ path: catUrl(c), sub: true, noindex: !list.length, title: `${c.name}: Blog | Misalta Global Concepts Ltd.`, desc: `${c.name} on the Misalta blog. ${c.line}`, canonical: url, og: `${SITE}/images/og/blog.jpg`,
      ld: [{ "@type": "CollectionPage", name: `${c.name} posts`, url, description: c.line, isPartOf: { "@type": "Blog", name: "Misalta Blog", url: `${SITE}/blog` } }, crumbs([["Home", ""], ["Blogs", "blog"], [c.name, clean(catUrl(c))]])],
      body: hero([["Home", "index.html"], ["Blogs", "blog.html"], [c.name, ""]], esc(c.name), esc(c.line), '<span class="b-kicker">Category</span>') +
        layout(`<div class="b-head"><h2>${list.length ? `${list.length} post${list.length === 1 ? "" : "s"}` : "No posts yet"}</h2><a class="b-link" href="${c.page}">Visit ${esc(c.name)} →</a></div>
        ${list.length ? `<div class="post-list">${list.map(p => card(p)).join("")}</div>` : `<p class="b-empty">Stories about ${esc(c.name)} will appear here. In the meantime, <a href="${c.page}">explore ${esc(c.name)}</a> or <a href="blog.html">read the latest posts</a>.</p>`}`) });
  }

  /* authors */
  for (const a of AUTHORS) {
    const list = posts.filter(p => p.by.id === a.id);
    const url = abs(clean(authUrl(a)));
    files[authUrl(a)] = page({ path: authUrl(a), sub: true, noindex: !list.length, title: `${a.name}: Author | Misalta Blog`, desc: `${a.name}, ${a.role}. ${a.bio}`, canonical: url, og: abs(a.photo),
      ld: [{ "@type": "ProfilePage", url, mainEntity: person(a) }, crumbs([["Home", ""], ["Blogs", "blog"], [a.name, clean(authUrl(a))]])],
      body: hero([["Home", "index.html"], ["Blogs", "blog.html"], [a.name, ""]], esc(a.name), esc(a.role), `<img class="b-hero-avatar" src="${a.photo}" alt="${esc(a.name)}" width="88" height="88">`) +
        layout(`<div class="author-profile"><p>${esc(a.bio)}</p><div class="a-topics">${a.topics.map(t => `<i>${esc(t)}</i>`).join("")}</div>
        ${a.sameAs.length ? `<p class="a-links">${a.sameAs.map(u => `<a href="${u}" target="_blank" rel="noopener me">${/linkedin/.test(u) ? "LinkedIn" : /twitter|x\.com/.test(u) ? "X" : "Profile"} ↗</a>`).join("")}</p>` : ""}</div>
        <div class="b-head"><h2>Posts by ${esc(a.name)}</h2></div>
        ${list.length ? `<div class="post-list">${list.map(p => card(p)).join("")}</div>` : `<p class="b-empty">No posts yet.</p>`}`) });
  }

  /* RSS + sitemap */
  const pub = p => new Date((p.published || "2026-01").length === 7 ? `${p.published}-01T09:00:00Z` : `${p.published}T09:00:00Z`).toUTCString();
  files["blog/feed.xml"] = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>
<title>Misalta Blog</title><link>${SITE}/blog</link><description>Stories and updates from the Misalta group and its businesses.</description><language>en</language>
<atom:link href="${SITE}/blog/feed.xml" rel="self" type="application/rss+xml"/>
${posts.map(p => `<item><title>${esc(p.title)}</title><link>${abs(clean(postUrl(p)))}</link><guid>${abs(clean(postUrl(p)))}</guid><pubDate>${pub(p)}</pubDate><category>${esc(p.cat.name)}</category><author>${esc(CONFIG.emails.media)} (${esc(p.by.name)})</author><description>${esc(p.lede)}</description></item>`).join("\n")}
</channel></rss>
`;
  const urls = [["blog", posts[0]?.published], ...posts.map(p => [clean(postUrl(p)), p.published]),
    ...CATEGORIES.filter(c => counts[c.id]).map(c => [clean(catUrl(c)), posts.find(p => p.cat.id === c.id)?.published]),
    ...AUTHORS.filter(a => posts.some(p => p.by.id === a.id)).map(a => [clean(authUrl(a)), posts.find(p => p.by.id === a.id)?.published])];
  files["sitemap-blog.xml"] = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([u, d]) => `  <url><loc>${SITE}/${u}</loc>${d ? `<lastmod>${d.length === 7 ? d + "-01" : d}</lastmod>` : ""}</url>`).join("\n")}
</urlset>
`;
  return files;
}

const generatedIn = dir => existsSync(dir) ? readdirSync(dir, { recursive: true }).filter(f => /\.(html|xml)$/.test(f)).map(f => join("blog", f).replace(/\\/g, "/")) : [];
export function staleBlogFiles() {
  const files = buildBlog();
  const out = Object.entries(files).filter(([p, c]) => !existsSync(join(ROOT, p)) || lf(readFileSync(join(ROOT, p), "utf8")) !== c).map(([p]) => p);
  const extra = generatedIn(join(ROOT, "blog")).filter(p => !(p in files));
  return out.concat(extra.map(p => p + " (no longer generated)"));
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const files = buildBlog();
  for (const p of generatedIn(join(ROOT, "blog"))) if (!(p in files)) { unlinkSync(join(ROOT, p)); console.log("removed", p); }
  for (const [p, c] of Object.entries(files)) { mkdirSync(dirname(join(ROOT, p)), { recursive: true }); writeFileSync(join(ROOT, p), c); }
  console.log(`blog: ${Object.keys(files).length} files`);
}

# Architecture

How the Misalta Global Ltd. website is built, deployed and maintained.
Companion docs: [SITEMAP.md](SITEMAP.md) (pages, navigation, user journeys) and [EDITING.md](EDITING.md) (how to change content and publish).

## 1. Stack at a glance

| Layer | Choice | Notes |
|---|---|---|
| Pages | Hand-written static HTML, one file per page | No framework, no build step |
| Styling | One stylesheet, `styles.css`: base rules, then the v2 design system | v2 rules are scoped to `<body class="v2">`, which every page has |
| Behaviour | `script.js`, one shared file loaded on every page | Injects header and footer, runs forms, sliders, team, news |
| Content data | `CONFIG`, `NEWS` objects at the top of `script.js` | Contacts, socials, team and news stories are edited here |
| Forms | `mailto:` links built in the browser | No backend; each form routes to a team inbox (see §5) |
| Hosting | Vercel, static, at `misaltaglobal.com` | `vercel.json`: `cleanUrls` (so `/about` serves `about.html`), no trailing slash, redirects for renamed pages |
| Fonts | Google Fonts | v1: Playfair Display + Poppins · v2: Public Sans + Inter |
| Trade X "What to expect" | `trade-x/what_to_expect.html`, native v2 page | Uses `<base href="/">` so shared paths resolve from the subfolder; `script.js` keeps `#section` links on the page |

## 2. How a page is assembled

```
 page.html                      script.js (runs on load)
 ┌───────────────────────┐      ┌──────────────────────────────────────────┐
 │ <head> meta, fonts,   │      │ 1. CONFIG + NEWS data                    │
 │  styles.css           │      │ 2. inject <header>  (top bar if .v2)     │
 │ <body class="v2">     │ ───▶ │ 3. inject <footer>  (v2 or v1 layout)    │
 │  <section>…</section> │      │    + enquiry modal, WhatsApp button      │
 │  <section>…</section> │      │ 4. wire behaviour by element id:         │
 │ <script script.js>    │      │    slider · counters · reveal · forms ·  │
 └───────────────────────┘      │    team · news ticker · news router ·    │
                                │    video lightbox · newsletter           │
                                └──────────────────────────────────────────┘
```

Pages hold only their own `<section>` blocks. The header, footer, enquiry modal and floating
buttons are shared, so a nav or footer change is made once in `script.js` and appears on every page.
Each feature switches on only when its element exists. For example, the news ticker runs only where
`#news-tick` is present.

## 3. File layout

### Current

```
/                     17 page files (*.html), styles.css, script.js
/                     11 photos (hero_*.jpg, cocoa_*.jpg, …)  ← see constraint below
/images/              logo, CEO photo, team avatars, company video, news photos
/images/clients/      client logos (NNPCL, NCDC)
/trade-x/             what_to_expect.html (native v2 page)
/docs/                these documents
vercel.json, robots.txt, .gitignore
```

**Originals:** full-size source photos live in `images/originals/`. Pages never load them; they are the masters for regenerating the WebP sizes and share images. (The compiled Trade X prototype that once required them at the site root was replaced by a native page on 27 Oct 2026.)

### Target (Phase 3 of the roadmap)

```
/                     page files only + vercel.json, robots.txt, sitemap.xml
/assets/css/          styles.css (v1 + v2 merged)
/assets/js/           script.js, data/config.js, data/news.js
/images/photos/       all photography as WebP in three sizes (done; see §7)
/images/team/, /images/clients/, /images/news/
/trade-x/             unchanged
/docs/
```
The seven Trade X photos keep working through `vercel.json` rewrites from their old root paths.

## 4. Design system

| Token | v1 (current inner pages) | v2 (revamp, homepage) |
|---|---|---|
| Dark surfaces | `--cocoa #0f2e1c` | `--v-dark #0b2a18` (top bar, footer) |
| Primary / buttons | gradient `--choc → --green` | flat `--v-green #1f7a3f` pills |
| Highlight on dark | `--leaf #6fb23f` | `--v-leaf #6fb23f` |
| Accent | none | `--v-sun #f5c518` (icon badges, numbered markers) |
| Alt background | `--sand #edf3ea` | `--v-mist #eef5ec` |
| Headings | Playfair Display (serif) | Public Sans 700, tight tracking |
| Body | Poppins | Inter |

**v2 components** (in the v2 section of `styles.css`): top bar, torn-paper edge (`.torn-b`, `.torn-t`, colour set with
`--edge`), centred photo hero, who-we-are split with arrow list and experience badge (`.who`,
`.arrow-list`, `.exp-badge`), icon stats strip (`.stats-row`), photo banner with play button and
video lightbox (`.banner`, `.play`, `.vmodal`), venture cards with yellow icon badge (`.vcard`,
`.ibadge`), green value panel over a photo (`.value-band`, `.value-panel`), numbered "why" cards
(`.why`), client logo row, and the newsletter footer (`.f-news`, `.f-cols`).

**v2 inner-page components:** page hero with breadcrumb (`.phero`, `.crumbs`; use a `div`, since v1 hides every `<nav>` on mobile), status chips (`.chip.op|dev|soon|plan`), feature cards (`.fgrid`, `.feat`), mission/vision panels (`.mv`), numbered timeline for real sequences (`.steps`), contact strip (`.reach` with `data-mail` / `data-wa`, filled from `CONFIG`), and the CTA band (`.cta-band`, `.cta-box`).

**Data-driven components:** business cards (`#bizGrid` or `data-biz-grid="all|chain|enabler"`) and the showcase hero are built from `BUSINESSES`; the Taraba footprint map (`data-tmap="all|processing|hub"`) is built from `SITES`. Edit the data in `script.js`, not the pages.

**Clean-up (27 Oct 2026):** every page runs on v2. `v2.css` was merged into `styles.css`; 109 legacy selectors that matched nothing on any page (checked in every menu, modal and slide state) were removed, along with the old slider, particle canvas, SVG art, card tilt and v1 footer code in `script.js`. Before/after fingerprints of every element on all 16 pages, at desktop and phone width, showed no layout change. Legacy rules that targeted every `<nav>` now target `#menu` only, so other `<nav>` elements are safe to use.

## 5. Forms and enquiry routing

All forms go through `sendMail()` in `script.js`. When a Web3Forms access key exists for the form's team (or a `default` key), the enquiry is posted to `https://api.web3forms.com/submit` and arrives in that team's inbox; the visitor sees a confirmation with the reply promise. Without a key, or if sending fails, the form falls back to opening the visitor's email app with the message prepared. Keys live in `CONFIG.forms.keys`.

Page forms name their team with `data-route="supply"` (resolved to the inbox from `CONFIG.emails`). The Get Started page routes by choice: Consulting → services@, Agro-Processing → supply@, Trade X → tradex@, the group or any investor/government visitor → invest@, everything else → info@.

| Form | Where | Sends to (`CONFIG.emails`) |
|---|---|---|
| Investment / Partnership enquiry | Modal on every page | `invest@` |
| Agro-Processing & Supply enquiry | Modal on every page | `supply@` |
| Misalta Consulting enquiry | Modal on every page and the nav dropdown | `services@` |
| Contact form | `contact.html` (category picks the inbox) | category route, else `info@` |
| Trade X early access | `trade-x.html#get-started` | `tradex@` |
| Get Started onboarding | `get-started.html` | by business and role (see below) |
| Business page forms | each business page `#get-started` | the business's team |
| Newsletter sign-up | v2 footer | `media@` |

**To switch on direct delivery:** at web3forms.com, enter each team inbox to receive an access key, then paste the keys into `CONFIG.forms.keys`. The privacy notice must mention that form submissions pass through Web3Forms.

## 6. Conventions

- **Renaming a page:** rename the file, update every link (nav and footer live in `script.js`), and add a permanent redirect from the old path in `vercel.json`.
- **Active nav state:** `script.js` maps clean URLs to file names (`/about` → `about.html`), so nav links compare against `.html` file names.
- **Cache busting:** bump `?v=N` on `styles.css` and `script.js` in every page you touch
  when the file changes.
- **Statuses:** ventures are always labelled honestly as *Operating*, *In development*, *Planned* or
  *Coming soon*.
- **No secrets in HTML comments:** comments ship to every visitor in the page source. Keep confidential notes out of the repo.
- **Placeholders:** management must confirm anything marked in `CONFIG` (phone, WhatsApp, address,
  director names) before launch.
- **Photo credits:** Wikimedia Commons sources are credited in an HTML comment on the page that
  uses the photo.
- **Local-only files** (git-ignored): `CONTENT-EDIT-SHEET.xlsx` and `menu-mock.html`.
- **Local preview:** `.claude/launch.json` serves the site at `http://localhost:5500` with
  `python -m http.server`.

## 7. Images

Photos are served from `images/photos/` as WebP in three sizes: `<name>-sm.webp` (480 px), `-md.webp` (960 px, or the original width if smaller) and `-lg.webp` (up to 1600 px, never upscaled).

- Content images use `srcset`, so phones download the small file and desktops the medium one.
- Full-width backgrounds (page heroes, banners) use `-lg`; the homepage showcase uses `-md` on phones.
- `script.js` builds business cards and showcase slides from `BUSINESSES[].img` with `photoImg()` / `photoUrl()`; widths per photo are in `PHOTO_W`.
- Original JPG/PNG masters are in `images/originals/`.

**Adding a photo:** save the original, generate the three sizes (Pillow, WebP quality 72), add its widths to `PHOTO_W` if `script.js` uses it, and reference `images/photos/<name>-md.webp` with a `srcset`.

## 8. Search, sharing and accessibility

- **Canonical URLs** are the clean Vercel paths on `https://misaltaglobal.com` (`/about`, not `/about.html`). Every page has `<link rel="canonical">` and `og:url`.
- **Share images**: `images/og/<page>.jpg`, 1200×630, generated from the page photo with the logo, label and headline. Regenerate when a headline changes.
- **`sitemap.xml`** lists every public page; `robots.txt` points to it. Update `lastmod` when content changes.
- **Structured data**: the homepage carries schema.org `Organization` JSON-LD for Misalta Global Concepts Ltd. with each business as a `subOrganization`.
- **Accessibility rules**: text meets WCAG AA contrast (4.5:1, or 3:1 for large text); every form control has a linked label (`script.js` links `.field` labels automatically); focus outlines are dark green on light sections and sun yellow on dark ones; menu dropdowns open on keyboard focus; decorative duplicate links carry `aria-hidden`.

## 9. Launch hardening

- **404**: `404.html` is served by Vercel for unknown paths. It uses `<base href="/">` so it works at any depth, and is `noindex`.
- **Icons**: `favicon.ico`, `images/icons/*` and `site.webmanifest`, linked from every page.
- **Security headers** (`vercel.json`): Content-Security-Policy allows only this site, Google Fonts and `https://api.web3forms.com`. Adding any third-party script, embed or analytics service needs a CSP update. Never add inline `<script>` blocks or `on…=` attributes: use `script.js` (images fall back with `data-fallback` instead of `onerror`).
- **Responsive backgrounds**: page heroes and banners set `--shade`, `--bg` (1600 px) and `--bg-sm` (960 px) inline; `styles.css` chooses by screen width.
- **Site check**: `node tools/check.mjs` before every publish (see README).


# Editing guide

How to make the everyday changes and switch on the growth features. Every change ends the same way:

```bash
node tools/check.mjs
```

The check must say **✓ No errors** before you commit or publish. It also runs automatically before every `git push` and on GitHub (see "Publishing safely" below).

Most content lives at the top of `script.js` in three blocks: `CONFIG` (contacts, forms, analytics, team), `BUSINESSES` (the eight businesses) and `NEWS` (stories). After changing `script.js` or `styles.css`, bump the `?v=` number on every page so visitors get the new file. The check fails if pages disagree.

---

## Switch on the growth features

### Forms straight to your inbox (Web3Forms)
1. Go to **web3forms.com**, enter `info@misaltaglobal.com` and create an access key. It arrives by email.
2. In `script.js`, paste it into `CONFIG.forms.keys.default`.
3. Optional: repeat for `services@`, `supply@`, `tradex@`, `invest@` and `media@`, pasting each key under its name, so every team gets its own enquiries directly.
4. Run the check, then send a test enquiry from the live site to confirm delivery.

### Analytics (Vercel Web Analytics)
1. In the Vercel dashboard, open the project → **Analytics** → **Enable**.
2. In `script.js`, set `CONFIG.analytics: true`.
3. After publishing, page views appear in the dashboard within minutes. Custom events ("Enquiry opened", "Enquiry sent", "Contact click", "Get started step", "Showcase tab") need a Vercel plan that includes custom events; on the free plan they are simply ignored.

The privacy notice already describes this analytics. If you switch to a different provider, update the notice and the Content-Security-Policy in `vercel.json`.

### Newsletter
The footer sign-up sends each address to `media@` through the same form pipeline, so it works as soon as forms are live. To move to a mailing-list service (Brevo, Mailchimp), the service's endpoint must be added to `connect-src` in the CSP in `vercel.json`.

---

## Content

### Add a news story
Add an object at the **top** of `NEWS` in `script.js` (newest first):

```js
{
  slug: "taraba-site-visit",            // lowercase-with-dashes; becomes news.html#taraba-site-visit
  tag: "Ventures",                      // short category
  date: "November 2026",
  title: "Headline in sentence case",
  lede: "One or two sentences that sum up the story.",
  cover: "images/news-taraba.webp",     // put the photo in images/
  coverCap: "Optional caption",
  body: [
    ["p", "A paragraph."],
    ["img", "images/news-taraba-2.webp", "Caption for this photo."],
    ["p", "Another paragraph."]
  ]
},
```

The homepage news band appears automatically once there are **three or more** stories.

### People (About page)
In `CONFIG.team`: fill in `name` and `photo` for each person. An empty name shows "To be announced". Photos go in `images/` (square, at least 400 px).

### Contact details
`CONFIG.phone`, `CONFIG.whatsapp` (international format, digits only, e.g. `2348012345678`) and `CONFIG.address`. They appear in the top bar, footer, Contact page and WhatsApp buttons. The check warns while they are placeholders.

### Taraba sites (map)
`SITES` in `script.js`: one entry per site with LGA, approximate latitude and longitude, place name and roles (`processing`, `hub`). Every map updates.

### Photos
1. Save the original in `images/originals/`.
2. Create `-sm` (480 px), `-md` (960 px) and `-lg` (1600 px) WebP versions in `images/photos/` (quality about 72).
3. If a business card or showcase slide uses it, add its widths to `PHOTO_W` in `script.js`.
4. Reference `images/photos/<name>-md.webp` with a `srcset` (copy an existing `<img>`).

---

## Licences, certifications and compliance

Everything lives in `CREDENTIALS` in `script.js` (group first, then one entry per business). It feeds the register on `trust.html` and the "Licences & compliance" section on every business page.

- Each item is `[name, issuer, why it matters, status, reference]`.
- Status: `"held"` (certificate on file), `"progress"` (application under way), `"req"` (required, not yet confirmed), `"target"` (voluntary standard).
- When a certificate arrives: change `"req"` to `"held"` and add its number as the reference (for example the CAC RC number). Update `CRED_REVIEWED`.
- Only mark an item "held" when the certificate is on file. The site check warns while items are still "Required" or held without a reference.

## Misalta AI (the website assistant)

- **Switch it on:** in Vercel, Project → Settings → Environment Variables, add `ANTHROPIC_API_KEY` (from console.anthropic.com), then redeploy. Without it the assistant runs in quick-answer mode (FAQ answers and contact options).
- **Model:** `claude-opus-5-5` by default. Set `MISALTA_AI_MODEL` (for example `claude-haiku-5-5`) to change it without touching code. Set a monthly spend limit in the Anthropic console.
- **Knowledge:** the assistant answers from the site itself. After changing page text or the data in `script.js`, run `node tools/build-kb.mjs` (the site check fails until you do).
- **Enquiries:** it prepares a card the visitor confirms; delivery uses the same Web3Forms or email-app route as every form on the site.

## FAQ and Training Academy

- `faq.html` and `training.html` (plus the PDF brochure) are generated from lists of questions and courses. Edit the lists and regenerate, rather than editing the HTML by hand.

## A business gets its own website

1. In `BUSINESSES` (`script.js`), set the business's `domain`, e.g. `domain: "misaltafarms.com"`. Every card, showcase slide and "Learn more" link switches to **Visit site ↗**, and the business page shows a link to the new site.
2. Optional, once the new site fully replaces the page here: send old links there by adding a redirect to `vercel.json`:

```json
{ "source": "/farms", "destination": "https://misaltafarms.com", "permanent": true }
```

3. Run the check and publish.

---

## Publishing safely

1. `node tools/check.mjs` must say **✓ No errors**.
2. Commit on a branch, not on `main`.
3. `git push` runs the check again automatically (hook in `.githooks/`) and refuses to push if anything is broken.
4. On GitHub, the **Site check** action runs on every push and pull request. Merge to `main` only when it is green.
5. Vercel publishes `main` to misaltaglobal.com. Check the live site once it has deployed.

One-time setup per computer, to switch on the push hook:

```bash
git config core.hooksPath .githooks
```

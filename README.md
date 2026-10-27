# Misalta Global Ltd. website

Static site for Misalta Global Concepts Ltd., deployed on Vercel.

- [Architecture](docs/ARCHITECTURE.md): how pages, styles, scripts, data and forms fit together
- [Site map](docs/SITEMAP.md): page tree, navigation, homepage sections, audience journeys
- [Editing guide](docs/EDITING.md): news, people, photos, contact details, switching on forms and analytics, business domains, publishing safely

**Edit content:** contacts, socials, team and news live in the `CONFIG` and `NEWS` objects at the top of `script.js`.

**Before every publish:**

```bash
node tools/check.mjs
```

It checks every page's links, anchors, images, share images, canonical links, headings, labels, sitemap and security headers. It exits with an error if anything is broken, and lists placeholder content as warnings.

**Preview locally:**

```bash
python -m http.server 5500
```

Then open http://localhost:5500.

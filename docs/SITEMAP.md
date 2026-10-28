# Site map and information architecture

## 1. Page tree

```
Home  /                                   index.html          [v2 ✓]
├── About Us  /about                      about.html          leadership, video, clients
├── News  /news                           news.html           one page, story chosen by #slug
├── What We Offer  /consulting            consulting.html     Misalta Consulting (6 services)
├── Our Business  /businesses           businesses.html     overview of all ventures
│   ├── In the field
│   │   ├── Misalta Farms  /farms                 farms.html            In development
│   │   ├── Agro-Processing  /agro-processing     agro-processing.html  In development
│   │   └── Agro Hubs  /agro-hubs                 agro-hubs.html        Planned
│   ├── The road ahead
│   │   ├── Misalta Logistics  /logistics         logistics.html        Planned
│   │   ├── Misalta Energy  /energy               energy.html           Planned
│   │   └── Misalta Construction  /construction   construction.html     Planned  (/blocks redirects here)
│   └── Coming soon
│       └── Misalta Trade X  /trade-x             trade-x.html          Coming soon
│           └── What to expect  /trade-x/what_to_expect   (compiled prototype)
├── Invest & Partner  /investment         investment.html
├── Get Started  /get-started            get-started.html    3-step onboarding, preset by #business, routed by team
├── Contact  /contact                     contact.html        contact form
├── Trust & Compliance /trust            trust.html          Company menu, footer, homepage proof strip
├── FAQ               /faq                faq.html            Company menu, footer, Misalta AI
├── Training Academy  /training           training.html       Consulting menu and page, footer (PDF brochure in /downloads)
└── Privacy Notice  /privacy              privacy.html        footer only
```

18 public pages. The `menu-mock.html` design mock is local-only and not deployed.

## 2. Navigation map

| Location | Items |
|---|---|
| Top bar (v2) | email · phone · address · social links |
| Main nav (desktop, 1100px and wider) | Logo · Home · **Company ▾** · **Our Business ▾** · Invest & Partner · Contact · [Get started] |
| Company ▾ (mega panel) | About Misalta · Our people · Our journey · News & updates · Contact, plus a card for the latest NEWS story |
| Consulting ▾ (mega panel) | The six services with icons and one-line descriptions · All consulting services · card: Book a service (opens the enquiry modal) |
| Our Business ▾ (mega panel) | The value chain (Stage 1 · Grow … Stage 5 · Sell) and Enablers (Enabler · Know-how / Power / Build), each with photo and status chip · See all eight businesses · card: Get started / Invest |
| Phone and tablet (below 1100px) | Logo · [Get started] · menu button, which opens a slide-in drawer: Home, the three sections as accordions (current one open), Invest & Partner, Contact, then Get started and Call / WhatsApp / Email |
| Footer (white) | Brand, intro and social icons · Newsletter card · Company · The value chain and Enablers (status dot per business) · Get in touch (email, phone, WhatsApp, address) · Reach the right team (invest@, supply@, services@, media@) · © line, Privacy notice, Photo credits, Contact, Back to top |
| Always visible | Enquiry button (opens the modal) · WhatsApp button |

## 3. Homepage section map (v2)

| # | Section | Purpose | Links to |
|---|---|---|---|
| 1 | Hero slider (4 slides) | Who we are at a glance; one slide per pillar | businesses, investment, consulting, about, agro-processing, agro-hubs, trade-x |
| 2 | Who we are | Positioning + 3 proof points + 30+ years badge | consulting, agro-processing, trade-x, about |
| 3 | Stats strip | 30+ yrs · 8 ventures · 6 services · Trade X | none |
| 4 | Video banner | Company film in a lightbox | about |
| 5 | What we offer | 8 venture cards with status | every venture page |
| 6 | Our value | Mission statement on a photo | investment |
| 7 | Why choose us | 4 pillars as numbered cards | consulting, agro-processing, trade-x, agro-hubs |
| 8 | Newsroom | Latest 5 stories, scrolling ticker | news#slug |
| 9 | Clients | NNPCL, NCDC logos | none |
| 10 | Footer | Newsletter + full link map | all |

## 4. Audiences and journeys

| Audience | Arrives looking for | Path | Converts at |
|---|---|---|---|
| **Investor / partner** | Credibility, pipeline, contact | Home → Our value → Invest & Partner → About (leadership) | Investment enquiry → `invest@` |
| **Corporate client** | Training, FM, procurement | Home → What we offer → Consulting | Consulting enquiry → `services@` |
| **Commodity buyer / supplier** | Cocoa products, volumes | Home → Agro-Processing | Supply enquiry → `supply@` |
| **Farmer / trader** | Market access | Home hero slide 4 → Trade X → What to expect | Early access form → `tradex@` |
| **Media / general** | News, contacts | News, Contact | Contact form → `info@` / `media@` |

Every journey ends at a form that routes to a named inbox (see ARCHITECTURE §5). Each page should
offer its audience's conversion action in its first screen and again at the end.

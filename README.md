# Ottawa Garage Tech — Website (MVP)

Standalone static site for **Ottawa Garage Tech** — separate from GDS and OGDR repos, design, and contact data.

## Stack

- Static HTML + CSS (`css/tokens.css`, `css/style.css`)
- Optional `js/nav.js` for mobile menu
- Vercel for hosting (`vercel.json` clean URL: `/contact` → `contact.html`)
- Formspree for contact form (placeholder ID — replace before launch)

## Design system (third brand)

| Token | Value |
|-------|--------|
| Primary | Forest green `#1b5e4b` |
| Accent | Warm brass `#b8953a` |
| Fonts | **Outfit** (UI) + **Lora** (body) |
| Class prefix | `ogt-` |
| Buttons | 8px radius (not GDS pills) |
| Layout | Light editorial split hero |

**Not used:** GDS `#0066cc` / `#ff6600` / Montserrat; OGDR `#0a1628` / `#f97316` / Inter / dark hero.

## Domain

**Production URL:** `https://ottawagaragetech.ca` (canonical, sitemap, Open Graph, JSON-LD). `www` redirects to apex via `vercel.json`.

## Replace before launch

Search the repo for these placeholders and update everywhere (HTML, JSON-LD):

| Placeholder | Replace with |
|-------------|----------------|
| Phone / email | **(613) 900-6005** · `ottawagaragetech@gmail.com` (live on site) |
| `REPLACE_FB_PAGE_ID` | Facebook page path or full URL |
| `https://formspree.io/f/REPLACE_ME` | New Formspree form endpoint |
| `assets/og-preview.png` | 1200×630 branded social image |

**Never use:** GDS `343-777-8893` / `info@gdsottawa.ca`; OGDR `613-617-4238`.

## Local preview

```bash
npx --yes serve .
```

Then open `http://localhost:3000`. Clean `/contact` works with `serve` or Vercel; opening `index.html` directly uses `contact.html` links if you change nav to relative paths.

## Deployment checklist

- [ ] New GitHub repo (this folder only)
- [ ] `git init` → push to GitHub
- [ ] New Vercel project → import repo (root = this folder)
- [ ] Add **ottawagaragetech.ca** + **www** in Vercel → Domains (DNS at registrar per Vercel instructions)
- [ ] Formspree: create form → paste action URL in `contact.html`
- [ ] Optional Formspree redirect: `?_next=https://ottawagaragetech.ca/contact?sent=1`
- [ ] Facebook Business Page → Website URL
- [ ] Google Search Console after DNS is live
- [ ] Replace `assets/og-preview.png` with final 1200×630 artwork

## Formspree

Form fields: name*, email*, phone, service, message*; hidden `_subject`: `Ottawa Garage Tech website lead`.

Do **not** use GDS endpoint `https://formspree.io/f/xreyppqz`.

## Pages

- **Home** — hero, linked services grid, trust strip
- **Services** — overview + 7 detail pages (`/services/[slug]`)
- **Contact** — call/text, Formspree form with service dropdown
- **About**, **FAQ**, **Areas**, **Gallery** (placeholders OK for photos)
- **Privacy**, **Terms**

Shared header/footer via `js/site-config.js` + `js/layout.js`.

## Folder structure

```
├── index.html
├── contact.html
├── css/tokens.css
├── css/style.css
├── js/nav.js
├── assets/logo.svg
├── assets/og-preview.png
├── vercel.json
├── robots.txt
├── sitemap.xml
└── README.md
```

# Meridian Systems LLC — Landing Page

A responsive one-page marketing site for Meridian Systems LLC: hero, services, "what we fix," process, a sample report, why-us, who-we-serve, FAQ, and a contact/scoping-call section. No build step — plain HTML/CSS/JS.

## Structure

- `index.html` — page content, SEO meta tags, and schema.org `ProfessionalService` structured data
- `css/styles.css` — all styling (colors/fonts defined as CSS variables at the top)
- `js/main.js` — mobile nav, scroll reveal, sticky header, scoping-request form
- `assets/logo.svg`, `assets/logo-white.svg`, `assets/logo-mark.svg` — logo (ink-on-paper, paper-on-ink, and icon-only/favicon versions)
- `assets/og-image.png` — social share preview image
- `assets/Meridian_Sample_Findings_Report.pdf` — sample scoping report linked from the "What you get" section
- `CNAME` — custom domain (`meridiandatacom.com`) for GitHub Pages
- `robots.txt`, `sitemap.xml` — basic SEO plumbing

`assets/topo-hero.svg` and `assets/compass-rose.svg` are leftover illustration files from an earlier design pass and are no longer referenced by `index.html`; safe to delete if you don't plan to reuse them.

## Design

Charcoal and brass palette (ink `#1B1F22`, background `#FBFBF8`/`#F1F2EC`, accent `#9C7A2E`), paired with Plus Jakarta Sans (headings) over Inter (body). Services are a 6-card grid, "what we fix" is a 6-item problem grid, and the FAQ uses native `<details>` elements.

## Business facts baked into the page

These are real and should only change if the business facts change:

- **Services** (hero, services grid, service dropdown): System Integration, Data Migration, Reporting & Dashboards, QuickBooks Automation, Document Automation, Azure & Microsoft 365 Setup
- **Audience**: Accounting & CFO firms, ERP & consulting firms, and manufacturers
- **Phone**: `(947) 622-4250` &middot; **Email**: `asilaghi@meridiandatacom.com`
- **Hours**: Mon–Fri, 1:00pm–5:00pm Eastern
- **Service area**: Metro Detroit & Oakland County, MI (Rochester Hills, Auburn Hills, Troy, Southfield, Royal Oak, Novi, Pontiac, Sterling Heights, Detroit; Oakland, Macomb & Wayne Counties)
- **Domain**: `meridiandatacom.com` (see `CNAME`, canonical/OG tags, and the schema.org block in `index.html`)

The "Why Meridian" section claims professional-level AWS and Microsoft certifications — confirm these are current before relying on this copy, since false certification claims are a real liability.

The scoping-request form opens the visitor's email client with a pre-filled message (no backend required). To collect submissions server-side instead, swap the `submit` handler in `js/main.js` for a form service (e.g. Formspree) or your own backend endpoint.

## Running locally

Any static server works, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

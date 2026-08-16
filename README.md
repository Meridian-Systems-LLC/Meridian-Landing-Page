# Meridian Systems — Landing Page

A simple, responsive one-page site for Meridian Systems: hero, offerings, process, why-us, and a contact/estimate section. No build step — plain HTML/CSS/JS.

## Structure

- `index.html` — page content
- `css/styles.css` — all styling (colors/fonts defined as CSS variables at the top)
- `js/main.js` — mobile nav, scroll reveal, sticky header, estimate form
- `assets/logo.svg`, `assets/logo-white.svg`, `assets/logo-mark.svg` — logo (ink-on-paper, paper-on-ink, and icon-only/favicon versions), built around a compass-star mark
- `assets/topo-hero.svg`, `assets/compass-rose.svg` — the topographic-contour hero illustration and compass-rose graphic used in the Why Us section

## Design

Warm, editorial palette (ink `#1C1917`, paper `#F6F1E7`, rust `#B8461F`) instead of a generic blue/teal SaaS look, paired with a serif display face (Fraunces) over a plain sans body (IBM Plex Sans). The offerings section uses a numbered ledger list instead of icon cards, and the process/why-us sections lean on a compass and topographic-contour motif tying back to "Meridian." All colors and fonts are CSS variables at the top of `css/styles.css` if you want to retheme.

## Before you launch

A few things are placeholders — search-and-replace before going live:

- **Phone number** (`(555) 010-2020`) in `index.html`, contact section
- **Service area** (`Your City & Surrounding Region`) in `index.html`, contact section
- **Email** is set to `Austinsilaghi@outlook.com` — update if that's not the right inbox
- **Business hours**, offering copy, and process steps can be edited freely to match your actual services

The estimate form currently opens the visitor's email client with a pre-filled message (no backend required). To collect submissions server-side instead, swap the `submit` handler in `js/main.js` for a form service (e.g. Formspree) or your own backend endpoint.

## Running locally

Any static server works, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

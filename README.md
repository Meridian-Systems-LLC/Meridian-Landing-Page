# Meridian Systems — Landing Page

A simple, responsive one-page site for Meridian Systems: hero, offerings, process, why-us, and a contact/estimate section. No build step — plain HTML/CSS/JS.

## Structure

- `index.html` — page content
- `css/styles.css` — all styling (colors/fonts defined as CSS variables at the top)
- `js/main.js` — mobile nav, scroll reveal, sticky header, estimate form
- `assets/logo.svg`, `assets/logo-white.svg`, `assets/logo-mark.svg` — logo (ink-on-paper, paper-on-ink, and icon-only/favicon versions), built around a compass-star mark
- `assets/topo-hero.svg`, `assets/compass-rose.svg` — the topographic-contour hero illustration and compass-rose graphic used in the Why Us section

## Design

Charcoal, cool paper, and brass palette (ink `#1B1F22`, paper `#F1F2EC`, brass `#9C7A2E`), paired with a serif display face (Fraunces) over a plain sans body (IBM Plex Sans). The offerings section uses a numbered ledger list instead of icon cards. The hero and Why Us illustrations are technical schematics (patch panel, rack elevation, network topology) reflecting structured cabling / data & telecom infrastructure work. All colors and fonts are CSS variables at the top of `css/styles.css` if you want to retheme.

## Launch status
Real contact info is filled in: phone `(947) 622-4250`, service area
(Metro Detroit, Ann Arbor, Saline, Rochester Hills, Troy & surrounding),
email `asilaghi@meridiandatacom.com`, hours (every day, 8am-8pm, matching
the Google Business Profile as of 2026-09-01). Offering copy and process
steps are still the original scaffold text — edit freely in `index.html`
to match your actual services.

The estimate form currently opens the visitor's email client with a pre-filled message (no backend required). To collect submissions server-side instead, swap the `submit` handler in `js/main.js` for a form service (e.g. Formspree) or your own backend endpoint.

## Running locally

Any static server works, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

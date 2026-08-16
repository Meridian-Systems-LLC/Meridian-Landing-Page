# Meridian Systems — Landing Page

A simple, responsive one-page site for Meridian Systems: hero, offerings, process, why-us, and a contact/estimate section. No build step — plain HTML/CSS/JS.

## Structure

- `index.html` — page content
- `css/styles.css` — all styling (colors/fonts defined as CSS variables at the top)
- `js/main.js` — mobile nav, scroll reveal, sticky header, estimate form
- `assets/logo.svg`, `assets/logo-white.svg`, `assets/logo-mark.svg` — logo (color, white-on-dark, and icon-only/favicon versions)

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

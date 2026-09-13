# Salman Malik Unisex Salon — website

Production multi-page React site for Salman Malik Unisex Salon & Academy
(Andheri West, Mumbai). Built with Vite, React 19, React Router and
Tailwind CSS v4.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build (outputs to dist/)
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

Node 20+ is expected.

## Project structure

```
src/
├── assets/images/{services,gallery,academy,branding}/  # real photos go here
├── components/
│   ├── layout/      Header, Footer, MobileMenu, MobileActionBar,
│   │                PageTransition, ScrollToTop, Layout
│   ├── primitives/  Section, Container, Stack
│   ├── common/      Button, SectionHeading, ImageWithFallback, ServiceCard,
│   │                GalleryGrid, Lightbox, BookingCTA, Field, Seo
│   └── sections/    Hero, FeaturedServices, AcademyPreview, LocationSection, ...
├── data/            salon.js, services.js, gallery.js, academy.js, nav.js, seo.js
├── hooks/           useScrollPosition, useLockBodyScroll, useReducedMotion, useMediaQuery
├── lib/             cn.js, validation.js, booking.js, format.js
└── pages/           one file per route
```

## Where to change content

Almost everything is data, not markup — change the data file, not the component.

| What                                                  | File                               |
| ----------------------------------------------------- | ---------------------------------- |
| Business name, phone, address, socials, WhatsApp flag | `src/data/salon.js`                |
| Services (categories + individual items)              | `src/data/services.js`             |
| Gallery photos and filters                            | `src/data/gallery.js`              |
| Academy copy, learning points, course placeholders    | `src/data/academy.js`              |
| Nav links                                             | `src/data/nav.js`                  |
| Per-page SEO titles/descriptions                      | `src/data/seo.js`                  |
| Homepage headline, hero copy                          | `src/components/sections/Hero.jsx` |
| About page story                                      | `src/pages/About.jsx`              |

See `CONTENT-TODO.md` for every field the client still needs to supply (photos, hours, WhatsApp number, course fees, etc.) and exactly where each one lives.

## Swapping in real photos

Most image slots currently hold **temporary, generic stock photos** (sourced from Wikimedia Commons — see `ATTRIBUTIONS.md`), not real photos of this salon. A few slots (academy/certification) have no photo at all and fall back to a designed icon placeholder (`ImageWithFallback` renders a category icon + "Photo coming soon" whenever `image.src` is `null`, at the correct aspect ratio — so nothing ever looks broken). See `CONTENT-TODO.md` for exactly which slots are stock vs. empty.

To swap in a real photo:

1. Put the file in `src/assets/images/<services|gallery|academy|branding>/...` (WebP preferred, sized to its largest render).
2. Reference it from the relevant data file: `new URL("../assets/images/services/hair/cut-01.webp", import.meta.url).href` as the `src`, plus the correct `width`/`height`/`alt`. This replaces whatever was there before (stock photo or placeholder) — same pattern either way.
3. Once every stock photo is replaced with a real one, delete the stock `.webp` files from `src/assets/images/` and remove `ATTRIBUTIONS.md` (it only exists to satisfy the stock photos' license requirements).

`npm run generate:assets` regenerates the favicon set and Open Graph image from the SVG sources in `public/` (`favicon.svg`, `mask-icon.svg`, `og-image.svg`) if the branding ever changes.

## Enabling WhatsApp

WhatsApp links are fully built (`whatsappHref()` in `src/lib/format.js`) but hidden everywhere until a real number is confirmed. In `src/data/salon.js`:

```js
whatsapp: { enabled: true, number: "+91XXXXXXXXXX" },
```

Flipping that one flag lights up WhatsApp across the footer and anywhere else it's referenced.

## Enabling real booking submissions

There is no backend. `src/lib/booking.js` exports one function, `submitBooking(payload)`, which every form (`/book`, `/contact`) calls. It currently always returns a "ready to send — call to confirm" result — never a fake confirmation.

When a real backend, WhatsApp Business API, or email service exists, implement the actual call inside `submitBooking()` — no page or form needs to change.

## Deployment (Vercel)

`vercel.json` at the repo root already configures the SPA rewrite so deep links (e.g. `/services/hair`) don't 404 on refresh:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

1. Push the repo to GitHub/GitLab/Bitbucket (or use the Vercel CLI directly from this folder).
2. Import the project in Vercel — framework preset "Vite", build command `npm run build`, output directory `dist`.
3. Once a real domain is assigned, update `SITE_URL` in `src/data/seo.js` and the URLs in `public/robots.txt` and `public/sitemap.xml`.

## Notes

- Structured data (`LocalBusiness` JSON-LD in `src/App.jsx`) only ever includes verified fields from `src/data/salon.js` — no invented `priceRange`, `openingHours`, or `aggregateRating`.
- Reduced motion is respected in both CSS (`@media (prefers-reduced-motion: reduce)` in `src/index.css`) and JS (`useReducedMotion` hook, used by `PageTransition`).

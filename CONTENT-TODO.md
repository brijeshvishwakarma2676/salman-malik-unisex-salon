# Content to-do

Everything below is either an honest placeholder in the code or a documented gap. Nothing on the live site states a price, hour, rating, or credential that isn't in this list as "needs a real value."

## Photography (all of it — currently generic stock, not real photos of this salon)

An attempt was made to source real photos from the salon's own public Instagram (`salmanmaliksalon_official`) and Facebook page, but neither was reachable without an authenticated browser session in this environment.

As an interim step (explicitly requested), **most image slots now hold generic, properly-licensed stock photos from Wikimedia Commons** — real photographs, but not of this salon, this academy, or its actual staff/clients/students. Full source/license/author for every one is in `ATTRIBUTIONS.md`; keep that file if these images stay live (CC BY / CC BY-SA legally require the credit to remain attached). **Every single one of these should be replaced with a real photo of this salon before the site is considered finished.**

A second sourcing pass filled the tattoo, piercing, and salon-interior slots. Only the academy/certification slots remain on the designed icon placeholder (a flat panel with a category icon and "Photo coming soon") — after extensive searching, nothing on Wikimedia Commons cleared both the licensing and relevance/quality bar for these:

| Location                                                                                                        | Data file                                                       | What's needed                                                 |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------- |
| Academy hero photo                                                                                              | `src/pages/Academy.jsx` (inline image object)                   | A classroom-in-session shot                                   |
| Certification Day photo — **the one real proof point, worth prioritising above every other image on this list** | `src/data/academy.js` → `certificationDay.image`                | A real photo from the First Batch of 2026 certification event |
| Gallery: both academy shots, certificates                                                                       | `src/data/gallery.js` → `galleryImages[]` (`g07`, `g08`, `g13`) | Real photos of the academy/certification day                  |

These four are the last ones worth deliberately leaving un-stocked rather than forcing a generic graduation photo into them — a beauty academy's own certification moment is exactly the kind of specific, checkable claim this brief is built around (§3.3), so it deserves a real photo more than a stand-in.

Everything else in `src/data/services.js` and `src/data/gallery.js`, plus the homepage hero, currently has a stock photo wired in via `new URL("../assets/images/...", import.meta.url).href` — swap the file (same path) or repoint the `src` line to replace it with a real one; `width`/`height`/`alt` should be updated to match.

Also needed once real photos exist: an actual Open Graph share image built from a real photo (currently `public/og-image.png` is a designed typographic card, which is honest but could be stronger with a real hero shot behind it).

## Facts not yet confirmed

None of these appear anywhere on the site as a stated fact. Provide the real value and the corresponding `null`/`false` in `src/data/salon.js` can be filled in.

| Field                                                      | Where it lives                                                            | Current behaviour                                                                                                                                                          |
| ---------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WhatsApp number                                            | `salon.whatsapp.number` / `salon.whatsapp.enabled`                        | WhatsApp links are fully built (`src/lib/format.js` → `whatsappHref`) but hidden everywhere until `enabled: true` and a real number are set                                |
| Opening hours                                              | `salon.hours`                                                             | Renders as "Call to confirm timings" wherever hours would appear (footer, contact, location section)                                                                       |
| Full address / pincode                                     | `salon.address.pincode`, `salon.address.complete`                         | The map and directions link use a search query (`salon.mapsQuery`), not a fabricated exact pin                                                                             |
| Prices, service menus                                      | —                                                                         | Never shown; every services page carries "Service menus vary; call to confirm availability"                                                                                |
| Course fees, duration, batch dates, eligibility            | `src/data/academy.js` → `coursePlaceholders`                              | Shown only as named course categories with "Course structure, duration and fees: call to confirm"                                                                          |
| Certificate issuing body, trainer names/credentials        | —                                                                         | Not referenced anywhere                                                                                                                                                    |
| Founder biography, years in operation, staff/client counts | —                                                                         | Not referenced anywhere; About page describes the salon and academy without inventing history                                                                              |
| Reviews, ratings, awards                                   | —                                                                         | Never shown, never fabricated                                                                                                                                              |
| Booking backend                                            | `src/lib/booking.js`                                                      | `submitBooking()` currently just returns a "ready to send — call to confirm" result. When a real backend or WhatsApp number exists, wire it in here — no UI changes needed |
| Live domain                                                | `src/data/seo.js` → `SITE_URL`, `public/robots.txt`, `public/sitemap.xml` | Currently set to `https://salmanmaliksalon.com` as a placeholder domain — update to the real deployed domain                                                               |

## Ready-to-activate, currently off (built but showing nothing)

Same pattern as WhatsApp: the plumbing exists, but each renders nothing until real data is supplied — never a placeholder number or invented content.

| Feature        | Where it lives                                       | To activate                                                                                                                                                                                                                            |
| -------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rating         | `src/data/salon.js` → `rating`                       | Set `enabled: true` and fill in `value`, `count`, `source` (e.g. `"Google"`), and `url` — only once there's a real, checkable rating. Shows as a small badge in the footer, and as a full section (`RatingSection`) on the About page. |
| Packages       | `src/data/packages.js` → `packages` (currently `[]`) | Add real package objects (`name`, `summary`, `includes`, and a confirmed `price` string). A menu-style "Packages" section appears automatically on `/services` the moment the array isn't empty.                                       |
| Special offers | `src/data/offers.js` → `offers` (currently `[]`)     | Add a real, current offer (`headline`, optional `detail`/`validUntil`). A dedicated "Current offers" section appears automatically on the homepage (after the hero) the moment the array isn't empty.                                  |

## Everything else

Copy, structure, navigation, forms, accessibility and performance work is complete and not blocked on the client. See `README.md` for how to update copy, swap images once supplied, and enable WhatsApp/booking.

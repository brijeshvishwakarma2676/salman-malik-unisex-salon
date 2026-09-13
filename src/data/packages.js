/**
 * @typedef {Object} Package
 * @property {string} slug
 * @property {string} name
 * @property {'hair'|'makeup'|'extensions'|'tattoo'} category
 * @property {string} summary
 * @property {string[]} [includes]
 * @property {string} [price] - only ever a real, confirmed price string (e.g. "₹2,500") — never a guess
 */

// TEMP DEMO DATA — DO NOT SHIP. Added only so the PackagesSection visual
// treatment can be previewed; these are not real packages or prices.
// Revert to `export const packages = [];` before this site goes live, or
// replace with real, client-confirmed packages.
/** @type {Package[]} */
export const packages = [
  {
    slug: "signature-cut-colour",
    name: "Signature Cut + Colour (sample)",
    category: "hair",
    summary: "A full cut and colour service, bundled at one price.",
    includes: ["Consultation", "Cut", "Full colour", "Blow-dry finish"],
    price: "₹3,500 (sample)",
  },
  {
    slug: "bridal-glow",
    name: "Bridal Glow (sample)",
    category: "makeup",
    summary: "Hair, make-up and skin prep bundled for a wedding day.",
    includes: ["Trial session", "Day-of hair styling", "HD make-up"],
    price: "₹15,000 (sample)",
  },
  {
    slug: "extensions-fitting",
    name: "Extensions Fitting (sample)",
    category: "extensions",
    summary: "Hair extension fitting and blend-in, finished in one visit.",
    includes: ["Consultation", "Fitting", "Blend & finish"],
    price: "₹6,000 (sample)",
  },
  {
    slug: "ink-and-piercing",
    name: "Ink & Piercing Starter (sample)",
    category: "tattoo",
    summary: "A small tattoo and a piercing, done in the same sitting.",
    includes: ["Consultation", "Piercing", "Small tattoo session"],
    price: "₹4,000 (sample)",
  },
  {
    slug: "academy-starter",
    name: "Academy Starter Batch (sample)",
    category: "hair",
    summary: "An introductory training package for new students.",
    includes: ["4-week course", "Kit provided", "Certification on completion"],
    price: "₹18,000 (sample)",
  },
];

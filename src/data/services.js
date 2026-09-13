/**
 * @typedef {Object} ImageRef
 * @property {string|null} src   - null until a real photo is supplied; renders a designed placeholder
 * @property {string} alt
 * @property {number} width
 * @property {number} height
 * @property {'landscape'|'portrait'|'square'} aspect
 * @property {string} [icon]     - placeholder icon hint (see PlaceholderIcons.jsx)
 */

/**
 * @typedef {Object} ServiceCategory
 * @property {string} slug
 * @property {string} name
 * @property {string} path
 * @property {string} summary
 * @property {boolean} verified   - true: this category is on the salon's own signage/cover
 * @property {ImageRef} image
 */

/**
 * @typedef {Object} Service
 * @property {string} slug
 * @property {string} name
 * @property {'hair'|'makeup'|'extensions'|'tattoo'} category
 * @property {string} summary        - one line, <=90 chars
 * @property {string} [description]  - 2-3 sentences
 * @property {string[]} [includes]   - proposed, not confirmed
 * @property {ImageRef} image
 * @property {boolean} verified      - false = a category, not a confirmed offering
 */

/** @type {ServiceCategory[]} */
export const serviceCategories = [
  {
    slug: "hair",
    name: "Hair",
    path: "/services/hair",
    summary: "Cuts, styling, colour and treatments, done chair-side by hand.",
    verified: true,
    image: {
      src: "/images/real/mht/image.png",
      alt: "A hair styling session in progress by Salman Malik",
      width: 1200,
      height: 900,
      aspect: "landscape",
      icon: "hair",
    },
  },
  {
    slug: "makeup",
    name: "Make-up",
    path: "/services/makeup",
    summary: "Bridal, party and occasion make-up, built around your event.",
    verified: true,
    image: {
      src: "/images/real/clients/image copy 4.png",
      alt: "Bridal and occasion make-up client",
      width: 960,
      height: 1200,
      aspect: "portrait",
      icon: "makeup",
    },
  },
  {
    slug: "extensions",
    name: "Extensions",
    path: "/services/extensions",
    summary: "Hair and nail extensions, fitted and finished in-house.",
    verified: true,
    image: {
      src: "/images/real/color/image.png",
      alt: "Hair extensions and length transformation",
      width: 1000,
      height: 1000,
      aspect: "square",
      icon: "extensions",
    },
  },
  {
    slug: "tattoo-piercing",
    name: "Tattoo & Piercing",
    path: "/services/tattoo-piercing",
    summary: "Tattoo and piercing work, with consultation and aftercare.",
    verified: true,
    image: {
      src: "/images/real/selfie/image.png",
      alt: "Tattoo & piercing consultation by Salman Malik",
      width: 1200,
      height: 900,
      aspect: "landscape",
      icon: "tattoo",
    },
  },
];

/** @type {Service[]} */
export const services = [
  {
    slug: "haircuts-styling",
    name: "Cuts & styling",
    category: "hair",
    summary: "A cut shaped to your face and how you actually wear your hair.",
    description:
      "Wash, cut and blow-dry, for men and women. The stylist works with your hair's natural fall rather than fighting it, so the style holds after you've left the chair.",
    includes: ["Consultation", "Wash & cut", "Blow-dry finish"],
    image: {
      src: "/images/real/clients/image copy 2.png",
      alt: "A haircut in progress",
      width: 1200,
      height: 900,
      aspect: "landscape",
      icon: "hair",
    },
    verified: false,
  },
  {
    slug: "colour",
    name: "Colour",
    category: "hair",
    summary: "Full colour, root touch-ups and highlights.",
    description:
      "From a full colour change to a root touch-up between appointments, colour work is matched to your skin tone and upkeep routine before anything goes on.",
    includes: ["Colour consultation", "Application", "Gloss finish"],
    image: {
      src: "/images/real/color/image copy 2.png",
      alt: "Hair colour application and dimensional balayage",
      width: 1000,
      height: 1000,
      aspect: "square",
      icon: "hair",
    },
    verified: false,
  },
  {
    slug: "treatments",
    name: "Treatments",
    category: "hair",
    summary: "Keratin, smoothing and repair treatments for damaged hair.",
    description:
      "Treatments aimed at hair that's had a hard year — heat damage, colour build-up, or just needs manageability back. Ask what your hair actually needs; not every head needs every treatment.",
    includes: ["Diagnosis", "Treatment application", "Aftercare guidance"],
    image: {
      src: "/images/real/color/image copy.png",
      alt: "Hair smoothing & keratin treatment result",
      width: 960,
      height: 1200,
      aspect: "portrait",
      icon: "hair",
    },
    verified: false,
  },
  {
    slug: "bridal-makeup",
    name: "Bridal make-up",
    category: "makeup",
    summary: "Make-up built to last a full wedding day, on camera and off.",
    description:
      "A trial first, so the day-of look isn't a surprise. Built to hold through hours under lights, not just for the first photo.",
    includes: ["Trial session", "Day-of application", "Touch-up kit guidance"],
    image: {
      src: "/images/real/clients/image copy 4.png",
      alt: "Bridal make-up and hair styling application",
      width: 960,
      height: 1200,
      aspect: "portrait",
      icon: "makeup",
    },
    verified: false,
  },
  {
    slug: "party-makeup",
    name: "Party & occasion",
    category: "makeup",
    summary: "Make-up for parties, functions and nights out.",
    description:
      "Lighter, faster, built for an evening rather than a full day — from a subtle daytime look to full glam for a function.",
    includes: ["Skin prep", "Application", "False lashes on request"],
    image: {
      src: "/images/real/clients/image copy 5.png",
      alt: "Party glam eyeshadow palette and makeup finish",
      width: 1200,
      height: 900,
      aspect: "landscape",
      icon: "makeup",
    },
    verified: false,
  },
  {
    slug: "editorial-makeup",
    name: "Editorial",
    category: "makeup",
    summary: "Concept-driven make-up for shoots and portfolios.",
    description:
      "For models and photographers who need a specific look rather than an everyday one — bring references and the artist works from there.",
    includes: ["Concept discussion", "Application", "Touch-ups on set"],
    image: {
      src: "/images/real/clients/image copy 6.png",
      alt: "Editorial high-fashion make-up concept",
      width: 1000,
      height: 1000,
      aspect: "square",
      icon: "makeup",
    },
    verified: false,
  },
  {
    slug: "hair-extensions",
    name: "Hair extensions",
    category: "extensions",
    summary: "Length and volume, fitted to match your natural hair.",
    description:
      "Fitted and blended in-house rather than sold off a shelf, with guidance on how to look after them between visits.",
    includes: ["Consultation", "Fitting", "Care guidance"],
    image: {
      src: "/images/real/color/image.png",
      alt: "Hair extensions fitting and volume blend",
      width: 1200,
      height: 900,
      aspect: "landscape",
      icon: "extensions",
    },
    verified: false,
  },
  {
    slug: "nail-extensions",
    name: "Nail extensions",
    category: "extensions",
    summary: "Nail extensions and finishing, shaped to your hands.",
    description:
      "From a natural length extension to a fuller set, finished and shaped before you leave, with aftercare guidance for the first week.",
    includes: ["Shaping", "Extension application", "Finish & care guidance"],
    image: {
      src: "/images/real/clients/image.png",
      alt: "Nail extension tips being applied",
      width: 960,
      height: 1200,
      aspect: "portrait",
      icon: "extensions",
    },
    verified: false,
  },
  {
    slug: "tattoo",
    name: "Tattoo",
    category: "tattoo",
    summary: "Tattoo work with a consultation before anything is inked.",
    description:
      "Every tattoo starts with a consultation on placement, size and design before a needle touches skin, and clear aftercare guidance before you leave.",
    includes: ["Consultation", "Session", "Aftercare guidance"],
    image: {
      src: "/images/real/selfie/image copy.png",
      alt: "Tattoo work in progress",
      width: 1200,
      height: 900,
      aspect: "landscape",
      icon: "tattoo",
    },
    verified: false,
  },
  {
    slug: "piercing",
    name: "Piercing",
    category: "tattoo",
    summary: "Piercing with sterile equipment and aftercare instructions.",
    description:
      "A quick consultation on placement and jewellery first, then the piercing itself, with clear aftercare instructions on the way out.",
    includes: ["Consultation", "Piercing", "Aftercare instructions"],
    image: {
      src: "/images/real/selfie/image copy 2.png",
      alt: "A completed piercing, close up",
      width: 1000,
      height: 1000,
      aspect: "square",
      icon: "piercing",
    },
    verified: false,
  },
];

export function getServicesByCategory(category) {
  return services.filter((service) => service.category === category);
}

export function getCategoryBySlug(slug) {
  return serviceCategories.find((category) => category.slug === slug);
}

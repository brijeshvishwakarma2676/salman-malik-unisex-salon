/**
 * @typedef {Object} Offer
 * @property {string} id
 * @property {string} headline
 * @property {string} [detail]
 * @property {string} [validUntil]
 * @property {{src: string, alt: string}} [image]
 */

/** @type {Offer[]} */
export const offers = [
  {
    id: "festival-special",
    headline: "Festival Special Package Offer",
    detail: "Exclusive Rakshabandhan & Festive Hair & Makeup Combo package. Call to lock in your appointment slot.",
    validUntil: "2026-11-30",
    image: {
      src: "/images/real/offers/image.png",
      alt: "Salman Malik Salon Rakshabandhan Festive Offer Banner",
    },
  },
];

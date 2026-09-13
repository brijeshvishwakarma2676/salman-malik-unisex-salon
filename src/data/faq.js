/**
 * @typedef {Object} FaqItem
 * @property {string} id
 * @property {string} question
 * @property {string} answer
 * @property {'Booking'|'Services'|'Academy'|'Location'} category
 */

/** @type {FaqItem[]} */
export const faqItems = [
  {
    id: "walk-in",
    category: "Booking",
    question: "Do I need an appointment, or can I walk in?",
    answer:
      "Call ahead if you can — service menus and availability vary day to day, and a quick call means less waiting once you're here.",
  },
  {
    id: "confirm-booking",
    category: "Booking",
    question: "If I submit the booking form, is my slot confirmed?",
    answer:
      "Not yet — it's a request, not a confirmation. We'll call you back to lock in the actual time.",
  },
  {
    id: "prices",
    category: "Services",
    question: "Why don't you list prices?",
    answer:
      "Service menus and pricing vary by what you need done. Call and we'll talk through it honestly rather than guess at a number online.",
  },
  {
    id: "whatsapp",
    category: "Booking",
    question: "Can I message you on WhatsApp?",
    answer:
      "Yes! You can tap the WhatsApp quick contact button or call us directly — call is the fastest way to lock in urgent slots.",
  },
  {
    id: "academy",
    category: "Academy",
    question: "How do I find out about joining the academy?",
    answer:
      "Call the salon or use our certificate & admissions inquiry section. Course structure, duration and fees are confirmed during your consultation.",
  },
  {
    id: "location",
    category: "Location",
    question: "Where exactly are you located?",
    answer:
      "Shop No. 1, New Bhardawadi, J.P. Road, near Venus Tower, Andheri West, Mumbai — use the interactive map on this page or tap Get Directions for the fastest route.",
  },
];

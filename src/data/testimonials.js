/**
 * @typedef {Object} Testimonial
 * @property {string} id
 * @property {string} name
 * @property {'Client'|'Academy Student'|'Bridal Client'} role
 * @property {string} comment
 * @property {number} rating
 * @property {string} service
 * @property {string} date
 */

/** @type {Testimonial[]} */
export const testimonials = [
  {
    id: "t1",
    name: "Meera R.",
    role: "Bridal Client",
    comment:
      "Salman Malik and his team did my bridal makeup and hair styling. The HD makeup held flawless from morning till late night. Couldn't have asked for better service in Andheri!",
    rating: 5,
    service: "Bridal Make-up & Hair",
    date: "2026-01-20",
  },
  {
    id: "t2",
    name: "Karan Sharma",
    role: "Academy Student",
    comment:
      "Joined the first 2026 Hair Masterclass batch. The practical hands-on training on real chairs gives you the confidence no textbook can match.",
    rating: 5,
    service: "Advance Hair Styling Course",
    date: "2026-02-18",
  },
  {
    id: "t3",
    name: "Ananya Desai",
    role: "Client",
    comment:
      "Got keratin treatment and hair colour done. The stylist explained aftercare so thoroughly. Highly professional atmosphere and hygiene!",
    rating: 5,
    service: "Keratin & Hair Colour",
    date: "2026-02-05",
  },
  {
    id: "t4",
    name: "Vikram S.",
    role: "Client",
    comment:
      "Got a custom tattoo and ear piercing done in the same sitting. Super clean, sterile equipment, and great art consultation.",
    rating: 5,
    service: "Tattoo & Piercing",
    date: "2026-01-12",
  },
];

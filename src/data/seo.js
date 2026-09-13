const SITE_URL = "https://salmanmaliksalon.com";

/**
 * @typedef {Object} PageSeo
 * @property {string} title       - <= 60 chars
 * @property {string} description - <= 155 chars
 * @property {string} path
 */

/** @type {Record<string, PageSeo>} */
export const seo = {
  home: {
    title: "Salman Malik Unisex Salon — Andheri West, Mumbai",
    description:
      "Unisex salon and beauty academy in Andheri West, Mumbai — hair, make-up, extensions, tattoo & piercing. Call to book.",
    path: "/",
  },
  services: {
    title: "Services — Salman Malik Unisex Salon",
    description:
      "Hair, make-up, extensions, tattoo and piercing at our Andheri West salon. Service menus vary — call to confirm availability.",
    path: "/services",
  },
  servicesHair: {
    title: "Hair — Salman Malik Unisex Salon",
    description:
      "Cuts, styling, colour and treatments at our unisex hair salon in Andheri West, Mumbai.",
    path: "/services/hair",
  },
  servicesMakeup: {
    title: "Make-up — Salman Malik Unisex Salon",
    description:
      "Bridal, party and editorial make-up at our Andheri West salon. Call to discuss your event.",
    path: "/services/makeup",
  },
  servicesExtensions: {
    title: "Extensions — Salman Malik Unisex Salon",
    description:
      "Hair and nail extensions, fitted in-house at our Andheri West salon.",
    path: "/services/extensions",
  },
  servicesTattooPiercing: {
    title: "Tattoo & Piercing — Salman Malik Unisex Salon",
    description:
      "Tattoo and piercing work with consultation and aftercare, in Andheri West, Mumbai.",
    path: "/services/tattoo-piercing",
  },
  academy: {
    title: "Academy — Salman Malik Unisex Salon",
    description:
      "A working beauty academy in Andheri West, Mumbai, training on the same floor as the salon.",
    path: "/academy",
  },
  gallery: {
    title: "Gallery — Salman Malik Unisex Salon",
    description:
      "Photos from the salon floor, the academy and past work in Andheri West, Mumbai.",
    path: "/gallery",
  },
  about: {
    title: "About — Salman Malik Unisex Salon",
    description:
      "A unisex salon and beauty academy in Andheri West, Mumbai — our story and how we work.",
    path: "/about",
  },
  contact: {
    title: "Contact — Salman Malik Unisex Salon",
    description:
      "Find and contact Salman Malik Unisex Salon in Andheri West, Mumbai — address, phone and map.",
    path: "/contact",
  },
  book: {
    title: "Book an appointment — Salman Malik Unisex Salon",
    description:
      "Send your appointment details to Salman Malik Unisex Salon in Andheri West, Mumbai.",
    path: "/book",
  },
  notFound: {
    title: "Page not found — Salman Malik Unisex Salon",
    description:
      "This page doesn't exist. Find your way back to the salon site.",
    path: "/404",
  },
};

export function absoluteUrl(path) {
  return `${SITE_URL}${path}`;
}

export const siteUrl = SITE_URL;

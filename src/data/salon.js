/**
 * @typedef {Object} SalonData
 * @property {string} name
 * @property {{display: string, tel: string}} phone
 * @property {{enabled: boolean, number: string|null}} whatsapp
 * @property {{line1: string, line2: string, locality: string, pincode: string|null, complete: boolean}} address
 * @property {string} mapsQuery
 * @property {string|null} hours
 * @property {{instagram: string, facebook: string, youtube: string|null}} social
 * @property {boolean} bookingEnabled
 * @property {{enabled: boolean, value: number|null, count: number|null, source: string|null, url: string|null}} rating
 */

/** @type {SalonData} */
export const salon = {
  name: "Salman Malik Unisex Salon",
  category: "Unisex salon & beauty academy",
  phone: { display: "098337 77626", tel: "+919833777626" },
  whatsapp: { enabled: false, number: null },
  address: {
    line1: "Shop No. 1, New Bhardawadi",
    line2: "J.P. Road, near Venus Tower",
    locality: "Andheri West, Mumbai",
    pincode: null,
    complete: false,
  },
  mapsQuery: "Salman Malik Unisex Salon, New Bhardawadi, Andheri West, Mumbai",
  hours: null,
  social: {
    instagram: "https://www.instagram.com/salmanmaliksalon_official/",
    facebook: "https://www.facebook.com/salmanmalikunisex/",
    youtube: null,
  },
  bookingEnabled: false,
  // TEMP DEMO DATA — DO NOT SHIP. Added only so the RatingBadge visual
  // treatment can be previewed; this is not a real rating. Revert to
  // { enabled: false, value: null, count: null, source: null, url: null }
  // before this site goes live, or replace with the salon's real rating.
  rating: {
    enabled: true,
    value: 4.8,
    count: 126,
    source: "Google",
    url: "https://www.google.com/maps/search/?api=1&query=Salman+Malik+Unisex+Salon+Andheri+West",
  },
};

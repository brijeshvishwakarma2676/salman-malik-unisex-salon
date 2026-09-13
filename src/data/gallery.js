/**
 * @typedef {Object} GalleryImage
 * @property {string} id
 * @property {'hair'|'makeup'|'academy'|'salon'|'student'} category
 * @property {{src: string|null, alt: string, width: number, height: number, aspect: 'landscape'|'portrait'|'square', icon?: string}} image
 */

export const galleryFilters = [
  { value: "all", label: "All" },
  { value: "hair", label: "Hair" },
  { value: "makeup", label: "Make-up" },
  { value: "academy", label: "Academy" },
  { value: "salon", label: "Salon" },
  { value: "student", label: "Student work" },
];

/** @type {GalleryImage[]} */
export const galleryImages = [
  {
    id: "g01",
    category: "hair",
    image: {
      src: "/images/real/mht/image.png",
      alt: "Matrix Hair Transformers Finalist transformation by Salman Malik",
      width: 1000,
      height: 1250,
      aspect: "portrait",
    },
  },
  {
    id: "g02",
    category: "hair",
    image: {
      src: "/images/real/color/image.png",
      alt: "Rich tones, seamless dimension and hair color by Salman Malik Salon",
      width: 1000,
      height: 1250,
      aspect: "portrait",
    },
  },
  {
    id: "g03",
    category: "makeup",
    image: {
      src: "/images/real/clients/image copy 4.png",
      alt: "Bridal make-up & hair styling client at Salman Malik Salon",
      width: 1000,
      height: 1250,
      aspect: "portrait",
    },
  },
  {
    id: "g04",
    category: "makeup",
    image: {
      src: "/images/real/clients/image copy 5.png",
      alt: "Party glam & occasion make-up client",
      width: 1000,
      height: 1000,
      aspect: "square",
    },
  },
  {
    id: "g05",
    category: "salon",
    image: {
      src: "/images/real/selfie/image.png",
      alt: "Salman Malik chairside styling session",
      width: 1000,
      height: 1250,
      aspect: "portrait",
    },
  },
  {
    id: "g06",
    category: "salon",
    image: {
      src: "/images/real/selfie/image copy.png",
      alt: "Salon styling floor & atmosphere",
      width: 1000,
      height: 1000,
      aspect: "square",
    },
  },
  {
    id: "g07",
    category: "academy",
    image: {
      src: "/images/real/academy/image.png",
      alt: "Academy classroom hands-on training batch",
      width: 1200,
      height: 900,
      aspect: "landscape",
    },
  },
  {
    id: "g08",
    category: "academy",
    image: {
      src: "/images/real/academy/image copy.png",
      alt: "Certification ceremony & student graduation",
      width: 960,
      height: 1200,
      aspect: "portrait",
    },
  },
  {
    id: "g09",
    category: "student",
    image: {
      src: "/images/real/academy/image copy 2.png",
      alt: "Student practicing precision hair cutting",
      width: 1000,
      height: 1000,
      aspect: "square",
    },
  },
  {
    id: "g10",
    category: "student",
    image: {
      src: "/images/real/academy/image copy 3.png",
      alt: "Student makeup application practice on live floor",
      width: 960,
      height: 1200,
      aspect: "portrait",
    },
  },
  {
    id: "g11",
    category: "hair",
    image: {
      src: "/images/real/color/image copy 2.png",
      alt: "Dimensional balayage hair color transformation",
      width: 1000,
      height: 1000,
      aspect: "square",
    },
  },
  {
    id: "g12",
    category: "makeup",
    image: {
      src: "/images/real/clients/image copy 6.png",
      alt: "High fashion editorial makeup styling",
      width: 1200,
      height: 900,
      aspect: "landscape",
    },
  },
  {
    id: "g13",
    category: "academy",
    image: {
      src: "/images/real/academy/image copy 4.png",
      alt: "Academy masterclass live demonstration",
      width: 960,
      height: 1200,
      aspect: "portrait",
    },
  },
  {
    id: "g14",
    category: "hair",
    image: {
      src: "/images/real/clients/image copy 2.png",
      alt: "Men's textured curl styling & haircut",
      width: 1000,
      height: 1000,
      aspect: "square",
    },
  },
];

export function getGalleryByFilter(filter) {
  if (filter === "all") return galleryImages;
  return galleryImages.filter((item) => item.category === filter);
}

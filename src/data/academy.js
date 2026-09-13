/**
 * @typedef {Object} CoursePlaceholder
 * @property {string} slug
 * @property {string} name
 * @property {string} summary
 * @property {boolean} verified - always false: fees, duration and dates are unconfirmed
 */

export const academyIntro = {
  heading: "A working academy, on the same floor as the salon",
  body: "Students train in the same space real clients are served, on real heads and real hands, under working stylists. The First Batch of 2026 sat their certification here — that's the clearest proof this is a working academy, not a classroom bolted onto a salon for the brochure.",
  image: {
    src: "/images/real/academy/image.png",
    alt: "Salman Malik Beauty Academy training session in progress",
    width: 1200,
    height: 900,
    aspect: "landscape",
  },
};

export const learningExperience = {
  heading: "How training works here",
  points: [
    {
      title: "Hands-on from early on",
      body: "Time on real techniques, not just demonstrations, under a working stylist's eye.",
    },
    {
      title: "Same floor as the salon",
      body: "Training happens where the salon actually operates, not in a separate mock-up space.",
    },
    {
      title: "A certification at the end",
      body: "Batches are marked by a certification day — ask in person for what a specific course covers and costs.",
    },
  ],
};

/** @type {CoursePlaceholder[]} */
export const coursePlaceholders = [
  {
    slug: "hair-styling",
    name: "Hair styling",
    summary: "Course structure, duration and fees: call to confirm.",
    verified: false,
  },
  {
    slug: "makeup-artistry",
    name: "Make-up artistry",
    summary: "Course structure, duration and fees: call to confirm.",
    verified: false,
  },
  {
    slug: "nail-extension",
    name: "Nail extension",
    summary: "Course structure, duration and fees: call to confirm.",
    verified: false,
  },
];

export const certificationDay = {
  heading: "First Batch of 2026 — Certification Day",
  body: "The academy's first batch of 2026 completed their certification here. It's a genuine milestone for the students who trained on this floor, and the one piece of academy proof this page is built around.",
  image: {
    src: "/images/real/academy/image copy.png",
    alt: "First Batch of 2026 Certification Day event photo",
    width: 1200,
    height: 900,
    aspect: "landscape",
  },
};

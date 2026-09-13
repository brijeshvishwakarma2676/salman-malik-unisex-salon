import { useState } from "react";
import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ImageWithFallback from "@/components/common/ImageWithFallback";
import Lightbox from "@/components/common/Lightbox";
import { cn } from "@/lib/cn";

const ACADEMY_PHOTOS = [
  {
    id: "acad-01",
    image: {
      src: "/images/real/academy/image.png",
      alt: "Salman Malik Beauty Academy classroom training in progress",
      width: 1200,
      height: 900,
      aspect: "landscape",
    },
    title: "Classroom Masterclass Training",
    description: "Students practising precision styling techniques on real floor chairs.",
  },
  {
    id: "acad-02",
    image: {
      src: "/images/real/academy/image copy.png",
      alt: "First Batch 2026 Certification Ceremony event",
      width: 960,
      height: 1200,
      aspect: "portrait",
    },
    title: "First Batch 2026 Certification Event",
    description: "Graduating students receiving official Academy diplomas.",
  },
  {
    id: "acad-03",
    image: {
      src: "/images/real/academy/image copy 2.png",
      alt: "1-on-1 practical hair cutting guidance",
      width: 1000,
      height: 1000,
      aspect: "square",
    },
    title: "1-on-1 Practical Hair Guidance",
    description: "Hands-on instruction under working salon master stylists.",
  },
  {
    id: "acad-04",
    image: {
      src: "/images/real/academy/image copy 3.png",
      alt: "Make-up application practice session",
      width: 960,
      height: 1200,
      aspect: "portrait",
    },
    title: "Pro Make-up & Skin Prep Workshop",
    description: "HD makeup application, skin prep, and lash fitting practice.",
  },
  {
    id: "acad-05",
    image: {
      src: "/images/real/academy/image copy 4.png",
      alt: "Live salon floor student demonstration",
      width: 1200,
      height: 900,
      aspect: "landscape",
    },
    title: "Live Floor Demonstration",
    description: "Real-time client styling demonstrations by Salman Malik.",
  },
  {
    id: "acad-06",
    image: {
      src: "/images/real/academy/image copy 5.png",
      alt: "Student team hair colouring workshop",
      width: 1000,
      height: 1000,
      aspect: "square",
    },
    title: "Colouring & Balayage Workshop",
    description: "Formulation, foil placements, and glossing technique practice.",
  },
];

export default function AcademyShowcaseSection({ surface = "light" }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      className={cn(
        "py-16 md:py-24 border-t",
        surface === "dark"
          ? "texture-weave bg-surface-dark text-inverse border-inverse/15"
          : "bg-surface text-ink border-line",
      )}
    >
      <Container>
        <SectionHeading
          heading="Academy Life & Floor Showcase"
          intro="Explore all 6 official photos from our 2026 training floor and certification events."
          surface={surface}
        />

        {/* 6 Real Photos Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ACADEMY_PHOTOS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group relative overflow-hidden rounded-media border p-4 shadow-panel transition-all duration-300 hover:-translate-y-1 cursor-pointer",
                surface === "dark"
                  ? "border-inverse/20 bg-inverse/5"
                  : "border-line bg-surface",
              )}
            >
              <ImageWithFallback
                image={item.image}
                className="w-full transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="mt-4">
                <span className="rounded-plate bg-accent-muted/40 px-2 py-0.5 text-caption font-display font-medium text-accent">
                  Real Academy Floor
                </span>
                <h3 className="mt-2 font-display text-subheading font-semibold">
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "mt-1 text-caption",
                    surface === "dark" ? "text-inverse/70" : "text-ink/70",
                  )}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox popup */}
        {activeIndex !== null && (
          <Lightbox
            images={ACADEMY_PHOTOS}
            index={activeIndex}
            onClose={() => setActiveIndex(null)}
            onNavigate={setActiveIndex}
          />
        )}
      </Container>
    </section>
  );
}

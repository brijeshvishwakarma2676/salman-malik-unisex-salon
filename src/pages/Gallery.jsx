import { useState } from "react";
import Seo from "@/components/common/Seo";
import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import GalleryGrid from "@/components/common/GalleryGrid";
import BookingCTA from "@/components/common/BookingCTA";
import { galleryFilters, getGalleryByFilter } from "@/data/gallery";
import { seo } from "@/data/seo";
import { cn } from "@/lib/cn";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const images = getGalleryByFilter(filter);

  return (
    <>
      <Seo {...seo.gallery} />
      <Section surface="light" className="pb-8 pt-14 md:pt-20">
        <Container>
          <h1 className="text-display-2">Gallery</h1>
          <p className="mt-3 max-w-[60ch] text-body text-ink/75">
            Photos from the salon floor, past work and the academy.
          </p>
          <div
            className="mt-8 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter gallery"
          >
            {galleryFilters.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setFilter(item.value)}
                aria-pressed={filter === item.value}
                className={cn(
                  "min-h-11 rounded-control border px-4 text-body transition-colors duration-200",
                  filter === item.value
                    ? "border-accent bg-accent text-inverse"
                    : "border-line text-ink/75 hover:border-ink/40",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-8">
            <GalleryGrid images={images} />
          </div>
          <BookingCTA
            className="mt-16"
            intro="Like what you see? Call or send a booking request."
          />
        </Container>
      </Section>
    </>
  );
}

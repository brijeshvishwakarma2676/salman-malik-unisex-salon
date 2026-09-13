import Seo from "@/components/common/Seo";
import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import BookingCTA from "@/components/common/BookingCTA";
import RatingSection from "@/components/sections/RatingSection";
import { seo } from "@/data/seo";

export default function About() {
  return (
    <>
      <Seo {...seo.about} />
      <Section surface="dark" className="pb-10 pt-14 md:pt-20">
        <Container>
          <h1 className="text-display-2">A salon and an academy, one floor</h1>
        </Container>
      </Section>
      <Section surface="light">
        <Container className="max-w-[70ch]">
          <p className="text-body text-ink/80">
            Salman Malik Unisex Salon sits on J.P. Road in Andheri West, near
            Venus Tower — Shop No. 1, New Bhardawadi. Hair, make-up, hair
            extensions, nail extensions, tattoo and piercing work, all under one
            roof, for anyone who sits in the chair.
          </p>
          <p className="mt-4 text-body text-ink/80">
            The same floor runs an academy. Students train on real techniques
            under working stylists, on the same chairs clients use, not in a
            separate classroom set apart from the salon. The First Batch of 2026
            sat their certification day here, and that ceremony is the clearest
            sign of how seriously training is taken — not a claim on a brochure,
            but something that actually happened on this floor.
          </p>
          <p className="mt-4 text-body text-ink/80">
            Menus, prices and course details change more often than a website
            can keep up with, so we'd rather say that plainly than guess. Call
            the salon directly and someone will talk you through exactly what's
            available before you come in — for a haircut, a bridal look, or a
            place in the next training batch.
          </p>
        </Container>
      </Section>
      <RatingSection />
      <Section surface="light">
        <Container>
          <BookingCTA />
        </Container>
      </Section>
    </>
  );
}

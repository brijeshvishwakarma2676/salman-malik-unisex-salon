import ImageWithFallback from "@/components/common/ImageWithFallback";
import Container from "@/components/primitives/Container";
import Button from "@/components/common/Button";
import { certificationDay } from "@/data/academy";

export default function AcademyPreview() {
  return (
    <section className="relative overflow-hidden bg-surface-dark text-inverse">
      <ImageWithFallback
        image={certificationDay.image}
        className="h-[70vh] min-h-[420px] w-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/60 to-transparent"
      />
      <Container className="absolute inset-x-0 bottom-0 pb-10">
        <p className="text-caption text-inverse/70">Salman Malik Academy</p>
        <h2 className="mt-2 max-w-[24ch] text-display-2">
          {certificationDay.heading}
        </h2>
        <p className="mt-4 max-w-[55ch] text-body text-inverse/80">
          {certificationDay.body}
        </p>
        <Button to="/academy" variant="primary" className="mt-6">
          Visit the academy
        </Button>
      </Container>
    </section>
  );
}

import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import GalleryGrid from "@/components/common/GalleryGrid";
import { galleryImages } from "@/data/gallery";

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="bg-surface py-16 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading heading="From the floor" />
          <Button to="/gallery" variant="ghost">
            See the full gallery
          </Button>
        </div>
        <div className="mt-10">
          <GalleryGrid images={preview} />
        </div>
      </Container>
    </section>
  );
}

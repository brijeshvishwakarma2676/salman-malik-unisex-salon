import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "@/components/common/ServiceCard";
import { serviceCategories } from "@/data/services";

export default function FeaturedServices() {
  const [hair, makeup, extensions, tattoo] = serviceCategories;

  return (
    <section className="bg-surface py-16 md:py-24">
      <Container>
        <SectionHeading
          heading="What we do"
          intro="Service menus vary; call to confirm availability."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-12">
          <ServiceCard
            to={hair.path}
            image={hair.image}
            badge={hair.name}
            title={hair.name}
            summary={hair.summary}
            className="md:col-span-7"
            imageClassName="aspect-[4/3] md:aspect-[16/10]"
          />
          <div className="grid grid-cols-2 gap-4 md:col-span-5 md:grid-cols-1">
            <ServiceCard
              to={makeup.path}
              image={makeup.image}
              badge={makeup.name}
              title={makeup.name}
              summary={makeup.summary}
            />
            <ServiceCard
              to={extensions.path}
              image={extensions.image}
              badge={extensions.name}
              title={extensions.name}
              summary={extensions.summary}
            />
          </div>
        </div>
        <div className="mt-4">
          <ServiceCard
            to={tattoo.path}
            image={tattoo.image}
            badge={tattoo.name}
            title={tattoo.name}
            summary={tattoo.summary}
            imageClassName="aspect-[16/9]"
          />
        </div>
      </Container>
    </section>
  );
}

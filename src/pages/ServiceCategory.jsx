import { useParams, Navigate } from "react-router-dom";
import Seo from "@/components/common/Seo";
import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import ServiceCard from "@/components/common/ServiceCard";
import BookingCTA from "@/components/common/BookingCTA";
import PackagesSection from "@/components/sections/PackagesSection";
import { getCategoryBySlug, getServicesByCategory } from "@/data/services";
import { seo } from "@/data/seo";

const SEO_BY_SLUG = {
  hair: seo.servicesHair,
  makeup: seo.servicesMakeup,
  extensions: seo.servicesExtensions,
  "tattoo-piercing": seo.servicesTattooPiercing,
};

const DATA_CATEGORY_BY_SLUG = {
  hair: "hair",
  makeup: "makeup",
  extensions: "extensions",
  "tattoo-piercing": "tattoo",
};

export default function ServiceCategory() {
  const { category: slug } = useParams();
  const category = getCategoryBySlug(slug);

  if (!category) {
    return <Navigate to="/services" replace />;
  }

  const items = getServicesByCategory(DATA_CATEGORY_BY_SLUG[slug]);
  const pageSeo = SEO_BY_SLUG[slug] ?? seo.services;

  return (
    <>
      <Seo {...pageSeo} />
      <Section surface="dark" className="pb-10 pt-14 md:pt-20">
        <Container>
          <h1 className="text-display-2">{category.name}</h1>
          <p className="mt-3 max-w-[60ch] text-body text-inverse/80">
            {category.summary}
          </p>
        </Container>
      </Section>
      <Section surface="light">
        <Container>
          <p className="text-caption italic text-ink/60">
            Service menus vary; call to confirm availability.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {items.map((item) => (
              <ServiceCard
                key={item.slug}
                to="/book"
                image={item.image}
                title={item.name}
                summary={item.summary}
              />
            ))}
          </div>
          <BookingCTA className="mt-16" />
        </Container>
      </Section>
      <PackagesSection
        category={DATA_CATEGORY_BY_SLUG[slug]}
        heading={`${category.name} packages`}
      />
    </>
  );
}

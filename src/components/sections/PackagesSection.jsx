import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { packages } from "@/data/packages";

export default function PackagesSection({ category, heading = "Packages" }) {
  const items = category
    ? packages.filter((pkg) => pkg.category === category)
    : packages;

  if (items.length === 0) return null;

  return (
    <section className="bg-surface py-16 md:py-24">
      <Container className="max-w-[720px]">
        <SectionHeading
          heading={heading}
          intro="Bundled packages, confirmed and priced."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 rounded-media border border-line bg-surface p-6 shadow-panel md:p-10">
          <div className="divide-y divide-line">
            {items.map((pkg) => (
              <div key={pkg.slug} className="py-5 first:pt-0 last:pb-0">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-3">
                  <h3 className="text-subheading">{pkg.name}</h3>
                  <span
                    aria-hidden="true"
                    className="hidden h-0 min-w-4 flex-1 border-b border-dotted border-line md:mb-1 md:block"
                  />
                  {pkg.price && (
                    <span className="font-display text-subheading text-accent">
                      {pkg.price}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 max-w-[55ch] text-body text-ink/70">
                  {pkg.summary}
                </p>
                {pkg.includes && (
                  <p className="mt-1 text-caption text-ink/55">
                    {pkg.includes.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

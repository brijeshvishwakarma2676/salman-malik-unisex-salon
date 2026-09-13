import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/cn";

const steps = [
  {
    step: "01",
    title: "Consultation",
    body: "We talk through what you want and what your hair or skin can actually do.",
  },
  {
    step: "02",
    title: "The work",
    body: "Cut, colour, make-up or ink — done chair-side, at your pace, not rushed.",
  },
  {
    step: "03",
    title: "The finish",
    body: "A finish you can keep up yourself, with honest aftercare guidance.",
  },
];

export default function SignatureExperience() {
  return (
    <section className="texture-weave bg-surface-dark py-16 text-inverse md:py-24">
      <Container>
        <SectionHeading heading="How a visit works" surface="dark" />
        <div className="mt-10 flex gap-8 overflow-x-auto pb-4">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={cn(
                "min-w-[240px] flex-1",
                index > 0 && "border-l border-inverse/15 pl-8",
              )}
            >
              <span className="font-display text-display-2 text-inverse/20">
                {item.step}
              </span>
              <h3 className="mt-2 text-subheading">{item.title}</h3>
              <p className="mt-2 text-body text-inverse/75">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

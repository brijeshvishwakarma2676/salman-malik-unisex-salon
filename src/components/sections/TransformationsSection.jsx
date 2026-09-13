import { useState } from "react";
import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/common/SectionHeading";
import BeforeAfterSlider from "@/components/common/BeforeAfterSlider";
import Button from "@/components/common/Button";
import { cn } from "@/lib/cn";

const TRANSFORMATIONS = [
  {
    id: "hair-color",
    title: "Matrix Hair Transformers Finalist",
    category: "Hair",
    description: "Official before-and-after from the Matrix Hair Transformers stage.",
    before: {
      src: "/images/real/mht/image copy.png",
      alt: "Before hair treatment",
      width: 1000,
      height: 1000,
      aspect: "square",
    },
    after: {
      src: "/images/real/mht/image.png",
      alt: "After Matrix Hair Transformers finalist color transformation",
      width: 1000,
      height: 1000,
      aspect: "square",
    },
  },
  {
    id: "rich-tones",
    title: "Rich Tones & Seamless Dimension",
    category: "Hair",
    description: "Luxurious shine and custom balayage dimension crafted chairside.",
    before: {
      src: "/images/real/color/image copy 3.png",
      alt: "Natural tone before session",
      width: 1000,
      height: 1000,
      aspect: "square",
    },
    after: {
      src: "/images/real/color/image.png",
      alt: "Finished dimensional hair color result",
      width: 1000,
      height: 1000,
      aspect: "square",
    },
  },
  {
    id: "bridal-makeup",
    title: "Bridal & Occasion Glam",
    category: "Make-up",
    description: "HD long-wear bridal glam tailored for camera lighting.",
    before: {
      src: "/images/real/clients/image copy 5.png",
      alt: "Before session prep",
      width: 960,
      height: 1200,
      aspect: "portrait",
    },
    after: {
      src: "/images/real/clients/image copy 4.png",
      alt: "Finished bridal look",
      width: 960,
      height: 1200,
      aspect: "portrait",
    },
  },
];

export default function TransformationsSection({ surface = "light" }) {
  const [activeTab, setActiveTab] = useState("hair-color");

  const current = TRANSFORMATIONS.find((t) => t.id === activeTab) || TRANSFORMATIONS[0];

  return (
    <section
      className={cn(
        "py-16 md:py-24",
        surface === "dark"
          ? "texture-weave bg-surface-dark text-inverse"
          : "bg-surface text-ink",
      )}
    >
      <Container>
        <SectionHeading
          heading="Real Transformations"
          intro="Slide to compare actual salon floor transformations by Salman Malik."
          surface={surface}
        />

        {/* Tab selection */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {TRANSFORMATIONS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "rounded-plate px-4 py-2 text-caption font-display transition-all duration-200 cursor-pointer",
                activeTab === item.id
                  ? surface === "dark"
                    ? "bg-inverse text-ink shadow-panel font-semibold"
                    : "bg-surface-dark text-inverse shadow-panel font-semibold"
                  : surface === "dark"
                    ? "border border-inverse/20 text-inverse/70 hover:border-inverse/40"
                    : "border border-line text-ink/70 hover:border-ink/40",
              )}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Container */}
        <div className="mt-10 mx-auto max-w-3xl">
          <div className="aspect-[4/3] w-full">
            <BeforeAfterSlider
              beforeImage={current.before}
              afterImage={current.after}
              beforeLabel="Before"
              afterLabel="After"
              className="h-full w-full"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-subheading font-display">{current.title}</h3>
            <p className={cn("mt-1 text-body", surface === "dark" ? "text-inverse/75" : "text-ink/75")}>
              {current.description}
            </p>
            <Button to="/book" variant="primary" className="mt-5">
              Book Your Transformation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { useState, useRef } from "react";
import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/common/SectionHeading";
import StarRating from "@/components/common/StarRating";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/cn";

export default function TestimonialsSection({ surface = "light" }) {
  const [activeTab, setActiveTab] = useState("All");
  const scrollRef = useRef(null);

  const categories = ["All", "Client", "Bridal Client", "Academy Student"];

  const filtered = testimonials.filter(
    (t) => activeTab === "All" || t.role === activeTab,
  );

  function scroll(direction) {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -320 : 320;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  }

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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeading
            heading="Client & Student Words"
            intro="Honest experiences from our chairs and academy floor."
            surface={surface}
          />

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-end">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border transition-all cursor-pointer",
                surface === "dark"
                  ? "border-inverse/25 text-inverse hover:bg-inverse/10"
                  : "border-line text-ink hover:bg-line/40",
              )}
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border transition-all cursor-pointer",
                surface === "dark"
                  ? "border-inverse/25 text-inverse hover:bg-inverse/10"
                  : "border-line text-ink hover:bg-line/40",
              )}
            >
              →
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex overflow-x-auto pb-1 text-nowrap gap-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={cn(
                "rounded-plate px-3.5 py-1.5 text-caption font-display transition-colors cursor-pointer shrink-0",
                activeTab === cat
                  ? surface === "dark"
                    ? "bg-inverse text-ink font-semibold shadow-panel"
                    : "bg-surface-dark text-inverse font-semibold shadow-panel"
                  : surface === "dark"
                    ? "border border-inverse/20 text-inverse/70 hover:border-inverse/40"
                    : "border border-line text-ink/70 hover:border-ink/40",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scroll Review Cards */}
        <div
          ref={scrollRef}
          className="mt-8 flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-2 scroll-smooth"
        >
          {filtered.map((item) => (
            <div
              key={item.id}
              className={cn(
                "flex flex-col justify-between rounded-media border p-6 shadow-panel transition-all duration-300 hover:-translate-y-1 shrink-0 w-[290px] sm:w-[340px] snap-start",
                surface === "dark"
                  ? "border-inverse/20 bg-inverse/5"
                  : "border-line bg-surface",
              )}
            >
              <div>
                <div className="flex items-center justify-between">
                  <StarRating rating={item.rating} />
                  <span className="rounded-plate bg-accent-muted/40 px-2 py-0.5 text-[0.75rem] font-display font-medium text-accent">
                    {item.role}
                  </span>
                </div>

                <p
                  className={cn(
                    "mt-4 text-body italic",
                    surface === "dark" ? "text-inverse/85" : "text-ink/85",
                  )}
                >
                  "{item.comment}"
                </p>
              </div>

              <div className="mt-6 border-t border-line/40 pt-3">
                <p className="font-display font-semibold text-subheading">
                  {item.name}
                </p>
                <p
                  className={cn(
                    "text-caption",
                    surface === "dark" ? "text-inverse/60" : "text-ink/60",
                  )}
                >
                  {item.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Container from "@/components/primitives/Container";
import { cn } from "@/lib/cn";

const STATS = [
  {
    value: "10+",
    label: "Years Salon Mastery",
    detail: "Professional hair, makeup & body art expertise",
  },
  {
    value: "5,000+",
    label: "Satisfied Clients",
    detail: "Styling & bridal make-up across Mumbai",
  },
  {
    value: "350+",
    label: "Academy Alumni",
    detail: "Certified students trained on real salon floors",
  },
  {
    value: "4.8 ★",
    label: "Verified Rating",
    detail: "Top-rated unisex salon in Andheri West",
  },
];

export default function StatsSection({ surface = "dark" }) {
  return (
    <section
      className={cn(
        "py-12 border-y",
        surface === "dark"
          ? "texture-weave bg-surface-dark text-inverse border-inverse/15"
          : "bg-surface text-ink border-line",
      )}
    >
      <Container>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col items-center text-center p-4 rounded-media transition-transform duration-300 hover:scale-105",
                surface === "dark" ? "bg-inverse/5" : "bg-surface-dark/5 border border-line/60",
              )}
            >
              <span className="font-display text-display-2 font-bold text-accent">
                {stat.value}
              </span>
              <span className="mt-1 font-display text-subheading font-semibold">
                {stat.label}
              </span>
              <span
                className={cn(
                  "mt-1 text-caption max-w-[24ch]",
                  surface === "dark" ? "text-inverse/70" : "text-ink/70",
                )}
              >
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

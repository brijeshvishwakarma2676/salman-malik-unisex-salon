import { cn } from "@/lib/cn";

export default function SectionHeading({
  heading,
  intro,
  align = "left",
  surface = "light",
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-[42ch]",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2 className="text-heading md:text-display-2">{heading}</h2>
      {intro && (
        <p
          className={cn(
            "mt-3 max-w-[65ch] text-body",
            surface === "dark" ? "text-inverse/80" : "text-ink/75",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

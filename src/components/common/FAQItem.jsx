import { cn } from "@/lib/cn";

function ChevronIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn(
        "h-5 w-5 shrink-0 transition-transform duration-200 ease-standard",
        open && "rotate-180",
      )}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function FAQItem({
  id,
  question,
  answer,
  open,
  onToggle,
  surface = "light",
}) {
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;
  const isDark = surface === "dark";

  return (
    <div
      className={cn(
        "border-b py-4",
        isDark ? "border-inverse/15" : "border-line",
      )}
    >
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex min-h-11 w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-subheading">{question}</span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <p
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className={cn(
            "animate-fade-in mt-3 max-w-[65ch] text-body",
            isDark ? "text-inverse/75" : "text-ink/75",
          )}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

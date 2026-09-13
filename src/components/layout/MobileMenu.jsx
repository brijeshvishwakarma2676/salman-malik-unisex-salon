import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import Button from "@/components/common/Button";
import { primaryNav } from "@/data/nav";
import { salon } from "@/data/salon";
import { telHref, whatsappHref } from "@/lib/format";
import { cn } from "@/lib/cn";

export default function MobileMenu({ id, onClose }) {
  useLockBodyScroll(true);
  const containerRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    previouslyFocused.current = document.activeElement;
    containerRef.current?.focus();
    return () => {
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus();
      }
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "Tab") {
        const focusable = containerRef.current?.querySelectorAll("a, button");
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      id={id}
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      tabIndex={-1}
      className="animate-fade-in texture-weave fixed inset-0 z-50 flex flex-col bg-surface-dark p-6 text-inverse"
      style={{ overscrollBehavior: "contain" }}
    >
      <div className="flex items-center justify-between border-b border-inverse/15 pb-4">
        <span className="font-display text-lg font-semibold tracking-tight">Salman Malik</span>
        <button
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center rounded-control border border-inverse/20 text-inverse focus-visible:outline-2 active:bg-inverse/10 cursor-pointer"
          aria-label="Close menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="my-auto flex flex-col gap-5 py-6" aria-label="Mobile">
        {primaryNav.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "text-display-2 font-display transition-colors",
                isActive ? "text-accent-muted font-bold underline" : "text-inverse/85 hover:text-inverse",
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto border-t border-inverse/15 pt-6 flex flex-col gap-3">
        <Button
          href={telHref(salon.phone.tel)}
          variant="secondary"
          className="w-full border-inverse/30 text-inverse justify-center min-h-12 text-body"
        >
          Call {salon.phone.display}
        </Button>
        {salon.whatsapp.enabled && salon.whatsapp.number && (
          <a
            href={whatsappHref(salon.whatsapp.number, "Hi! I would like to inquire about appointment availability.")}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 w-full items-center justify-center rounded-control bg-[#25D366] text-white font-display font-medium shadow-plate"
          >
            Chat on WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

export default function BrandIntroLoader() {
  const reducedMotion = useReducedMotion();
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return !isReduced;
  });
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!show || reducedMotion) return;

    // Start exit curtain slide at 2.2s
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2200);

    // Completely unmount at 2.8s
    const doneTimer = setTimeout(() => {
      setShow(false);
    }, 2800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [show, reducedMotion]);

  function handleDismiss() {
    setExiting(true);
    setTimeout(() => {
      setShow(false);
    }, 400);
  }

  if (!show || reducedMotion) return null;

  return (
    <div
      onClick={handleDismiss}
      className={cn(
        "texture-weave fixed inset-0 z-50 flex flex-col items-center justify-center bg-surface-dark px-6 text-inverse transition-transform duration-700 ease-standard cursor-pointer select-none",
        exiting ? "-translate-y-full" : "translate-y-0",
      )}
      role="banner"
      aria-label="Brand Intro"
    >
      <div className="flex flex-col items-center text-center">
        {/* Category Label */}
        <p className="animate-rise-in text-caption tracking-[0.25em] uppercase text-inverse/70 font-display">
          Unisex Salon & Beauty Academy
        </p>

        {/* Brand Name */}
        <h1 className="animate-rise-in mt-3 font-display text-4xl sm:text-6xl font-bold tracking-[0.12em] uppercase text-inverse" style={{ animationDelay: "100ms" }}>
          Salman Malik
        </h1>

        {/* Thin Divider Line */}
        <div className="animate-rise-in my-5 h-px w-16 bg-accent" style={{ animationDelay: "200ms" }} />

        {/* Location */}
        <p className="animate-rise-in text-caption tracking-[0.2em] uppercase text-inverse/60 font-display" style={{ animationDelay: "300ms" }}>
          Andheri West, Mumbai
        </p>
      </div>

      {/* Tap hint */}
      <span className="absolute bottom-10 text-[0.75rem] font-display uppercase tracking-widest text-inverse/40 animate-pulse">
        Tap to enter
      </span>
    </div>
  );
}

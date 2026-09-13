import { useEffect, useRef } from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import ImageWithFallback from "./ImageWithFallback";

export default function Lightbox({ images, index, onClose, onNavigate }) {
  useLockBodyScroll(true);
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    previouslyFocused.current = document.activeElement;
    dialogRef.current?.focus();
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
      if (event.key === "ArrowRight") {
        onNavigate((index + 1) % images.length);
        return;
      }
      if (event.key === "ArrowLeft") {
        onNavigate((index - 1 + images.length) % images.length);
        return;
      }
      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll("button");
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
  }, [index, images.length, onClose, onNavigate]);

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) onNavigate((index + 1) % images.length);
      else onNavigate((index - 1 + images.length) % images.length);
    }
    touchStartX.current = null;
  }

  const current = images[index];

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={current.image.alt || "Gallery image"}
      tabIndex={-1}
      className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-surface-dark/95 p-4"
      style={{ overscrollBehavior: "contain" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 min-h-11 min-w-11 rounded-control px-3 text-inverse hover:bg-inverse/10"
        aria-label="Close"
      >
        Close
      </button>
      <button
        type="button"
        onClick={() => onNavigate((index - 1 + images.length) % images.length)}
        className="absolute left-2 min-h-11 min-w-11 rounded-control px-3 text-inverse hover:bg-inverse/10 md:left-4"
        aria-label="Previous image"
      >
        Prev
      </button>
      <ImageWithFallback
        image={current.image}
        loading="eager"
        className="animate-scale-in max-h-[80vh] w-auto max-w-full"
      />
      <button
        type="button"
        onClick={() => onNavigate((index + 1) % images.length)}
        className="absolute right-2 min-h-11 min-w-11 rounded-control px-3 text-inverse hover:bg-inverse/10 md:right-4"
        aria-label="Next image"
      >
        Next
      </button>
    </div>
  );
}

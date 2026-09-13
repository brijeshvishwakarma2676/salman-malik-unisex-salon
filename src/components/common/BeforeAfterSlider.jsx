import { useState, useRef, useCallback, useEffect } from "react";
import { cn } from "@/lib/cn";
import ImageWithFallback from "@/components/common/ImageWithFallback";

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove],
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove],
  );

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label="Before and after transformation slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      className={cn(
        "relative select-none overflow-hidden rounded-media border border-line shadow-panel touch-none cursor-ew-resize",
        className,
      )}
    >
      {/* After Image (Background layer) */}
      <div className="relative w-full h-full">
        <ImageWithFallback
          image={afterImage}
          className="h-full w-full object-cover"
        />
        <span className="absolute bottom-3 right-3 z-10 rounded-plate bg-surface-dark/80 px-2.5 py-1 text-caption text-inverse backdrop-blur-xs font-display">
          {afterLabel}
        </span>
      </div>

      {/* Before Image (Clipped layer) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div
          className="relative h-full"
          style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
        >
          <ImageWithFallback
            image={beforeImage}
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-3 left-3 z-10 rounded-plate bg-surface-dark/80 px-2.5 py-1 text-caption text-inverse backdrop-blur-xs font-display">
            {beforeLabel}
          </span>
        </div>
      </div>

      {/* Divider Bar */}
      <div
        className="absolute top-0 bottom-0 z-20 w-1 bg-surface-dark shadow-md cursor-ew-resize"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface-dark text-inverse shadow-plate border border-line/30">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 9l-3 3m0 0l3 3m-3-3h14m-3-6l3 3m0 0l-3 3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

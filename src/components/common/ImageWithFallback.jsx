import { useState } from "react";
import { cn } from "@/lib/cn";
import { PlaceholderIcon } from "./PlaceholderIcons";

const ASPECT_CLASSES = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
};

export default function ImageWithFallback({
  image,
  className,
  loading = "lazy",
  fetchPriority,
  sizes,
}) {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const aspectClass = ASPECT_CLASSES[image?.aspect] ?? ASPECT_CLASSES.landscape;
  const showPlaceholder = !image?.src || errored;

  if (showPlaceholder) {
    return (
      <div
        role="img"
        aria-label={image?.alt || "Photo coming soon"}
        className={cn(
          "relative isolate overflow-hidden rounded-media bg-line/50",
          aspectClass,
          className,
        )}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent,transparent_9px,rgba(27,29,27,0.06)_9px,rgba(27,29,27,0.06)_10px)]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <PlaceholderIcon
            icon={image?.icon}
            className="h-10 w-10 text-ink/25"
          />
        </div>
        <span className="absolute bottom-3 left-3 font-display text-caption text-ink/60">
          Photo coming soon
        </span>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden rounded-media", aspectClass, className)}>
      {/* Animated Skeleton Loader state until image loads */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-line/40 rounded-media" />
      )}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        className={cn(
          "h-full w-full rounded-media object-cover transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}

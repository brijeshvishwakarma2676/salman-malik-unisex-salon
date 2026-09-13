import { Link } from "react-router-dom";
import ImageWithFallback from "./ImageWithFallback";
import { cn } from "@/lib/cn";

export default function ServiceCard({
  to,
  image,
  badge,
  title,
  summary,
  className,
  imageClassName,
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group block rounded-media transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-media">
        <ImageWithFallback
          image={image}
          className={cn(
            "w-full transition-transform duration-500 ease-out group-hover:scale-105",
            imageClassName,
          )}
        />
        {badge && (
          <span className="absolute left-3 top-3 rounded-plate border border-inverse/30 bg-surface-dark/85 px-2.5 py-1 text-caption text-inverse backdrop-blur-xs transition-transform duration-300 group-hover:scale-105">
            {badge}
          </span>
        )}
      </div>
      <h3 className="mt-3 text-subheading font-display group-hover:text-accent transition-colors duration-200">
        {title}
      </h3>
      <p className="mt-1 max-w-[38ch] text-body text-ink/75">{summary}</p>
    </Link>
  );
}

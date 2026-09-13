import { salon } from "@/data/salon";
import StarRating from "./StarRating";

export default function RatingBadge({ className }) {
  const { enabled, value, count, source, url } = salon.rating;

  if (!enabled || !value) return null;

  const label = `${value.toFixed(1)}${count ? ` (${count}${source ? ` ${source}` : ""} reviews)` : ""}`;

  const content = (
    <span className="inline-flex items-center gap-2 text-body">
      <StarRating value={value} size="h-3.5 w-3.5" />
      {label}
    </span>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={className}
        aria-label={`Rated ${label}, opens review source`}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

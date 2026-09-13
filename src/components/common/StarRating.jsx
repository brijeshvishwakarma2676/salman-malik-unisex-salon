import StarIcon from "./StarIcon";
import { cn } from "@/lib/cn";

function StarsRow({ className, size = "h-5 w-5" }) {
  return (
    <div className={cn("flex gap-1", className)}>
      {[0, 1, 2, 3, 4].map((i) => (
        <StarIcon key={i} className={size} />
      ))}
    </div>
  );
}

export default function StarRating({ value, size, className }) {
  const percent = Math.max(0, Math.min(100, (value / 5) * 100));

  return (
    <div className={cn("relative inline-flex", className)} aria-hidden="true">
      <StarsRow size={size} className="text-line" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${percent}%` }}
      >
        <StarsRow size={size} className="text-accent" />
      </div>
    </div>
  );
}

import { cn } from "@/lib/cn";

export function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-control bg-line/50 dark:bg-inverse/10",
        className,
      )}
      {...props}
    />
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 rounded-media border border-line p-5 shadow-panel">
      <Skeleton className="aspect-[4/3] w-full rounded-media" />
      <Skeleton className="h-6 w-3/4 mt-2" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="mt-4 flex justify-between border-t border-line/50 pt-3">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-20" />
      </div>
    </div>
  );
}

export function GalleryGridSkeleton() {
  return (
    <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="w-full aspect-[4/3] rounded-media" />
      ))}
    </div>
  );
}

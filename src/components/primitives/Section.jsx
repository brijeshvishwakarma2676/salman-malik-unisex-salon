import { cn } from "@/lib/cn";

const SURFACES = {
  light: "bg-surface text-ink",
  dark: "texture-weave bg-surface-dark text-inverse",
};

export default function Section({
  as: Tag = "section",
  surface = "light",
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn("py-16 md:py-24", SURFACES[surface], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

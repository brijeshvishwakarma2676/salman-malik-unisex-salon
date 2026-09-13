import { cn } from "@/lib/cn";

export default function Container({
  as: Tag = "div",
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-[1280px] px-5 md:px-10", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

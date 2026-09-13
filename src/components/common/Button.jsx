import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

const VARIANTS = {
  primary: "bg-accent text-inverse hover:bg-accent/90",
  secondary: "bg-transparent border border-current/30 hover:border-current/60",
  ghost: "bg-transparent hover:bg-current/5",
};

const SIZES = {
  md: "px-5 py-3 text-base",
  sm: "px-4 py-2.5 text-sm",
};

export default function Button({
  as,
  to,
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  type,
  ...props
}) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-control font-display font-medium transition duration-200 ease-standard hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]",
    VARIANTS[variant],
    SIZES[size],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  const Tag = as || "button";
  return (
    <Tag
      type={Tag === "button" ? type || "button" : type}
      className={classes}
      {...props}
    >
      {children}
    </Tag>
  );
}

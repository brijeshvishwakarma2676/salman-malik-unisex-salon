import { useLocation, useOutlet } from "react-router-dom";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function PageTransition() {
  const location = useLocation();
  const outlet = useOutlet();
  const reducedMotion = useReducedMotion();

  return (
    <div
      key={location.pathname}
      className={reducedMotion ? undefined : "animate-fade-in"}
    >
      {outlet}
    </div>
  );
}

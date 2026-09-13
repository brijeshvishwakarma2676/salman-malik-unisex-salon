import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "@/components/common/Button";
import { salon } from "@/data/salon";
import { telHref, whatsappHref } from "@/lib/format";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/cn";

const HERO_THRESHOLD = 480;

export default function MobileActionBar() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const scrollY = useScrollPosition();
  const { pathname } = useLocation();
  const [inputFocused, setInputFocused] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    if (!isMobile) return undefined;

    function isFormField(target) {
      return ["INPUT", "TEXTAREA", "SELECT"].includes(target?.tagName);
    }
    function handleFocusIn(event) {
      if (isFormField(event.target)) setInputFocused(true);
    }
    function handleFocusOut(event) {
      if (isFormField(event.target)) setInputFocused(false);
    }
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, [isMobile]);

  if (!isMobile) return null;

  const visible = (!isHome || scrollY > HERO_THRESHOLD) && !inputFocused;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 flex items-center gap-2.5 border-t border-inverse/15 bg-surface-dark px-4 pt-3 text-inverse shadow-plate transition-transform duration-200 ease-standard",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <Button
        href={telHref(salon.phone.tel)}
        variant="secondary"
        className="flex-1 border-inverse/30 text-inverse min-h-12 text-body"
      >
        Call Salon
      </Button>

      {salon.whatsapp.enabled && salon.whatsapp.number ? (
        <a
          href={whatsappHref(salon.whatsapp.number, "Hi! I would like to inquire about appointments.")}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-control bg-[#25D366] text-white shrink-0 shadow-plate"
          aria-label="WhatsApp"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.932 9.932 0 0 0 1.341 5.011l-1.42 5.188 5.312-1.393a9.92 9.92 0 0 0 4.757 1.218h.004c5.505 0 9.988-4.478 9.989-9.984a9.94 9.94 0 0 0-2.923-7.054A9.926 9.926 0 0 0 12.012 2zm.004 18.24h-.003a8.232 8.232 0 0 1-4.204-1.157l-.302-.18-3.125.819.835-3.048-.198-.314a8.235 8.235 0 0 1-1.263-4.364c.001-4.551 3.705-8.254 8.259-8.254a8.204 8.204 0 0 1 5.84 2.42 8.201 8.201 0 0 1 2.417 5.836c-.001 4.552-3.706 8.254-8.256 8.254zm4.526-6.177c-.248-.124-1.468-.724-1.696-.807-.227-.083-.393-.124-.559.124-.165.248-.641.807-.786.973-.145.165-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.231-.738-.658-1.237-1.47-1.382-1.718-.145-.248-.015-.382.109-.505.112-.111.248-.29.373-.434.124-.145.165-.248.248-.414.083-.166.042-.311-.021-.434-.062-.124-.559-1.346-.765-1.843-.201-.485-.406-.419-.559-.427-.145-.008-.31-.01-.476-.01-.166 0-.434.062-.662.311-.227.248-.869.849-.869 2.071 0 1.222.89 2.401 1.014 2.567.124.166 1.752 2.675 4.244 3.753.593.256 1.056.409 1.417.524.595.189 1.137.162 1.564.098.477-.071 1.468-.6 1.675-1.18.207-.579.207-1.076.145-1.18-.062-.104-.227-.166-.475-.29z"/>
          </svg>
        </a>
      ) : null}

      <Button to="/book" variant="primary" className="flex-1 min-h-12 text-body">
        Book Slot
      </Button>
    </div>
  );
}

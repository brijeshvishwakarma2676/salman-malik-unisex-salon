import { salon } from "@/data/salon";
import { telHref, whatsappHref } from "@/lib/format";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function QuickContactBar() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  // On mobile, MobileActionBar handles the bottom bar.
  if (isMobile) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 animate-rise-in">
      {salon.whatsapp.enabled && salon.whatsapp.number && (
        <a
          href={whatsappHref(salon.whatsapp.number, "Hi! I would like to inquire about salon services & availability.")}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-plate transition-transform hover:scale-105 focus-visible:outline-2"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.932 9.932 0 0 0 1.341 5.011l-1.42 5.188 5.312-1.393a9.92 9.92 0 0 0 4.757 1.218h.004c5.505 0 9.988-4.478 9.989-9.984a9.94 9.94 0 0 0-2.923-7.054A9.926 9.926 0 0 0 12.012 2zm.004 18.24h-.003a8.232 8.232 0 0 1-4.204-1.157l-.302-.18-3.125.819.835-3.048-.198-.314a8.235 8.235 0 0 1-1.263-4.364c.001-4.551 3.705-8.254 8.259-8.254a8.204 8.204 0 0 1 5.84 2.42 8.201 8.201 0 0 1 2.417 5.836c-.001 4.552-3.706 8.254-8.256 8.254zm4.526-6.177c-.248-.124-1.468-.724-1.696-.807-.227-.083-.393-.124-.559.124-.165.248-.641.807-.786.973-.145.165-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.231-.738-.658-1.237-1.47-1.382-1.718-.145-.248-.015-.382.109-.505.112-.111.248-.29.373-.434.124-.145.165-.248.248-.414.083-.166.042-.311-.021-.434-.062-.124-.559-1.346-.765-1.843-.201-.485-.406-.419-.559-.427-.145-.008-.31-.01-.476-.01-.166 0-.434.062-.662.311-.227.248-.869.849-.869 2.071 0 1.222.89 2.401 1.014 2.567.124.166 1.752 2.675 4.244 3.753.593.256 1.056.409 1.417.524.595.189 1.137.162 1.564.098.477-.071 1.468-.6 1.675-1.18.207-.579.207-1.076.145-1.18-.062-.104-.227-.166-.475-.29z"/>
          </svg>
        </a>
      )}

      <a
        href={telHref(salon.phone.tel)}
        aria-label="Call salon"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-dark text-inverse shadow-plate border border-line/30 transition-transform hover:scale-105 focus-visible:outline-2"
      >
        <svg className="h-5 w-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      </a>
    </div>
  );
}

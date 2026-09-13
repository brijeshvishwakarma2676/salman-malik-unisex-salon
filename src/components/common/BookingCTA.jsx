import Button from "./Button";
import { salon } from "@/data/salon";
import { telHref, mapsSearchUrl } from "@/lib/format";
import { cn } from "@/lib/cn";

export default function BookingCTA({
  heading = "Ready when you are.",
  intro,
  surface = "light",
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-4 rounded-media border p-6 shadow-panel md:flex-row md:items-center md:justify-between",
        surface === "dark"
          ? "border-inverse/15 bg-surface-dark text-inverse"
          : "border-line bg-surface text-ink",
        className,
      )}
    >
      <div>
        <h3 className="text-subheading">{heading}</h3>
        {intro && (
          <p
            className={cn(
              "mt-1 max-w-[45ch] text-body",
              surface === "dark" ? "text-inverse/75" : "text-ink/75",
            )}
          >
            {intro}
          </p>
        )}
      </div>
      <div className="flex flex-wrap gap-3">
        <Button to="/book" variant="primary">
          Book an appointment
        </Button>
        <Button
          href={telHref(salon.phone.tel)}
          variant="secondary"
          className={surface === "dark" ? "text-inverse" : undefined}
        >
          Call {salon.phone.display}
        </Button>
        <Button
          href={mapsSearchUrl(salon.mapsQuery)}
          variant="ghost"
          target="_blank"
          rel="noreferrer"
          className={surface === "dark" ? "text-inverse" : undefined}
        >
          Get directions
        </Button>
      </div>
    </div>
  );
}

import { useState } from "react";
import Container from "@/components/primitives/Container";
import Button from "@/components/common/Button";
import { salon } from "@/data/salon";
import { telHref, mapsSearchUrl } from "@/lib/format";

export default function LocationSection() {
  const [copied, setCopied] = useState(false);
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(salon.mapsQuery)}&output=embed`;

  const fullAddress = `${salon.address.line1}, ${salon.address.line2}, ${salon.address.locality}`;

  function copyAddress() {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="bg-surface py-16 md:py-24">
      <Container className="grid gap-8 md:grid-cols-12 md:items-stretch">
        <div className="overflow-hidden rounded-media border border-line shadow-panel md:col-span-7">
          <iframe
            title="Map to Salman Malik Unisex Salon"
            src={embedSrc}
            className="h-80 w-full border-0 md:h-full min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 rounded-media border border-line bg-surface p-6 shadow-panel md:col-span-5">
          <span className="w-max rounded-plate bg-accent-muted px-2.5 py-1 text-caption font-display font-medium text-accent">
            Prime Location
          </span>
          <h2 className="text-heading">Find us in Andheri West</h2>
          
          <div className="rounded-control bg-surface-dark/5 p-4 border border-line/60">
            <p className="font-display text-subheading font-medium">Salon Address</p>
            <p className="mt-1 text-body text-ink/80">{fullAddress}</p>
            <button
              type="button"
              onClick={copyAddress}
              className="mt-2 text-caption text-accent underline hover:opacity-80 transition-opacity cursor-pointer"
            >
              {copied ? "✓ Address copied!" : "Copy full address"}
            </button>
          </div>

          <div className="text-body text-ink/75">
            <p className="font-display font-medium text-ink">Hours & Timings</p>
            <p className="text-caption">{salon.hours ?? "Call ahead to confirm timings & slot availability"}</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              href={mapsSearchUrl(salon.mapsQuery)}
              variant="primary"
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </Button>
            <Button href={telHref(salon.phone.tel)} variant="secondary">
              Call {salon.phone.display}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

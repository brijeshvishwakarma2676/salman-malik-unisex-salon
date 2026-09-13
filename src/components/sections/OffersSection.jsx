import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import ImageWithFallback from "@/components/common/ImageWithFallback";
import { offers } from "@/data/offers";
import { formatDateReadable } from "@/lib/format";

export default function OffersSection() {
  if (offers.length === 0) return null;

  return (
    <section className="bg-surface py-16 md:py-24">
      <Container>
        <SectionHeading
          heading="Current Special Offers"
          intro="Exclusive salon & festive packages live for a limited time."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-center">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="grid gap-6 md:col-span-12 md:grid-cols-12 rounded-media border border-accent/30 bg-accent-muted/60 p-6 shadow-panel"
            >
              {offer.image && (
                <div className="overflow-hidden rounded-media md:col-span-5 border border-line">
                  <ImageWithFallback
                    image={offer.image}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col justify-center md:col-span-7">
                <span className="w-max rounded-plate bg-accent px-2.5 py-1 text-caption font-display font-medium text-inverse">
                  ★ Limited Time Offer
                </span>
                <h3 className="mt-3 font-display text-heading font-semibold text-ink">
                  {offer.headline}
                </h3>
                {offer.detail && (
                  <p className="mt-2 text-body text-ink/80">{offer.detail}</p>
                )}
                {offer.validUntil && (
                  <p className="mt-3 text-caption font-display text-accent font-medium">
                    Valid until {formatDateReadable(offer.validUntil)}
                  </p>
                )}
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button to="/book" variant="primary">
                    Claim Offer & Book
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

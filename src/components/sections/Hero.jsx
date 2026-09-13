import { Link } from "react-router-dom";
import Button from "@/components/common/Button";
import ImageWithFallback from "@/components/common/ImageWithFallback";
import Container from "@/components/primitives/Container";
import { salon } from "@/data/salon";
import { telHref } from "@/lib/format";

const HERO_QUICK_LINKS = [
  { label: "Hair Cutting & Styling", to: "/services/hair" },
  { label: "Bridal & Party Make-up", to: "/services/makeup" },
  { label: "Hair & Nail Extensions", to: "/services/extensions" },
  { label: "Tattoo & Piercing", to: "/services/tattoo-piercing" },
  { label: "Beauty Academy Masterclass", to: "/academy" },
];

export default function Hero() {
  return (
    <section className="texture-weave relative flex min-h-[calc(100dvh-4rem)] flex-col justify-end overflow-hidden bg-surface-dark text-inverse md:min-h-0 md:justify-center md:py-20">
      <Container className="grid gap-8 py-8 md:grid-cols-12 md:items-center md:py-0">
        <div className="order-2 md:order-1 md:col-span-7">
          {/* Trust Rating Badge */}
          <div className="animate-rise-in inline-flex items-center gap-2 rounded-full border border-inverse/20 bg-inverse/10 px-3.5 py-1 text-caption text-inverse/90">
            <span className="text-amber-400">★ 4.8</span>
            <span className="text-inverse/40">•</span>
            <span>Unisex Salon & Beauty Academy</span>
            <span className="text-inverse/40">•</span>
            <span className="text-accent-muted">Andheri West</span>
          </div>

          <h1 className="animate-rise-in mt-4 text-display-1">
            Trained hands, real chairs, Andheri West.
          </h1>
          <p
            className="animate-rise-in mt-4 max-w-[44ch] text-body text-inverse/80"
            style={{ animationDelay: "90ms" }}
          >
            A working unisex salon and academy on J.P. Road — hair, make-up,
            extensions, tattoo & piercing, taught and done on the same floor.
          </p>

          <div
            className="animate-rise-in mt-8 flex flex-wrap gap-4"
            style={{ animationDelay: "180ms" }}
          >
            <Button to="/book" variant="primary">
              Book an appointment
            </Button>
            <Button
              to="/services"
              variant="secondary"
              className="border-inverse/30 text-inverse hover:border-inverse/60"
            >
              Explore services
            </Button>
          </div>

          {/* Quick Service Jump Strip */}
          <div
            className="animate-rise-in mt-8 border-t border-inverse/15 pt-6"
            style={{ animationDelay: "240ms" }}
          >
            <p className="text-caption font-display text-inverse/60">Quick jump to offering:</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {HERO_QUICK_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-plate border border-inverse/20 bg-inverse/5 px-2.5 py-1 text-caption text-inverse/85 hover:border-inverse/50 hover:bg-inverse/15 transition-all"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          className="animate-scale-in relative order-1 md:order-2 md:col-span-5"
          style={{ animationDelay: "60ms" }}
        >
          <div className="overflow-hidden rounded-media shadow-plate border border-inverse/20">
            <ImageWithFallback
              image={{
                src: "/images/real/mht/image.png",
                alt: "A stylist cutting hair with a comb and clipper",
                width: 1000,
                height: 1250,
                aspect: "portrait",
                icon: "hair",
              }}
              loading="eager"
              fetchPriority="high"
              className="w-full transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div
            className="animate-rise-in absolute -bottom-4 left-4 right-4 rounded-plate border border-inverse/25 bg-surface-dark/95 px-4 py-3 shadow-plate backdrop-blur-md md:-right-6 md:left-auto md:bottom-6 md:w-64"
            style={{ animationDelay: "300ms" }}
          >
            <p className="text-caption text-inverse/70">
              {salon.address.line2}, {salon.address.locality}
            </p>
            <a
              href={telHref(salon.phone.tel)}
              className="mt-1 block text-body font-display hover:text-accent-muted transition-colors"
            >
              Call {salon.phone.display}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

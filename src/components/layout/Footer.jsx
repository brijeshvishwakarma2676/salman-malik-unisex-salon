import { Link } from "react-router-dom";
import Container from "@/components/primitives/Container";
import { salon } from "@/data/salon";
import { footerNav } from "@/data/nav";
import { telHref, mapsSearchUrl, whatsappHref } from "@/lib/format";
import RatingBadge from "@/components/common/RatingBadge";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface pb-28 pt-12 text-ink md:pb-12">
      <Container className="flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-[38ch]">
          <p className="font-display text-lg font-semibold">{salon.name}</p>
          <p className="mt-2 text-body text-ink/75">
            {salon.address.line1}, {salon.address.line2},{" "}
            {salon.address.locality}
          </p>
          <p className="mt-1 text-body text-ink/75">
            {salon.hours ?? "Call to confirm timings"}
          </p>
          <RatingBadge className="mt-3 block" />
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2">
          {footerNav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-body text-ink/75 transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2">
          <a href={telHref(salon.phone.tel)} className="text-body">
            Call {salon.phone.display}
          </a>
          <a
            href={mapsSearchUrl(salon.mapsQuery)}
            target="_blank"
            rel="noreferrer"
            className="text-body"
          >
            Get directions
          </a>
          {salon.social.instagram && (
            <a
              href={salon.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-body"
            >
              Instagram
            </a>
          )}
          {salon.social.facebook && (
            <a
              href={salon.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-body"
            >
              Facebook
            </a>
          )}
          {salon.social.youtube && (
            <a
              href={salon.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="text-body"
            >
              YouTube
            </a>
          )}
          {salon.whatsapp.enabled && salon.whatsapp.number && (
            <a
              href={whatsappHref(salon.whatsapp.number)}
              target="_blank"
              rel="noreferrer"
              className="text-body"
            >
              WhatsApp
            </a>
          )}
        </div>
      </Container>
    </footer>
  );
}

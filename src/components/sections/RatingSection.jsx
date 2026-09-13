import Container from "@/components/primitives/Container";
import StarRating from "@/components/common/StarRating";
import { salon } from "@/data/salon";

export default function RatingSection() {
  const { enabled, value, count, source, url } = salon.rating;

  if (!enabled || !value) return null;

  return (
    <section className="texture-weave bg-surface-dark py-16 text-inverse md:py-24">
      <Container className="flex flex-col items-center text-center">
        <p className="font-display text-display-1">{value.toFixed(1)}</p>
        <StarRating value={value} size="h-6 w-6" className="mt-3" />
        <p className="mt-4 max-w-[45ch] text-body text-inverse/75">
          {count
            ? `Based on ${count}${source ? ` ${source}` : ""} reviews`
            : "Rated by real clients"}
        </p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 text-body underline decoration-inverse/40 underline-offset-4 hover:decoration-inverse"
          >
            Read the reviews
          </a>
        )}
      </Container>
    </section>
  );
}

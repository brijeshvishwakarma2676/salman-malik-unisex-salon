import Seo from "@/components/common/Seo";
import Container from "@/components/primitives/Container";
import Button from "@/components/common/Button";
import { seo } from "@/data/seo";

export default function NotFound() {
  return (
    <>
      <Seo {...seo.notFound} noindex />
      <section className="texture-weave flex min-h-[70dvh] items-center bg-surface-dark text-inverse">
        <Container className="text-center">
          <p className="font-display text-display-1">404</p>
          <h1 className="mt-2 text-heading">This page doesn't exist.</h1>
          <p className="mt-3 text-body text-inverse/75">
            Whatever you were looking for isn't here — try the homepage or call
            the salon directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/" variant="primary">
              Back to homepage
            </Button>
            <Button
              to="/contact"
              variant="secondary"
              className="border-inverse/30 text-inverse hover:border-inverse/60"
            >
              Contact us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

import Seo from "@/components/common/Seo";
import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import SectionHeading from "@/components/common/SectionHeading";
import ImageWithFallback from "@/components/common/ImageWithFallback";
import GalleryGrid from "@/components/common/GalleryGrid";
import BookingCTA from "@/components/common/BookingCTA";
import CertificateVerification from "@/components/sections/CertificateVerification";
import AcademyShowcaseSection from "@/components/sections/AcademyShowcaseSection";
import {
  academyIntro,
  learningExperience,
  coursePlaceholders,
  certificationDay,
} from "@/data/academy";
import { getGalleryByFilter } from "@/data/gallery";
import { seo } from "@/data/seo";

export default function Academy() {
  const showcasePhotos = [
    ...getGalleryByFilter("academy"),
    ...getGalleryByFilter("student"),
  ];

  return (
    <>
      <Seo {...seo.academy} />

      <Section surface="dark" className="pb-14 pt-14 md:pt-20">
        <Container className="grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="text-caption text-inverse/70">Salman Malik Academy</p>
            <h1 className="mt-2 text-display-2">{academyIntro.heading}</h1>
            <p className="mt-4 max-w-[55ch] text-body text-inverse/80">
              {academyIntro.body}
            </p>
          </div>
          <div className="md:col-span-5">
            <ImageWithFallback image={academyIntro.image} />
          </div>
        </Container>
      </Section>

      <Section surface="light">
        <Container>
          <SectionHeading heading={learningExperience.heading} />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {learningExperience.points.map((point, index) => (
              <div
                key={point.title}
                className={
                  index > 0
                    ? "border-t border-line pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0"
                    : ""
                }
              >
                <h3 className="text-subheading">{point.title}</h3>
                <p className="mt-2 text-body text-ink/75">{point.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Real Academy Floor & Training Showcase Section */}
      <AcademyShowcaseSection surface="light" />

      <Section surface="dark">
        <Container>
          <SectionHeading heading={certificationDay.heading} surface="dark" />
          <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-center">
            <ImageWithFallback
              image={certificationDay.image}
              className="md:col-span-7"
            />
            <p className="text-body text-inverse/80 md:col-span-5">
              {certificationDay.body}
            </p>
          </div>
        </Container>
      </Section>

      {/* Certificate Verification Portal */}
      <CertificateVerification surface="light" />

      <Section surface="light">
        <Container>
          <SectionHeading
            heading="Student work"
            intro="A look at what students are practising on the floor."
          />
          <div className="mt-10">
            <GalleryGrid images={showcasePhotos} />
          </div>
        </Container>
      </Section>

      <Section surface="light" className="pt-0">
        <Container>
          <SectionHeading
            heading="Courses"
            intro="Course structure, duration and fees are confirmed in person — call to ask what's next."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {coursePlaceholders.map((course) => (
              <div
                key={course.slug}
                className="rounded-media border border-dashed border-line p-6"
              >
                <h3 className="text-subheading">{course.name}</h3>
                <p className="mt-2 text-caption italic text-ink/60">
                  {course.summary}
                </p>
              </div>
            ))}
          </div>
          <BookingCTA
            className="mt-16"
            heading="Interested in training here?"
            intro="Call to ask about the next batch."
          />
        </Container>
      </Section>
    </>
  );
}

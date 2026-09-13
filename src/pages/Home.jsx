import Seo from "@/components/common/Seo";
import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import BrandIntro from "@/components/sections/BrandIntro";
import FeaturedServices from "@/components/sections/FeaturedServices";
import TransformationsSection from "@/components/sections/TransformationsSection";
import SignatureExperience from "@/components/sections/SignatureExperience";
import GalleryPreview from "@/components/sections/GalleryPreview";
import AcademyPreview from "@/components/sections/AcademyPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import LocationSection from "@/components/sections/LocationSection";
import OffersSection from "@/components/sections/OffersSection";
import { seo } from "@/data/seo";

export default function Home() {
  return (
    <>
      <Seo {...seo.home} />
      <Hero />
      <OffersSection />
      <StatsSection surface="dark" />
      <BrandIntro />
      <FeaturedServices />
      <TransformationsSection surface="light" />
      <SignatureExperience />
      <GalleryPreview />
      <AcademyPreview />
      <TestimonialsSection surface="light" />
      <FAQSection surface="dark" />
      <LocationSection />
    </>
  );
}

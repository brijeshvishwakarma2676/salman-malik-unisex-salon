import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import { salon } from "@/data/salon";

const ServicesOverview = lazy(() => import("@/pages/ServicesOverview"));
const ServiceCategory = lazy(() => import("@/pages/ServiceCategory"));
const Academy = lazy(() => import("@/pages/Academy"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Book = lazy(() => import("@/pages/Book"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: salon.name,
  telephone: salon.phone.tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${salon.address.line1}, ${salon.address.line2}`,
    addressLocality: "Andheri West",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [salon.social.instagram, salon.social.facebook].filter(Boolean),
};

function withSuspense(Page) {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

export default function App() {
  return (
    <>
      <Helmet>
        <html lang="en-IN" />
        <meta name="theme-color" content="#0F2E2A" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessJsonLd)}
        </script>
      </Helmet>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={withSuspense(ServicesOverview)} />
          <Route
            path="services/:category"
            element={withSuspense(ServiceCategory)}
          />
          <Route path="academy" element={withSuspense(Academy)} />
          <Route path="gallery" element={withSuspense(Gallery)} />
          <Route path="about" element={withSuspense(About)} />
          <Route path="contact" element={withSuspense(Contact)} />
          <Route path="book" element={withSuspense(Book)} />
          <Route path="*" element={withSuspense(NotFound)} />
        </Route>
      </Routes>
    </>
  );
}

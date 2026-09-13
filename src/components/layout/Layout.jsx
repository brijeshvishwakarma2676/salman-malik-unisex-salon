import Header from "./Header";
import Footer from "./Footer";
import MobileActionBar from "./MobileActionBar";
import QuickContactBar from "./QuickContactBar";
import BrandIntroLoader from "./BrandIntroLoader";
import ScrollToTop from "./ScrollToTop";
import PageTransition from "./PageTransition";

export default function Layout() {
  return (
    <>
      <BrandIntroLoader />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-accent focus:px-4 focus:py-2 focus:text-inverse"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <PageTransition />
      </main>
      <Footer />
      <MobileActionBar />
      <QuickContactBar />
    </>
  );
}

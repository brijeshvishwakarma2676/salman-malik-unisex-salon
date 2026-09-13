import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Seo from "@/components/common/Seo";
import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import ServiceCard from "@/components/common/ServiceCard";
import BookingCTA from "@/components/common/BookingCTA";
import PackagesSection from "@/components/sections/PackagesSection";
import Button from "@/components/common/Button";
import { serviceCategories, services } from "@/data/services";
import { seo } from "@/data/seo";
import { cn } from "@/lib/cn";

const CATEGORY_TABS = [
  { slug: "all", name: "All Categories" },
  { slug: "hair", name: "Hair" },
  { slug: "makeup", name: "Make-up" },
  { slug: "extensions", name: "Extensions" },
  { slug: "tattoo", name: "Tattoo & Piercing" },
];

export default function ServicesOverview() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedServices, setSelectedServices] = useState([]);
  const navigate = useNavigate();

  const filteredServices = services.filter((service) => {
    const matchesCat =
      activeCategory === "all" || service.category === activeCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (service.description &&
        service.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const toggleSelectService = (serviceName) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName],
    );
  };

  const handleProceedToBook = () => {
    navigate("/book", {
      state: { selectedService: selectedServices.join(", ") },
    });
  };

  return (
    <>
      <Seo {...seo.services} />
      <Section surface="dark" className="pb-10 pt-14 md:pt-20">
        <Container>
          <h1 className="text-display-2">Salon & Academy Services</h1>
          <p className="mt-3 max-w-[60ch] text-body text-inverse/80">
            Explore cuts, colouring, bridal make-up, extensions, tattoo & piercing options. Select your desired services to request a slot.
          </p>

          {/* Interactive Search & Filter Controls */}
          <div className="mt-8 flex flex-col gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. Keratin, Bridal, Haircut, Piercing)..."
              className="min-h-11 w-full rounded-control border border-inverse/30 bg-inverse/10 px-4 text-body text-inverse placeholder:text-inverse/50 focus-visible:outline-2"
            />
            <div className="flex overflow-x-auto pb-1 text-nowrap gap-2 sm:flex-wrap">
              {CATEGORY_TABS.map((tab) => (
                <button
                  key={tab.slug}
                  type="button"
                  onClick={() => setActiveCategory(tab.slug)}
                  className={cn(
                    "rounded-plate px-3.5 py-1.5 text-caption font-display transition-colors cursor-pointer",
                    activeCategory === tab.slug
                      ? "bg-inverse text-ink font-semibold"
                      : "border border-inverse/25 text-inverse/80 hover:border-inverse/50",
                  )}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="light">
        <Container>
          {/* Main Category Banner Grid (when no search query) */}
          {!searchQuery && activeCategory === "all" && (
            <div className="mb-14 grid gap-6 md:grid-cols-2">
              {serviceCategories.map((category) => (
                <ServiceCard
                  key={category.slug}
                  to={category.path}
                  image={category.image}
                  badge={category.name}
                  title={category.name}
                  summary={category.summary}
                />
              ))}
            </div>
          )}

          <div className="flex items-center justify-between">
            <h2 className="text-heading font-display">
              {searchQuery || activeCategory !== "all"
                ? `Matching Services (${filteredServices.length})`
                : "All Detailed Offerings"}
            </h2>
            {selectedServices.length > 0 && (
              <span className="rounded-plate bg-accent-muted px-3 py-1 text-caption font-display font-medium text-accent">
                {selectedServices.length} selected for estimate
              </span>
            )}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {filteredServices.map((item) => {
              const isSelected = selectedServices.includes(item.name);
              return (
                <div
                  key={item.slug}
                  className={cn(
                    "relative flex flex-col justify-between rounded-media border bg-surface p-5 transition-all shadow-panel",
                    isSelected ? "border-accent ring-1 ring-accent" : "border-line",
                  )}
                >
                  <div>
                    <ServiceCard
                      to="/book"
                      image={item.image}
                      title={item.name}
                      summary={item.summary}
                    />
                    {item.includes && (
                      <ul className="mt-3 flex flex-wrap gap-1.5 text-caption text-ink/70">
                        {item.includes.map((inc, i) => (
                          <li
                            key={i}
                            className="rounded-plate bg-line/40 px-2 py-0.5"
                          >
                            ✓ {inc}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-3">
                    <button
                      type="button"
                      onClick={() => toggleSelectService(item.name)}
                      className={cn(
                        "rounded-plate px-3 py-1 text-caption font-display font-medium transition-colors cursor-pointer",
                        isSelected
                          ? "bg-accent text-inverse"
                          : "border border-line bg-surface hover:bg-line/40 text-ink",
                      )}
                    >
                      {isSelected ? "✓ Selected" : "+ Add to Estimate"}
                    </button>
                    <Button
                      to="/book"
                      state={{ selectedService: item.name }}
                      variant="secondary"
                      className="px-3 py-1 text-caption"
                    >
                      Book This
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Consultation Tray when items are selected */}
          {selectedServices.length > 0 && (
            <div className="sticky bottom-6 z-30 mt-10 flex flex-wrap items-center justify-between gap-4 rounded-media border border-accent bg-surface-dark p-4 text-inverse shadow-plate animate-rise-in">
              <div>
                <p className="font-display font-medium">
                  {selectedServices.length} Service(s) Selected:
                </p>
                <p className="text-caption text-inverse/80">
                  {selectedServices.join(", ")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedServices([])}
                  className="text-caption underline text-inverse/70 hover:text-inverse cursor-pointer"
                >
                  Clear
                </button>
                <Button
                  onClick={handleProceedToBook}
                  variant="primary"
                >
                  Proceed to Book Selected
                </Button>
              </div>
            </div>
          )}

          <BookingCTA
            className="mt-16"
            intro="Not sure which service fits? Call and we'll talk it through."
          />
        </Container>
      </Section>
      <PackagesSection />
    </>
  );
}

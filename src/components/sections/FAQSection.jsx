import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/common/SectionHeading";
import FAQItem from "@/components/common/FAQItem";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/cn";

const CATEGORIES = ["All", "Booking", "Services", "Academy", "Location"];

export default function FAQSection({ surface = "light" }) {
  const [openIds, setOpenIds] = useState([faqItems[0]?.id]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = faqItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const expandAll = () => {
    setOpenIds(filteredItems.map((item) => item.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      className={cn(
        "py-16 md:py-24",
        surface === "dark"
          ? "texture-weave bg-surface-dark text-inverse"
          : "bg-surface text-ink",
      )}
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Container className="max-w-[760px]">
        <SectionHeading
          heading="Common questions"
          intro="Straight answers — search or filter below."
          surface={surface}
        />

        {/* Search & Category Bar */}
        <div className="mt-8 flex flex-col gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., booking, prices, academy)..."
            className={cn(
              "min-h-11 w-full rounded-control border px-4 text-body",
              surface === "dark"
                ? "border-inverse/25 bg-inverse/10 text-inverse placeholder:text-inverse/50"
                : "border-line bg-surface text-ink placeholder:text-ink/50",
            )}
          />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex overflow-x-auto pb-1 text-nowrap gap-2 sm:flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "rounded-plate px-3 py-1.5 text-caption font-display transition-colors cursor-pointer",
                    selectedCategory === cat
                      ? surface === "dark"
                        ? "bg-inverse text-ink font-semibold"
                        : "bg-surface-dark text-inverse font-semibold"
                      : surface === "dark"
                        ? "border border-inverse/20 text-inverse/70 hover:border-inverse/40"
                        : "border border-line text-ink/70 hover:border-ink/40",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-caption">
              <button
                type="button"
                onClick={expandAll}
                className={cn(
                  "underline hover:opacity-80 cursor-pointer",
                  surface === "dark" ? "text-inverse/70" : "text-ink/70",
                )}
              >
                Expand all
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={collapseAll}
                className={cn(
                  "underline hover:opacity-80 cursor-pointer",
                  surface === "dark" ? "text-inverse/70" : "text-ink/70",
                )}
              >
                Collapse all
              </button>
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="mt-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <FAQItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                open={openIds.includes(item.id)}
                onToggle={() => toggleItem(item.id)}
                surface={surface}
              />
            ))
          ) : (
            <p className={cn("py-8 text-center text-body", surface === "dark" ? "text-inverse/60" : "text-ink/60")}>
              No matching questions found for "{searchQuery}". Call us for any specific query!
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

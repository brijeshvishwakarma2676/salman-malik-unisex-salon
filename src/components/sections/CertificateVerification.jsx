import { useState } from "react";
import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import { cn } from "@/lib/cn";

// Sample verified certificate registry (for verification lookup demonstration)
const CERTIFICATE_REGISTRY = {
  "SM-2026-001": {
    studentName: "Aarav Sharma",
    course: "Advance Hair Styling & Cutting Masterclass",
    batch: "First Batch 2026",
    issuedDate: "2026-02-15",
    grade: "Distinction",
    status: "Verified",
  },
  "SM-2026-002": {
    studentName: "Priya Patel",
    course: "Pro Bridal & Occasion Make-Up Certification",
    batch: "First Batch 2026",
    issuedDate: "2026-02-15",
    grade: "Distinction",
    status: "Verified",
  },
  "SM-2025-089": {
    studentName: "Rohan Verma",
    course: "Tattoo Artistry & Hygiene Protocol",
    batch: "Autumn Batch 2025",
    issuedDate: "2025-11-20",
    grade: "Certified",
    status: "Verified",
  },
};

export default function CertificateVerification({ surface = "light" }) {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    const cleaned = certId.trim().toUpperCase();
    setSearched(true);
    if (CERTIFICATE_REGISTRY[cleaned]) {
      setResult({ ...CERTIFICATE_REGISTRY[cleaned], id: cleaned });
    } else {
      setResult(null);
    }
  }

  function fillSample(id) {
    setCertId(id);
    setSearched(true);
    setResult({ ...CERTIFICATE_REGISTRY[id], id });
  }

  return (
    <section
      className={cn(
        "py-16 md:py-24 border-t",
        surface === "dark"
          ? "texture-weave bg-surface-dark text-inverse border-inverse/15"
          : "bg-surface text-ink border-line",
      )}
    >
      <Container className="max-w-[760px]">
        <SectionHeading
          heading="Verify Student Certificate"
          intro="Check the validity of certificates issued by Salman Malik Beauty Academy."
          surface={surface}
        />

        <form onSubmit={handleSearch} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={certId}
            onChange={(e) => setCertId(e.target.value)}
            placeholder="Enter Certificate Serial (e.g. SM-2026-001)"
            className={cn(
              "min-h-11 flex-1 rounded-control border px-4 text-body font-display uppercase tracking-wider",
              surface === "dark"
                ? "border-inverse/30 bg-inverse/10 text-inverse placeholder:text-inverse/50"
                : "border-line bg-surface text-ink placeholder:text-ink/50",
            )}
          />
          <Button type="submit" variant="primary" className="shrink-0">
            Verify Now
          </Button>
        </form>

        {/* Quick sample chips */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-caption">
          <span className={surface === "dark" ? "text-inverse/60" : "text-ink/60"}>
            Try sample serials:
          </span>
          {Object.keys(CERTIFICATE_REGISTRY).map((sampleId) => (
            <button
              key={sampleId}
              type="button"
              onClick={() => fillSample(sampleId)}
              className={cn(
                "rounded-plate px-2 py-0.5 font-display text-caption transition-colors cursor-pointer",
                surface === "dark"
                  ? "bg-inverse/15 text-inverse hover:bg-inverse/25"
                  : "bg-line/50 text-ink hover:bg-line",
              )}
            >
              {sampleId}
            </button>
          ))}
        </div>

        {/* Verification Result Card */}
        {searched && (
          <div className="mt-8 animate-fade-in">
            {result ? (
              <div className="rounded-media border border-emerald-600/30 bg-emerald-950/20 p-6 shadow-panel backdrop-blur-xs">
                <div className="flex items-center justify-between border-b border-emerald-600/20 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-inverse">
                      ✓
                    </span>
                    <h3 className="font-display font-semibold text-emerald-700 dark:text-emerald-400">
                      Official Certificate Verified
                    </h3>
                  </div>
                  <span className="rounded-plate bg-emerald-600/20 px-2.5 py-1 font-display text-caption text-emerald-800 dark:text-emerald-300">
                    Serial: {result.id}
                  </span>
                </div>

                <dl className="mt-4 grid grid-cols-1 gap-y-3 gap-x-6 sm:grid-cols-2 text-body">
                  <div>
                    <dt className="text-caption text-ink/60 dark:text-inverse/60 font-display">
                      Student Name
                    </dt>
                    <dd className="font-semibold">{result.studentName}</dd>
                  </div>
                  <div>
                    <dt className="text-caption text-ink/60 dark:text-inverse/60 font-display">
                      Course Completed
                    </dt>
                    <dd className="font-semibold">{result.course}</dd>
                  </div>
                  <div>
                    <dt className="text-caption text-ink/60 dark:text-inverse/60 font-display">
                      Training Batch
                    </dt>
                    <dd>{result.batch}</dd>
                  </div>
                  <div>
                    <dt className="text-caption text-ink/60 dark:text-inverse/60 font-display">
                      Issue Date
                    </dt>
                    <dd>{result.issuedDate}</dd>
                  </div>
                  <div>
                    <dt className="text-caption text-ink/60 dark:text-inverse/60 font-display">
                      Grade / Status
                    </dt>
                    <dd className="font-medium text-emerald-600 dark:text-emerald-400">
                      {result.grade}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-caption text-ink/60 dark:text-inverse/60 font-display">
                      Issuing Authority
                    </dt>
                    <dd>Salman Malik Beauty Academy</dd>
                  </div>
                </dl>
              </div>
            ) : (
              <div className="rounded-media border border-amber-500/30 bg-amber-950/10 p-6 text-center shadow-panel">
                <p className="font-display font-medium text-amber-800 dark:text-amber-300">
                  No certificate record found for "{certId}"
                </p>
                <p className="mt-2 text-caption text-ink/70 dark:text-inverse/70 max-w-[50ch] mx-auto">
                  Please double-check the serial number on the certificate or call our administration office to verify manually.
                </p>
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}

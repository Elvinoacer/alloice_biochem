"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Cpu, ArrowRight, X, FileCheck2 } from "lucide-react";
import { SECONDARY_INVESTIGATIONS, InvestigationItem } from "@/data/portfolioData";

export default function InvestigationsSection() {
  const [selectedInvestigation, setSelectedInvestigation] =
    useState<InvestigationItem | null>(null);

  React.useEffect(() => {
    if (!selectedInvestigation) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedInvestigation(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedInvestigation]);

  const getTagBadgeClass = (tagColor: "amber" | "primary" | "dew") => {
    switch (tagColor) {
      case "amber":
        return "bg-amber-extract/15 text-amber-extract border-amber-extract/35";
      case "primary":
        return "bg-primary/15 text-primary border-primary/35";
      case "dew":
        return "bg-dew/15 text-dew border-dew/35";
    }
  };

  return (
    <section
      id="investigations"
      className="py-16 sm:py-24 border-b border-primary/15 relative bg-[#001711]/60 backdrop-blur-md"
      data-purpose="secondary-investigations"
      aria-labelledby="investigations-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-14 reveal-init">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase chamber-capsule px-3.5 py-1.5 rounded-full border border-primary/30">
            <Cpu className="w-3.5 h-3.5 text-primary" />
            <span>Enzymatic Rhythms &amp; Pathways</span>
          </div>
          <h2
            id="investigations-heading"
            className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mt-3"
          >
            Secondary Living Investigations
          </h2>
          <p className="font-sans text-dew/85 text-sm sm:text-base mt-2">
            Interconnecting wet-bench enzymology, computational structural
            biology, and agricultural post-harvest sustainability.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECONDARY_INVESTIGATIONS.map((investigation, idx) => (
            <article
              key={investigation.id}
              className={`rounded-2xl chamber-capsule chlorophyll-glass-hover border border-primary/20 overflow-hidden flex flex-col justify-between transition-all duration-300 group reveal-init stagger-${idx + 1}`}
            >
              {/* Figure Image Banner */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-dim/80">
                <Image
                  src={investigation.image}
                  alt={investigation.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover object-center filter saturate-[1.1] group-hover:scale-108 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#001711] via-[#001711]/45 to-transparent"
                  aria-hidden="true"
                />

                {/* Floating Experiment Identifier & Quantitative Metric */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] tracking-wider uppercase bg-surface-dim/90 backdrop-blur-md text-dew px-2.5 py-1 rounded-md border border-primary/30 shadow">
                    {investigation.figureNumber}
                  </span>
                  <span className="font-mono text-[10px] tracking-wider font-semibold bg-surface-dim/90 backdrop-blur-md text-primary px-2.5 py-1 rounded-md border border-primary/30 shadow">
                    {investigation.keyMetric}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span
                      className={`px-2.5 py-1 rounded-md border font-semibold ${getTagBadgeClass(
                        investigation.tagColor
                      )}`}
                    >
                      {investigation.category}
                    </span>
                    <span className="text-dew/70 font-medium">
                      {investigation.type}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-white leading-snug group-hover:text-primary transition-colors">
                    {investigation.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-leaf/80 leading-relaxed">
                    {investigation.description}
                  </p>

                  <div className="p-3.5 rounded-xl chamber-card font-mono text-xs text-dew space-y-1.5 border border-primary/10">
                    {investigation.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-1.5">
                        <span className="text-primary">•</span>
                        <span>{bullet.replace(/^•\s*/, "")}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-primary/20 font-mono text-xs flex items-center justify-between gap-2">
                  <span className="text-primary/90 truncate max-w-[180px] sm:max-w-[220px]">
                    {investigation.technique}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedInvestigation(investigation)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container/80 text-primary hover:text-white hover:bg-primary/20 border border-primary/30 transition-colors text-[11px] cursor-pointer shrink-0 min-h-[36px]"
                    aria-label={`Inspect full experimental protocol for ${investigation.title}`}
                  >
                    <span>Protocol</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Investigation Details Modal */}
      {selectedInvestigation && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="protocol-modal-title"
          onClick={() => setSelectedInvestigation(null)}
        >
          <div
            className="chamber-capsule rounded-3xl max-w-2xl w-full p-5 sm:p-8 space-y-6 border border-primary/40 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedInvestigation(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-surface-container/80 text-dew hover:text-white border border-primary/25 cursor-pointer z-10"
              aria-label="Close protocol details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header Media Frame */}
            <div className="relative w-full h-[180px] sm:h-[220px] rounded-2xl overflow-hidden border border-primary/30 -mt-2">
              <Image
                src={selectedInvestigation.image}
                alt={selectedInvestigation.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 650px"
                className="object-cover object-center filter saturate-[1.1]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="font-mono text-xs text-primary font-bold bg-surface-dim/90 px-3 py-1 rounded-md border border-primary/30">
                  {selectedInvestigation.figureNumber}
                </span>
                <span className="font-mono text-xs text-amber-extract font-bold bg-surface-dim/90 px-3 py-1 rounded-md border border-amber-extract/30">
                  {selectedInvestigation.keyMetric}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-xs uppercase tracking-widest text-primary flex items-center gap-2">
                <FileCheck2 className="w-4 h-4" />
                <span>Bench SOP &amp; Experimental Architecture</span>
              </div>
              <h3
                id="protocol-modal-title"
                className="font-serif text-2xl text-white font-medium"
              >
                {selectedInvestigation.title}
              </h3>
              <div className="font-mono text-xs text-dew/80">
                {selectedInvestigation.category} · {selectedInvestigation.technique}
              </div>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="p-4 rounded-xl chamber-card space-y-2 border border-primary/20">
                <div className="text-primary uppercase font-bold text-[11px]">
                  Target Biological Pathway
                </div>
                <div className="text-leaf/90 leading-relaxed font-sans text-sm">
                  {selectedInvestigation.fullProtocol.targetPathway}
                </div>
              </div>

              <div className="p-4 rounded-xl chamber-card space-y-2 border border-primary/20">
                <div className="text-amber-extract uppercase font-bold text-[11px]">
                  Analytical Instrumentation
                </div>
                <div className="text-leaf/90 leading-relaxed font-sans text-sm">
                  {selectedInvestigation.fullProtocol.instrumentation}
                </div>
              </div>

              <div className="p-4 rounded-xl chamber-card space-y-2 border border-primary/20">
                <div className="text-primary uppercase font-bold text-[11px]">
                  Validated Reagents &amp; Standard Controls
                </div>
                <ul className="text-leaf/85 space-y-1.5 list-disc list-inside font-sans text-xs">
                  {selectedInvestigation.fullProtocol.reagents.map((reagent, rIdx) => (
                    <li key={rIdx}>{reagent}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl chamber-card space-y-2 border border-primary/20">
                <div className="text-dew uppercase font-bold text-[11px]">
                  Clinical &amp; Translational Significance
                </div>
                <div className="text-leaf/90 leading-relaxed font-sans text-sm">
                  {selectedInvestigation.fullProtocol.significance}
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedInvestigation(null)}
                className="px-5 py-2.5 rounded-xl bg-primary text-surface-dim font-bold text-xs uppercase tracking-wider font-mono hover:bg-primary-fixed transition-colors cursor-pointer"
              >
                Close Protocol Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

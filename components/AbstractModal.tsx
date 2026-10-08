"use client";

import React, { useState } from "react";
import { X, Check, BookOpen, Quote } from "lucide-react";
import { THESIS_DATA } from "@/data/portfolioData";

interface AbstractModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AbstractModal({ isOpen, onClose }: AbstractModalProps) {
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyCitation = () => {
    const citation = `Otieno, A. A. (2026). Phytochemical Content & Antioxidant Capacity of Selected Kenyan Indigenous Leafy Vegetables (Cleome gynandra, Amaranthus hybridus, Solanum nigrum) under Spectrophotometric Evaluation. Department of Biochemistry, School of Sciences & Aerospace Studies, Moi University, Kenya.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="abstract-modal-title"
      onClick={onClose}
    >
      <div
        className="chamber-capsule rounded-3xl max-w-3xl w-full p-4 sm:p-8 space-y-6 border border-primary/40 shadow-2xl relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-primary/20 pb-4">
          <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider font-semibold">
            <BookOpen className="w-4 h-4" />
            <span>Senior Thesis Abstract &amp; Monograph</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyCitation}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg chamber-card text-dew hover:text-white border border-primary/25 text-xs font-mono transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary">Citation Copied</span>
                </>
              ) : (
                <>
                  <Quote className="w-3.5 h-3.5 text-primary" />
                  <span>Copy Citation</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-surface-container/80 text-dew hover:text-white border border-primary/20 cursor-pointer ml-1"
              aria-label="Close abstract viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <span className="px-2.5 py-1 rounded bg-surface-dim text-primary text-[11px] font-mono border border-primary/30 uppercase tracking-wider">
              {THESIS_DATA.institution}
            </span>
            <h3
              id="abstract-modal-title"
              className="font-serif text-2xl sm:text-3xl text-white font-medium mt-2 leading-snug"
            >
              {THESIS_DATA.title}
            </h3>
            <div className="font-mono text-xs text-dew/80 mt-1">
              Investigator: Alloice Alloice Otieno · Moi University
            </div>
          </div>

          <div className="p-4 rounded-xl chamber-card text-xs font-mono text-leaf/90 space-y-2 border border-primary/20">
            <div className="text-primary font-bold uppercase text-[11px]">
              Latin Binomial Botanical Vouchers:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {THESIS_DATA.plants.map((p, idx) => (
                <div key={idx} className="p-2 rounded bg-surface-dim/80">
                  <div className="font-serif italic text-white">{p.binomial}</div>
                  <div className="text-[10px] text-dew/70">{p.commonName} ({p.localName})</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 font-sans text-sm text-leaf/85 leading-relaxed bg-[#001f18]/60 p-5 rounded-2xl border border-primary/15">
            {THESIS_DATA.abstractFull.split("\n\n").map((para, idx) => (
              <p key={idx} className={idx === 0 ? "font-serif italic text-base text-dew" : ""}>
                {para}
              </p>
            ))}
          </div>

          <div className="p-4 rounded-xl chamber-card font-mono text-xs text-dew/80 space-y-1 border border-primary/20">
            <div className="text-amber-extract font-bold uppercase text-[11px]">
              Recommended Citation (APA):
            </div>
            <p className="font-sans text-xs text-leaf/80">
              Otieno, A. A. (2026). <em>Phytochemical Content &amp; Antioxidant Capacity of Selected Kenyan Indigenous Leafy Vegetables</em>. B.Sc. Dissertation, Department of Biochemistry, Moi University, Kenya.
            </p>
          </div>
        </div>

        {/* Action button */}
        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-primary text-surface-dim font-bold text-xs uppercase tracking-wider font-mono hover:bg-primary-fixed transition-colors cursor-pointer"
          >
            Close Abstract
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import {
  X,
  Printer,
  Copy,
  Check,
  GraduationCap,
  FlaskConical,
  Award,
  Calendar,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
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

  const handleCopy = () => {
    const text = `ALLOICE ALLOICE OTIENO
B.Sc. Biochemistry (Honors Candidate) - Moi University (Class of 2026)
Location: Eldoret / Nairobi, Kenya
Email: alloice.otieno.biochem@gmail.com | Phone: +254 (0) 700 000 000

PROFILE:
Devoted biochemist specializing in quantitative spectrophotometry, natural product extraction, and elucidating phytochemical pathways against oxidative stress. Experienced in GLP-compliant bench procedures, gravimetric pipetting calibration, and in-silico molecular docking.

EDUCATION:
- Bachelor of Science in Biochemistry, Moi University, School of Sciences & Aerospace Studies, Eldoret, Kenya (2022–2026)
- Thesis: Phytochemical Content & Antioxidant Capacity of Selected Kenyan Indigenous Leafy Vegetables (Approved)

CORE COMPETENCIES:
- UV-Vis Spectrophotometry (Folin-Ciocalteu, DPPH, ABTS, Bradford)
- Botanical Extraction (Maceration, Rotary Evaporation, Ultrasonic Extraction)
- Enzymology & Kinetics (α-Amylase, Michaelis-Menten, Lineweaver-Burk)
- Molecular Biology (Genomic DNA Extraction, Agarose Gel, PCR, SDS-PAGE)
- Computational Biology & Stats (NCBI BLASTp, UniProt, PyMOL, GraphPad Prism, R ANOVA)
- Laboratory Compliance: Good Laboratory Practice (GLP), ICH-GCP Ethics

EXPERIENCE:
- Industrial Attachment Trainee, Accredited Diagnostic & Analytical Facility, Western Kenya (3 Months)
- Undergraduate Research Assistant & Peer Demonstrator, Department of Biochemistry, Moi University (2024–2026)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="chamber-capsule rounded-3xl max-w-4xl w-full p-4 sm:p-8 space-y-6 border border-primary/40 shadow-2xl relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-primary/20 pb-4">
          <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>Curriculum Vitae Folio</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg chamber-card text-dew hover:text-white border border-primary/25 text-xs font-mono transition-colors cursor-pointer"
              title="Copy plain text CV summary"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-primary" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-surface-dim font-bold text-xs font-mono hover:bg-primary-fixed transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-surface-container/80 text-dew hover:text-white border border-primary/20 cursor-pointer ml-1"
              aria-label="Close CV viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="space-y-6 text-leaf/90 print:text-black">
          {/* Header */}
          <div className="border-b border-primary/25 pb-5 space-y-2">
            <h3
              id="cv-modal-title"
              className="font-serif text-3xl font-bold text-white tracking-tight"
            >
              Alloice Alloice Otieno
            </h3>
            <div className="font-serif italic text-primary text-base">
              Biochemist &amp; Botanical Natural Products Researcher
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-dew/80 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Eldoret / Nairobi, Kenya
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-primary" />
                alloice.otieno.biochem@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-primary" />
                +254 (0) 700 000 000
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Background</span>
            </div>
            <div className="p-4 rounded-xl chamber-card space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-semibold text-white">
                <span>Bachelor of Science in Biochemistry (Honors Candidate)</span>
                <span className="text-primary font-mono text-xs">2022 – 2026</span>
              </div>
              <div className="text-xs text-dew/80 font-mono">
                Moi University · School of Sciences &amp; Aerospace Studies · Eldoret, Kenya
              </div>
              <p className="text-xs text-leaf/80 font-sans pt-1">
                Comprehensive 4-year coursework spanning enzymology, molecular genetics, clinical biochemistry, and bioanalytical instrumentation. Senior undergraduate thesis approved with distinction.
              </p>
            </div>
          </div>

          {/* Senior Thesis */}
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-amber-extract font-bold flex items-center gap-1.5">
              <FlaskConical className="w-4 h-4" />
              <span>Approved Senior Research Thesis</span>
            </div>
            <div className="p-4 rounded-xl chamber-card space-y-2">
              <div className="text-sm font-semibold text-white">
                Phytochemical Content &amp; Antioxidant Capacity of Selected Kenyan Indigenous Leafy Vegetables
              </div>
              <div className="text-xs text-dew/80 font-mono">
                Undergraduate Investigator · Department of Biochemistry, Moi University
              </div>
              <ul className="text-xs text-leaf/85 font-sans space-y-1 list-disc list-inside">
                <li>
                  Quantified total polyphenolic content across <em>Cleome gynandra</em>, <em>Amaranthus hybridus</em>, and <em>Solanum nigrum</em> (up to 148.4 mg GAE/g dry weight).
                </li>
                <li>
                  Evaluated DPPH radical scavenging kinetics (IC50 = 34.6 µg/mL for <em>Cleome</em>) with high Pearson correlation (r = 0.89, p &lt; 0.001).
                </li>
                <li>
                  Engineered standard calibration curves maintaining strict linear regression metrics (R² &ge; 0.998).
                </li>
              </ul>
            </div>
          </div>

          {/* Laboratory Experience */}
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-dew font-bold flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>Laboratory Practicum &amp; Experience</span>
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-xl chamber-card space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-semibold text-white">
                  <span>Industrial Attachment Laboratory Trainee</span>
                  <span className="text-dew font-mono text-xs">3 Months Practicum</span>
                </div>
                <div className="text-xs text-dew/80 font-mono">
                  Accredited Diagnostic &amp; Quality Analytical Facility · Western Kenya
                </div>
                <p className="text-xs text-leaf/80 font-sans">
                  Executed routine clinical specimen accessioning, chemical reagent compounding, gravimetric pipette verification (±0.2% tolerance), and optical cuvette blank correction.
                </p>
              </div>

              <div className="p-4 rounded-xl chamber-card space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-semibold text-white">
                  <span>Undergraduate Research Assistant &amp; Peer Demonstrator</span>
                  <span className="text-dew font-mono text-xs">2024 – 2026</span>
                </div>
                <div className="text-xs text-dew/80 font-mono">
                  Department of Biochemistry, Moi University · Eldoret, Kenya
                </div>
                <p className="text-xs text-leaf/80 font-sans">
                  Demonstrated Bradford and DNS assay setups for practical cohorts; supervised sterile micropipetting, autoclave cycles, and Excel linear curve calibrations.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-primary-fixed font-bold flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Certifications &amp; Professional Standards</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs">
              <div className="p-3 rounded-lg chamber-card border border-primary/20">
                <div className="text-primary font-bold">Good Laboratory Practice</div>
                <div className="text-dew/70 text-[11px]">GLP Chemical Hygiene &amp; SOPs</div>
              </div>
              <div className="p-3 rounded-lg chamber-card border border-amber-extract/25">
                <div className="text-amber-extract font-bold">ICH-GCP Ethics</div>
                <div className="text-dew/70 text-[11px]">Clinical Protocols &amp; Biospecimens</div>
              </div>
              <div className="p-3 rounded-lg chamber-card border border-dew/25">
                <div className="text-dew font-bold">R &amp; Biostatistics</div>
                <div className="text-dew/70 text-[11px]">ANOVA &amp; Regression in Biology</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-primary/20 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <span className="text-dew/70">
            Official academic transcripts and letters of recommendation available upon request.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-primary text-surface-dim font-bold hover:bg-primary-fixed transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}

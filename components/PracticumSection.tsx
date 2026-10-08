"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ClipboardCheck,
  Calendar,
  CheckCircle2,
  FileSpreadsheet,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { PRACTICUM_EXPERIENCES } from "@/data/portfolioData";

type FieldLog = "pipette" | "cuvette" | "chain";

interface LogDetail {
  id: string;
  instrument: string;
  status: string;
  statusColor: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  metricBadge: string;
}

const LOG_DETAILS: Record<FieldLog, LogDetail> = {
  pipette: {
    id: "GLP-PIP-2025-089",
    instrument: "Gilson Pipetman P1000 / P200",
    status: "PASS (± 0.14% error)",
    statusColor: "text-primary",
    title: "Gravimetric Calibration Method & Standard Limits:",
    description:
      "Tested 10 replicates of deionized water (ρ = 0.9982 g/cm³ at 20.0°C) on analytical balance (Mettler Toledo, 4 decimal places). Nominal volume 100 µL yielded mean mass 99.88 mg ± 0.14 mg (CV = 0.14%). Strictly satisfies ISO 8655-2 limits (< 0.8% allowable inaccuracy).",
    image: "/images/field-pipette-balance.jpg",
    imageAlt: "Precision analytical balance measuring micro-droplets from calibrated pipette",
    metricBadge: "CV: 0.14% (ISO 8655-2 Validated)",
  },
  cuvette: {
    id: "OPT-SPEC-765-CORR",
    instrument: "Match-paired Quartz Cuvettes (10 mm)",
    status: "ZERO DRIFT: < 0.002 AU / hr",
    statusColor: "text-amber-extract",
    title: "Blank Correction & Optical Cleansing Protocol:",
    description:
      "Residual solvent film on optical quartz faces causes anomalous baseline scatter at 765 nm. Standardized a 3-stage cuvette wash protocol: 10% nitric acid soak (30 min) followed by Milli-Q rinse and HPLC-grade ethanol drying. Solvent blank verified at 765 nm reading 0.000 ± 0.001 AU prior to gallic acid series.",
    image: "/images/field-cuvette-optical.jpg",
    imageAlt: "Matched quartz spectrophotometer cuvettes in sample holder with optical baseline check",
    metricBadge: "Baseline Scatter: 0.000 ± 0.001 AU",
  },
  chain: {
    id: "COC-MOU-FLORA-042",
    instrument: "Cryogenic Specimen Vault (-80°C)",
    status: "ACCESSIONED: 36 Vouchers",
    statusColor: "text-dew",
    title: "Botanical Voucher & Specimen Manifest:",
    description:
      "Field specimens harvested 06:30–08:00 AM to preserve circadian antioxidant metabolite peaks. Transported in ice-cooled nitrogen vapor canisters to Moi University laboratory within 45 minutes of excision. Herbarium accession tags assigned with GPS coordinates and verified by senior botanist.",
    image: "/images/field-cold-chain.jpg",
    imageAlt: "Ultra-cold cryogenic freezer vault storing biobanked plant extract cryovials",
    metricBadge: "Chain-of-Custody: 100% Traceable",
  },
};

export default function PracticumSection() {
  const [activeLog, setActiveLog] = useState<FieldLog>("pipette");
  const currentLog = LOG_DETAILS[activeLog];

  return (
    <section
      id="attachment"
      className="py-16 sm:py-24 border-b border-primary/15 relative bg-[#001711]/60 backdrop-blur-md"
      data-purpose="industrial-practicum-section"
      aria-labelledby="practicum-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-14 reveal-init">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase chamber-capsule px-3.5 py-1.5 rounded-full border border-primary/30">
            <ClipboardCheck className="w-3.5 h-3.5 text-primary" />
            <span>Field &amp; Industry Practicum</span>
          </div>
          <h2
            id="practicum-heading"
            className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mt-3"
          >
            Industrial Attachment &amp; Field Notebook
          </h2>
          <p className="font-sans text-dew/85 text-sm sm:text-base mt-2">
            Rigorous chain-of-custody, real turnaround times, diagnostic
            calibration logs, and regulatory compliance.
          </p>
        </div>

        {/* Experience Timeline with Rich Card Imagery */}
        <div className="relative border-l-2 border-primary/30 pl-4 sm:pl-8 ml-2 sm:ml-6 space-y-12">
          {PRACTICUM_EXPERIENCES.map((exp, idx) => (
            <div key={idx} className={`relative group reveal-init stagger-${idx + 1}`}>
              {/* Timeline marker */}
              <div
                className={`absolute -left-[25px] sm:-left-[41px] top-4 w-4 h-4 rounded-full bg-surface-dim border-4 ${
                  idx === 0
                    ? "border-primary group-hover:scale-125"
                    : "border-dew/50 group-hover:border-primary group-hover:scale-125"
                } transition-transform duration-200`}
                aria-hidden="true"
              />

              <article className="chamber-capsule rounded-3xl border border-primary/25 overflow-hidden shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Left Column: Authentic Facility Photo Banner */}
                  <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[280px] lg:min-h-full overflow-hidden bg-surface-dim/80">
                    <Image
                      src={exp.image}
                      alt={exp.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover object-center filter saturate-[1.1] group-hover:scale-105 transition-transform duration-700"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-surface-dim/95 via-surface-dim/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-surface-dim/90"
                      aria-hidden="true"
                    />

                    {/* Facility Badge Overlay */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] tracking-wider uppercase bg-surface-dim/90 backdrop-blur-md text-primary px-2.5 py-1 rounded-md border border-primary/30 shadow flex items-center gap-1.5">
                        <Building2 className="w-3 h-3 text-primary" />
                        <span>{exp.facilityBadge}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 lg:hidden flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono bg-surface-dim/90 text-dew px-2.5 py-1 rounded-lg border border-primary/25">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>{exp.period}</span>
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Narrative, Controls, and Compliance */}
                  <div className="lg:col-span-7 p-5 sm:p-8 space-y-5 flex flex-col justify-between">
                    <div>
                      <div className="hidden lg:flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono chamber-card text-dew px-3 py-1 rounded-full border border-primary/25 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          <span>{exp.period}</span>
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-white">
                        {exp.role}
                      </h3>
                      <div className="font-mono text-xs text-primary font-medium mt-1">
                        {exp.institution}
                      </div>

                      <p className="font-sans text-xs sm:text-sm text-leaf/85 leading-relaxed mt-3">
                        {exp.summary}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                      {/* Routine controls */}
                      <div className="p-3.5 sm:p-4 rounded-xl chamber-card space-y-2 border border-primary/15">
                        <div className="font-mono text-[11px] font-bold text-primary uppercase">
                          {exp.controlsTitle}
                        </div>
                        <ul className="text-xs text-leaf/85 space-y-1.5 list-disc list-inside font-sans">
                          {exp.controls.map((item, cIdx) => (
                            <li key={cIdx} className="leading-relaxed">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Quality compliance */}
                      <div className="p-3.5 sm:p-4 rounded-xl chamber-card space-y-2 border border-primary/15">
                        <div className="font-mono text-[11px] font-bold text-amber-extract uppercase">
                          {exp.complianceTitle}
                        </div>
                        <ul className="text-xs text-leaf/85 space-y-1.5 list-disc list-inside font-sans">
                          {exp.compliance.map((item, cIdx) => (
                            <li key={cIdx} className="leading-relaxed">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl chamber-card border border-primary/30 text-dew text-xs font-mono flex items-start sm:items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 sm:mt-0" />
                      <span>
                        <strong>Core Competency:</strong> {exp.takeaway}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Interactive Field Notebook Log Inspector with Visual Photo Pairing */}
        <div className="mt-14 sm:mt-16 p-5 sm:p-8 rounded-3xl chamber-capsule border border-primary/30 space-y-6 reveal-init stagger-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-primary/20 pb-4">
            <div className="flex items-center gap-2.5">
              <FileSpreadsheet className="w-5 h-5 text-amber-extract" />
              <div>
                <h4 className="font-serif text-xl text-white font-medium">
                  Field Notebook &amp; QA Logs
                </h4>
                <p className="text-xs font-mono text-dew/70">
                  Direct excerpts from Alloice&rsquo;s audited laboratory logbook
                </p>
              </div>
            </div>

            {/* Log Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-xs">
              <button
                type="button"
                onClick={() => setActiveLog("pipette")}
                className={`min-h-[38px] px-3.5 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                  activeLog === "pipette"
                    ? "bg-primary text-surface-dim font-bold border-primary shadow-[0_0_12px_rgba(78,222,163,0.35)]"
                    : "chamber-card text-dew border-primary/20 hover:text-white"
                }`}
              >
                Pipette Gravimetric Audit
              </button>
              <button
                type="button"
                onClick={() => setActiveLog("cuvette")}
                className={`min-h-[38px] px-3.5 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                  activeLog === "cuvette"
                    ? "bg-amber-extract text-surface-dim font-bold border-amber-extract shadow-[0_0_12px_rgba(251,191,36,0.35)]"
                    : "chamber-card text-dew border-primary/20 hover:text-white"
                }`}
              >
                Cuvette Blank Mitigation
              </button>
              <button
                type="button"
                onClick={() => setActiveLog("chain")}
                className={`min-h-[38px] px-3.5 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                  activeLog === "chain"
                    ? "bg-dew text-surface-dim font-bold border-dew shadow-[0_0_12px_rgba(149,211,186,0.35)]"
                    : "chamber-card text-dew border-primary/20 hover:text-white"
                }`}
              >
                Sample Chain-of-Custody
              </button>
            </div>
          </div>

          {/* Active Log Content Paired with Authentic Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Visual Frame of the Logged Equipment / Procedure */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-primary/30 min-h-[200px] sm:min-h-[240px] bg-surface-dim/80">
              <Image
                src={currentLog.image}
                alt={currentLog.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-center filter saturate-[1.1]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="font-mono text-[10px] text-white font-bold bg-surface-dim/90 px-2.5 py-1 rounded border border-primary/30">
                  {currentLog.metricBadge}
                </span>
              </div>
            </div>

            {/* Log Details & Verification Text */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4 font-mono text-xs">
              <div className="flex flex-wrap items-center justify-between text-dew/80 text-[11px] pb-2 border-b border-primary/10 gap-2">
                <span>LOG ID: {currentLog.id}</span>
                <span>INSTRUMENT: {currentLog.instrument}</span>
                <span className={`${currentLog.statusColor} font-bold`}>
                  {currentLog.status}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-surface-dim/90 border border-primary/20 space-y-2 flex-1 flex flex-col justify-center">
                <div className="text-white font-semibold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>{currentLog.title}</span>
                </div>
                <p className="text-dew/85 font-sans text-xs sm:text-sm leading-relaxed">
                  {currentLog.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

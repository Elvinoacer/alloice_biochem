"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FlaskConical,
  ListChecks,
  FileText,
  LineChart,
  CheckCircle2,
  Activity,
} from "lucide-react";
import {
  THESIS_DATA,
  FOLIN_CURVE_DATA,
  DPPH_CURVE_DATA,
  FRACTION_COMPARISON,
} from "@/data/portfolioData";
import ChromatographyPeakStrip from "./ChromatographyPeakStrip";
import HerbariumVoucherModule from "./HerbariumVoucherModule";

interface FlagshipResearchSectionProps {
  onOpenAbstract: () => void;
}

type CurveTab = "folin" | "dpph" | "fractions" | "chromatography" | "vouchers";

export default function FlagshipResearchSection({
  onOpenAbstract,
}: FlagshipResearchSectionProps) {
  const [activeTab, setActiveTab] = useState<CurveTab>("folin");
  const [hoveredPoint, setHoveredPoint] = useState<{
    x: number;
    y: number;
    label: string;
  } | null>(null);

  return (
    <section
      id="flagship"
      className="py-24 border-b border-primary/15 relative bg-[#001711]/70 backdrop-blur-md"
      data-purpose="flagship-research-section"
      aria-labelledby="flagship-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-init">
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase chamber-capsule px-3.5 py-1.5 rounded-full border border-primary/30">
              <FlaskConical className="w-3.5 h-3.5 text-primary" />
              <span>Flagship Undergraduate Thesis</span>
            </div>
            <h2
              id="flagship-heading"
              className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mt-3"
            >
              Indigenous Flora &amp; Antioxidant Defense
            </h2>
            <p className="font-sans text-dew/85 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Investigating the polyphenolic content and radical scavenging
              mechanics of Western Kenyan traditional vegetables under
              spectrophotometric evaluation.
            </p>
          </div>
          <div className="font-mono text-xs text-dew chamber-capsule px-4 py-2.5 rounded-xl border border-primary/25 flex items-center gap-2 w-fit">
            <span
              className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"
              aria-hidden="true"
            ></span>
            <span>Assay Standards: Folin-Ciocalteu · DPPH · Quercetin Equiv.</span>
          </div>
        </div>

        {/* Panoramic Thesis Showcase Card */}
        <article className="rounded-3xl chamber-capsule border border-primary/25 overflow-hidden shadow-2xl reveal-init stagger-1">
          {/* Top Panoramic Image */}
          <div className="relative w-full h-[320px] sm:h-[420px] overflow-hidden bg-surface-dim/80">
            <Image
              src="/images/thesis-specimen.jpg"
              alt="Cinematic laboratory workbench with vibrant indigenous African leafy greens, glass beakers, and active tinctures"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center filter saturate-[1.1] hover:scale-105 transition-transform duration-1000"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#001711] via-[#001711]/45 to-transparent"
              aria-hidden="true"
            ></div>

            {/* Plant identification overlays */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="px-3 py-1 bg-surface-dim/90 backdrop-blur-md rounded-md text-[11px] font-mono text-primary uppercase tracking-wider border border-primary/30">
                  {THESIS_DATA.institution}
                </span>
                <h3 className="font-serif text-xl sm:text-3xl text-white font-medium">
                  <em>Cleome gynandra</em>, <em>Amaranthus</em> &amp;{" "}
                  <em>Solanum nigrum</em>
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="botanical-chip bg-surface-dim/90 backdrop-blur-md text-amber-extract border-amber-extract/35">
                  <span className="bio-indicator-dot amber"></span>
                  Spider Plant (Saget)
                </span>
                <span className="botanical-chip bg-surface-dim/90 backdrop-blur-md text-primary border-primary/35">
                  <span className="bio-indicator-dot emerald"></span>
                  Terere
                </span>
                <span className="botanical-chip bg-surface-dim/90 backdrop-blur-md text-dew border-dew/35">
                  <span className="bio-indicator-dot emerald"></span>
                  Nightshade (Managu)
                </span>
              </div>
            </div>
          </div>

          {/* Bottom: Scientific Data Breakdown & Quantitative Benchmarks */}
          <div className="p-6 sm:p-10 space-y-10 bg-[#001711]/85 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Research Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <h4 className="font-serif text-2xl text-white font-normal leading-snug">
                  {THESIS_DATA.title}
                </h4>
                <p className="font-sans text-sm sm:text-base text-leaf/85 leading-relaxed">
                  {THESIS_DATA.narrative}
                </p>

                {/* Protocol Methods List */}
                <div className="p-4 sm:p-5 rounded-2xl chamber-card space-y-3">
                  <div className="font-mono text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                    <ListChecks className="w-4 h-4 text-primary" />
                    <span>Standard Operating Protocols</span>
                  </div>
                  <ul className="text-xs sm:text-sm text-leaf/85 space-y-2 list-disc list-inside font-sans">
                    {THESIS_DATA.protocols.map((protocol, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {protocol}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Live Quantitative Benchmarks Grid */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {THESIS_DATA.benchmarks.map((benchmark, idx) => {
                  const borderClass =
                    benchmark.tagColor === "amber"
                      ? "border-amber-extract/35"
                      : benchmark.tagColor === "dew"
                      ? "border-dew/35"
                      : "border-primary/30";
                  const textClass =
                    benchmark.tagColor === "amber"
                      ? "text-amber-extract"
                      : benchmark.tagColor === "dew"
                      ? "text-dew"
                      : "text-primary";

                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl chamber-card border ${borderClass} flex flex-col justify-between`}
                    >
                      <div
                        className={`text-[11px] font-mono uppercase font-bold ${textClass}`}
                      >
                        {benchmark.title}
                      </div>
                      <div className="text-2xl font-mono font-bold text-white mt-2">
                        {benchmark.value}{" "}
                        {benchmark.subValue && (
                          <span className={`text-xs font-normal ${textClass}`}>
                            {benchmark.subValue}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] font-mono text-dew/80 mt-1">
                        {benchmark.unit}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Indigenous Flora Specimen Trio Cards */}
            <div className="pt-8 border-t border-primary/20 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-serif text-xl font-medium text-white">
                    Kenyan Botanical Cohort Profiles
                  </h5>
                  <p className="text-xs font-mono text-dew/80">
                    Phytochemical characterization and antioxidant metrics of the three investigated indigenous taxa
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    binomial: "Cleome gynandra",
                    commonName: "Spider Plant",
                    localName: "Saget (Kalenjin) / Dek (Luo)",
                    image: "/images/voucher-cleome.jpg",
                    tpc: "148.4 ± 4.2 mg GAE/g",
                    ic50: "34.6 µg/mL",
                    color: "text-amber-extract",
                    border: "border-amber-extract/35",
                    summary: "Highest phenolic density and radical quenching kinetics; dense capitate glandular trichomes.",
                  },
                  {
                    binomial: "Amaranthus hybridus",
                    commonName: "Smooth Amaranth",
                    localName: "Terere (Kikuyu) / Omboga (Luhya)",
                    image: "/images/voucher-amaranthus.jpg",
                    tpc: "92.3 ± 2.9 mg GAE/g",
                    ic50: "54.2 µg/mL",
                    color: "text-primary",
                    border: "border-primary/35",
                    summary: "Betalain-polyphenol synergy with Kranz C4 photosynthetic anatomy resisting high irradiance.",
                  },
                  {
                    binomial: "Solanum nigrum",
                    commonName: "African Black Nightshade",
                    localName: "Managu (Kikuyu) / Osuga (Luo)",
                    image: "/images/voucher-solanum.jpg",
                    tpc: "118.6 ± 3.8 mg GAE/g",
                    ic50: "42.8 µg/mL",
                    color: "text-dew",
                    border: "border-dew/35",
                    summary: "Couples chlorogenic acid with steroidal glycoalkaloids; prominent protective cuticular striations.",
                  },
                ].map((specimen, sIdx) => (
                  <div
                    key={sIdx}
                    className="rounded-2xl chamber-card border border-primary/20 overflow-hidden group hover:border-primary/40 transition-all flex flex-col justify-between"
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-dim/80">
                      <Image
                        src={specimen.image}
                        alt={`Botanical specimen photograph of ${specimen.binomial}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 280px"
                        className="object-cover object-center filter saturate-[1.1] group-hover:scale-108 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent" />
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-surface-dim/90 text-dew border border-primary/30">
                          {specimen.commonName}
                        </span>
                        <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-surface-dim/90 ${specimen.color} border ${specimen.border}`}>
                          IC50: {specimen.ic50}
                        </span>
                      </div>
                      <div className="absolute bottom-2 left-2.5 right-2.5">
                        <div className="font-serif italic text-white text-base font-medium">
                          {specimen.binomial}
                        </div>
                        <div className="font-mono text-[10px] text-primary/80">
                          {specimen.localName}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between text-xs">
                      <p className="font-sans text-leaf/80 leading-relaxed text-xs">
                        {specimen.summary}
                      </p>
                      <div className="pt-2 border-t border-primary/10 flex items-center justify-between font-mono text-[11px] text-dew">
                        <span>Total Phenolics:</span>
                        <span className="text-white font-bold">{specimen.tpc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Analytical Telemetry Workspace */}
            <div className="pt-8 border-t border-primary/20 space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <LineChart className="w-5 h-5 text-primary" />
                  <div>
                    <h5 className="font-serif text-lg font-medium text-white">
                      Analytical Spectroscopy &amp; Specimen Telemetry
                    </h5>
                    <p className="text-xs font-mono text-dew/80">
                      Explore five rigorous analytical dimensions of Alloice&rsquo;s undergraduate thesis
                    </p>
                  </div>
                </div>

                {/* Tab Switcher */}
                <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-surface-container border border-primary/20 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab("folin")}
                    className={`min-h-[38px] px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                      activeTab === "folin"
                        ? "bg-primary text-surface-dim font-bold shadow-[0_0_12px_rgba(78,222,163,0.35)]"
                        : "text-dew hover:text-white hover:bg-surface-high/50"
                    }`}
                  >
                    Folin-C (765nm)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("dpph")}
                    className={`min-h-[38px] px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                      activeTab === "dpph"
                        ? "bg-amber-extract text-surface-dim font-bold shadow-[0_0_12px_rgba(251,191,36,0.35)]"
                        : "text-dew hover:text-white hover:bg-surface-high/50"
                    }`}
                  >
                    DPPH Kinetics (517nm)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("fractions")}
                    className={`min-h-[38px] px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                      activeTab === "fractions"
                        ? "bg-dew text-surface-dim font-bold shadow-[0_0_12px_rgba(149,211,186,0.35)]"
                        : "text-dew hover:text-white hover:bg-surface-high/50"
                    }`}
                  >
                    Fraction Yields
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("chromatography")}
                    className={`min-h-[38px] px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                      activeTab === "chromatography"
                        ? "bg-primary text-surface-dim font-bold shadow-[0_0_12px_rgba(78,222,163,0.35)]"
                        : "text-dew hover:text-white hover:bg-surface-high/50"
                    }`}
                  >
                    HPLC Chromatography
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("vouchers")}
                    className={`min-h-[38px] px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                      activeTab === "vouchers"
                        ? "bg-amber-extract text-surface-dim font-bold shadow-[0_0_12px_rgba(251,191,36,0.35)]"
                        : "text-dew hover:text-white hover:bg-surface-high/50"
                    }`}
                  >
                    Herbarium Vouchers
                  </button>
                </div>
              </div>

              {/* Curve Display Container */}
              <div className="p-5 sm:p-7 rounded-2xl chamber-card border border-primary/30 relative">
                {/* TAB 1: Folin-Ciocalteu Standard Gallic Acid Calibration Curve */}
                {activeTab === "folin" && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                      <div className="flex items-center gap-3">
                        <span className="text-primary font-bold">
                          Gallic Acid Standard Curve
                        </span>
                        <span className="text-dew/70">λ = 765 nm</span>
                        <span className="px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/40 font-bold">
                          R² = 0.9982
                        </span>
                      </div>
                      <div className="text-amber-extract font-semibold">
                        Linear Fit: y = 0.0084x + 0.0121 (Standard Error ± 0.003)
                      </div>
                    </div>

                    {/* SVG Chart for Folin-Ciocalteu */}
                    <div className="h-64 sm:h-72 w-full relative">
                      <svg
                        className="w-full h-full overflow-visible"
                        viewBox="0 0 600 240"
                        preserveAspectRatio="xMidYMid meet"
                        aria-label="Folin-Ciocalteu Standard Gallic Acid Calibration Curve Graph"
                      >
                        {/* Grid lines */}
                        <line x1="50" y1="20" x2="570" y2="20" stroke="rgba(16, 185, 129, 0.12)" strokeDasharray="4 4" />
                        <line x1="50" y1="70" x2="570" y2="70" stroke="rgba(16, 185, 129, 0.12)" strokeDasharray="4 4" />
                        <line x1="50" y1="120" x2="570" y2="120" stroke="rgba(16, 185, 129, 0.12)" strokeDasharray="4 4" />
                        <line x1="50" y1="170" x2="570" y2="170" stroke="rgba(16, 185, 129, 0.12)" strokeDasharray="4 4" />
                        <line x1="50" y1="210" x2="570" y2="210" stroke="rgba(16, 185, 129, 0.35)" />

                        {/* Y-axis */}
                        <line x1="50" y1="10" x2="50" y2="210" stroke="rgba(16, 185, 129, 0.35)" />

                        {/* Y-axis labels */}
                        <text x="42" y="25" textAnchor="end" fill="#95d3ba" fontSize="10" fontFamily="monospace">1.0</text>
                        <text x="42" y="75" textAnchor="end" fill="#95d3ba" fontSize="10" fontFamily="monospace">0.75</text>
                        <text x="42" y="125" textAnchor="end" fill="#95d3ba" fontSize="10" fontFamily="monospace">0.50</text>
                        <text x="42" y="175" textAnchor="end" fill="#95d3ba" fontSize="10" fontFamily="monospace">0.25</text>
                        <text x="42" y="214" textAnchor="end" fill="#95d3ba" fontSize="10" fontFamily="monospace">0.0</text>

                        {/* Trend line */}
                        <line
                          x1="50"
                          y1="210"
                          x2="550"
                          y2="28"
                          stroke="#10b981"
                          strokeWidth="2.5"
                          strokeDasharray="4 2"
                        />

                        {/* Actual assay data points */}
                        {FOLIN_CURVE_DATA.map((pt, i) => {
                          const cx = 50 + (pt.concentration / 100) * 500;
                          const cy = 210 - (pt.absorbance / 1.0) * 190;
                          return (
                            <g key={i}>
                              {/* Enlarged invisible touch pad (32px diameter) */}
                              <circle
                                cx={cx}
                                cy={cy}
                                r="16"
                                fill="transparent"
                                className="cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setHoveredPoint({
                                    x: cx,
                                    y: cy,
                                    label: `${pt.concentration} µg/mL → A765 = ${pt.absorbance.toFixed(3)}`,
                                  });
                                }}
                              />
                              <circle
                                cx={cx}
                                cy={cy}
                                r="6"
                                fill="#4edea3"
                                stroke="#001711"
                                strokeWidth="2.5"
                                className="cursor-pointer transition-transform hover:scale-150 focus:scale-150 focus:outline-none"
                                tabIndex={0}
                                role="button"
                                aria-label={`Point ${pt.concentration} µg/mL with absorbance ${pt.absorbance}`}
                                onMouseEnter={() =>
                                  setHoveredPoint({
                                    x: cx,
                                    y: cy,
                                    label: `${pt.concentration} µg/mL → A765 = ${pt.absorbance.toFixed(3)}`,
                                  })
                                }
                                onMouseLeave={() => setHoveredPoint(null)}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setHoveredPoint({
                                    x: cx,
                                    y: cy,
                                    label: `${pt.concentration} µg/mL → A765 = ${pt.absorbance.toFixed(3)}`,
                                  });
                                }}
                              />
                              {/* X-axis labels */}
                              <text
                                x={cx}
                                y="228"
                                textAnchor="middle"
                                fill="#95d3ba"
                                fontSize="10"
                                fontFamily="monospace"
                              >
                                {pt.concentration}
                              </text>
                            </g>
                          );
                        })}
                      </svg>

                      {/* Tooltip with boundary clamping and dismiss */}
                      {hoveredPoint && (
                        <div
                          className="absolute bg-surface-dim/95 text-primary border border-primary/50 text-[11px] font-mono px-3 py-1.5 rounded-lg shadow-xl -translate-x-1/2 -translate-y-9 z-20 whitespace-nowrap flex items-center gap-2"
                          style={{
                            left: `${Math.min(Math.max((hoveredPoint.x / 600) * 100, 15), 85)}%`,
                            top: `${(hoveredPoint.y / 240) * 100}%`,
                          }}
                        >
                          <span>{hoveredPoint.label}</span>
                          <button
                            type="button"
                            onClick={() => setHoveredPoint(null)}
                            className="text-dew/60 hover:text-white ml-1 text-xs font-bold cursor-pointer"
                            aria-label="Dismiss tooltip"
                          >
                            ×
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between text-[11px] font-mono text-dew/70 pt-2 border-t border-primary/10 gap-1">
                      <span>X-Axis: Gallic Acid Concentration (µg/mL)</span>
                      <span>Y-Axis: Absorbance at 765 nm (10 mm Optical Quartz Cuvette)</span>
                    </div>
                  </div>
                )}

                {/* TAB 2: DPPH Radical Scavenging Kinetics - HIGH PRECISION COMPARATIVE MULTI-SERIES */}
                {activeTab === "dpph" && (
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                      <div className="flex items-center gap-3">
                        <span className="text-amber-extract font-bold">
                          DPPH Free Radical Scavenging Dose-Response
                        </span>
                        <span className="text-dew/70">λ = 517 nm</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-[11px]">
                        <span className="flex items-center gap-1.5 text-primary">
                          <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
                          <em>Cleome</em> (IC50: 34.6 µg/mL)
                        </span>
                        <span className="flex items-center gap-1.5 text-dew">
                          <span className="w-2.5 h-2.5 rounded-full bg-dew inline-block"></span>
                          <em>Solanum</em> (IC50: 42.8 µg/mL)
                        </span>
                        <span className="flex items-center gap-1.5 text-amber-extract">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-extract inline-block"></span>
                          <em>Amaranthus</em> (IC50: 54.2 µg/mL)
                        </span>
                        <span className="flex items-center gap-1.5 text-white">
                          <span className="w-2.5 h-2.5 rounded-full bg-white/80 inline-block"></span>
                          Ascorbic Control (18.2 µg/mL)
                        </span>
                      </div>
                    </div>

                    {/* Comparative Multi-Series Bars at each concentration level */}
                    <div className="space-y-4 pt-1">
                      {DPPH_CURVE_DATA.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-surface-dim/80 border border-primary/20 space-y-2.5 font-mono text-xs"
                        >
                          <div className="flex items-center justify-between text-dew/90">
                            <span className="font-bold text-white">
                              Concentration: {item.concentration} µg/mL
                            </span>
                            <span className="text-[11px] text-dew/70">
                              Assay in Triplicate (n=3, p &lt; 0.001)
                            </span>
                          </div>

                          <div className="space-y-2">
                            {/* Cleome Gynandra Bar */}
                            <div className="space-y-1">
                              <div className="flex justify-between text-[11px]">
                                <span className="text-primary italic">Cleome gynandra (Spider plant)</span>
                                <span className="text-primary font-bold">{item.Cleome}% Inhibition</span>
                              </div>
                              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-primary rounded-full transition-all duration-700 shadow-[0_0_8px_#4edea3]"
                                  style={{ width: `${item.Cleome}%` }}
                                ></div>
                              </div>
                            </div>

                            {/* Solanum Nigrum Bar */}
                            <div className="space-y-1">
                              <div className="flex justify-between text-[11px]">
                                <span className="text-dew italic">Solanum nigrum (Nightshade)</span>
                                <span className="text-dew font-bold">{item.Solanum}% Inhibition</span>
                              </div>
                              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-dew rounded-full transition-all duration-700"
                                  style={{ width: `${item.Solanum}%` }}
                                ></div>
                              </div>
                            </div>

                            {/* Amaranthus Hybridus Bar */}
                            <div className="space-y-1">
                              <div className="flex justify-between text-[11px]">
                                <span className="text-amber-extract italic">Amaranthus hybridus (Terere)</span>
                                <span className="text-amber-extract font-bold">{item.Amaranthus}% Inhibition</span>
                              </div>
                              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-amber-extract rounded-full transition-all duration-700"
                                  style={{ width: `${item.Amaranthus}%` }}
                                ></div>
                              </div>
                            </div>

                            {/* Ascorbic Acid Benchmark Control */}
                            <div className="space-y-1">
                              <div className="flex justify-between text-[11px]">
                                <span className="text-white/70">Ascorbic Acid (Positive Control Standard)</span>
                                <span className="text-white font-bold">{item.AscorbicControl}% Inhibition</span>
                              </div>
                              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-white/70 rounded-full transition-all duration-700"
                                  style={{ width: `${item.AscorbicControl}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-surface-container/70 border border-primary/20 text-[11px] font-mono text-dew/80 flex items-center justify-between">
                      <span>Threshold IC50 = 50% Radical Quenching Level</span>
                      <span className="text-primary font-bold">
                        Cleome gynandra potency index: 34.6 µg/mL
                      </span>
                    </div>
                  </div>
                )}

                {/* TAB 3: Extraction Fraction Yields */}
                {activeTab === "fractions" && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                      <span className="text-dew font-bold">
                        Solvent Partition Superiority (Methanolic vs Aqueous Extraction)
                      </span>
                      <span className="text-primary">
                        Average Recovery: 3.2x Phenolic Retention in 80% MeOH
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                      {FRACTION_COMPARISON.map((fraction, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl bg-surface-dim/80 border border-primary/25 overflow-hidden flex flex-col justify-between font-mono text-xs group hover:border-primary/40 transition-colors"
                        >
                          <div className="relative w-full aspect-[16/8] overflow-hidden bg-surface-dim">
                            <Image
                              src={fraction.image}
                              alt={`Specimen voucher image of ${fraction.plant} (${fraction.commonName})`}
                              fill
                              sizes="(max-width: 768px) 100vw, 360px"
                              className="object-cover object-center filter saturate-[1.1] group-hover:scale-105 transition-transform duration-500"
                            />
                            <div
                              className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/30 to-transparent"
                              aria-hidden="true"
                            />
                            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                              <span className="font-mono text-[10px] tracking-wider uppercase bg-surface-dim/90 backdrop-blur-md text-dew px-2 py-0.5 rounded border border-primary/30">
                                {fraction.commonName.split(" ")[0]}
                              </span>
                              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-primary text-surface-dim shadow">
                                {fraction.ratio}
                              </span>
                            </div>
                          </div>

                          <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                            <div>
                              <div className="font-serif italic text-base text-white">
                                {fraction.plant}
                              </div>
                              <div className="text-[11px] text-dew/70 font-sans">
                                {fraction.commonName}
                              </div>
                            </div>

                            <div className="space-y-2 pt-1">
                              <div className="space-y-1">
                                <div className="flex justify-between text-dew/80 text-[11px]">
                                  <span>80% Methanol:</span>
                                  <span className="text-primary font-bold">
                                    {fraction.methanolic} mg/g
                                  </span>
                                </div>
                                <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                                  <div
                                    className="bg-primary h-full rounded-full"
                                    style={{ width: `${(fraction.methanolic / 150) * 100}%` }}
                                  ></div>
                                </div>
                              </div>

                              <div className="space-y-1">
                                <div className="flex justify-between text-dew/80 text-[11px]">
                                  <span>Crude Aqueous:</span>
                                  <span className="text-amber-extract font-bold">
                                    {fraction.aqueous} mg/g
                                  </span>
                                </div>
                                <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                                  <div
                                    className="bg-amber-extract h-full rounded-full"
                                    style={{ width: `${(fraction.aqueous / 150) * 100}%` }}
                                  ></div>
                                </div>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-primary/20 flex justify-between items-center text-[11px]">
                              <span className="text-dew/70">Yield Superiority:</span>
                              <span className="px-2 py-0.5 rounded bg-primary/20 text-primary font-bold">
                                {fraction.ratio} recovery
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 4: HPLC Chromatography Telemetry */}
                {activeTab === "chromatography" && <ChromatographyPeakStrip />}

                {/* TAB 5: Herbarium Voucher Module */}
                {activeTab === "vouchers" && <HerbariumVoucherModule />}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-primary/20 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-dew">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>
                  Thesis Defense: Approved &amp; Documented (Moi University Department of Biochemistry)
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenAbstract}
                  className="bio-btn-secondary"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Request Full Abstract</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("chromatography")}
                  className="bio-btn-primary"
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Inspect HPLC Chromatography</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

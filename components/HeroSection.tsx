import React from "react";
import Image from "next/image";
import {
  FlaskConical,
  BookOpen,
  GraduationCap,
  Leaf,
  MapPin,
  Dna,
  Network,
} from "lucide-react";
import { HERO_METRICS } from "@/data/portfolioData";

export default function HeroSection() {
  return (
    <section
      className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden border-b border-primary/15"
      data-purpose="hero-section"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Scientific Storytelling & Living Thesis */}
          <div className="lg:col-span-7 space-y-6">
            {/* Living Status Beacon */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full chamber-capsule text-xs font-mono text-primary shadow-lg border border-primary/30">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span>Active in Laboratory Research &amp; Bench Discovery</span>
            </div>

            {/* Title & Bio-Editorial Headline */}
            <div className="space-y-4 reveal-init">
              <div className="font-mono text-xs uppercase tracking-widest text-primary flex items-center gap-2">
                <span className="w-6 h-[1px] bg-primary" aria-hidden="true"></span>
                Where Indigenous Flora Meets Cellular Precision
              </div>

              <h1
                id="hero-heading"
                className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.12]"
              >
                Decoding the Living Chemistry of{" "}
                <span className="italic font-light text-primary">
                  African Botanicals.
                </span>
              </h1>

              <p className="font-sans text-base sm:text-xl font-normal text-dew/90 leading-relaxed max-w-2xl">
                Alloice Alloice Otieno is a biochemist from Moi University devoted
                to quantitative spectrophotometry, natural product extraction, and
                elucidating phytochemical pathways against oxidative stress.
              </p>
            </div>

            {/* Evocative narrative quote in translucent capsule */}
            <blockquote className="p-3.5 sm:p-4 rounded-xl chamber-capsule border-l-2 border-primary border-y border-r border-primary/20 text-xs sm:text-sm font-serif italic text-leaf/90 leading-relaxed shadow-lg reveal-init stagger-1">
              &ldquo;From soil to spectrophotometer: isolating Kenyan spider
              plant, amaranth, and nightshade metabolites to decode evolutionary
              antioxidant armor at the cellular frontier.&rdquo;
            </blockquote>

            {/* Metadata Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 text-xs font-mono reveal-init stagger-2">
              <span className="botanical-chip">
                <span className="bio-indicator-dot emerald"></span>
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                Moi University (Class of 2026)
              </span>
              <span className="botanical-chip">
                <span className="bio-indicator-dot amber"></span>
                <Leaf className="w-3.5 h-3.5 text-amber-extract" />
                Living Flora &amp; Antioxidant Researcher
              </span>
              <span className="botanical-chip">
                <span className="bio-indicator-dot emerald"></span>
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Eldoret / Nairobi, Kenya
              </span>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2 reveal-init stagger-3">
              <a
                href="#flagship"
                className="bio-btn-primary w-full sm:w-auto text-center justify-center min-h-[44px]"
              >
                <FlaskConical className="w-4 h-4 text-[#022c22]" />
                Explore Living Research &amp; Theses
              </a>
              <a
                href="#skills"
                className="bio-btn-secondary w-full sm:w-auto text-center justify-center min-h-[44px]"
              >
                <BookOpen className="w-4 h-4 text-amber-extract" />
                View Specimen &amp; Assay Notebook
              </a>
            </div>

            {/* Metrics Ribbon: Living Bench KPIs inside Translucent Glass Capsules */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-6 border-t border-primary/20 reveal-init stagger-4">
              {HERO_METRICS.map((metric, idx) => {
                const colorMap = {
                  primary: "text-primary",
                  amber: "text-amber-extract",
                  white: "text-white",
                  dew: "text-dew",
                };
                const colorClass = colorMap[metric.highlightColor || "primary"];

                return (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-xl chamber-capsule border border-primary/25 shadow-md flex flex-col justify-between"
                  >
                    <div className={`text-lg sm:text-xl lg:text-2xl font-mono font-bold break-words ${colorClass}`}>
                      {metric.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-dew/80 uppercase font-medium mt-1 leading-tight">
                      {metric.unit ? `${metric.unit} ` : ""}
                      {metric.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dual Visual Tapestry (Living Specimen Chamber Aura) */}
          <div className="lg:col-span-5 relative reveal-init stagger-2">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Glowing Specimen Chamber Back-Ring Aura */}
              <div
                className="absolute -inset-3 bg-gradient-to-tr from-bio-600/35 via-primary/20 to-amber-extract/25 rounded-3xl blur-2xl opacity-80 pointer-events-none"
                aria-hidden="true"
              ></div>

              {/* Responsive Container: Stacks or pairs gracefully on mobile, dual column on tablet/desktop */}
              <div className="relative grid grid-cols-1 sm:grid-cols-12 gap-3.5 p-3 rounded-3xl chamber-capsule border border-primary/30">
                {/* Primary Portrait */}
                <div className="sm:col-span-8 relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl bg-surface-container/70 group min-h-[290px] sm:min-h-[440px]">
                  <Image
                    src="/images/alloice-portrait.jpg"
                    alt="Alloice Alloice Otieno, B.Sc. Biochemist and Botanical Researcher"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-surface-dim/95 via-surface-dim/20 to-transparent opacity-90"
                    aria-hidden="true"
                  ></div>
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg chamber-capsule text-xs font-mono border border-primary/25 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-primary uppercase font-bold tracking-widest">
                        Lead Researcher
                      </div>
                      <div className="text-white text-xs font-sans font-semibold">
                        Alloice Alloice Otieno
                      </div>
                    </div>
                    <div className="text-[10px] font-mono text-dew/80 bg-surface-dim/80 px-2 py-0.5 rounded border border-primary/20">
                      Moi Univ. Labs
                    </div>
                  </div>
                </div>

                {/* Secondary Elements: On mobile (<640px) split cleanly side-by-side or stacked, on desktop stay in column 4 */}
                <div className="sm:col-span-4 grid grid-cols-1 sm:grid-cols-1 gap-3">
                  {/* Microscopic Cellular Vitality */}
                  <div className="relative h-[180px] sm:h-[240px] rounded-2xl overflow-hidden border border-primary/40 shadow-xl bg-surface-dim/80 group">
                    <Image
                      src="/images/microscopic-cell.jpg"
                      alt="Microscopic cellular botanical view: glowing emerald plant cell walls and chloroplasts"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 30vw, 180px"
                      priority
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-surface-dim/85 via-transparent to-transparent"
                      aria-hidden="true"
                    ></div>
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-bio-950/90 text-[9px] font-mono text-primary border border-primary/40">
                      400x Vitality
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-dew font-medium leading-tight">
                      Cellular Matrix &amp; Phenolics
                    </div>
                  </div>

                  {/* Specimen Callout Card */}
                  <div className="rounded-2xl chamber-capsule p-3.5 border border-primary/25 flex flex-col justify-between text-xs space-y-2">
                    <div>
                      <div className="flex items-center gap-1.5 text-amber-extract font-mono text-[10px] uppercase font-bold">
                        <Dna className="w-3 h-3" />
                        <span>In Vitro Assays</span>
                      </div>
                      <p className="font-serif italic text-leaf/90 text-xs mt-1 leading-snug">
                        Radical scavenging kinetics in Western Kenya endemic flora.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-primary/20 font-mono text-[10px] text-primary flex items-center justify-between">
                      <span>Spectrophotometry</span>
                      <Network className="w-3 h-3 text-primary/70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

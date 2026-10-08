import React from "react";
import Image from "next/image";
import { Microscope, Leaf, CheckCircle2, Activity, ShieldCheck } from "lucide-react";
import { PILLARS } from "@/data/portfolioData";

export default function EthosSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Leaf":
        return <Leaf className="w-5 h-5 text-primary" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5 text-amber-extract" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-dew" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-primary-fixed" />;
      default:
        return <Leaf className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section
      id="ethos"
      className="py-16 sm:py-24 border-b border-primary/15 relative bg-[#001711]/60 backdrop-blur-md"
      data-purpose="ethos-section"
      aria-labelledby="ethos-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 reveal-init">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase chamber-capsule px-3.5 py-1.5 rounded-full border border-primary/30">
            <Microscope className="w-3.5 h-3.5 text-primary" />
            <span>Scientific Discipline &amp; Philosophy</span>
          </div>
          <h2
            id="ethos-heading"
            className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight"
          >
            The Living Bench
          </h2>
          <p className="font-sans text-dew/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Where cellular reverence harmonizes with analytical rigor. Every
            pipetted microliter represents a commitment to biological truth.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {PILLARS.map((pillar, idx) => (
            <article
              key={pillar.id}
              className={`rounded-2xl chamber-capsule chlorophyll-glass-hover border border-primary/25 overflow-hidden transition-all duration-300 group flex flex-col justify-between reveal-init stagger-${idx + 1}`}
            >
              {/* Card Image Frame with Editorial Overlay */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-surface-dim/80">
                <Image
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  className="object-cover object-center filter saturate-[1.1] group-hover:scale-108 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#001711] via-[#001711]/40 to-transparent"
                  aria-hidden="true"
                />

                {/* Floating Figure Badge & Specimen Icon */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-wider uppercase bg-surface-dim/90 backdrop-blur-md text-dew px-2.5 py-1 rounded-md border border-primary/30 shadow">
                    {pillar.figureNumber}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-surface-dim/90 backdrop-blur-md flex items-center justify-center border shadow ${pillar.borderClass}`}
                  >
                    {getIcon(pillar.iconName)}
                  </div>
                </div>
              </div>

              {/* Card Narrative Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-white mb-2 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-leaf/80 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div
                  className={`pt-3.5 border-t border-primary/20 font-mono text-[11px] ${pillar.colorClass} font-medium leading-tight`}
                >
                  {pillar.tag}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

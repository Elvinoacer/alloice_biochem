"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FlaskConical,
  Activity,
  Dna,
  Droplet,
  Laptop,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

type ProficiencyFilter = "ALL" | "Autonomous" | "Working" | "Theoretical";

export default function SkillsMatrixSection() {
  const [filter, setFilter] = useState<ProficiencyFilter>("ALL");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "FlaskConical":
        return <FlaskConical className="w-5 h-5 text-primary" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-amber-extract" />;
      case "Dna":
        return <Dna className="w-5 h-5 text-primary-fixed" />;
      case "Droplet":
        return <Droplet className="w-5 h-5 text-dew" />;
      case "Laptop":
        return <Laptop className="w-5 h-5 text-primary" />;
      default:
        return <FlaskConical className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 border-b border-primary/15 relative bg-[#001711]/70 backdrop-blur-md"
      data-purpose="skills-matrix-section"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6 reveal-init">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase chamber-capsule px-3.5 py-1.5 rounded-full border border-primary/30">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              <span>Competency Map</span>
            </div>
            <h2
              id="skills-heading"
              className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mt-3"
            >
              Cellular &amp; Bioanalytical Skills Matrix
            </h2>
            <p className="font-sans text-dew/85 text-sm sm:text-base mt-2">
              Graded with honest laboratory appraisal from Moi University benches
              and certified industrial practicum rotations.
            </p>
          </div>

          {/* Interactive Proficiency Filter */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-surface-container border border-primary/20 font-mono text-xs self-start md:self-auto">
            <div className="flex items-center gap-1.5 px-2 text-dew/60 text-[11px] uppercase">
              <Filter className="w-3 h-3 text-primary" />
              <span>Filter:</span>
            </div>
            {(
              [
                { id: "ALL", label: "All Skills" },
                { id: "Autonomous", label: "Autonomous" },
                { id: "Working", label: "Working" },
                { id: "Theoretical", label: "Theoretical" },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`min-h-[38px] px-3.5 py-1.5 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                  filter === item.id
                    ? item.id === "Autonomous"
                      ? "bg-primary text-surface-dim font-bold shadow-[0_0_12px_rgba(78,222,163,0.3)]"
                      : item.id === "Working"
                      ? "bg-dew text-surface-dim font-bold shadow-[0_0_12px_rgba(149,211,186,0.3)]"
                      : item.id === "Theoretical"
                      ? "bg-amber-extract text-surface-dim font-bold shadow-[0_0_12px_rgba(251,191,36,0.3)]"
                      : "bg-surface-high text-primary font-bold border border-primary/40"
                    : "text-dew/80 hover:text-white hover:bg-surface-high/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid of Category Cards with Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const filteredSkills =
              filter === "ALL"
                ? category.skills
                : category.skills.filter((s) => s.level === filter);

            const isWide = idx === 4; // Computational category spans 2 columns on tablet/desktop

            return (
              <article
                key={idx}
                className={`rounded-2xl chamber-capsule border border-primary/25 overflow-hidden flex flex-col justify-between ${
                  isWide ? "md:col-span-2" : ""
                } transition-all duration-300 group reveal-init stagger-${(idx % 3) + 1}`}
              >
                {/* Domain Visual Banner */}
                <div className="relative w-full aspect-[16/8] sm:aspect-[16/7] overflow-hidden bg-surface-dim/80">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover object-center filter saturate-[1.1] group-hover:scale-108 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#001711] via-[#001711]/45 to-transparent"
                    aria-hidden="true"
                  />

                  {/* Header Badges & Tagline */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] tracking-wider uppercase bg-surface-dim/90 backdrop-blur-md text-dew px-2.5 py-1 rounded-md border border-primary/30 shadow">
                      {category.tagline}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg bg-surface-dim/90 backdrop-blur-md flex items-center justify-center border shadow ${category.borderColor}`}
                    >
                      {getCategoryIcon(category.icon)}
                    </div>
                  </div>
                </div>

                {/* Card Content & Skill Badges */}
                <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div
                    className={`flex items-center gap-3 font-serif text-lg sm:text-xl font-medium ${category.color}`}
                  >
                    <span>{category.title}</span>
                  </div>

                  {filteredSkills.length === 0 ? (
                    <div className="p-4 rounded-xl chamber-card text-center text-dew/60 font-mono text-xs">
                      No skills matched &ldquo;{filter}&rdquo; in this domain.
                    </div>
                  ) : isWide ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs font-mono">
                      {filteredSkills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-3 rounded-lg chamber-card text-dew border border-primary/10 flex flex-col justify-between hover:border-primary/30 transition-colors"
                        >
                          <div className="font-bold text-white mb-2 leading-snug">
                            {skill.name}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-dew/60">Competency:</span>
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold ${skill.levelColor}`}
                            >
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2.5 text-xs font-mono">
                      {filteredSkills.map((skill, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-center justify-between p-2.5 rounded-lg chamber-card border border-primary/10 hover:border-primary/30 transition-colors"
                        >
                          <span className="text-leaf leading-snug">{skill.name}</span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold shrink-0 ml-2 ${skill.levelColor}`}
                          >
                            {skill.level}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 p-4 rounded-2xl chamber-card flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-dew border border-primary/20">
          <div className="text-[11px] uppercase tracking-wider text-primary font-bold">
            Laboratory Grading Standard:
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
              <strong>Autonomous:</strong> Independent protocol execution &amp; troubleshooting
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-dew inline-block"></span>
              <strong>Working:</strong> Hands-on bench execution under standard supervision
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-extract inline-block"></span>
              <strong>Theoretical:</strong> Mechanistic principles &amp; structural interpretation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

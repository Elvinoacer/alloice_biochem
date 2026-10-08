import React from "react";
import Image from "next/image";
import {
  GraduationCap,
  Award,
  Check,
  Atom,
  Dna,
  TestTube,
  Sprout,
  ShieldCheck,
  Building,
} from "lucide-react";
import { COURSEWORK_GROUPS } from "@/data/portfolioData";

export default function EducationSection() {
  const getGroupIcon = (iconName: string) => {
    switch (iconName) {
      case "Atom":
        return <Atom className="w-4 h-4 text-primary" />;
      case "Dna":
        return <Dna className="w-4 h-4 text-amber-extract" />;
      case "TestTube":
        return <TestTube className="w-4 h-4 text-dew" />;
      case "Sprout":
        return <Sprout className="w-4 h-4 text-primary-fixed" />;
      default:
        return <Atom className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <section
      id="education"
      className="py-16 sm:py-24 border-b border-primary/15 relative bg-[#001711]/60 backdrop-blur-md"
      data-purpose="education-section"
      aria-labelledby="education-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Degree Credential Card with Rich Imagery */}
          <div className="lg:col-span-5 space-y-6 reveal-init">
            <div className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase chamber-capsule px-3.5 py-1.5 rounded-full border border-primary/30">
              <GraduationCap className="w-3.5 h-3.5 text-primary" />
              <span>Moi University Pedigree</span>
            </div>

            <article className="chamber-capsule rounded-3xl border border-primary/25 shadow-xl overflow-hidden group">
              {/* University Campus / Academic Hall Banner */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] overflow-hidden bg-surface-dim/80">
                <Image
                  src="/images/education-moi-university.jpg"
                  alt="Moi University School of Sciences and laboratory research building"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center filter saturate-[1.1] group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#001711] via-[#001711]/50 to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-wider uppercase bg-surface-dim/90 backdrop-blur-md text-primary px-2.5 py-1 rounded-md border border-primary/30 flex items-center gap-1.5 shadow">
                    <Building className="w-3 h-3 text-primary" />
                    <span>Moi University · Main Campus</span>
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-surface-dim/90 backdrop-blur-md text-primary flex items-center justify-center border border-primary/30 shadow">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <div className="font-mono text-[10px] uppercase text-dew/80 tracking-widest">
                    School of Sciences &amp; Aerospace Studies
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-white">
                    Bachelor of Science in Biochemistry
                  </h3>
                  <div className="font-mono text-xs text-primary font-medium mt-1">
                    Eldoret, Uasin Gishu County, Kenya
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-leaf/85 leading-relaxed">
                  Four-year curriculum synthesizing enzymology, cellular energetics,
                  phytochemistry, clinical diagnostics, and molecular genetics with
                  rigorous wet-bench laboratory practicums.
                </p>

                <div className="pt-4 border-t border-primary/20 space-y-2.5 text-xs font-mono">
                  <div className="flex items-center justify-between text-dew">
                    <span>Classification Track:</span>
                    <span className="text-white font-bold">B.Sc. Honors Candidate</span>
                  </div>
                  <div className="flex items-center justify-between text-dew">
                    <span>Thesis Status:</span>
                    <span className="text-primary font-bold">Completed &amp; Approved</span>
                  </div>
                  <div className="flex items-center justify-between text-dew">
                    <span>Class Year:</span>
                    <span className="text-white font-bold">Class of 2026</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Certifications Block */}
            <div className="p-5 sm:p-6 rounded-2xl chamber-card space-y-3.5 text-xs border border-primary/20">
              <div className="font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Professional Certifications</span>
              </div>
              <ul className="space-y-2.5 text-leaf/85 font-sans">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Good Laboratory Practice (GLP):</strong> Chemical
                    hygiene, hazard neutralization &amp; SOP compliance.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>ICH-GCP Ethics:</strong> Clinical specimen handling
                    and ethical research frameworks.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Intro to R &amp; Biostatistics:</strong> Hypothesis
                    testing, regression, and ANOVA in biological systems.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Categorized Coursework Badges */}
          <div className="lg:col-span-7 space-y-6 reveal-init stagger-2">
            <div>
              <h3
                id="education-heading"
                className="font-serif text-2xl sm:text-3xl text-white font-normal"
              >
                Academic Coursework Architecture
              </h3>
              <p className="font-sans text-xs sm:text-sm text-dew/85 mt-1">
                Rigorous grounding across modern biochemical subdisciplines:
              </p>
            </div>

            <div className="space-y-4">
              {COURSEWORK_GROUPS.map((group, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl chamber-capsule border border-primary/20 space-y-3 reveal-init stagger-${(idx % 4) + 1}`}
                >
                  <div
                    className={`font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${group.color}`}
                  >
                    {getGroupIcon(group.icon)}
                    <span>{group.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {group.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1.5 rounded-lg chamber-card text-leaf border border-primary/10 hover:border-primary/30 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

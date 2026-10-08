"use client";

import React from "react";
import Image from "next/image";
import { Crosshair, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { TARGET_ROLES } from "@/data/portfolioData";

interface TargetRolesSectionProps {
  onSelectRole: (roleTitle: string) => void;
}

export default function TargetRolesSection({
  onSelectRole,
}: TargetRolesSectionProps) {
  return (
    <section
      id="target-roles"
      className="py-16 sm:py-24 border-b border-primary/15 relative bg-[#001711]/70 backdrop-blur-md"
      data-purpose="target-roles-section"
      aria-labelledby="target-roles-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-14 reveal-init">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase chamber-capsule px-3.5 py-1.5 rounded-full border border-primary/30">
            <Crosshair className="w-3.5 h-3.5 text-primary" />
            <span>Immediate Value Add</span>
          </div>
          <h2
            id="target-roles-heading"
            className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mt-3"
          >
            Where Alloice Strengthens Your Laboratory
          </h2>
          <p className="font-sans text-dew/85 text-sm sm:text-base mt-2">
            Target institutional placements where rigorous bench technique and
            biochemical curiosity drive results:
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TARGET_ROLES.map((role, idx) => (
            <article
              key={role.id}
              className={`rounded-2xl chamber-capsule chlorophyll-glass-hover border border-primary/25 overflow-hidden flex flex-col justify-between transition-all duration-300 group reveal-init stagger-${idx + 1}`}
            >
              {/* Role Image Banner Frame */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-surface-dim/80">
                <Image
                  src={role.image}
                  alt={role.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover object-center filter saturate-[1.1] group-hover:scale-108 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#001711] via-[#001711]/45 to-transparent"
                  aria-hidden="true"
                />

                {/* Floating Sector Badge & Inquire Trigger */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-surface-dim/90 backdrop-blur-md border ${role.borderColor} ${role.color}`}
                    >
                      {role.number}
                    </span>
                    <span className="font-mono text-[10px] tracking-wider uppercase bg-surface-dim/90 backdrop-blur-md text-dew px-2 py-1 rounded-md border border-primary/30">
                      {role.sectorBadge}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectRole(role.title)}
                    className="p-2 rounded-xl bg-surface-dim/90 text-primary hover:text-white hover:bg-primary/30 border border-primary/30 transition-all cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center shadow"
                    title={`Inquire about ${role.title}`}
                    aria-label={`Inquire about ${role.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-white group-hover:text-primary transition-colors leading-snug">
                    {role.title}
                  </h3>

                  <p className={`text-xs font-mono font-medium ${role.color}`}>
                    {role.institutions}
                  </p>

                  <p className="text-xs sm:text-sm text-leaf/80 leading-relaxed font-sans">
                    {role.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-primary/20 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-dew/90 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{role.valueAdd}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

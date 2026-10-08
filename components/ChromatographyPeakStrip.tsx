"use client";
import React, { useState } from "react";
import { CHROMATOGRAPHY_PEAKS, ChromatographyPeak } from "@/data/portfolioData";
import { Activity, Sparkles } from "lucide-react";

export default function ChromatographyPeakStrip() {
  const [selectedPeak, setSelectedPeak] = useState<ChromatographyPeak>(CHROMATOGRAPHY_PEAKS[2]); // Default to Rutin (largest peak)

  return (
    <div className="space-y-6">
      {/* Header with HPLC Method Parameters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-primary/20">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-primary" />
            <span className="font-serif text-lg font-medium text-white">
              Analytical HPLC Chromatographic Peak Telemetry
            </span>
          </div>
          <p className="text-xs font-mono text-dew/80 mt-0.5">
            Fractional purity elution profile of Kenyan vegetable extracts across 0–12 min
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
          <span className="px-2.5 py-1 rounded-md bg-surface-dim/90 border border-primary/30 text-primary">
            Column: C18 ODS (250 × 4.6 mm, 5 µm)
          </span>
          <span className="px-2.5 py-1 rounded-md bg-surface-dim/90 border border-amber-extract/30 text-amber-extract">
            Flow: 0.8 mL/min
          </span>
          <span className="px-2.5 py-1 rounded-md bg-surface-dim/90 border border-dew/30 text-dew">
            PDA: 200–400 nm
          </span>
        </div>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="sm:hidden flex items-center justify-between text-[11px] font-mono text-dew/70 px-1">
        <span>Elution Retention Scale:</span>
        <span className="text-primary flex items-center gap-1 font-semibold">Swipe across 0–12 min ↔</span>
      </div>

      {/* Continuous Horizontal Telemetry Bar with Amber-to-Emerald Gradient */}
      <div className="relative pt-12 pb-6 px-4 rounded-2xl bg-surface-dim/95 border border-primary/25 overflow-x-auto sm:overflow-visible">
        <div className="min-w-[620px]">
          {/* Peak Callout Markers (Top) */}
          <div className="relative h-16 mb-2">
            {CHROMATOGRAPHY_PEAKS.map((peak) => {
              const isSelected = selectedPeak.id === peak.id;
              const leftPercent = (peak.retentionTime / 12) * 100;
              const badgeColor =
                peak.color === "primary"
                  ? "border-primary text-primary"
                  : peak.color === "amber"
                  ? "border-amber-extract text-amber-extract"
                  : "border-dew text-dew";

              return (
                <div
                  key={peak.id}
                  className="absolute -translate-x-1/2 flex flex-col items-center cursor-pointer transition-all duration-300"
                  style={{ left: `${leftPercent}%` }}
                  onClick={() => setSelectedPeak(peak)}
                >
                  <button
                    type="button"
                    className={`min-h-[30px] px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider font-bold border transition-all duration-200 cursor-pointer flex items-center justify-center ${
                      isSelected
                        ? "bg-primary text-surface-dim shadow-[0_0_12px_rgba(78,222,163,0.5)] scale-110"
                        : `bg-surface-container/90 ${badgeColor} hover:scale-105`
                    }`}
                    aria-label={`Inspect peak ${peak.name} at retention time ${peak.retentionTime} minutes`}
                  >
                    {peak.name.split(" ")[0]} ({peak.retentionTime}m)
                  </button>
                  {/* Vertical capillary connection line */}
                  <div
                    className={`w-[1px] h-6 mt-1 transition-colors ${
                      isSelected ? "bg-primary shadow-[0_0_8px_#4edea3]" : "bg-primary/30"
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* The Amber-to-Emerald Gradient Telemetry Bar */}
          <div className="relative h-7 rounded-xl bg-gradient-to-r from-amber-extract/35 via-primary/50 to-dew/40 border border-primary/40 shadow-inner flex items-center overflow-visible">
            {/* Shimmer light animation */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse pointer-events-none overflow-hidden"></div>

            {/* Internal retention interval ticks */}
            {Array.from({ length: 13 }).map((_, idx) => (
              <div
                key={idx}
                className="absolute top-0 bottom-0 w-[1px] bg-primary/20 pointer-events-none"
                style={{ left: `${(idx / 12) * 100}%` }}
              ></div>
            ))}

            {/* Peak relative area indicators on the bar */}
            {CHROMATOGRAPHY_PEAKS.map((peak) => {
              const leftPercent = (peak.retentionTime / 12) * 100;
              const isSelected = selectedPeak.id === peak.id;
              return (
                <button
                  key={peak.id}
                  type="button"
                  onClick={() => setSelectedPeak(peak)}
                  className={`absolute -translate-x-1/2 w-6 h-6 rounded-full border-2 transition-all cursor-pointer z-10 flex items-center justify-center ${
                    isSelected
                      ? "bg-white border-primary scale-110 shadow-[0_0_14px_#4edea3]"
                      : "bg-surface-dim border-primary/80 hover:scale-110"
                  }`}
                  style={{ left: `${leftPercent}%` }}
                  title={`${peak.name} (Rt: ${peak.retentionTime} min, Area: ${peak.relativeArea}%)`}
                  aria-label={`${peak.name} telemetry node`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? "bg-primary" : "bg-primary/60"
                    }`}
                  ></span>
                </button>
              );
            })}
          </div>

          {/* Retention Time Axis Scale (Bottom) */}
          <div className="relative h-6 mt-1.5 flex justify-between font-mono text-[10px] text-dew/60 px-1">
            {Array.from({ length: 7 }).map((_, idx) => {
              const min = idx * 2;
              return (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-[1px] h-1.5 bg-primary/30 mb-0.5"></div>
                  <span>{min}.0 min</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Peak Telemetry Inspector Dossier */}
      <div className="p-4 sm:p-5 rounded-2xl chamber-capsule border border-primary/30 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-surface-container/90 border border-primary/30 flex items-center justify-center text-primary font-bold">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-serif italic text-lg sm:text-xl text-white font-medium flex items-center gap-2">
                <span>{selectedPeak.name}</span>
                <span className="not-italic text-[11px] font-mono px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/40">
                  {selectedPeak.category}
                </span>
              </div>
              <div className="text-xs font-mono text-dew/70 mt-0.5">
                Voucher Origin: {selectedPeak.plantSource}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-dew/70">Purity Quotient:</span>
            <span className="px-2.5 py-1 rounded bg-primary/20 text-primary font-bold border border-primary/30">
              {selectedPeak.purity}% UV Homogeneity
            </span>
          </div>
        </div>

        {/* Telemetry Metric Readouts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono pt-2 border-t border-primary/15">
          <div className="p-3 rounded-xl chamber-card">
            <div className="text-[10px] text-dew/60 uppercase">Retention Time (Rt)</div>
            <div className="text-lg font-bold text-primary mt-1">
              {selectedPeak.retentionTime} <span className="text-xs font-normal">min</span>
            </div>
            <div className="text-[10px] text-dew/60 mt-0.5">C18 Reverse Phase</div>
          </div>

          <div className="p-3 rounded-xl chamber-card">
            <div className="text-[10px] text-dew/60 uppercase">Relative Peak Area</div>
            <div className="text-lg font-bold text-amber-extract mt-1">
              {selectedPeak.relativeArea}%
            </div>
            <div className="text-[10px] text-dew/60 mt-0.5">Total Integrated Signal</div>
          </div>

          <div className="p-3 rounded-xl chamber-card">
            <div className="text-[10px] text-dew/60 uppercase">Spectral Peak (λmax)</div>
            <div className="text-lg font-bold text-dew mt-1">
              {selectedPeak.lambdaMax} <span className="text-xs font-normal">nm</span>
            </div>
            <div className="text-[10px] text-dew/60 mt-0.5">Diode Array Detector</div>
          </div>

          <div className="p-3 rounded-xl chamber-card">
            <div className="text-[10px] text-dew/60 uppercase">Theoretical Plates (N)</div>
            <div className="text-lg font-bold text-white mt-1">
              {selectedPeak.theoreticalPlates.toLocaleString()}
            </div>
            <div className="text-[10px] text-dew/60 mt-0.5">Retention factor k′ = {selectedPeak.kPrime}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

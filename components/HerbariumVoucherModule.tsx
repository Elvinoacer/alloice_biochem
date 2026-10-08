"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HERBARIUM_VOUCHERS, HerbariumVoucher } from "@/data/portfolioData";
import {
  Compass,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  ShieldCheck,
  Microscope,
} from "lucide-react";

export default function HerbariumVoucherModule() {
  const [selectedVoucher, setSelectedVoucher] = useState<HerbariumVoucher>(
    HERBARIUM_VOUCHERS[0]
  );
  const [viewMode, setViewMode] = useState<"macro" | "micro">("macro");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-primary/20">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-primary" />
            <span className="font-serif text-lg sm:text-xl font-medium text-white">
              Official Herbarium Voucher Archive &amp; Field Manifest
            </span>
          </div>
          <p className="text-xs font-mono text-dew/80 mt-0.5">
            Archival museum vouchers deposited at Moi University Herbarium (MOU)
          </p>
        </div>

        {/* Voucher Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          {HERBARIUM_VOUCHERS.map((voucher) => {
            const isSelected = selectedVoucher.id === voucher.id;
            return (
              <button
                key={voucher.id}
                type="button"
                onClick={() => setSelectedVoucher(voucher)}
                className={`min-h-[38px] px-3.5 py-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                  isSelected
                    ? "bg-primary text-surface-dim font-bold border-primary shadow-[0_0_12px_rgba(78,222,163,0.4)]"
                    : "chamber-card text-dew border-primary/20 hover:text-white hover:border-primary/40"
                }`}
                aria-label={`Select botanical voucher ${voucher.voucherNumber} for ${voucher.binomial}`}
              >
                <em>{voucher.binomial.split(" ")[0]}</em> · {voucher.voucherNumber.slice(-3)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Editorial Media Frame pairing Macro Texture with Botanical Field Collection Tags */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Macro / Micro Photographic Texture Frame */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-primary/30 shadow-xl bg-surface-dim/90 flex flex-col justify-between min-h-[360px] group">
          <div className="relative w-full h-[250px] sm:h-[290px] overflow-hidden">
            <Image
              src={
                viewMode === "macro"
                  ? selectedVoucher.macroImage
                  : selectedVoucher.microImage
              }
              alt={
                viewMode === "macro"
                  ? `Macro botanical voucher specimen of ${selectedVoucher.binomial} (${selectedVoucher.commonName})`
                  : `400x microscopic cellular view of ${selectedVoucher.binomial} plant cell walls`
              }
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover object-center filter saturate-[1.15] group-hover:scale-105 transition-transform duration-700"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent"
              aria-hidden="true"
            ></div>

            {/* Interactive Macro vs Microscopic View Switcher */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 p-1 rounded-xl bg-surface-dim/95 backdrop-blur-md border border-primary/30 text-[10px] font-mono shadow z-10">
              <button
                type="button"
                onClick={() => setViewMode("macro")}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  viewMode === "macro"
                    ? "bg-primary text-surface-dim font-bold"
                    : "text-dew/80 hover:text-white"
                }`}
              >
                Macro Voucher
              </button>
              <button
                type="button"
                onClick={() => setViewMode("micro")}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                  viewMode === "micro"
                    ? "bg-primary text-surface-dim font-bold"
                    : "text-dew/80 hover:text-white"
                }`}
              >
                <Microscope className="w-3 h-3" />
                <span>400x Cellular</span>
              </button>
            </div>

            {/* Official Accession Stamp */}
            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-bio-950/90 backdrop-blur-md border border-primary/40 text-[10px] font-mono text-primary font-bold shadow uppercase tracking-wider">
              {selectedVoucher.voucherNumber}
            </div>
          </div>

          {/* Microscopy Detail Box */}
          <div className="p-4 bg-surface-container/90 border-t border-primary/20 space-y-1.5">
            <div className="font-mono text-[10px] text-amber-extract uppercase font-bold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Microscopic Botanical Diagnostic:</span>
            </div>
            <p className="font-sans text-xs text-leaf/85 leading-relaxed">
              {selectedVoucher.microscopyDetail}
            </p>
          </div>
        </div>

        {/* Right Column: Authentic Herbarium Field Collection Tag & Taxon Dossier */}
        <div className="lg:col-span-7 rounded-2xl chamber-capsule p-5 sm:p-6 border border-primary/30 space-y-5 flex flex-col justify-between shadow-2xl">
          {/* Tag Top Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-primary/20 pb-4">
            <div>
              <div className="font-mono text-[11px] text-primary uppercase font-bold tracking-widest flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Moi University Herbarium (MOU) Specimen Sheet</span>
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1">
                <em className="italic">{selectedVoucher.binomial}</em>{" "}
                <span className="not-italic text-sm text-dew/70 font-mono">
                  {selectedVoucher.authority}
                </span>
              </h4>
              <div className="text-xs font-mono text-amber-extract mt-0.5">
                Family: {selectedVoucher.family}
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1">
              <span className="px-2.5 py-1 rounded-md bg-primary/20 text-primary border border-primary/30 font-mono text-xs font-bold w-fit">
                {selectedVoucher.statusBadge}
              </span>
              <span className="text-[11px] font-mono text-dew/70">
                Accession: #{selectedVoucher.voucherNumber}
              </span>
            </div>
          </div>

          {/* Local Vernacular Nomenclature & Field Coordinates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-3 rounded-xl chamber-card space-y-1">
              <div className="text-[10px] text-dew/60 uppercase">Vernacular Binomials</div>
              <div className="text-white font-bold">{selectedVoucher.commonName}</div>
              <div className="text-leaf/80 text-[11px]">{selectedVoucher.localName}</div>
            </div>

            <div className="p-3 rounded-xl chamber-card space-y-1">
              <div className="text-[10px] text-dew/60 uppercase flex items-center gap-1">
                <MapPin className="w-3 h-3 text-primary" />
                <span>Geographic Site &amp; Elevation</span>
              </div>
              <div className="text-white font-bold">{selectedVoucher.altitude}</div>
              <div className="text-dew/80 text-[11px]">{selectedVoucher.coordinates}</div>
            </div>
          </div>

          {/* Phenology & Morphology Field Notes */}
          <div className="space-y-3 text-xs">
            <div className="space-y-1">
              <div className="font-mono text-[10px] text-primary uppercase font-bold">
                Phenological Condition &amp; Botanical Morphology:
              </div>
              <p className="font-sans text-leaf/85 leading-relaxed">
                {selectedVoucher.morphology}
              </p>
            </div>

            <div className="space-y-1 pt-2 border-t border-primary/10">
              <div className="font-mono text-[10px] text-amber-extract uppercase font-bold">
                Phytochemical Defense &amp; Radical Quenching Signature:
              </div>
              <p className="font-sans text-leaf/85 leading-relaxed">
                {selectedVoucher.phytochemicalProfile}
              </p>
            </div>
          </div>

          {/* Archival Chain Footer */}
          <div className="pt-3 border-t border-primary/20 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-dew/70">
            <div className="flex items-center gap-1.5">
              <Compass className="w-3 h-3 text-primary" />
              <span>Locality: {selectedVoucher.locality}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-amber-extract" />
              <span>{selectedVoucher.collectionDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Sprout } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 bg-[#001711]/90 backdrop-blur-xl text-dew/80 py-14 border-t border-primary/20 text-xs font-mono"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 reveal-init">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-primary/10">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-primary text-surface-dim font-bold flex items-center justify-center shadow-md shadow-primary/20 shrink-0">
              <Sprout className="w-5 h-5 text-surface-dim" />
            </div>
            <div>
              <div className="font-serif italic font-bold text-white text-base">
                Alloice Alloice Otieno
              </div>
              <div className="text-[11px] text-dew/70 font-sans">
                B.Sc. Biochemistry · Department of Biochemistry, Moi University
              </div>
            </div>
          </div>

          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[11px] uppercase tracking-wider"
          >
            <a href="#ethos" className="p-1 hover:text-primary transition-colors">
              Living Bench
            </a>
            <a href="#flagship" className="p-1 hover:text-primary transition-colors">
              Indigenous Flora
            </a>
            <a href="#investigations" className="p-1 hover:text-primary transition-colors">
              Enzyme Kinetics
            </a>
            <a href="#skills" className="p-1 hover:text-primary transition-colors">
              Cellular Matrix
            </a>
            <a href="#attachment" className="p-1 hover:text-primary transition-colors">
              Industrial Field
            </a>
            <a href="#contact" className="p-1 hover:text-primary transition-colors">
              Inquiries
            </a>
          </nav>

          <div className="text-dew/70 text-center md:text-right text-[11px]">
            &copy; {currentYear} Alloice Alloice Otieno.
            <div className="text-dew/50 text-[10px]">
              Living Biochemistry &amp; Cellular Vitality.
            </div>
          </div>
        </div>

        {/* Botanical Species Quick Glossary */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-dew/60 font-sans italic text-center">
          <span>Voucher Flora:</span>
          <span>
            <em>Cleome gynandra</em> (Spider plant / Saget)
          </span>
          <span>&bull;</span>
          <span>
            <em>Amaranthus hybridus</em> (Smooth amaranth / Terere)
          </span>
          <span>&bull;</span>
          <span>
            <em>Solanum nigrum</em> (African nightshade / Managu)
          </span>
        </div>
      </div>
    </footer>
  );
}

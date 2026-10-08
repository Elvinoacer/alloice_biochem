"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Sprout,
  FileText,
  Menu,
  X,
  ExternalLink,
  ChevronDown,
  Leaf,
  FlaskConical,
  Activity,
  Dna,
  Microscope,
  Award,
  GraduationCap,
  Mail,
} from "lucide-react";

interface NavbarProps {
  onOpenCV: () => void;
}

interface NavItem {
  id: string;
  href: string;
  shortLabel: string;
  fullLabel: string;
  descriptor: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PRIMARY_RESEARCH_ITEMS: NavItem[] = [
  {
    id: "ethos",
    href: "#ethos",
    shortLabel: "Ethos",
    fullLabel: "Living Bench Ethos",
    descriptor: "Botanical paradigm & flora focus",
    icon: Leaf,
  },
  {
    id: "flagship",
    href: "#flagship",
    shortLabel: "Thesis",
    fullLabel: "Indigenous Thesis",
    descriptor: "Spider plant extraction & quantitative UV-Vis",
    icon: FlaskConical,
  },
  {
    id: "investigations",
    href: "#investigations",
    shortLabel: "Assays",
    fullLabel: "Assay Pathways",
    descriptor: "Enzyme kinetics & in silico docking",
    icon: Activity,
  },
];

const COMPETENCY_ITEMS: NavItem[] = [
  {
    id: "skills",
    href: "#skills",
    shortLabel: "Skills",
    fullLabel: "Cellular Matrix",
    descriptor: "Wet-lab protocols & spectrophotometry",
    icon: Dna,
  },
  {
    id: "attachment",
    href: "#attachment",
    shortLabel: "Practicum",
    fullLabel: "Industrial Field",
    descriptor: "Pyrethrum QA & audited logbook",
    icon: Microscope,
  },
  {
    id: "target-roles",
    href: "#target-roles",
    shortLabel: "Roles",
    fullLabel: "Target Roles",
    descriptor: "Laboratory placement alignment",
    icon: Award,
  },
  {
    id: "education",
    href: "#education",
    shortLabel: "Credentials",
    fullLabel: "Academic Pedigree",
    descriptor: "Moi University B.Sc. coursework & honors",
    icon: GraduationCap,
  },
];

const CONTACT_ITEM: NavItem = {
  id: "contact",
  href: "#contact",
  shortLabel: "Inquiries",
  fullLabel: "Inquiries Hub",
  descriptor: "Direct laboratory contact & opportunities",
  icon: Mail,
};

// All items arranged strictly in natural page scroll sequence
const ALL_NAV_ITEMS: NavItem[] = [
  ...PRIMARY_RESEARCH_ITEMS, // 0: ethos, 1: flagship, 2: investigations
  ...COMPETENCY_ITEMS,       // 3: skills, 4: attachment, 5: target-roles, 6: education
  CONTACT_ITEM,              // 7: contact
];

// Core 5 links visible on lg (1024px)
const PRIMARY_NAV_ITEMS = ALL_NAV_ITEMS.slice(0, 5);

// Secondary 3 links promoted directly on xl (1280px+), or grouped under "More ▾" on lg
const SECONDARY_NAV_ITEMS = ALL_NAV_ITEMS.slice(5);

const ALL_SECTION_IDS = ALL_NAV_ITEMS.map((item) => item.id);

export default function Navbar({ onOpenCV }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const moreDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Bottom of page detection (activates contact hub)
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.scrollY;
      if (scrollHeight - scrollPosition < 80) {
        setActiveSection("contact");
        return;
      }

      // Top of page (Hero section)
      if (window.scrollY < 120) {
        setActiveSection("");
        return;
      }

      // Check section bounding rect relative to viewport reading line
      const readingLine = 160;
      for (let i = ALL_SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(ALL_SECTION_IDS[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= readingLine) {
            setActiveSection(ALL_SECTION_IDS[i]);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close open menus when viewport resizes across major breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
      if (window.innerWidth >= 1280) {
        setMoreDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle outside clicks for More dropdown and Escape key dismiss
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(e.target as Node)
      ) {
        setMoreDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMoreDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Lock body scroll cleanly when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  // Active check for secondary items grouped under "More" on lg
  const isMoreActive =
    activeSection === "target-roles" ||
    activeSection === "education" ||
    activeSection === "contact";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#001711]/95 backdrop-blur-xl border-b border-primary/25 shadow-lg shadow-black/40"
          : "bg-[#001711]/85 backdrop-blur-md border-b border-primary/10"
      }`}
      data-purpose="site-header"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14" : "h-16"
          }`}
        >
          {/* Brand Identity - Uncluttered, crisp & responsive across viewports */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1 shrink-0"
            aria-label="Alloice Otieno Portfolio Home"
          >
            {/* Specimen Capsule Icon */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-bio-500 via-primary to-surface-bright flex items-center justify-center text-surface-dim font-bold shadow-md shadow-bio-500/25 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Sprout className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#001711]" />
            </div>

            {/* Typography & Bio-Credential */}
            <div className="min-w-0">
              <div className="font-serif italic font-semibold text-white text-sm sm:text-base tracking-wide group-hover:text-primary transition-colors flex items-center gap-1.5 sm:gap-2">
                <span className="truncate">Alloice Otieno</span>
                <span className="hidden sm:inline-block text-[9px] sm:text-[10px] font-mono tracking-widest uppercase bg-bio-950/90 text-primary border border-primary/30 px-1.5 py-0.5 rounded-full not-italic shrink-0">
                  Bio-Lab
                </span>
              </div>
              <div className="text-[10px] sm:text-xs text-dew/80 font-mono flex items-center gap-1.5">
                <span className="truncate">B.Sc. Biochemistry</span>
                <span className="hidden xl:inline-block w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                <span className="hidden xl:inline text-amber-extract/90 truncate">
                  Indigenous Flora
                </span>
              </div>
            </div>
          </a>

          {/* Center Desktop Navigation Links (Visible on lg+ viewports: >= 1024px) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-surface-dim/80 backdrop-blur-md border border-primary/20 rounded-full px-1.5 xl:px-2 py-1 shadow-lg shadow-black/30 text-xs font-mono tracking-wider uppercase"
          >
            {/* Primary Core Links (Visible on lg, xl, 2xl) */}
            {PRIMARY_NAV_ITEMS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-full transition-all duration-200 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? "text-primary font-bold bg-primary/15 border border-primary/40 shadow-[0_0_12px_rgba(78,222,163,0.25)]"
                      : "text-dew/75 hover:text-white hover:bg-surface-high/50 border border-transparent"
                  }`}
                >
                  {link.shortLabel}
                </a>
              );
            })}

            {/* Secondary Direct Links (Promoted on xl+ in natural scroll sequence) */}
            {SECONDARY_NAV_ITEMS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`hidden xl:inline-flex px-2.5 xl:px-3 py-1.5 rounded-full transition-all duration-200 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? "text-primary font-bold bg-primary/15 border border-primary/40 shadow-[0_0_12px_rgba(78,222,163,0.25)]"
                      : "text-dew/75 hover:text-white hover:bg-surface-high/50 border border-transparent"
                  }`}
                >
                  {link.shortLabel}
                </a>
              );
            })}

            {/* Adaptive "More ▾" Dropdown (Active strictly on lg: 1024px–1279px, cleanly hidden on xl+) */}
            <div
              ref={moreDropdownRef}
              className="relative hidden lg:block xl:hidden"
            >
              <button
                type="button"
                onClick={() => setMoreDropdownOpen((prev) => !prev)}
                aria-expanded={moreDropdownOpen}
                aria-haspopup="menu"
                aria-label="Toggle additional sections menu"
                className={`px-2.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1 border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer ${
                  isMoreActive
                    ? "text-primary font-bold bg-primary/15 border-primary/40 shadow-[0_0_12px_rgba(78,222,163,0.25)]"
                    : moreDropdownOpen
                    ? "text-white bg-surface-high border-primary/30"
                    : "text-dew/75 hover:text-white hover:bg-surface-high/50 border-transparent"
                }`}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreDropdownOpen ? "rotate-180 text-primary" : "text-dew/60"
                  }`}
                />
              </button>

              {/* Extended Sections Dropdown Menu */}
              {moreDropdownOpen && (
                <div
                  role="menu"
                  aria-label="Additional portfolio sections"
                  className="absolute right-0 top-full mt-2 w-64 p-2 rounded-2xl bg-[#001711]/95 backdrop-blur-2xl border border-primary/25 shadow-2xl shadow-black/80 z-50 animate-fadeIn space-y-1"
                >
                  <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-primary/70 border-b border-primary/15">
                    Extended Folio
                  </div>
                  {SECONDARY_NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        role="menuitem"
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`flex items-center gap-3 p-2 rounded-xl transition-colors group ${
                          isActive
                            ? "bg-surface-high/90 text-primary border border-primary/40 shadow-[0_0_12px_rgba(78,222,163,0.15)]"
                            : "text-dew hover:text-white hover:bg-surface-high/50"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105 ${
                            isActive
                              ? "bg-primary/20 border-primary text-primary"
                              : "bg-surface-container border-primary/20 text-dew/80 group-hover:text-primary group-hover:border-primary/40"
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div
                            className={`text-xs font-mono font-medium truncate ${
                              isActive
                                ? "text-primary font-bold"
                                : "text-white group-hover:text-primary"
                            }`}
                          >
                            {item.fullLabel}
                          </div>
                          <div className="text-[10px] text-dew/60 font-sans truncate">
                            {item.descriptor}
                          </div>
                        </div>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_#4edea3] shrink-0" />
                        )}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Quick Actions - Scaled gracefully from mobile to 4K */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Verified ORCID Badge (Active on md+ to avoid small-tablet crowding) */}
            <a
              href="https://orcid.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono rounded-lg text-dew bg-surface-container/80 backdrop-blur-md hover:bg-surface-high border border-primary/25 transition-all hover:border-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0"
              aria-label="View Alloice Otieno ORCID Profile"
            >
              <span className="text-[#a6ce39] font-bold text-xs tracking-wider">iD</span>
              <span>ORCID</span>
              <ExternalLink className="w-3 h-3 text-primary/70" />
            </a>

            {/* Curriculum Vitae Modal Trigger */}
            <button
              type="button"
              onClick={onOpenCV}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 md:py-2 text-xs font-semibold rounded-lg text-surface-dim bg-primary hover:bg-primary-fixed shadow-md shadow-primary/20 transition-all duration-200 hover:scale-[1.02] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
              aria-label="Open Curriculum Vitae Modal"
            >
              <FileText className="w-3.5 h-3.5 text-[#001711]" />
              <span className="hidden sm:inline font-sans">Curriculum Vitae</span>
              <span className="sm:hidden font-mono font-bold">CV</span>
            </button>

            {/* Mobile / Tablet Drawer Toggle Button (Visible on < lg: < 1024px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg bg-surface-container/90 text-dew border border-primary/25 hover:text-primary hover:border-primary/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-4.5 h-4.5 text-primary" />
              ) : (
                <Menu className="w-4.5 h-4.5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Dismiss Overlay */}
          <div
            className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity animate-fadeIn"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Structured Drawer Panel - Aligns pixel-perfectly with navbar bottom */}
          <div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Laboratory Folio Navigation"
            className={`lg:hidden fixed inset-x-0 ${
              scrolled ? "top-14" : "top-16"
            } max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto bg-[#00110c]/98 backdrop-blur-2xl border-b border-primary/25 shadow-2xl z-50 animate-fadeIn`}
          >
            <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-8 space-y-4">
              {/* Drawer Folio Header */}
              <div className="flex items-center justify-between border-b border-primary/15 pb-2.5">
                <div className="text-xs font-mono uppercase tracking-widest text-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Research Folio Directory</span>
                </div>
                <div className="text-[11px] text-dew/60 font-mono">
                  Moi University · 2026
                </div>
              </div>

              {/* Primary Research & Thesis Section */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-dew/60 px-1">
                  Living Bench &amp; Research Thesis
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {PRIMARY_RESEARCH_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={closeMenu}
                        className={`flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 p-2.5 sm:p-3 rounded-xl border transition-all ${
                          isActive
                            ? "bg-surface-high border-primary text-primary font-bold shadow-[0_0_15px_rgba(78,222,163,0.18)]"
                            : "bg-surface-container/60 border-primary/20 text-dew hover:border-primary/40 hover:text-white"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                            isActive
                              ? "bg-primary/20 border-primary text-primary"
                              : "bg-surface-high border-primary/25 text-primary/80"
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-mono tracking-wide font-medium">
                            {item.shortLabel}
                          </div>
                          <div className="text-[10px] text-dew/60 font-sans truncate">
                            {item.descriptor}
                          </div>
                        </div>
                        {isActive && (
                          <span className="sm:hidden w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Competencies, Field & Pedigree Section */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-dew/60 px-1">
                  Competencies, Field &amp; Credentials
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {COMPETENCY_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={closeMenu}
                        className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all ${
                          isActive
                            ? "bg-surface-high border-primary text-primary font-bold shadow-[0_0_15px_rgba(78,222,163,0.18)]"
                            : "bg-surface-container/60 border-primary/20 text-dew hover:border-primary/40 hover:text-white"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                            isActive
                              ? "bg-primary/20 border-primary text-primary"
                              : "bg-surface-high border-primary/25 text-primary/80"
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-mono tracking-wide font-medium truncate">
                            {item.fullLabel}
                          </div>
                          <div className="text-[10px] text-dew/60 font-sans truncate">
                            {item.descriptor}
                          </div>
                        </div>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Direct Inquiries Hub */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-dew/60 px-1">
                  Scientific Engagement
                </div>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all ${
                    activeSection === "contact"
                      ? "bg-surface-high border-primary text-primary font-bold shadow-[0_0_15px_rgba(78,222,163,0.18)]"
                      : "bg-surface-container/60 border-primary/20 text-dew hover:border-primary/40 hover:text-white"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-surface-high border border-primary/25 text-primary/80 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-mono tracking-wide font-medium">
                      Laboratory Inquiries Hub
                    </div>
                    <div className="text-[10px] text-dew/60 font-sans truncate">
                      Direct academic inquiries, graduate roles &amp; collaboration
                    </div>
                  </div>
                  <span className="text-xs text-primary/60 shrink-0">→</span>
                </a>
              </div>

              {/* Bottom Quick Action CTAs */}
              <div className="pt-3 border-t border-primary/15 flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    onOpenCV();
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary text-surface-dim font-bold text-xs tracking-wide shadow-lg shadow-primary/20 hover:bg-primary-fixed transition-all cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#001711]" />
                  Preview &amp; Download CV
                </button>
                <a
                  href="https://orcid.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl chamber-card text-dew border border-primary/25 text-xs font-mono hover:border-primary/50 transition-all"
                >
                  <span className="text-[#a6ce39] font-bold">iD</span>
                  <span>ORCID Profile</span>
                  <ExternalLink className="w-3 h-3 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EthosSection from "@/components/EthosSection";
import FlagshipResearchSection from "@/components/FlagshipResearchSection";
import InvestigationsSection from "@/components/InvestigationsSection";
import SkillsMatrixSection from "@/components/SkillsMatrixSection";
import PracticumSection from "@/components/PracticumSection";
import TargetRolesSection from "@/components/TargetRolesSection";
import EducationSection from "@/components/EducationSection";
import ContactHubSection from "@/components/ContactHubSection";
import Footer from "@/components/Footer";
import CVModal from "@/components/CVModal";
import AbstractModal from "@/components/AbstractModal";
import BackToTop from "@/components/BackToTop";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isAbstractOpen, setIsAbstractOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleSelectRole = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll-driven progressive reveal observer */}
      <ScrollObserver />

      {/* Atmospheric Living Botanical Fixed Environment Layers */}
      <div aria-hidden="true" className="living-bio-bg" />
      <div aria-hidden="true" className="living-bio-tint" />
      <div aria-hidden="true" className="living-bio-glow-pulse" />

      {/* Main Navigation Header */}
      <Navbar onOpenCV={() => setIsCVOpen(true)} />

      {/* Main Scientific Folio Content */}
      <main id="main-content" tabIndex={-1} className="relative z-10 focus:outline-none">
        {/* Hero Section */}
        <HeroSection />

        {/* Living Bench Ethos */}
        <EthosSection />

        {/* Flagship Thesis: Indigenous Flora */}
        <FlagshipResearchSection
          onOpenAbstract={() => setIsAbstractOpen(true)}
        />

        {/* Secondary Investigations: Enzyme Kinetics & Docking */}
        <InvestigationsSection />

        {/* Cellular & Bioanalytical Skills Matrix */}
        <SkillsMatrixSection />

        {/* Industrial Attachment & Field Notebook */}
        <PracticumSection />

        {/* Target Roles Matrix */}
        <TargetRolesSection onSelectRole={handleSelectRole} />

        {/* Academic Pedigree & Coursework */}
        <EducationSection />

        {/* Contact & Engagement Hub */}
        <ContactHubSection
          onOpenCV={() => setIsCVOpen(true)}
          selectedRoleForInquiry={selectedRole}
        />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Interactive Curriculum Vitae Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />

      {/* Flagship Thesis Abstract Modal */}
      <AbstractModal
        isOpen={isAbstractOpen}
        onClose={() => setIsAbstractOpen(false)}
      />

      {/* Back to Top Quick Anchor */}
      <BackToTop />
    </>
  );
}

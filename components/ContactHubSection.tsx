"use client";

import React, { useState } from "react";
import {
  Send,
  Mail,
  MessageSquare,
  FileDown,
  UserCheck,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

interface ContactHubSectionProps {
  onOpenCV: () => void;
  selectedRoleForInquiry?: string;
}

export default function ContactHubSection({
  onOpenCV,
  selectedRoleForInquiry,
}: ContactHubSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    category: "Laboratory Placement / Hiring",
    message: "",
  });
  const [prevRole, setPrevRole] = useState(selectedRoleForInquiry);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [refId, setRefId] = useState("");

  if (selectedRoleForInquiry && selectedRoleForInquiry !== prevRole) {
    setPrevRole(selectedRoleForInquiry);
    setFormData((prev) => ({
      ...prev,
      category: "Laboratory Placement / Hiring",
      message: `Hello Alloice,\n\nWe would like to discuss an opportunity regarding the ${selectedRoleForInquiry} position at our institution...`,
    }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate responsive laboratory transmission
    setTimeout(() => {
      setRefId(`BIO-INQ-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-[#001711]/70 backdrop-blur-md"
      data-purpose="contact-hub-section"
      aria-labelledby="contact-heading"
    >
      {/* Living ambient glow hints */}
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-1/2 right-0 w-80 h-80 bg-amber-extract/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Engagement Pitch */}
          <div className="lg:col-span-5 space-y-6 reveal-init">
            <div className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase chamber-capsule px-3.5 py-1.5 rounded-full border border-primary/30">
              <Send className="w-3.5 h-3.5 text-primary" />
              <span>Available for Immediate Engagement</span>
            </div>

            <h2
              id="contact-heading"
              className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight"
            >
              Ready to Advance Your Laboratory Research
            </h2>

            <p className="font-sans text-sm sm:text-base text-dew/90 leading-relaxed">
              Actively considering roles as a <strong>Laboratory Technologist</strong>,{" "}
              <strong>Quality Control / Analytical Biochemist</strong>, or funded{" "}
              <strong>M.Sc. Research Scholar</strong>. Open to placements across
              Kenya and international fellowships.
            </p>

            <div className="p-5 rounded-2xl chamber-capsule space-y-2 text-xs sm:text-sm border border-primary/20">
              <div className="font-mono text-primary font-bold flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-primary" />
                <span>Academic &amp; Industry References</span>
              </div>
              <p className="text-leaf/85 font-sans leading-relaxed">
                Official letters of recommendation and approved undergraduate
                academic transcripts from Moi University Department of
                Biochemistry available immediately upon institutional request.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-3 pt-2 font-mono">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-container/80 border border-primary/30 flex items-center justify-center text-primary">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] text-dew/70 uppercase tracking-widest font-medium">
                    Primary Laboratory Email
                  </div>
                  <a
                    href="mailto:alloice.otieno.biochem@gmail.com"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-primary transition-colors focus:outline-none focus-visible:underline"
                  >
                    alloice.otieno.biochem@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-container/80 border border-primary/30 flex items-center justify-center text-primary">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] text-dew/70 uppercase tracking-widest font-medium">
                    Phone &amp; WhatsApp
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    +254 (0) 700 000 000{" "}
                    <span className="text-dew/70 text-[10px]">(Kenya)</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="mailto:alloice.otieno.biochem@gmail.com?subject=Laboratory%20Opportunity%20Inquiry%20-%20Alloice%20Otieno"
                className="flex items-center gap-2.5 p-3 rounded-xl chamber-card hover:border-primary transition-colors text-xs font-mono text-dew hover:text-white min-h-[44px]"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>Email Client</span>
              </a>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl chamber-card hover:border-primary transition-colors text-xs font-mono text-dew hover:text-white min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl chamber-card hover:border-dew transition-colors text-xs font-mono text-dew hover:text-white min-h-[44px]"
              >
                <LinkedinIcon className="w-4 h-4 text-dew" />
                <span>LinkedIn</span>
              </a>
              <button
                type="button"
                onClick={onOpenCV}
                className="flex items-center gap-2.5 p-3 rounded-xl chamber-card hover:border-amber-extract transition-colors text-xs font-mono text-amber-extract hover:text-white cursor-pointer min-h-[44px]"
              >
                <FileDown className="w-4 h-4 text-amber-extract" />
                <span>Curriculum Vitae</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Reach-Out Panel & Form */}
          {/* Right Column: Interactive Reach-Out Panel & Form */}
          <div className="lg:col-span-7 reveal-init stagger-2">
            <div className="chamber-capsule rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 border border-primary/25">
              <div>
                <h3 className="font-serif text-2xl font-medium text-white">
                  Send Direct Laboratory Inquiry
                </h3>
                <p className="font-sans text-xs sm:text-sm text-dew/85 mt-1">
                  Principal Investigators, Laboratory Directors, and Quality Leads:
                  transmit your communication directly to Alloice.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-surface-container/90 border border-primary/40 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto border border-primary/40">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-serif text-2xl text-white">
                    Inquiry Successfully Logged
                  </h4>
                  <p className="font-sans text-sm text-dew/90 max-w-md mx-auto">
                    Thank you for reaching out. Alloice reviews research
                    inquiries and laboratory communications regularly and will
                    respond within 24 to 48 hours.
                  </p>
                  <div className="pt-2 font-mono text-xs text-primary">
                    Ref ID: {refId}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        organization: "",
                        category: "Laboratory Placement / Hiring",
                        message: "",
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-surface-high text-dew hover:text-white text-xs font-mono border border-primary/30 transition-colors cursor-pointer min-h-[40px]"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="inquiry-name" className="text-dew/80 uppercase font-medium">
                        Your Name *
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Dr. Sarah Jenkins / Lead Investigator"
                        className="w-full px-3.5 py-3 rounded-xl bg-[#001f18] border border-primary/25 text-white placeholder-dew/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans text-base sm:text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="inquiry-email" className="text-dew/80 uppercase font-medium">
                        Work / Institutional Email *
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="s.jenkins@kemri.go.ke"
                        className="w-full px-3.5 py-3 rounded-xl bg-[#001f18] border border-primary/25 text-white placeholder-dew/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans text-base sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="inquiry-org" className="text-dew/80 uppercase font-medium">
                        Institution / Company
                      </label>
                      <input
                        id="inquiry-org"
                        type="text"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        placeholder="e.g. KEMRI, ICIPE, Pharmaceutical Lab"
                        className="w-full px-3.5 py-3 rounded-xl bg-[#001f18] border border-primary/25 text-white placeholder-dew/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans text-base sm:text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="inquiry-category" className="text-dew/80 uppercase font-medium">
                        Inquiry Nature
                      </label>
                      <select
                        id="inquiry-category"
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        className="w-full px-3.5 py-3 rounded-xl bg-[#001f18] border border-primary/25 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans text-base sm:text-sm"
                      >
                        <option value="Laboratory Placement / Hiring">
                          Laboratory Placement / Hiring
                        </option>
                        <option value="Academic Research Collaboration">
                          Academic Research Collaboration
                        </option>
                        <option value="Postgraduate Fellowship Opportunity">
                          Postgraduate Fellowship Opportunity
                        </option>
                        <option value="QA/QC Analytical Inquiry">
                          QA/QC Analytical Inquiry
                        </option>
                        <option value="General Scientific Exchange">
                          General Scientific Exchange
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-message" className="text-dew/80 uppercase font-medium">
                      Message / Research Project Details *
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Outline research scope, bench responsibilities, or collaboration details..."
                      className="w-full px-3.5 py-3 rounded-xl bg-[#001f18] border border-primary/25 text-white placeholder-dew/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans text-base sm:text-sm"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-fixed active:scale-[0.99] text-surface-dim font-bold font-mono uppercase tracking-wider text-xs transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 min-h-[48px]"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-surface-dim border-t-transparent rounded-full animate-spin"></span>
                        <span>Transmitting Protocol...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-surface-dim" />
                        <span>Transmit Laboratory Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Location & readiness footer note */}
              <div className="p-3 rounded-xl chamber-card text-center font-mono text-xs text-dew border border-primary/20 flex items-center justify-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>
                  Location: Eldoret / Nairobi, Kenya · Available for interview &amp; bench trial
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

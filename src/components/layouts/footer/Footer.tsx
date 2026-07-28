import { useState } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/common/BrandLogo";
import { Phone, Mail, X, Loader2, CheckCircle2, PhoneCall } from "lucide-react";
import ContactStrip from "@/components/common/ContactStrip";
import { toast } from "react-hot-toast";

import { submitPhoneEnquiry } from "@/modules/Contact/api/contact.api";

// Local SVG icon components for social media
function Facebook({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function Linkedin({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Instagram({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function Youtube({
  className = "w-4.5 h-4.5",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

export default function Footer() {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digitsOnly = phone.replace(/\D/g, "");

    const isValidIndianMobile = /^[6-9]\d{9}$/.test(digitsOnly);
    const isAllSameDigit = /^(\d)\1{9}$/.test(digitsOnly);

    if (!isValidIndianMobile || isAllSameDigit) {
      setPhoneError("Please enter a valid 10-digit mobile number (e.g. 9876543210)");
      return;
    }

    setIsSubmitting(true);
    setPhoneError("");
    try {
      await submitPhoneEnquiry(digitsOnly);
      setIsSubmitted(true);
      toast.success("Callback request submitted successfully!");
    } catch (err: any) {
      console.error("Callback API error:", err);
      toast.error(err?.response?.data?.message || "Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-bg-main border-t border-border-main">
      <div className="my-8 px-4">
        <ContactStrip />
      </div>
      <div className="max-w-[1600px] mx-auto px-5 lg:px-10 py-10">
        {/* Equal 5-Column Layout (Exact equal width per column) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-0 lg:divide-x lg:divide-border-main/40">
          {/* Column 1: Logo & Description (Equal width) */}
          <div className="flex flex-col text-left lg:pr-6 lg:pl-0">
            <Link to="/" title="MAKc Automations Home" className="flex items-center">
              <BrandLogo className="h-11 w-auto" />
            </Link>
            <p className="mt-5 text-xs text-text-muted leading-relaxed">
              Crafting intelligent living experiences through innovative
              automation, seamless design, and world-class technology.
            </p>
          </div>

          {/* Column 2: Solutions (20% width) */}
          <div className="flex flex-col text-left lg:px-6">
            <h3 className="text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-6 select-none">
              Solutions
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-text-muted">
              <li>
                <Link
                  to="/automation"
                  title="Smart Home Automation Services"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/lighting"
                  title="Smart Lighting Solutions"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Lighting
                </Link>
              </li>
              <li>
                <Link
                  to="/networking"
                  title="Home Networking Solutions"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Networking
                </Link>
              </li>
              <li>
                <Link
                  to="/security"
                  title="Smart Home Security Systems"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  to="/audio"
                  title="Home Audio Solutions"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Audio
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Projects (Commented out as requested) */}
          {/*
          <div className="flex flex-col text-left lg:px-6">
            <h3 className="text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-6 select-none">
              Projects
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-text-muted">
              <li>
                <a
                  href="/#projects"
                  title="View Our Projects"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Luxury Villas
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  title="View Our Projects"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Apartments
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  title="View Our Projects"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Farmhouses
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  title="View Our Projects"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Penthouses
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  title="View Our Projects"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Commercial Spaces
                </a>
              </li>
            </ul>
          </div>
          */}

          {/* Column 3: About (20% width) */}
          <div className="flex flex-col text-left lg:px-6">
            <h3 className="text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-6 select-none">
              About
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-text-muted">
              <li>
                <Link
                  to="/about"
                  title="About Our Company"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  About MAKc
                </Link>
              </li>
              <li>
                <Link
                  to="/why-us"
                  title="Our Work Process"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  title="Careers & Contact at MAKc Automations"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  title="Read Our Blog"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Live Experience Centre Video & Visit Request (20% width) */}
          <div className="flex flex-col text-left lg:px-6">
            <h3 className="text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-4 select-none">
              Live Experience Centre
            </h3>
            {/* Loop Video GIF */}
            <div className="relative overflow-hidden rounded-xl border border-border-main bg-bg-surface/30 shadow-md group mb-3 aspect-video">
              <video
                src="/Video/living_room_animation.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Like To Visit Button */}
            <button
              type="button"
              onClick={() => setIsCallbackModalOpen(true)}
              className="w-full cursor-pointer bg-accent-blue hover:bg-[#0070e0] text-white font-bold text-xs tracking-wider uppercase py-2.5 px-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(10,132,255,0.3)] hover:shadow-[0_6px_20px_rgba(10,132,255,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Like to Visit</span>
            </button>
          </div>

          {/* Column 5: Let's Talk & Contact Info (20% width) */}
          <div className="flex flex-col text-left lg:pl-6 lg:pr-0">
            <h3 className="text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-4 select-none">
              Let’s Connect
            </h3>
            <div className="flex flex-col gap-3 text-xs text-text-muted">
              {/* Phone Sub-section */}
              <div className="mt-2">
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+919324226077"
                    title="Call MAKc Automations at +91 93242 26077"
                    className="flex items-center gap-2 hover:text-accent-blue transition-colors duration-200"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-accent-blue stroke-[1.5]" />
                    <span>+91-9324226077</span>
                  </a>
                  <a
                    href="tel:+918197783287"
                    title="Call MAKc Automations at +91 81977 83287"
                    className="flex items-center gap-2 hover:text-accent-blue transition-colors duration-200"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-accent-blue stroke-[1.5]" />
                    <span>+91-8197783287</span>
                  </a>
                </div>
              </div>

              {/* Email Sub-section */}
              <div className="mt-2">
                <a
                  href="mailto:info@makcautomations.com"
                  title="Email MAKc Automations"
                  className="flex items-center gap-2 hover:text-accent-blue transition-colors duration-200"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent-blue stroke-[1.5]" />
                  <span className="break-all">info@makcautomations.com</span>
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-2 mt-3">
                <a
                  href="https://www.instagram.com/mak_automation/"
                  title="Follow MAKc Automations on Instagram"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg border border-border-main bg-bg-surface/30 flex items-center justify-center text-text-muted hover:text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent hover:shadow-[0_0_10px_rgba(238,42,123,0.4)] transition-all duration-300"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.facebook.com/makcautomation"
                  title="Visit MAKc Automations on Facebook"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg border border-border-main bg-bg-surface/30 flex items-center justify-center text-text-muted hover:text-white hover:bg-[#1877F2] hover:border-transparent hover:shadow-[0_0_10px_rgba(24,119,242,0.4)] transition-all duration-300"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.linkedin.com/company/makc-automations/"
                  title="Connect with MAKc Automations on LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg border border-border-main bg-bg-surface/30 flex items-center justify-center text-text-muted hover:text-white hover:bg-[#0A66C2] hover:border-transparent hover:shadow-[0_0_10px_rgba(10,102,194,0.4)] transition-all duration-300"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.youtube.com/@MAKcAutomation01"
                  title="Subscribe to MAKc Automations on YouTube"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-lg border border-border-main bg-bg-surface/30 flex items-center justify-center text-text-muted hover:text-white hover:bg-[#FF0000] hover:border-transparent hover:shadow-[0_0_10px_rgba(255,0,0,0.4)] transition-all duration-300"
                >
                  <Youtube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border-main my-10" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-tiny text-text-muted">
            &copy; {new Date().getFullYear()} Makc Automations. All rights
            reserved.
          </p>
          <div className="flex gap-5 items-center">
            <a
              href="/#privacy"
              title="Privacy Policy"
              className="text-tiny text-text-muted link-underline"
            >
              Privacy Policy
            </a>
            <a
              href="/#terms"
              title="Terms and Conditions"
              className="text-tiny text-text-muted link-underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Callback Modal */}
      {isCallbackModalOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsCallbackModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-bg-surface border border-border-main rounded-3xl p-6 sm:p-8 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsCallbackModalOpen(false)}
              className="absolute top-5 right-5 text-text-muted hover:text-text-main p-1.5 rounded-full hover:bg-bg-main/50 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-accent-blue">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-text-main">Visit Live Experience Centre</h3>
                    <p className="text-xs text-text-muted">Enter your mobile number to schedule your visit</p>
                  </div>
                </div>

                <form onSubmit={handleCallbackSubmit} className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="modal-phone" className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1.5">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="modal-phone"
                        type="tel"
                        required
                        maxLength={10}
                        value={phone}
                        onChange={(e) => {
                          const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
                          setPhone(cleaned);
                          setPhoneError("");
                        }}
                        placeholder="9876543210"
                        className="w-full bg-bg-main/60 border border-border-main focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-4 py-3 text-text-main text-sm outline-none transition-all font-mono tracking-wider"
                      />
                    </div>
                    {phoneError && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">{phoneError}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cursor-pointer bg-accent-blue hover:bg-[#0070e0] text-white font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(10,132,255,0.3)] hover:shadow-[0_8px_30px_rgba(10,132,255,0.5)]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <span>Submit Request</span>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-4 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-text-main mb-2">Request Received!</h3>
                <p className="text-xs text-text-muted max-w-xs mb-6">
                  Thank you! Our automation expert will call you back on <span className="font-semibold text-text-main">{phone}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsCallbackModalOpen(false);
                    setIsSubmitted(false);
                    setPhone("");
                  }}
                  className="bg-bg-main hover:bg-border-main/50 text-text-main text-xs font-semibold px-6 py-2.5 rounded-xl border border-border-main transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}

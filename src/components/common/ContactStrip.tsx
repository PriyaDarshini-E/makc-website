import { Calendar, ArrowRight, Loader2, ChevronDown, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useContactForm } from "@/modules/Contact/hooks/useContactForm";

interface ContactStripProps {
  title?: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
  className?: string;
}

const SERVICE_OPTIONS = [
  { id: "automation", label: "Automation" },
  { id: "security", label: "Security" },
  { id: "lighting", label: "Lighting" },
  { id: "networking", label: "Networking" },
  { id: "audio", label: "Audio & Video" },
  { id: "general", label: "General Inquiry" },
];

export default function ContactStrip({
  title = "Your Smart Living Journey Starts Now",
  description = "Book a free consultation and take the first step toward a smarter tomorrow.",
  cta,
  className = "",
}: ContactStripProps) {
  const { register, handleSubmit, errors, isSubmitting, setValue, watch } = useContactForm();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedServices: string[] = watch("services") || [];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleService = (label: string) => {
    const current = [...selectedServices];
    const index = current.indexOf(label);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(label);
    }
    setValue("services", current, { shouldValidate: true });
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Glassmorphic Card Container */}
      <div className="relative w-full bg-white/80 dark:bg-[#061121]/70 backdrop-blur-xl border border-border-main/60 dark:border-[#0A84FF]/30 shadow-[0_4px_25px_rgba(10,132,255,0.08)] dark:shadow-[0_4px_30px_rgba(10,132,255,0.18)] rounded-2xl p-5 sm:p-6 lg:p-7 overflow-visible transition-all duration-300">
        
        {/* Header section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 border-b border-border-main/40 pb-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-[#0A84FF]/40 bg-[#0A84FF]/10 text-[#0A84FF] flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(10,132,255,0.2)]">
              <Calendar className="h-5 w-5 stroke-[1.75]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-text-main tracking-tight leading-snug">
                {title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Compact Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Row 1: Name, Phone, Email */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div>
              <label htmlFor="cs-name" className="sr-only">Name</label>
              <input
                {...register("name")}
                type="text"
                id="cs-name"
                placeholder="Your Name *"
                className="w-full bg-bg-main/50 border border-border-main/70 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-3 py-2 text-text-main text-xs placeholder:text-text-muted/60 transition-all outline-none"
              />
              {errors.name && (
                <p role="alert" className="text-red-500 text-[11px] mt-1 font-medium">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="cs-phone" className="sr-only">Phone</label>
              <input
                {...register("phone")}
                type="tel"
                id="cs-phone"
                placeholder="Phone Number *"
                className="w-full bg-bg-main/50 border border-border-main/70 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-3 py-2 text-text-main text-xs placeholder:text-text-muted/60 transition-all outline-none"
              />
              {errors.phone && (
                <p role="alert" className="text-red-500 text-[11px] mt-1 font-medium">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="cs-email" className="sr-only">Email</label>
              <input
                {...register("email")}
                type="email"
                id="cs-email"
                placeholder="Email Address *"
                className="w-full bg-bg-main/50 border border-border-main/70 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-3 py-2 text-text-main text-xs placeholder:text-text-muted/60 transition-all outline-none"
              />
              {errors.email && (
                <p role="alert" className="text-red-500 text-[11px] mt-1 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Services Dropdown (Multiselect) & Message & Submit */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-start">
            {/* Multiselect Services Dropdown */}
            <div className="sm:col-span-4 relative" ref={dropdownRef}>
              <label className="sr-only">Select Services</label>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-bg-main/50 border border-border-main/70 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-3 py-2 text-left text-xs transition-all outline-none flex items-center justify-between gap-2 cursor-pointer"
              >
                <span className={selectedServices.length > 0 ? "text-text-main font-medium truncate" : "text-text-muted/60 truncate"}>
                  {selectedServices.length === 0
                    ? "Select Services *"
                    : selectedServices.length === 1
                    ? selectedServices[0]
                    : `${selectedServices.length} Services Selected`}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-text-muted shrink-0 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Popover Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white dark:bg-[#07152D] border border-border-main shadow-2xl rounded-xl p-2 transition-all">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-text-muted px-2 py-1 mb-1 border-b border-border-main/40">
                    Services ({selectedServices.length} selected)
                  </div>
                  <div className="space-y-1 max-h-48 overflow-y-auto">
                    {SERVICE_OPTIONS.map((service) => {
                      const isSelected = selectedServices.includes(service.label);
                      return (
                        <div
                          key={service.id}
                          onClick={() => toggleService(service.label)}
                          className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs cursor-pointer transition-colors ${
                            isSelected
                              ? "bg-accent-blue/15 text-accent-blue font-semibold"
                              : "hover:bg-bg-main/80 text-text-main"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${
                              isSelected ? "bg-accent-blue border-accent-blue text-white" : "border-border-main"
                            }`}>
                              {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                            </div>
                            <span>{service.label}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {errors.services && (
                <p role="alert" className="text-red-500 text-[11px] mt-1 font-medium">
                  {errors.services.message}
                </p>
              )}
            </div>

            {/* Message input */}
            <div className="sm:col-span-5">
              <label htmlFor="cs-message" className="sr-only">Message</label>
              <input
                {...register("message")}
                type="text"
                id="cs-message"
                placeholder="Tell us about your project... *"
                className="w-full bg-bg-main/50 border border-border-main/70 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-3 py-2 text-text-main text-xs placeholder:text-text-muted/60 transition-all outline-none"
              />
              {errors.message && (
                <p role="alert" className="text-red-500 text-[11px] mt-1 font-medium">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[36px] bg-gradient-to-r from-[#0055ff] to-[#0A84FF] hover:from-[#0048d9] hover:to-[#0070e0] text-white! font-bold text-xs tracking-wider uppercase rounded-xl shadow-[0_4px_15px_rgba(10,132,255,0.35)] hover:shadow-[0_6px_20px_rgba(10,132,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>{cta?.label || "Submit"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

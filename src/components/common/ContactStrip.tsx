import { Calendar, ArrowRight } from "lucide-react";
import { type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";

interface ContactStripProps {
  title?: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
  className?: string;
}

export default function ContactStrip({
  title = "Your Smart Living Journey Starts Now",
  description = "Book a free consultation and take the first step toward a smarter tomorrow.",
  cta = {
    label: "Book Your Free Consultation",
    href: "/#contact-enquiry",
  },
  className = "",
}: ContactStripProps) {
  const location = useLocation();

  const handleInternalAnchorClick = (
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    if (!cta.href.startsWith("/#")) return;

    const anchorHash = cta.href.slice(1);
    if (location.pathname === "/" && location.hash === anchorHash) {
      event.preventDefault();
      document.getElementById(anchorHash.slice(1))?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Premium Glassmorphic Outer Card container with glowing corners */}
      <div className="relative w-full bg-white/70 dark:bg-[#061121]/50 backdrop-blur-xl border border-border-main/50 dark:border-[#0A84FF]/25 shadow-[0_0_15px_rgba(10,132,255,0.08),inset_0_0_8px_rgba(10,132,255,0.03)] dark:shadow-[0_0_20px_rgba(10,132,255,0.15),inset_0_0_12px_rgba(10,132,255,0.08)] rounded-2xl p-6 sm:p-8 md:p-10 overflow-hidden transition-all duration-300">
        {/* Glow corner highlights */}

        {/* Flex layout for row alignment */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 z-10 relative">
          {/* Left Side: Calendar Icon + Text */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center text-center sm:text-left gap-5 sm:gap-6 flex-1 w-full">
            {/* Calendar Icon wrapper with glow */}
            <div className="h-16 w-16 rounded-full border-2 border-[#0A84FF]/40 bg-[#0A84FF]/10 text-[#0A84FF] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(10,132,255,0.25)]">
              <Calendar className="h-8 w-8 stroke-[1.5]" />
            </div>

            {/* Text details */}
            <div className="flex flex-col text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-text-main tracking-tight leading-tight">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-text-muted mt-1.5 leading-relaxed max-w-xl">
                {description}
              </p>
            </div>
          </div>

          {/* Right Side: Call to Action Button */}
          <div className="flex items-center justify-center shrink-0 w-full lg:w-auto mt-2 lg:mt-0">
            {cta.href.startsWith("http") ||
            cta.href.startsWith("mailto:") ||
            cta.href.startsWith("tel:") ? (
              <a
                href={cta.href}
                title="Contact MAKc Automations"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0055ff] to-[#0A84FF] text-white! font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-[0_4px_20px_rgba(10,132,255,0.45)] hover:shadow-[0_6px_25px_rgba(10,132,255,0.65)] hover:scale-[1.02] hover:border-[#0A84FF]/80 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>{cta.label}</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            ) : (
              <Link
                to={cta.href}
                title="Contact MAKc Automations"
                onClick={handleInternalAnchorClick}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0055ff] to-[#0A84FF] text-white! font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-[0_4px_20px_rgba(10,132,255,0.45)] hover:shadow-[0_6px_25px_rgba(10,132,255,0.65)] hover:scale-[1.02] hover:border-[#0A84FF]/80 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>{cta.label}</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { ArrowLeft, Hourglass } from "lucide-react";
import GlowingLine from "./GlowingLine";

interface ComingSoonProps {
  pageTitle: string;
  description?: string;
  bgImage?: string;
}

export default function ComingSoon({
  pageTitle,
  description = "We are currently crafting a premium digital showcase for this solution. Stay tuned for a refined experience.",
  bgImage,
}: ComingSoonProps) {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={bgImage ? { backgroundImage: `url('${bgImage}')` } : undefined}
    >
      {/* Dark overlay for contrast when bgImage is active */}
      {bgImage && <div className="absolute inset-0 bg-black/75 z-0" />}

      {/* Ambient Radial Glows (only show if no bgImage to keep contrast high) */}
      {!bgImage ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F7FA] to-[#EBEFF5] dark:from-[#07152D] dark:via-[#051022] dark:to-[#01050E] transition-colors duration-300 pointer-events-none z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,132,255,0.08)_0%,rgba(10,132,255,0.03)_35%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(32,120,255,0.25)_0%,rgba(12,65,190,0.12)_22%,rgba(6,25,60,0.04)_48%,transparent_72%)] pointer-events-none z-0" />
        </>
      ) : (
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg-main to-transparent pointer-events-none z-0" />
      )}

      <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center reveal-on-scroll reveal-up" data-reveal-duration="0.8s">
        {/* Glowing Pulsing Icon Frame */}
        <div className="relative h-20 w-20 rounded-full border border-[#0A84FF]/40 bg-[#0A84FF]/10 text-[#0A84FF] flex items-center justify-center shadow-[0_0_20px_rgba(10,132,255,0.25)] mb-8 select-none">
          <Hourglass className="h-9 w-9 stroke-[1.2] animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-[#0A84FF]/20 animate-ping opacity-75" />
        </div>

        {/* Page Title & Subtitle */}
        <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#0A84FF] uppercase mb-4 block select-none">
          {pageTitle}
        </span>
        
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight leading-tight">
          Coming <span className="font-serif italic font-normal text-[#0A84FF]">Soon</span>
        </h2>

        <GlowingLine
          direction="horizontal"
          length="w-20 sm:w-28"
          thickness="h-[1.5px]"
          className="mt-6 mb-8"
        />

        <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed max-w-xl mb-12">
          {description}
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 border border-border-main hover:border-[#0A84FF]/30 bg-bg-surface/50 dark:bg-[#061121]/30 hover:bg-[#0A84FF]/5 text-text-main hover:text-[#0A84FF] px-6 py-3 transition-all duration-300 text-[10px] font-bold tracking-widest apple-border-shine rounded-full uppercase select-none group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}

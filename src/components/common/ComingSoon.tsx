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
      {/* Left side overlay with theme mode aware light and dark */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/95 sm:via-bg-main/80 lg:via-bg-main/60 to-transparent pointer-events-none transition-colors duration-300" />

      {/* Bottom gradient blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-36 bg-gradient-to-t from-bg-main to-transparent pointer-events-none z-[5]" />

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

import useSEO from "@/hooks/useSEO";
import AudioHero from "../components/AudioHero";
import GlowingLine from "@/components/common/GlowingLine";
import { Hourglass } from "lucide-react";

export default function AudioPage() {
  useSEO({
    title: "Home Audio Solutions in Bangalore | MAKc Automations",
    description: "High-performance multi-room audio, invisible architectural speakers, and smart sound controls for luxury residences in Bangalore by MAKc Automations.",
    keywords: "home audio solutions, multi room audio bangalore, architectural speakers, high fidelity sound, MAKc Automations",
    canonicalUrl: "https://makcautomations.com/audio",
  });

  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* HERO BANNER - UNCHANGED */}
      <AudioHero />

      {/* COMING SOON SECTION */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 text-center flex flex-col items-center">
        {/* Hourglass Icon */}
        <div className="relative h-20 w-20 rounded-full border border-[#0A84FF]/40 bg-[#0A84FF]/10 text-[#0A84FF] flex items-center justify-center shadow-[0_0_20px_rgba(10,132,255,0.25)] mb-8 select-none">
          <Hourglass className="h-9 w-9 stroke-[1.2] animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-[#0A84FF]/20 animate-ping opacity-75" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight leading-tight">
          Coming <span className="font-serif italic font-normal text-[#0A84FF]">Soon!</span>
        </h2>

        <GlowingLine
          direction="horizontal"
          length="w-20 sm:w-28"
          thickness="h-[1.5px]"
          className="mt-6 mb-8"
        />

        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
          We're working on exciting new features and improvements to enhance your experience. Stay tuned as we prepare to launch something new that will bring even more value and functionality. We appreciate your patience and look forward to sharing these updates with you soon.
        </p>
      </div>
    </div>
  );
}

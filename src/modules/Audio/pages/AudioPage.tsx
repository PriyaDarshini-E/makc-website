import useSEO from "@/hooks/useSEO";
import { SEO_ROUTES } from "@/config/seoData";
import AudioHero from "../components/AudioHero";
import GlowingLine from "@/components/common/GlowingLine";
import { Hourglass, Music, Speaker, Volume2 } from "lucide-react";
import AutomationShowcase from "@/components/common/AutomationShowcase";
import { getImageUrl } from "@/utils/image";

const AUDIO_SLIDES = [
  {
    id: "01",
    title: "Centralized Audio Distribution",
    shortTitle: "Centralized\nAudio",
    description:
      "Distribute your favorite music streams, playlists, or radio channels seamlessly to different rooms and customized sound zones with ease.",
    image: getImageUrl("service_theatre.webp"),
    imageAlt: "Centralized multi-room smart audio distribution system",
    imageTitle: "Multi-Room Audio Distribution",
    icon: Music,
  },
  {
    id: "02",
    title: "Invisible Architectural Speakers",
    shortTitle: "Architectural\nSpeakers",
    description:
      "High-fidelity, in-wall, or in-ceiling speakers that blend completely into your interior design while producing crystal-clear acoustic sound.",
    image: getImageUrl("smarter_way_bg.webp"),
    imageAlt: "In-ceiling architectural speaker installation",
    imageTitle: "Architectural Speaker Solutions",
    icon: Speaker,
  },
  {
    id: "03",
    title: "Immersive Home Theater Sound",
    shortTitle: "Theater\nSound",
    description:
      "Design custom surround sound experiences with subwoofers, soundbars, and Dolby Atmos calibration to recreate cinema-grade quality.",
    image: getImageUrl("service_theatre.webp"),
    imageAlt: "Luxury home cinema theater seating and sound system",
    imageTitle: "Smart Home Theater Sound",
    icon: Volume2,
  },
];

export default function AudioPage() {
  useSEO(SEO_ROUTES["/audio"]);

  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* HERO BANNER - UNCHANGED */}
      <AudioHero />

      {/* FULL WIDTH AUTOMATION SHOWCASE SECTION */}
      <AutomationShowcase
        slides={AUDIO_SLIDES}
        initialSlideId="01"
        eyebrow="Smart Audio"
        heading={
          <>
            Intelligent audio control <br />
            for a <span className="text-[#0A84FF]">smarter sound</span>
          </>
        }
        introduction="Elevate your home's acoustic experience with seamless multi-room audio distribution and high-fidelity architectural sound systems."
        accentColor="#0A84FF"
      />

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
          We are working on exciting new features and improvements to enhance your experience. Stay tuned as we prepare to launch something new that will bring even more value and functionality. We appreciate your patience and look forward to sharing these updates with you soon.
        </p>
      </div>
    </div>
  );
}

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WaveButton from "@/components/common/WaveButton";
import { getImageUrl } from "@/utils/image";
import { IMAGE_BASE_URL } from "@/config/constants";
import type { HotspotType } from "@/components/smarthome/types";
import Hotspot from "@/components/smarthome/Hotspot";
import Label from "@/components/smarthome/Label";
import Connector from "@/components/smarthome/Connector";
import { useResponsive } from "@/components/smarthome/hooks";
import {
  Lightbulb,
  ShieldCheck,
  ToggleLeft,
  Sliders,
  ShieldAlert,
  Blinds,
  Wifi,
  X,
} from "lucide-react";
import InstagramEmbed from "@/components/common/InstagramEmbed";

const heroBgDark = getImageUrl("hero_bg.webp");
const heroBgLight = getImageUrl("hero_bg-light.webp");

const VIDEO_BASE_URL = `${IMAGE_BASE_URL}/reels/`;

const hotspotsList: HotspotType[] = [
  {
    id: "curtains",
    label: "Curtains Automation",
    anchor: { x: 60.5, y: 25.5 },
    labelPos: { x: 75.2, y: 24 },
    icon: Blinds,

    videoFile:
      "https://www.instagram.com/reel/DQ38odUkpZr/?igsh=MTB0dmQ3NnVibXgzYQ==",
  },
  {
    id: "lighting",
    label: "Lightings",
    anchor: { x: 58.5, y: 36 },
    labelPos: { x: 72.6, y: 32.4 },
    icon: Lightbulb,
    videoFile: "https://www.instagram.com/reel/DZICTA9KjuW/",
  },
  {
    id: "switches",
    label: "Smart Switches",
    anchor: { x: 77.2, y: 53 },
    labelPos: { x: 86.2, y: 43.5 },
    icon: ToggleLeft,
    videoFile: "https://www.instagram.com/reel/DKHEqiVSl4-/",
  },
  {
    id: "door",
    label: "Door Automation",
    anchor: { x: 61.3, y: 65 },
    labelPos: { x: 68.2, y: 57.5 },
    icon: Sliders,
    videoFile:
      "https://www.instagram.com/reel/DDE2L2ByII8/?igsh=bjJhaDltcW8yaW9r",
  },
  {
    id: "networking",
    label: "Networking",
    anchor: { x: 83, y: 69.5 },
    labelPos: { x: 89, y: 62 },
    icon: Wifi,
    videoFile: "https://www.instagram.com/reel/DKeUhreyEct/",
  },
  {
    id: "security",
    label: "Security",
    anchor: { x: 78.3, y: 69 },
    labelPos: { x: 60.8, y: 74.5 },
    icon: ShieldCheck,
    videoFile: "https://www.instagram.com/reel/DTJNMgzk284/",
  },
  {
    id: "gate",
    label: "Gate Automation",
    anchor: { x: 73.2, y: 78 },
    labelPos: { x: 83, y: 75 },
    icon: ShieldAlert,
    videoFile:
      "https://www.instagram.com/reel/DTp5xiDj82a/?igsh=MTZldWR6cm01OWFr",
  },
];

export default function HeroSectionV2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isMobile, isTablet } = useResponsive();

  // Interaction states
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);

  const handleHotspotClick = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, amount: 0.1 }}
      className="group relative w-full min-h-screen bg-bg-main flex items-center justify-between overflow-hidden py-20 sm:py-28 transition-colors duration-300 no-reveal"
    >
      {/* Background Image Container with Smooth Crossfade between Dark (Night) and Light (Day) Themes */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {/* Dark Theme Hero Background (Night Villa) */}
        <img
          src={heroBgDark}
          alt="Smart Home Automation Installation in Bangalore - Night View"
          title="Smart Home Automation Installation in Bangalore"
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out dark:opacity-100 opacity-0"
          loading="eager"
        />
        {/* Light Theme Hero Background (Day Villa) */}
        <img
          src={heroBgLight}
          alt="Smart Home Automation Installation in Bangalore - Day View"
          title="Smart Home Automation Installation in Bangalore"
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out dark:opacity-0 opacity-100"
          loading="eager"
        />

        {/* Left side overlay with theme mode aware light and dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/95 sm:via-bg-main/80 lg:via-bg-main/60 to-transparent pointer-events-none transition-colors duration-300" />

        {/* Bottom gradient blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-36 bg-gradient-to-t from-bg-main to-transparent pointer-events-none z-[5]" />
      </div>

      {/* Shared SVG Connector Layer */}
      {isInView && !isMobile && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {hotspotsList.map((hotspot, idx) => (
            <Connector
              key={`line-${hotspot.id}`}
              anchor={hotspot.anchor}
              labelPos={hotspot.labelPos}
              isHovered={false}
              isActive={activeId === hotspot.id}
              color={hotspot.connectorColor}
              delay={idx * 0.18}
            />
          ))}
        </svg>
      )}

      {/* Interactive Hotspots and Labels Layer */}
      {isInView && (
        <div className="absolute inset-0 w-full h-full z-30 pointer-events-none">
          <div className="relative w-full h-full pointer-events-auto">
            {hotspotsList.map((hotspot, idx) => {
              const isActive = activeId === hotspot.id;
              const delay = idx * 0.18;

              return (
                <div key={hotspot.id}>
                  {/* Anchor Dot — hidden on mobile */}
                  {!isMobile && (
                    <Hotspot
                      id={hotspot.id}
                      anchor={hotspot.anchor}
                      isHovered={false}
                      isActive={isActive}
                      onHoverStart={() => {}}
                      onHoverEnd={() => {}}
                      onClick={() => handleHotspotClick(hotspot.id)}
                      index={idx}
                      delay={delay}
                      isMobile={isMobile}
                    />
                  )}

                  {/* Floating Labels (Hidden on Mobile) */}
                  {!isMobile && (
                    <Label
                      label={hotspot.label}
                      labelPos={hotspot.labelPos}
                      icon={hotspot.icon}
                      isHovered={false}
                      isActive={isActive}
                      onHoverStart={() => {}}
                      onHoverEnd={() => {}}
                      onClick={() => handleHotspotClick(hotspot.id)}
                      delay={delay}
                      isTablet={isTablet}
                    />
                  )}

                  {/* Mobile Tooltip (Popup on Tap) */}
                  {isMobile && (
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: -10, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          style={{
                            position: "absolute",
                            left: `${hotspot.anchor.x}%`,
                            top: `${hotspot.anchor.y}%`,
                            transform: "translate(-50%, -100%)",
                            zIndex: 100,
                          }}
                          className="bg-black/90 border border-[#d4af37] backdrop-blur-md px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-white text-xs shadow-lg whitespace-nowrap"
                        >
                          <hotspot.icon className="h-3.5 w-3.5 text-[#d4af37]" />
                          <span className="font-semibold uppercase tracking-wider">
                            {hotspot.label}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Left-Side Content overlays above background and hotspots */}
      <div className="relative z-40 mx-auto  max-w-8xl w-full px-4 sm:px-14 flex flex-col lg:flex-row lg:items-stretch justify-between gap-12 sm:gap-16 pointer-events-none">
        {/* Hero Left Content */}
        <div
          className="flex-1 flex flex-col justify-center text-left max-w-2xl reveal-on-scroll reveal-left pointer-events-auto"
          data-reveal-duration="0.9s"
        >
          <div className="mb-3">
            <div className="inline-flex items-center gap-2.5 border border-border-main/60 bg-bg-surface/50 backdrop-blur-md rounded-full px-3 py-1.5 select-none pointer-events-none">
              <img
                src="/images/iso-image.svg"
                alt="ISO Certified Logo"
                title="ISO Certified Home Automation Company"
                className="h-5.5 w-5.5 object-contain"
              />
              <span className="text-[11px] sm:text-xs font-sans font-medium tracking-wide text-text-main leading-none">
                ISO <span className="text-[#00A551] font-semibold">2015</span>{" "}
                Certified Company
              </span>
            </div>
          </div>

          <h1 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-text-main tracking-tight leading-[1.15]">
            <span className="block text-nowrap">Smart Home Automation</span>
            <span className="block italic font-normal text-gold-primary">
              Company in Bangalore
            </span>
          </h1>

          <p className="mt-4 text-[0.8rem] sm:text-base text-text-muted font-body leading-relaxed max-w-lg">
            Smart homes are not about gadgets — they are about how you live.
            With almost a decade of experience and 800+ projects delivered
            across homes and select commercial spaces, here's what you can
            expect from us.
          </p>

          <div className="mt-12 sm:mt-14">
            <WaveButton
              href="#contact-enquiry"
              title="Contact MAKc Automations"
              accentColor="#006ed6"
              foregroundColor="#fff"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact-enquiry")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="home-wave-cta--drain rounded-none px-8 py-3 w-fit md:text-nowrap hover:text-white! border font-bold text-[0.65rem] tracking-wide sm:tracking-[0.15em] uppercase shadow-[0_4px_20px_rgba(10,132,255,0.35)] flex items-center justify-center gap-2 text-center"
            >
              <span className="leading-snug">
                Book a Free Smart Home Consultation
              </span>
            </WaveButton>
          </div>
        </div>

        {/* Empty Right Column on Desktop to preserve split visual layout */}
        <div className="w-full lg:max-w-[48%] xl:max-w-[52%] shrink-0 pointer-events-none hidden lg:block" />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2.5 pointer-events-none">
        <span className="text-[8px] font-bold tracking-[0.3em] !text-white/40 uppercase">
          SCROLL TO DISCOVER
        </span>
        <div className="w-[18px] h-[30px] border !border-white/30 rounded-full flex justify-center p-1.5 opacity-100">
          <div className="w-[4px] h-[6px] bg-gold-primary rounded-full animate-bounce" />
        </div>
      </div>

      {/* Floating MP4 Video Preview Popup */}
      <AnimatePresence>
        {activeId && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed sm:absolute right-3 sm:right-6 lg:right-12 top-28 sm:top-32 z-[80] w-[310px] sm:w-[350px] md:w-[370px] bg-[#0c1017]/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col pointer-events-auto"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0A84FF]">
                  MAKc Smart Living Showcase
                </span>
                <h3 className="text-sm font-semibold text-white font-sans truncate max-w-[240px]">
                  {hotspotsList.find((h) => h.id === activeId)?.label}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="w-7 h-7 rounded-full text-white! flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Video preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player Container */}
            <div className="relative w-full aspect-[4/5] max-h-[460px] bg-black flex items-center justify-center overflow-hidden rounded-b-2xl">
              {(() => {
                const activeHotspot = hotspotsList.find(
                  (h) => h.id === activeId,
                );

                if (activeHotspot?.videoFile) {
                  if (activeHotspot.videoFile.includes("instagram.com")) {
                    return (
                      <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] bg-black flex flex-col items-center justify-center">
                        <InstagramEmbed reelUrl={activeHotspot.videoFile} />
                      </div>
                    );
                  }

                  const videoUrl = activeHotspot.videoFile.startsWith("http")
                    ? activeHotspot.videoFile
                    : `${VIDEO_BASE_URL}${activeHotspot.videoFile}`;

                  return (
                    <video
                      key={activeHotspot.id}
                      src={videoUrl}
                      title={`MAKc ${activeHotspot.label} Video Showcase`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-b-2xl pointer-events-auto"
                    />
                  );
                }

                const ActiveIcon = activeHotspot?.icon || Sliders;

                return (
                  <div className="p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
                    <div className="w-16 h-16 rounded-full bg-[#0A84FF]/10 border border-[#0A84FF]/30 text-[#0A84FF] flex items-center justify-center mb-4">
                      <ActiveIcon className="w-8 h-8" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">
                      {activeHotspot?.label}
                    </h4>
                    <p className="text-xs text-white/70 max-w-xs leading-relaxed">
                      Video showcase for this category is coming soon.
                    </p>
                  </div>
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

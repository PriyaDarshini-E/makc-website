import { useEffect, useState, type ComponentType, type ReactNode } from "react";
import {
  Lightbulb,
  ShieldCheck,
  Thermometer,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { getImageUrl } from "@/utils/image";

// Custom Blinds / Curtain SVG icon to match design
function CurtainIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 3h18" />
      <path d="M20 7H4" />
      <path d="M20 11H4" />
      <path d="M20 15H4" />
      <path d="M19 19v-4" />
      <path d="M5 19v-4" />
      <path d="M8 19h8" />
    </svg>
  );
}

export interface AutomationShowcaseSlide {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  imageTitle?: string;
  icon: ComponentType<{ className?: string }>;
}

const DEFAULT_SLIDES: AutomationShowcaseSlide[] = [
  {
    id: "01",
    title: "Lighting Automation",
    shortTitle: "Lighting\nAutomation",
    description:
      "Transform your spaces with adaptive lighting scenes tailored to your daily routines.",
    image: getImageUrl("service_lighting.webp"),
    imageAlt: "Industrial and Commercial Lighting Automation Solutions",
    imageTitle: "Lighting Automation Services",
    icon: Lightbulb,
  },
  {
    id: "02",
    title: "Security Automation",
    shortTitle: "Security\nAutomation",
    description:
      "Fortify your home with integrated alarms, access control, and smart surveillance.",
    image: getImageUrl("service_security.webp"),
    imageAlt: "Industrial Security and Surveillance Automation Solutions",
    imageTitle: "Security Automation Services",
    icon: ShieldCheck,
  },
  {
    id: "03",
    title: "Curtain Automation",
    shortTitle: "Curtain\nAutomation",
    description:
      "Shape daylight, privacy, and ambience with a single, effortless routine.",
    image: "/images/curtain_automation.png",
    imageAlt: "Luxury living room featuring automated smart curtains at sunset",
    imageTitle: "Smart Curtain Automation",
    icon: CurtainIcon,
  },
  {
    id: "04",
    title: "Climate Automation",
    shortTitle: "Climate\nAutomation",
    description:
      "Optimize thermal comfort and energy savings with smart heating and cooling.",
    image: getImageUrl("service_automation.webp"),
    imageAlt: "Industrial Automation Solutions for Smart Manufacturing",
    imageTitle: "Industrial Automation Services",
    icon: Thermometer,
  },
];

export interface AutomationShowcaseProps {
  slides?: AutomationShowcaseSlide[];
  initialSlideId?: string;
  eyebrow?: string;
  heading?: ReactNode;
  introduction?: string;
  ctaLabel?: string;
  ctaHref?: string;
  accentColor?: string;
}

export default function AutomationShowcase({
  slides = DEFAULT_SLIDES,
  initialSlideId = "03",
  eyebrow = "Smart Automation",
  heading = (
    <>
      Intelligent automation <br />
      for a <span className="text-[var(--accent-color)]">smarter life</span>
    </>
  ),
  introduction = "Transform your home into a smart, connected space that adapts to your lifestyle.",
  accentColor = "#7784ff",
}: AutomationShowcaseProps) {
  const initialIndex = Math.max(
    0,
    slides.findIndex((slide) => slide.id === initialSlideId),
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cachedIndex, setCachedIndex] = useState(initialIndex);

  // Convert hex color to comma-separated RGB values for opacity/rgba usage
  const hexToRgb = (hex: string): string => {
    const cleanHex = hex.replace("#", "");
    const num = parseInt(cleanHex, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `${r}, ${g}, ${b}`;
  };

  const accentColorRgb = hexToRgb(accentColor);
  const accentStyle = {
    "--accent-color": accentColor,
    "--accent-color-rgb": accentColorRgb,
  } as React.CSSProperties;

  const slidesSerialized = slides.map((slide) => slide.id).join(",");

  useEffect(() => {
    setActiveIndex(initialIndex);
    setCachedIndex(initialIndex);
  }, [slidesSerialized, initialSlideId, initialIndex]);

  useEffect(() => {
    if (activeIndex >= slides.length) {
      setActiveIndex(initialIndex);
      setCachedIndex(initialIndex);
    }
  }, [activeIndex, initialIndex, slides.length]);

  useEffect(() => {
    if (activeIndex !== cachedIndex) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setCachedIndex(activeIndex);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, cachedIndex]);

  if (slides.length === 0) return null;

  const activeTab = slides[cachedIndex] ?? slides[0];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section style={accentStyle} className="w-full relative overflow-hidden bg-bg-surface dark:bg-black py-16 lg:py-24 min-h-[600px] lg:h-[650px] flex items-center border-b border-border-main/40 select-none">
      {/* Background Images Crossfade Layer (Only on the right half for desktop, full background for mobile) */}
      {slides.map((tab, idx) => (
        <img
          key={tab.id}
          src={tab.image}
          alt={idx === cachedIndex ? tab.imageAlt : ""}
          title={idx === cachedIndex ? (tab.imageTitle || tab.imageAlt) : ""}
          className={`absolute inset-y-0 right-0 h-full object-cover z-0 transition-all duration-1000 ease-in-out lg:w-1/2 w-full ${
            idx === cachedIndex
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        />
      ))}

      {/* Responsive Dark Overlay (Left-to-right fade for desktop, top-to-bottom fade for mobile) */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-surface via-bg-surface/90 to-bg-surface/55 dark:from-black dark:via-black/85 dark:to-transparent z-10 hidden lg:block" />
      {/* desktop transition fade on the image left edge */}
      <div className="absolute inset-y-0 left-1/2 w-32 bg-gradient-to-r from-bg-surface to-bg-surface/55 dark:from-black dark:to-transparent z-15 hidden lg:block" />
      {/* mobile fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-surface/95 via-bg-surface/85 to-bg-surface/95 dark:from-black/95 dark:via-black/75 dark:to-black/95 z-10 lg:hidden" />

      {/* Grid Content Overlay */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Heading, Subtitle, Tabs, and Arrows */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left">
            <div>
              {/* Eyebrow */}
              <span className="text-[10px] font-bold text-[var(--accent-color)] uppercase tracking-[0.25em] block mb-4">
                {eyebrow}
              </span>

              {/* Main Heading */}
              <h2 className="text-4xl sm:text-5xl font-bold font-display text-text-main dark:text-white tracking-[-0.03em] leading-[1.15] mb-6 text-balance">
                {heading}
              </h2>

              {/* Subtext */}
              <p className="text-sm sm:text-base text-text-muted dark:text-white/70 max-w-[27rem] leading-relaxed mb-8">
                {introduction}
              </p>

              {/* Short Line Divider */}
              <div className="w-10 h-[2px] bg-[rgba(var(--accent-color-rgb),0.7)] mb-10" />

              <div
                className="flex items-center gap-3 sm:gap-4 mt-8 overflow-x-auto pb-4 -mx-2 px-2 scrollbar-none"
                role="tablist"
                aria-label="Automation solutions"
              >
                {slides.map((tab, idx) => {
                  const Icon = tab.icon;
                  const isActive = idx === activeIndex;

                  return (
                    <div key={tab.id} className="flex items-center shrink-0">
                      <button
                        onClick={() => setActiveIndex(idx)}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls="automation-showcase-detail"
                        className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full apple-border-shine transition-all duration-300 relative cursor-pointer group ${
                          isActive
                            ? "bg-[rgba(var(--accent-color-rgb),0.15)] border border-[var(--accent-color)] z-10 shadow-[0_0_15px_rgba(var(--accent-color-rgb),0.3)]"
                            : "border border-border-main dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
                        }`}
                      >
                        <Icon
                          className={`w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110 ${
                            isActive ? "text-[var(--accent-color)]" : "text-text-muted dark:text-white/50 group-hover:text-text-main dark:group-hover:text-white"
                          }`}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Left & Right Arrow Navigation */}
            <div className="flex items-center gap-3.5 mt-10">
              <button
                onClick={handlePrev}
                aria-label="Previous Item"
                className="w-20 h-10 rounded-3xl border border-border-main dark:border-white/15 flex items-center justify-center text-text-muted dark:text-white/55 hover:text-text-main dark:hover:text-white hover:border-[var(--accent-color)] hover:bg-[rgba(var(--accent-color-rgb),0.1)] transition-all duration-300 cursor-pointer"
              >
                <ArrowLeft className="w-4.5 h-4.5 stroke-[1.5]" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Item"
                className="w-20 h-10 rounded-3xl border border-border-main dark:border-white/15 flex items-center justify-center text-text-muted dark:text-white/55 hover:text-text-main dark:hover:text-white hover:border-[var(--accent-color)] hover:bg-[rgba(var(--accent-color-rgb),0.1)] transition-all duration-300 cursor-pointer"
              >
                <ArrowRight className="w-4.5 h-4.5 stroke-[1.5]" />
              </button>
            </div>
          </div>

          {/* Right Column: Tab details layered on the fading overlay */}
          <div
            className="lg:col-span-5 flex flex-col justify-center items-start text-left pl-0 lg:pl-10"
            id="automation-showcase-detail"
            role="tabpanel"
          >
            <div
              className={`transition-all duration-500 ease-out relative ${
                isTransitioning
                  ? "opacity-0 translate-y-2 blur-[2px]"
                  : "opacity-100 translate-y-0 blur-0"
              }`}
            >
              {/* Large glowing backdrop number */}
              <span className="text-6xl sm:text-8xl lg:text-[110px] font-bold font-display tracking-[-0.04em] text-[rgba(var(--accent-color-rgb),0.3)] dark:text-[rgba(var(--accent-color-rgb),0.9)] select-none leading-none -ml-1.5 block">
                {activeTab.id}
              </span>

              {/* Detail Title */}
              <h3 className="text-2xl lg:text-3.5xl font-bold font-display text-text-main dark:text-white tracking-[-0.03em] mb-4 mt-2 text-balance">
                {activeTab.title}
              </h3>

              {/* Detail Description */}
              <p className="text-text-main/80 dark:text-white/80 text-sm lg:text-[15px] leading-relaxed max-w-sm font-light mb-8">
                {activeTab.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

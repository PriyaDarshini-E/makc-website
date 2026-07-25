// Smart LED Lighting Page

// Import module-specific components
import DimmingTuningSection from "../components/DimmingTuningSection";
import LightingHero from "../components/LightingHero";
import OutdoorLightingSection from "../components/OutdoorLightingSection";
import RGBMoodLightingSection from "../components/RGBMoodLightingSection";
import SceneBasedLightingSection from "../components/SceneBasedLightingSection";

import useSEO from "@/hooks/useSEO";
import AutomationShowcase from "@/components/common/AutomationShowcase";
import { Sparkles, Palette, SunDim, Trees } from "lucide-react";
import { getImageUrl } from "@/utils/image";

const LIGHTING_SLIDES = [
  {
    id: "01",
    title: "Scene-Based Lighting",
    shortTitle: "Scene-Based\nLighting",
    description:
      "Transform your space instantly with pre-set lighting scenes. Easily switch between Morning, Evening, Movie, or Party modes to create the perfect atmosphere.",
    image: getImageUrl("lightimage1.webp"),
    imageAlt: "Circadian ambient lighting layout for a modern smart home",
    imageTitle: "Circadian Smart Lighting",
    icon: Sparkles,
  },
  {
    id: "02",
    title: "RGB Lighting",
    shortTitle: "RGB\nLighting",
    description:
      "Express your style with millions of colors. Control brightness, warmth, and dynamic color-changing effects directly from your touch panel or smartphone.",
    image: getImageUrl("rgbmod.webp"),
    imageAlt: "RGB smart LED lighting system with customizable color control",
    imageTitle: "RGB Smart Lighting System",
    icon: Palette,
  },
  {
    id: "03",
    title: "Dimming & Tuning of Lights",
    shortTitle: "Dimming &\nTuning",
    description:
      "Smoothly adjust light intensity and color temperature from warm white to cool daylight, reducing eye strain and matching your natural circadian rhythm.",
    image: getImageUrl("dimeLight.webp"),
    imageAlt: "Smart dimmable LED lighting control system for modern homes",
    imageTitle: "Smart Dimmable Lighting",
    icon: SunDim,
  },
  {
    id: "04",
    title: "Outdoor & Landscape Lighting",
    shortTitle: "Outdoor\nLighting",
    description:
      "Enhance home curb appeal and security with automated exterior lighting. Program garden, compound, and facade lights to sync with sunset and sunrise.",
    image: getImageUrl("outdoorImage1.webp"),
    imageAlt: "Luxury villa with automated outdoor landscape lighting",
    imageTitle: "Smart Outdoor Lighting",
    icon: Trees,
  },
];

export default function LightingPage() {
  useSEO({
    title: "Smart Lighting Solutions in Bangalore | MAKc Automations",
    description:
      "Transform your home ambience with MAKc Automations - expert smart lighting installation, RGB mood scenes, dimming & landscape lighting controls in Bangalore.",
    keywords: "smart lighting solutions, smart lighting installation bangalore, led lights for home, home smart light",
    canonicalUrl: "https://makcautomations.com/lighting",
    robots:
      "INDEX, FOLLOW, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE",
  });

  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* CUSTOM HERO SECTION */}
      <LightingHero />

      {/* FULL WIDTH AUTOMATION SHOWCASE SECTION */}
      <AutomationShowcase
        slides={LIGHTING_SLIDES}
        initialSlideId="01"
        eyebrow="Smart Lighting"
        heading={
          <>
            Intelligent light control <br />
            for a <span className="text-[#00A551]">smarter ambience</span>
          </>
        }
        introduction="Enhance your lifestyle and set the perfect mood with adaptive, automated lighting systems designed for your modern home."
        accentColor="#00A551"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-16">
        {/* Mood-Based Lighting SECTION */}
        <SceneBasedLightingSection />

        {/* RGB SECTION */}
        <RGBMoodLightingSection />

        {/* DIMMING & TUNING OF LIGHTS SECTION */}
        <DimmingTuningSection />

        {/* OUTDOOR & LANDSCAPE LIGHTING SECTION */}
        <OutdoorLightingSection />
      </div>
    </div>
  );
}

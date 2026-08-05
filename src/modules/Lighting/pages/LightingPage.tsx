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
    title: "Dimming Tuning ",
    shortTitle: "Dimming &\nTuning",
    description:
      "Smoothly adjust light intensity and color temperature from warm white to cool daylight, reducing eye strain and matching your natural circadian rhythm.",
    image: getImageUrl("dimeLight.webp"),
    imageAlt: "Smart Dimmable LED Lighting Control Solution",
    imageTitle: "Dimmable LED Lighting System",
    icon: SunDim,
  },
  {
    id: "03",
    title: "RGB Lighting",
    shortTitle: "RGB\nLighting",
    description:
      "Express your style with millions of colors. Control brightness, warmth, and dynamic color-changing effects directly from your touch panel or smartphone.",
    image: getImageUrl("rgbmod.webp"),
    imageAlt: "RGB LED Lighting Module for Smart Lighting Automation",
    imageTitle: "RGB LED Lighting Module",
    icon: Palette,
  },
  {
    id: "04",
    title: "Outdoor & Landscape Lighting",
    shortTitle: "Outdoor\nLighting",
    description:
      "Enhance home curb appeal and security with automated exterior lighting. Program garden, compound, and facade lights to sync with sunset and sunrise.",
    image: getImageUrl("service/ol1.webp"),
    imageAlt:
      "Outdoor LED Lighting Solution for Commercial and Industrial Spaces",
    imageTitle: "Outdoor Lighting Solutions",
    icon: Trees,
  },
];

export default function LightingPage() {
  useSEO({
    title: "Smart Lighting Solutions in Bangalore | MAKc Automations",
    description:
      "Transform your home ambience with MAKc Automations - expert smart lighting installation, RGB mood scenes, dimming & landscape lighting controls in Bangalore.",
    keywords:
      "smart lighting solutions, smart lighting installation bangalore, led lights for home, home smart light",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        {/* DIMMING & TUNING OF LIGHTS SECTION */}
        <DimmingTuningSection />

        {/* Mood-Based Lighting SECTION */}
        <SceneBasedLightingSection />

        {/* RGB SECTION */}
        <RGBMoodLightingSection />

        {/* OUTDOOR & LANDSCAPE LIGHTING SECTION */}
        <OutdoorLightingSection />
      </div>
    </div>
  );
}

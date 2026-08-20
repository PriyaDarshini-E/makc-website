import CCTVMonitoringSection from "../components/CCTVMonitoringSection";
import SecurityHero from "../components/SecurityHero";
import SensorBasedProtection from "../components/SensorBasedProtection";
import useSEO from "@/hooks/useSEO";
import { SEO_ROUTES } from "@/config/seoData";
import AutomationShowcase from "@/components/common/AutomationShowcase";
import { Video, Fingerprint, BellRing } from "lucide-react";
import { getImageUrl } from "@/utils/image";

const SECURITY_SLIDES = [
  {
    id: "01",
    title: "CCTV & Video Surveillance",
    shortTitle: "Video\nSurveillance",
    description:
      "Monitor your premises 24/7 with high-definition night-vision cameras and motion-triggered recordings accessible directly on your smartphone.",
    image: getImageUrl("service_security.webp"),
    imageAlt: "AI CCTV surveillance feed on phone screen",
    imageTitle: "Smart CCTV Surveillance",
    icon: Video,
  },
  {
    id: "02",
    title: "Smart Access & Biometric Locks",
    shortTitle: "Access\nControl",
    description:
      "Secure entry points with digital biometric smart door locks, keyless numeric pins, RFID cards, or face recognition logs.",
    image: getImageUrl("project_apartments.webp"),
    imageAlt: "Biometric smart door lock handle on apartment door",
    imageTitle: "Biometric Smart Door Lock",
    icon: Fingerprint,
  },
  {
    id: "03",
    title: "Intrusion & Threat Detection",
    shortTitle: "Safety\nAlerts",
    description:
      "Detect motion, door/window movements, glass breaks, smoke, or water leaks with continuous real-time smart sensor alerts.",
    image: getImageUrl("why_choose_us.webp"),
    imageAlt: "Wireless motion sensor and alarm system",
    imageTitle: "Wireless Safety Sensors",
    icon: BellRing,
  },
];

export default function SecurityPage() {
  useSEO(SEO_ROUTES["/security"]);

  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* CUSTOM HERO SECTION */}
      <SecurityHero />

      {/* FULL WIDTH AUTOMATION SHOWCASE SECTION */}
      <AutomationShowcase
        slides={SECURITY_SLIDES}
        initialSlideId="01"
        eyebrow="Smart Security"
        heading={
          <>
            Intelligent security control <br />
            for a <span className="text-[#0A84FF]">safer home</span>
          </>
        }
        introduction="Secure what matters most with smart AI cameras, biometric locks, and real-time sensors integrated into your daily routines."
        accentColor="#0A84FF"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        {/* CCTV & VIDEO MONITORING SECTION */}
        <CCTVMonitoringSection />

        {/* SENSOR-BASED PROTECTION SECTION */}
        <SensorBasedProtection />
      </div>
    </div>
  );
}

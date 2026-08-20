import MeshWifiSolutionsSection from "../components/MeshWifiSolutionsSection";
import NetworkingHero from "../components/NetworkingHero";
import WiredNetworkSection from "../components/WiredNetworkSection";
import useSEO from "@/hooks/useSEO";
import { SEO_ROUTES } from "@/config/seoData";
import AutomationShowcase from "@/components/common/AutomationShowcase";
import { Wifi, Network } from "lucide-react";
import { getImageUrl } from "@/utils/image";

const NETWORKING_SLIDES = [
  {
    id: "01",
    title: "Mesh Wi-Fi Coverage",
    shortTitle: "Mesh Wi-Fi\nCoverage",
    description:
      "Experience seamless, dead-zone-free high-speed Wi-Fi roaming across multi-story luxury villas, outdoor gardens, and guest areas.",
    image: getImageUrl("service_naetworking.webp"),
    imageAlt: "High-speed wireless mesh Wi-Fi network setup",
    imageTitle: "Smart Mesh Wi-Fi Systems",
    icon: Wifi,
  },
  {
    id: "02",
    title: "Enterprise Wired Networking",
    shortTitle: "Wired\nNetworking",
    description:
      "Form the backbone of your smart home with premium Cat6/Cat6A structured cabling, switches, and patch panels for stable high-bandwidth streams.",
    image: getImageUrl("project_commearcial.webp"),
    imageAlt: "Enterprise grade wired network equipment and patch panels",
    imageTitle: "Wired Structured Cabling",
    icon: Network,
  },
];

export default function NetworkingPage() {
  useSEO(SEO_ROUTES["/networking"]);

  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* CUSTOM HERO SECTION */}
      <NetworkingHero />

      {/* FULL WIDTH AUTOMATION SHOWCASE SECTION */}
      <AutomationShowcase
        slides={NETWORKING_SLIDES}
        initialSlideId="01"
        eyebrow="Smart Networking"
        heading={
          <>
            Intelligent network control <br />
            for a <span className="text-[#0A84FF]">connected life</span>
          </>
        }
        introduction="Establish a bulletproof, high-speed foundation for all your smart devices with mesh Wi-Fi and structured wired networking."
        accentColor="#0A84FF"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        {/* WIRED NETWORK PLANNING SECTION */}
        <WiredNetworkSection />

        {/* MESH WI-FI NETWORK SOLUTIONS SECTION */}
        <MeshWifiSolutionsSection />
      </div>
    </div>
  );
}

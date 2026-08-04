// Import module-specific components
import MeshWifiSolutionsSection from "../components/MeshWifiSolutionsSection";
import NetworkingHero from "../components/NetworkingHero";
import WiredNetworkSection from "../components/WiredNetworkSection";
import useSEO from "@/hooks/useSEO";
import AutomationShowcase from "@/components/common/AutomationShowcase";
import { Wifi, Network, Server } from "lucide-react";
import { getImageUrl } from "@/utils/image";

const NETWORKING_SLIDES = [
  {
    id: "01",
    title: "Mesh Wi-Fi Coverage",
    shortTitle: "Mesh Wi-Fi\nCoverage",
    description:
      "Experience seamless, dead-zone-free high-speed Wi-Fi roaming across multi-story luxury villas, outdoor gardens, and guest areas.",
    image: getImageUrl("service_networking.webp"),
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
    image: getImageUrl("project_commercial.webp"),
    imageAlt: "Enterprise grade wired network equipment and patch panels",
    imageTitle: "Wired Structured Cabling",
    icon: Network,
  },
  {
    id: "03",
    title: "Secure Gateways & Firewalls",
    shortTitle: "Secure\nGateways",
    description:
      "Protect your smart devices and private data from external vulnerabilities with enterprise security routers and isolated guest networks.",
    image: getImageUrl("smarter_way_bg.webp"),
    imageAlt: "Smart network security firewall router configuration",
    imageTitle: "Network Firewalls and Security",
    icon: Server,
  },
];

export default function NetworkingPage() {
  useSEO({
    title: "Home Networking Solutions in Bangalore | MAKc Automations",
    description:
      "MAKc Automations offers enterprise-grade home networking solutions in Bangalore, including mesh Wi-Fi systems, high-speed wired networks & seamless coverage for luxury villas.",
    keywords: "home networking solutions in bangalore, mesh wireless network, high speed home wifi, enterprise networking bangalore",
    canonicalUrl: "https://makcautomations.com/networking",
    robots:
      "INDEX, FOLLOW, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE",
  });

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

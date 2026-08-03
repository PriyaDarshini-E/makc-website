import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const types = [
  "Home Mesh Solutions",
  "Wired LAN Networking",
  "Hybrid Setups",
  "Dead-zone Elimination",
];

const features = [
  "Site Inspection & Requirement analysis",
  "Coverage and Load Planning",
  "Scalable Network Design",
  "Clean and Efficient Layouts",
];

const images = [
  { src: "wiredNetwork.webp", alt: "Multi-floor Wi-Fi mesh network planning for seamless home connectivity", title: "Wi-Fi Mesh Network Solution" },
  { src: "service/WN1.webp", alt: "Clean network rack with organized cable management for smart home connectivity", title: "Smart Network Rack Installation" },
  { src: "service/WN2.webp", alt: "Multi-floor Wi-Fi mesh network planning for seamless home connectivity", title: "Wi-Fi Mesh Network Solution" },
];

export default function WiredNetworkSection() {
  return (
    <AutomationMosaicSection
      title="Wired Network Planning & Design"
      description="Reliable Connectivity Designed for Modern Usage."
      types={types}
      features={features}
      suitableText="Ideal for Smooth Browsing, Streaming, Smart Devices, and Work-From-Home Setups."
      images={images}
      imagePosition="right"
      prefix="wn"
      serviceName="Wired Network"
      reels={[
        "https://www.instagram.com/reel/DKeUhreyEct/",
        "https://www.instagram.com/reel/DJwWg10qD_r/",
      ]}
      reelTitles={[
        "Watch Luxury Smart Lighting Reel on Instagram",
        "Watch Smart Lighting Solutions Reel on Instagram",
      ]}
    />
  );
}

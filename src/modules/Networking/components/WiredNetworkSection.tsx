import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const types = [
  "Home Mesh solutions",
  "Wired LAN networking",
  "Hybrid setups",
  "Dead-zone elimination",
];

const features = [
  "Site inspection & requirement analysis",
  "Coverage and load planning",
  "Scalable network design",
  "Clean and efficient layouts",
];

const images = [
  { src: "service/WN1.webp", alt: "Clean network rack with organized cable management for smart home connectivity", title: "Smart Network Rack Installation" },
  { src: "service/WN2.webp", alt: "Multi-floor Wi-Fi mesh network planning for seamless home connectivity", title: "Wi-Fi Mesh Network Solution" },
  { src: "project_apartments.webp", alt: "Multi-floor Wi-Fi mesh network planning for seamless home connectivity", title: "Wi-Fi Mesh Network Solution" },
];

export default function WiredNetworkSection() {
  return (
    <AutomationMosaicSection
      title="Wired Network Planning & Design"
      description="Reliable connectivity designed for modern usage."
      types={types}
      features={features}
      suitableText="Ideal for smooth browsing, streaming, smart devices, and work-from-home setups."
      images={images}
      imagePosition="right"
      prefix="wn"
      serviceName="Wired Network"
    />
  );
}

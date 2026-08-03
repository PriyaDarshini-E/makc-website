import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const benefits = [
  "Uniform Wi-Fi Coverage",
  "Seamless Network across rooms",
  "No signal drops or buffering",
  "Scalable Network Design",
];

const images = [
  {
    src: "netSolutionImage1.webp",
    alt: "Smart video door phone and intercom system installed on a modern marble wall",
    title: "Smart Video Door Phone System",
  },
  {
    src: "service/MW1.webp",
    alt: "Clean network rack with organized cable management for smart home connectivity",
    title: "Smart Network Rack Installation",
  },
  {
    src: "service/MW2.webp",
    alt: "Wireless smart home networking hub with centralized connectivity controls",
    title: "Smart Home Networking Hub",
  },
];

export default function MeshWifiSolutionsSection() {
  return (
    <AutomationMosaicSection
      title="Mesh Wi-Fi Solutions"
      description="Establish Seamless, High-Speed Wi-Fi across every corner of your home."
      types={benefits}
      suitableText="Perfect for Streaming, Working, Online Gaming, and Connecting Multiple Smart Devices Concurrently without bottlenecks."
      images={images}
      imagePosition="left"
      prefix="mws"
      serviceName="Mesh Wi-Fi Network"
      reelUrl="https://www.instagram.com/reel/DCl9TiByn2F/"
      reelTitles={["Watch Smart Lighting Installation Reel on Instagram"]}
    />
  );
}

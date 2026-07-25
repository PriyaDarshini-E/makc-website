import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const benefits = [
  "Uniform Wi-Fi coverage",
  "Seamless roaming across rooms",
  "No signal drops or buffering",
  "Scalable network design",
];

const images = [
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
  {
    src: "netSolutionImage3.webp",
    alt: "Smart video door phone and intercom system installed on a modern marble wall",
    title: "Smart Video Door Phone System",
  },
];

export default function MeshWifiSolutionsSection() {
  return (
    <AutomationMosaicSection
      title="Mesh Wi-Fi Solutions"
      description="Establish seamless, high-speed Wi-Fi across every corner of your home."
      types={benefits}
      suitableText="Perfect for streaming, working, online gaming, and connecting multiple smart devices concurrently without bottlenecks."
      images={images}
      imagePosition="left"
      prefix="mws"
      serviceName="Mesh Wi-Fi Network"
    />
  );
}

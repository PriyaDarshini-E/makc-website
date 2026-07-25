import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const includesList = [
  "Garden lighting",
  "Compound & pathway lights",
  "Facade & elevation lighting",
  "Time-based outdoor lighting",
];

const images = [
  {
    src: "service/OLL1.webp",
    alt: "Luxury villa entrance facade with automated exterior lighting",
    title: "Automated Exterior Lighting",
  },
  {
    src: "service/OLL2.webp",
    alt: "Warm spotlights and accent lighting in a contemporary living room",
    title: "Accent Lighting Design",
  },
  {
    src: "service_lighting.webp",
    alt: "Smart garden and facade lighting controls for outdoor automation",
    title: "Smart Outdoor Lighting Controls",
  },
];

export default function OutdoorLightingSection() {
  return (
    <AutomationMosaicSection
      title="Outdoor & Landscape Lighting"
      description="Automate exterior lights for security and aesthetics."
      types={includesList}
      suitableText="Lights operate automatically based on time, daylight intensity, or custom schedules."
      images={images}
      imagePosition="right"
      prefix="out"
      serviceName="Outdoor & Landscape Lighting"
    />
  );
}

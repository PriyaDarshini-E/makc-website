import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const includesList = [
  "Garden lighting",
  "Compound & Pathway lights",
  "Facade & Elevation lighting",
  "Time-Based Outdoor lighting",
];

const images = [
  {
    src: "outdoorImage1.webp",
    alt: "Smart garden and facade lighting controls for outdoor automation",
    title: "Smart Outdoor Lighting Controls",
  },
  {
    src: "service/ol1.webp",
    alt: "Luxury villa entrance facade with automated exterior lighting",
    title: "Automated Exterior Lighting",
  },
  {
    src: "service/OLLa2.webp",
    alt: "Warm spotlights and accent lighting in a contemporary living room",
    title: "Accent Lighting Design",
  },
];

export default function OutdoorLightingSection() {
  return (
    <AutomationMosaicSection
      title="Outdoor & Landscape Lighting"
      description="Automate Exterior Lights for Security and Aesthetics."
      types={includesList}
      suitableText="Lights Operate Automatically based on Time, Daylight Intensity, or Custom Schedules."
      images={images}
      imagePosition="left"
      prefix="out"
      serviceName="Outdoor & Landscape Lighting"
    />
  );
}

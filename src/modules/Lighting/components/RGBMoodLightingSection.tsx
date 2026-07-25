import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const types = [
  "Bedrooms & kids rooms",
  "Living rooms",
  "Home theatres",
  "Accent walls & false ceilings",
];

const images = [
  { src: "service/RGB1.webp", alt: "RGB smart LED lighting system with customizable color control", title: "RGB Smart Lighting System" },
  { src: "service/RGB2.webp", alt: "Warm mood lights creating a cozy modern living room ambiance", title: "Smart Mood Lighting" },
  { src: "project_apartments.webp", alt: "Color-changing RGB LED strip lights installed in a modern apartment", title: "RGB LED Strip Lighting" },
];

export default function RGBMoodLightingSection() {
  return (
    <AutomationMosaicSection
      title="RGB Lighting"
      description="Create ambience and personality with dynamic lighting."
      types={types}
      suitableText="Choose colours, brightness, and effects directly from your phone or panel."
      images={images}
      imagePosition="right"
      prefix="rgb"
      serviceName="RGB Lighting"
    />
  );
}

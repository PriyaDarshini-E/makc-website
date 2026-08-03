import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const types = [
  "Bedrooms & Kids rooms",
  "Living rooms",
  "Home theatres",
  "Accent Walls & False ceilings",
];

const images = [
  { src: "rgbmod.webp", alt: "Color-changing RGB LED strip lights installed in a modern apartment", title: "RGB LED Strip Lighting" },
  { src: "service/RGB1.webp", alt: "RGB smart LED lighting system with customizable color control", title: "RGB Smart Lighting System" },
  { src: "service/RGB2.webp", alt: "Warm mood lights creating a cozy modern living room ambiance", title: "Smart Mood Lighting" },
];

export default function RGBMoodLightingSection() {
  return (
    <AutomationMosaicSection
      title="RGB Lighting"
      description="Create Ambience and Personality with Dynamic Lighting."
      types={types}
      suitableText="Choose Colours, Brightness, and Effects Directly from your Phone or Panel."
      images={images}
      imagePosition="right"
      prefix="rgb"
      serviceName="RGB Lighting"
      reels={[
        "https://www.instagram.com/reel/DPWD8CPjVm6/",
        "https://www.instagram.com/reel/DJmErhkSlL0/",
      ]}
      reelTitles={[
        "Watch Smart Home Audio Experience Reel on Instagram",
        "Watch Home Audio Installation Reel on Instagram",
      ]}
    />
  );
}

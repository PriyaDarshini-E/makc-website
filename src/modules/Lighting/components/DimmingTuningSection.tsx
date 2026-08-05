import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const types = [
  "Smooth Dimming Control",
  "Preset Brightness Levels",
  "Night-Friendly Low-Light Modes",
];

const images = [
  { src: "dimeLight.webp", alt: "Dimmable architectural cove lighting in a luxury villa", title: "Architectural Cove Lighting" },
  { src: "service/DTL1.webp", alt: "Smart dimmable LED lighting control system for modern homes", title: "Smart Dimmable Lighting" },
  { src: "service/DTL2a.webp", alt: "Smart light control interface panel for home automation", title: "Smart Lighting Control Panel" },
];

export default function DimmingTuningSection() {
  return (
    <AutomationMosaicSection
      title="Dimming & Tuning of Lights"
      description="Adjust Lighting Intensity Smoothly for Comfort and Mood."
      types={types}
      suitableText="Perfect for Bedrooms, Living rooms, and Conference areas."
      images={images}
      imagePosition="right"
      prefix="dt"
      serviceName="Dimming & Tuning of Lights"
      reelUrl="https://www.instagram.com/reel/DMcsd9Pyetv/"
      reelTitles={["Watch Home Audio System Installation Reel on Instagram"]}
    />
  );
}

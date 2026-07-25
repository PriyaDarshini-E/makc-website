import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const scenes = [
  "Morning Mode",
  "Evening Relax Mode",
  "Movie / TV Mode",
  "Party Mode",
  "Night Mode",
  "Time-Based",
];

const images = [
  {
    src: "service/SBL1.webp",
    alt: "Circadian ambient lighting layout for a modern smart home",
    title: "Circadian Smart Lighting",
  },
  {
    src: "service/SBL2.webp",
    alt: "Warm lighting in a modern dining room with smart lighting automation",
    title: "Smart Dining Room Lighting",
  },
  {
    src: "lightimage3.webp",
    alt: "Warm mood lights creating a cozy modern living room ambiance",
    title: "Smart Mood Lighting",
  },
];

export default function SceneBasedLightingSection() {
  return (
    <AutomationMosaicSection
      title="Scene-Based Lighting"
      description="Create different lighting environments for any occasion or time of day."
      types={scenes}
      suitableText="Perfect for creating relaxing environments, productivity zones, dinner parties, and automated night schedules."
      images={images}
      imagePosition="left"
      prefix="sbl"
      serviceName="Scene-Based Lighting"
    />
  );
}

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
    src: "lightimage1.webp",
    alt: "Warm mood lights creating a cozy modern living room ambiance",
    title: "Smart Mood Lighting",
  },
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
];

export default function SceneBasedLightingSection() {
  return (
    <AutomationMosaicSection
      title="Scene-Based Lighting"
      description="Create different Lighting Environments for any occasion or time of day."
      types={scenes}
      suitableText="Perfect for creating Relaxing Environments, Productivity Zones, Dinner Parties, and Automated Night Schedules."
      images={images}
      imagePosition="left"
      prefix="sbl"
      serviceName="Scene-Based Lighting"
      reels={[
        "https://www.instagram.com/reel/DbzFUZxKTbf/",
        "https://www.instagram.com/reel/DZICTA9KjuW/",
      ]}
      reelTitles={[
        "Watch Home Audio Solutions Reel on Instagram",
        "Watch Premium Audio Setup Reel on Instagram",
      ]}
    />
  );
}

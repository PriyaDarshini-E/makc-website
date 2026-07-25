import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const types = [
  "Smooth dimming control",
  "Preset brightness levels",
  "Night-friendly low-light modes",
];

const images = [
  { src: "service/DTL1.webp", alt: "Smart dimmable LED lighting control system for modern homes", title: "Smart Dimmable Lighting" },
  { src: "service/DTL2.webp", alt: "Smart light control interface panel for home automation", title: "Smart Lighting Control Panel" },
  { src: "project_villas.webp", alt: "Dimmable architectural cove lighting in a luxury villa", title: "Architectural Cove Lighting" },
];

export default function DimmingTuningSection() {
  return (
    <AutomationMosaicSection
      title="Dimming & Tuning of Lights"
      description="Adjust lighting intensity smoothly for comfort and mood."
      types={types}
      suitableText="Perfect for bedrooms, living rooms, and conference areas."
      images={images}
      imagePosition="left"
      prefix="dt"
      serviceName="Dimming & Tuning of Lights"
    />
  );
}

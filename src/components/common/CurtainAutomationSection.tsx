import AutomationMosaicSection from "./AutomationMosaicSection";

const types = [
  "Automatic open and close",
  "Time-based and sunlight-based control",
];

const features = ["Privacy control", "One-touch and voice commands"];

const images = [
  { src: "service/CA1.webp", alt: "Circadian curtain automation in master bedroom", title: "Smart Bedroom Curtain Automation" },
  { src: "service/CA2.webp", alt: "Sleek automatic blind track details", title: "Motorized Smart Blinds" },
  { src: "project_villas.webp", alt: "Luxury villa bedroom with smart curtains", title: "Luxury Smart Villa Bedroom" },
];

export default function CurtainAutomationSection() {
  return (
    <AutomationMosaicSection
      title="Curtain Automation"
      description="Automate curtains and blinds for comfort, privacy, and energy efficiency."
      types={types}
      features={features}
      suitableText="Perfect for bedrooms, living rooms, conference rooms, and large window areas."
      images={images}
      imagePosition="left"
      prefix="curt"
      serviceName="Curtain Automation"
    />
  );
}

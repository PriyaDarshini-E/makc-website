import AutomationMosaicSection from "./AutomationMosaicSection";

const types = [
  "Video Door Bell",
  "Indoor Monitor",
  "Smart Door Lock",
  "Smart Gate Lock",
];

const features = [
  "Two-way Communication with visitors",
  "Unlock Doors from anywhere in the world",
  "Instant Mobile Notifications",
  "Secure App-Based, PIN, or Biometric Access",
];

const images = [
  {
    src: "service_security.webp",
    alt: "Smart door automation showing a video door bell and camera monitoring",
    title: "Video Door Phone & Smart Security",
  },
  { src: "service/DA1.webp", alt: "Touch screen automation control panel", title: "Smart Touchscreen Automation Panel" },
  { src: "service/DA2.webp", alt: "Entrance gate of a modern smart villa", title: "Smart Villa Entrance" },
];

export default function DoorAutomationSection() {
  return (
    <AutomationMosaicSection
      title="Door Automation"
      description="Manage Access to your space from anywhere with Smart Door Automation."
      types={types}
      features={features}
      suitableText="Suitable for Homes, Offices, and Controlled-Entry Commercial properties."
      images={images}
      imagePosition="right"
      prefix="door"
      serviceName="Door Automation"
      reelUrl="https://www.instagram.com/reel/DN-RMfTkqCx/"
      reelTitles={["Watch Door Automation Reel on Instagram"]}
    />
  );
}

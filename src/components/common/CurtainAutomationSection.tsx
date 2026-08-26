import AutomationMosaicSection from "./AutomationMosaicSection";

const types = [
  "Automatic Open and Close",
  "Time-Based and Sunlight-Based control",
];

const features = ["Privacy Control", "One-Touch and Voice Commands"];

export default function CurtainAutomationSection() {
  return (
    <AutomationMosaicSection
      title="Curtain Automation"
      description="Automate Curtains and Blinds for Comfort, Privacy, and Energy Efficiency."
      types={types}
      features={features}
      suitableText="Perfect for Bedrooms, Living rooms, Conference rooms, and Large Window areas."
      imagePosition="left"
      prefix="curt"
      serviceName="Curtain Automation"
      reels={[
        "https://www.instagram.com/reel/DZpb-JNSo5Y/",
      ]}
      reelTitles={[
        "Watch Curtain Automation Reel on Instagram",
      ]}
    />
  );
}

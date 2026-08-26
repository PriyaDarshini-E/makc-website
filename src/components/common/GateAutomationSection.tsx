import AutomationMosaicSection from "./AutomationMosaicSection";

const types = [
  "Sliding Gate Automation",
  "Rolling / Shutter Gate Automation",
  "Swing Gate Automation",
];

const features = [
  "Remote & App-Based Access",
  "Smooth and Silent Operation",
  "Safety Sensors & Obstruction Detection",
];

export default function GateAutomationSection() {
  return (
    <AutomationMosaicSection
      title="Gate Automation"
      description="Automate your Gates and Shutters for Security, Safety, and Convenience."
      types={types}
      features={features}
      suitableText="Perfect for Residential Gates, Commercial Shutters, Security Checkpoints, and Private Driveways."
      imagePosition="left"
      prefix="gate"
      serviceName="Gate Automation"
      reels={[
        "https://www.instagram.com/reel/DTp5xiDj82a/",
      ]}
      reelTitles={[
        "Watch Gate Automation Reel on Instagram",
      ]}
    />
  );
}
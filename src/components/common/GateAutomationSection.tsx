import AutomationMosaicSection from "./AutomationMosaicSection";

const types = [
  "Sliding Gate Automation",
  "Rolling / Shutter Gate Automation",
  "Swing Gate Automation",
];

const features = [
  "Remote & app-based access",
  "Smooth and silent operation",
  "Safety sensors & obstruction detection",
];

const images = [
  {
    src: "getAuto1.webp",
    alt: "Automated rolling shutter garage door layout",
    title: "Automatic Garage Door Automation",
  },
  { src: "service/GA1.webp", alt: "Automatic swing arm motors installed on driveway gates", title: "Automatic Swing Gate Automation" },
  { src: "service/GA2.webp", alt: "Automatic sliding gate automation system on a residential driveway", title: "Automatic Sliding Gate Automation" },
];

export default function GateAutomationSection() {
  return (
    <AutomationMosaicSection
      title="Gate Automation"
      description="Automate your gates and shutters for security, safety, and convenience."
      types={types}
      features={features}
      suitableText="Perfect for residential gates, commercial shutters, security checkpoints, and private driveways."
      images={images}
      imagePosition="left"
      prefix="gate"
      serviceName="Gate Automation"
    />
  );
}

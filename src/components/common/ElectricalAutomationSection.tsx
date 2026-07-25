import AutomationMosaicSection from "./AutomationMosaicSection";

const types = [
  "Smart switch boards",
  "Fan speed control",
  "Appliance automation",
  "RGB and mood lighting",
];

const features = [
  "Scheduling and load management",
  "Sensor-based lights",
  "Mood-Based Lighting control",
];

const images = [
  {
    src: "service/EA1.webp",
    alt: "Smart home automation control system with touch panel and connected devices",
    title: "Smart Home Automation System",
  },
  { src: "service/EA2.webp", alt: "Smart switches and panels setup", title: "Home Automation Control Panel" },
  { src: "smarter_way_bg.webp", alt: "Modern living room lighting scene", title: "Smart Living Room Automation" },
];

export default function ElectricalAutomationSection() {
  return (
    <AutomationMosaicSection
      title="Electrical Automation"
      description="Control your lighting and electrical systems with ease using touch panels, mobile apps, or voice commands."
      types={types}
      features={features}
      suitableText="Works for new homes, retrofit automation projects, and small commercial spaces such as offices and studios."
      images={images}
      imagePosition="right"
      prefix="elec"
      serviceName="Electrical Automation"
    />
  );
}

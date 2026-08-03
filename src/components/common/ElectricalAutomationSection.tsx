import AutomationMosaicSection from "./AutomationMosaicSection";

const types = [
  "Smart Switch Boards",
  "Fan Speed Control",
  "Appliance Automation",
  "RGB and Mood Lighting",
];

const features = [
  "Scheduling and Load Management",
  "Sensor-Based Lights",
  "Mood-Based Lighting Control",
];

const images = [
  {
    src: "electric automation.webp",
    alt: "Smart home automation control system with touch panel and connected devices",
    title: "Smart Home Automation System",
  },
  { src: "service/EA1.webp", alt: "Smart switches and panels setup", title: "Home Automation Control Panel" },
  { src: "service/EA2.webp", alt: "Modern living room lighting scene", title: "Smart Living Room Automation" },
];

export default function ElectricalAutomationSection() {
  return (
    <AutomationMosaicSection
      title="Electrical Automation & Smart Switches"
      description="Control your Lighting and Electrical Systems with ease using Touch Panels, Mobile Apps, or Voice Commands."
      types={types}
      features={features}
      suitableText="Works for New Homes, Retrofit Automation Projects, and Commercial Spaces such as Offices and Studios."
      images={images}
      imagePosition="right"
      prefix="elec"
      serviceName="Electrical Automation"
      reelUrl="https://www.instagram.com/reel/DJB_6dCyJ6H/"
      reelTitles={["Watch Curtain Automation Reel 2 on Instagram"]}
    />
  );
}

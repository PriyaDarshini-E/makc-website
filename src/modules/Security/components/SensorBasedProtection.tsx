import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const checklist = [
  "Motion Detectors",
  "Door & Window Opening Sensors",
  "Glass Break Sensors",
  "Smoke, Temperature & Leakage Sensors",
];

const includesList = [
  "High-Volume Indoor & Outdoor Sirens",
  "Automatic Alerts during Intrusion or Emergencies",
  "Weather-Resistant and Reliable Devices",
];

const images = [
  { src: "sensor.webp", alt: "Commercial building equipped with an integrated smart safety and security sensor network", title: "Commercial Security System" },
  { src: "service/SB1.webp", alt: "Live CCTV surveillance feed displayed on a smartphone for remote monitoring", title: "Mobile CCTV Monitoring" },
  { src: "service/SB2.webp", alt: "Wireless smoke detector and alarm siren installed for smart fire safety", title: "Smart Smoke Detection System" },
];

export default function SensorBasedProtection() {
  return (
    <AutomationMosaicSection
      title="Sensor-Based Protection & Intrusion Security"
      description="Detect Security risks and Intruders before they turn into emergencies."
      types={checklist}
      features={includesList}
      suitableText="These Smart Sensors operate continuously and send Real-Time alerts for both Residential and Commercial environments."
      images={images}
      imagePosition="right"
      prefix="sbp"
      serviceName="Sensor-Based"
      reelUrl="https://instagram.com/reel/DSC30D1jZ1h/"
      reelTitles={["Watch Home Networking Solutions Reel on Instagram"]}
    />
  );
}

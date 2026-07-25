import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const checklist = [
  "Motion Detectors",
  "Door & Window Opening Sensors",
  "Glass Break Sensors",
  "Smoke, Temperature & Leakage Sensors",
];

const includesList = [
  "High-volume indoor & outdoor sirens",
  "Automatic alerts during intrusion or emergencies",
  "Weather-resistant and reliable devices",
];

const images = [
  { src: "service/SB1.webp", alt: "Live CCTV surveillance feed displayed on a smartphone for remote monitoring", title: "Mobile CCTV Monitoring" },
  { src: "service/SB2.webp", alt: "Wireless smoke detector and alarm siren installed for smart fire safety", title: "Smart Smoke Detection System" },
  { src: "project_commercial.webp", alt: "Commercial building equipped with an integrated smart safety and security sensor network", title: "Commercial Security System" },
];

export default function SensorBasedProtection() {
  return (
    <AutomationMosaicSection
      title="Sensor-Based Protection"
      description="Detect security risks before they turn into emergencies."
      types={checklist}
      features={includesList}
      suitableText="These smart sensors operate continuously and send real-time alerts for both residential and commercial environments."
      images={images}
      imagePosition="right"
      prefix="sbp"
      serviceName="Sensor-Based"
    />
  );
}

import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const checklist = [
  "HD Indoor & Outdoor CCTV cameras",
  "Night Vision monitoring",
  "Motion-Triggered recording",
  "Live and Recorded Access via Mobile app",
];

const images = [
  {
    src: "cam1.webp",
    alt: "Live CCTV surveillance feed displayed on a smartphone for remote monitoring",
    title: "Mobile CCTV Monitoring",
  },
  {
    src: "service/CC1.webp",
    alt: "Wall-mounted high-definition outdoor CCTV camera monitoring the property entrance",
    title: "Outdoor CCTV Security Camera",
  },
  {
    src: "service/CC2.webp",
    alt: "Smart dome surveillance camera installed on a modern stone wall for indoor security",
    title: "Smart Dome Security Camera",
  },
];

export default function CCTVMonitoringSection() {
  return (
    <AutomationMosaicSection
      title="Smart Security & Video Surveillance"
      description="24×7 Smart Surveillance and Intrusion Alerts for complete peace of mind."
      types={checklist}
      suitableText="Suitable for Homes, Offices, Retail Outlets, Warehouses, and Commercial Premises."
      images={images}
      imagePosition="left"
      prefix="cctv"
      serviceName="CCTV & Video"
      reelUrl="https://www.instagram.com/reel/DALj2GhS-kV/"
      reelTitles={["Watch Home Networking Installation Reel on Instagram"]}
    />
  );
}

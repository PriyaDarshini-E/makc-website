import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const checklist = [
  "HD indoor & outdoor CCTV cameras",
  "Night vision monitoring",
  "Motion-triggered recording",
  "Live and recorded access via mobile app",
];

const images = [
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
  {
    src: "service_security.webp",
    alt: "Live CCTV surveillance feed displayed on a smartphone for remote monitoring",
    title: "Mobile CCTV Monitoring",
  },
];

export default function CCTVMonitoringSection() {
  return (
    <AutomationMosaicSection
      title="CCTV & Video Monitoring"
      description="24×7 smart surveillance for complete peace of mind."
      types={checklist}
      suitableText="Suitable for homes, offices, retail outlets, warehouses, and commercial premises."
      images={images}
      imagePosition="left"
      prefix="cctv"
      serviceName="CCTV & Video"
    />
  );
}

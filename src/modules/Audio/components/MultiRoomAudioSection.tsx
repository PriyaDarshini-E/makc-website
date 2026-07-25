import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const types = [
  "In-ceiling architectural speakers",
  "Outdoor garden & patio speakers",
  "Bookshelf & soundbar zone controls",
];

const features = [
  "Sync audio across all zones for party mode",
  "Stream different playlists in different rooms",
  "Integration with Spotify, Apple Music, and AirPlay 2",
];

const images = [
  {
    src: "service_theatre.webp",
    alt: "High-performance home theatre speakers and immersive surround sound setup",
    title: "Home Theatre Audio System",
  },
  { src: "service_automation.webp", alt: "Smart touchscreen control panel for home automation and entertainment", title: "Smart Automation Control Panel" },
  { src: "project_villas.webp", alt: "Luxury villa living room with integrated multi-room audio entertainment system", title: "Multi-Room Audio System" },
];

export default function MultiRoomAudioSection() {
  return (
    <AutomationMosaicSection
      title="Multi-Room Audio"
      description="Stream high-fidelity music synchronously or independently across different rooms in your house."
      types={types}
      features={features}
      suitableText="Perfect for entertaining guests, family gatherings, or setting independent relaxing tunes in bedrooms and living spaces."
      images={images}
      imagePosition="left"
      prefix="mra"
      serviceName="Multi-Room Audio"
    />
  );
}

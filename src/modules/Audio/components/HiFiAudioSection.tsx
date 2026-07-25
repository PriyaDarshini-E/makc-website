import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const types = [
  "Invisible in-wall speakers",
  "Sleek bezel-less ceiling speakers",
  "High-fidelity stereo listening rooms",
];

const features = [
  "Zero clutter — zero visible cables",
  "Color-matched grilles to blend into walls",
  "Audiophile-grade sound quality",
];

const images = [
  {
    src: "why_choose_us.webp",
    alt: "Smart speaker system seamlessly integrated into a modern interior design",
    title: "Smart Speaker Integration",
  },
  { src: "service_automation.webp", alt: "Smart touchscreen panel for controlling home automation and media systems", title: "Home Automation Touch Panel" },
  { src: "project_apartments.webp", alt: "Modern apartment living room featuring an immersive home audio setup", title: "Apartment Home Audio System" },
];

export default function HiFiAudioSection() {
  return (
    <AutomationMosaicSection
      title="Hi-Fi Architectural Audio"
      description="Blend powerful sound with your home interior using invisible architectural speakers."
      types={types}
      features={features}
      suitableText="Perfect for premium bedrooms, main living rooms, dedicated listening dens, and luxury villas."
      images={images}
      imagePosition="right"
      prefix="hifi"
      serviceName="Hi-Fi Architectural Audio"
    />
  );
}

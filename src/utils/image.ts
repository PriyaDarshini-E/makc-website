import serviceAutomation from "@/assets/images/home_v2/service_automation.webp";
import serviceAutomationAvif from "@/assets/images/home_v2/service_automation.avif";
import serviceEnergy from "@/assets/images/home_v2/service_energy.webp";
import serviceEnergyAvif from "@/assets/images/home_v2/service_energy.avif";
import serviceLighting from "@/assets/images/home_v2/service_lighting.webp";
import serviceLightingAvif from "@/assets/images/home_v2/service_lighting.avif";
import serviceNetworking from "@/assets/images/home_v2/service_networking.webp";
import serviceNetworkingAvif from "@/assets/images/home_v2/service_networking.avif";
import serviceSecurity from "@/assets/images/home_v2/service_security.webp";
import serviceSecurityAvif from "@/assets/images/home_v2/service_security.avif";
import serviceTheatre from "@/assets/images/home_v2/service_theatre.webp";
import serviceTheatreAvif from "@/assets/images/home_v2/service_theatre.avif";
import contactVillaNight from "@/assets/images/home_v2/contact_villa_night.webp";
import contactVillaNightAvif from "@/assets/images/home_v2/contact_villa_night.avif";
import whyChooseUs from "@/assets/images/home_v2/why_choose_us.webp";
import projectApartments from "@/assets/images/home_v2/project_apartments.webp";
import projectCommercial from "@/assets/images/home_v2/project_commercial.webp";
import projectFarmhouses from "@/assets/images/home_v2/project_farmhouses.webp";
import projectPenthouses from "@/assets/images/home_v2/project_penthouses.webp";
import projectVillas from "@/assets/images/home_v2/project_villas.webp";
import smarterWayBg from "@/assets/images/home_v2/smarter_way_bg.webp";
import smarterWayBgAvif from "@/assets/images/home_v2/smarter_way_bg.avif";

const REMOTE_IMAGE_BASE =
  "https://agsdemo.in/macapi/public/assets/images/web_images";

const LOCAL_IMAGES: Record<string, string> = {
  "hero_bg.webp": "/images/hero_bg.webp",
  "hero_bg.avif": "/images/hero_bg.avif",
  "service_automation.webp": serviceAutomation,
  "service_automation.avif": serviceAutomationAvif,
  "service_energy.webp": serviceEnergy,
  "service_energy.avif": serviceEnergyAvif,
  "service_lighting.webp": serviceLighting,
  "service_lighting.avif": serviceLightingAvif,
  "service_networking.webp": serviceNetworking,
  "service_networking.avif": serviceNetworkingAvif,
  "service_security.webp": serviceSecurity,
  "service_security.avif": serviceSecurityAvif,
  "service_theatre.webp": serviceTheatre,
  "service_theatre.avif": serviceTheatreAvif,
  "contact_villa_night.webp": contactVillaNight,
  "contact_villa_night.avif": contactVillaNightAvif,
  "why_choose_us.webp": whyChooseUs,
  "project_apartments.webp": projectApartments,
  "project_commercial.webp": projectCommercial,
  "project_farmhouses.webp": projectFarmhouses,
  "project_penthouses.webp": projectPenthouses,
  "project_villas.webp": projectVillas,
  "smarter_way_bg.webp": smarterWayBg,
  "smarter_way_bg.avif": smarterWayBgAvif,
  "MAKc-Logo.svg": "/icons/MAKc-Logo.svg",
  "MAKc-Logo-white.webp": "/icons/MAKc-Logo-white-360.webp",
};

export const getImageUrl = (filename: string) => {
  if (!filename) return "";

  if (filename.startsWith("http://") || filename.startsWith("https://")) {
    return filename;
  }

  // Strip any accidental folder paths that might be passed in
  const baseName = filename.split("/").pop() || filename;

  if (LOCAL_IMAGES[baseName]) {
    return LOCAL_IMAGES[baseName];
  }

  if (filename.includes("service/")) {
    const servicePath = filename.substring(filename.indexOf("service/"));
    return `${REMOTE_IMAGE_BASE}/${servicePath}`;
  }

  return `${REMOTE_IMAGE_BASE}/${baseName}`;
};

export const getResponsiveHomeImageUrl = (filename: string, width: 480 | 768) => {
  const baseName = filename.split("/").pop() || filename;
  const name = baseName.replace(/\.(avif|webp)$/i, "");

  // Only use responsive paths for services and projects (hero_bg responsive files were deleted in favor of the high-quality source)
  if (LOCAL_IMAGES[baseName] && /^(service_|project_)/.test(name)) {
    return `/images/home_v2/responsive/${name}-${width}.avif`;
  }

  return getImageUrl(filename);
};

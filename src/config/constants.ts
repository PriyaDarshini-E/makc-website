export const API_BASE_URL = 'https://makcautomations.com/crmapi/public/api';
export const IMAGE_BASE_URL = 'https://makcautomations.com/crmapi/public/assets/images/web_images';

// Locally vendored images (public/images) — same-origin, cacheable, no remote TTFB
export const LOCAL_IMAGE_BASE = '/images';

export const COMPANY_INFO = {
  name: "MAKc Automations",
  legalName: "MAKc Automation & Solutions LLP",
  alternateNames: [
    "MAKc Automations",
    "MAK Automation",
    "MAKc Automation and Solutions",
    "MAKc Automation & Solutions",
  ],
  tagline: "Crafting intelligent living experiences through innovative automation, seamless design, and world-class technology.",
  siteUrl: "https://makcautomations.com",
  email: "info@makcautomations.com",
  
  // Phone numbers categorized by function
  phones: {
    primary: {
      number: "+91-8197783287",
      display: "+91 81977 83287",
      digits: "+918197783287",
      raw: "8197783287",
      label: "Direct Sales & Inquiries",
    },
    support: {
      number: "+91-9324226077",
      display: "+91 93242 26077",
      digits: "+919324226077",
      raw: "9324226077",
      label: "Customer Support & Office",
    },
  },

  // WhatsApp
  whatsapp: {
    number: "+91 81977 83287",
    digits: "918197783287",
    url: "https://wa.me/918197783287?text=Hi%20MAKc%20Team,%20I'm%20interested%20in%20your%20services!",
  },

  // Address
  address: {
    street: "141/6, 4th Main, 12th Cross Rd, BEML Layout, Brookefield",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560066",
    country: "India",
    countryCode: "IN",
    cityState: "Bengaluru, Karnataka",
    full: "141/6, 4th Main, 12th Cross Rd, BEML Layout, Brookefield, Bengaluru, Karnataka 560066",
  },

  // Social Links
  socials: {
    instagram: "https://www.instagram.com/mak_automation/",
    facebook: "https://www.facebook.com/makcautomation",
    linkedin: "https://www.linkedin.com/company/makc-automations/",
    youtube: "https://www.youtube.com/@MAKcAutomation01",
    googleReviews: "https://www.google.com/search?q=MAKc+Automation+and+Solutions+LLP+reviews",
  },

  // Logos
  logo: {
    svg: "/icons/MAKc-Logo.svg",
    whiteWebp: "https://makcautomations.com/icons/MAKc-Logo-white.webp",
  },
} as const;

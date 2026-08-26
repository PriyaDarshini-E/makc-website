import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

// Import SEO data
const seoDataPath = path.join(rootDir, "src", "config", "seoData.ts");
const seoDataContent = fs.readFileSync(seoDataPath, "utf-8");

// Fallback/direct map if TypeScript execution isn't used directly
const SITE_URL = "https://makcautomations.com";
const BRAND_NAME = "MAKc Automations";
const LEGAL_NAME = "MAKc Automation & Solutions LLP";
const DEFAULT_OG_IMAGE = `${SITE_URL}/icons/MAKc-Logo-white.webp`;

const ORGANIZATION_SCHEMA = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": BRAND_NAME,
  "legalName": LEGAL_NAME,
  "alternateName": [
    "MAKc Automations",
    "MAK Automation",
    "MAKc Automation and Solutions",
    "MAKc Automation & Solutions"
  ],
  "url": `${SITE_URL}/`,
  "logo": {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    "url": `${SITE_URL}/icons/MAKc-Logo-white.webp`,
    "caption": "MAKc Automations Logo"
  },
  "email": "info@makcautomations.com",
  "telephone": "+91-8197783287",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-8197783287",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Kannada"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-9324226077",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Kannada"]
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "141/6, 4th Main, 12th Cross Rd, BEML Layout, Brookefield",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560066",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.instagram.com/mak_automation/",
    "https://www.facebook.com/makcautomation",
    "https://www.linkedin.com/company/makc-automations/",
    "https://www.youtube.com/@MAKcAutomation01",
    "https://www.google.com/search?q=MAKc+Automation+and+Solutions+LLP+reviews"
  ]
};

const WEBSITE_SCHEMA = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": `${SITE_URL}/`,
  "name": BRAND_NAME,
  "publisher": {
    "@id": `${SITE_URL}/#organization`
  }
};

const MASTER_META_KEYWORDS =
  "home automation company in bangalore, best home automation company in bangalore, smart home automation company bangalore, smart home company bangalore, home automation companies in bangalore, smart home companies in bangalore, home automation bangalore, smart home automation bangalore, smart home bangalore, smart home solutions bangalore, home automation solutions bangalore, home automation services bangalore, smart home services bangalore, home automation systems bangalore, smart home automation systems bangalore, smart home system bangalore, smart home technology bangalore, home automation installation bangalore, smart home installation bangalore, home automation installer bangalore, smart home installer bangalore, home automation installers bangalore, smart home installers bangalore, home automation installation companies bangalore, smart home setup bangalore, smart home experts bangalore, smart home specialists bangalore, smart home automation services, smart home automation solutions, connected home automation, connected home solutions, intelligent home automation, residential smart home, home automation consultation, home automation design, home automation maintenance, smart lighting bangalore, smart lighting solutions bangalore, smart lighting automation bangalore, home lighting automation bangalore, lighting automation bangalore, lighting control bangalore, lighting control systems, smart lighting installation bangalore, smart led lighting bangalore, smart lights for home bangalore";

const ROUTES = {
  "/": {
    title: "Smart Home Automation Company in Bangalore | MAKc Automations",
    description: "MAKc Automations is a leading smart home automation company in Bangalore providing luxury touch control, smart lighting, security systems, home audio & networking solutions.",
    keywords: MASTER_META_KEYWORDS,
    canonicalUrl: `${SITE_URL}/`,
    ogImage: DEFAULT_OG_IMAGE,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        "url": `${SITE_URL}/`,
        "name": "Smart Home Automation Company in Bangalore | MAKc Automations",
        "description": "MAKc Automations provides high-end smart home automation, lighting, security, networking and audio solutions in Bangalore.",
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/#organization` },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "@id": `${SITE_URL}/#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${SITE_URL}/`
            }
          ]
        }
      }
    ]
  },
  "/automation": {
    title: "Smart Home Automation Services in Bangalore | MAKc Automations",
    description: "MAKc Automations delivers complete smart home automation services in Bangalore including touch panel controls, gate, curtain & electrical automation.",
    keywords: "smart home automation services, home automation company in bangalore, home automation bangalore, curtain automation, gate automation, electrical automation bangalore",
    canonicalUrl: `${SITE_URL}/automation`,
    ogImage: DEFAULT_OG_IMAGE,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/automation#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Automation", "item": `${SITE_URL}/automation` }
        ]
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/automation#service`,
        "name": "Smart Home Automation Services",
        "serviceType": "Home Automation",
        "description": "Whole-home automation covering app and voice control (Alexa, Google Assistant, Apple HomeKit), curtain automation, gate automation, electrical automation, and centralized touch panels.",
        "url": `${SITE_URL}/automation`,
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": {
          "@type": "City",
          "name": "Bengaluru",
          "sameAs": "https://en.wikipedia.org/wiki/Bangalore"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/automation#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What distinguishes Smart Home Devices from regular devices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Smart home devices carry internal processors, sensors, and wireless radios (Wi-Fi, Bluetooth, or Zigbee). They capture data, schedule events, and connect with other household units all manageable remotely via smartphone or voice. Regular devices need manual switches and have no network awareness."
            }
          },
          {
            "@type": "Question",
            "name": "Can I integrate smart devices with voice assistants?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All our systems are engineered for full cross-platform compatibility seamlessly integrating with Apple Siri (HomeKit), Amazon Alexa, and Google Assistant for hands-free control."
            }
          },
          {
            "@type": "Question",
            "name": "How do I set up and control my smart devices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MAKc's certified field engineers handle all configuration and network setup. Once installed, you control everything via our mobile app, wall-mounted touch panels, or voice integration."
            }
          }
        ]
      }
    ]
  },
  "/security": {
    title: "Smart Home Security Systems in Bangalore | MAKc Automations",
    description: "Advanced smart home security systems in Bangalore by MAKc Automations: AI CCTV surveillance, biometric digital door locks, motion & environmental leak detectors.",
    keywords: "smart home security systems, home security system bangalore, cctv surveillance, digital door locks bangalore, motion sensor alarm",
    canonicalUrl: `${SITE_URL}/security`,
    ogImage: DEFAULT_OG_IMAGE,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/security#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Security", "item": `${SITE_URL}/security` }
        ]
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/security#service`,
        "name": "Smart Home Security System Installation",
        "serviceType": "Home Security Automation",
        "description": "Comprehensive smart home security systems including 24/7 AI CCTV surveillance, biometric & digital door locks, motion detection, smoke/gas/water leak detectors, and smartphone alarm monitoring.",
        "url": `${SITE_URL}/security`,
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": {
          "@type": "City",
          "name": "Bengaluru",
          "sameAs": "https://en.wikipedia.org/wiki/Bangalore"
        }
      }
    ]
  },
  "/lighting": {
    title: "Smart Lighting Solutions in Bangalore | MAKc Automations",
    description: "Transform your living space with intelligent lighting automation in Bangalore: scene-based lighting, dimming, circadian tuning, RGB mood controls, and automated outdoor landscape lighting.",
    keywords: "smart lighting bangalore, smart home lighting, circadian lighting system, rgb mood lighting, outdoor landscape lighting automation",
    canonicalUrl: `${SITE_URL}/lighting`,
    ogImage: DEFAULT_OG_IMAGE,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/lighting#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Lighting", "item": `${SITE_URL}/lighting` }
        ]
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/lighting#service`,
        "name": "Smart Lighting Automation",
        "serviceType": "Intelligent Lighting Automation",
        "description": "Architectural and smart LED lighting solutions including scene-based automation (Movie, Party, Relax), dimming and color tuning, dynamic RGB lighting, and automated outdoor landscape illumination.",
        "url": `${SITE_URL}/lighting`,
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": {
          "@type": "City",
          "name": "Bengaluru",
          "sameAs": "https://en.wikipedia.org/wiki/Bangalore"
        }
      }
    ]
  },
  "/networking": {
    title: "Home Networking Solutions in Bangalore | MAKc Automations",
    description: "MAKc Automations offers enterprise-grade home networking solutions in Bangalore, including mesh Wi-Fi systems, high-speed wired networks & seamless coverage for luxury villas.",
    keywords: "home networking solutions in bangalore, mesh wireless network, high speed home wifi, enterprise networking bangalore, structured cabling",
    canonicalUrl: `${SITE_URL}/networking`,
    ogImage: DEFAULT_OG_IMAGE,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/networking#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Networking", "item": `${SITE_URL}/networking` }
        ]
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/networking#service`,
        "name": "Home Networking Solutions",
        "serviceType": "Enterprise Home Networking",
        "description": "Commercial-grade mesh Wi-Fi network deployments, Cat6/Cat6A structured cabling, gigabit managed switches, and high-bandwidth infrastructure engineered for smart homes and multi-story luxury villas.",
        "url": `${SITE_URL}/networking`,
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": {
          "@type": "City",
          "name": "Bengaluru",
          "sameAs": "https://en.wikipedia.org/wiki/Bangalore"
        }
      }
    ]
  },
  "/audio": {
    title: "Home Audio Solutions in Bangalore | MAKc Automations",
    description: "High-performance multi-room audio, invisible architectural speakers, and smart sound controls for luxury residences in Bangalore by MAKc Automations.",
    keywords: "home audio solutions, multi room audio bangalore, architectural speakers, high fidelity sound, home theater audio bangalore",
    canonicalUrl: `${SITE_URL}/audio`,
    ogImage: DEFAULT_OG_IMAGE,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/audio#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Audio", "item": `${SITE_URL}/audio` }
        ]
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/audio#service`,
        "name": "Home Audio & Theater Solutions",
        "serviceType": "Multi-Room Audio and Home Theater Automation",
        "description": "Multi-room centralized audio distribution, invisible architectural in-wall and in-ceiling speaker installations, and custom Dolby Atmos home cinema theater surround sound calibration.",
        "url": `${SITE_URL}/audio`,
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": {
          "@type": "City",
          "name": "Bengaluru",
          "sameAs": "https://en.wikipedia.org/wiki/Bangalore"
        }
      }
    ]
  },
  "/about": {
    title: "About Us | MAKc Automations Bangalore",
    description: "Learn about MAKc Automations - Bangalore's premier smart home automation company providing custom lighting, security, networking and audio integration.",
    keywords: "about makc automations, home automation company in bangalore, smart home team, Abhay Kumar",
    canonicalUrl: `${SITE_URL}/about`,
    ogImage: DEFAULT_OG_IMAGE,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/about#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": `${SITE_URL}/about` }
        ]
      },
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about#webpage`,
        "url": `${SITE_URL}/about`,
        "name": "About Us | MAKc Automations Bangalore",
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "mainEntity": { "@id": `${SITE_URL}/#organization` }
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/about#abhay-kumar`,
        "name": "Abhay Kumar",
        "jobTitle": "Chief Executive Officer",
        "worksFor": { "@id": `${SITE_URL}/#organization` }
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/about#manan-abhay-kumar`,
        "name": "Manan Abhay Kumar",
        "jobTitle": "Chief Technical Officer",
        "worksFor": { "@id": `${SITE_URL}/#organization` }
      }
    ]
  },
  "/contact": {
    title: "Contact MAKc Automations | Smart Home Company in Bangalore",
    description: "Contact MAKc Automations in Bangalore for smart home automation, luxury lighting, security systems, and high-speed networking solutions. Call +91-8197783287.",
    keywords: "contact makc automations, smart home consultation bangalore, home automation quote bangalore",
    canonicalUrl: `${SITE_URL}/contact`,
    ogImage: DEFAULT_OG_IMAGE,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/contact#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": `${SITE_URL}/contact` }
        ]
      },
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact#webpage`,
        "url": `${SITE_URL}/contact`,
        "name": "Contact MAKc Automations | Smart Home Company in Bangalore",
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "mainEntity": { "@id": `${SITE_URL}/#organization` }
      }
    ]
  },
  "/why-us": {
    title: "Why Choose MAKc Automations | Smart Home Experts Bangalore",
    description: "Discover why homeowners choose MAKc Automations: custom smart home integration, premium materials, and a refined multi-phase installation process.",
    keywords: "why choose makc automations, home automation experts bangalore, smart home quality",
    canonicalUrl: `${SITE_URL}/why-us`,
    ogImage: DEFAULT_OG_IMAGE,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/why-us#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Why Us", "item": `${SITE_URL}/why-us` }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/why-us#webpage`,
        "url": `${SITE_URL}/why-us`,
        "name": "Why Choose MAKc Automations | Smart Home Experts Bangalore",
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/#organization` }
      }
    ]
  },
  "/blogs": {
    title: "Smart Home Insights & Journal | MAKc Automations Blog",
    description: "Explore the latest trends, technological advancements, and expert advice on building and securing a seamlessly integrated smart home ecosystem.",
    keywords: "smart home blog, home automation tips, smart lighting guides, home security advice",
    canonicalUrl: `${SITE_URL}/blogs`,
    ogImage: DEFAULT_OG_IMAGE,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/blogs#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Blogs", "item": `${SITE_URL}/blogs` }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/blogs#webpage`,
        "url": `${SITE_URL}/blogs`,
        "name": "Smart Home Insights & Journal | MAKc Automations",
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/#organization` },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "BlogPosting",
              "position": 1,
              "headline": "The Future of Smart Lighting: Beyond Just Bulbs",
              "author": { "@type": "Person", "name": "Elena Rodriguez" },
              "datePublished": "2026-06-12",
              "publisher": { "@id": `${SITE_URL}/#organization` }
            },
            {
              "@type": "BlogPosting",
              "position": 2,
              "headline": "Securing Your Connected Home: A Comprehensive Guide",
              "author": { "@type": "Person", "name": "David Chen" },
              "datePublished": "2026-05-28",
              "publisher": { "@id": `${SITE_URL}/#organization` }
            },
            {
              "@type": "BlogPosting",
              "position": 3,
              "headline": "Automating Your Morning Routine: Wake Up to Perfection",
              "author": { "@type": "Person", "name": "Sarah Jenkins" },
              "datePublished": "2026-05-15",
              "publisher": { "@id": `${SITE_URL}/#organization` }
            }
          ]
        }
      }
    ]
  },
  "/experience": {
    title: "Smart Home Experience Center in Bangalore | MAKc Automations",
    description: "Visit our Live Smart Home Experience Center in Brookefield, Bangalore. Experience next-generation automation, lighting, home theater audio and biometric security firsthand.",
    keywords: "smart home experience center bangalore, smart home showroom bangalore, home automation demo",
    canonicalUrl: `${SITE_URL}/experience`,
    ogImage: DEFAULT_OG_IMAGE,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/experience#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Experience Center", "item": `${SITE_URL}/experience` }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/experience#localbusiness`,
        "name": "MAKc Automations - Smart Experience Center",
        "url": `${SITE_URL}/experience`,
        "parentOrganization": { "@id": `${SITE_URL}/#organization` },
        "image": `${SITE_URL}/icons/MAKc-Logo-white.webp`,
        "telephone": "+91-8197783287",
        "email": "info@makcautomations.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "141/6, 4th Main, 12th Cross Rd, BEML Layout, Brookefield",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560066",
          "addressCountry": "IN"
        },
        "priceRange": "$$$$"
      }
    ]
  },
  "/service": {
    title: "Our Smart Home Services | MAKc Automations Bangalore",
    description: "Explore the comprehensive range of smart home automation, security, lighting, networking and audio services offered by MAKc Automations Bangalore.",
    keywords: "smart home services bangalore, home automation services list",
    canonicalUrl: `${SITE_URL}/service`,
    ogImage: DEFAULT_OG_IMAGE,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/service#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/service` }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/service#webpage`,
        "url": `${SITE_URL}/service`,
        "name": "Our Smart Home Services | MAKc Automations Bangalore",
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/#organization` }
      }
    ]
  }
};

// Blog post routes — generated from src/modules/Blogs/data/mockBlogs.ts
const BLOG_POSTS = [
  {
    slug: "the-future-of-smart-lighting-beyond-just-bulbs",
    title: "The Future of Smart Lighting: Beyond Just Bulbs",
    excerpt: "Discover how intelligent lighting systems are evolving to enhance mood, improve sleep cycles, and drastically reduce energy consumption in modern homes.",
    author: "Elena Rodriguez",
    date: "2026-06-12",
    category: "Lighting",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
    tags: ["Smart Lighting", "Circadian", "Energy Saving", "Wellness"]
  },
  {
    slug: "securing-your-connected-home-a-comprehensive-guide",
    title: "Securing Your Connected Home: A Comprehensive Guide",
    excerpt: "With the rise of IoT devices, securing your home network is more critical than ever. Learn the top strategies to keep your smart home safe from cyber threats.",
    author: "David Chen",
    date: "2026-05-28",
    category: "Security",
    imageUrl: "https://images.unsplash.com/photo-1558002038-bf1dfeb33965?q=80&w=2070&auto=format&fit=crop",
    tags: ["Cybersecurity", "CCTV", "Biometric Locks", "Network Security"]
  },
  {
    slug: "automating-your-morning-routine-wake-up-to-perfection",
    title: "Automating Your Morning Routine: Wake Up to Perfection",
    excerpt: "Imagine your house waking up with you. From automated blinds to the perfect brew of coffee waiting for you, see how automation can transform your mornings.",
    author: "Sarah Jenkins",
    date: "2026-05-15",
    category: "Automation",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    tags: ["Routines", "Blinds", "Climate", "Coffee"]
  },
  {
    slug: "building-a-robust-home-network-for-seamless-streaming",
    title: "Building a Robust Home Network for Seamless Streaming",
    excerpt: "Tired of buffering? Learn how to set up a commercial-grade home Wi-Fi network that handles 4K streaming, gaming, and smart devices without breaking a sweat.",
    author: "Michael Chang",
    date: "2026-04-02",
    category: "Networking",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    tags: ["Mesh Wi-Fi", "Cabling", "Gaming", "Streaming"]
  },
  {
    slug: "voice-control-vs-app-control-finding-your-perfect-balance",
    title: "Voice Control vs. App Control: Finding Your Perfect Balance",
    excerpt: "While voice assistants are convenient, dedicated apps offer granular control. We explore the pros and cons of both and how to integrate them effectively.",
    author: "Elena Rodriguez",
    date: "2026-03-18",
    category: "Automation",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    tags: ["Voice Assistants", "UX", "App Control", "Routines"]
  },
  {
    slug: "aesthetics-meets-technology-invisible-speakers-and-hidden-tech",
    title: "Aesthetics Meets Technology: Invisible Speakers and Hidden Tech",
    excerpt: "You don't have to sacrifice interior design for high tech. Explore the world of invisible architectural speakers and hidden smart home displays.",
    author: "James Wilson",
    date: "2026-02-24",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    tags: ["Invisible Speakers", "Interior Design", "Home Theater", "Discreet Tech"]
  }
];

for (const post of BLOG_POSTS) {
  const routePath = `/blogs/${post.slug}`;
  ROUTES[routePath] = {
    title: `${post.title} | ${BRAND_NAME}`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    canonicalUrl: `${SITE_URL}${routePath}`,
    ogImage: post.imageUrl,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BlogPosting",
        "@id": `${SITE_URL}${routePath}#article`,
        "headline": post.title,
        "description": post.excerpt,
        "image": post.imageUrl,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": { "@type": "Person", "name": post.author },
        "publisher": {
          "@type": "Organization",
          "name": BRAND_NAME,
          "url": SITE_URL,
          "logo": { "@type": "ImageObject", "url": `${SITE_URL}/icons/MAKc-Logo-white.webp` }
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}${routePath}` },
        "articleSection": post.category,
        "keywords": post.tags.join(", ")
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${routePath}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blogs` },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": `${SITE_URL}${routePath}` }
        ]
      }
    ]
  };
}

function prerender() {
  const templatePath = path.join(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("Error: dist/index.html not found. Run vite build first.");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, "utf-8");

  console.log("Pre-rendering static route HTML files with Schema & Metadata...");

  for (const [routePath, data] of Object.entries(ROUTES)) {
    let customizedHtml = baseHtml;

    // 1. Replace Title
    customizedHtml = customizedHtml.replace(
      /<title>.*?<\/title>/i,
      `<title>${data.title}</title>`
    );

    // 2. Replace Description
    customizedHtml = customizedHtml.replace(
      /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="description" content="${data.description}" />`
    );

    // 3. Replace Keywords
    if (data.keywords) {
      customizedHtml = customizedHtml.replace(
        /<meta\s+name=["']keywords["']\s+content=["'].*?["']\s*\/?>/i,
        `<meta name="keywords" content="${data.keywords}" />`
      );
    }

    // 4. Replace Canonical URL
    customizedHtml = customizedHtml.replace(
      /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
      `<link rel="canonical" href="${data.canonicalUrl}" />`
    );

    // 5. Replace Open Graph Tags
    customizedHtml = customizedHtml.replace(
      /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:title" content="${data.title}" />`
    );
    customizedHtml = customizedHtml.replace(
      /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:description" content="${data.description}" />`
    );
    customizedHtml = customizedHtml.replace(
      /<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:url" content="${data.canonicalUrl}" />`
    );
    customizedHtml = customizedHtml.replace(
      /<meta\s+property=["']og:image["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:image" content="${data.ogImage || DEFAULT_OG_IMAGE}" />`
    );

    // 6. Replace Twitter Card Tags
    customizedHtml = customizedHtml.replace(
      /<meta\s+name=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="twitter:title" content="${data.title}" />`
    );
    customizedHtml = customizedHtml.replace(
      /<meta\s+name=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="twitter:description" content="${data.description}" />`
    );
    customizedHtml = customizedHtml.replace(
      /<meta\s+name=["']twitter:image["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="twitter:image" content="${data.ogImage || DEFAULT_OG_IMAGE}" />`
    );

    // 7. Inject JSON-LD Schema
    const jsonLdString = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": data.schemaGraph
    }, null, 2);

    customizedHtml = customizedHtml.replace(
      /<script\s+type=["']application\/ld\+json["']\s+id=["']route-jsonld["']>[\s\S]*?<\/script>/i,
      `<script type="application/ld+json" id="route-jsonld">\n${jsonLdString}\n    </script>`
    );

    // Determine destination
    if (routePath === "/") {
      fs.writeFileSync(templatePath, customizedHtml, "utf-8");
      console.log(`✓ Generated: dist/index.html (Canonical: ${data.canonicalUrl})`);
    } else {
      const routeDirName = routePath.replace(/^\//, "");
      const targetDir = path.join(distDir, routeDirName);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      const targetFilePath = path.join(targetDir, "index.html");
      fs.writeFileSync(targetFilePath, customizedHtml, "utf-8");
      console.log(`✓ Generated: dist/${routeDirName}/index.html (Canonical: ${data.canonicalUrl})`);
    }
  }

  console.log("All static route HTML files successfully pre-rendered with rich Schema & unique metadata!");
}

prerender();

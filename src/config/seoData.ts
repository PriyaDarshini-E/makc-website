import { COMPANY_INFO } from "./constants";

export interface RouteSEOData {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  robots?: string;
  ogType?: string;
  ogImage?: string;
  schemaGraph: any[];
}

export const SITE_URL = COMPANY_INFO.siteUrl;
export const BRAND_NAME = COMPANY_INFO.name;
export const LEGAL_NAME = COMPANY_INFO.legalName;
export const DEFAULT_OG_IMAGE = COMPANY_INFO.logo.whiteWebp;

// Shared Base Organization Schema
export const ORGANIZATION_SCHEMA = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": COMPANY_INFO.name,
  "legalName": COMPANY_INFO.legalName,
  "alternateName": [...COMPANY_INFO.alternateNames],
  "url": `${SITE_URL}/`,
  "logo": {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    "url": COMPANY_INFO.logo.whiteWebp,
    "caption": `${COMPANY_INFO.name} Logo`
  },
  "email": COMPANY_INFO.email,
  "telephone": COMPANY_INFO.phones.primary.number,
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": COMPANY_INFO.phones.primary.number,
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Kannada"]
    },
    {
      "@type": "ContactPoint",
      "telephone": COMPANY_INFO.phones.support.number,
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Kannada"]
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": COMPANY_INFO.address.street,
    "addressLocality": COMPANY_INFO.address.city,
    "addressRegion": COMPANY_INFO.address.state,
    "postalCode": COMPANY_INFO.address.pincode,
    "addressCountry": COMPANY_INFO.address.countryCode
  },
  "sameAs": [
    COMPANY_INFO.socials.instagram,
    COMPANY_INFO.socials.facebook,
    COMPANY_INFO.socials.linkedin,
    COMPANY_INFO.socials.youtube,
    COMPANY_INFO.socials.googleReviews
  ]
};

// Shared Base WebSite Schema
export const WEBSITE_SCHEMA = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": `${SITE_URL}/`,
  "name": BRAND_NAME,
  "publisher": {
    "@id": `${SITE_URL}/#organization`
  }
};

// Route SEO & Schema Registry
export const SEO_ROUTES: Record<string, RouteSEOData> = {
  "/": {
    title: "Smart Home Automation Company in Bangalore | MAKc Automations",
    description: "MAKc Automations is a leading smart home automation company in Bangalore providing luxury touch control, smart lighting, security systems, home audio & networking solutions.",
    keywords: "home automation company in bangalore, home automation bangalore, smart home automation, luxury home automation, smart lighting bangalore, security automation bangalore",
    canonicalUrl: `${SITE_URL}/`,
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    ogType: "website",
    ogImage: `${SITE_URL}/icons/MAKc-Logo-white.webp`,
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
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    ogType: "website",
    ogImage: `${SITE_URL}/icons/MAKc-Logo-white.webp`,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/automation#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Automation",
            "item": `${SITE_URL}/automation`
          }
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
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    ogType: "website",
    ogImage: `${SITE_URL}/icons/MAKc-Logo-white.webp`,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/security#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Security",
            "item": `${SITE_URL}/security`
          }
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
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    ogType: "website",
    ogImage: `${SITE_URL}/icons/MAKc-Logo-white.webp`,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/lighting#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Lighting",
            "item": `${SITE_URL}/lighting`
          }
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
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    ogType: "website",
    ogImage: `${SITE_URL}/icons/MAKc-Logo-white.webp`,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/networking#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Networking",
            "item": `${SITE_URL}/networking`
          }
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
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    ogType: "website",
    ogImage: `${SITE_URL}/icons/MAKc-Logo-white.webp`,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/audio#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Audio",
            "item": `${SITE_URL}/audio`
          }
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
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    ogType: "website",
    ogImage: `${SITE_URL}/icons/MAKc-Logo-white.webp`,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/about#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": `${SITE_URL}/about`
          }
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
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    ogType: "website",
    ogImage: `${SITE_URL}/icons/MAKc-Logo-white.webp`,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/contact#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": `${SITE_URL}/contact`
          }
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
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    ogType: "website",
    ogImage: `${SITE_URL}/icons/MAKc-Logo-white.webp`,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/why-us#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Why Us",
            "item": `${SITE_URL}/why-us`
          }
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
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    ogType: "website",
    ogImage: `${SITE_URL}/icons/MAKc-Logo-white.webp`,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/blogs#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blogs",
            "item": `${SITE_URL}/blogs`
          }
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
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    ogType: "website",
    ogImage: `${SITE_URL}/icons/MAKc-Logo-white.webp`,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/experience#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Experience Center",
            "item": `${SITE_URL}/experience`
          }
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
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    ogType: "website",
    ogImage: `${SITE_URL}/icons/MAKc-Logo-white.webp`,
    schemaGraph: [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/service#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": `${SITE_URL}/service`
          }
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

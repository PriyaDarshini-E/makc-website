import useSEO from "@/hooks/useSEO";
import { MapPin } from "lucide-react";
const bgImage = getImageUrl("contact_villa_night.webp");

import { ContactForm } from "../components/ContactForm";
import { ContactInfoChips } from "../components/ContactInfoChips";
import { SocialMediaBar } from "../components/SocialMediaBar";
import { LocationMap } from "../components/LocationMap";
import { getImageUrl } from "@/utils/image";


export default function ContactPage() {
  useSEO({
    title: "Contact MAKc Automations | Smart Home Company in Bangalore",
    description: "Contact MAKc Automations in Bangalore for smart home automation, luxury lighting, security systems, and high-speed networking solutions.",
    canonicalUrl: "https://makcautomations.com/contact",
    robots: "INDEX, FOLLOW",
  });

  return (
    <div
      className="pt-20 lg:pt-24 pb-12 min-h-screen bg-bg-main relative w-full overflow-hidden transition-colors duration-300"
      style={{
        backgroundImage:
          "radial-gradient(rgba(10, 132, 255, 0.04) 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* SaaS Ambient Glow Circles */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent-blue/8 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Header */}
        <div
          className="mb-8 lg:mb-10 reveal-on-scroll reveal-up"
          data-reveal-duration="0.8s"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-text-main tracking-tight leading-tight mb-3">
            Let's build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-blue-400 to-[#3ea6ff]">
              future of your home.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed">
            Whether you are ready to start a project or simply have a question,
            our smart living experts are here to help.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          <ContactForm />

          {/* Visual/Image Panel */}
          <div
            className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[250px] lg:min-h-full border border-border-main/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] group reveal-on-scroll reveal-right"
            data-reveal-duration="0.9s"
          >
            <img
              src={bgImage}
              alt="Luxury Villa Integration"
              title="Luxury Smart Villa Interior & Exterior Integration"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10" />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-9 h-9 rounded-lg bg-accent-blue/20 text-accent-blue flex items-center justify-center backdrop-blur-md border border-accent-blue/30">
                  <MapPin className="w-4.5 h-4.5" aria-hidden="true" />
                </div>
                <h4 className="text-white! text-xl font-serif font-bold drop-shadow-md">
                  Smart Experience Center
                </h4>
              </div>
              <p className="text-white/80! text-sm drop-shadow font-light border-accent-blue pl-4 ml-7.5">
                141/6, 4th Main, 12th Cross Rd, <br />
                BEML Layout, Brookefield, <br />
                Bengaluru, Karnataka 560066
              </p>
            </div>
          </div>

          {/* 4-card responsive grid layout: spans full width on md and lg */}
          <div className="md:col-span-2 lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <ContactInfoChips />
            <SocialMediaBar />
          </div>
        </div>

        <LocationMap />
      </div>
    </div>
  );
}

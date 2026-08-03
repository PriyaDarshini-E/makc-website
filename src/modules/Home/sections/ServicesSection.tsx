import { Sun, ShieldCheck, Volume2, Wifi, Zap, ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import StatsSectionV2 from "./StatsSection";

// New images paths from public/images
const imgAutomation = "/images/automation.avif";
const imgLighting = "/images/ligting.avif";
const imgSecurity = "/images/security.avif";
const imgNetworking = "/images/networking.avif";
const imgAudio = "/images/audio.avif";
const imgElectricals = "/images/electricals.avif";

// Custom icons matching luxury styles
function SmartHomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

export default function ServicesSection() {
  const services = [
    {
      id: "automation",
      icon: SmartHomeIcon,
      title: "Smart Home Automation",
      description: "One-touch control for your entire home.",
      bgImage: imgAutomation,
      avifImage: imgAutomation,
      avifImageMobile: imgAutomation,
      avifImageDesktop: imgAutomation,
      link: "/automation",
      linkTitle: "Smart Home Automation Services",
      imgTitle: "Smart Home Automation Solutions in Bangalore",
    },
    {
      id: "lighting",
      icon: Sun,
      title: "Smart Lighting",
      description: "Create moods with intelligent lighting scenes.",
      bgImage: imgLighting,
      avifImage: imgLighting,
      avifImageMobile: imgLighting,
      avifImageDesktop: imgLighting,
      link: "/lighting",
      linkTitle: "Smart Lighting Solutions",
      imgTitle: "Smart Lighting Installation Services",
    },
    {
      id: "security",
      icon: ShieldCheck,
      title: "Advanced Security",
      description:
        "AI-powered surveillance, smart locks and intrusion protection.",
      bgImage: imgSecurity,
      avifImage: imgSecurity,
      avifImageMobile: imgSecurity,
      avifImageDesktop: imgSecurity,
      link: "/security",
      linkTitle: "Smart Home Security Systems",
      imgTitle: "Advanced Smart Home Security Systems",
    },
    {
      id: "networking",
      icon: Wifi,
      title: "Networking",
      description: "Enterprise-grade WiFi designed for luxury villas.",
      bgImage: imgNetworking,
      avifImage: imgNetworking,
      avifImageMobile: imgNetworking,
      avifImageDesktop: imgNetworking,
      link: "/networking",
      linkTitle: "Home Networking Solutions",
      imgTitle: "Home Networking Solutions in Bangalore",
    },
    {
      id: "audio",
      icon: Volume2,
      title: "Home Audio",
      description: "Multi-room sound that fills every corner with clarity.",
      bgImage: imgAudio,
      avifImage: imgAudio,
      avifImageMobile: imgAudio,
      avifImageDesktop: imgAudio,
      link: "/audio",
      linkTitle: "Home Audio Solutions",
      imgTitle: "Premium Home Audio Installation",
    },
    {
      id: "electric",
      icon: Zap,
      title: "Home Electrical",
      description:
        "Intelligent power distribution, backups and energy monitoring.",
      bgImage: imgElectricals,
      avifImage: imgElectricals,
      avifImageMobile: imgElectricals,
      avifImageDesktop: imgElectricals,
      link: "/automation",
      linkTitle: "Smart Home Automation Services",
      imgTitle: "Smart Home Electrical Solutions",
    },
  ];

  return (
    <section
      id="solutions"
      className="relative w-full py-12 border-t border-border-main overflow-hidden"
    >
      <StatsSectionV2 />
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F7FA] to-[#EBEFF5] dark:from-[#07152D] dark:via-[#051022] dark:to-[#01050E] transition-colors duration-300 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(10,132,255,0.08)_0%,rgba(10,132,255,0.03)_35%,transparent_70%)] dark:bg-[radial-gradient(circle_at_25%_25%,rgba(32,120,255,0.32)_0%,rgba(12,65,190,0.18)_22%,rgba(6,25,60,0.08)_48%,transparent_72%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(10,132,255,0.04),transparent_70%)] dark:bg-[radial-gradient(circle_at_85%_75%,rgba(0,70,255,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 z-10">
        {/* Main Grid Layout: Intro Card + 3x2 Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 border border-border-main backdrop-blur-sm">
          {/* Left Column: Intro Section (Spans 4/12 cols) */}
          <div
            className="lg:col-span-4 flex flex-col justify-between p-8 sm:p-12 lg:p-14 bg-bg-main/40 dark:bg-bg-main/20 backdrop-blur-md border-b lg:border-b-0 lg:border-r border-border-main text-left reveal-on-scroll reveal-up"
            data-reveal-duration="0.8s"
          >
            <div className="flex flex-col">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-accent-blue uppercase">
                EXPERIENCE SMART LIVING
              </span>

              <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight leading-tight">
                Complete Smart  <br />
                
                <span className="font-serif italic font-normal text-text-main">
                 Home Automation Solutions
                </span>
              </h2>
            </div>

            <p className="mt-8 lg:mt-0 font-sans text-[13.2px] sm:text-[15.4px] lg:text-[17.6px] text-text-muted leading-relaxed">
              Every room should anticipate your needs. <br />
              Walk in. Lights welcome you. <br />
              Climate adjusts automatically. <br />
              Music follows you. <br />
              Security protects silently. <br />
              Your home becomes intelligent <br />
              without looking technological.
            </p>
          </div>

          {/* Right Column: 6 Services Grid (Spans 8/12 cols with clean border gap) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-border-main gap-[1px]">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  title={service.linkTitle}
                  id={service.id}
                  className="relative group min-h-[280px] flex flex-col justify-between items-start p-6 sm:p-8 bg-bg-main overflow-hidden cursor-pointer transition-all duration-300 hover:bg-bg-surface reveal-on-scroll reveal-up"
                  data-reveal-delay={`${index * 80}ms`}
                  data-reveal-duration="0.7s"
                >
                  {/* Card Background Image with Hover Zoom */}
                  <div className="absolute inset-0 z-0 group-hover:scale-105 transition-all duration-500">
                    <picture>
                      <source
                        media="(max-width: 640px)"
                        srcSet={service.avifImageMobile}
                        type="image/avif"
                      />
                      <source
                        srcSet={service.avifImageDesktop}
                        type="image/avif"
                      />
                      <img
                        src={service.bgImage}
                        alt={service.title}
                        title={service.imgTitle}
                        className="w-full h-full object-cover object-center filter transition-all duration-500"
                        width={1024}
                        height={1024}
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </picture>
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/80 to-transparent" />
                  </div>

                  <div className="relative z-10 w-full flex-1 flex flex-col justify-start">
                    {/* Card Top: Icon (Accent Blue) */}
                    <div className="text-left">
                      <div className="text-accent-blue group-hover:text-accent-blue/80 transition-all duration-300 shrink-0 flex items-center justify-start w-12 h-12">
                        <Icon className="h-10 w-10 stroke-[1.25]" />
                      </div>
                    </div>

                    {/* Card Body: Text info (Stacked right below icon) */}
                    <div className="text-left mt-4 flex flex-col justify-start w-full max-w-[210px]">
                      <h3 className="font-sans text-lg font-bold text-text-main group-hover:text-accent-blue transition-colors duration-300 max-w-[160px]">
                        {service.title}
                      </h3>
                      <p className="mt-3 font-sans text-xs sm:text-[13px] text-text-muted leading-relaxed font-normal group-hover:text-text-main transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom: View More Button */}
                  <div className="relative z-10 mt-6 flex items-center gap-1.5 text-xs font-bold tracking-wider text-accent-blue group-hover:text-accent-blue/80 transition-colors duration-300 uppercase">
                    <span>View More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

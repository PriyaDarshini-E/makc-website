import {
  Lightbulb,
  Thermometer,
  ShieldCheck,
  Play,
  Blinds,
} from "lucide-react";
import WaveButton from "@/components/common/WaveButton";
import { getImageUrl, getResponsiveHomeImageUrl } from "@/utils/image";

const heroBg = getImageUrl("hero_bg.webp");
const heroBgAvif = getResponsiveHomeImageUrl("hero_bg.avif", 768);
const heroBgAvifMobile = getResponsiveHomeImageUrl("hero_bg.avif", 480);

export default function HeroSectionV2() {
  const statusItems = [
    {
      icon: Lightbulb,
      label: "LIGHTS",
      value: "Living Room",
      status: "active",
    },
    {
      icon: Thermometer,
      label: "CLIMATE",
      value: "24°C",
      status: "active",
    },
    {
      icon: Blinds,
      label: "CURTAINS",
      value: "Open",
      status: "active",
    },
    {
      icon: ShieldCheck,
      label: "SECURITY",
      value: "Armed",
      status: "armed",
    },
    {
      icon: Play,
      label: "THEATRE",
      value: "Playing",
      status: "active",
    },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-bg-main flex items-center justify-between overflow-hidden py-24 sm:py-32 transition-colors duration-300 no-reveal"
    >
      {/* Background Image with Theme-aware Overlays */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 640px)" srcSet={heroBgAvifMobile} type="image/avif" />
          <source srcSet={heroBgAvif} type="image/avif" />
          <img
            src={heroBg}
            alt="Smart Home Automation Installation in Bangalore"
            title="Smart Home Automation Installation in Bangalore"
            className="w-full h-full object-cover object-center scale-105 transition-all duration-500 opacity-95 dark:opacity-85"
            width={1024}
            height={1024}
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
        </picture>
      </div>

      <div className="relative z-20 mx-auto max-w-8xl w-full px-4 sm:px-14 flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-12 sm:gap-16">
        {/* Hero Left Content */}
        <div className="flex-1 flex flex-col justify-center text-left max-w-2xl reveal-on-scroll reveal-left" data-reveal-duration="0.9s">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2.5 border border-white/20  backdrop-blur-md rounded-full px-3 py-1.5 select-none pointer-events-none">
              <img
                src="/images/iso-image.svg"
                alt="ISO Certified Logo"
                title="ISO Certified Home Automation Company"
                className="h-5.5 w-5.5 object-contain"
              />
              <span className="text-[11px] sm:text-xs font-sans font-medium tracking-wide !text-white leading-none">
                ISO <span className="text-[#00A551] font-semibold">2015</span> Certified Company
              </span>
            </div>
          </div>

          <h1 className="mt-4 sm:mt-6  text-4xl sm:text-5xl lg:text-6xl font-extrabold !text-white tracking-tight leading-[1.15]">
            Experience the <br />
            <span className=" italic font-normal text-gold-primary">
              Smart Living
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-base !text-white/80 font-body leading-relaxed max-w-lg">
            Experience a new standard of living with intelligent automation,
            luxury lighting, world-class security, and seamless connectivity—all
            designed exclusively for premium residences.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
            {/* CTA 1: Solid Gold */}
            <a
              href="#contact"
              title="Contact MAKc Automations"
              className="w-full sm:w-auto px-4 py-3.5 sm:px-8 sm:py-4 bg-[#006ed6] text-white! font-bold text-xs tracking-wide sm:tracking-[0.15em] uppercase hover:bg-[#005fba] transition-colors duration-300 rounded-none shadow-[0_4px_20px_rgba(10,132,255,0.35)] flex items-center justify-center gap-2 group text-center"
            >
              <span className="leading-snug">Book a Free Smart Home Consultation</span>
            </a>

            {/* CTA 2: Outline */}
            <WaveButton
              href="#solutions"
              title="View Smart Home Solutions"
              accentColor="var(--color-gold-primary)"
              foregroundColor="#fff"
              className="px-6 py-3.5 sm:px-8 sm:py-4 border border-gold-primary text-gold-primary font-bold text-[10px] sm:text-xs tracking-[0.15em] uppercase transition-all duration-300 rounded-none flex items-center gap-2 group"
            >
              EXPLORE SMART HOMES
              <span className="font-mono text-xs transition-transform duration-300 group-hover:translate-x-1">
                &gt;
              </span>
            </WaveButton>
          </div>
        </div>

        {/* Hero Right Sidebar (Status Dashboard) */}
        <div className="w-full max-w-[40%] shrink-0 flex flex-col justify-center items-start md:items-end">
          <div className="flex flex-col gap-8 sm:gap-10 transition-all duration-500 group pr-4 lg:pr-12">
            {statusItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-5 group/item reveal-on-scroll reveal-right"
                  data-reveal-delay={`${index * 100}ms`}
                  data-reveal-duration="0.7s"
                >
                  {/* Clean Icon on Left */}
                  <div className="text-gold-primary apple-border-shine rounded-full transition-all duration-300 shrink-0 flex items-center justify-center w-12 h-12">
                    <Icon className="h-8 w-8 stroke-[1.5]" />
                  </div>

                  {/* Text on Right */}
                  <div className="flex flex-col text-left">
                    <span className=" text-[11px] sm:text-xs font-bold tracking-[0.25em] !text-white/70 uppercase">
                      {item.label}
                    </span>
                    <span className=" text-sm sm:text-base !text-white font-semibold group-hover/item:text-gold-primary transition-colors duration-200 mt-1">
                      {item.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2.5">
        <span className=" text-[8px] font-bold tracking-[0.3em] !text-white/40 uppercase">
          SCROLL TO DISCOVER
        </span>
        <div className="w-[18px] h-[30px] border !border-white/30 rounded-full flex justify-center p-1.5 opacity-100">
          <div className="w-[4px] h-[6px] bg-gold-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

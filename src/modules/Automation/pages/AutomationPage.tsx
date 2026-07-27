import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  ArrowRight,
  // Info,
  CalendarClock,
  Fan,
  Layers,
  Lock,
  Sliders,
} from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

// Import custom UI components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import shared common components
// import OneTouchSection from "@/components/common/OneTouchSection";
import AutomationShowcase from "@/components/common/AutomationShowcase";
import CurtainAutomationSection from "@/components/common/CurtainAutomationSection";
import ElectricalAutomationSection from "@/components/common/ElectricalAutomationSection";
import GateAutomationSection from "@/components/common/GateAutomationSection";
import DoorAutomationSection from "@/components/common/DoorAutomationSection";

// Import images
const serviceLightingImg = getImageUrl("service_lighting.webp");

const projectVillasImg = getImageUrl("project_villas.webp");

import useSEO from "@/hooks/useSEO";
import { getImageUrl } from "@/utils/image";

export default function AutomationPage() {
  useSEO({
    title: "Smart Home Automation Services in Bangalore | MAKc Automations",
    description:
      "MAKc Automations delivers complete smart home automation services in Bangalore including touch panel controls, gate, curtain & electrical automation.",
    keywords:
      "smart home automation services, home automation company in bangalore, home automation bangalore, curtain automation, gate automation",
    canonicalUrl: "https://makcautomations.com/automation",
    robots:
      "INDEX, FOLLOW, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE",
  });

  const [activeFeature, setActiveFeature] = useState("scheduling");

  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
      });

      /* Badge slides down from above */
      tl.from(
        ".hero-badge",
        { y: -24, autoAlpha: 0, duration: 0.5, ease: "back.out(1.5)" },
        0.2,
      );

      /* Headline each line staggers up */
      tl.from(
        ".hero-heading",
        { y: 60, autoAlpha: 0, duration: 0.9, ease: "expo.out" },
        0.4,
      );

      /* Subtitle fades + rises */
      tl.from(".hero-subtitle", { y: 28, autoAlpha: 0 }, "-=0.55");

      /* Checklist items stagger */
      tl.from(
        ".hero-check",
        {
          x: -24,
          autoAlpha: 0,
          stagger: 0.12,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.45",
      );

      /* Breadcrumb fades in last */
      tl.from(".hero-breadcrumb", { autoAlpha: 0, duration: 0.4 }, "-=0.2");
    },
    { scope: heroRef },
  );

  // Mock video player states

  const features = [
    {
      id: "scheduling",
      title: "Scheduling",
      icon: CalendarClock,
      desc: "Shape your daily routine with precision. Schedule your devices to sync with your activities. Let your lights create the perfect ambiance, or let your thermostat manage the temperature, all on a set schedule.",
    },
    {
      id: "dimmer",
      title: "Smart Dimmer",
      icon: Sliders,
      desc: "Customize light intensity dynamically based on your mood or natural daylight. Set custom presets for dining, movie nights, or working hours to optimize focus and relaxation.",
    },
    {
      id: "lock",
      title: "Child Lock",
      icon: Lock,
      desc: "Safeguard your smart touch panels. Temporarily disable physical interface controls to prevent children from accidentally altering smart scenes or climate configurations.",
    },
    {
      id: "fan",
      title: "Fan Speed Control",
      icon: Fan,
      desc: "Multi-stage automated control for ceiling fans and climate fans. Synchronize motor speeds dynamically with humidity and ambient temperature sensors for absolute comfort.",
    },

    {
      id: "scenes",
      title: "Custom Scenes",
      icon: Layers,
      desc: "Create complex multi-device routines. A single tap on 'Good Night' can lock your doors, turn off all main zone lights, arm security sensors, and adjust thermostats to sleep settings.",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* FULL-WIDTH HERO SECTION */}
      <section
        ref={heroRef}
        className="dark relative min-h-[90vh] lg:min-h-screen w-full flex items-center justify-start bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${getImageUrl("automation_banner.webp")}')`,
        }}
      >
        {/* Dark overlay for contrast */}
        {/* <div className="absolute inset-0 bg-black/65" /> */}

        {/* Smooth transition gradient to blend into the next section */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-bg-main to-transparent pointer-events-none" /> */}

        {/* Hero content container */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20 flex flex-col justify-center min-h-[90vh] lg:min-h-screen">
          <div className="max-w-3xl space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="hero-badge text-[11px] sm:text-xs tracking-widest uppercase font-bold text-white/90 flex items-center gap-1.5">
              <span className="text-emerald-500 font-extrabold text-sm">
                #1
              </span>{" "}
              Choice for Home Automation
            </div>

            {/* Main Heading */}
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-sans tracking-tight text-white leading-[1.05]">
              Smart Home <br />
              Automation
            </h1>

            {/* Subtitle */}
            <div className="hero-subtitle max-w-2xl">
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Smart homes aren't about gadgets — they're about how you live.
                With almost a decade of experience and 700+ projects delivered
                across homes and select commercial spaces, here's what you can
                expect from us.
                <img
                  src={getImageUrl("star.webp")}
                  alt="Five-star rating icon representing premium home automation services"
                  title="5 Star Home Automation Quality"
                  className="w-6 h-6 inline-block ml-2 mb-1 select-none"
                />
              </p>
            </div>

            {/* Features check list */}
            <div className="space-y-4 pt-2">
              {[
                "Thoughtful design & planning",
                "Professional execution, installation & configuration",
                "Seamless delivery with reliable after-sales support",
              ].map((text, idx) => (
                <div key={idx} className="hero-check flex items-center gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-white shrink-0 shadow-md">
                    <svg
                      className="w-3.5 h-3.5 stroke-[3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-white/90 font-medium text-sm sm:text-base">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FULL WIDTH AUTOMATION SHOWCASE SECTION */}
      <AutomationShowcase accentColor="#00A551" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        {/* ── ELECTRICAL AUTOMATION SECTION ── */}
        <ElectricalAutomationSection />

        {/* ── GATE AUTOMATION SECTION ── */}
        <GateAutomationSection />

        {/* ── DOOR AUTOMATION SECTION ── */}
        <DoorAutomationSection />

        {/* ── CURTAIN AUTOMATION SECTION ── */}
        <CurtainAutomationSection />

        {/* CORE CONCEPTS SECTION */}

        {/* HOW SMART DEVICES OPERATE SECTION */}
        {/* <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            
            <div className="bg-accent-blue/5 border border-accent-blue/15 hover:border-accent-blue/35 hover:-translate-y-1 p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all duration-500 shadow-md hover:shadow-xl group">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-4 font-sans">How Smart Devices Operate?</h3>
                <p className="text-sm text-text-muted leading-relaxed font-medium">
                  Smart devices act as digital helpers, talking to a central hub or phone via wireless protocols like Wi-Fi, Zigbee, or Bluetooth. Equipped with internal sensors and processors, they collect ambient data, process it in real-time, and act instantly. Whether it's a thermostat auto-tuning your climate or a lock verifying your identity, it happens with zero friction.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border-main/40 flex items-center gap-2 text-xs font-bold text-accent-blue tracking-wider uppercase">
                <span>Local Edge Computing</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>

            <div className="bg-bg-surface border border-border-main hover:border-border-main/80 hover:-translate-y-1 p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all duration-500 shadow-md hover:shadow-xl group">
              <div>
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Info className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-4 font-sans">MAKc Automation Offerings</h3>
                <p className="text-sm text-text-muted leading-relaxed font-medium">
                  MAKc Automation delivers highly-scalable Smart Home Devices designed to unify security, climate, lighting, and everyday tasks. We focus on seamless protocol integrations to tie your entire layout together. Control your whole environment from a single responsive screen or with simple hands-free voice requests.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border-main/40 flex items-center gap-2 text-xs font-bold text-cyan-500 tracking-wider uppercase">
                <span>Multi-Protocol Integrations</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>

          </div>
        </section> */}
        <section className="mb-28">
          {/* Header no eyebrow, strong typographic contrast */}
          {/* <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-text-main leading-[1.1] tracking-tight max-w-sm">
              Do More with Our Smart Solutions
            </h2>
            <p className="text-text-muted text-sm leading-relaxed max-w-[28ch] sm:text-right">
              Where control meets customization every feature designed around how you actually live.
            </p>
          </div> */}

          {/* Bento grid 3-col, left spans 2 rows */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Left: tall image card no ghost border+shadow, image IS the card */}
            <div className="lg:row-span-2 relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-0 group">
              <img
                src={serviceLightingImg}
                alt="Industrial and Commercial Lighting Automation Solutions"
                title="Lighting Automation Services"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7">
                <span className="inline-block text-[11px] text-white/60 font-medium uppercase tracking-widest mb-3">
                  Live Scene
                </span>
                <h3 className="dark:text-white text-2xl text-white! font-bold leading-snug mb-2">
                  Personalized
                  <br />
                  Atmosphere
                </h3>
                <p className="text-white/95 text-sm leading-relaxed">
                  Dim lighting, adjust acoustics, and set the perfect thermostat
                  parameters automatically.
                </p>
              </div>
            </div>

            {/* Right top: Feature hub panel */}
            <div className="lg:col-span-2 bg-bg-surface border border-border-main/40 rounded-2xl p-7">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold text-text-main">
                  Feature Control Hub
                </h3>
                <span className="flex gap-1.5 items-center text-xs text-text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  Active
                </span>
              </div>

              {/* Tab pills tighter, cleaner */}
              <div className="flex flex-wrap gap-2 mb-6">
                {features.map((feat) => {
                  const isActive = activeFeature === feat.id;
                  const IconComponent = feat.icon;
                  return (
                    <button
                      key={feat.id}
                      onClick={() => setActiveFeature(feat.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-accent-blue text-white shadow-[0_2px_10px_rgba(10,132,255,0.25)]"
                          : "text-text-muted hover:text-text-main bg-bg-main border border-border-main/50 hover:border-border-main"
                      }`}
                    >
                      <IconComponent className="w-3.5 h-3.5 shrink-0" />
                      {feat.title}
                    </button>
                  );
                })}
              </div>

              {/* Active feature detail */}
              {features.map((feat) => {
                if (feat.id !== activeFeature) return null;
                const IconComponent = feat.icon;
                return (
                  <div
                    key={feat.id}
                    className="animate-in fade-in duration-200"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-bg-main border border-border-main/30">
                      <div className="w-9 h-9 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0">
                        <IconComponent className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-text-main mb-1">
                          {feat.title}
                        </h4>
                        <p className="text-sm text-text-muted leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right bottom: two side-by-side info cells */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {/* Stat plain surface, no gradient hero-metric */}
              <div className="bg-bg-surface border border-border-main/40 rounded-2xl p-6 flex flex-col justify-between">
                <span className="text-text-muted text-xs font-medium mb-4">
                  Experience
                </span>
                <div>
                  <p className="text-text-main text-4xl sm:text-5xl font-bold leading-none">
                    700
                    <span className="text-2xl font-semibold text-text-muted">
                      +
                    </span>
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    Projects delivered
                  </p>
                </div>
              </div>

              {/* CTA cell */}
              <div className="bg-accent-blue rounded-2xl p-6 flex flex-col justify-between">
                <span className="text-white/70 text-xs font-medium mb-4">
                  Ready to start?
                </span>
                <div>
                  <p className="text-white text-base font-bold leading-snug mb-4">
                    Build your custom automation layout
                  </p>
                  <Link
                    to="/contact"
                    title="Contact MAKc Automations"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white/90 hover:text-white transition-colors duration-150 group"
                  >
                    Get a Quote
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- SECTION 4 */}
        {/* <section className="mb-28">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2
              className="text-4xl sm:text-5xl font-bold text-text-main mb-4 leading-[1.1] tracking-tight"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              One Touch. Total Control.
            </h2>
            <p className="text-text-muted text-base leading-relaxed">
              MAKc smart home devices make your life easier, safer, and more
              enjoyable. Elevate every room, every routine.
            </p>
          </div>

         
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           
            <div className="divide-y divide-border-main/40">
              {oneTouchItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-5 py-6 group">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-105 ${item.iconColorClass}`}
                    >
                      <IconComponent className="w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-main mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

           
            <div className="flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] group">
                  <img
                  src={whyChooseUsImg}
                  alt="Smart switches and panels setup"
                  title="Home Automation Control Panel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-white text-lg font-bold leading-snug">
                    Blends Any Interior
                  </h3>
                  <p className="text-white/85 text-sm mt-1 leading-relaxed">
                    Customized to match your finishes and palette perfectly.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden aspect-square group">
                  <img
                    src={serviceLightingImg}
                    alt="Industrial and Commercial Lighting Automation Solutions"
                    title="Lighting Automation Services"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold leading-snug">
                    Seamless Control
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square group">
                  <img
                    src={projectVillasImg}
                    alt="Luxury smart villa exterior with automated lighting at entrance"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold leading-snug">
                    Luxurious Finish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* FAQ + CTA */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* FAQ left 3 cols */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-text-main mb-2 tracking-tight">
                Common Questions
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-8">
                Everything you need to know before getting started.
              </p>

              <div className="bg-bg-surface border border-border-main/30 rounded-2xl overflow-hidden divide-y divide-border-main/30">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1" className="border-0 px-6">
                    <AccordionTrigger className="text-sm font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                      What distinguishes Smart Home Devices from regular
                      devices?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                      Smart home devices carry internal processors, sensors, and
                      wireless radios (Wi-Fi, Bluetooth, or Zigbee). They
                      capture data, schedule events, and connect with other
                      household units all manageable remotely via smartphone or
                      voice. Regular devices need manual switches and have no
                      network awareness.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2" className="border-0 px-6">
                    <AccordionTrigger className="text-sm font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                      Can I integrate smart devices with voice assistants?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                      Yes. All our systems are engineered for full
                      cross-platform compatibility seamlessly integrating with
                      Apple Siri (HomeKit), Amazon Alexa, and Google Assistant
                      for hands-free control.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="faq-3"
                    className="border-0 border-b-0 px-6"
                  >
                    <AccordionTrigger className="text-sm font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                      How do I set up and control my smart devices?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                      MAKc's certified field engineers handle all configuration
                      and network setup. Once installed, you control everything
                      via our mobile app, wall-mounted touch panels, or voice
                      integration.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* CTA card right 2 cols */}
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={projectVillasImg}
                  alt="Smart luxury villa exterior"
                  title="Luxury Smart Villa Exterior"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/60" />
                <div className="relative z-10 p-8 flex flex-col min-h-[380px] justify-between">
                  <div>
                    <h3 className="text-white! text-2xl font-bold leading-tight mb-3">
                      Ready to automate your home?
                    </h3>
                    <p className="text-white/65! text-sm leading-relaxed">
                      Our experts design a custom plan tailored to your space,
                      lifestyle, and budget at no obligation.
                    </p>
                  </div>
                  <div className="space-y-3 mt-8">
                    <a
                      href="tel:+918197783287"
                      title="Call MAKc Automations at +91 99484 32444"
                      className="flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-accent-blue text-white text-sm font-bold hover:bg-accent-blue/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
                    >
                      Call Us Now
                    </a>
                    <a
                      href="mailto:info@makcautomations.com"
                      title="Email MAKc Automations"
                      className="flex items-center justify-center gap-2 h-11 w-full rounded-xl border border-white/25 text-white! text-sm font-medium hover:bg-white/8 transition-all duration-200"
                    >
                      Send an Email
                    </a>
                    <p className="text-center text-white/40 text-xs tracking-wider">
                      +91 99484 32444
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

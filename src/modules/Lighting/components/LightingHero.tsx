import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "@/utils/image";

export default function LightingHero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Stagger entrance matching Automation/Security/Lighting page hero animations
      tl.from(".hero-badge", { y: -20, autoAlpha: 0, duration: 0.6 })
        .from(".hero-heading", { y: 35, autoAlpha: 0, duration: 0.8 }, "-=0.45")
        .from(
          ".hero-subtitle",
          { y: 28, autoAlpha: 0, duration: 0.75 },
          "-=0.55",
        )
        .from(
          ".hero-check",
          { y: 20, autoAlpha: 0, stagger: 0.12, duration: 0.6 },
          "-=0.5",
        );
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="dark relative min-h-[90vh] lg:min-h-screen w-full flex items-center justify-start bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${getImageUrl("lighting_banner.webp")}')`,
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
            <span className="text-emerald-500 font-extrabold text-sm">#1</span>{" "}
            Choice for Home Automation
          </div>

          {/* Main Heading */}
          <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-sans tracking-tight text-white leading-[1.05]">
            Smart Lighting <br />
            Automation
          </h1>

          {/* Subtitle */}
          <div className="hero-subtitle max-w-2xl">
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Lighting automation isn't just about switching lights ON or OFF —
              it's about creating the right atmosphere, saving energy, and
              making everyday living effortless. With professionally designed
              smart lighting automation in Bangalore, MAKc Automation helps you
              control every light in your space with ease.
                <img
                 src={getImageUrl("star.webp")}
                 alt="Five-star rating icon representing premium smart lighting solutions"
                 title="5 Star Smart Lighting Quality"
                 aria-hidden="true"
                 className="w-6 h-6 inline-block ml-2 mb-1 select-none"
              />
            </p>
          </div>

          {/* Features check list */}
          <div className="space-y-4 pt-2">
            {[
              "Personalized mood scenes & automated dimming presets",
              "Circadian lighting adjustments for natural wellness",
              "Energy-efficient scheduling & eco-friendly settings",
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
  );
}

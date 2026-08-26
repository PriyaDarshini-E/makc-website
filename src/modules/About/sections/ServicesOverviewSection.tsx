import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getImageUrl } from "@/utils/image";

const services = [
  {
    title: "Home Automation",
    description:
      "Touch panels, voice control, scene-based living — lights, curtains, gates and appliances in one elegant interface.",
    image: getImageUrl("automation.avif"),
    href: "/automation",
  },
  {
    title: "Smart Lighting",
    description:
      "Scene-based, dimmable, circadian-tuned lighting that transforms the mood of every room while saving energy.",
    image: getImageUrl("ligting.avif"),
    href: "/lighting",
  },
  {
    title: "Security & Surveillance",
    description:
      "AI CCTV, biometric locks, motion and environmental sensors — protect every entry with 24/7 monitoring.",
    image: getImageUrl("security.avif"),
    href: "/security",
  },
  {
    title: "Networking",
    description:
      "Mesh Wi-Fi, structured cabling and managed switches engineered for villas, penthouses and farmhouses.",
    image: getImageUrl("networking.avif"),
    href: "/networking",
  },
  {
    title: "Home Audio",
    description:
      "Multi-room audio, invisible architectural speakers and Dolby Atmos home theaters for cinema-grade sound.",
    image: getImageUrl("audio.avif"),
    href: "/audio",
  },
  {
    title: "Experience Center",
    description:
      "Visit our Brookefield showroom and walk through a fully integrated smart home before you commit.",
    image: getImageUrl("why_choose_us.webp"),
    href: "/experience",
  },
];

export default function ServicesOverviewSection() {
  return (
    <section className="reveal-on-scroll reveal-up" data-reveal-duration="0.8s">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">
          What We Do
        </span>
        <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main leading-tight">
          Solutions, Under One Roof
        </h2>
        <p className="text-sm text-text-muted leading-relaxed mt-4">
          We're a single integrator for every discipline — automation,
          lighting, security, networking and audio. One team, one warranty,
          one number to call.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <Link
            key={service.title}
            to={service.href}
            title={`Explore ${service.title}`}
            className="group relative block bg-bg-surface border border-border-main rounded-3xl overflow-hidden shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-accent-blue/30 hover:shadow-xl reveal-on-scroll reveal-up"
            data-reveal-delay={`${idx * 80}ms`}
            data-reveal-duration="0.6s"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg font-serif font-bold text-text-main group-hover:text-accent-blue transition-colors">
                  {service.title}
                </h3>
                <div className="w-8 h-8 rounded-full border border-border-main flex items-center justify-center text-text-muted group-hover:bg-accent-blue group-hover:text-white group-hover:border-accent-blue transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

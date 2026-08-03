import {
  Headphones,
  Calendar,
  ShieldCheck,
  Handshake,
  Phone,
  Mail,
  Globe,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import GlowingLine from "@/components/common/GlowingLine";
import { getImageUrl } from "@/utils/image";

const imgContactBg = getImageUrl("contact_villa_night.webp");
const imgContactBgAvif = getImageUrl("contact_villa_night.avif");

export default function GetInTouchSection() {
  const features = [
    {
      icon: Headphones,
      title: "Expert Support",
      description:
        "Our team of specialists is here to guide you every step of the way.",
    },
    {
      icon: Calendar,
      title: "Free Consultation",
      description:
        "Book a free consultation and discover the perfect smart solutions for your home.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted & Secure",
      description: "Your privacy and security are our top priority. Always.",
    },
    {
      icon: Handshake,
      title: "Long-Term Partner",
      description: "We're with you for the journey and beyond.",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full bg-bg-main py-20 lg:py-28 border-t border-border-main overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <picture>
          <source srcSet={imgContactBgAvif} type="image/avif" />
          <img
            src={imgContactBg}
            alt="Luxury Villa Night Scene"
            className="w-full h-full object-cover object-center filter opacity-20 dark:opacity-60 transition-opacity duration-300"
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
          />
        </picture>
        {/* Responsive theme-friendly gradient overlays for highest text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/85 to-bg-main/30 md:bg-gradient-to-r md:from-bg-main md:via-bg-main/80 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-bg-main/20" />
      </div>

      <div className="relative mx-auto max-w-8xl px-4 sm:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading and feature grids (Spans 8/12) */}
          <div className="lg:col-span-8 flex flex-col text-left">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.25em] text-accent-blue uppercase select-none mb-4">
              GET IN TOUCH
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight leading-tight max-w-2xl">
              Ready to Transform <br className="hidden sm:inline" />
              Your Home?{" "}
              <span className="font-serif italic font-normal text-accent-blue">
                We're Here to Help.
              </span>
            </h2>

            <GlowingLine
              direction="horizontal"
              length="w-20 sm:w-28"
              thickness="h-[1.5px]"
              className="mt-6 mb-8"
            />

            <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed max-w-xl mb-12 lg:mb-16">
              Have questions or want to explore the possibilities? Our smart
              living experts are just a message away. Let's build the future of
              your home—together.
            </p>

            {/* 4 Feature Columns with dividers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 lg:divide-x lg:divide-border-main/20">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-start ${
                      index === 0
                        ? "lg:pr-6 lg:pl-0"
                        : index === features.length - 1
                          ? "lg:pl-6 lg:pr-0"
                          : "lg:px-6"
                    }`}
                  >
                    {/* Icon Circle */}
                    <div className="w-14 h-14 apple-border-shine rounded-full b bg-accent-blue/5 flex items-center justify-center text-accent-blue mb-4 shrink-0 transition-transform duration-300 hover:scale-110">
                      <Icon className="h-6 w-6 stroke-[1.5]" />
                    </div>

                    <h3 className="font-sans text-xs font-bold text-text-main tracking-wider uppercase mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[11px] text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Card (Spans 4/12) */}
          <div className="lg:col-span-4 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[400px] bg-bg-surface/70 backdrop-blur-md border border-border-main/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-accent-blue uppercase mb-6 text-left select-none">
                LET'S CONNECT
              </h3>

              <div className="flex flex-col">
                {/* Phone Item */}
                <div className="flex items-center gap-4 border-b border-border-main/20 pb-4 mb-4 text-left">
                  <div className="w-12 h-12 apple-border-shine rounded-full border border-border-main bg-bg-main/40 flex items-center justify-center text-accent-blue shrink-0">
                    <Phone className="h-5.5 w-5.5 stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-text-muted">
                      Phone
                    </span>
                    <a
                      href="tel:+919324226077"
                      className="font-sans text-xs font-semibold text-text-main hover:text-accent-blue transition-colors duration-200 mt-0.5"
                    >
                      +91 9324226077
                    </a>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex items-center gap-4 border-b border-border-main/20 pb-4 mb-4 text-left">
                  <div className="w-12 h-12 apple-border-shine rounded-full border border-border-main bg-bg-main/40 flex items-center justify-center text-accent-blue shrink-0">
                    <Mail className="h-5.5 w-5.5 stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-text-muted">
                      Email
                    </span>
                    <a
                      href="mailto:info@makcautomations.com"
                      className="font-sans text-xs font-semibold text-text-main hover:text-accent-blue transition-colors duration-200 mt-0.5 break-all"
                    >
                      info@makcautomations.com
                    </a>
                  </div>
                </div>

                {/* Website Item */}
                <div className="flex items-center gap-4 border-b border-border-main/20 pb-4 mb-4 text-left">
                  <div className="w-12 h-12 apple-border-shine rounded-full border border-border-main bg-bg-main/40 flex items-center justify-center text-accent-blue shrink-0">
                    <Globe className="h-5.5 w-5.5 stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-text-muted">
                      Website
                    </span>
                    <a
                      href="https://www.makcautomations.com"
                      target="_blank"
                      rel="noreferrer"
                      className="font-sans text-xs font-semibold text-text-main hover:text-accent-blue transition-colors duration-200 mt-0.5"
                    >
                      www.makcautomations.com
                    </a>
                  </div>
                </div>

                {/* Address Item */}
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 apple-border-shine rounded-full border border-border-main bg-bg-main/40 flex items-center justify-center text-accent-blue shrink-0">
                    <MapPin className="h-5.5 w-5.5 stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-text-muted">
                      Address
                    </span>
                    <span className="font-sans text-xs font-semibold text-text-main mt-0.5 leading-snug">
                      Smart Experience Center, <br />
                      Hyderabad, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Consultation CTA button */}
              <Link
                to="/contact"
                className="w-full mt-8 py-3.5 px-4 apple-border-shine bg-accent-blue hover:bg-accent-blue/90 text-white font-bold text-[10px] sm:text-xs tracking-wide sm:tracking-widest uppercase rounded-full transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-[0_4px_15px_rgba(10,132,255,0.3)] text-center animate-none"
              >
                <span className="leading-snug">
                  Book a Free Smart Home Consultation
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

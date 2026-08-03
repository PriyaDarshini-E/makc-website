import useSEO from "@/hooks/useSEO";
import type { ReactNode } from "react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import HeroSectionV2 from "../sections/HeroSectionV2";
import { Sparkles, Palette, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { getImageUrl } from "@/utils/image";
import { Link } from "react-router-dom";

// Lazy load below-the-fold sections to shrink the initial page load JS payload
const ServicesSection = lazy(() => import("../sections/ServicesSection"));
const PartnerLogosSection = lazy(
  () => import("../sections/PartnerLogosSection"),
);
const SolutionsGallery = lazy(
  () => import("@/components/common/SolutionsGallery"),
);
const ClientReviews = lazy(() => import("@/components/common/ClientReviews"));
const GoogleReviews = lazy(() => import("@/components/common/GoogleReviews"));
const ContactEnquirySection = lazy(
  () => import("../sections/ContactEnquirySection"),
);
import ScrollStack, { ScrollStackItem } from "@/components/common/ScrollStack";

const HOME_GALLERY_CARDS = [
  {
    id: "01",
    title: "Luxury Smart Villa Automation",
    description:
      "Seamlessly integrate lighting, climate, security, and high-fidelity sound zones under a single, unified home ecosystem.",
    badge: "Smart Villa",
    image: getImageUrl("Rectangle 54367.webp"),
    imageAlt:
      "Modern double story luxury villa facade at sunset with automated lighting",
    link: "/automation",
    icon: Zap,
  },
  {
    id: "02",
    title: "Bespoke Custom Touch Switches",
    description:
      "Personalize your control plates with customizable colors, icons, layout configurations, and premium metal overlays.",
    badge: "Touch Controls",
    image: getImageUrl("Rectangle 54366.webp"),
    imageAlt: "Smart touch control panels mounted on grooved wall panels",
    link: "/automation",
    icon: Palette,
  },
  {
    id: "03",
    title: "AI Security & Biometric Access",
    description:
      "Secure your entrance with high-definition digital smart lock handles featuring biometric scans and event logging alerts.",
    badge: "Intelligent Security",
    image: getImageUrl("Rectangle 54362.webp"),
    imageAlt: "Biometric smart door lock handle detail",
    link: "/security",
    icon: ShieldCheck,
  },
  {
    id: "04",
    title: "Circadian Lighting & Wellness Scenes",
    description:
      "Sync your home's lights with natural circadian rhythms, shifting smoothly from active morning glow to cozy evening warm dimming.",
    badge: "Smart Lighting",
    image: getImageUrl("Rectangle 54368.webp"),
    imageAlt:
      "Luxury smart bedroom with warm custom lighting and tray cove lights",
    link: "/lighting",
    icon: Sparkles,
  },
];

function LazyOnView({
  children,
  minHeight = 520,
}: {
  children: ReactNode;
  minHeight?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div ref={ref} style={shouldRender ? undefined : { minHeight }}>
      {shouldRender ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
}

export default function HomeV2Page() {
  useSEO({
    title: "Smart Home Automation Bangalore | MAKc Automations",
    description:
      "MAKc Automations offers smart home automation solutions in Bangalore, including smart lighting, home security, touch control, and networking services. Contact us today.",
    keywords:
      "home automation company in bangalore, home automation bangalore, smart home automation, luxury smart home, smart lighting bangalore",
    canonicalUrl: "https://makcautomations.com/",
    robots:
      "INDEX, FOLLOW, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE",
  });

  return (
    <div
      id="home-top"
      className="relative bg-bg-main min-h-screen text-text-main"
    >
      {/* V3 Hero Section */}
      <HeroSectionV2 />

      {/* V2 Stats Section */}
      {/* <StatsSectionV2 /> */}

      <LazyOnView minHeight={720}>
        <ServicesSection />
      </LazyOnView>

      <LazyOnView minHeight={520}>
        <SolutionsGallery />
      </LazyOnView>

      <LazyOnView minHeight={800}>
        <div className="w-full bg-bg-main relative py-16">
          {/* Section Header */}
          <div className="w-full text-center mb-12 px-4">
            <span className="text-[10px] font-bold text-accent-blue uppercase tracking-[0.25em] block mb-2 sm:mb-3">
              Interactive Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-main font-display leading-tight text-balance">
              Our Automation{" "}
              <span className="text-[#0A84FF]">Solutions Stack</span>
            </h2>
          </div>

          {/* Cards container with custom scroll-stack height */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollStack
              useWindowScroll={true}
              itemDistance={40}
              itemScale={0.03}
              itemStackDistance={25}
              stackPosition="15%"
              scaleEndPosition="5%"
              baseScale={0.88}
              blurAmount={1}
            >
              {HOME_GALLERY_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <ScrollStackItem key={card.id}>
                    {/* Left Side: Image */}
                    <div className="w-full md:w-1/2 h-[120px] md:h-full relative overflow-hidden shrink-0">
                      <img
                        src={card.image}
                        alt={card.imageAlt}
                        className="w-full h-full object-cover object-center transition-transform duration-750 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between flex-1 md:h-full bg-transparent text-left overflow-hidden">
                      <div className="space-y-1.5 sm:space-y-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue shrink-0">
                            <Icon className="w-3.5 h-3.5 stroke-[1.8]" />
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] sm:text-xs font-semibold bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                            {card.badge}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold font-display text-text-main tracking-tight leading-snug truncate">
                          {card.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs md:text-sm text-text-muted leading-relaxed max-w-md font-light font-sans line-clamp-2 md:line-clamp-3">
                          {card.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-border-main/30 dark:border-border-main/10 flex justify-start mt-2 md:mt-0">
                        <Link
                          to={card.link}
                          className="apple-border-shine flex rounded-full items-center gap-1.5 border border-border-main/50 text-text-main px-4 py-1.5 uppercase text-[9px] sm:text-[10px] font-bold tracking-widest bg-transparent hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300"
                        >
                          <span>Explore Solution</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </ScrollStackItem>
                );
              })}
            </ScrollStack>
          </div>
        </div>
      </LazyOnView>

      <LazyOnView minHeight={520}>
        <ClientReviews />
      </LazyOnView>

      <LazyOnView minHeight={520}>
        <GoogleReviews />
      </LazyOnView>

      <LazyOnView minHeight={600}>
        <ContactEnquirySection />
      </LazyOnView>

      <LazyOnView minHeight={260}>
        <PartnerLogosSection />
      </LazyOnView>
    </div>
  );
}

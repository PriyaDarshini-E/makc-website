import useSEO from "@/hooks/useSEO";
import { SEO_ROUTES } from "@/config/seoData";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";
import LifestyleSection from "../sections/LifestyleSection";
import ProcessSection from "../sections/ProcessSection";
import ConnectBanner from "@/components/common/ConnectBanner";
import { getImageUrl } from "@/utils/image";

export default function WhyUsPage() {
  useSEO(SEO_ROUTES["/why-us"]);

  return (
    <div className="relative bg-bg-main min-h-screen text-text-main overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,132,255,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(10,132,255,0.03),transparent_50%)] pointer-events-none" />

      {/* HERO SECTION BANNER */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black/60 z-0">
          <img
            src={getImageUrl("about-us.webp")}
            alt="MAKc Automation Team"
            title="Why Choose MAKc Automations"
            className="w-full h-full object-cover scale-105 filter brightness-[45%] contrast-110"
          />
        </div>

        {/* Left side overlay with theme mode aware light and dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/95 sm:via-bg-main/80 lg:via-bg-main/60 to-transparent pointer-events-none transition-colors duration-300 z-10" />

        {/* Bottom gradient blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-36 bg-gradient-to-t from-bg-main to-transparent pointer-events-none z-[15]" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto text-center px-4 pt-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/25 text-accent-blue text-xs font-bold uppercase tracking-widest mb-2 backdrop-blur-md">
            <span>Our Value</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight text-text-main drop-shadow-md">
            Why Choose Us
          </h1>
          <p className="text-sm sm:text-base text-text-muted max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm">
            Discover the MAKc difference. We design around you, not around technology — creating spaces that respond to your presence and simplify your life.
          </p>
        </div>
      </section>

      {/* Sections Wrapper */}
      <div className="relative z-20">
        {/* V2 Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* V2 Lifestyle Section */}
        <LifestyleSection />

        {/* V2 Process Section */}
        <ProcessSection />

        {/* Connect Banner at the bottom */}
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <ConnectBanner />
        </div>
      </div>
    </div>
  );
}

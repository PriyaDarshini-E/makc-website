import { Link } from "react-router-dom";
import { 
  Eye, 
  Target, 
  Cpu, 
  Laptop
} from "lucide-react";
import Marquee from "react-fast-marquee";

import useSEO from "@/hooks/useSEO";
import { getImageUrl } from "@/utils/image";


export default function AboutPage() {
  useSEO({
    title: "About Us | MAKc Automations",
    description: "Learn about MAKc Automations - Bangalore's leading smart home automation company providing custom lighting, security, networking and audio integration.",
    keywords: "about makc automations, home automation company in bangalore, smart home team",
    canonicalUrl: "https://makcautomations.com/about",
  });
  const stats = [
    { value: "4", label: "Experience Centers" },
    { value: "500+", label: "Projects" },
    { value: "650+", label: "Happy Customers" },
  ];

  const clientLogos = [
    getImageUrl("client-04-q973yadybx3esxnjyeias1xijm81e9ufszb7iuhaeg.webp"),
    getImageUrl("client-05-q973y9g45324hbox3w3o7k61y8co6kqpgunq1kioko.webp"),
    getImageUrl("client-08-q973y7kfrezju3rnevaf2kn4rglxr6j8slcr30lgx4.webp"),
    getImageUrl("client-10-q973y6mlkky9iht0kcvsi2vo62qkjhfiggp9lqmv3c.webp"),
    getImageUrl("mack-logo-12-q99691wi5yn8iger7l1n233otynezih2vu28askwdk.webp"),
    getImageUrl("mack-logo-13-q99692uccsoiu2de23g9mkv5fcis77kt7ypps2ji7c.webp"),
    getImageUrl("mack-logo-15-q99693s6jmpt5oc0wluw72mm0qe5ewojk3d79ci414.webp"),
  ];

  const teamMembers = [
    {
      name: "Abhay Kumar",
      role: "Chief Executive Officer",
      img: getImageUrl("name_01-1.webp")
    },
    {
      name: "Manan Abhay Kumar",
      role: "Chief Technical Officer",
      img: getImageUrl("name_03-1-1.webp")
    },
    {
      name: "Charu Agarwal",
      role: "Director Operations",
      img: getImageUrl("name_02-2.webp")
    },
    {
      name: "Amit Didwania",
      role: "Sales Consultant",
      img: getImageUrl("name-4.webp")
    }
  ];

  return (
    <div className="text-text-main bg-bg-main overflow-hidden min-h-screen transition-colors duration-300">
      
      {/* HERO SECTION BANNER */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src={getImageUrl("about-us.webp")} 
          alt="MAKc Automation Team" 
          title="About MAKc Automations"
          className="absolute inset-0 w-full h-full object-cover scale-102 filter brightness-[45%] contrast-110"
        />
        {/* Left side overlay with theme mode aware light and dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/95 sm:via-bg-main/80 lg:via-bg-main/60 to-transparent pointer-events-none transition-colors duration-300" />

        {/* Bottom gradient blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-36 bg-gradient-to-t from-bg-main to-transparent pointer-events-none z-[5]" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 pt-16 space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight text-text-main drop-shadow-md">
            About Us
          </h1>
          <p className="text-sm sm:text-base text-text-muted max-w-2xl mx-auto leading-relaxed font-medium drop-shadow">
            MAKc Automation is locally owned and operated, being the best automation, security system, networking and lighting provider in the region.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 pb-16">
        
        {/* ABOUT CORE CONTENT SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6 reveal-on-scroll reveal-left" data-reveal-duration="0.8s">
            <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-2">Our Foundation</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-text-main leading-tight">
              Start Living in a Safer Home
            </h2>
            <p className="text-text-muted text-base leading-relaxed font-medium">
              Our service philosophy is simple: we anticipate needs. With state-of-the-art network monitoring and management, we manage your network 24/7 to identify issues and address them before they become problems, rather than putting out fires.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border-main/50">
              
              {/* Home Control */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full border border-border-main bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0 apple-border-shine">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-serif text-text-main text-base mb-1">Home Control</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Control your Lights, Fan & Other Appliances with absolute ease and scheduling.
                  </p>
                </div>
              </div>

              {/* Smart Device */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full border border-border-main bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0 apple-border-shine">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-serif text-text-main text-base mb-1">Smart Device</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    We provide smart automation solutions that integrate seamlessly into modern interiors.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-5 reveal-on-scroll reveal-right" data-reveal-duration="0.8s">
            <div className="rounded-3xl overflow-hidden border border-border-main aspect-[4/3] bg-bg-surface relative group shadow-2xl">
              <img 
                src={getImageUrl("embedded-banner.webp")} 
                alt="Smart home console automation panel room" 
                title="Smart Home Console Automation Panel Room"
                className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
            </div>
          </div>

        </section>

        {/* WHY CHOOSE US & STATISTICS SECTION */}
        <section className="bg-bg-surface/30 border-y border-border-main/50 py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 reveal-on-scroll reveal-left" data-reveal-duration="0.8s">
              <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-2">Why Choose Us</span>
              <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main leading-tight">
                A System Designed for Your Ease
              </h2>
              <p className="text-sm text-text-muted leading-relaxed max-w-xl">
                We design, build, and deploy smart solutions that combine various technologies. Our advanced and customized solutions for buildings and homes allow people to control their environment with the perfect touch.
              </p>
              
              <div className="pt-4">
                <Link 
                  to="/contact" 
                  title="Contact MAKc Automations"
                  className="inline-flex items-center gap-2 cursor-pointer bg-accent-blue hover:bg-[#0055d4] text-white font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md hover:-translate-y-0.5"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Stat items */}
            <div className="lg:col-span-5 space-y-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-bg-surface border border-border-main p-5 rounded-2xl flex items-center justify-between shadow-sm reveal-on-scroll reveal-up"
                  data-reveal-delay={`${idx * 100}ms`}
                  data-reveal-duration="0.6s"
                >
                  <span className="text-sm font-semibold text-text-main">{stat.label}</span>
                  <span className="text-3xl font-bold text-accent-blue font-serif">{stat.value}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Vision Panel */}
          <div className="bg-bg-surface border border-border-main p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all hover:border-accent-blue/15 shadow-md reveal-on-scroll reveal-left" data-reveal-duration="0.8s">
            <div>
              <div className="w-12 h-12 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-accent-blue mb-6 apple-border-shine">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-text-main mb-4">Our Vision</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                To be recognized as the leading smart home automation and security systems integrator in the region, delivering safety, comfort, and energy efficiency through out-of-the-box system configurations.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-border-main/50 flex items-center gap-2 text-xs font-bold text-accent-blue tracking-wider uppercase">
              <span>Safety & Circadian Ambiance</span>
            </div>
          </div>

          {/* Mission Panel */}
          <div className="bg-bg-surface border border-border-main p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all hover:border-accent-blue/15 shadow-md reveal-on-scroll reveal-right" data-reveal-duration="0.8s">
            <div>
              <div className="w-12 h-12 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-accent-blue mb-6 apple-border-shine">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-text-main mb-4">Our Mission</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                To design and implement top-quality smart home solutions through cutting-edge technology, exceptional customer support, and custom integrations to satisfy our clients' structural needs.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-border-main/50 flex items-center gap-2 text-xs font-bold text-accent-blue tracking-wider uppercase">
              <span>Exceptional Support 24x7</span>
            </div>
          </div>

        </section>

        {/* CLIENTS TICKER MARQUEE */}
        <section className="border-t border-border-main/50 pt-20 reveal-on-scroll reveal-up" data-reveal-duration="0.8s">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">Enterprise Trust</span>
            <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main">Our Clients</h2>
          </div>

          <div className="w-full relative">
            <Marquee
              gradient={false}
              speed={30}
              pauseOnHover={true}
              className="flex items-center py-2 group"
            >
              <div className="flex items-center gap-6 pr-6">
                {clientLogos.map((logo, idx) => (
                  <div key={idx} className="h-20 w-36 bg-white border border-border-main rounded-2xl p-4 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] shrink-0 transition-all duration-300 group-hover:blur-[2px] group-hover:opacity-60 hover:!blur-none hover:!opacity-100 cursor-pointer">
                    <img 
                      src={logo} 
                      alt={logo.includes("client-04") ? "Residential Home Automation Project" : `Client partner logo ${idx + 1}`} 
                      className="max-h-[85%] max-w-[85%] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
            
            {/* Edge fading gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg-main to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg-main to-transparent pointer-events-none z-10" />
          </div>
        </section>

        {/* TEAM MEMEBRS PROFILE SECTION */}
        <section className="border-t border-border-main/50 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll reveal-up" data-reveal-duration="0.8s">
            <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">Design Specialists</span>
            <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main mb-4">Meet Our Team!</h2>
            <p className="text-text-muted text-sm leading-relaxed font-medium">
              We work with top compatibility to deliver maximum value, keeping our clients' homes happy and safe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-bg-surface border border-border-main rounded-3xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300 reveal-on-scroll reveal-up"
                data-reveal-delay={`${idx * 100}ms`}
                data-reveal-duration="0.6s"
              >
                <div className="relative aspect-square overflow-hidden border-b border-border-main/50 bg-neutral-900">
                  <img 
                    src={member.img} 
                    alt={`${member.name} - ${member.role}`} 
                    className="w-full h-full object-cover filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h4 className="text-lg font-serif font-bold text-text-main">{member.name}</h4>
                  <p className="text-[10px] text-text-muted uppercase font-bold tracking-widest mt-1.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* REUSABLE BANNER CTA */}
        {/* <ConnectBanner 
          title="Connect With Us"
          description="Our design specialists are ready to consult on your home automation needs. Contact us via phone or email for customized estimates."
        /> */}

      </div>
    </div>
  );
}

// Arrow icon for CTA button
function ArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

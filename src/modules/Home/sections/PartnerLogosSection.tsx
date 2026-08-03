import { useEffect, useRef } from "react";

const PARTNERS = [
  { name: "JR Automation", tag: "Automation", url: "https://jrautotech.com/" },
  { name: "ALT Lighting", tag: "Lighting", url: "https://www.altlights.com/" },
  { name: "Wipro Lighting", tag: "Smart Lighting", url: "https://www.wiprolighting.com/" },
  { name: "Yale Locks", tag: "Smart Locks", url: "https://yaleonline.in/" },
  { name: "TP-Link", tag: "Mesh Wi-Fi & Networking", url: "https://www.tp-link.com/in/mesh-wifi/" },
  { name: "Legrand", tag: "Switches & Automation", url: "https://www.legrand.co.in/" },
  { name: "Hikvision", tag: "CCTV & Security", url: "https://www.hikvision.com/en/" },
  { name: "Finolex Wires", tag: "Cabling & Wires", url: "https://www.finolex.com/" },
  { name: "Nefcon", tag: "Control Systems", url: "https://www.nefcon.in/" },
  { name: "Golens Locks", tag: "Smart Locks", url: "https://golens.in/" },
  { name: "Pure Acoustics", tag: "Audio Systems", url: "https://www.pure-acoustics.com/" },
  { name: "Grandstream", tag: "Networking & IP Voice", url: "https://www.grandstream.com/" },
  { name: "Foxtech", tag: "Smart Technology", url: "https://www.foxtechindia.com/" },
  { name: "Akuvox", tag: "Intercom & Access", url: "https://www.akuvox.com/" },
  { name: "OneTouch", tag: "Security & Intercom", url: "https://onetouchcomsec.com/" },
  { name: "Tiron Lighting", tag: "Architectural Lighting", url: "https://www.tironlights.com/index-departments" },
  { name: "Srujana Unlimited", tag: "Lighting & Automation", url: "https://www.srujanaunlimited.com/" },
  { name: "Akubela", tag: "Smart Home Panels", url: "https://www.akubela.com/" },
  { name: "Lytiva", tag: "Smart Controls", url: "https://lytiva.com/" },
  { name: "Cavitak", tag: "AV & Automation", url: "https://cavitak.com/index.html" },
  { name: "Ajax Systems", tag: "Security & Alarm Systems", url: "https://ajax.systems/" },
  { name: "Finetech Controls", tag: "Smart Controls", url: "https://www.finetechcontrols.com/" },
];

export default function PartnerLogosSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Set initial scroll position to the middle set (set 2 of 3)
    const oneSetWidth = el.scrollWidth / 3;
    if (oneSetWidth > 0 && el.scrollLeft === 0) {
      el.scrollLeft = oneSetWidth;
    }

    let raf: number;
    const speed = 0.5; // px per frame
    const tick = () => {
      if (!pausedRef.current) {
        el.scrollLeft += speed;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const oneSetWidth = el.scrollWidth / 3;
      if (oneSetWidth <= 0) return;

      // When scrolled past the 2nd set into the 3rd set, jump back to middle set
      if (el.scrollLeft >= oneSetWidth * 2) {
        el.scrollLeft -= oneSetWidth;
      }
      // When scrolled left before 1st set, jump forward to middle set
      else if (el.scrollLeft <= 10) {
        el.scrollLeft += oneSetWidth;
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollLeft = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: -320, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-bg-main py-14 lg:py-16 border-t border-border-main overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 flex flex-col gap-8 items-center">
        
        <div className="text-center max-w-xl mx-auto">
          <span className="font-bold tracking-[0.25em] text-accent-blue text-xs uppercase block mb-2 select-none">
            AUTHORIZED BRAND NETWORK
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-text-main tracking-tight">
            OUR TECHNOLOGY PARTNERS
          </h3>
        </div>

        <style>{`.partner-scroll { scrollbar-width: none; -ms-overflow-style: none; }
          .partner-scroll::-webkit-scrollbar { display: none; }`}</style>
        <div 
          className="w-full relative mt-4 group"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {/* Scroll Buttons */}
          <button
            type="button"
            onClick={handleScrollLeft}
            aria-label="Scroll technology partners left"
            className="absolute -left-1 sm:left-1 md:left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border-main bg-bg-surface/90 backdrop-blur-md flex items-center justify-center text-text-main shadow-lg hover:bg-accent-blue hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
          >
            <svg className="w-5 h-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleScrollRight}
            aria-label="Scroll technology partners right"
            className="absolute -right-1 sm:right-1 md:right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border-main bg-bg-surface/90 backdrop-blur-md flex items-center justify-center text-text-main shadow-lg hover:bg-accent-blue hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
          >
            <svg className="w-5 h-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="partner-scroll flex items-center gap-5 sm:gap-6 py-3 overflow-x-auto"
          >
            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${partner.name} - Official Technology Partner`}
                className="px-5 py-3.5 rounded-xl bg-bg-surface/80 border border-border-main/50 shadow-md backdrop-blur-md shrink-0 flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:scale-[1.05] hover:border-accent-blue/60 hover:shadow-lg cursor-pointer group/card no-underline"
              >
                <span className="text-base sm:text-lg font-bold font-sans tracking-tight text-text-main group-hover/card:text-accent-blue transition-colors">
                  {partner.name}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-text-muted font-mono font-semibold">
                  {partner.tag}
                </span>
              </a>
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-main to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-main to-transparent pointer-events-none z-10" />
        </div>

      </div>
    </section>
  );
}

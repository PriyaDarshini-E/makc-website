import Marquee from "react-fast-marquee";

// AJAX Logo SVG
const AjaxLogo = () => (
  <svg viewBox="0 0 120 40" className="h-10 w-auto text-text-muted/50 hover:text-text-main/90 transition-colors duration-300 fill-current">
    <path d="M10 30 L22 6 L34 30 M15 22 L29 22" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M48 6 L48 24 C48 28 46 30 42 30" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M58 30 L70 6 L82 30 M63 22 L77 22" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M92 6 L108 30 M108 6 L92 30" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Control4 Logo Component
const Control4Logo = () => (
  <div className="flex items-center gap-2 text-text-muted/50 hover:text-text-main/90 transition-colors duration-300 font-sans font-medium text-2xl tracking-tight select-none">
    <span>Control</span>
    <div className="h-8 w-8 rounded-full bg-current flex items-center justify-center text-bg-main text-sm font-black font-sans">
      4
    </div>
  </div>
);

// Legrand Logo Component
const LegrandLogo = () => (
  <div className="flex items-center gap-2.5 text-text-muted/50 hover:text-text-main/90 transition-colors duration-300 select-none">
    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current" strokeWidth="2.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9 H15 V15" />
    </svg>
    <span className="font-sans font-extrabold text-2xl tracking-tight">legrand</span>
  </div>
);

// Schneider Electric Logo Component
const SchneiderLogo = () => (
  <div className="flex flex-col items-start leading-none text-text-muted/50 hover:text-text-main/90 transition-colors duration-300 select-none font-sans">
    <span className="font-black text-xl tracking-tight">Schneider</span>
    <span className="text-xs tracking-widest uppercase font-bold mt-1">Electric</span>
  </div>
);

// Philips Hue Logo Component
const PhilipsHueLogo = () => (
  <div className="flex flex-col items-center text-text-muted/50 hover:text-text-main/90 transition-colors duration-300 select-none font-sans">
    <span className="text-[11px] tracking-[0.25em] font-black uppercase leading-none">Philips</span>
    <div className="h-[1px] w-16 bg-current my-1.5 opacity-55" />
    <span className="text-2xl font-light tracking-tight leading-none lowercase">hue</span>
  </div>
);

// Lutron Logo Component
const LutronLogo = () => (
  <div className="flex items-center text-text-muted/50 hover:text-text-main/90 transition-colors duration-300 select-none font-sans font-black text-2xl tracking-wider uppercase">
    LUTRON
  </div>
);

// Yale Logo Component
const YaleLogo = () => (
  <div className="h-12 w-12 rounded-full bg-text-muted/50 hover:bg-text-main/90 transition-colors duration-300 text-bg-main flex items-center justify-center font-sans font-black text-base uppercase select-none">
    Yale
  </div>
);

// Akuvox Logo Component
const AkuvoxLogo = () => (
  <div className="flex items-center text-text-muted/50 hover:text-text-main/90 transition-colors duration-300 select-none font-sans font-black text-2xl tracking-tight">
    Akuvox
  </div>
);

// Cisco Logo Component
const CiscoLogo = () => (
  <div className="flex flex-col items-center text-text-muted/50 hover:text-text-main/90 transition-colors duration-300 select-none font-sans">
    <div className="flex items-end gap-[3px] h-6 mb-1">
      <div className="w-[2.5px] h-3 bg-current" />
      <div className="w-[2.5px] h-4.5 bg-current" />
      <div className="w-[2.5px] h-3 bg-current" />
      <div className="w-[2.5px] h-6 bg-current" />
      <div className="w-[2.5px] h-3 bg-current" />
      <div className="w-[2.5px] h-4.5 bg-current" />
      <div className="w-[2.5px] h-3 bg-current" />
    </div>
    <span className="font-black text-sm tracking-wider uppercase leading-none">Cisco</span>
  </div>
);

// Ubiquiti Logo Component
const UbiquitiLogo = () => (
  <div className="flex items-center gap-2.5 text-text-muted/50 hover:text-text-main/90 transition-colors duration-300 select-none">
    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current" strokeWidth="2.5">
      <path d="M5 3 L12 2 L19 3 L19 12 C19 17 15 21 12 22 C9 21 5 17 5 12 Z" />
      <path d="M8 8 C8 8 10 12 12 12 C14 12 16 8 16 8" />
    </svg>
    <span className="font-sans font-black text-sm tracking-widest uppercase">Ubiquiti</span>
  </div>
);

export default function PartnerLogosSection() {
  const logos = [
    <AjaxLogo />,
    <Control4Logo />,
    <LegrandLogo />,
    <SchneiderLogo />,
    <PhilipsHueLogo />,
    <LutronLogo />,
    <YaleLogo />,
    <AkuvoxLogo />,
    <CiscoLogo />,
    <UbiquitiLogo />
  ];

  return (
    <section className="relative w-full bg-bg-main py-14 lg:py-16 border-t border-border-main overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 flex flex-col items-center">
        
        {/* Title */}
        <span className="font-bold tracking-[0.2em] text-accent-blue uppercase mb-8 select-none">
          OUR TECHNOLOGY PARTNERS
        </span>

        {/* Marquee Wrapper */}
        <div className="w-full relative">
          <Marquee
            gradient={false}
            speed={35}
            pauseOnHover={true}
            className="flex items-center group"
          >
            <div className="flex items-center gap-16 lg:gap-24 pr-16 lg:pr-24">
              {logos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center shrink-0 transition-all duration-300 group-hover:blur-[2px] group-hover:opacity-60 hover:!blur-none hover:!opacity-100 cursor-pointer">
                  {logo}
                </div>
              ))}
            </div>
          </Marquee>
          
          {/* Edge fading gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg-main to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg-main to-transparent pointer-events-none z-10" />
        </div>

      </div>
    </section>
  );
}

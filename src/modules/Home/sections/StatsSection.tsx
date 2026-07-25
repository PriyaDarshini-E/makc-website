import { Home, Award, ShieldCheck, MapPin } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Home,
      value: "800+",
      label: "Luxury Homes Automated",
    },
    {
      icon: Award,
      value: "8+",
      label: "Years of Excellence",
    },
    {
      icon: ShieldCheck,
      value: "5-Year Guarantee",
      label: "Installation Warranty",
    },
    {
      icon: MapPin,
      value: "5+ states",
      label: "Serving Across India",
    },
  ];

  return (
    <div className="relative w-full z-20 bg-transperent border-none pb-12">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 sm:grid-cols-2 sm:gap-y-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative flex items-center justify-center gap-4 px-4 md:px-6 lg:px-8 text-left group"
              >
                {/* Custom vertical gradient divider as border-right on desktop */}
                {index < stats.length - 1 && (
                  <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-[#0A84FF]/0 via-[#0A84FF]/40 to-[#0A84FF]/0 z-0 hidden md:block" />
                )}
                {/* Icon wrapper */}
                <div className="h-11 w-11 shrink-0 rounded-none flex items-center justify-center text-accent-blue transition-all duration-300">
                  <Icon className="h-full w-full stroke-[1.5]" />
                </div>

                {/* Text wrapper */}
                <div className="flex flex-col">
                  <span className=" text-2xl lg:text-3xl font-extrabold text-text-main tracking-tight leading-none group-hover:text-accent-blue transition-colors duration-200">
                    {stat.value}
                  </span>
                  <span className=" text-[11px] sm:text-xs text-text-muted tracking-wide font-medium mt-1.5 leading-snug">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { Phone } from "lucide-react";

export default function FloatingCall() {
  return (
    <a
      href="tel:+918197783287"
      title="Call MAKc Automations at +91 99484 32444"
      className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#0a84ff] !text-white shadow-lg shadow-[#0a84ff]/20 transition-all duration-300 hover:scale-110 hover:bg-[#0070e0] hover:shadow-[#0a84ff]/40 focus:outline-none focus:ring-2 focus:ring-[#0a84ff] focus:ring-offset-2 dark:focus:ring-offset-[#061121]"
      aria-label="Call Us Now"
    >
      {/* Pulsing ring around button */}
      <span className="absolute inset-0 -z-10 rounded-full bg-[#0a84ff]/40 animate-ping group-hover:animate-none opacity-75 duration-1000" />

      {/* Tooltip */}
      <span className="absolute right-14 sm:right-16 scale-0 group-hover:scale-100 bg-bg-surface text-text-main text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md transition-all duration-200 origin-right border border-border-main pointer-events-none">
        Call Us Now
      </span>

      {/* Phone Icon */}
      <Phone className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:scale-110" />
    </a>
  );
}

import { Phone, Mail } from "lucide-react";

export function ContactInfoChips() {
  return (
    <>
      <a
        href="tel:+918197783287"
        title="Call MAKc Automations at +91 81977 83287"
        className="h-full min-w-0 bg-bg-surface/50 backdrop-blur-xl border border-border-main/70 rounded-2xl p-3.5 sm:p-4 lg:p-5 flex items-center gap-3 lg:gap-4 group cursor-pointer transition-all hover:-translate-y-1 duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.015)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:border-accent-blue/40 hover:shadow-[0_8px_20px_rgba(10,132,255,0.06)] reveal-on-scroll reveal-up"
        data-reveal-delay="100ms"
        data-reveal-duration="0.6s"
      >
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-accent-blue/10 to-accent-blue/20 text-accent-blue flex items-center justify-center shrink-0 border border-accent-blue/25 group-hover:from-accent-blue group-hover:to-[#3ea6ff] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(10,132,255,0.25)] transition-all duration-500">
          <Phone
            className="w-4.5 h-4.5 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
            aria-hidden="true"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-0.5">
            Call Us Directly
          </p>
          <p className="text-sm sm:text-base font-semibold text-text-main leading-tight transition-colors group-hover:text-accent-blue duration-300 whitespace-nowrap">
            +91-8197783287
          </p>
          <p className="text-xs font-medium text-text-muted mt-0.5 whitespace-nowrap">
            +91-9324226077
          </p>
        </div>
      </a>

      <a
        href="https://wa.me/918197783287?text=Hi%20MAKc%20Team,%20I'm%20interested%20in%20your%20services!"
        title="Chat with MAKc Automations on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="h-full min-w-0 bg-bg-surface/50 backdrop-blur-xl border border-border-main/70 rounded-2xl p-3.5 sm:p-4 lg:p-5 flex items-center gap-3 lg:gap-4 group cursor-pointer transition-all hover:-translate-y-1 duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.015)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:border-[#25D366]/40 hover:shadow-[0_8px_20px_rgba(37,211,102,0.06)] reveal-on-scroll reveal-up"
        data-reveal-delay="150ms"
        data-reveal-duration="0.6s"
      >
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#25D366]/10 to-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/25 group-hover:from-[#25D366] group-hover:to-[#20ba5a] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(37,211,102,0.25)] transition-all duration-500">
          <svg
            className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current group-hover:scale-110 transition-transform duration-300"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-0.5">
            WhatsApp Us
          </p>
          <p className="text-sm sm:text-base font-semibold text-text-main leading-tight transition-colors group-hover:text-[#25D366] duration-300 whitespace-nowrap">
            +91-8197783287
          </p>
          <p className="text-xs font-medium text-text-muted mt-0.5 whitespace-nowrap">
            Chat with our experts
          </p>
        </div>
      </a>

      <a
        href="mailto:info@makcautomations.com"
        title="Email MAKc Automations"
        className="h-full min-w-0 bg-bg-surface/50 backdrop-blur-xl border border-border-main/70 rounded-2xl p-3.5 sm:p-4 lg:p-5 flex items-center gap-3 lg:gap-4 group cursor-pointer transition-all hover:-translate-y-1 duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.015)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:border-accent-blue/40 hover:shadow-[0_8px_20px_rgba(10,132,255,0.06)] reveal-on-scroll reveal-up"
        data-reveal-delay="200ms"
        data-reveal-duration="0.6s"
      >
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-accent-blue/10 to-accent-blue/20 text-accent-blue flex items-center justify-center shrink-0 border border-accent-blue/25 group-hover:from-accent-blue group-hover:to-[#3ea6ff] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(10,132,255,0.25)] transition-all duration-500">
          <Mail
            className="w-4.5 h-4.5 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
            aria-hidden="true"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-0.5">
            Email Us
          </p>
          <p
            className="text-xs sm:text-sm font-semibold text-text-main transition-colors group-hover:text-accent-blue duration-300 break-all"
            title="info@makcautomations.com"
          >
            info@makcautomations.com
          </p>
        </div>
      </a>
    </>
  );
}

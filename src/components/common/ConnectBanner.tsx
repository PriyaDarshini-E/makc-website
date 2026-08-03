// Reusable Connect banner
import { Phone, Mail } from "lucide-react";

function YoutubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

// Local SVG icon components to bypass lucide-react brand icons removal
function Facebook({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function Linkedin({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Instagram({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

interface ConnectBannerProps {
  title?: string;
  description?: string;
}

export default function ConnectBanner({
  title = "Connect With Us",
  description = "Our experts are ready to design your systems. Contact us via phone or email for customized estimates.",
}: ConnectBannerProps) {
  return (
    <section className="relative rounded-3xl overflow-hidden border border-border-main bg-bg-surface/40 backdrop-blur-xl p-8 sm:p-12 lg:p-16 text-center shadow-xl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block">Start Your Journey</span>
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-text-main tracking-tight">{title}</h2>
        <p className="text-text-muted text-sm leading-relaxed max-w-md mx-auto">
          {description}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto pt-6">
          
          {/* Phone */}
          <div className="flex flex-col items-center p-5 bg-bg-main/50 rounded-2xl border border-border-main/60 hover:-translate-y-0.5 transition-all">
            <Phone className="w-6 h-6 text-accent-blue mb-3" />
            <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1.5">Direct Line</span>
            <a href="tel:+919324226077" className="text-sm font-semibold text-text-main hover:text-accent-blue transition-colors">+91-9324226077</a>
            <a href="tel:+918197783287" className="text-xs text-text-muted mt-1 hover:text-accent-blue transition-colors">+91-8197783287</a>
          </div>


          {/* Email */}
          <div className="flex flex-col items-center p-5 bg-bg-main/50 rounded-2xl border border-border-main/60 hover:-translate-y-0.5 transition-all">
            <Mail className="w-6 h-6 text-accent-blue mb-3" />
            <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1.5">Email Support</span>
            <a href="mailto:info@makcautomations.com" className="text-sm font-semibold text-text-main hover:text-accent-blue transition-colors truncate w-full px-2">info@makcautomations.com</a>
          </div>

        </div>

        {/* Social icons - wrapped in rounded-full apple-border-shine */}
        <div className="flex items-center justify-center gap-4 pt-8">
          <a 
            href="https://www.instagram.com/mak_automation/" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-text-muted hover:text-[#E4405F] hover:border-[#E4405F] transition-all duration-300 apple-border-shine"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a 
            href="https://www.facebook.com/makcautomation" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Facebook"
            className="w-10 h-10 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-text-muted hover:text-[#1877F2] hover:border-[#1877F2] transition-all duration-300 apple-border-shine"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a 
            href="https://www.linkedin.com/company/makc-automations/" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-text-muted hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 apple-border-shine"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href="https://www.youtube.com/@MAKcAutomation01" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="YouTube"
            className="w-10 h-10 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-text-muted hover:text-[#FF0000] hover:border-[#FF0000] transition-all duration-300 apple-border-shine"
          >
            <YoutubeIcon className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

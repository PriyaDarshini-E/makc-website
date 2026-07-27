function YoutubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

// Local SVG icon components
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

export function SocialMediaBar() {
  return (
    <div
      className="flex-1 min-w-0 bg-bg-surface/50 backdrop-blur-xl border border-border-main/70 rounded-3xl p-5 sm:p-6 flex flex-col justify-center gap-3 shadow-[0_4px_15px_rgba(0,0,0,0.015)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] reveal-on-scroll reveal-up"
      data-reveal-delay="300ms"
      data-reveal-duration="0.6s"
    >
      <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest text-center sm:text-left">
        Follow Us On
      </p>
      <div className="flex items-center justify-center sm:justify-start gap-3">
        <a
          href="https://www.instagram.com/mak_automation/"
          title="Follow MAKc Automations on Instagram"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow us on Instagram"
          className="w-11 h-11 rounded-xl border border-border-main bg-bg-main/30 flex items-center justify-center text-text-muted hover:text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent hover:shadow-[0_0_15px_rgba(238,42,123,0.4)] transition-all duration-500"
        >
          <Instagram
            className="w-5 h-5 transition-transform duration-300 hover:scale-105"
            aria-hidden="true"
          />
        </a>
        <a
          href="https://www.facebook.com/makcautomation"
          title="Visit MAKc Automations on Facebook"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow us on Facebook"
          className="w-11 h-11 rounded-xl border border-border-main bg-bg-main/30 flex items-center justify-center text-text-muted hover:text-white hover:bg-[#1877F2] hover:border-transparent hover:shadow-[0_0_15px_rgba(24,119,242,0.4)] transition-all duration-500"
        >
          <Facebook
            className="w-5 h-5 transition-transform duration-300 hover:scale-105"
            aria-hidden="true"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/makc-automations/"
          title="Connect with MAKc Automations on LinkedIn"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow us on LinkedIn"
          className="w-11 h-11 rounded-xl border border-border-main bg-bg-main/30 flex items-center justify-center text-text-muted hover:text-white hover:bg-[#0A66C2] hover:border-transparent hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] transition-all duration-500"
        >
          <Linkedin
            className="w-5 h-5 transition-transform duration-300 hover:scale-105"
            aria-hidden="true"
          />
        </a>
        <a
          href="https://www.youtube.com/@MAKcAutomation01"
          title="Subscribe to MAKc Automations on YouTube"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow us on YouTube"
          className="w-11 h-11 rounded-xl border border-border-main bg-bg-main/30 flex items-center justify-center text-text-muted hover:text-white hover:bg-[#FF0000] hover:border-transparent hover:shadow-[0_0_15px_rgba(255,0,0,0.4)] transition-all duration-500"
        >
          <YoutubeIcon className="w-5 h-5 transition-transform duration-300 hover:scale-105" />
        </a>
      </div>
    </div>
  );
}

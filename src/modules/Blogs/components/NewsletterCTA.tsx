import { useState } from "react";
import { Mail, Check, Send } from "lucide-react";
import toast from "react-hot-toast";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubmitted(true);
    toast.success("Thanks for subscribing!");
  };

  return (
    <section className="relative rounded-3xl overflow-hidden border border-border-main bg-bg-surface/40 backdrop-blur-xl p-8 sm:p-12 lg:p-16 text-center shadow-xl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <div className="w-12 h-12 mx-auto rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center">
          <Mail className="w-5 h-5" />
        </div>

        <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block">
          Stay In The Loop
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-main tracking-tight">
          The Smart Home Journal, Monthly
        </h2>
        <p className="text-sm text-text-muted leading-relaxed max-w-md mx-auto">
          One curated email a month: new articles, behind-the-scenes
          installations, and the occasional product we can't help but geek out
          about. No spam, unsubscribe any time.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 rounded-full text-sm font-semibold">
            <Check className="w-4 h-4" />
            You're on the list. See you in your inbox.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md mx-auto pt-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@yourhome.com"
              title="Email address for newsletter"
              aria-label="Email address"
              className="flex-1 px-5 py-3 bg-bg-main border border-border-main rounded-full text-sm text-text-main placeholder:text-text-muted/70 focus:outline-none focus:border-accent-blue/50 focus:ring-2 focus:ring-accent-blue/20 transition-all"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 cursor-pointer bg-accent-blue hover:bg-[#0055d4] text-white font-bold text-xs tracking-wider uppercase py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Subscribe</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

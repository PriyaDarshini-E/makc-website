import { Star } from "lucide-react";
import { getImageUrl } from "@/utils/image";

const imgTestimonial1 = getImageUrl("why_choose_us.webp");
const imgTestimonial2 = getImageUrl("project_apartments.webp");

export default function ClientTestimonialsSection() {
  const testimonials = [
    {
      stars: 5,
      text: "MAKC transformed our villa into something that feels straight out of the future. The installation was flawless and the support has been exceptional.",
      author: "Arjun & Priya Mehta",
      role: "Villa Owner, Hyderabad",
      image: imgTestimonial1,
    },
    {
      stars: 5,
      text: "The attention to detail is unmatched. Every light, curtain, and security feature works seamlessly. It's luxury living, made effortless.",
      author: "Rohan Sethi",
      role: "Penthouse Owner, Mumbai",
      image: imgTestimonial2,
    },
  ];

  return (
    <section className="relative w-full py-20 lg:py-24 border-t border-border-main text-center overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F7FA] to-[#EBEFF5] dark:from-[#07152D] dark:via-[#051022] dark:to-[#01050E] transition-colors duration-300 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(10,132,255,0.08)_0%,rgba(10,132,255,0.03)_35%,transparent_70%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(32,120,255,0.32)_0%,rgba(12,65,190,0.18)_22%,rgba(6,25,60,0.08)_48%,transparent_72%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(10,132,255,0.04),transparent_70%)] dark:bg-[radial-gradient(circle_at_70%_70%,rgba(0,70,255,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 z-10">
        
        {/* Title */}
        <span className="reveal-on-scroll reveal-up font-sans text-xl font-bold tracking-[0.2em] text-accent-blue uppercase mb-12 block select-none" data-reveal-duration="0.8s">
          WHAT OUR CLIENTS SAY
        </span>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 text-left">
          {testimonials.map((t, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col sm:flex-row border border-border-main dark:border-[#0A84FF]/15 bg-white/60 dark:bg-[#061121]/50 backdrop-blur-xl overflow-hidden rounded-xl h-auto sm:h-[220px] transition-all duration-500 hover:border-accent-blue/40 hover:shadow-[0_0_25px_rgba(10,132,255,0.08)] dark:hover:shadow-[0_0_25px_rgba(10,132,255,0.15)] reveal-on-scroll ${
                  index === 0 ? "reveal-left" : "reveal-right"
                }`}
                data-reveal-duration="0.8s"
              >
                {/* Left Side: Image (Spans ~38% width on tablet/desktop) */}
                <div className="w-full sm:w-[38%] h-[160px] sm:h-full shrink-0 relative overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Right Side: Content (Spans ~62% width) */}
                <div className="w-full sm:w-[62%] p-6 flex flex-col justify-between bg-transparent">
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-[#0A84FF]">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} className="h-4.5 w-4.5 fill-current stroke-none" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="mt-4 font-sans text-xs sm:text-sm text-text-main leading-relaxed font-normal">
                      "{t.text}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="mt-4 sm:mt-0">
                    <h4 className="font-sans text-xs sm:text-[13px] font-bold text-text-main leading-none">
                      — {t.author}
                    </h4>
                    <span className="font-sans text-[10px] sm:text-xs text-text-muted mt-1.5 block">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

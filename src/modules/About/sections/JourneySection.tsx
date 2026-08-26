import { Sparkles, Award, Building2, Globe2, Cpu } from "lucide-react";

const milestones = [
  {
    year: "2014",
    title: "Founded in Bengaluru",
    description:
      "MAKc Automations was established with a single mission: bring luxury-grade smart living within reach of Indian homeowners.",
    icon: Sparkles,
  },
  {
    year: "2017",
    title: "First 100 Homes",
    description:
      "Crossed our first hundred deployments across villas, apartments and farmhouses — each one tuned to the family's daily routine.",
    icon: Building2,
  },
  {
    year: "2019",
    title: "Lighting & Audio Practice",
    description:
      "Launched our dedicated lighting scene-design and architectural audio practices, partnering with global brands.",
    icon: Award,
  },
  {
    year: "2021",
    title: "Enterprise Networking",
    description:
      "Rolled out commercial-grade networking — mesh Wi-Fi, managed switches, and structured cabling — for large luxury villas.",
    icon: Globe2,
  },
  {
    year: "2024",
    title: "Brookefield Experience Center",
    description:
      "Opened our flagship experience center so clients can walk through a fully integrated smart home before they decide.",
    icon: Sparkles,
  },
  {
    year: "2026",
    title: "650+ Happy Families",
    description:
      "Today we support over 650 households across Bengaluru with 24/7 monitoring, on-site service and dedicated care.",
    icon: Cpu,
  },
];

export default function JourneySection() {
  return (
    <section
      className="reveal-on-scroll reveal-up"
      data-reveal-duration="0.8s"
    >
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">
          Our Journey
        </span>
        <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main leading-tight">
          A Decade of Crafting Smarter Homes
        </h2>
        <p className="text-sm text-text-muted leading-relaxed mt-4">
          From a two-person studio to a 50-strong team of engineers, designers
          and support specialists — the work has always been the same: design
          every system as if it were our own.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line down the middle (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-main to-transparent" />

        <ol className="space-y-10 md:space-y-14">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            const isLeft = idx % 2 === 0;
            return (
              <li
                key={m.year}
                className="relative md:grid md:grid-cols-2 md:gap-12 items-center"
              >
                {/* Year on opposite side (desktop) */}
                <div
                  className={`hidden md:block ${
                    isLeft ? "md:order-2 md:text-left" : "md:order-1 md:text-right"
                  }`}
                >
                  <span className="text-3xl font-serif font-bold text-accent-blue tracking-tight">
                    {m.year}
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`${
                    isLeft ? "md:order-1" : "md:order-2"
                  } bg-bg-surface border border-border-main rounded-2xl p-6 shadow-md hover:border-accent-blue/30 transition-colors`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full border border-border-main bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Year on mobile only */}
                    <span className="md:hidden text-xl font-serif font-bold text-accent-blue">
                      {m.year}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-text-main">
                      {m.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {m.description}
                  </p>
                </div>

                {/* Dot on the timeline */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent-blue border-4 border-bg-main shadow-md" />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

import { Compass, Wrench, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Design-Led Engineering",
    description:
      "Every system begins with how a family actually lives. We design around routines, not around gadgets.",
  },
  {
    icon: Wrench,
    title: "Craftsmanship Over Assembly",
    description:
      "Hand-terminated cabling, custom-fitted panels, and labelled racks. The work inside the wall matters as much as the UI.",
  },
  {
    icon: Heart,
    title: "Long-Term Care",
    description:
      "We don't walk away after handover. 24/7 monitoring, scheduled health checks, and on-site support keep homes running.",
  },
  {
    icon: Lightbulb,
    title: "Curated, Not Catalogued",
    description:
      "We partner with brands we trust, not every brand that exists. The result is fewer compatibility issues, longer lifespans.",
  },
];

export default function ValuesSection() {
  return (
    <section
      className="bg-bg-surface/30 border-y border-border-main/50 py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 reveal-on-scroll reveal-up"
      data-reveal-duration="0.8s"
    >
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">
          What We Stand For
        </span>
        <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main leading-tight">
          Our Core Values
        </h2>
        <p className="text-sm text-text-muted leading-relaxed mt-4">
          Four principles that shape every project we deliver, every support
          call we answer, and every partnership we choose.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, idx) => {
          const Icon = value.icon;
          return (
            <div
              key={value.title}
              className="group bg-bg-surface border border-border-main rounded-2xl p-6 transition-all duration-300 hover:border-accent-blue/30 hover:-translate-y-1 hover:shadow-xl reveal-on-scroll reveal-up"
              data-reveal-delay={`${idx * 80}ms`}
              data-reveal-duration="0.6s"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-5 group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-text-main mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

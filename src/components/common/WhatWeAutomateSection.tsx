import { useState } from "react";

export interface AutomationSystem {
  title: string;
  detail: string;
  img: string;
}

interface WhatWeAutomateSectionProps {
  systems: AutomationSystem[];
  imagePosition?: "left" | "right";
  badgeText?: string;
  className?: string;
  title?: string;
  description?: string;
}

export default function WhatWeAutomateSection({
  systems,
  imagePosition = "right",
  badgeText = "Connected living system",
  className = "mb-28",
  title,
  description,
}: WhatWeAutomateSectionProps) {
  const [activeAutomatedCard, setActiveAutomatedCard] = useState<number>(0);
  const activeSystem = systems[activeAutomatedCard] || systems[0];

  if (!systems || systems.length === 0) return null;

  return (
    <section className={className}>
      {title && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-main leading-[1.15]">
              {title}
            </h2>
          </div>
          {description && (
            <div className="lg:col-span-5 pt-2">
              <p className="text-text-muted text-sm sm:text-base leading-relaxed font-normal">
                {description}
              </p>
            </div>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Tabs Column */}
        <div
          className={`lg:col-span-6 flex flex-col justify-center lg:py-3 ${
            imagePosition === "left" ? "lg:order-last" : "lg:order-first"
          }`}
        >
          <div className="border-y border-border-main/60 divide-y divide-border-main/60">
            {systems.map((system, idx) => {
              const isActive = activeAutomatedCard === idx;

              return (
                <button
                  key={system.title}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveAutomatedCard(idx)}
                  onFocus={() => setActiveAutomatedCard(idx)}
                  onMouseEnter={() => setActiveAutomatedCard(idx)}
                  className={`group flex w-full items-center gap-4 py-4 text-left transition-colors duration-300 cursor-pointer ${
                    isActive
                      ? "text-accent-blue"
                      : "text-text-main hover:text-accent-blue"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-accent-blue scale-100"
                        : "bg-border-main scale-75 group-hover:bg-accent-blue/60 group-hover:scale-100"
                    }`}
                  />
                  <span className="text-base sm:text-lg font-semibold tracking-tight">
                    {system.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`ml-auto h-px w-7 shrink-0 transition-all duration-300 ${
                      isActive
                        ? "bg-accent-blue w-11"
                        : "bg-border-main group-hover:bg-accent-blue/60"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Image Display Column */}
        <div
          className={`lg:col-span-6 relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden rounded-2xl bg-bg-surface ${
            imagePosition === "left" ? "lg:order-first" : "lg:order-last"
          }`}
        >
          {systems.map((system, idx) => {
            const isActive = activeAutomatedCard === idx;

            return (
              <img
                key={system.title}
                src={system.img}
                alt={system.title}
                title={system.title}
                aria-hidden={!isActive}
                className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform,filter] duration-700 ease-out ${
                  isActive
                    ? "opacity-100 scale-100 grayscale-0"
                    : "pointer-events-none opacity-0 scale-[1.035] grayscale"
                }`}
              />
            );
          })}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5" />

          <div className="relative z-10 flex h-full min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] flex-col justify-between p-6 sm:p-9 lg:p-11">
            <span className="inline-flex w-fit items-center gap-2 text-xs font-medium text-white/85!">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
              {badgeText}
            </span>

            <div className="max-w-[34rem]">
              <p className="text-white/70! text-sm font-medium mb-3">
                {String(activeAutomatedCard + 1).padStart(2, "0")} /{" "}
                {String(systems.length).padStart(2, "0")}
              </p>
              <h3 className="text-white! text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.02] text-balance">
                {activeSystem.title}
              </h3>
              <p className="text-white/90! text-base sm:text-lg leading-relaxed mt-4 max-w-[31ch]">
                {activeSystem.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

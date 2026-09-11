import type { ComponentType, CSSProperties } from "react";
import type { LucideProps } from "lucide-react";
import type { Coordinate } from "./types";

interface LabelProps {
  label: string;
  labelPos: Coordinate;
  icon: ComponentType<LucideProps>;
  isHovered: boolean;
  isActive: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
  delay?: number;
  isTablet?: boolean;
}

export default function Label({
  label,
  labelPos,
  icon: Icon,
  isHovered,
  isActive,
  onHoverStart,
  onHoverEnd,
  onClick,
  delay = 0,
  isTablet = false,
}: LabelProps) {
  return (
    <div
      style={
        {
          position: "absolute",
          left: `${labelPos.x - 2}%`,
          top: `${labelPos.y - 2}%`,
          transform: "translate(-50%, -50%)",
          zIndex: isHovered || isActive ? 40 : 30,
          "--enter-delay": `${delay + 0.8}s`,
        } as CSSProperties
      }
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={onClick}
      className={`
        hero-pop flex items-center gap-2 cursor-pointer select-none
        ${isHovered ? "scale-[1.06]" : ""}
        bg-white/80 dark:bg-black/65 backdrop-blur-md
        border ${
          isHovered || isActive
            ? "border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)] text-[#d4af37]"
            : "border-black/10 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.25)] text-text-main dark:text-white"
        }
        rounded-full transition-all duration-300
        ${isTablet ? "px-3 py-1.5 text-[11px]" : "px-4.5 py-2 text-xs font-semibold uppercase tracking-wider"}
      `}
    >
      <div
        className={`transition-transform duration-300 ${isHovered ? "rotate-[15deg]" : ""} ${isHovered || isActive ? "text-[#d4af37]" : "text-text-main/70 dark:text-white/80"}`}
      >
        <Icon className={isTablet ? "h-3.5 w-3.5" : "h-4 w-4"} />
      </div>
      <span className="whitespace-nowrap font-sans">{label}</span>
    </div>
  );
}

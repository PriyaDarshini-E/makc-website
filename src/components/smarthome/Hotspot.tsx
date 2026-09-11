import type { CSSProperties } from "react";
import type { Coordinate } from "./types";

interface HotspotProps {
  id: string;
  anchor: Coordinate;
  isHovered: boolean;
  isActive: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
  index: number;
  delay?: number;
  isMobile?: boolean;
}

export default function Hotspot({
  id,
  anchor,
  isHovered,
  isActive,
  onHoverStart,
  onHoverEnd,
  onClick,
  index,
  delay = 0,
  isMobile = false,
}: HotspotProps) {
  return (
    <button
      type="button"
      style={
        {
          position: "absolute",
          left: `${anchor.x - 0.5}%`,
          top: `${anchor.y - 0.9}%`,
          transform: "translate(-40%, -50%)",
          zIndex: 50,
          "--enter-delay": `${delay}s`,
          "--pop-from": 0,
        } as CSSProperties
      }
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={onClick}
      aria-label={`Toggle info for ${id}`}
      aria-expanded={isActive}
      className="hero-pop group outline-none select-none relative"
    >
      {/* Solid center dot */}
      <div
        className={`
          relative flex items-center justify-center rounded-full border-2 border-black/80
          ${isHovered || isActive ? "bg-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.8)]" : "bg-white shadow-[0_0_10px_rgba(255,255,255,0.6)]"}
          transition-all duration-300
          ${isMobile ? "w-6 h-6" : "w-3.5 h-3.5"}
        `}
      >
        {/* Mobile Number Badge */}
        {isMobile && (
          <span className="text-[10px] font-bold text-black select-none leading-none">
            {index + 1}
          </span>
        )}
      </div>
    </button>
  );
}

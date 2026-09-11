import type { CSSProperties } from "react";
import type { Coordinate } from "./types";

interface ConnectorProps {
  anchor: Coordinate;
  labelPos: Coordinate;
  isHovered: boolean;
  isActive: boolean;
  color?: string;
  delay?: number;
}

export default function Connector({
  anchor,
  labelPos,
  isHovered,
  isActive,
  delay = 0,
}: ConnectorProps) {
  const dx = labelPos.x - anchor.x;

  // Slanted elbow points (Horizontal -> Diagonal -> Horizontal)
  const x1 = anchor.x + dx * 0.45;
  const x2 = anchor.x + dx * 0.75;

  const gradientId =
    `grad-${anchor.x}-${anchor.y}-${labelPos.x}-${labelPos.y}`.replace(
      /\./g,
      "-",
    );

  const strokeWidth = isHovered || isActive ? 0.42 : 0.25;
  const activeColor = "var(--color-gold-primary, #d4af37)";

  const d = `M ${anchor.x} ${anchor.y} H ${x1} L ${x2} ${labelPos.y} H ${labelPos.x}`;

  return (
    <g>
      <defs>
        <linearGradient
          id={gradientId}
          x1={anchor.x}
          y1={anchor.y}
          x2={labelPos.x}
          y2={labelPos.y}
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0%"
            stopColor={isHovered || isActive ? activeColor : "#ffffff"}
            stopOpacity={1.0}
          />
          <stop
            offset="50%"
            stopColor={isHovered || isActive ? activeColor : "#ffffff"}
            stopOpacity={0.55}
          />
          <stop
            offset="100%"
            stopColor={isHovered || isActive ? activeColor : "#ffffff"}
            stopOpacity={0.12}
          />
        </linearGradient>
      </defs>

      <path
        d={d}
        fill="none"
        pathLength={1}
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ "--enter-delay": `${delay}s` } as CSSProperties}
        className="connector-draw transition-all duration-300 ease-out"
      />
    </g>
  );
}

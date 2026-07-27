import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export interface Coordinate {
  x: number;
  y: number;
}

export interface HotspotType {
  id: string;
  label: string;
  anchor: Coordinate;
  labelPos: Coordinate;
  icon: ComponentType<LucideProps>;
  color?: string;
  connectorColor?: string;
  videoFile?: string;
}

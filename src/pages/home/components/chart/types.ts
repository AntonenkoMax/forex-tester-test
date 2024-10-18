import { Bar } from "../bar";

export interface ChartProps {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  bars: Bar[];
}

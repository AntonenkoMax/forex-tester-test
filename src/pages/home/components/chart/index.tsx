import React from "react";
import { Bar } from "../bar";
import { ChartProps } from "./types";

export class Chart extends React.Component<ChartProps> {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  bars: Bar[] = [];

  width: number = 0;
  height: number = 0;
  scaleY: number;
  scaleX: number;
  offsetX: number;
  isDragging: boolean;
  lastX: number;
  zoomFactor: number;

  constructor(props: any) {
    super(props);
    this.ctx = props.ctx;
    this.canvas = props.canvas;
    this.bars = props.bars;
    this.scaleX = 10;
    this.scaleY = this.canvas.height / this.getMaxPriceDiff();
    this.zoomFactor = 1;
    this.offsetX = 0;
    this.isDragging = false;
    this.lastX = 0;

    this.handleZoom = this.handleZoom.bind(this);
    this.startDrag = this.startDrag.bind(this);
    this.stopDrag = this.stopDrag.bind(this);
    this.onDrag = this.onDrag.bind(this);
  }

  // Згенеровано AI
  getMaxPriceDiff(): number {
    const allPrices = this.bars.map((bar) => [bar.high, bar.low]).flat();
    const maxPrice = Math.max(...allPrices);
    const minPrice = Math.min(...allPrices);

    return maxPrice - minPrice;
  }

  // Згенеровано AI

  getMinPrice(): number {
    const allPrices = this.bars.map((bar) => [bar.high, bar.low]).flat();
    return Math.min(...allPrices);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.bars.forEach((bar, index) => {
      const x = index * this.scaleX * this.zoomFactor + this.offsetX;
      const yHigh =
        this.canvas.height - (bar.high - this.getMinPrice()) * this.scaleY;
      const yLow =
        this.canvas.height - (bar.low - this.getMinPrice()) * this.scaleY;
      const yOpen =
        this.canvas.height - (bar.open - this.getMinPrice()) * this.scaleY;
      const yClose =
        this.canvas.height - (bar.close - this.getMinPrice()) * this.scaleY;

      // Жало свічки
      this.ctx.beginPath();
      this.ctx.moveTo(x, yHigh);
      this.ctx.lineTo(x, yLow);
      this.ctx.strokeStyle = "black";
      this.ctx.stroke();

      // Тіло свічки
      this.ctx.beginPath();
      this.ctx.rect(
        x - 2 * this.zoomFactor,
        yOpen,
        4 * this.zoomFactor,
        yClose - yOpen,
      );
      this.ctx.fillStyle = bar.close > bar.open ? "green" : "red";
      this.ctx.fill();
    });
  }

  handleZoom(event: WheelEvent) {
    if (event.deltaY < 0) {
      // Масштабування збільшується
      this.zoomFactor = Math.min(5, (this.zoomFactor += -event.deltaY / 1000));
    } else {
      // Масштабування зменшується
      this.zoomFactor = Math.max(0.2, (this.zoomFactor -= event.deltaY / 1000)); // Не дозволяємо занадто малий масштаб
    }
    this.draw();
  }

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.lastX = event.clientX;
  }

  onDrag(event: MouseEvent) {
    if (this.isDragging) {
      const dx = event.clientX - this.lastX; // Зміщення миші
      this.offsetX += dx; // Змінюємо зсув по X
      this.lastX = event.clientX; // Оновлюємо останню позицію миші
      this.draw();
    }
  }

  stopDrag() {
    this.isDragging = false;
  }
}

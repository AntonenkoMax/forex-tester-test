import React from "react";

import { Flex } from "components";
import { StyledCanvas } from "./styled";

import { Bar } from "./components/bar";
import { ChartData } from "./components/chart-data";

// Клас для побудови графіка
class Chart {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  bars: Bar[];
  width: number;
  height: number;
  scaleY: number;
  scaleX: number;
  offsetX: number;
  isDragging: boolean;
  lastX: number;
  zoomFactor: number;

  constructor(canvasId: string, bars: Bar[]) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d")!;
    this.bars = bars;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    console.log("getMaxPriceDiff", this.getMaxPriceDiff());
    this.scaleY = this.height / this.getMaxPriceDiff(); // масштабування по Y
    this.scaleX = 10; // Відстань між барами
    this.offsetX = 0; // Зсув для панорамування
    this.isDragging = false; // Стан перетягування
    this.lastX = 0; // Остання позиція миші для панорамування
    this.zoomFactor = 1; // Фактор масштабування для масштабування

    // Додаємо обробники подій для прокрутки та перетягування
    this.canvas.addEventListener("wheel", this.handleZoom.bind(this));
    this.canvas.addEventListener("mousedown", this.startDrag.bind(this));
    this.canvas.addEventListener("mousemove", this.onDrag.bind(this));
    this.canvas.addEventListener("mouseup", this.stopDrag.bind(this));
    this.canvas.addEventListener("mouseleave", this.stopDrag.bind(this));
  }

  getMaxPriceDiff(): number {
    const allPrices = this.bars.map((bar) => [bar.high, bar.low]).flat();
    console.log("allPrices", allPrices);
    const maxPrice = Math.max(...allPrices);
    console.log("maxPrice", maxPrice);
    const minPrice = Math.min(...allPrices);
    console.log("minPrice", minPrice);
    console.log("maxPrice - minPrice", maxPrice - minPrice);
    return maxPrice - minPrice;
  }

  getMinPrice(): number {
    const allPrices = this.bars.map((bar) => [bar.high, bar.low]).flat();
    return Math.min(...allPrices);
  }

  handleZoom(event: WheelEvent) {
    console.log(11111);
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

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    const short = [this.bars[0], this.bars[1], this.bars[2], this.bars[3]];

    // this.bars.forEach((bar, index) => {
    short.forEach((bar, index) => {
      const x = index * this.scaleX * this.zoomFactor + this.offsetX; // Враховуємо масштабування і прокрутку
      const yHigh = this.height - (bar.high - this.getMinPrice()) * this.scaleY;
      const yLow = this.height - (bar.low - this.getMinPrice()) * this.scaleY;
      const yOpen = this.height - (bar.open - this.getMinPrice()) * this.scaleY;
      const yClose =
        this.height - (bar.close - this.getMinPrice()) * this.scaleY;

      // console.log("X", x);
      // console.log("yHigh", yHigh);
      // console.log("yLow", yLow);
      // console.log("yOpen", yOpen);
      // console.log("yClose", yClose);

      // Відображаємо тінь свічки
      this.ctx.beginPath();
      this.ctx.moveTo(x, yHigh);
      this.ctx.lineTo(x, yLow);
      this.ctx.strokeStyle = "black";
      this.ctx.stroke();

      // console.log("x, yHigh", x, yHigh);
      // console.log("x, yLow", x, yLow);

      // Відображаємо тіло свічки
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
}

const Home: React.FC = () => {
  const hz = (async () => {
    const data = new ChartData();
    await data.fetchData(
      "https://beta.forextester.com/data/api/Metadata/bars/chunked?Broker=Advanced&Symbol=EURUSD&Timeframe=1&Start=57674&End=59113&UseMessagePack=false",
    );

    const bars = data.getBars();
    const chart = new Chart("myCanvas", bars);
    chart.draw();
  })();

  return (
    <Flex>
      <StyledCanvas width={1600} height={500} id="myCanvas"></StyledCanvas>
    </Flex>
  );
};
export default Home;

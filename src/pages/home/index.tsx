import React from "react";

import { Flex } from "components";

import { Bar } from "./components/bar";
import { StyledCanvas } from "./styled";

class ChartComponent extends React.Component {
  canvasRef: React.RefObject<HTMLCanvasElement>;
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
    this.canvasRef = React.createRef();
    this.scaleX = 10;
    this.scaleY = 0;
    this.offsetX = 0;
    this.zoomFactor = 1;
    this.isDragging = false;
    this.lastX = 0;
  }

  async fetchData(apiUrl: string): Promise<void> {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();

    jsonData[0].Bars.forEach((bar: any) => {
      const barData = new Bar(bar.Time, bar.Open, bar.High, bar.Low, bar.Close);
      this.bars.push(barData);
    });
    // this.draw();
  }

  async componentDidMount() {
    await this.fetchData(
      "https://beta.forextester.com/data/api/Metadata/bars/chunked?Broker=Advanced&Symbol=EURUSD&Timeframe=1&Start=57674&End=59113&UseMessagePack=false",
    );

    const canvas = this.canvasRef.current;
    if (canvas) {
      this.width = canvas.width;
      this.height = canvas.height;
      this.scaleY = canvas.height / this.getMaxPriceDiff();

      canvas.addEventListener("wheel", this.handleZoom.bind(this));
      // canvas.addEventListener("mousedown", this.startDrag.bind(this));
      // canvas.addEventListener("mousemove", this.onDrag.bind(this));
      // canvas.addEventListener("mouseup", this.stopDrag.bind(this));
      // canvas.addEventListener("mouseleave", this.stopDrag.bind(this));
      this.draw();
    }
  }

  getMaxPriceDiff(): number {
    const allPrices = this.bars.map((bar) => [bar.high, bar.low]).flat();
    const maxPrice = Math.max(...allPrices);
    const minPrice = Math.min(...allPrices);

    return maxPrice - minPrice;
  }

  getMinPrice(): number {
    const allPrices = this.bars.map((bar) => [bar.high, bar.low]).flat();
    return Math.min(...allPrices);
  }

  draw() {
    console.log("draw");
    const canvas = this.canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.bars.forEach((bar, index) => {
      const x = index * this.scaleX * this.zoomFactor + this.offsetX;
      const yHigh =
        canvas.height - (bar.high - this.getMinPrice()) * this.scaleY;
      const yLow = canvas.height - (bar.low - this.getMinPrice()) * this.scaleY;
      const yOpen =
        canvas.height - (bar.open - this.getMinPrice()) * this.scaleY;
      const yClose =
        canvas.height - (bar.close - this.getMinPrice()) * this.scaleY;

      // Тінь свічки
      ctx.beginPath();
      ctx.moveTo(x, yHigh);
      ctx.lineTo(x, yLow);
      ctx.strokeStyle = "black";
      ctx.stroke();

      // Тіло свічки
      ctx.beginPath();
      ctx.rect(
        x - 2 * this.zoomFactor,
        yOpen,
        4 * this.zoomFactor,
        yClose - yOpen,
      );
      ctx.fillStyle = bar.close > bar.open ? "green" : "red";
      ctx.fill();
    });
  }

  handleZoom(event: WheelEvent) {
    console.log(11111);
    if (event.deltaY < 0) {
      //   // Масштабування збільшується
      this.zoomFactor = Math.min(5, (this.zoomFactor += -event.deltaY / 1000));
      console.log(22222);
    } else {
      //   // Масштабування зменшується
      this.zoomFactor = Math.max(0.2, (this.zoomFactor -= event.deltaY / 1000)); // Не дозволяємо занадто малий масштаб
      console.log(333);
    }
    this.draw();
  }

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.lastX = event.clientX;
  }

  onDrag(event: MouseEvent) {
    // console.log("123");
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

  render() {
    return (
      <Flex width="100%">
        <StyledCanvas
          ref={this.canvasRef}
          width={1600}
          height={500}
        ></StyledCanvas>
      </Flex>
    );
  }
}

export default ChartComponent;

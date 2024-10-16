export class Bar {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;

  constructor(
    time: number,
    open: number,
    high: number,
    low: number,
    close: number,
  ) {
    this.time = time;
    this.open = open;
    this.high = high;
    this.low = low;
    this.close = close;
  }
}

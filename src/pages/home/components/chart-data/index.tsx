import { Bar } from "../bar";

export class ChartData {
  private data: Bar[] = [];

  async fetchData(apiUrl: string): Promise<void> {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();

    jsonData[0].Bars.forEach((bar: any) => {
      const barData = new Bar(bar.Time, bar.Open, bar.High, bar.Low, bar.Close);
      this.data.push(barData);
    });
  }

  getBars(): Bar[] {
    return this.data;
  }
}

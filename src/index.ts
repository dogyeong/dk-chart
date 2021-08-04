import CandleChart, { CandleChartData } from '@/lib/CandleChart';
import { CandleChartColorOptions } from '@/lib/CandleChart';

export class DKChart {
  public readonly chart: CandleChart;

  constructor($container: HTMLElement, colorOptions?: CandleChartColorOptions) {
    this.chart = new CandleChart({ $container, colorOptions });
  }

  public setData(candles: CandleChartData[]) {
    this.chart.setCandles(candles);
  }

  public toggleGraphType() {
    this.chart.toggleGraphType();
  }
}

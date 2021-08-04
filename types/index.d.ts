declare module 'dk-chart' {
  export class DKChart {
    constructor($container: HTMLElement, colorOptions?: CandleChartColorOptions);
    setData(candles: CandleChartData[]): void;
    toggleGraphType(): void;
  }

  export type CandleChartColorOptions = GraphColorOptions & AxisColorOptions & LineColorOptions;

  export interface GraphColorOptions {
    bgColor: string;
    redColor: string;
    blueColor: string;
    lineStrokeColor: string;
    lineFillColor: string;
  }

  export interface LineColorOptions {
    graphLineColor: string;
  }

  export interface AxisColorOptions {
    bgColor: string;
    textColor: string;
  }

  export interface CandleChartData {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }
}

import CandleChart, { CandleChartColorOptions } from '@/CandleChart';

export type createChart = ($container: HTMLElement, colorOptions?: CandleChartColorOptions) => CandleChart;

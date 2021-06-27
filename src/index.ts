import CandleChart from '@/CandleChart';
import { CandleChartColorOptions } from '@/CandleChart';

export const createChart = ($container: HTMLElement, colorOptions?: CandleChartColorOptions) => {
  return new CandleChart({ $container, colorOptions });
};

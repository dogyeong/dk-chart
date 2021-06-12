import CandleChart from '@/components/CandleChart';
import { CandleChartColorOptions } from '@/components/CandleChart';

export const createChart = ($container: HTMLElement, colorOptions?: CandleChartColorOptions) => {
  return new CandleChart({ $container, colorOptions });
};

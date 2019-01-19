import * as React from 'react';
export interface IIterationChartProps {
  data: Array<{
    x: number;
    y1: number;
    y2?: number;
  }>;
  titleMap: { y1: string; y2?: string };
  padding?: [number, number, number, number];
  height?: number;
  style?: React.CSSProperties;
}

export default class IterationChart extends React.Component<IIterationChartProps, any> {}

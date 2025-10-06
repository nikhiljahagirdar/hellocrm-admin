import React from 'react';
import dynamic from 'next/dynamic';
const ReactECharts = dynamic(() => import('echarts-for-react'), { ssr: false });

interface EchartsComponentProps {
  chartOptions: any;
  chartSeries: any;
  height?: string | number;
  width?: string | number;
  mainClass?: string;
  id?: string;
}

const SpkEcharts: React.FC<EchartsComponentProps> = ({ chartOptions, chartSeries, mainClass, height, width, id }) => {

  return (
    <ReactECharts option={{ ...chartOptions, series: chartSeries }} style={{ height, width }} key={id} className={mainClass} />
  );

};

export default SpkEcharts;

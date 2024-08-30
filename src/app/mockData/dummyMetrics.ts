import { metricsDataType } from '../customTypes/dummyDataTypes';

function generateMetricsData(): metricsDataType[] {
  let metricsData: metricsDataType[] = [];
  for (let i = 0; i < 30; i++) {
    metricsData.push({
      title: `Dimension ${i} P Value`,
      value: Math.random().toFixed(2)
    });
  }
  return metricsData;
}

export { generateMetricsData };

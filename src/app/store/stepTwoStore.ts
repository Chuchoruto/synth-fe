import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type {} from '@redux-devtools/extension'; // required for devtools typing

// internal imorts:
import type { metricsDataType } from '../customTypes/dummyDataTypes';
import { generateMetricsData } from '../mockData/dummyMetrics';

interface StepTwoStoreState {
  dummyData: metricsDataType[];
  setDummyData: (newData: metricsDataType[]) => void;
}

const useStepTwoStore = create<StepTwoStoreState>()(
  devtools(
    persist(
      devtools((set) => ({
        dummyData: generateMetricsData(),
        setDummyData: (newData) => set({ dummyData: newData })
      })),
      {
        name: 'stepTwo-store'
      }
    )
  )
);

export default useStepTwoStore;

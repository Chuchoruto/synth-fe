import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type {} from '@redux-devtools/extension'; // required for devtools typing

interface StepTwoStoreState {}

const useStepOneStore = create<StepTwoStoreState>()(
  devtools(
    persist(
      devtools((set) => ({})),
      {
        name: 'stepTwo-store'
      }
    )
  )
);

export default useStepOneStore;

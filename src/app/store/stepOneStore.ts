import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type {} from '@redux-devtools/extension'; // required for devtools typing

interface StepOneStoreState {
  stepOneDone: boolean;
}

const useStepOneStore = create<StepOneStoreState>()(
  devtools(
    persist(
      devtools((set) => ({
        stepOneDone: false,
        setStepOneDone: (done: boolean) => set({ stepOneDone: done })
      })),
      {
        name: 'stepOne-store'
      }
    )
  )
);

export default useStepOneStore;

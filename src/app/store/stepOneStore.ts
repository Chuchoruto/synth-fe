import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type {} from '@redux-devtools/extension'; // required for devtools typing

interface StepOneStoreState {
  stepOneDone: boolean;
  file: File | null;
  setFile: (file: File | null) => void;
  error: string;
  setError: (error: string) => void;
  message: string;
  setMessage: (message: string) => void;
}

const useStepOneStore = create<StepOneStoreState>()(
  devtools(
    persist(
      devtools((set) => ({
        stepOneDone: false,
        setStepOneDone: (done: boolean) => set({ stepOneDone: done }),
        file: null,
        setFile: (file) => set({ file }),
        error: '',
        setError: (error) => set({ error }),
        message: '',
        setMessage: (message) => set({ message })
      })),
      {
        name: 'stepOne-store'
      }
    )
  )
);

export default useStepOneStore;

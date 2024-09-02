import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type {} from '@redux-devtools/extension'; // required for devtools typing

interface PageStoreState {
  anchorElNav: null | HTMLElement;
  setAnchorElNav: (curr_elem: HTMLElement | null) => void;
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
}

const usePageOneStore = create<PageStoreState>()(
  devtools(
    persist(
      (set) => ({
        anchorElNav: null,
        setAnchorElNav: (curr_elem) => set({ anchorElNav: curr_elem }),
        activeStep: 0,
        handleBack: () =>
          set((state) => {
            return { activeStep: state.activeStep - 1 };
          }),
        handleNext: () => set((state) => ({ activeStep: state.activeStep + 1 })),
      }),
      {
        name: 'pageOne-store',
      }
    )
  )
);

export default usePageOneStore;

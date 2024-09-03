import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface StepOneStoreState {
  stepOneDone: boolean;
  file: File | null;
  filePath: string | null;
  originalFilename: string | null; // Add this line
  setFile: (file: File | null) => void;
  setFilePath: (path: string | null) => void;
  setOriginalFilename: (filename: string | null) => void; // Add this line
  error: string;
  setError: (error: string) => void;
  message: string;
  setMessage: (message: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  currLoadingIndex: number;
  setCurrLoadingIndex: (rotatingLen: number) => void;
}

const useStepOneStore = create<StepOneStoreState>()(
  devtools(
    persist(
      (set) => ({
        stepOneDone: false,
        file: null,
        filePath: null,
        originalFilename: null, // Add this line
        setFile: (file) => set({ file }),
        setFilePath: (path) => set({ filePath: path }),
        setOriginalFilename: (filename) => set({ originalFilename: filename }), // Add this line
        error: '',
        setError: (error) => set({ error }),
        message: '',
        setMessage: (message) => set({ message }),
        loading: false,
        setLoading: (loading) => set({ loading }),
        currLoadingIndex: 0,
        setCurrLoadingIndex: (rotatingLen) =>
          set((state) => ({
            currLoadingIndex: (state.currLoadingIndex + 1) % rotatingLen,
          })),
      }),
      {
        name: 'stepOne-store',
      }
    )
  )
);

export default useStepOneStore;

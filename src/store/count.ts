import create from "zustand";

interface ICount {
  count: number;
  increase: () => void;
}

export const counterStore = create<ICount>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 2 })),
}));

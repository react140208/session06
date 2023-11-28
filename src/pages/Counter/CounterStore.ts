import { create } from "zustand";

interface Store {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementBy: (val: number) => void;
}

export const useCounterStore = create<Store>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set((state) => ({ count: 0 })),
  incrementBy: (val: number) => set((state) => ({ count: state.count + val })),
}));

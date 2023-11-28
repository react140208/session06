import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    incrementByX: (
      state,
      action: PayloadAction<{ value: number; xyz: string }>
    ) => {
      state.value += action.payload.value;
    },
  },
});

export const { increment, decrement, reset, incrementBy, incrementByX } =
  counterSlice.actions;
export default counterSlice.reducer;

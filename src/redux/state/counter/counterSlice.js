import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value <= 0 ? (state.value = 0) : (state.value -= 1);
    },
    reset: (state) => {
      state.value = 0;
    },
    setCustom: (state, action) => {
      state.value = Number(action.payload);
    },
  },
});

export const { increment, decrement, reset, setCustom } = counterSlice.actions;
export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const hamBurgerSlice = createSlice({
  name: "hamBurger",
  initialState: {
    hamBurgerState: true,
  },
  reducers: {
    hamBurgerState: (state) => {
      state.hamBurgerState = state.hamBurgerState
        ? (state.hamBurgerState = false)
        : (state.hamBurgerState = true);
    },
  },
});

export const { hamBurgerState } = hamBurgerSlice.actions;
export default hamBurgerSlice.reducer;

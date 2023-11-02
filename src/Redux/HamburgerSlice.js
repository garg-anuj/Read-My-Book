import { createSlice } from "@reduxjs/toolkit";

export const hamBurgerSlice = createSlice({
  name: "hamBurger",
  initialState: {
    hamBurgerState: true,
  },
  reducers: {
    hamBurgerStateBurger: (state) => {
      state.hamBurgerState = state.hamBurgerState
        ? (state.hamBurgerState = false)
        : (state.hamBurgerState = true);
    },
  },
});

export const { hamBurgerStateBurger } = hamBurgerSlice.actions;
export default hamBurgerSlice.reducer;

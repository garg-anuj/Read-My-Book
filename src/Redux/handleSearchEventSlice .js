import { createSlice } from "@reduxjs/toolkit";

export const handleSearchEventSlice = createSlice({
  name: "handleSearchEvent",
  initialState: { getValue: "" },
  reducers: {
    setSearchedValue: (state, action) => {
      state.getValue = action.payload;
      // console.log("reduxEvent",state,action.payload);
    },
  },
});

export const { setSearchedValue } = handleSearchEventSlice.actions;
export default handleSearchEventSlice.reducer;

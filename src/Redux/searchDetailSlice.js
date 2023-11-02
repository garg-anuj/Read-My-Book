import { createSlice } from "@reduxjs/toolkit";

export const searchDetailSlice = createSlice({
  name: "searchDetail",
  initialState: { searchInput: "" },
  reducers: {
    setSearchedValue: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearchedValue } = searchDetailSlice.actions;

export default searchDetailSlice.reducer;

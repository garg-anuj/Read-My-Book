import { createSlice } from "@reduxjs/toolkit";

export const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: { searchTerm: "" },
  reducers: {
    setSearchedTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchedTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;

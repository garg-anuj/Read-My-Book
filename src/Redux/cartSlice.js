import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartBooks: [
      {
        author: "author",
        title: "thisff",
        year: "that",
        id: 728,
      },
      {
        author: "Baren Buffet",
        title: "tyred",
        year: "tffd5559",
        id: 736,
      },
    ],
  },
  reducers: {
    addBookToCart: (state, action) => {
      state.cartBooks.push(action.payload);
    },

    deleteBookFromCart: (state, action) => {
      state.cartBooks = state.cartBooks.filter((ele) => {
        return !(ele.title === action.payload.title);
      });
    },
  },
});

export const { addBookToCart, deleteBookFromCart } = cartSlice.actions;
export default cartSlice.reducer;

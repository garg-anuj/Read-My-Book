import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice.js";
import hamBurgerSlice from "./hamburgerSlice.js";
import searchedCacheSlice from "./searchedCacheSlice.js";
import searchTermSlice from "./searchTermSlice.js";

export const store = configureStore({
  reducer: {
    hamBurger: hamBurgerSlice,
    searchCache: searchedCacheSlice,
    cartBooks: cartSlice,
    searchTerm: searchTermSlice,
  },
});

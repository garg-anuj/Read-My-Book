import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice.js";
import hamBurgerSlice from "./hamburgerSlice.js";
import searchedCacheSlice from "./searchedCacheSlice.js";
import searchDetailSlice from "./searchDetailSlice.js";

export const store = configureStore({
  reducer: {
    hamBurger: hamBurgerSlice,
    searchCache: searchedCacheSlice,
    cartBooks: cartSlice,
    searchDetail: searchDetailSlice,
  },
});

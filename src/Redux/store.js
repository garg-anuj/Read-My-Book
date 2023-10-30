import { configureStore } from "@reduxjs/toolkit";
import HamburgerSlice from "./HamburgerSlice.js";
import searchedCacheSlice from "./searchedCacheSlice.js";
import AddToCartSlice from "./AddToCartSlice.js";
import handleSearchEventSlice from "./handleSearchEventSlice .js";

export const store = configureStore({
  reducer: {
    hamBurger: HamburgerSlice,
    searchCache: searchedCacheSlice,
    cartItems: AddToCartSlice,
    handleSearchEvent: handleSearchEventSlice,
    // FavouriteItems:FavouriteSlice
  },
});

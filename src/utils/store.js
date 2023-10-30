import { configureStore } from "@reduxjs/toolkit";
import HamburgerSlice from "./HamburgerSlice.js";
import searchedCacheSlice from "./searchedCacheSlice.js";
import FavouriteSlice from "./FavouriteSlice.js";

export const store = configureStore({
    reducer:{
        hamBurger:HamburgerSlice,
        searchCache:searchedCacheSlice,
        favouriteItems:FavouriteSlice
        // FavouriteItems:FavouriteSlice
  
    }
});




import { createSlice } from "@reduxjs/toolkit";


export const searchedCacheSlice = createSlice({
    name:"searchCache",
    initialState:{},
    reducers:{
        addSearchedKeyResult:(state,action)=>{
            state = Object.assign(state,action.payload);
        }
    }
})


export const {addSearchedKeyResult} = searchedCacheSlice.actions;
export default searchedCacheSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

export const hamBurgerSlice = createSlice({
    name:'hamBurger',
    initialState:{
        toggleHam:true,
    },
    reducers:{
        hamBurgerBtn:(state)=>{
            state.toggleHam = state.toggleHam?
                state.toggleHam =false
                :state.toggleHam =true;
            // console.log('sliceRedux',state.toggleHam)    
            
        }
    }
})


export const {hamBurgerBtn} = hamBurgerSlice.actions;
export default hamBurgerSlice.reducer;
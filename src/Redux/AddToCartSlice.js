import { createSlice } from "@reduxjs/toolkit";

export const AddToCartSlice = createSlice({
    name:'cartItems',
    initialState:{
        cartList:[
            {
                "author": "author",
                "country": "country",
                "language": "language",
                "link": "sss",
                "pages": "1000",
                "title": "thisff",
                "year": "that",
                "id": 728,
                "thumbnails":"https://source.unsplash.com/1600x900/?Book"
            },
            {
                "author": "Baren Buffet",
                "country": "America",
                "language": "rdgrdsa",
                "link": "ggrfds",
                "pages": "9087",
                "title": "tyred",
                "year": "tffd5559",
                "id": 736,
                "thumbnails":"https://source.unsplash.com/1600x900/?Book"
            }
        ]
    },
    reducers:{
        addCart:(state,action)=>{
           state.cartList.push(action.payload);
        },
        
        delCart:(state,action)=>{
            state.cartList = state.cartList.filter((ele)=>{
                 return !(ele.title === action.payload.title)
                });
        }
    }
})


export const {addCart,delCart} = AddToCartSlice.actions;
export default AddToCartSlice.reducer;
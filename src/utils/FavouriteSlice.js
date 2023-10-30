import { createSlice } from "@reduxjs/toolkit";

export const FavouriteSlice = createSlice({
    name:'favouriteItems',
    initialState:{
        favourtiteList:[
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
        addFavourites:(state,action)=>{
           state.favourtiteList.push(action.payload);
        },
        
        delFavourites:(state,action)=>{
            state.favourtiteList = state.favourtiteList.filter((ele)=>{
                 return !(ele.title === action.payload.title)
                });
        }
    }
})


export const {addFavourites,delFavourites} = FavouriteSlice.actions;
export default FavouriteSlice.reducer;
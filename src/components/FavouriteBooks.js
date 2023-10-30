import { useSelector } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {delFavourites } from "../utils/FavouriteSlice";

const FavouriteBooks = ()=>{
    const favouriteItemsData= useSelector(state=>state?.favouriteItems?.favourtiteList);
    const Dispatch = useDispatch();
    return <>
    <div className="video-container">
    <h1>Favorite Books</h1>
            <div className="card-container">
                {favouriteItemsData?.map((card,index)=>{
            
                    const {title,bookId} = card;
                    const data = {...card,actionTypes:() => Dispatch(delFavourites({title:title}))}
                    
                    return (
                        <Link to={"/books?v="+bookId} key={index}>
                            <Card data={data} 
                            // onClick={}
                            // handleClickedButton={handleClickedButton}
                            />
                        </Link>
                        )

                })}
            </div>
        </div>
        {/* dump Compoonent */}
    </>
}


export default FavouriteBooks;
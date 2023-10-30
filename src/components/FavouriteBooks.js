import { useSelector } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {delCart } from "../Redux/AddToCartSlice";

const FavouriteBooks = ()=>{
    const cartItemData= useSelector(state=>state?.cartItems?.cartList);
    const dispatch = useDispatch();
    return <>
    <div className="video-container">
    <h1>Favorite Books</h1>
            <div className="card-container">
                {cartItemData?.map((card,index)=>{
            
                    const {title,bookId} = card;
                    const data = {...card,actionTypes:() => dispatch(delCart({title:title}))}
                    
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
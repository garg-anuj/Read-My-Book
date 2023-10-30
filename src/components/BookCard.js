import React from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { addFavourites } from "../utils/FavouriteSlice";
import { Link } from "react-router-dom";
import { IMG_URL } from "../utils/constantFile";


export default function BookCard({book}) {
    const dispatch = useDispatch()
    const data = {
        title:book?.title,
        author:book?.author,
        bookId:book?.id,
        thumbnails:IMG_URL,
        actionTypes: () => dispatch(addFavourites({...book,thumbnails:IMG_URL})),
    }
  return (
    // updateBooks
    <Link to={"/addNewBooks"} state={book}>
      <Card data={data}  />
    </Link>
  );
}



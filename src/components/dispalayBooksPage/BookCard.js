import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../../Redux/AddToCartSlice";

import React from "react";

import Card from "./Card";

import { IMG_URL } from "../../utils/constantFile";

export default function BookCard({ book }) {
  const dispatch = useDispatch();
  const data = {
    title: book?.title,
    author: book?.author,
    bookId: book?.id,
    thumbnails: book?.link,
    actionTypes: () => dispatch(addCart({ ...book, thumbnails: IMG_URL })),
  };
  return (
    <Link to={"/addNewBooks"} state={book}>
      <Card data={data} />
    </Link>
  );
}

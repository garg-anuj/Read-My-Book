import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Card from "./Card";
import { addBookToCart } from "../../redux/cartSlice";

export default function BookCard({ book }) {
  const dispatch = useDispatch();
  const data = {
    title: book?.title,
    author: book?.author,
    bookId: book?.id,
    link: book?.link,
    actionTypes: () =>
      dispatch(
        addBookToCart({
          ...book,
        })
      ),
  };
  return (
    <Link to={"/addNewBooks"} state={book}>
      <Card data={data} />
    </Link>
  );
}

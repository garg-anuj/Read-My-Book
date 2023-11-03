import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Card from "./Card";
import { addBookToCart } from "../../redux/cartSlice";

export default function BookCard({ book }) {
  const dispatch = useDispatch();

  return (
    <Link to={"/addNewBooks"} state={book}>
      <Card
        data={{
          ...book,
          actionTypes: () => dispatch(addBookToCart({ ...book })),
        }}
      />
    </Link>
  );
}

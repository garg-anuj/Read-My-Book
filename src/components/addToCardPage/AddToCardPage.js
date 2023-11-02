import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { deleteBookFromCart } from "../../redux/cartSlice";

import Card from "../booksPage/Card";

const AddToCardPage = () => {
  const cartItemData = useSelector((state) => state?.cartBooks?.cartBooks);
  const dispatch = useDispatch();
  return (
    <>
      <div className="video-container">
        <h1>Favorite Books</h1>
        <div className="card-container">
          {cartItemData?.map((card) => {
            const { title, id } = card;
            const data = {
              ...card,
              actionTypes: () => dispatch(deleteBookFromCart({ title: title })),
            };

            return (
              <Link to={"/addToCart"} key={id}>
                <Card data={data} />
              </Link>
            );
          })}
        </div>
      </div>
      {/* dump Compoonent */}
    </>
  );
};

export default AddToCardPage;

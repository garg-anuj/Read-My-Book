import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { delCart } from "../../Redux/AddToCartSlice";

import Card from "../dispalayBooksPage/Card";

const FavouriteBooks = () => {
  const cartItemData = useSelector((state) => state?.cartItems?.cartList);
  const dispatch = useDispatch();
  return (
    <>
      <div className="video-container">
        <h1>Favorite Books</h1>
        <div className="card-container">
          {cartItemData?.map((card) => {
            const { title, bookId } = card;
            const data = {
              ...card,
              actionTypes: () => dispatch(delCart({ title: title })),
            };

            return (
              <Link to={"/AddtoCart"} key={bookId}>
                <Card
                  data={data}
                  // onClick={}
                  // handleClickedButton={handleClickedButton}
                />
              </Link>
            );
          })}
        </div>
      </div>
      {/* dump Compoonent */}
    </>
  );
};

export default FavouriteBooks;

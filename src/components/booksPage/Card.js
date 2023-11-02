import { useLocation } from "react-router-dom";

import { handleImageLinkError } from "../../services";
import { IMG_URL } from "../../constants/urls";

const Card = ({ data }) => {
  const { pathname } = useLocation();

  // useEffect(() => {
  //   const currentUrl = window.location.href;
  //   console.log("card Render");
  //   currentUrl.includes("AddtoCart");
  // }, []);

  const { link, title, author, actionTypes } = data;

  return (
    <>
      <div className="video-card">
        <div>
          <img src={IMG_URL + link} alt="Book" onError={handleImageLinkError} />
          {/* <button
            className="favourite"
            onClick={(e) => {
              e.preventDefault();
                            actionTypes();
            }}
          >
            <i className="bi bi-heart-fill"></i>
          </button> */}
        </div>

        <ul>
          <li>
            <h1> The Total Money {title}</h1>
            <p>Benjamin {author}</p>
          </li>
          <li>
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                actionTypes();
              }}
            >
              {pathname === "/addToCart" ? "Remove" : "Add"}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Card;

import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

import { handleImageLinkError } from "../../utils/helper";

const Card = ({ data }) => {
  const { pathname } = useLocation();

  // useEffect(() => {
  //   const currentUrl = window.location.href;
  //   console.log("card Render");
  //   currentUrl.includes("AddtoCart");
  // }, []);

  const { thumbnails, title, author, actionTypes } = data;

  return (
    <>
      <div className="video-card">
        <div>
          <img src={thumbnails} alt="img_src" onError={handleImageLinkError} />
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
              {pathname === "/AddtoCart" ? "Remove" : "Add"}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Card;

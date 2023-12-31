import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

import { hamBurgerState } from "../redux/hamburgerSlice";

const SideBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sideBar">
      <ul onClick={() => dispatch(hamBurgerState(false))}>
        <Link to={"/"}>
          <div>
            {" "}
            <i className="bi bi-house-door-fill"></i> Home
          </div>
        </Link>
        <Link to={"/addNewBooks"}>
          <div>
            {" "}
            <i className="bi bi-bookmark-plus"></i> Add Books
          </div>
        </Link>
        <Link to={"/tabularPage"}>
          <div>
            {" "}
            <i className="bi bi-table"></i> Table Data
          </div>
        </Link>
        <Link to={"/addToCart"}>
          <div>
            {" "}
            <i className="bi bi-bag"></i> Shoped Cart
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;

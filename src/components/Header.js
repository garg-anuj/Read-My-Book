import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { hamBurgerBtn } from "../Redux/HamburgerSlice";
import useSearchSuggestions from "../customHooks/useSearchSuggestions.js";
import { setSearchedValue } from "../Redux/handleSearchEventSlice ";

const Header = () => {
  const [searchedData, setInputText, inputText] = useSearchSuggestions();
  const [isSuggestionVisible, setSuggestionVisible] = useState(false);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state?.cartItems?.cartList?.length);

  function handleEvent() {
    dispatch(hamBurgerBtn());
  }

  return (
    <header className="header">
      <ul>
        <li>
          <i className="bi bi-list" onClick={handleEvent}></i>
        </li>
        <Link to="/">
          <li>
            <i className="bi bi-book-half" />
            ReadMyBook
          </li>
        </Link>
      </ul>

      {/* <Search/> */}
      <ul
        onMouseOver={() => setSuggestionVisible(true)}
        onMouseLeave={() => setSuggestionVisible(false)}
        // onBlur={()=>setSuggestionVisible(false)}
      >
        <input
          placeholder="Live Search Suggestion"
          value={inputText}
          onChange={(event) => {
            dispatch(setSearchedValue(event.target.value));
            setInputText(event.target.value);
          }}
          onFocus={() => setSuggestionVisible(true)}
        />

        <div>
          <i className="bi bi-search"></i>
        </div>

        <ul
          className={
            isSuggestionVisible
              ? "suggestionBox"
              : "suggestionBox suggestionBox_DeActive"
          }
        >
          {searchedData?.map((sugg, i) => (
            <h1
              onClick={() => {
                setInputText(sugg.title);
                // navigate("/searchResult?v="+sugg)
              }}
              key={sugg.id}
            >
              {sugg.title}
            </h1>
          ))}

          {/* <Link to={"/searchResult?v="+sugg} key={`suggestion${i}`}> <h1  onClick={()=>setInputText(sugg)}>{sugg}</h1></Link>)} */}
        </ul>
      </ul>

      <ul>
        <li>
          <Link to={"/AddtoCart"}>
            <span>{cartCount}</span>
            <i className="bi bi-cart"></i>
          </Link>
        </li>
        {/* <li><i className="bi bi-suit-heart-fill"></i></li> */}
        {/* <li><i className="bi bi-person-circle"></i></li> */}
      </ul>
    </header>
  );
};

export default Header;

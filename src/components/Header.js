import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

import { hamBurgerState } from "../redux/hamburgerSlice";
import { setSearchedTerm } from "../redux/searchTermSlice";

import useSearchSuggestions from "../customHooks/useSearchSuggestions";

const Header = () => {
  const [books, searchTerm] = useSearchSuggestions();
  const [isSuggestionVisible, setSuggestionVisible] = useState(true);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state?.cartBooks?.cartBooks?.length);

  function handleEvent() {
    dispatch(hamBurgerState());
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

      <ul
        onMouseOver={() => setSuggestionVisible(true)}
        onMouseLeave={() => setSuggestionVisible(false)}
      >
        <input
          placeholder="Live Search Suggestion"
          value={searchTerm}
          onChange={(event) => {
            dispatch(setSearchedTerm(event.target.value));
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
              : "suggestionBox suggestionBox-hidden"
          }
        >
          {books?.map((suggestion) => (
            <li
              className="suggestionBox-list"
              onClick={() => {
                setSearchedTerm(suggestion.title);
                // navigate("/searchResult?v="+suggestion)
              }}
              key={suggestion.id}
            >
              {suggestion.title}
            </li>
          ))}

          {/* <Link to={"/searchResult?v="+suggestion} key={`suggestion${i}`}> <h1  onClick={()=>setInputText(suggestion)}>{suggestion}</h1></Link>)} */}
        </ul>
      </ul>

      <ul>
        <li>
          <Link to={"/addToCart"}>
            <span>{cartCount}</span>
            <i className="bi bi-cart"></i>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

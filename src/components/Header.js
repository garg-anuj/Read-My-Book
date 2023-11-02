import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

import { hamBurgerStateBurger } from "../redux/hamburgerSlice";
import { setSearchedValue } from "../redux/searchDetailSlice";

import useSearchSuggestions from "../customHooks/useSearchSuggestions";

const Header = () => {
  const [books, searchText, setSearchText] = useSearchSuggestions();
  const [isSuggestionVisible, setSuggestionVisible] = useState(true);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state?.cartBooks?.cartBooks?.length);

  function handleEvent() {
    dispatch(hamBurgerStateBurger());
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
          value={searchText}
          onChange={(event) => {
            dispatch(setSearchedValue(event.target.value));
            setSearchText(event.target.value);
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
          {books?.map((suggestion) => (
            <h1
              onClick={() => {
                setSearchText(suggestion.title);
                // navigate("/searchResult?v="+suggestion)
              }}
              key={suggestion.id}
            >
              {suggestion.title}
            </h1>
          ))}

          {/* <Link to={"/searchResult?v="+suggestion} key={`suggestion${i}`}> <h1  onClick={()=>setInputText(suggestion)}>{suggestion}</h1></Link>)} */}
        </ul>
      </ul>

      <ul>
        <li>
          <Link to={"/AddtoCart"}>
            <span>{cartCount}</span>
            <i className="bi bi-cart"></i>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

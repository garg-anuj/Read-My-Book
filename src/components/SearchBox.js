import React from "react";
import { btnStyle } from "../constants/styles";

const SearchBox = ({ filtration }) => {
  // function handleInputEvent(e){
  //   dispatch(setSearchedValue(e.target.value))
  // }

  return (
    <div className="search-container">
      {/* <input
        onChange={handleInputEvent}
        placeholder="Live Search List "
        style={inputStyle}
      /> */}
      <button style={btnStyle} onClick={() => filtration("DESC")}>
        DESC
      </button>
      <button style={btnStyle} onClick={() => filtration("ASC")}>
        ASC
      </button>
    </div>
  );
};

export default SearchBox;

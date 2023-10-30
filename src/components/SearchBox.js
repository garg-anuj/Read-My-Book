import React from 'react';
import {btnStyle, inputStyle } from "../utils/constantFile";

const SearchBox = ({ handleInputEvent, filtration}) => {
  return (
    <div className="search-container">
      <input
        placeholder="Search"
        onChange={handleInputEvent}
        style={inputStyle}
      />
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

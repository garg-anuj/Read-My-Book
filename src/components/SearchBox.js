import React from 'react';
import {btnStyle, inputStyle } from "../utils/constantFile";
import { useDispatch } from "react-redux";
import { setSearchedValue } from '../Redux/handleSearchEventSlice ';
// import {}

const SearchBox = ({filtration}) => {
  const dispatch = useDispatch();
  function handleInputEvent(e){
    dispatch(setSearchedValue(e.target.value))
  }
  
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

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addSearchedKeyResult } from "../redux/searchedCacheSlice.js";
import { getMethod } from "../services.js";
import { SEARCH_URL } from "../constants/urls";

const useSearchSuggestions = () => {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState([]);
  const booksByName = useSelector((state) => state.searchCache);
  const dispatch = useDispatch();

  useEffect(() => {
    // Added debounce concepts
    const apiAction = setTimeout(() => {
      if (booksByName[searchText]) {
        console.log("Api not called Data From Redux");
        setBooks(booksByName[searchText]);
      } else {
        console.log("Api Data called");
        getMethod(SEARCH_URL + searchText, (apiData) => {
          setBooks(apiData?.data);
          dispatch(addSearchedKeyResult({ [searchText]: apiData?.data }));
        });
      }
    }, 300);

    return () => {
      clearTimeout(apiAction);
    };
  }, [searchText, booksByName, dispatch]);

  return [books, searchText, setSearchText];
};

export default useSearchSuggestions;

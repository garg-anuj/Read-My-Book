import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addSearchedKeyResult } from "../redux/searchedCacheSlice.js";
import { getMethod } from "../services.js";
import { SEARCH_URL } from "../constants/urls";

const useSearchSuggestions = () => {
  const dispatch = useDispatch();

  const [books, setBooks] = useState([]);

  const booksByName = useSelector((state) => state?.searchCache);
  const searchTerm = useSelector((state) => state?.searchTerm?.searchTerm);

  useEffect(() => {
    // Added debounce concepts
    const apiAction = setTimeout(() => {
      if (booksByName[searchTerm]) {
        setBooks(booksByName[searchTerm]);
      } else {
        getMethod(SEARCH_URL + searchTerm).then((apiData) => {
          setBooks(apiData?.data);
          dispatch(addSearchedKeyResult({ [searchTerm]: apiData?.data }));
        });
      }
    }, 300);

    return () => {
      clearTimeout(apiAction);
    };
  }, [searchTerm, booksByName, dispatch]);

  return [books, searchTerm];
};

export default useSearchSuggestions;

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSearchedKeyResult } from "../Redux/searchedCacheSlice.js";
import { axiosFetchFunction } from "../utils/helper.js";
import { SEARCH_URL } from "../utils/constantFile.js";

let count = 0;

const useSearchSuggestions = () => {
  const [inputText, setInputText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const searchedCache = useSelector((state) => state.searchCache);
  const dispatch = useDispatch();

  useEffect(() => {
    count = count + 1;

    let apiAction = setTimeout(() => {
      if (searchedCache[inputText]) {
        console.log("Api not called Data From Redux");
        setSearchData(searchedCache[inputText]);
      } else {
        console.log("Api Data called");
        axiosFetchFunction(SEARCH_URL + inputText, (apiData) => {
          setSearchData(apiData?.data);
          console.log(apiData?.data);

          dispatch(addSearchedKeyResult({ [inputText]: apiData?.data }));
        });
      }
    }, 300);

    console.log("render", count);

    return () => {
      clearTimeout(apiAction);
    };
  }, [inputText, searchedCache, dispatch]);

  return [searchData, setInputText, inputText];
};

export default useSearchSuggestions;

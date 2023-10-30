import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSearchedKeyResult } from "../Redux/searchedCacheSlice.js";
import { axiosFetchFunction } from "../utils/helper.js";
import { SEARCH_URL } from "../utils/constantFile.js";

const useSearchSuggestions = () => {
  const [inputText, setInputText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const searchedCache = useSelector((state) => state.searchCache);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let apiAction = setTimeout(() => {
      setCount(count + 1);
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

    return () => {
      clearTimeout(apiAction);
    };
  }, [inputText, searchedCache, dispatch, count]);

  console.log("render", count);

  return [searchData, setInputText, inputText, count];
};

export default useSearchSuggestions;

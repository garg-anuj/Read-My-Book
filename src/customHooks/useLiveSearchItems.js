import { useSelector } from "react-redux";
import { useEffect } from "react";

import { SEARCH_URL } from "../constants/urls";
import { getMethod } from "../services";

const useLiveSearchItems = (cb) => {
  const searchValue = useSelector((state) => state?.searchTerm?.searchTerm);

  useEffect(() => {
    if (searchValue !== "") {
      getMethod(SEARCH_URL + searchValue).then((res) => cb(res));
    }
  }, [searchValue, cb]);
};

export default useLiveSearchItems;

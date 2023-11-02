import { useCallback, useEffect, useState } from "react";

import BookCard from "./BookCard";
import Pagination from "../Pagination";
import SearchBox from "../SearchBox";

import useLiveSearchItems from "../../customHooks/useLiveSearchItems";
import { getMethod } from "../../services";

import { API_URL, PAGINATION_URL, FILTRATION_URL } from "../../constants/urls";

const BooksCard = () => {
  const [displayBooks, setDisplayBooks] = useState();

  useLiveSearchItems(setDisplayBooks);

  function fetchData(url) {
    getMethod(url).then(setDisplayBooks);
  }

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  function paginationButton(pageNo) {
    fetchData(PAGINATION_URL + pageNo);
  }

  const filtration = useCallback((filterType) => {
    fetchData(FILTRATION_URL + filterType);
  }, []);

  return (
    <div className="video-container">
      <Pagination
        paginationData={Array.from({
          length: displayBooks?.pagination?.totalPages,
        })}
        paginationButton={paginationButton}
      />

      <SearchBox filtration={filtration} />

      <div className="card-container">
        {displayBooks?.data?.map((card) => {
          return <BookCard key={card.id} book={card} />;
        })}
      </div>
    </div>
  );
};

export default BooksCard;

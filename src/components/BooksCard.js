import { useEffect, useState } from "react";
import { axiosFetchFunction } from "../utils/helper";
import BookCard from "./BookCard";
import { API_URL, PAGINATION_URL, FILTRATION_URL } from "../utils/constantFile";
import Pagination from "./Pagination";
import SearchBox from "./SearchBox";
import useLiveSearchItems from "../customHooks/useLiveSearchItems";

const BooksCard = () => {
  const [displayBooks, setDisplayBooks] = useState();
  // const getLiveSearchedData =
  useLiveSearchItems(setDisplayBooks);

  function fetchData(URL) {
    axiosFetchFunction(URL, (apiData) => setDisplayBooks(apiData));
  }

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  function paginationButton(pageNo) {
    fetchData(PAGINATION_URL + pageNo);
  }

  function filtration(filterType) {
    // filterType = (filterType ==="DESC")?"ASC":"DESC"
    fetchData(FILTRATION_URL + filterType);
  }

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
        {displayBooks?.data?.map((card) => (
          <BookCard key={card.id} book={card} />
        ))}
      </div>
    </div>
  );
};

export default BooksCard;

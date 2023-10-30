import { useEffect, useState } from "react";
import { axiosFetchFunction } from "../utils/helper";
import BookCard from "./BookCard";
import {API_URL, SEARCH_URL,PAGINATION_URL, FILTRATION_URL} from "../utils/constantFile";
import Pagination from "./Pagination";
import SearchBox from "./SearchBox";


const BooksCard = () => {
  const [items, setItem] = useState();
  const [getInput, setInput] = useState("");

  function fetchData(URL){
    axiosFetchFunction(URL, apiData=>setItem(apiData))
  }

  useEffect(() => {
    fetchData(API_URL);
  }, []);


  function handleInputEvent(event) {
    fetchData(SEARCH_URL + event.target.value);
    setInput(event.target.value);
  }

  function paginationButton(pageNo) {
    fetchData(PAGINATION_URL + pageNo);
  }

  function handleClickedButton(id,card) {
    console.log(card)
    console.log(id);
    console.log(getInput)
  }

  function filtration(filterType) {
    // filterType = (filterType ==="DESC")?"ASC":"DESC"
    fetchData(FILTRATION_URL + filterType);
  }

  return (
    <div className="video-container">
     
      <Pagination paginationData={Array.from({ length: items?.pagination?.totalPages })}  paginationButton={paginationButton} />
    
      {/* --------------------------------searchBtn------------------------------Filteration---------------------------------------------- */}
      <SearchBox handleInputEvent={handleInputEvent} filtration={filtration}/>

      {/*---------------------------------------CARDS------------------------------------  */}
      <div className="card-container">
        {items?.data?.map(card => <BookCard key={card.id} book={card} handleClickedButton={()=>handleClickedButton(card)}/>)}
      </div>
    </div>
  );
};

export default BooksCard;

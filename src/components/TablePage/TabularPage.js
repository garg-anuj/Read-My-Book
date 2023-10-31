import Table from "react-bootstrap/Table";
import { axiosFetchFunction } from "../../utils/helper";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import SearchBox from "../SearchBox";
import {
  API_URL,
  SEARCH_URL,
  PAGINATION_URL,
  FILTRATION_URL,
} from "../../utils/constantFile";

import useLiveSearchItems from "../../customHooks/useLiveSearchItems";
import "./table.css";
// import Pagination from "../Pagination";

const btnStyle = {
  padding: "5px 10px",
  fontSize: "13px",
  // backgroundColor: "teal",
  color: "white",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  transition: "background-color 0.3s",
  margin: "0 5px",
  backgroundColor: "#272727",
};

const containerStyle = {
  backgroundColor: "transparent",
  position: "relative",
  left: "50%",
  transform: "translateX(-60%)",
  width: "80%",
  display: "flex",
  overflowX: "scroll",
  height: "30px",
  marginTop: "20px",
  paddingTop: "2px",
  borderTop: "1px solid #272727",
  borderBottom: "1px solid #272727",
};

const TabularPage = () => {
  useEffect(() => {
    axiosFetchFunction(API_URL, (apiData) => setBookData(apiData));
  }, []);

  const [bookData, setBookData] = useState();
  const [gotInput, setInput] = useState("");
  // const getLiveSearchedData =
  useLiveSearchItems(setBookData);

  function fetchData(URL) {
    axiosFetchFunction(URL, (apiData) => setBookData(apiData));
  }

  function handleInputEvent(event) {
    setInput(event.target.value);
    fetchData(SEARCH_URL + gotInput);
  }

  function paginationButton(pageNo) {
    fetchData(PAGINATION_URL + pageNo);
  }

  function filtration(filterType) {
    fetchData(FILTRATION_URL + filterType);
  }

  function sortingById(array) {
    return array.sort((a, b) => a.id - b.id);
  }

  return (
    <div className="mainTableContainer">
      <SearchBox handleInputEvent={handleInputEvent} filtration={filtration} />

      <div className="tableBox">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th onClick={() => sortingById(bookData?.data)}>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Country</th>
              <th>Language</th>
              <th>Pages</th>
              <th>Year</th>
              <th>Link</th>
              <th>
                {" "}
                <Link to={"/addNewBooks"}>
                  {" "}
                  <button style={btnStyle}>Add Button</button>
                </Link>
              </th>
            </tr>
          </thead>

          <tbody>
            {bookData?.data?.map((book) => (
              <tr key={book.id} className="rowStyle">
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.country}</td>
                <td>{book.language}</td>
                <td>{book.pages}</td>
                <td>{book.year}</td>
                <td>{book.link}</td>
                <td>
                  <Link to={"/addNewBooks"} state={book}>
                    UPDATE <i className="bi bi-pencil-square"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="video-container">
        {/* <Pagination paginationData={Array.from({ length: bookData?.pagination?.totalPages })}  paginationButton={paginationButton} /> */}

        <div style={containerStyle}>
          {Array.from({ length: bookData?.pagination?.totalPages }).map(
            (ele, i) => {
              return (
                <button
                  style={btnStyle}
                  onClick={() => paginationButton(i + 1)}
                >
                  {i + 1}
                </button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
// paginationButton(pageNo)
export default TabularPage;

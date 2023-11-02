import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Pagination from "../Pagination";
import SearchBox from "../SearchBox";

import useLiveSearchItems from "../../customHooks/useLiveSearchItems";
import { getMethod } from "../../services";
import { smallBtnStyle } from "../../constants/styles";
import {
  API_URL,
  SEARCH_URL,
  PAGINATION_URL,
  FILTRATION_URL,
} from "../../constants/urls";

import "./table.css";

const TabularPage = () => {
  useEffect(() => {
    getMethod(API_URL).then((res) => setBookData(res));
  }, []);

  const [bookData, setBookData] = useState();
  const [gotInput, setInput] = useState("");
  // const getLiveSearchedData =
  useLiveSearchItems(setBookData);

  function fetchData(URL) {
    getMethod(URL).then((res) => setBookData(res));
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
                  <button style={smallBtnStyle}>Add Button</button>
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

      <div className=".mainTableContainer">
        <Pagination
          paginationData={Array.from({
            length: bookData?.pagination?.totalPages,
          })}
          paginationButton={paginationButton}
        />

        {/* <div style={paginationBtnContainerStyle}>
          {Array.from({ length: bookData?.pagination?.totalPages }).map(
            (ele, i) => {
              return (
                <button
                  style={smallBtnStyle}
                  onClick={() => paginationButton(i + 1)}
                >
                  {i + 1}
                </button>
              );
            }
          )}
        </div> */}
      </div>
    </div>
  );
};
export default TabularPage;

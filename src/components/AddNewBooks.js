import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

import { POST_URL, PUT_URL } from "../utils/constantFile.js";
import { EMPTY_OBJECT } from "../utils/constantFile.js";
import { postFunction, putFunction } from "../utils/helper";
import "../style/addBookPage.css";

const EMPTY_BOOK_INFO = {
  author: "",
  country: "",
  language: "",
  link: "",
  pages: "",
  title: "",
  year: "",
};

const AddNewBooks = () => {
  const location = useLocation();

  useEffect(() => {
    setNewBook(location?.state);
  }, [location?.state]);

  const [addNewBook, setNewBook] = useState(EMPTY_BOOK_INFO);

  function handleInputEvent(event) {
    const { target } = event || EMPTY_OBJECT;
    const { name, value } = target || EMPTY_OBJECT;
    setNewBook({ ...addNewBook, [name]: value });
  }

  function handleClickEvent() {
    postFunction(POST_URL, addNewBook);
    setNewBook(EMPTY_BOOK_INFO);
  }

  function handleEditEvent() {
    let bookId = location?.state?.id;
    putFunction(PUT_URL + bookId, addNewBook);
    setNewBook(EMPTY_BOOK_INFO);
  }

  const { author, country } = addNewBook || EMPTY_OBJECT;
  return (
    <>
      <div className="inputBox">
        <form>
          <input
            type="text"
            value={author}
            name="author"
            placeholder="author"
            onChange={handleInputEvent}
          />
          <input
            type="text"
            value={country}
            name="country"
            placeholder="country"
            onChange={handleInputEvent}
          />
          <input
            type="text"
            value={addNewBook?.language}
            name="language"
            placeholder="language"
            onChange={handleInputEvent}
          />
          <input
            type="url"
            value={addNewBook?.link}
            name="link"
            placeholder="link"
            onChange={handleInputEvent}
          />
          <input
            type="number"
            value={addNewBook?.pages}
            name="pages"
            placeholder="pages"
            onChange={handleInputEvent}
          />
          <input
            type="text"
            value={addNewBook?.title}
            name="title"
            placeholder="title"
            onChange={handleInputEvent}
          />
          <input
            type="number"
            value={addNewBook?.year}
            name="year"
            placeholder="year"
            onChange={handleInputEvent}
          />
          {location.state == null ? (
            <button
              className="form-btn"
              onClick={(event) => {
                event.preventDefault();
                handleClickEvent();
              }}
            >
              Add New BooK
            </button>
          ) : (
            <button
              className="form-btn"
              onClick={(event) => {
                event.preventDefault();
                handleEditEvent();
              }}
            >
              Edit BooK
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default AddNewBooks;

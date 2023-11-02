import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { putMethod, postMethod } from "../../services";
import { POST_URL, PUT_URL } from "../../constants/urls";
import { EMPTY_OBJECT } from "../../constants/general";

import "../../styles/addBookPage.css";

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
  const [placeholderValue, setPlaceHolderValue] = useState(EMPTY_BOOK_INFO);

  function handleInputEvent(event) {
    const { target } = event || EMPTY_OBJECT;
    const { name, value } = target || EMPTY_OBJECT;
    setPlaceHolderValue(event.target.placeholder);
    console.log(placeholderValue);
    setNewBook({ ...addNewBook, [name]: value });
  }

  function handleCreateBook() {
    postMethod(POST_URL, addNewBook);
    setNewBook(EMPTY_BOOK_INFO);
  }

  function handleEditBook() {
    let bookId = location?.state?.id;
    putMethod(PUT_URL + bookId, addNewBook);
    setNewBook(EMPTY_BOOK_INFO);
  }

  return (
    <div className="form-container">
      <form>
        <label htmlFor="author">{placeholderValue.author}</label>
        <input
          type="text"
          value={addNewBook?.author}
          id="author"
          name="author"
          placeholder="author"
          onChange={handleInputEvent}
          size={10}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          value={addNewBook?.country}
          name="country"
          placeholder="country"
          onChange={handleInputEvent}
          size={20}
        />
        <label htmlFor="language">language</label>
        <input
          type="text"
          value={addNewBook?.language}
          id="language"
          name="language"
          placeholder="language"
          onChange={handleInputEvent}
          size={20}
        />
        <label htmlFor="link">Link</label>
        <input
          type="url"
          value={addNewBook?.link}
          id="link"
          name="link"
          placeholder="link"
          onChange={handleInputEvent}
          size={20}
        />
        <label htmlFor="pages">Pages</label>
        <input
          type="number"
          value={addNewBook?.pages}
          id="pages"
          name="pages"
          placeholder="pages"
          onChange={handleInputEvent}
          size={10}
        />
        <label htmlFor="title">title</label>
        <input
          type="text"
          value={addNewBook?.title}
          id="title"
          name="title"
          placeholder="title"
          onChange={handleInputEvent}
          size={20}
        />
        <label htmlFor="year">year</label>
        <input
          type="number"
          value={addNewBook?.year}
          id="year"
          name="year"
          placeholder="year"
          onChange={handleInputEvent}
          size={4}
        />
        {location.state == null ? (
          <button
            className="form-btn"
            onClick={(event) => {
              event.preventDefault();
              handleCreateBook();
            }}
          >
            Add New BooK
          </button>
        ) : (
          <button
            className="form-btn"
            onClick={(event) => {
              event.preventDefault();
              handleEditBook();
            }}
          >
            Edit BooK
          </button>
        )}
      </form>
    </div>
  );
};

export default AddNewBooks;

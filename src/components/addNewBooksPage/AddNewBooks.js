import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { putMethod, postMethod } from "../../services";
import { POST_URL, PUT_URL } from "../../constants/urls";
import { EMPTY_OBJECT } from "../../constants/general";

import "../../styles/addBookPage.css";
import "./style.css";

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
    setNewBookInfo(location?.state);
  }, [location?.state]);

  const [newBookInfo, setNewBookInfo] = useState(EMPTY_BOOK_INFO);
  const [placeholderValue, setPlaceHolderValue] = useState(EMPTY_BOOK_INFO);

  function handleInputChange(event) {
    event.preventDefault();
    const { target } = event || EMPTY_OBJECT;
    const { name, value } = target || EMPTY_OBJECT;
    setPlaceHolderValue(event.target.placeholder);
    setNewBookInfo({ ...newBookInfo, [name]: value });
  }

  function createNewBook(event) {
    event.preventDefault();
    postMethod(POST_URL, newBookInfo);
    setNewBookInfo(EMPTY_BOOK_INFO);
  }

  function updateExistingBook(event) {
    event.preventDefault();
    let bookId = location?.state?.id;
    putMethod(PUT_URL + bookId, newBookInfo);
    setNewBookInfo(EMPTY_BOOK_INFO);
  }
  const { author, title, language, country, link, pages, year } =
    newBookInfo || EMPTY_OBJECT;

  return (
    <div className="form-container">
      <form>
        <label htmlFor="author">{placeholderValue.author}</label>
        <input
          type="text"
          value={author}
          id="author"
          name="author"
          placeholder="author"
          onChange={handleInputChange}
          size={10}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          value={country}
          name="country"
          placeholder="country"
          onChange={handleInputChange}
          size={20}
        />
        <label htmlFor="language">language</label>
        <input
          type="text"
          value={language}
          id="language"
          name="language"
          placeholder="language"
          onChange={handleInputChange}
          size={20}
        />
        <label htmlFor="link">Link</label>
        <input
          type="url"
          value={link}
          id="link"
          name="link"
          placeholder="link"
          onChange={handleInputChange}
          size={20}
        />
        <label htmlFor="pages">Pages</label>
        <input
          type="number"
          value={pages}
          id="pages"
          name="pages"
          placeholder="pages"
          onChange={handleInputChange}
          size={10}
        />
        <label htmlFor="title">title</label>
        <input
          type="text"
          value={title}
          id="title"
          name="title"
          placeholder="title"
          onChange={handleInputChange}
          size={20}
        />
        <label htmlFor="year">year</label>
        <input
          type="number"
          value={year}
          id="year"
          name="year"
          placeholder="year"
          onChange={handleInputChange}
          size={4}
        />
        {location.state == null ? (
          <button className="form-btn" onClick={createNewBook}>
            Add New BooK
          </button>
        ) : (
          <button className="form-btn" onClick={updateExistingBook}>
            Edit BooK
          </button>
        )}
      </form>
    </div>
  );
};

export default AddNewBooks;

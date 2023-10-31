export const IMG_URL = "https://source.unsplash.com/1600x900/?Book";
export const API_URL = "http://68.178.162.203:8080/application-test-v1.1/books";
export const SEARCH_URL = `http://68.178.162.203:8080/application-test-v1.1/books?title=`;
export const PAGINATION_URL =
  "http://68.178.162.203:8080/application-test-v1.1/books?page=";
export const FILTRATION_URL =
  "http://68.178.162.203:8080/application-test-v1.1/books?DIR=";
export const PUT_URL =
  "http://68.178.162.203:8080/application-test-v1.1/books/";
export const POST_URL =
  "http://68.178.162.203:8080/application-test-v1.1/books";

export const EMPTY_OBJECT = Object.freeze({});

export const btnStyle = {
  padding: "5px",
  margin: "5px",
  width: "100px",
  color: "rgba(255,255,255,0.7)",
  backgroundColor: "transparent",
  border: "1px solid rgba(255,255,255,0.3)",
  cursor: "pointer",
};

export const inputStyle = {
  padding: "5px 12px",
  margin: "5px",
  width: "200px",
  color: "rgba(255,255,255,0.7)",
  backgroundColor: "#101010",
  // backgroundColor: 'transparent',
  border: "1px solid rgba(255,255,255,0.3)",
};

export const paginationBtnContainerStyle = {
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

export const smallBtnStyle = {
  padding: "5px 10px",
  fontSize: "13px",
  color: "white",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  transition: "background-color 0.3s",
  margin: "0 5px",
  backgroundColor: "#272727",
};

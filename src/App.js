import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";

import Header from "./components/Header";
import Body from "./components/Body";
import BooksCard from "./components/booksPage";
import AddNewBooks from "./components/addNewBooksPage/AddNewBooks";
import TabularPage from "./components/tableViewPage/TabularPage";
import AddToCardPage from "./components/addToCardPage/AddToCardPage";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Body children={<BooksCard />} />} />

            {/* <Route path="/bookInfoPage" element={<Body children={<Suspense fallback={<div>Loading...</div>}><TablePage children={<BooksCard/>}/></Suspense>}/>}/> */}
            <Route
              path="/addNewBooks"
              element={<Body children={<AddNewBooks />} />}
            />
            <Route
              path="/addToCart"
              element={<Body children={<AddToCardPage />} />}
            />
            <Route
              path="/tabularPage"
              element={<Body children={<TabularPage />} />}
            />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

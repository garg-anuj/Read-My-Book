import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import BooksCard from "./components/dispalayBooksPage/BooksCard";
import AddNewBooks from "./components/addNewBooksPage/AddNewBooks";

import TabularPage from "./components/TablePage/TabularPage";
import FavouriteBooks from "./components/addToCardPage/FavouriteBooks";
// const TablePage = lazy(() => import("./components/WatchPage"));

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Body children={<BooksCard />} />} />

            {/* <Route path="/watch" element={<Body children={<Suspense fallback={<div>Loading...</div>}><TablePage children={<BooksCard/>}/></Suspense>}/>}/> */}
            <Route
              path="/addNewBooks"
              element={<Body children={<AddNewBooks />} />}
            />
            <Route
              path="/addToCart"
              element={<Body children={<FavouriteBooks />} />}
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

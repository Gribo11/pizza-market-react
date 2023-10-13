import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import React from "react";

import Header from "./componetns/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/404";

export const SearchContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

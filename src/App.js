import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import React from "react";

import Header from "./componetns/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/404";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

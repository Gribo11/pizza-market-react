import React from "react";

import Categories from "../componetns/Categories";
import Sort from "../componetns/Sort";
import PizzaItem from "../componetns/PizzaItem";
import Skeleton from "../componetns/PizzaItem/Skeleton";
import Pagination from "../componetns/Pagination";
import { SearchContext } from "../App";

const Home = () => {
  const { searchValue } = React.useContext(SearchContext); 
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "Popular",
    type: "rating",
  });
  const [currentPage, setCurrentPage] = React.useState(1);
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://65279571917d673fd76dda40.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortType.type}&order=desc${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoryId}
            onClickCategory={(index) => setCategoryId(index)}
          />
          <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
        </div>
        <h2 className="content__title">All pizzas</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <PizzaItem key={obj.id} {...obj} />)}
        </div>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </>
  );
};
export default Home;

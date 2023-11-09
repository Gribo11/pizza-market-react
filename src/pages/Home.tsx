import React from "react";
import qs from "qs";
import Categories from "../componetns/Categories";
import Sort, { sortList } from "../componetns/Sort";
import PizzaItem from "../componetns/PizzaItem";
import Skeleton from "../componetns/PizzaItem/Skeleton";
import Pagination from "../componetns/Pagination";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import { fetchPizzas, seelctPizza } from "../redux/slices/pizzasSlice";
import { useAppDispatch } from "../redux/store";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(seelctPizza);
  const sortType = sort.type;

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchData = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    dispatch(
      fetchPizzas({
        category,
        sortType,
        currentPage: String(currentPage),
        search,
      })
    );

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.type === params.sortType);
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchData();
    }

    isSearch.current = false;
  }, [categoryId, sortType, searchValue, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const QueryString = qs.stringify({
        sortType,
        categoryId,
        currentPage,
      });
      navigate(`?${QueryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, currentPage]);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizzas = items.map((obj: any) => <PizzaItem key={obj.id} {...obj} />);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onClickCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">All pizzas</h2>
        <div className="content__items">
          {status === "error" ? (
            <div className="content__error-info">
              <h2>There was an error 😕</h2>
              <p>
                Unfortunately, it was not possible to retrieve the pits. Please
                try again later.
              </p>
            </div>
          ) : (
            <div className="content__items">
              {status === "loading" ? skeletons : pizzas}
            </div>
          )}
        </div>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  );
};
export default Home;

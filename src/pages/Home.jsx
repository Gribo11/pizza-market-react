import React from "react";

import Categories from "../componetns/Categories";
import Sort from "../componetns/Sort";
import PizzaItem from "../componetns/PizzaItem";
import pizzas from "../assets/pizza.json";

const Home = () => {
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {pizzas.map((obj) => (
          <PizzaItem key={obj.id} {...obj} />
        ))}
      </div>
    </>
  );
};
export default Home;

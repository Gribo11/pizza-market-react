import "./scss/app.scss";

import Header from "./componetns/Header";
import Categories from "./componetns/Categories";
import Sort from "./componetns/Sort";
import PizzaItem from "./componetns/PizzaItem";
import pizzas from "./assets/pizza.json";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaItem {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

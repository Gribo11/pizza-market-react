import "./scss/app.scss";

import Header from "./componetns/Header";
import Categories from "./componetns/Categories";
import Sort from "./componetns/Sort";
import PizzaItem from "./componetns/PizzaItem";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaItem price='500'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

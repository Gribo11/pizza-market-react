import React from "react";

type CategoriesProps = {
  value: number;
  onClickCategory: (index: number) => void;
};

const categories = ["All", "Meat", "Vegetarian", "Grill", "Sharp", "Closed"];

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onClickCategory }) => {
    return (
      <div className="categories">
        <ul>
          {categories.map((item, index) => {
            return (
              <li
                className={value === index ? "active" : ""}
                onClick={() => onClickCategory(index)}
                key={index}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);

export default Categories;

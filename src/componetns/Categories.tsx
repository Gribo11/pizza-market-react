import { useState } from "react";

type CategoriesProps = {
  value: number;
  onClickCategory: any;
};

const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ["All", "Meat", "Vegetarian", "Grill", "Sharp", "Closed"];

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
};

export default Categories;

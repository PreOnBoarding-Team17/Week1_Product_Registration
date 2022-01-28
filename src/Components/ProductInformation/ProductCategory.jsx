import React, { useState } from "react";
import { CATEGORY_LIST } from "Utils/Constants/CategoryList";
import CategoryItem from "./CategoryItem";
import "Components/ProductInformation/scss/ProductCategory.scss";

function ProductCategory() {
  const [selected, setSelected] = useState(new Set());

  console.log(selected.size);
  return (
    <div className="information__category">
      <ul className="information__category__list-area">
        {CATEGORY_LIST.map((category, index) => {
          return (
            <CategoryItem
              category={category}
              index={index}
              key={index}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </ul>
      <div className="information__category__select-area">
        <ul className="information__category__select-list-area">
          {selected.size > 0 &&
            [...selected].map((s, index) => {
              return (
                <li
                  className="information__category__select-list-item"
                  key={index}
                >
                  {CATEGORY_LIST[s]}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default ProductCategory;

import React, { useState } from "react";
import { CATEGORY_LIST } from "Utils/Constants/CategoryList";
import CategoryItem from "./CategoryItem";
import SelectedItem from "./SelectedItem";
import "Components/ProductInformation/scss/ProductCategory.scss";

function ProductCategory() {
  const [selected, setSelected] = useState([]);

  return (
    <div className="information__category">
      <ul className="information__category__list-area">
        {CATEGORY_LIST.map((category, index) => {
          return (
            <CategoryItem
              category={category}
              index={index}
              selected={selected}
              setSelected={setSelected}
              key={index}
            />
          );
        })}
      </ul>
      <div className="information__category__select-area">
        <ul className="information__category__select-list-area">
          {selected.length > 0 &&
            selected.map((item, index) => {
              return (
                <SelectedItem
                  item={item}
                  index={index}
                  selected={selected}
                  setSelected={setSelected}
                  key={index}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default ProductCategory;

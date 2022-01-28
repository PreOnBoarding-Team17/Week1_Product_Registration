import React from "react";
import { CATEGORY_LIST } from "Utils/Constants/CategoryList";
import CategoryItem from "./CategoryItem";
import "Components/ProductInformation/scss/ProductCategory.scss";

function ProductCategory() {
  return (
    <div className="information__category">
      <ul className="information__category__list-area">
        {CATEGORY_LIST.map((category, index) => {
          return <CategoryItem category={category} index={index} key={index} />;
        })}
      </ul>
      <div className="information__category__select-area">
        <ul className="information__category__select-list-area">
          <li className="information__category__select-list-item">
            선택한 카테고리
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductCategory;

import React from "react";

function CategoryItem({ category, index }) {
  return (
    <li className="information__category__list__item" key={index}>
      <label className="custom-checkbox-label">
        <input
          type="checkbox"
          id={`category${index}`}
          className="check-input"
        />
        <span className="custom-checkbox" htmlFor={`category${index}`}></span>
        <span className="custom-checkbox__title">{category}</span>
      </label>
    </li>
  );
}

export default CategoryItem;

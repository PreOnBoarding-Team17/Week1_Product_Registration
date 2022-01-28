import React from "react";
import "Components/ProductInformation/scss/CategoryItem.scss";

function CategoryItem({ category, index, selected, setSelected }) {
  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    if (checked) {
      setSelected(
        "category",
        [...selected, index].sort((a, b) => +a - +b)
      );
    } else if (!checked) {
      setSelected(
        "category",
        selected.filter((s) => s !== index)
      );
    }
  };

  return (
    <li className="information__category__list__item" key={index}>
      <label className="custom-checkbox-label">
        <input
          type="checkbox"
          id={`category${index}`}
          className="check-input"
          onChange={handleCheckboxChange}
          checked={selected.includes(index)}
        />
        <span className="custom-checkbox" htmlFor={`category${index}`}></span>
        <span className="custom-checkbox__title">{category}</span>
      </label>
    </li>
  );
}

export default CategoryItem;

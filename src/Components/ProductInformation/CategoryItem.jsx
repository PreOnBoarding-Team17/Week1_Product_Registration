import React from "react";
import "Components/ProductInformation/scss/CategoryItem.scss";

function CategoryItem({ category, index, selected, setSelected }) {
  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    if (checked) {
      selected.add(index);
      setSelected(selected);
    } else if (!checked && selected.has(index)) {
      selected.delete(index);
      setSelected(selected);
    }

    console.log([...selected]);
  };

  return (
    <li className="information__category__list__item" key={index}>
      <label className="custom-checkbox-label">
        <input
          type="checkbox"
          id={`category${index}`}
          className="check-input"
          onChange={handleCheckboxChange}
        />
        <span className="custom-checkbox" htmlFor={`category${index}`}></span>
        <span className="custom-checkbox__title">{category}</span>
      </label>
    </li>
  );
}

export default CategoryItem;

import React from "react";
import { CATEGORY_LIST } from "Utils/Constants/CategoryList";

function SelectedItem({ item, index, selected, setSelected }) {
  const removeSelectedItem = () => {
    setSelected(
      "category",
      selected.filter((removeitem) => removeitem !== item)
    );
  };

  return (
    <li className="information__category__select-list-item" key={index}>
      {CATEGORY_LIST[item]}
      <button
        className="information__category__select-list-btn"
        onClick={removeSelectedItem}
      >
        X
      </button>
    </li>
  );
}

export default SelectedItem;

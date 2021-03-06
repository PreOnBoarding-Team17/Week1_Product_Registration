import React from "react";
import "Components/ProductInformation/scss/FilterTagSelectList.scss";

function FilterTagSelectList({ filterTag, setFilterTag, tag }) {
  const removeFilterTag = () => {
    setFilterTag(
      "filterTag",
      filterTag.filter((el) => el !== tag)
    );
  };

  return (
    <li className="filter-tag__select-list__item">
      {tag}
      <button
        className="filter-tag__select-list__btn"
        onClick={removeFilterTag}
      >
        X
      </button>
    </li>
  );
}

export default FilterTagSelectList;

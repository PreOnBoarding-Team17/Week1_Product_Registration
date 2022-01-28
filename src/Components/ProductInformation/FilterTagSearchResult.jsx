import React from "react";
import { TAG_LIST } from "Utils/Constants/TagList";

function FilterTagSearchResult({ filterTag, setFilterTag, setToggleSearch }) {
  const addFilterTag = (e) => {
    setFilterTag([...filterTag, e.target.innerText]);
    setToggleSearch(false);
  };

  return (
    <div className="filter-tag__search-result">
      <ul className="filter-tag__search-result__list">
        {TAG_LIST.map((tag, index) => {
          return (
            <li
              className="filter-tag__search-result__item"
              key={index}
              onClick={addFilterTag}
            >
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilterTagSearchResult;

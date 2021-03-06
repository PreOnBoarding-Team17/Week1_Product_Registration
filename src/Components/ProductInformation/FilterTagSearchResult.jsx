import React from "react";
import { TAG_LIST } from "Utils/Constants/TagList";

function FilterTagSearchResult({
  filterTag,
  setFilterTag,
  setToggleSearch,
  searchResult,
  setSearchResult,
  setSearchInput,
}) {
  const addFilterTag = (e) => {
    if (!filterTag.includes(e.target.innerText)) {
      setFilterTag("filterTag", [...filterTag, e.target.innerText]);
    }
    setToggleSearch(false);
    setSearchInput("");
    setSearchResult([...TAG_LIST]);
  };

  return (
    <div className="filter-tag__search-result">
      <ul className="filter-tag__search-result__list">
        {searchResult.length > 0 ? (
          searchResult.map((tag, index) => {
            return (
              <li
                className="filter-tag__search-result__item"
                key={index}
                onClick={addFilterTag}
              >
                {tag}
              </li>
            );
          })
        ) : (
          <span className="filter-tag__search-result__no-result">
            검색 결과가 존재하지 않습니다.
          </span>
        )}
      </ul>
    </div>
  );
}

export default FilterTagSearchResult;

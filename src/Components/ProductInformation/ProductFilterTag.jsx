import React, { useState } from "react";
import FilterTagSelectList from "./FilterTagSelectList";
import FilterTagSearchResult from "./FilterTagSearchResult";
import { TAG_LIST } from "Utils/Constants/TagList";
import "Components/ProductInformation/scss/ProductFilterTag.scss";

function ProductFilterTag({ filterTag, setFilterTag }) {
  const [toggleSearch, setToggleSearch] = useState(false);
  // const [filterTag, setFilterTag] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const onChangeFilterInput = (e) => {
    const newInput = e.target.value;
    setSearchInput(newInput);
    const newFilter = TAG_LIST.filter((tag) => {
      return tag.includes(newInput) && !filterTag.includes(tag);
    });
    setSearchResult(newFilter);
  };

  return (
    <>
      <div className="filter-tag__container">
        <input
          type="text"
          className="filter-tag__input"
          placeholder="필터태그를 검색해 주세요."
          onFocus={() => setToggleSearch(true)}
          value={searchInput}
          onChange={onChangeFilterInput}
          // onBlur={() => setToggleSearch(false)}
        />
        <button className="filter-tag__btn">검색</button>
      </div>
      {filterTag.length > 0 && (
        <div className="filter-tag__select-list">
          <h3 className="filter-tag__select-list__title">지정된 필터 태그</h3>
          <ul className="filter-tag__select-list__wrap">
            {filterTag.map((tag, index) => {
              return (
                <FilterTagSelectList
                  filterTag={filterTag}
                  setFilterTag={setFilterTag}
                  tag={tag}
                  key={index}
                />
              );
            })}
          </ul>
        </div>
      )}
      {toggleSearch && (
        <FilterTagSearchResult
          searchResult={searchResult}
          filterTag={filterTag}
          setFilterTag={setFilterTag}
          setToggleSearch={setToggleSearch}
          inputLength={searchInput.length}
          setSearchInput={setSearchInput}
        />
      )}
    </>
  );
}

export default ProductFilterTag;

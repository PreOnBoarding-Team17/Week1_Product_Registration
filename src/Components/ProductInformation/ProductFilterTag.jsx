import React, { useState } from "react";
import "Components/ProductInformation/scss/ProductFilterTag.scss";

function ProductFilterTag() {
  const [filterSearch, setFilterSearch] = useState(false);

  return (
    <>
      <div className="filter-tag__container">
        <input
          type="text"
          className="filter-tag__input"
          placeholder="필터태그를 검색해 주세요."
          onFocus={() => setFilterSearch(true)}
          onBlur={() => setFilterSearch(false)}
        />
        <button className="filter-tag__btn">검색</button>
      </div>
      {filterSearch && (
        <div className="filter-tag__search-result">
          <ul className="filter-tag__search-result__list">
            <li className="filter-tag__search-result__item">필터태그</li>
            <li className="filter-tag__search-result__item">필터태그</li>
            <li className="filter-tag__search-result__item">필터태그asdf</li>
            <li className="filter-tag__search-result__item">필터태그a</li>
            <li className="filter-tag__search-result__item">필터태그</li>
            <li className="filter-tag__search-result__item">필터태그</li>
            <li className="filter-tag__search-result__item">필터태그asfd</li>
            <li className="filter-tag__search-result__item">필터태그</li>
            <li className="filter-tag__search-result__item">필터태그</li>
            <li className="filter-tag__search-result__item">필터태그asdf</li>
            <li className="filter-tag__search-result__item">필터태그</li>
            <li className="filter-tag__search-result__item">필터태그</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default ProductFilterTag;

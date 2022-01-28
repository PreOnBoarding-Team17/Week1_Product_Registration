import React from "react";
import "Components/ProductInformation/scss/ProductFilterTag.scss";

function ProductFilterTag() {
  return (
    <div className="filter-tag__container">
      <input
        type="text"
        className="filter-tag__input"
        placeholder="필터태그를 검색해 주세요."
      />
      <button className="filter-tag__btn">검색</button>
    </div>
  );
}

export default ProductFilterTag;

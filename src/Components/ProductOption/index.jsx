import React from "react";
import ProductOptionSet from "Components/ProductOption/ProductOptionSet";
import "Components/ProductOption/scss/ProductOption.scss";

export default function ProductOption() {
  return (
    <section className="gray-box">
      <div className="option__title-box">
        <p className="option__title">상품 옵션*</p>
        <button className="option__button">+ 옵션 세트 추가</button>
      </div>
      <div className="option__list">
        <ProductOptionSet />
      </div>
    </section>
  );
}

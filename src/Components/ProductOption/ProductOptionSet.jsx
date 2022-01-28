import React from "react";
import DeleteButton from "Utils/Button/DeleteButton";
import ProductExtraOption from "Components/ProductOption/ProductExtraOption";
import "Components/ProductOption/scss/ProductOptionSet.scss";
import ProductOptionImage from "./ProductOptionImage";

export default function ProductOptionSet() {
  return (
    <section className="option-set__container">
      <div className="option-set__button-box">
        <DeleteButton />
      </div>
      <div className="option-set__wrapper">
        <ProductOptionImage />
        <ProductExtraOption />
        <button className="option-set__add-button">+ 옵션 추가</button>
      </div>
    </section>
  );
}

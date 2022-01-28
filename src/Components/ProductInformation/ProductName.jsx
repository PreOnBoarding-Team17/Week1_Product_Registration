import React from "react";
import "Components/ProductInformation/scss/ProductName.scss";

function ProductName() {
  return (
    <div className="product-input__container">
      <input
        type="text"
        placeholder="상품명을 입력해 주세요."
        className="product-input__input"
      />
    </div>
  );
}

export default ProductName;

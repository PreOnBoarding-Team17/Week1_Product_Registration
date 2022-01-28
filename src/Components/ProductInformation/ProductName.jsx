import React from "react";
import "Components/ProductInformation/scss/ProductName.scss";

function ProductName({ value, onChange }) {
  return (
    <div className="product-input__container">
      <input
        type="text"
        placeholder="상품명을 입력해 주세요."
        className="product-input__input"
        value={value}
        onChange={(e) => onChange("productName", e.target.value)}
      />
    </div>
  );
}

export default ProductName;

import React from "react";

function ProductCompositionInfo({ value, onChange }) {
  return (
    <div className="product-input__container">
      <input
        type="text"
        placeholder="상품 구성 소개 정보를 입력해 주세요."
        className="product-input__input"
        value={value}
        onChange={(e) => onChange("productComposition", e.target.value)}
      />
    </div>
  );
}

export default ProductCompositionInfo;

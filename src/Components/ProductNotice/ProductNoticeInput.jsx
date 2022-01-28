import React from "react";

import "Components/ProductNotice/scss/ProductNoticeInput.scss";

function ProductNoticeInput({ option }) {
  return (
    <div className="product-notice-input-container">
      {option[0]} <input placeholder={option[1]} />
    </div>
  );
}

export default ProductNoticeInput;

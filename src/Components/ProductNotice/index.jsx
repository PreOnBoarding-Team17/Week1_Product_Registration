import React from "react";
import ProductNoticeInput from "./ProductNoticeInput";

import "Components/ProductNotice/scss/ProductNotice.scss";

const INFOOPTIONSNAME = [
  "제품명 / 중량",
  "원산지 / 원재료 함량",
  "등급",
  "보관",
  "식품 유형",
];

function ProductNotice() {
  return (
    <section className="gray-box">
      <div className="product-notice">
        <div className="product-notice__title">정보고시</div>
        {INFOOPTIONSNAME.map((x) => {
          return <ProductNoticeInput key={x} option={x} />;
        })}
      </div>
    </section>
  );
}

export default ProductNotice;

import React from "react";
import PrductPeriodContainer from "./PrductPeriodContainer";

import "./Scss/index.scss";

const EXPOSEPERIOD = ["제한 없음", "미노출", "노출 기간 설정"];
const SALESPERIOD = ["제한 없음", "미판매", "판매 기간 설정"];

function ProductPeriod() {
  return (
    <div className="product-period">
      <div className="product-period__title">노출 및 판매기간 설정</div>
      <PrductPeriodContainer
        title="상품 노출 기한"
        period={EXPOSEPERIOD}
        dateType="date"
      />
      <PrductPeriodContainer
        title="상품 판매 기한"
        period={SALESPERIOD}
        dateType="datetime-local"
      />
    </div>
  );
}

export default ProductPeriod;

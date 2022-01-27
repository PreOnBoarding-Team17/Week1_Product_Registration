import React from "react";
import PrductPeriodContainer from "./PrductPeriodContainer";

const EXPOSEPERIOD = ["제한 없음", "미노출", "노출 기간 설정"];
const SALESPERIOD = ["제한 없음", "미판매", "판매 기간 설정"];

function ProductPeriod() {
  return (
    <>
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
    </>
  );
}

export default ProductPeriod;

import React from "react";
import PrductPeriodContainer from "Components/ProductPeriod/PrductPeriodContainer";

import "Utils/Styles/date.scss";

const EXPOSEPERIOD = ["제한 없음", "미노출", "노출 기간 설정"];
const SALESPERIOD = ["제한 없음", "미판매", "판매 기간 설정"];

function ProductPeriod() {
  return (
    <section className="gray-box">
      <div className="title">노출 및 판매기간 설정</div>
      <div className="menu">
        <div className="left-menu">상품 노출 기한</div>
        <div className="right-menu">
          <PrductPeriodContainer
            name="productExposure"
            period={EXPOSEPERIOD}
            dateType="date"
          />
        </div>
      </div>
      <div className="menu">
        <div className="left-menu">상품 판매 기한</div>
        <div className="right-menu">
          <PrductPeriodContainer
            name="productSales"
            period={SALESPERIOD}
            dateType="datetime-local"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductPeriod;

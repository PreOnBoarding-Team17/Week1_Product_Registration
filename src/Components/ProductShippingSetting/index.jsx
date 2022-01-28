import React from "react";

import ProductExtraSetting from "./ProductExtraSetting";
import Toggle from "Utils/Toggle/Toggle";

import "./Scss/index.scss";
import "Utils/Styles/date.scss";

const EXTRASETTING_1 = ["상품 혜택 허용 설정", "마일리지 적립"];
const EXTRASETTING_2 = ["기타 설정", "감사카드 설정"];

function ProductShippingSetting() {
  return (
    <>
      <section className="gray-box">
        <div className="title">상품 배송 설정</div>
        <div className="menu">
          <div className="left-menu double-text">
            사용자 배송일
            <br />
            출발일 지정
          </div>
          <div className="right-menu">
            <Toggle />
          </div>
        </div>
        <div className="menu">
          <div className="left-menu double-text">
            방문 수령
            <br />
            <br />
            <br />선 주문
            <br />
            예약배송
          </div>
          <div className="right-menu">
            <Toggle />
            <br />
            <br />
            <br />
            <Toggle />
            <div className="shipping-time">
              <div className="shipping-time--detail">
                주문시간
                <input type="datetime-local" />
                ~
                <input type="datetime-local" />
              </div>
              <div className="shipping-time--detail">
                <div>
                  새벽배송
                  <input type="date" />
                </div>
                <div>
                  일반배송
                  <input type="date" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductExtraSetting
        title={EXTRASETTING_1[0]}
        option={EXTRASETTING_1[1]}
      />
      <ProductExtraSetting
        title={EXTRASETTING_2[0]}
        option={EXTRASETTING_2[1]}
      />
    </>
  );
}

export default ProductShippingSetting;

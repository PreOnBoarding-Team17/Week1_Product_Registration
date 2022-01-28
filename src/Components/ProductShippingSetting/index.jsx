import React, { useContext } from "react";
import { FormContext } from "FormContextAPI/FormContextAPI";

import ProductExtraSetting from "Components/ProductShippingSetting/ProductExtraSetting";
import Toggle from "Utils/Toggle/Toggle";

import "Components/ProductShippingSetting/scss/ProductShippingSetting.scss";
import "Utils/Styles/date.scss";

const EXTRASETTING_1 = ["상품 혜택 허용 설정", "마일리지 적립"];
const EXTRASETTING_2 = ["기타 설정", "감사카드 설정"];

function ProductShippingSetting() {
  const { inputs, onChange } = useContext(FormContext);

  return (
    <div className="product-shipping-setting-container">
      <section className="gray-box">
        <div className="title">상품 배송 설정</div>
        <div className="menu">
          <div className="left-menu double-text">
            사용자 배송일
            <br />
            출발일 지정
          </div>
          <div className="right-menu toggle-contain">
            <Toggle
              name="shippingDate"
              value={inputs["shippingDate"]}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="menu border-top-none">
          <div className="left-menu double-text">방문 수령</div>
          <div className="right-menu toggle-contain">
            <Toggle
              name="pickUpVisit"
              value={inputs["pickUpVisit"]}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="menu">
          <div className="left-menu double-text">
            선 주문
            <br />
            예약배송
          </div>
          <div className="right-menu toggle-contain">
            <Toggle
              name="reservedShipping"
              value={inputs["reservedShipping"]}
              onChange={onChange}
            />

            {inputs["reservedShipping"] === "true" && (
              <div className="shipping-time">
                <div className="shipping-time--detail">
                  주문 시간
                  <input
                    type="datetime-local"
                    className="shipping-time--detail__datetime"
                    name="orderTimeFrom"
                    value={inputs["orderTimeFrom"]}
                    onChange={onChange}
                  />
                  ~
                  <input
                    type="datetime-local"
                    className="shipping-time--detail__datetime"
                    name="orderTimeTo"
                    value={inputs["orderTimeTo"]}
                    onChange={onChange}
                  />
                </div>
                <div className="shipping-time--detail">
                  <div>
                    새벽 배송
                    <input
                      type="date"
                      className="shipping-time--detail__datetime shipping-time--detail__date"
                      name="dawnShipping"
                      value={inputs["dawnShipping"]}
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    일반 배송
                    <input
                      type="date"
                      className="shipping-time--detail__datetime shipping-time--detail__date"
                      name="normalShipping"
                      value={inputs["normalShipping"]}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <ProductExtraSetting
        title={EXTRASETTING_1[0]}
        option={EXTRASETTING_1[1]}
        name="mileage"
        value={inputs["mileage"]}
        onChange={onChange}
      />
      <ProductExtraSetting
        title={EXTRASETTING_2[0]}
        option={EXTRASETTING_2[1]}
        name="thanks"
        value={inputs["thanks"]}
        onChange={onChange}
      />
    </div>
  );
}

export default ProductShippingSetting;

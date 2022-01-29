import React, { useContext } from "react";
import { FormContext } from "FormContextAPI/FormContextAPI";

import "Components/Common/Header/scss/Header.scss";

const ONEDAYMILESECONDS = 86400000;

export default function Header() {
  const context = useContext(FormContext).inputsData;
  const inputs = context.state;

  const context2 = useContext(FormContext).datesData;
  const dates = context2.state;

  const context3 = useContext(FormContext).informationData;
  const infoData = context3.state;

  let result = { ...useContext(FormContext) };

  // 1,2 번 노출, 제출 기간 설정 검사
  const productPeriodCheck = (name) => {
    if (inputs[name] === "2") {
      const temp = Date.now();
      const exposureDateFrom = Date.parse(dates[`${name}DateFrom`]);
      const exposureDateTo = Date.parse(dates[`${name}DateTo`]);

      if (
        isNaN(exposureDateFrom) ||
        isNaN(exposureDateTo) ||
        temp - exposureDateFrom + ONEDAYMILESECONDS < 0 ||
        exposureDateTo - temp + ONEDAYMILESECONDS < 0
      ) {
        result["dates"][name] = "1";
      }
    }
  };

  // inputs 최종 제출 하기전의 검사
  const onSubmit = (e) => {
    e.preventDefault();

    productPeriodCheck("productExposure");
    productPeriodCheck("productSales");
    // 2번 상품 총 재고 0인경우 미판매 추가

    if (inputs["productSales"] === "2" && infoData["totalProduct"] === 0) {
      result["dates"]["productSales"] = "1";
    }
  };

  return (
    <header className="header__container">
      <div className="header__box-blank"></div>
      <div className="header__box">
        <h1>상품 등록</h1>
        <button type="submit" onClick={onSubmit}>
          저장하기
        </button>
      </div>
    </header>
  );
}

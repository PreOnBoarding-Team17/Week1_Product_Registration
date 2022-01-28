import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "FormContextAPI/FormContextAPI";

import "Components/Common/Header/scss/Header.scss";

const ONEDAYMILESECONDS = 86400000;

export default function Header() {
  const { inputs } = useContext(FormContext);
  const [result, setResult] = useState({});

  useEffect(() => {
    console.log(result);
  }, [result]);

  // 1,2 번 노출, 제출 기간 설정 검사
  const productPeriodCheck = (name) => {
    if (result[name] === "2") {
      const temp = Date.now();
      const exposureDateFrom = Date.parse(result[`${name}DateFrom`]);
      const exposureDateTo = Date.parse(result[`${name}DateTo`]);

      if (
        isNaN(exposureDateFrom) ||
        isNaN(exposureDateTo) ||
        temp - exposureDateFrom + ONEDAYMILESECONDS < 0 ||
        exposureDateTo - temp + ONEDAYMILESECONDS < 0
      ) {
        setResult((prev) => {
          return { ...prev, [name]: "1" };
        });
      }
    }
  };

  // inputs 최종 제출 하기전의 검사
  const onSubmit = (e) => {
    e.preventDefault();

    setResult({ ...inputs });

    productPeriodCheck("productExposure");
    productPeriodCheck("productSales");
    // 2번 상품 총 재고 0인경우 미판매 추가
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

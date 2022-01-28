import React, { useState } from "react";

// import React from "react";
import ProductNoticeInput from "./ProductNoticeInput";

import "Components/ProductNotice/scss/ProductNotice.scss";

const INFOOPTIONSNAME = [
  ["제품명 / 중량", "제품명 / 중량을 입력해 주세요."],
  ["원산지 / 원재료 함량", "원산지 / 원재료 함량을 입력해 주세요."],
  ["등급", "등급 (근내지방도 수치)를 입력해 주세요."],
  ["보관", "보관 방식을 입력해 주세요."],
  ["식품 유형", "식품 유형을 입력해 주세요. (ex)포장육"],
];

function ProductNotice() {
  const [count, setCount] = useState(1);

  return (
    <div className="wrapper">
      <div className="title">상품 정보 고시</div>
      <div className="product-notice">
        <section className="white-bg">
          <div className="product-notice__title">
            <div>정보고시{count}</div>
            <button
              type="button"
              className="delete"
              onClick={() => {
                console.log(123);
              }}
            >
              삭제
            </button>
          </div>
          <div className="product-notice__inputs">
            {INFOOPTIONSNAME.map((x) => {
              return <ProductNoticeInput key={x} option={x} />;
            })}

            <div className="new-input">
              <input
                className="new-input__first"
                placeholder="항목 제목 자유 입력"
              />
              <div className="new-input__split">
                <input
                  className="new-input__second"
                  placeholder="내용을 입력해주세요."
                />
                <button type="button" className="new-input__delete">
                  삭제
                </button>
              </div>
            </div>

            <button
              type="button"
              className="plus"
              onClick={() => {
                console.log(123);
              }}
            >
              +항목 추가
            </button>
          </div>
        </section>
        <div className="plus-info">
          <button
            type="button"
            className="plus-info__btn"
            onClick={() => {
              setCount((p) => p + 1);
            }}
          >
            +정보고시 추가
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductNotice;

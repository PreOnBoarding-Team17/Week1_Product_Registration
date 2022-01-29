import React, { useState, useContext } from "react";

import { FormContext } from "FormContextAPI/FormContextAPI";

import ProductNoticeInput from "./ProductNoticeInput";

import "Components/ProductNotice/scss/ProductNotice.scss";

const INFOOPTIONSNAME = [
  ["제품명 / 중량", "제품명 / 중량을 입력해 주세요."],
  ["원산지 / 원재료 함량", "원산지 / 원재료 함량을 입력해 주세요."],
  ["등급", "등급 (근내지방도 수치)를 입력해 주세요."],
  ["보관", "보관 방식을 입력해 주세요."],
  ["식품 유형", "식품 유형을 입력해 주세요. (ex)포장육"],
];

const DEFAULTINFO = ["name", "origin", "ranking", "keep", "foodType"];

function ProductNotice() {
  const [count, setCount] = useState(1);

  const context = useContext(FormContext).inputsAddData;
  const inputsAdd = context.state;
  const setInputsAdd = context.setState;

  const context2 = useContext(FormContext).productInfoNoticeData;
  const productInfoNotice = context2.state;
  const setProductInfoNotice = context2.setState;

  const onClickTopDeleteBtn = (e) => {
    e.preventDefault();

    let temp = [...inputsAdd];
    const idx = Number(e.target.value);
    temp = temp.slice(0, idx).concat(temp.slice(idx + 1, count));
    setInputsAdd(temp);

    temp = [...productInfoNotice];
    temp = temp.slice(0, idx).concat(temp.slice(idx + 1, count));
    setProductInfoNotice(temp);

    setCount(count - 1);
  };

  const onClickPlusInfoBtn = (e) => {
    e.preventDefault();

    let temp = [...productInfoNotice];
    temp.push(["", "", "", "", ""]);
    setProductInfoNotice(temp);
    setInputsAdd((prev) => [...prev, [["", ""]]]);
    setCount(count + 1);
  };

  const onClickAttributeBtn = (e) => {
    e.preventDefault();

    let temp = [...inputsAdd];
    temp[e.target.value] = [...temp[e.target.value], ["", ""]];
    setInputsAdd(temp);
  };

  const onClickAttributeDeleteBtn = (e) => {
    e.preventDefault();

    let temp = [...inputsAdd];
    const idx = Number(e.target.value[0]);
    const idx2 = Number(e.target.value[1]);

    temp[idx] = temp[idx]
      .slice(0, idx2)
      .concat(temp[idx].slice(idx2 + 1, temp[idx].length));

    setInputsAdd(temp);
  };

  const onChangeNewInput = (e, idx, idx2, num) => {
    let temp = [...inputsAdd];
    temp[idx][idx2][num] = e.target.value;
    setInputsAdd(temp);
  };

  return (
    <div className="product-notice-wrapper">
      <div className="title">상품 정보 고시</div>

      <div className="product-notice">
        {inputsAdd.map((e, idx) => (
          <div key={idx}>
            <section className="white-bg">
              <div className="product-notice__title">
                <div>정보고시{idx + 1}</div>
                <button
                  value={idx}
                  type="button"
                  className="delete"
                  onClick={onClickTopDeleteBtn}
                >
                  삭제
                </button>
              </div>
              <div className="product-notice__inputs">
                {INFOOPTIONSNAME.map((x, i) => {
                  return (
                    <ProductNoticeInput
                      idx={idx}
                      idy={i}
                      key={x[1]}
                      name={DEFAULTINFO[i]}
                      option={x}
                    />
                  );
                })}

                {inputsAdd[idx].map((e, idx2) => (
                  <div key={idx2} className="new-input">
                    <input
                      className="new-input__first"
                      placeholder="항목 제목 자유 입력"
                      name={String(idx) + String(idx2)}
                      value={inputsAdd[idx][idx2][0]}
                      onChange={(e) => onChangeNewInput(e, idx, idx2, 0)}
                    />
                    <div className="new-input__split">
                      <input
                        className="new-input__second"
                        placeholder="내용을 입력해주세요."
                        name={String(idx) + String(idx2)}
                        value={inputsAdd[idx][idx2][1]}
                        onChange={(e) => {
                          onChangeNewInput(e, idx, idx2, 1);
                        }}
                      />
                      <button
                        value={String(idx) + String(idx2)}
                        type="button"
                        className="new-input__delete"
                        onClick={onClickAttributeDeleteBtn}
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  value={idx}
                  className="plus"
                  onClick={onClickAttributeBtn}
                >
                  +항목 추가
                </button>
              </div>
            </section>
          </div>
        ))}
        <div className="plus-info">
          <button
            type="button"
            className="plus-info__btn"
            onClick={onClickPlusInfoBtn}
          >
            +정보고시 추가
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductNotice;

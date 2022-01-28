import React, { useContext } from "react";
import { FormContext } from "FormContextAPI/FormContextAPI";
import ProductOptionSet from "Components/ProductOption/ProductOptionSet";
import "Components/ProductOption/scss/ProductOption.scss";

export default function ProductOption() {
  const context = useContext(FormContext).optionData;
  const state = context.state;
  const setState = context.setState;

  return (
    <section className="gray-box">
      <div className="option__title-box">
        <p className="option__title">상품 옵션*</p>
        <button
          type="button"
          className="option__button"
          onClick={() => {
            setState([
              ...state,
              {
                optionImage: [],
                optionContents: [
                  {
                    optionName: "",
                    optionList: ["", "", "", "비과세"],
                    extraOption: [],
                  },
                ],
              },
            ]);
          }}
        >
          + 옵션 세트 추가
        </button>
      </div>
      <div className="option__list">
        <ProductOptionSet />
      </div>
    </section>
  );
}

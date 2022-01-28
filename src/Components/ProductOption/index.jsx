import React, { useState } from "react";
import { handleAddOption, handleDeleteOption } from "Utils/OptionSetting";
import ProductOptionSet from "Components/ProductOption/ProductOptionSet";
import "Components/ProductOption/scss/ProductOption.scss";

export default function ProductOption() {
  const [optionSet, setOptionSet] = useState([0]);
  return (
    <section className="gray-box">
      <div className="option__title-box">
        <p className="option__title">상품 옵션*</p>
        <button
          className="option__button"
          onClick={() => handleAddOption(optionSet, setOptionSet)}
        >
          + 옵션 세트 추가
        </button>
      </div>
      <div className="option__list">
        <ProductOptionSet
          optionSet={optionSet}
          onClick={() => handleDeleteOption(setOptionSet)}
        />
      </div>
    </section>
  );
}

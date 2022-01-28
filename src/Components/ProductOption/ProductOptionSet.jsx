import React, { useState } from "react";
import DeleteButton from "Utils/Button/DeleteButton";
import { handleAddOption, handleDeleteOption } from "Utils/OptionSetting";
import ProductOptionImage from "./ProductOptionImage";
import ProductOptionList from "Components/ProductOption/ProductOptionList";
import "Components/ProductOption/scss/ProductOptionSet.scss";

export default function ProductOptionSet({ optionSet, onClick }) {
  const [optionList, setOptionList] = useState([0]);
  return (
    <>
      {optionSet.length !== 0 ? (
        optionSet.map((element) => (
          <section key={element} className="option-set__container">
            <div className="option-set__button-box">
              <DeleteButton onClick={onClick} />
            </div>
            <div className="option-set__wrapper">
              <ProductOptionImage number={element} />
              <ProductOptionList
                optionList={optionList}
                onClick={() => handleDeleteOption(setOptionList)}
              />
              <button
                className="option-set__add-button"
                onClick={() => handleAddOption(optionList, setOptionList)}
              >
                + 옵션 추가
              </button>
            </div>
          </section>
        ))
      ) : (
        <div className="option-set__empty">
          <p>옵션세트를 추가하여 옵션을 구성해 주세요.</p>
        </div>
      )}
    </>
  );
}

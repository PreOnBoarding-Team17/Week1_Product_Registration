import React, { useContext } from "react";
import { FormContext } from "FormContextAPI/FormContextAPI";
import DeleteButton from "Utils/Button/DeleteButton";
import ProductOptionImage from "./ProductOptionImage";
import ProductOptionList from "Components/ProductOption/ProductOptionList";
import "Components/ProductOption/scss/ProductOptionSet.scss";

export default function ProductOptionSet() {
  const context = useContext(FormContext).optionData;
  const state = context.state;
  const setState = context.setState;

  return (
    <>
      {state.map((element, index) => (
        <section key={index} className="option-set__container">
          <div className="option-set__button-box">
            <DeleteButton
              onClick={() => {
                const originalState = [...state];
                originalState.splice(index, 1);
                setState(originalState);
              }}
            />
          </div>
          <div className="option-set__wrapper">
            <ProductOptionImage index={index} />
            <ProductOptionList index={index} />
            <button className="option-set__add-button">+ 옵션 추가</button>
          </div>
        </section>
      ))}
    </>
  );
}

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
      {state.length !== 0 ? (
        state.map((element, index) => (
          <section key={index} className="option-set__container">
            <div className="option-set__button-box">
              <DeleteButton
                onClick={() => {
                  const updatedState = [...state];
                  updatedState.splice(index, 1);
                  setState(updatedState);
                }}
              />
            </div>
            <div className="option-set__wrapper">
              <ProductOptionImage index={index} />
              {state[index].optionContents.map((element, contentsIndex) => (
                <ProductOptionList
                  key={contentsIndex}
                  index={index}
                  contentsIndex={contentsIndex}
                  contentsData={state[index].optionContents[contentsIndex]}
                />
              ))}
              <button
                className="option-set__add-button"
                type="button"
                onClick={() => {
                  const updatedState = [...state];
                  updatedState[index].optionContents.push({
                    optionName: "",
                    optionList: ["", "", "", "비과세"],
                    extraOption: [],
                  });
                  setState(updatedState);
                }}
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

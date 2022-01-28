import React, { useContext } from "react";
import { FormContext } from "FormContextAPI/FormContextAPI";
import DeleteButton from "Utils/Button/DeleteButton";
import "Components/ProductOption/scss/ProductOptionList.scss";

export default function ProductExtraOption({
  index,
  contentsIndex,
  extraIndex,
}) {
  const context = useContext(FormContext).optionData;
  const state = context.state;
  const setState = context.setState;
  const extraOption =
    state[index].optionContents[contentsIndex].extraOption[extraIndex];

  return (
    <>
      <article className="option-list__box">
        <div className="option-list__connect"></div>
        <div className="option-list__element mid">
          <input
            className="option-list__input"
            type="text"
            placeholder="추가 옵션명 (필수)"
            value={extraOption.name}
            onChange={(event) => {
              const updatedState = [...state];
              updatedState[index].optionContents[contentsIndex].extraOption[
                extraIndex
              ].name = event.target.value;
              setState(updatedState);
            }}
          />
        </div>
        <div className="option-list__element mid">
          <input
            className="option-list__input"
            type="number"
            placeholder="추가 옵션 정상가 (필수)"
            value={extraOption.price}
            onChange={(event) => {
              const updatedState = [...state];
              updatedState[index].optionContents[contentsIndex].extraOption[
                extraIndex
              ].price = event.target.value;
              setState(updatedState);
            }}
          />
          <p>원</p>
        </div>
        <DeleteButton
          onClick={() => {
            const updatedState = [...state];
            updatedState[index].optionContents[
              contentsIndex
            ].extraOption.splice(extraIndex, 1);
            setState(updatedState);
          }}
        />
      </article>
    </>
  );
}

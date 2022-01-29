import React, { useState, useEffect, useContext } from "react";
import { FormContext } from "FormContextAPI/FormContextAPI";
import DeleteButton from "Utils/Button/DeleteButton";
import ProductExtraOption from "Components/ProductOption/ProductExtraOption";
import "Components/ProductOption/scss/ProductOptionList.scss";

export default function ProductOptionList({
  index,
  contentsData,
  contentsIndex,
}) {
  const context = useContext(FormContext).optionData;
  const state = context.state;
  const setState = context.setState;
  const optionList = contentsData.optionList;

  const [data, setData] = useState(["", "", "", "비과세"]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedData = [...data];
    updatedData[name] = value;
    setData(updatedData);
  };

  useEffect(() => {
    const updatedState = [...state];
    updatedState[index].optionContents[contentsIndex].optionList = data;
    setState(updatedState);
  }, [data]);

  return (
    <>
      <section className="option-list__container">
        <article className="option-list__box flex-end">
          <DeleteButton
            onClick={() => {
              const updatedState = [...state];
              const updatedContents = updatedState[index].optionContents;
              updatedContents.splice(contentsIndex, 1);
              if (updatedContents.length === 0) {
                updatedState.splice(contentsIndex, 1);
                setState(updatedState);
                return;
              }
              updatedContents.optionList = updatedContents;
              setState(updatedState);
            }}
          />
        </article>
        <article className="option-list__box">
          <input
            className="option-list__input long"
            type="text"
            placeholder="옵션명을 입력해 주세요.(필수)"
            value={contentsData.optionName}
            onChange={(event) => {
              const updatedState = [...state];
              updatedState[index].optionContents[contentsIndex].optionName =
                event.target.value;
              setState(updatedState);
            }}
          />
        </article>
        <article className="option-list__box">
          <div className="option-list__element">
            <input
              className="option-list__input"
              type="number"
              name="0"
              value={optionList[0]}
              placeholder="상품 정상가 (필수)"
              onChange={handleChange}
            />
            <p>원</p>
          </div>
          <div className="option-list__element">
            {parseInt(optionList[0]) > parseInt(optionList[1])
              ? `${
                  100 -
                  parseInt(
                    (parseInt(optionList[1]) / parseInt(optionList[0])) * 100
                  )
                } %`
              : "할인율(%)"}
          </div>
          <div className="option-list__element">
            <input
              className="option-list__input"
              type="number"
              name="1"
              value={optionList[1]}
              placeholder="상품 판매가 (필수)"
              onChange={handleChange}
            />
            <p>원</p>
          </div>
          <div className="option-list__element">
            <input
              className="option-list__input"
              type="number"
              name="2"
              value={optionList[2]}
              placeholder="재고 (필수)"
              onChange={handleChange}
            />
            <p>개</p>
          </div>
          <select
            className="option-list__select"
            name="3"
            onChange={handleChange}
          >
            <option value="비과세">비과세</option>
            <option value="과세">과세</option>
          </select>
        </article>
        {state[index].optionContents[contentsIndex].extraOption.map(
          (element, extraIndex) => (
            <ProductExtraOption
              key={extraIndex}
              index={index}
              contentsIndex={contentsIndex}
              extraIndex={extraIndex}
            />
          )
        )}
        <article className="option-list__box">
          <button
            type="button"
            className="option-list__add"
            onClick={() => {
              const updatedState = [...state];
              contentsData.extraOption.push({
                name: "",
                price: "",
              });
              setState(updatedState);
            }}
          >
            <p className="option-list__add-plus">+</p>
            <p>추가 옵션 상품 추가</p>
          </button>
        </article>
      </section>
    </>
  );
}

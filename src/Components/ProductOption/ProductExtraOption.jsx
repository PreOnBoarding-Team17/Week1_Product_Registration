import React from "react";
import DeleteButton from "Utils/Button/DeleteButton";
import "Components/ProductOption/scss/ProductOptionList.scss";

export default function ProductExtraOption({ extraOption, onClick }) {
  return (
    <>
      {extraOption.length !== 0 &&
        extraOption.map((element, index) => (
          <article key={index} id={element} className="option-list__box">
            <div className="option-list__connect"></div>
            <div className="option-list__element mid">
              <input
                className="option-list__input"
                type="text"
                placeholder="추가 옵션명 (필수)"
              />
            </div>
            <div className="option-list__element mid">
              <input
                className="option-list__input"
                type="number"
                placeholder="추가 옵션 정상가 (필수)"
              />
              <p>원</p>
            </div>
            <DeleteButton onClick={onClick} />
          </article>
        ))}
    </>
  );
}

import React from "react";
import DeleteButton from "Utils/Button/DeleteButton";
import ProductExtraOption from "Components/ProductOption/ProductExtraOption";
import "Components/ProductOption/scss/ProductOptionList.scss";

export default function ProductOptionList() {
  return (
    <section className="option-list__container">
      <article className="option-list__box flex-end">
        <DeleteButton />
      </article>
      <article className="option-list__box">
        <input
          className="option-list__input long"
          type="text"
          placeholder="옵션명을 입력해 주세요.(필수)"
        />
      </article>
      <article className="option-list__box">
        <div className="option-list__element">
          <input
            className="option-list__input"
            type="number"
            placeholder="상품 정상가 (필수)"
          />
          <p>원</p>
        </div>
        <div className="option-list__element">
          <p>10%</p>
        </div>
        <div className="option-list__element">
          <input
            className="option-list__input"
            type="number"
            placeholder="상품 판매가 (필수)"
          />
          <p>원</p>
        </div>
        <div className="option-list__element">
          <input
            className="option-list__input"
            type="number"
            placeholder="재고 (필수)"
          />
          <p>개</p>
        </div>
        <select className="option-list__select" name="과세 여부" id="">
          <option value="비과세">비과세</option>
          <option value="과세">과세</option>
        </select>
      </article>
      <ProductExtraOption />
      <article className="option-list__box">
        <button className="option-list__add">
          <p className="option-list__add-plus">+</p>
          <p>추가 옵션 상품 추가</p>
        </button>
      </article>
    </section>
  );
}

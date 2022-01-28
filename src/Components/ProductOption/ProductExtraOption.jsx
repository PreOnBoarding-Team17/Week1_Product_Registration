import React from "react";
import DeleteButton from "Utils/Button/DeleteButton";
import "Components/ProductOption/scss/ProductExtraOption.scss";

export default function ProductExtraOption() {
  return (
    <section className="extra-option__container">
      <article className="extra-option__box flex-end">
        <DeleteButton />
      </article>
      <article className="extra-option__box">
        <input
          className="extra-option__input long"
          type="text"
          placeholder="옵션명을 입력해 주세요.(필수)"
        />
      </article>
      <article className="extra-option__box">
        <div className="extra-option__element">
          <input
            className="extra-option__input"
            type="number"
            placeholder="상품 정상가 (필수)"
          />
          <p>원</p>
        </div>
        <div className="extra-option__element">
          <p>10%</p>
        </div>
        <div className="extra-option__element">
          <input
            className="extra-option__input"
            type="number"
            placeholder="상품 판매가 (필수)"
          />
          <p>원</p>
        </div>
        <div className="extra-option__element">
          <input
            className="extra-option__input"
            type="number"
            placeholder="재고 (필수)"
          />
          <p>개</p>
        </div>
        <select className="extra-option__select" name="과세 여부" id="">
          <option value="비과세">비과세</option>
          <option value="과세">과세</option>
        </select>
      </article>
      <article className="extra-option__box">
        <div className="extra-option__connect"></div>
        <div className="extra-option__element mid">
          <input
            className="extra-option__input"
            type="text"
            placeholder="추가 옵션명 (필수)"
          />
        </div>
        <div className="extra-option__element mid">
          <input
            className="extra-option__input"
            type="number"
            placeholder="추가 옵션 정상가 (필수)"
          />
          <p>원</p>
        </div>
        <DeleteButton />
      </article>
      <article className="extra-option__box">
        <button className="extra-option__add">
          <p className="extra-option__add-plus">+</p>
          <p>추가 옵션 상품 추가</p>
        </button>
      </article>
    </section>
  );
}

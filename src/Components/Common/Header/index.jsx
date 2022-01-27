import React from "react";
import "Components/Common/Header/scss/Header.scss";

export default function Header() {
  return (
    <header className="header__container">
      <div className="header__box-blank"></div>
      <div className="header__box">
        <h1>상품 등록</h1>
        <button type="submit">저장하기</button>
      </div>
    </header>
  );
}

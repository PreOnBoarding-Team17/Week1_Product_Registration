import React from "react";
import ProductCategory from "Components/ProductInformation/ProductCategory";
import ProductFilterTag from "./ProductFilterTag";
import ProductName from "./ProductName";
import ProductCompsitionInfo from "./ProductCompsitionInfo";
import "Components/ProductInformation/scss/ProductInformation.scss";

function ProductInformation() {
  return (
    <section className="gray-box information__container">
      <div className="title">상품 기본 정보</div>
      <div className="menu">
        <div className="left-menu">카테고리 *</div>
        <div className="right-menu">
          <ProductCategory />
        </div>
      </div>
      <div className="menu">
        <div className="left-menu">필터 태그</div>
        <div className="right-menu">
          <ProductFilterTag />
        </div>
      </div>
      <div className="menu">
        <div className="left-menu">상품명 *</div>
        <div className="name-menu">
          <ProductName />
        </div>
        <div className="left-menu">상품 코드</div>
        <div className="name-menu">code</div>
      </div>
      <div className="menu">
        <div className="left-menu">상품 구성 소개 정보 *</div>
        <div className="right-menu">
          <ProductCompsitionInfo />
        </div>
      </div>
      <div className="menu">
        <div className="left-menu">상품 썸네일</div>
        <div className="right-menu"></div>
      </div>
      <div className="menu">
        <div className="left-menu">상품 대표 이미지</div>
        <div className="right-menu"></div>
      </div>
      <div className="menu">
        <div className="left-menu">상품 총 재고 *</div>
        <div className="right-menu">00개</div>
      </div>
    </section>
  );
}

export default ProductInformation;

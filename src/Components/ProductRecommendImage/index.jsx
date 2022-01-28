import React from "react";
import ProductImageContainer from "Components/ProductRecommendImage/ProductImageContainer";

const IMGTITLE = ["상품 소개 이미지", "구매자 추천 이미지"];

function ProductRecommendImage() {
  return (
    <div>
      <ProductImageContainer title={IMGTITLE[0]} />
      <ProductImageContainer title={IMGTITLE[1]} />
    </div>
  );
}

export default ProductRecommendImage;

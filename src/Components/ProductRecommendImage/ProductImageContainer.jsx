import React from "react";
import ProductImageUploader from "Components/ProductIntroImage/ProductImageUploader";

import "Components/ProductRecommendImage/scss/ProductImageContainer.scss";

function ProductImageContainer({ title }) {
  return (
    <section className="gray-box">
      <div className="img__title">{title}</div>
      <div className="menu img-place">
        <ProductImageUploader />
      </div>
    </section>
  );
}

export default ProductImageContainer;

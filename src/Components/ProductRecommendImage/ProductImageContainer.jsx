import React from "react";
import ProductImageUploader from "Components/ProductIntroImage/ProductImageUploader";

import "Components/ProductRecommendImage/scss/ProductImageContainer.scss";

function ProductImageContainer({ title, name, files, onChange, isSingular }) {
  return (
    <section className="gray-box">
      <div className="img__title">{title}</div>
      <div className="menu img-place">
        <ProductImageUploader
          name={name}
          files={files}
          isSingular={isSingular}
          onChange={onChange}
        />
      </div>
    </section>
  );
}

export default ProductImageContainer;

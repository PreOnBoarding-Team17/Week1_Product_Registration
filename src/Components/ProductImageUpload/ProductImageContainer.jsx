import React from "react";
import ImageUploader from "Utils/ImageUploader";

import "Components/ProductImageUpload/scss/ProductImageContainer.scss";

function ProductImageContainer({ title, name, files, onChange, isSingular }) {
  return (
    <section className="gray-box">
      <div className="img__title">{title}</div>
      <div className="menu img-place">
        <ImageUploader
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

import React, { useState } from "react";
import "Components/ProductOption/scss/ProductOptionImage.scss";

export default function ProductOptionImage() {
  const [image, setImage] = useState("");
  const handleImage = () => {
    setImage();
  };
  return (
    <section className="option-image__container">
      <div className="option-image__input-box">
        <input
          className="option-image__input"
          type="file"
          accept="image/*"
          onChange={handleImage}
        />
        <button className="option-image__button">+ 이미지 첨부</button>
      </div>
      {image.length !== 0 ? <p>{image}</p> : ""}
    </section>
  );
}

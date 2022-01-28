import React, { useState, useRef } from "react";
import "Components/ProductOption/scss/ProductOptionImage.scss";

export default function ProductOptionImage({ number }) {
  const [image, setImage] = useState([]);
  const inputRef = useRef(null);
  console.log(image);
  const handleAddImage = (event) => {
    if (event.target.files) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const previewImage = document.getElementById(`preview-image${number}`);
        previewImage.src = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      setImage((image) => [...image, event.target.files[0].name]);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
    inputRef.current.value = null;
  };

  return (
    <section className="option-image__container">
      {image.length !== 0 ? (
        <img
          className="option-image__preview-image"
          id={`preview-image${number}`}
          src=""
          alt="프리뷰 이미지"
        />
      ) : (
        <div className="option-image__input-box">
          <input
            className="option-image__input"
            type="file"
            accept="image/*"
            onChange={handleAddImage}
            ref={inputRef}
          />
          <button className="option-image__button" onClick={handleClick}>
            + 이미지 첨부
          </button>
        </div>
      )}
    </section>
  );
}

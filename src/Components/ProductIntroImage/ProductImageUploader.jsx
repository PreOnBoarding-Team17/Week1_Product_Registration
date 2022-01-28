import React, { useRef, useState, useEffect } from "react";
import "Components/ProductIntroImage/scss/ProductImageUploader.scss";

const ProductImageUploader = () => {
  const [files, setFiles] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    console.log(files);
  }, [files]);

  const handleClick = () => {
    inputRef.current.click();
    inputRef.current.value = null;
  };

  const handleFile = (e) => {
    const isSame = files.filter(
      (item) => item.lastModified === e.target.files[0].lastModified
    );
    if (isSame.length > 0) {
      return;
    }
    setFiles((prev) => [e.target.files[0], ...prev]);
  };

  const handleDelete = (e) => {
    const newFiles = files.filter(
      (item) => item.lastModified !== Number(e.target.id)
    );
    setFiles(newFiles);
  };

  return (
    <div className="product-image-uploader">
      <input
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="product-image-uploader__input"
        ref={inputRef}
      />
      <button
        type="button"
        className="product-image-uploader__button"
        onClick={handleClick}
      >
        + 이미지 첨부
      </button>
      <div className="product-image-uploader-info">
        {files &&
          files.map((item) => (
            <div
              className="product-image-uploader-info-box"
              key={item.lastModified}
            >
              <p className="product-image-uploader-info-box__file">
                {item.name}
              </p>
              <button
                className="product-image-uploader-info-box__button"
                id={item.lastModified}
                onClick={handleDelete}
              >
                X
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductImageUploader;

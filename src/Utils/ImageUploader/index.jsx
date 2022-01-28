import React, { useRef } from "react";
import "Utils/ImageUploader/scss/ImageUploader.scss";

const ImageUploader = ({ name, files, onChange, isSingular }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
    inputRef.current.value = null;
  };

  const handleFile = (e) => {
    if (isSingular) {
      onChange(e, [e.target.files[0]]);
      return;
    }

    const isSame = files.filter(
      (item) => item.lastModified === e.target.files[0].lastModified
    );
    if (isSame.length > 0) {
      return;
    }

    onChange(e, [e.target.files[0], ...files]);
  };

  const handleDelete = (e) => {
    const newFiles = files.filter(
      (item) => item.lastModified !== Number(e.target.id)
    );
    onChange(e, newFiles);
  };

  return (
    <div className="product-image-uploader">
      <input
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="product-image-uploader__input"
        ref={inputRef}
        name={name}
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
                type="button"
                className="product-image-uploader-info-box__button"
                id={item.lastModified}
                onClick={handleDelete}
                name={name}
              >
                X
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageUploader;

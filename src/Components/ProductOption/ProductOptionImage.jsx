import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from "react";
import { FormContext } from "FormContextAPI/FormContextAPI";
import "Components/ProductOption/scss/ProductOptionImage.scss";

export default function ProductOptionImage({ index }) {
  const context = useContext(FormContext).optionData;
  const state = context.state;
  const setState = context.setState;
  const [image, setImage] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const updatedState = [...state];
    updatedState[index].optionImage = image;
    setState(updatedState);
  }, [image]);

  const handleClick = useCallback(() => {
    inputRef.current.click();
  }, [inputRef]);

  return (
    <section className="option-image__container">
      {state[index].optionImage.length !== 0 ? (
        <img
          className="option-image__preview-image"
          src={URL.createObjectURL(state[index].optionImage[0])}
          alt="프리뷰 이미지"
        />
      ) : (
        <div className="option-image__input-box">
          <input
            className="option-image__input"
            type="file"
            accept="image/*"
            onChange={(event) => setImage([...image, event.target.files[0]])}
            ref={inputRef}
          />
          <button
            type="button"
            className="option-image__button"
            onClick={handleClick}
          >
            + 이미지 첨부
          </button>
        </div>
      )}
    </section>
  );
}

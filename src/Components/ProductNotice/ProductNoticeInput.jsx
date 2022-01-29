import React, { useContext } from "react";

import { FormContext } from "FormContextAPI/FormContextAPI";
import "Components/ProductNotice/scss/ProductNoticeInput.scss";

function ProductNoticeInput({ idx, idy, name, option }) {
  const context = useContext(FormContext).productInfoNoticeData;
  const productInfoNotice = context.state;
  const setProductInfoNotice = context.setState;

  const onChange = (e) => {
    let temp = [...productInfoNotice];
    temp[idx][idy] = e.target.value;
    setProductInfoNotice(temp);
  };
  return (
    <div className="product-notice-input-container">
      {option[0]}

      <input
        name={name}
        value={productInfoNotice[idx][idy]}
        placeholder={option[1]}
        onChange={onChange}
      />
    </div>
  );
}

export default ProductNoticeInput;

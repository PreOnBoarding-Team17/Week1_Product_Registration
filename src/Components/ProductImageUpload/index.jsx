import React, { useContext } from "react";
import ProductImageContainer from "Components/ProductImageUpload/ProductImageContainer";
import { FormContext } from "FormContextAPI/FormContextAPI";

const IMGTITLE = ["상품 소개 이미지", "구매자 추천 이미지"];

function ProductImageUpload() {
  const context = useContext(FormContext).filesData;
  const inputs = context.state;
  const onFileChange = context.setState;

  return (
    <div>
      <ProductImageContainer
        title={IMGTITLE[0]}
        files={inputs.productIntroImages}
        name="productIntroImages"
        onChange={onFileChange}
      />
      <ProductImageContainer
        title={IMGTITLE[1]}
        files={inputs.productRecommendImages}
        name="productRecommendImages"
        onChange={onFileChange}
      />
    </div>
  );
}

export default ProductImageUpload;

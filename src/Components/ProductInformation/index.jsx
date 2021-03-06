import React, { useState, useEffect, useContext } from "react";
import { FormContext } from "FormContextAPI/FormContextAPI";
import ProductCategory from "Components/ProductInformation/ProductCategory";
import ProductFilterTag from "./ProductFilterTag";
import ProductName from "./ProductName";
import ProductCompositionInfo from "./ProductCompositionInfo";
import ImageUploader from "Utils/ImageUploader";
import "Components/ProductInformation/scss/ProductInformation.scss";

function ProductInformation() {
  const [total, setTotal] = useState(0);
  const context = useContext(FormContext).informationData;
  const infoData = context.state;
  const onChangeInfoData = context.setState;

  const fileContext = useContext(FormContext).filesData;
  const inputs = fileContext.state;
  const onFileChange = fileContext.setState;

  const optionContext = useContext(FormContext).optionData;
  const option = optionContext.state;

  const handleTotal = () => {
    setTotal(0);
    let newTotal = 0;
    option.length !== 0 &&
      option.forEach((optionSet) => {
        optionSet.optionContents.forEach((list) => {
          newTotal += Number(list.optionList[2]);
        });
      });

    setTotal(newTotal);
    onChangeInfoData("totalProduct", newTotal);
  };

  useEffect(() => {
    handleTotal();
  }, [option]);

  return (
    <section className="gray-box information__container">
      <div className="title">상품 기본 정보</div>
      <div className="menu">
        <div className="left-menu">카테고리 *</div>
        <div className="right-menu">
          <ProductCategory
            value={infoData["category"]}
            onChange={onChangeInfoData}
          />
        </div>
      </div>
      <div className="menu">
        <div className="left-menu alignItems_center">필터 태그</div>
        <div className="right-menu">
          <ProductFilterTag
            filterTag={infoData["filterTag"]}
            setFilterTag={onChangeInfoData}
          />
        </div>
      </div>
      <div className="menu">
        <div className="left-menu alignItems_center">상품명 *</div>
        <div className="name-menu">
          <ProductName
            value={infoData["productName"]}
            onChange={onChangeInfoData}
          />
        </div>
        <div className="left-menu alignItems_center">상품 코드</div>
        <div className="name-menu">
          <span className="name-menu__unique-code">
            {infoData["productCode"]}
          </span>
        </div>
      </div>
      <div className="menu">
        <div className="left-menu alignItems_center">상품 구성 소개 정보 *</div>
        <div className="right-menu">
          <ProductCompositionInfo
            value={infoData["productComposition"]}
            onChange={onChangeInfoData}
          />
        </div>
      </div>
      <div className="menu">
        <div className="left-menu alignItems_center">상품 썸네일</div>
        <div className="right-menu">
          <ImageUploader
            name="productThumnailImage"
            files={inputs.productThumnailImage}
            isSingular={true}
            onChange={onFileChange}
          />
        </div>
      </div>
      <div className="menu">
        <div className="left-menu alignItems_center">상품 대표 이미지</div>
        <div className="right-menu">
          <ImageUploader
            name="productMainImages"
            files={inputs.productMainImages}
            onChange={onFileChange}
          />
        </div>
      </div>
      <div className="menu">
        <div className="left-menu">상품 총 재고 *</div>
        <div className="right-menu">{total}개</div>
      </div>
    </section>
  );
}

export default ProductInformation;

import React from "react";
import Header from "Components/Common/Header";
import ProductPeriod from "Components/ProductPeriod";
import ProductInformation from "Components/ProductInformation";
import ProductOption from "Components/ProductOption";
import ProductImageUpload from "Components/ProductImageUpload";
import ProductNotice from "Components/ProductNotice";
import ProductShippingSetting from "Components/ProductShippingSetting";

function ProductRegister() {
  return (
    <form style={{ paddingLeft: "200px" }}>
      <Header />
      <ProductPeriod />
      <ProductInformation />
      <ProductOption />
      <ProductImageUpload />
      <ProductNotice />
      <ProductShippingSetting />
    </form>
  );
}

export default ProductRegister;

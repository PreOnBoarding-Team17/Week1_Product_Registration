import React from "react";
import Navigation from "Components/Common/Navigation";
import ProductRegister from "Pages/ProductRegister";
import "Utils/Styles/common.scss";

function App() {
  return (
    <div>
      <Navigation />
      <div style={{ display: "flex" }}>
        <div style={{ width: "200px" }}></div>
        <ProductRegister />
      </div>
    </div>
  );
}

export default App;

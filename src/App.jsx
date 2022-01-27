import React from "react";
import Navigation from "Components/Common/Navigation";
import ProductRegister from "Pages/ProductRegister";
import "Utils/Styles/common.scss";
import "Utils/Styles/_reset.scss";

function App() {
  return (
    <div>
      <Navigation />
      <ProductRegister />
    </div>
  );
}

export default App;

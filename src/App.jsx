import React from "react";
import Navigation from "Components/Common/Navigation";
import ProductRegister from "Pages/ProductRegister";

import { FormContentAPI } from "FormContextAPI/FormContextAPI";

import "Utils/Styles/common.scss";
import "Utils/Styles/_reset.scss";

function App() {
  return (
    <FormContentAPI>
      <Navigation />
      <ProductRegister />
    </FormContentAPI>
  );
}

export default App;

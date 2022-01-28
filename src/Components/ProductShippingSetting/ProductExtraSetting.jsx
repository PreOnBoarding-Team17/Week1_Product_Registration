import React from "react";
import Toggle from "Utils/Toggle/Toggle";

import "Components/ProductShippingSetting/scss/ProductExtraSetting.scss";

function ProdectExtraSetting({ title, option, name }) {
  return (
    <section className="gray-box">
      <div className="title">{title}</div>
      <div className="menu">
        <div className="left-menu">{option}</div>
        <div className="right-menu toggle-contain">
          <Toggle name={name} />
        </div>
      </div>
    </section>
  );
}

export default ProdectExtraSetting;

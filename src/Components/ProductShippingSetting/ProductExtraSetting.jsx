import React from "react";
import Toggle from "Utils/Toggle/Toggle";

function ProdectExtraSetting({ title, option }) {
  return (
    <section className="gray-box">
      <div className="title">{title}</div>
      <div className="menu">
        <div className="left-menu">{option}</div>
        <div className="right-menu">
          <Toggle />
        </div>
      </div>
    </section>
  );
}

export default ProdectExtraSetting;

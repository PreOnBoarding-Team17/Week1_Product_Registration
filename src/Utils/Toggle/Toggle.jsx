import React from "react";
import "Utils/Toggle/Toggle.scss";

function Toggle({ name, value, onChange }) {
  return (
    <div className="toggle-container">
      <label className="toggle">
        <input type="checkbox" name={name} value={value} onChange={onChange} />

        <span className="slider" />
      </label>
    </div>
  );
}

export default Toggle;

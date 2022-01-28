import React, { useState } from "react";
import "Utils/Toggle/Toggle.scss";

function Toggle() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="toggle-container">
      <label className="toggle">
        <input
          type="checkbox"
          onChange={() => {
            setToggle(!toggle);
          }}
        />
        <span className="slider" />
      </label>
    </div>
  );
}

export default Toggle;

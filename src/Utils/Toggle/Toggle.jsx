import React, { useEffect, useContext, useState } from "react";
import { FormContext } from "FormContextAPI/FormContextAPI";

import "Utils/Toggle/Toggle.scss";

function Toggle({ name }) {
  const [checked, setChecked] = useState(false);
  const context = useContext(FormContext).togglesData;

  const toggles = context.state;
  const onToggle = context.setState;

  useEffect(() => {
    if (toggles[name] === "true") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [toggles[name]]);

  return (
    <div className="toggle-container">
      <label className="toggle">
        {checked ? (
          <input
            type="checkbox"
            name={name}
            value={toggles[name]}
            onChange={onToggle}
            checked={checked}
          />
        ) : (
          <input
            type="checkbox"
            name={name}
            value={toggles[name]}
            onChange={onToggle}
            checked={false}
          />
        )}

        <span className="slider" />
      </label>
    </div>
  );
}

export default Toggle;

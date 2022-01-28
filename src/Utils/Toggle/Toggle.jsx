import React, { useEffect, useContext, useState } from "react";
import { FormContext } from "FormContextAPI/FormContextAPI";
import "Utils/Toggle/Toggle.scss";

function Toggle({ name, value, onChange }) {
  const [checked, setChecked] = useState(false);
  const context = useContext(FormContext).inputsData;
  const inputs = context.state;

  useEffect(() => {
    if (inputs[name] === "true") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [inputs[name]]);

  return (
    <div className="toggle-container">
      <label className="toggle">
        {value === "true" ? (
          <input
            type="checkbox"
            name={name}
            value={value}
            onClick={onChange}
            checked={checked}
          />
        ) : (
          <input
            type="checkbox"
            name={name}
            value={value}
            onClick={onChange}
            checked={checked}
          />
        )}

        <span className="slider" />
      </label>
    </div>
  );
}

export default Toggle;

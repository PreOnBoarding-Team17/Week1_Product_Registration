import React, { useContext } from "react";
import { FormContext } from "FormContextAPI/FormContextAPI";

import "Components/ProductPeriod/scss/PrductPeriodContainer.scss";

function PrductPeriodContainer({ name, period, dateType }) {
  const context = useContext(FormContext).inputsData;
  const inputs = context.state;
  const onChange = context.setState;

  return (
    <div className="product-period-container__input">
      <div className="product-period-container__input--radio">
        {period.map((x, idx) => (
          <label key={idx}>
            {Number(inputs[name]) === idx ? (
              <>
                <input
                  type="radio"
                  name={name}
                  value={String(idx)}
                  onChange={onChange}
                  checked
                />
              </>
            ) : (
              <>
                <input
                  type="radio"
                  name={name}
                  value={String(idx)}
                  onChange={onChange}
                />
              </>
            )}
            <span></span>
            {x}
          </label>
        ))}
      </div>
      {inputs[name] === "2" && (
        <div className="product-period-container__input--date">
          <input
            type={dateType}
            name={`${name}DateFrom`}
            value={inputs[`${name}DateFrom`]}
            onChange={onChange}
          />
          <div className="date-middle">~</div>
          <input
            type={dateType}
            name={`${name}DateTo`}
            value={inputs[`${name}DateTo`]}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
}

export default PrductPeriodContainer;

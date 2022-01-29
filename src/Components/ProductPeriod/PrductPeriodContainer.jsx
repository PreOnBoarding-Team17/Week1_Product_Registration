import React, { useContext } from "react";
import { FormContext } from "FormContextAPI/FormContextAPI";

import "Components/ProductPeriod/scss/PrductPeriodContainer.scss";

function PrductPeriodContainer({ name, period, dateType }) {
  const context = useContext(FormContext).inputsData;
  const inputs = context.state;
  const onChange = context.setState;

  const context2 = useContext(FormContext).datesData;
  const dates = context2.state;
  const onDatesChange = context2.setState;

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
                  checked={false}
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
            value={dates[`${name}DateFrom`]}
            onChange={onDatesChange}
          />
          <div className="date-middle">~</div>
          <input
            type={dateType}
            name={`${name}DateTo`}
            value={dates[`${name}DateTo`]}
            onChange={onDatesChange}
          />
        </div>
      )}
    </div>
  );
}

export default PrductPeriodContainer;

import React from "react";

import "./Scss/PrductPeriodContainer.scss";

function PrductPeriodContainer({ title, period, dateType }) {
  return (
    <div className="product-period-container">
      <div className="product-period-container__title">{title}</div>
      <div className="product-period-container__input">
        <div className="product-period-container__input--radio">
          {period.map((x, idx) => (
            <label key={idx}>
              <input type="radio" name={x} />
              {x}
            </label>
          ))}
        </div>
        <div className="product-period-container__input--date">
          <input type={dateType} />
          <div>~</div>
          <input type={dateType} />
        </div>
      </div>
    </div>
  );
}

export default PrductPeriodContainer;

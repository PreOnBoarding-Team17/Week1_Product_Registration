import React from "react";

import "Components/ProductPeriod/scss/PrductPeriodContainer.scss";

function PrductPeriodContainer({ period, dateType }) {
  return (
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
        <div className="date-middle">~</div>
        <input type={dateType} />
      </div>
    </div>
  );
}

export default PrductPeriodContainer;

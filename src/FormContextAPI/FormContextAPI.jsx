import React, { createContext, useState, useEffect } from "react";

const FormContext = createContext();

function FormContentAPI({ children }) {
  const [inputs, setInputs] = useState({
    productExposure: 0,
    productSales: 0,
  });

  const [dates, setDates] = useState({
    productExposureDateFrom: "",
    productExposureDateTo: "",
    productSalesDateFrom: "",
    productSalesDateTo: "",
    orderTimeFrom: "",
    orderTimeTo: "",
    dawnShipping: "",
    normalShipping: "",
  });

  const [toggles, setToggles] = useState({
    shippingDate: "false",
    pickUpVisit: "false",
    reservedShipping: "true",
    mileage: "true",
    thanks: "false",
  });

  // const [first, setfirst] = useState(second);

  const onChange = (e) => {
    let { value, name } = e.target;
    let copy = { ...inputs };
    copy[name] = value;

    setInputs({ ...copy });
  };

  const onDatesChange = (e) => {
    let { value, name } = e.target;
    let copy = { ...dates };

    if (name === "dawnShipping" || name === "normalShipping") {
      const timeOrderFrom = Date.parse(dates[`orderTimeFrom`]);
      const timeOrderTo = Date.parse(dates[`orderTimeFrom`]);
      const dateShipping = Date.parse(value);
      console.log(timeOrderFrom, timeOrderTo, dateShipping);

      if (!isNaN(copy["orderTimeFrom"]) || !isNaN(copy["orderTimeTo"])) {
        alert("주문시간 먼저 작성하세요");
      } else if (
        dateShipping - timeOrderFrom < 0 ||
        timeOrderTo - timeOrderTo < 0
      ) {
        alert("주문시간 이후로 출고일을 지정해주세요.");
      }
    }

    copy[name] = value;
    setDates({ ...copy });
  };

  const onToggle = (e) => {
    let { value, name } = e.target;
    let copy = { ...toggles };

    if (value === `true`) {
      copy[name] = "false";
    } else {
      copy[name] = "true";

      if (name === "reservedShipping") {
        copy["shippingDate"] = "false";
        copy["pickUpVisit"] = "false";
      } else if (name === "shippingDate" || name === "pickUpVisit") {
        copy["reservedShipping"] = "false";
        console.log(copy);
      }
    }

    setToggles({ ...copy });
  };

  const data = {
    inputsData: {
      state: inputs,
      setState: onChange,
    },
    togglesData: {
      state: toggles,
      setState: onToggle,
    },
    datesData: {
      state: dates,
      setState: onDatesChange,
    },
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
}

export { FormContext, FormContentAPI };

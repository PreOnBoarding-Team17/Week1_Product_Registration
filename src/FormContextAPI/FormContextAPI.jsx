import React, { createContext, useState, useEffect } from "react";

const FormContext = createContext();

function FormContentAPI({ children }) {
  const [inputs, setInputs] = useState({
    //자신이 쓸 변수들 `name : 초기값`이 형식으로 선언
    productExposure: 0,
    productExposureDateFrom: "",
    productExposureDateTo: "",
    productSales: 0,
    productSalesDateFrom: "",
    productSalesDateTo: "",
    shippingDate: "false",
    pickUpVisit: "false",
    reservedShipping: "true",
    orderTimeFrom: "",
    orderTimeTo: "",
    dawnShipping: "",
    normalShipping: "",
    mileage: "true",
    thanks: "false",
  });
  //state는 예시 입니다.
  const [state, setState] = useState("state");

  const onChange = (e) => {
    let { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    let copy = { ...inputs };

    if (value === `true`) {
      copy[name] = "false";
    } else if (value === `false`) {
      copy[name] = "true";

      if (name === "shippingDate" || name === "pickUpVisit") {
        copy["reservedShipping"] = "false";
      } else if (name === "reservedShipping") {
        copy["shippingDate"] = "false";
        copy["pickUpVisit"] = "false";
      }
    } else {
      copy[name] = value;
    }

    setInputs({ ...copy });
  };

  const data = {
    inputsData: {
      state: inputs,
      setState: onChange,
    },
    stateData: {
      state: state,
      setState: setState,
    },
  };

  useEffect(() => {
    //inputs 바뀌고 즉시 검사할꺼 있으면 여기
    console.log(data);
  }, [inputs]);

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
}

export { FormContext, FormContentAPI };

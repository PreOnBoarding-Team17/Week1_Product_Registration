import React, { createContext, useState, useEffect } from "react";

const FormContext = createContext({
  inputs: {},
  onChange: () => {},
});

function FormContentAPI({ children }) {
  const [inputs, setInputs] = useState({
    //자신이 쓸 변수들 `name : 초기값`이 형식으로 선언
    productExposure: 0,
    productExposureDateFrom: "",
    productExposureDateTo: "",
    productSales: 0,
    productSalesDateFrom: "",
    productSalesDateTo: "",
    shippingDate: false,
    pickUpVisit: false,
    reservedShipping: false,
    orderTimeFrom: "",
    orderTimeTo: "",
    dawnShipping: "",
    normalShipping: "",
    mileage: false,
    thanks: false,
  });

  // <input name=자기가 선언한 변수명 value={inputs.자기가 선언한 변수명}/>

  const onChange = (e) => {
    let { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출

    if (value === `true`) {
      value = false;
    } else if (value === `false`) {
      value = true;
    }

    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  return (
    <FormContext.Provider
      value={{
        inputs,
        onChange,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export { FormContext, FormContentAPI };

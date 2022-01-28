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
  
  const [images, setImages] = useState({
    productIntroImages: [],
    productRecommendImages: [],
    productThumnailImage: [],
    productMainImages: [],
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

  const [infoData, setInfoData] = useState({
    category: [],
    filterTag: [],
    productName: "",
    productCode: (Math.random() * 1e12).toString(36).substring(0, 8),
    productComposition: "",
    productthumbnail: [],
    productMainImage: [],
    totalProduct: 0,
  });

  const onChangeInfoData = (name, newData) => {
    const copy = { ...infoData };
    copy[name] = newData;
    setInfoData({ ...copy });
  };
  
  const onFileChange = (e, value) => {
    let { name } = e.target;

    setImages({ ...images, [name]: value });
  };

  const data = {
    inputsData: {
      state: inputs,
      setState: onChange,
    },

    filesData: {
      state: images,
      setState: onFileChange,
    },

    stateData: {
      state: state,
      setState: setState,
    },
    informationData: {
      state: infoData,
      setState: onChangeInfoData,
    },
  };

  useEffect(() => {
    //inputs 바뀌고 즉시 검사할꺼 있으면 여기
    console.log(data);
  }, [inputs, infoData]);

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
}

export { FormContext, FormContentAPI };

import React, { createContext, useState } from "react";

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

  const [images, setImages] = useState({
    productIntroImages: [],
    productRecommendImages: [],
    productThumnailImage: [],
    productMainImages: [],
  });

  const [option, setOption] = useState([]);

  const [infoData, setInfoData] = useState({
    category: [],
    filterTag: [],
    productName: "",
    productCode: (Math.random() * 1e12).toString(36).substring(0, 8),
    productComposition: "",
    totalProduct: 0,
  });

  const [productInfoNotice, setProductInfoNotice] = useState([
    ["", "", "", "", ""],
  ]);

  const [inputsAdd, setInputsAdd] = useState([[["", ""]]]);

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

      if (!isNaN(copy["orderTimeFrom"]) || !isNaN(copy["orderTimeTo"])) {
        alert("주문시간 먼저 작성하세요");
      } else if (
        dateShipping - timeOrderFrom < 0 ||
        timeOrderTo - timeOrderTo < 0
      ) {
        alert("주문시간 이후로 출고일을 지정해주세요.");
      }
    } else if (
      name == "orderTimeTo" &&
      !isNaN(Date.parse(copy["orderTimeTo"]))
    ) {
      console.log(Date.parse(copy["orderTimeTo"]), Date.now());
      if (Date.parse(copy["orderTimeTo"]) - Date.now() < 0) {
        const temp = { ...toggles };
        temp["reservedShipping"] = "false";
        setToggles(temp);

        alert("주문시간을 다시 확인하세요.");
      }
    }
    //else if (
    //   (name == "productExposureDateFrom" || name == "productExposureDateTo") &&
    //   !isNaN(Date.parse(copy["productExposureDateFrom"])) &&
    //   !isNaN(Date.parse(copy["productExposureDateTo"]))
    // ) {
    //   console.log(Date.parse(copy["productExposureDateTo"]));
    //   console.log(Date.parse(copy["productExposureDateFrom"]));
    //   if (
    //     Date.parse(copy["productExposureDateTo"]) -
    //     Date.parse(copy["productExposureDateFrom"])
    //   ) {
    //     alert("유효하지 않은 날짜 범위 입니다.");
    //   }
    // } else if (
    //   (name == "productSalesDateFrom" || name == "productSalesDateTo") &&
    //   !isNaN(Date.parse(copy["productSalesDateFrom"])) &&
    //   !isNaN(Date.parse(copy["productSalesDateTo"]))
    // ) {
    //   console.log(Date.parse(copy["productSalesDateFrom"]));
    //   console.log(Date.parse(copy["productSalesDateTo"]));
    //   if (
    //     Date.parse(copy["productSalesDateFrom"]) -
    //     Date.parse(copy["productSalesDateTo"])
    //   ) {
    //     alert("유효하지 않은 날짜 범위 입니다.");
    //   }
    // }

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
    togglesData: {
      state: toggles,
      setState: onToggle,
    },
    datesData: {
      state: dates,
      setState: onDatesChange,
    },
    filesData: {
      state: images,
      setState: onFileChange,
    },
    informationData: {
      state: infoData,
      setState: onChangeInfoData,
    },
    optionData: {
      state: option,
      setState: setOption,
    },
    productInfoNoticeData: {
      state: productInfoNotice,
      setState: setProductInfoNotice,
    },
    inputsAddData: {
      state: inputsAdd,
      setState: setInputsAdd,
    },
  };

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
}

export { FormContext, FormContentAPI };

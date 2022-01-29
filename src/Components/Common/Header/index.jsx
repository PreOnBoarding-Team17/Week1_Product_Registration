import React, { useContext } from "react";
import { FormContext } from "FormContextAPI/FormContextAPI";
import { resultForm } from "Utils/Constants/ResultForm";

import "Components/Common/Header/scss/Header.scss";

const ONEDAYMILESECONDS = 86400000;

export default function Header() {
  const context = useContext(FormContext).inputsData;
  const inputs = context.state;

  const context2 = useContext(FormContext).datesData;
  const dates = context2.state;

  const context3 = useContext(FormContext).informationData;
  const infoData = context3.state;

  const context4 = useContext(FormContext).optionData;
  const options = context4.state;

  const context5 = useContext(FormContext).productInfoNoticeData;
  const notices = context5.state;

  const context6 = useContext(FormContext).togglesData;
  const toggles = context6.state;

  const context7 = useContext(FormContext).filesData;
  const images = context7.state;

  // let result = { ...useContext(FormContext) };

  // 1,2 번 노출, 제출 기간 설정 검사
  const productPeriodCheck = (name) => {
    if (inputs[name] === "2") {
      const temp = Date.now();
      const exposureDateFrom = Date.parse(dates[`${name}DateFrom`]);
      const exposureDateTo = Date.parse(dates[`${name}DateTo`]);

      if (
        isNaN(exposureDateFrom) ||
        isNaN(exposureDateTo) ||
        temp - exposureDateFrom + ONEDAYMILESECONDS < 0 ||
        exposureDateTo - temp + ONEDAYMILESECONDS < 0
      ) {
        dates[name] = "1";
      }
    }
  };

  const informationDataCheck = () => {
    if (
      infoData["category"].length === 0 ||
      infoData["productName"] === "" ||
      infoData["productComposition"] === "" ||
      infoData["totalProduct"] === 0
    ) {
      return false;
    }
    return true;
  };

  const extraOptionCheck = (extraOption) => {
    let flag = true;
    if (extraOption.length === 0) return false;
    extraOption.forEach((extra) => {
      if (extra.name === "" || !extra.price) {
        flag = false;
        return false;
      }
    });

    return flag;
  };

  const optionContentsCheck = (contents) => {
    let flag = true;
    if (contents.length === 0) return false;
    contents.forEach((content) => {
      if (
        content.optionName === "" ||
        content.optionList[0] === "" ||
        content.optionList[1] === "" ||
        content.optionList[2] === "" ||
        (content.extraOption.length !== 0 &&
          !extraOptionCheck(content.extraOption))
      ) {
        flag = false;
        return false;
      }
    });

    return flag;
  };

  const optionDataCheck = () => {
    let flag = true;
    if (options.length === 0) return false;
    options.forEach((option) => {
      if (
        !option.optionImage ||
        option.optionImage.length === 0 ||
        (option.optionContents.length !== 0 &&
          !optionContentsCheck(option.optionContents))
      ) {
        flag = false;
        return false;
      }
    });
    if (!flag) return false;
    return true;
  };

  const productExposureResult = (name) => {
    if (inputs[name] === 0) {
      return "제한 없음";
    } else if (inputs[name] === 1 && name === "productExposure") {
      return "미노출";
    } else if (inputs[name] === 1 && name === "productSales") {
      return "미판매";
    } else {
      if (name === "productExposure") {
        return `${dates["productExposureDateFrom"]} ~ ${dates["productExposureDateTo"]}`;
      } else {
        return `${dates["productSalesDateFrom"]} ~ ${dates["productSalesDateTo"]}`;
      }
    }
  };

  const printResult = () => {
    let newResultForm = { ...resultForm };
    resultForm.노출및판매기간설정.상품노출기간설정 =
      productExposureResult("productExposure");
    resultForm.노출및판매기간설정.상품판매기간설정 =
      productExposureResult("productSales");

    newResultForm.상품기본정보.카테고리 = infoData.category;
    newResultForm.상품기본정보.상품명 = infoData.productName;
    newResultForm.상품기본정보.상품코드 = infoData.productCode;
    newResultForm.상품기본정보.상품구성소개정보 = infoData.productComposition;
    newResultForm.상품기본정보.상품썸네일 = images.productThumnailImage;
    newResultForm.상품기본정보.상품대표이미지 = images.productMainImages;
    newResultForm.상품기본정보.상품총재고 = infoData.totalProduct;

    for (let i = 0; i < options.length - 1; i++) {
      newResultForm.상품옵션.push({
        옵션이미지: "",
        옵션컨텐츠: [
          {
            옵션명: "",
            상품정상가: 0,
            상품판매가: 0,
            상품재고: 0,
            과세여부: "",
            추가옵션: [],
          },
        ],
      });
    }

    options.length !== 0 &&
      options.forEach((option, index) => {
        newResultForm.상품옵션[index].옵션이미지 = option.optionImage;
        for (let i = 0; i < option.optionContents.length - 1; i++) {
          newResultForm.상품옵션[index].옵션컨텐츠.push({
            옵션명: "",
            상품정상가: 0,
            상품판매가: 0,
            상품재고: 0,
            과세여부: "",
            추가옵션: [],
          });
        }
        option.optionContents &&
          option.optionContents.forEach((content, index2) => {
            newResultForm.상품옵션[index].옵션컨텐츠[index2].옵션명 =
              content.optionName;
            newResultForm.상품옵션[index].옵션컨텐츠[index2].상품정상가 =
              content.optionList[0];
            newResultForm.상품옵션[index].옵션컨텐츠[index2].상품판매가 =
              content.optionList[1];
            newResultForm.상품옵션[index].옵션컨텐츠[index2].상품재고 =
              content.optionList[2];
            newResultForm.상품옵션[index].옵션컨텐츠[index2].과세여부 =
              content.optionList[2];
            newResultForm.상품옵션[index].옵션컨텐츠[index2].추가옵션 =
              content.extraOption;
          });
      });

    newResultForm.상품소개이미지 = images.productIntroImages;
    newResultForm.상품추천이미지 = images.productRecommendImages;
    newResultForm.상품정보고시 = notices;
    newResultForm.상품배송설정.사용자배송일지정 = toggles.shippingDate;
    newResultForm.상품배송설정.방문수령 = toggles.pickUpVisit;
    newResultForm.상품배송설정.선주문예약배송 = toggles.reservedShipping;
    newResultForm.상품배송설정.선주문예약배송시간 = {
      주문시간: `${dates["orderTimeFrom"]} ~ ${dates["orderTimeTo"]}`,
      새벽배송: `${dates["dawnShipping"]}`,
      일반배송: `${dates["normalShipping"]}`,
    };

    newResultForm.상품혜택허용설정.마일리지적립 = toggles.mileage;
    newResultForm.기타설정.감사카드설정 = toggles.thanks;

    console.log(newResultForm);
    newResultForm = 0;
  };

  // inputs 최종 제출 하기전의 검사
  const onSubmit = (e) => {
    e.preventDefault();
    productPeriodCheck("productExposure");
    productPeriodCheck("productSales");

    if (!informationDataCheck() || !optionDataCheck()) {
      alert("필수값을 모두 입력해 주세요.");
    } else {
      alert("콘솔에 결과가 출력됩니다.");
      printResult();
    }

    // 2번 상품 총 재고 0인경우 미판매 추가

    if (inputs["productSales"] === "2" && infoData["totalProduct"] === 0) {
      dates["productSales"] = "1";
    }
  };

  return (
    <header className="header__container">
      <div className="header__box-blank"></div>
      <div className="header__box">
        <h1>상품 등록</h1>
        <button type="submit" onClick={onSubmit}>
          저장하기
        </button>
      </div>
    </header>
  );
}

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

  let result = { ...useContext(FormContext) };

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
        result["dates"][name] = "1";
      }
    }
  };

  const informationDataCheck = () => {
    if (
      infoData["category"].length === 0 ||
      infoData["productName"] === "" ||
      infoData["productComposition"] === "" //||
      // infoData["totalProduct"] === 0
    ) {
      return false;
    }
    return true;
  };

  const extraOptionCheck = (extraOption) => {
    let flag = true;
    if (extraOption.length === 0) return false;
    extraOption.forEach((extra) => {
      console.log(extra.price);
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

  const printResult = () => {
    resultForm.노출및판매기간설정.상품노출기한[0] =
      dates.productExposureDateFrom;
    resultForm.노출및판매기간설정.상품노출기한[1] = dates.productExposureDateTo;
    resultForm.상품기본정보.카테고리 = infoData.category;
    resultForm.상품기본정보.상품명 = infoData.productName;
    resultForm.상품기본정보.상품코드 = infoData.productCode;
    resultForm.상품기본정보.상품구성소개정보 = infoData.productComposition;
    resultForm.상품기본정보.상품썸네일 = images.productThumnailImage;
    resultForm.상품기본정보.상품대표이미지 = images.productMainImages;
    resultForm.상품기본정보.상품총재고 = infoData.totalProduct;
    if (
      options.length !== 0 &&
      options.forEach((option, index) => {
        resultForm.상품옵션[index].옵션명 = option.optionContents[0].optionName;
        resultForm.상품옵션[index].옵션이미지 = option.optionImage;
        resultForm.상품옵션[index].상품정상가 =
          option.optionContents[0].optionList[0];
        resultForm.상품옵션[index].상품판매가 =
          option.optionContents[0].optionList[1];
        resultForm.상품옵션[index].상품재고 =
          option.optionContents[0].optionList[2];
        resultForm.상품옵션[index].과세여부 =
          option.optionContents[0].optionList[2];
        resultForm.상품옵션[index].추가옵션 =
          option.optionContents[0].extraOption;
      })
    )
      resultForm.상품소개이미지 = images.productIntroImages;
    resultForm.상품추천이미지 = images.productRecommendImages;
    resultForm.상품정보고시 = notices;
    resultForm.상품배송설정.사용자배송일지정 = toggles.shippingDate;
    resultForm.상품배송설정.방문수령 = toggles.pickUpVisit;
    resultForm.상품배송설정.선주문예약배송 = toggles.reservedShipping;
    resultForm.상품혜택허용설정.마일리지적립 = toggles.mileage;
    resultForm.기타설정.감사카드설정 = toggles.thanks;

    console.log(resultForm);
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
      result["dates"]["productSales"] = "1";
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

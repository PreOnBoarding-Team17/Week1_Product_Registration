import React from "react";
import Logo from "Assets/logo.png";
import Arrow from "Assets/arrow_down.svg";
import List from "Utils/Constants/NavigationList";
import "Components/Common/Navigation/scss/Navigation.scss";

export default function Navigation() {
  return (
    <nav className="navigation__container">
      <div className="navigation__logo-box">
        <img className="navigation__logo" src={Logo} alt="로고 이미지" />
      </div>
      {List.map((element, index) => {
        if (element.className === "menu")
          return (
            <div key={index} className="navigation__menu">
              <p>{element.name}</p>
              <img
                className="navigation__menu-arrow"
                src={Arrow}
                alt="화살표"
              />
            </div>
          );
        else if (element.className === "subMenu")
          return (
            <div key={index} className="navigation__subMenu">
              <p>{element.name}</p>
            </div>
          );
        else
          return (
            <div key={index} className="navigation__currentMenu">
              <p>{element.name}</p>
            </div>
          );
      })}
    </nav>
  );
}

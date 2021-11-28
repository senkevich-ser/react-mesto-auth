import React from "react";
import logo from "../../images/logo_russia.svg";
import HeaderButton from "../HeaderButton";

function Header() {
  return (
    <header className="header wrapper">
      <img src={logo} alt="логотип" className="header__logo" />
      <HeaderButton title="Войти" />
    </header>
  );
}

export default Header;

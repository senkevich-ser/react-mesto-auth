import React from "react";
import logo from "../../images/logo_russia.svg";

function Header() {
  return (
    <header className="header wrapper">
      <img src={logo} alt="логотип" className="header__logo" />
    </header>
  );
}

export default Header;

import React from "react";
import {Link} from 'react-router-dom';

function NavMenu(){
  return(
    <div className="header__menu">
    <p className="header__button">e-mail</p>
    <Link className="header__button opacity" to="/sign-in">
          Выйти
        </Link>
    </div>
  )
}

export default NavMenu;
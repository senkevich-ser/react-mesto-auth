import React, { useState } from "react";
import Header from "./landing/Header.js";
import InfoTooltip from "./InfoTooltip";
import { Link} from "react-router-dom";
import * as auth from "../utils/auth";
import succesImage from "../images/Union(black).jpg";
import unSuccesImage from "../images/Union.jpg";

function Register({ history }) {
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [resultMessage, setResultMessage] = useState({});
  const [inputValues, setInputValues] = useState({});

  function handleChange(e) {
    setInputValues({...inputValues,[e.target.name]: e.target.value });
  }
  function infoToolTipClose() {
    setIsInfoTooltipPopupOpen(false);
  }

  function resetForm(){
    setInputValues({});
  }

  function handleSubmit(e) {
    e.preventDefault();
    if ( !inputValues.email || !inputValues.password ) {
      return;
    }
    auth.register(inputValues.email, inputValues.password)
      .then((res) => {
        resetForm();
        setResultMessage({image : succesImage,text:"Вы успешно зарегистрировались!"});
        setIsInfoTooltipPopupOpen(true);
        localStorage.setItem('user', JSON.stringify(inputValues));
        setTimeout(()=>{history.push('/sign-in')},3000);
        
      })
      .catch((err) => {
        console.log(err)
        setResultMessage({image : unSuccesImage,text:"Что-то пошло не так! Попробуйте ещё раз."});
        setIsInfoTooltipPopupOpen(true);
        }
          )
  
  }


  return (
    <>
      <Header>
        <div><Link className="header__button opacity" to="/main">
          Войти
        </Link>
        </div>
      </Header>
      <div className="login__popup">
        <h2 className="login__title">Регистрация</h2>
        <form
          className="popup__inputs"
          name="popupLogin"
          onSubmit={handleSubmit}
        >
          <fieldset className="popup__inputs">
            <input
              id="initial-input"
              type="email"
              name="email"
              placeholder="E-mail"
              className="input login__input-text"
              required
              minLength="5"
              maxLength="40"
              onChange={handleChange}
            />
            <span className="initial-input-error popup__error"></span>
            <input
              id="rank-input"
              type="password"
              name="password"
              placeholder="Пароль"
              className="input login__input-text"
              autoComplete=""
              required
              minLength="2"
              maxLength="8"
              onChange={handleChange}
            />
            <span className="rank-input-error popup__error"></span>
          </fieldset>
          <button
            className="login__submit-btn"
            type="submit"
            aria-label="Кнопка Войти"
          >
            Зарегистрироваться
          </button>
          <div className="login__question">
            Вы уже зарегистрированы?
            <Link className="login__entryButton opacity" to="/main">
              Войти
            </Link>
          </div>
        </form>
      </div>
      {isInfoTooltipPopupOpen && (
        <InfoTooltip
          onClose={infoToolTipClose}
          imageLink={resultMessage.image}
          textMessage={resultMessage.text}
          onOpen ={isInfoTooltipPopupOpen}
        />
      )}
    </>
  );
}

export default Register;

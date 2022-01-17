import React, { useState } from "react";
import Header from "./landing/Header.js";
import { Link } from "react-router-dom";
import * as auth from "../utils/auth";
import unSuccesImage from "../images/Union.jpg";
import InfoTooltip from "./InfoTooltip";


function Login({ history,handleLogin}) {
  const userData=JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')):''
  const [inputValues, setInputValues] = useState(userData);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [resultMessage, setResultMessage] = useState({});

  function handleChange(e) {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    console.log(inputValues)
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
    auth.authorize(inputValues.email, inputValues.password)
      .then((data) => {
        resetForm();
        handleLogin();
        localStorage.setItem('jwt', data.token);
        history.push('/main');
        
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
        <div>
        <Link className="header__button opacity" to="/sign-up">
          Регистрация
        </Link>
        </div>
      </Header>
      <div className="login__popup">
        <h2 className="login__title">Вход</h2>
        <form className="popup__inputs" 
        name="popupLogin" 
        onSubmit={handleSubmit}>
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
              value={inputValues.email || ''}
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
              value={inputValues.password || ''}
            />
            <span className="rank-input-error popup__error"></span>
          </fieldset>
          <button
            className="login__submit-btn"
            type="submit"
            aria-label="Кнопка Войти"
          >
            Войти
          </button>
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
export default Login;

import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="popup__login">
      <h2 className="login__title">Вход</h2>
      <form className="popup__inputs" name="popupLogin">
        <fieldset className="popup__inputs">
          <input
            id="initial-input"
            type="email"
            name="e-mail"
            placeholder="E-mail"
            className="input login__input-text"
            required
            minLength="5"
            maxLength="40"
          />
          <span className="initial-input-error popup__error"></span>
          <input
            id="rank-input"
            type="password"
            name="password"
            placeholder="Пароль"
            className="input login__input-text"
            required
            minLength="2"
            maxLength="8"
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
  );
}
export default Login;
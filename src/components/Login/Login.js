import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import '../Form/Form.css';
import logo from '../../images/logo.svg';

function Login() {
  
  return (
    <section className="form">
      <div className="form__container">
        <Link to="/">
          <img className="form__logo" src={logo} alt="Логотип сайта" />
        </Link>
        <h2 className="form__title">Рады видеть!</h2>
        <form className="form__inputs">
            <label className="form__item">
              <p className="form__item-name">E-mail</p>
              <input
                type="email"
                name="email"
                required
                className="form__input"
                placeholder=""        
              />
              <p className="form_error"></p>         
            </label>

            <label className="form__item">
              <p className="form__item-name">Пароль</p>
              <input
                type="password"
                name="password"
                required
                className="form__input"
                placeholder=""       
              />
              <p className="form_error form__error_visible">Что-то пошло не так...</p>        
            </label>
          <button type = "submit" className="form__button">Войти</button>
        </form>
                    
      </div>  
    </section>
  )
}

export default Login;
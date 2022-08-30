import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import '../Form/Form.css';
import logo from '../../images/logo.svg';

function Register() {
    
    return (
        <section className="form">
            <div className="form__container">
                <Link to="/">
                    <img className="form__logo" src={logo} alt="Логотип сайта" />
                </Link>
                <h2 className="form__title">Добро пожаловать!</h2>
                <form className="form__inputs">
                    <label className="form__item">
                        <p className="form__item-name">Имя</p>
                        <input
                        type="text"
                        name="text"
                        required
                        className="form__input"
                        placeholder=""        
                        />
                        <p className="form_error"></p>         
                    </label>
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
                        className="form__input form__input_color"
                        placeholder=""       
                        />
                        <p className="form_error"></p>        
                    </label>
                    <button type = "submit" className="form__button">Зарегистрироваться</button>
                </form>
                <p className="form__text">
                    Уже зарегистрированы?
                    <Link to="/signin" className="form__link">Войти</Link>
                </p>                
            </div>  
      </section> 
    )
}
    
export default Register;
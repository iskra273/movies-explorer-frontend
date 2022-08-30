import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationAuth.css';
import '../Header/Header.css'

function NavigationAuth() {
    return (
        <nav className="navigationAuth">
            <ul className="navigationAuth__list">
                <li className="navigationAuth__list-item">
                    <Link to="/signup" className="navigationAuth__link-register">Регистрация</Link>
                    <Link to = "/signin"><button className="navigationAuth__auth-button" type="button">Войти</button></Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationAuth;
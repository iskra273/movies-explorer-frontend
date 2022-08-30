import React from "react";
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import '../Header/Header.css'

function Navigation() {
    const [showItems, setShowItems] = React.useState(false);
    const handleToggleMenu = () => setShowItems(!showItems);

    return (
        <nav className="navigation">
            <button className="navigation__button-menu" type="button" onClick={handleToggleMenu}></button>
            
            <div className={`navigation__container ${showItems ? 'navigation__container_visible' : ''}`}>
                <div className="navigation__sidebar">
                    <div className="navigation__sidebar-container">
                        <button className="navigation__button-close" type="button" onClick={handleToggleMenu}></button>
                        <ul className="navigation__sidebar-list">
                            <li className="navigation__sidebar-item navigation__sidebar-item_type_main">
                                <Link to="/" className="navigation__link" activeclassname="navigation__link_active">Главная</Link>
                            </li>
                            <li className="navigation__sidebar-item">
                                <NavLink to="/movies" className="navigation__link" activeclassname="navigation__link_active">Фильмы</NavLink>
                            </li>
                            <li className="navigation__sidebar-item">
                                <NavLink to="/saved-movies" className="navigation__link" activeclassname="navigation__link_active">Сохраненные фильмы</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink to = "/profile"><button className="navigation__button-login" type="button">Аккаунт</button></NavLink>
                </div> 
            </div>
        </nav>
    );
}

export default Navigation;

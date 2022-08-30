import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation'
import NavigationAuth from '../NavigationAuth/NavigationAuth'


function Header({ isLoggedIn }) {

  return (
    <header className={`header ${isLoggedIn ? "header_type_auth" : ""}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип сайта"/>
      </Link>
      <Navigation />
      {/* <NavigationAuth /> */}
      {/* {isLoggedIn ? <Navigation /> : <NavigationAuth />} */}
    </header>      
  );
}
  
export default Header;
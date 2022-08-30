import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound () {
  return (
    <div className="notFound">
      <h3 className="notFound__title">404</h3>
      <p className="notFound__subtitle">
        Страница не найдена
      </p>
      <Link className="notFound__link" to="/">Назад</Link>
    </div>
  )
}

export default PageNotFound;
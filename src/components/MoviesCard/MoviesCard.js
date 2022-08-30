import React from 'react';
import './MoviesCard.css';

function MoviesCard({ title, duration, image }) {
  return (
    <section className="moviesCard">
      <div className="card">
        <div className="card__element">
          <div className="card__title">
            <p className="card__name">{title}</p>
            <p className="card__duration">{duration}</p>
          </div>     
          <button type="button" className="card__button card__button_save-active" />
        </div>
        <img className="card__image" src={image} alt="Превью фильма" />
      </div>
    </section>
  );
}
  
export default MoviesCard;
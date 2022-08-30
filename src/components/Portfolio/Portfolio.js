import React from 'react';
import './Portfolio.css';
import exit from '../../images/exit.svg';

function Portfolio() {
    return (
        <section className="portfolio">
            <p className="portfolio__name">Портфолио</p>
                <ul className="portfolio__list">
                    <li className="portfolio__item">
                        <a className="portfolio__link" rel="noreferrer" target='_blank' href="https://github.com/iskra273/how-to-learn" >Статичный сайт</a>
                    </li>
                    <span className="portfolio__line"></span>
                    <li className="portfolio__item">
                        <a className="portfolio__link" rel="noreferrer" target='_blank' href="https://iskra273.github.io/russian-travel-adaptiv/" >Адаптивный сайт</a>
                    </li>
                    <span className="portfolio__line"></span>
                    <li className="portfolio__item">
                        <a className="portfolio__link" rel="noreferrer" target='_blank' href="https://iskra273.github.io/mesto-JS/">Одностраничное приложение</a>
                    </li>
                </ul>  
        </section>
    );
}
export default Portfolio;

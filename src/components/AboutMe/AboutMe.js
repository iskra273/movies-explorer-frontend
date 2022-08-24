import React from 'react';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';
import photo from '../../images/about.jpg';

function AboutMe() {
    return (
        <section id="aboutme" className="aboutme">
            <h2 className="aboutme__name">Студент</h2>
            <div className="aboutme__two-colomns">
                <div className="aboutme__info">
                    <h3 className="aboutme__title">Ирина</h3>
                    <p className="aboutme__subtitle">Фронтенд-разработчик</p>
                    <p className="aboutme__description">
                        Я родилась и живу в Екатериннбурге. Закончила УрФУ по инженерной специальности в строительной отрасли. 
                        Последние годы работаю в сфере интернет-маркетинга и взаимодействую с отделом разработки. 
                        Изучаю разработку для повышения эффективности своих задач. 
                    </p>
                    <div className="aboutme__links">
                        <a className="aboutme__link" 
                            href="https://vk.com/id22188068"
                            rel="noreferrer"
                            target='_blank'
                            title='https://vk.com'>
                            VK
                        </a> 
                        <a className="aboutme__link" 
                            href="https://github.com/iskra273"
                            rel="noreferrer"
                            target='_blank'
                            title='https://github.com/'>
                            GitHub
                        </a>
                    </div>
                    
                </div>
                <img 
                    className="aboutme__image" 
                    src ={photo}
                    alt="Фото студента"/>
            </div>
            <Portfolio />
        </section>
    );
}

export default AboutMe;

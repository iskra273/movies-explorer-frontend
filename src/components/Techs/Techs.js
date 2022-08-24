import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <section id="techs" className="techs">
            <span className="techs__name">Технологии</span>
            <h2 className="techs__title">7 технологий</h2>
            <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__icons">
                <li className="techs__icon">HTML</li>
                <li className="techs__icon">CSS</li>
                <li className="techs__icon">JS</li>
                <li className="techs__icon">React</li>
                <li className="techs__icon">Git</li>
                <li className="techs__icon">Express.js</li>
                <li className="techs__icon">mongoDB</li>
            </ul>
        </section>
    );
}

export default Techs;

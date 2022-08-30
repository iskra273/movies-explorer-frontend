import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section id="aboutproject" className="aboutproject">
            <h2 className="aboutproject__name">О проекте</h2>
            <ul className="aboutproject__list">
                <li className="aboutproject__item">
                    <h3 className="aboutproject__item-title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="aboutproject__item-description">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </li>

                <li className="aboutproject__item">
                    <h3 className="aboutproject__item-title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="aboutproject__item-description">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </li>
            </ul>

            <ul className="aboutproject__time">
                <li className="aboutproject__week">
                    <p className="aboutproject__part-one">
                        1 неделя
                    </p>
                    <p className="aboutproject__part-two">
                        4 недели
                    </p>
                </li>

                <li className="aboutproject__work">
                    <p className="aboutproject__work-one">
                        Back-end
                    </p>
                    <p className="aboutproject__work-two">
                        Front-end
                    </p>
                </li>
            </ul>
        </section>
    );
}

export default AboutProject;
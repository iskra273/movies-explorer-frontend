import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <span className="footer__line"></span>
      <div className="footer__columns">
        <p className="footer__copyright">© 2022</p>
        <div className="footer__links">
          <a className="footer__link" 
            href="https://practicum.yandex.ru"
            rel="noreferrer"
            target='_blank'>
            Яндекс.Практикум
          </a> 
          <a className="footer__link" 
            href="https://vk.com/id22188068"
            rel="noreferrer"
            target='_blank'>
            VK
          </a> 
          <a className="footer__link" 
            href="https://github.com/iskra273"
            rel="noreferrer"
            target='_blank'>
            GitHub
          </a>
        </div>
      </div>
    </footer> 
  );
}

export default Footer;

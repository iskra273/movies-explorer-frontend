import React from 'react';
import './NavTab.css';


function NavTab() {
    return (
        <section className="navtab">
            <a href="#aboutproject" className="navtab__link">О проекте</a>    
            <a href="#techs" className="navtab__link">Технологии</a>
            <a href="#aboutme" className="navtab__link">Студент</a>      
        </section>
    );
}

export default NavTab;

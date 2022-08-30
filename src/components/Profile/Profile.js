import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <section className="profile">
            <div className="profile__container">
                <h2 className="profile__title">Привет, Ирина!</h2>
                <div>
                    <form className="profile__inputs">
                        <label className="profile__item">
                            <p className="profile__item-name">Имя</p>
                            <input
                            type="text"
                            name="text"
                            required
                            className="profile__input"
                            placeholder="Ирина"        
                            />
                            <p className="profile_error"></p>         
                        </label>
                        <p className="profile__line"></p>
                        <label className="profile__item">
                            <p className="profile__item-name">E-mail</p>
                            <input
                            type="email"
                            name="email"
                            required
                            className="profile__input"
                            placeholder="pochta@yandex.ru"       
                            />
                            <p className="profile_error"></p>       
                        </label>
                    </form>
                </div>
                <p className="profile__link">Редактировать</p>
                <p className="profile__link-exit">Выйти из аккаунта</p>
            </div>
        </section>
    );
}

export default Profile;

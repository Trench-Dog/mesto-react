import React from 'react';
import './index.css';

function App() {
    return (
        <body className="page">
            <header className="header">
                <img
                    className="header__logo"
                    src="<%=require('./images/header-logo.svg')%>"
                    alt="Логотип с надписью Место Россия"
                />
            </header>
            <main className="content">
                <section className="profile">
                    <div className="profile__avatar-container">
                        <img
                            className="profile__avatar"
                            src="<%=require('./images/profile-avatar-kusto.jpg')%>"
                            alt="Фото профиля"
                        />
                        <img
                            className="profile__avatar-editor"
                            src="<%=require('./images/profile-edit-image.svg')%>"
                        />
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <p className="profile__description">Исследователь океана</p>
                        <button
                            cclassName="profile__edit-button"
                            type="button"
                            aria-label="Редактировать"
                        ></button>
                    </div>
                    <button className="profile__add-button" type="button"></button>
                </section>
                <ul className="places"></ul>
                <template id="placeTemplate">
                    <li className="place">
                        <img className="place__image" />
                        <div className="place__description">
                            <h2 className="place__title"></h2>
                            <div className="place__like">
                                <button className="place__button" type="button"></button>
                                <h3 className="place__like-counter"></h3>
                            </div>
                        </div>
                        <button className="place__delete-button" type="button"></button>
                    </li>
                </template>
            </main>
            <div className="popup popup_type_profile">
                <div className="popup__container popup__container_type_profile">
                    <form className="popup__form" name="popup-profile-form">
                        <h2 className="popup__heading">Редактировать профиль</h2>
                        <input
                            type="text"
                            className="popup__data popup__data_type_name"
                            name="name"
                            placeholder="Имя"
                            required
                            minlength="2"
                            maxlength="40"
                        />
                        <span className="popup__reminder popup__reminder_type_name"></span>
                        <input
                            type="text"
                            className="popup__data popup__data_type_description"
                            name="description"
                            placeholder="О себе"
                            required
                            minlength="2"
                            maxlength="200"
                        />
                        <span className="popup__reminder popup__reminder_type_description"></span>
                        <button className="popup__save-button" type="submit">
                            Сохранить
                        </button>
                    </form>
                    <button
                        className="popup__close-button popup__close-button_type_close-profile"
                        type="button"
                    ></button>
                </div>
            </div>
            <div className="popup popup_type_add-card">
                <div className="popup__container popup__container_type_add-card">
                    <form className="popup__form" name="popup-add-form">
                        <h2 className="popup__heading">Новое место</h2>
                        <input
                            type="text"
                            className="popup__data popup__data_type_place"
                            name="place"
                            placeholder="Название"
                            required
                            minlength="2"
                            maxlength="30"
                        />
                        <span className="popup__reminder popup__reminder_type_place"></span>
                        <input
                            type="url"
                            className="popup__data popup__data_type_link"
                            name="link"
                            placeholder="Ссылка на картинку"
                            required
                        />
                        <span className="popup__reminder popup__reminder_type_link"></span>
                        <button
                            className="popup__save-button popup__save-button_disabled"
                            type="submit"
                        >
                            Создать
                        </button>
                    </form>
                    <button
                        className="popup__close-button popup__close-button_type_close-add"
                        type="button"
                    ></button>
                </div>
            </div>
            <div className="popup popup_type_image">
                <div className="popup__container popup__container_type_image">
                    <button
                        className="popup__close-button popup__close-button_type_close-image"
                        type="button"
                    ></button>
                    <img className="popup__image" />
                    <h2 className="popup__place-name"></h2>
                </div>
            </div>
            <div className="popup popup_type_confirm">
                <div className="popup__container popup__container_type_confirm">
                    <form className="popup__form" name="popup-confirm-form">
                        <h2 className="popup__request">Вы уверены?</h2>
                        <button className="popup__save-button" type="button">
                            Да
                        </button>
                    </form>
                    <button
                        className="popup__close-button popup__close-button_type_confirm"
                        type="button"
                    ></button>
                </div>
            </div>
            <div className="popup popup_type_avatar">
                <div className="popup__container popup__container_type_avatar">
                    <form className="popup__form" name="popup-avatar-form">
                        <h2 className="popup__heading">Обновить аватар</h2>
                        <input
                            type="url"
                            className="popup__data popup__data_type_link"
                            name="avatar"
                            placeholder="Ссылка на картинку"
                            required
                        />
                        <span className="popup__reminder popup__reminder_type_avatar"></span>
                        <button
                            className="popup__save-button popup__save-button_disabled"
                            type="submit"
                        >
                            Сохранить
                        </button>
                    </form>
                    <button
                        className="popup__close-button popup__close-button_type_avatar"
                        type="button"
                    ></button>
                </div>
            </div>
            <footer className="footer">
                <p className="footer__copyright">© 2023 Mesto Russia</p>
            </footer>
        </body>
    );
}

export default App;

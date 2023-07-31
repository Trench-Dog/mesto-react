import React from 'react';
import '../index.css';
import avatar from '../images/profile-avatar-kusto.jpg';
import avatar_editor from '../images/profile-edit-image.svg';

function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
    document.querySelector('.popup_type_profile').classList.add('popup_opened');
}

function handleAddPlaceClick() {
    document.querySelector('.popup_type_add-card').classList.add('popup_opened');
}
function Main() {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container" onClick={handleEditAvatarClick}>
                    <img className="profile__avatar" src={avatar} alt="Фото профиля" />
                    <img className="profile__avatar-editor" src={avatar_editor} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <p className="profile__description">Исследователь океана</p>
                    <button
                        className="profile__edit-button"
                        type="button"
                        aria-label="Редактировать"
                        onClick={handleEditProfileClick}
                    ></button>
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    onClick={handleAddPlaceClick}
                ></button>
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
    );
}

export default Main;

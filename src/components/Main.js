import React from 'react';
import '../index.css';
import avatar from '../images/profile-avatar-kusto.jpg';
import avatar_editor from '../images/profile-edit-image.svg';

function Main(props) {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container" onClick={props.onEditAvatar}>
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
                        onClick={props.onEditProfile}
                    ></button>
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    onClick={props.onAddPlace}
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

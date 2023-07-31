import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
function App() {
    return (
        <div className="page">
            <Header />
            <Main />
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
                        className="popup__close-button popup__close-button_type_profile"
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
                        className="popup__close-button popup__close-button_type_add-card"
                        type="button"
                    ></button>
                </div>
            </div>
            <ImagePopup className="popup popup_type_image" />
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
            {/* <PopupWithForm name='profile' />
            <PopupWithForm name='add-card' />
            <PopupWithForm name='confirm' />
            <PopupWithForm name='avatar' /> */}
            <Footer />
        </div>
    );
}
export default App;

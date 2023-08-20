import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

let isEditProfilePopupOpen = false;
let isAddPlacePopupOpen = false;
let isEditAvatarPopupOpen = false;
console.log(isEditAvatarPopupOpen);
console.log(isEditProfilePopupOpen);
console.log(isAddPlacePopupOpen);

function handleEditProfileClick() {
    isEditProfilePopupOpen = true;
    console.log(isEditProfilePopupOpen);
    return isEditProfilePopupOpen;
    // document.querySelector('.popup_type_profile').classList.add('popup_opened');
}

function handleEditAvatarClick() {
    isEditAvatarPopupOpen = true;
    console.log(isEditAvatarPopupOpen);
    // document.querySelector('.popup_type_avatar').classList.add('popup_opened');
}

function handleAddPlaceClick() {
    isAddPlacePopupOpen = true;
    console.log(isAddPlacePopupOpen);
    // document.querySelector('.popup_type_add-card').classList.add('popup_opened');
}

function App() {
    return (
        <div className="page">
            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
            />
            <ImagePopup className="popup popup_type_image" />
            <PopupWithForm
                name="profile"
                title="Редактировать профиль"
                text="Сохранить"
                isOpen={isEditProfilePopupOpen}
            >
                <input
                    type="text"
                    className="popup__data popup__data_type_name"
                    name="name"
                    placeholder="Имя"
                    required
                    minLength="2"
                    maxLength="40"
                />
                <span className="popup__reminder popup__reminder_type_name"></span>
                <input
                    type="text"
                    className="popup__data popup__data_type_description"
                    name="description"
                    placeholder="О себе"
                    required
                    minLength="2"
                    maxLength="200"
                />
                <span className="popup__reminder popup__reminder_type_description"></span>
            </PopupWithForm>
            <PopupWithForm
                name="add-card"
                title="Новое место"
                text="Создать"
                isOpen={isAddPlacePopupOpen}
            >
                <input
                    type="text"
                    className="popup__data popup__data_type_place"
                    name="place"
                    placeholder="Название"
                    required
                    minLength="2"
                    maxLength="30"
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
            </PopupWithForm>
            <PopupWithForm name="confirm" title="Вы уверены?" text="Да"></PopupWithForm>
            <PopupWithForm
                name="avatar"
                title="Обновить аватар"
                text="Сохранить"
                isOpen={isEditAvatarPopupOpen}
            >
                <input
                    type="url"
                    className="popup__data popup__data_type_link"
                    name="avatar"
                    placeholder="Ссылка на картинку"
                    required
                />
                <span className="popup__reminder popup__reminder_type_avatar"></span>
            </PopupWithForm>
            <Footer />
        </div>
    );
}
export default App;

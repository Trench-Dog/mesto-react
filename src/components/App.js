import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { currentUserContext } from '../contexts/CurrentUserContext';

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({
        isOpen: false,
        link: '',
        name: ''
    });
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        setCurrentUser(api.getUserInfo());
    }, []);

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard({
            isOpen: false,
            link: '',
            name: ''
        });
    }

    function handleCardClick(card) {
        setSelectedCard({
            isOpen: true,
            link: card.link,
            name: card.name
        });
    }

    return (
        <currentUserContext.Provider>
            <div className="page">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />
                <ImagePopup
                    className="popup popup_type_image"
                    card={selectedCard}
                    onClose={closeAllPopups}
                    isOpen={selectedCard.isOpen}
                    link={selectedCard.link}
                    name={selectedCard.name}
                />
                <PopupWithForm
                    name="profile"
                    title="Редактировать профиль"
                    text="Сохранить"
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
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
                    onClose={closeAllPopups}
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
                <PopupWithForm
                    name="confirm"
                    title="Вы уверены?"
                    text="Да"
                    onClose={closeAllPopups}
                ></PopupWithForm>
                <PopupWithForm
                    name="avatar"
                    title="Обновить аватар"
                    text="Сохранить"
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
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
        </currentUserContext.Provider>
    );
}
export default App;

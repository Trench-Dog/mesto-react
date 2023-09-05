import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

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
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, initialCards]) => {
                setCurrentUser(userData);
                setCards(initialCards);
            })
            .catch(err => alert(err));
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

    function handleCardLike(card, isLiked) {
        api.handleCardLike(card._id, isLiked)
            .then(newCard => {
                setCards(state => state.map(c => (c._id === card._id ? newCard : c)));
            })
            .catch(err => alert(err));
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards(state => state.filter(c => c.id !== card._id));
            })
            .catch(err => alert(err));
    }
    function handleUpdateUser(name, description) {
        api.editUserInfo(name, description)
            .then(newData => {
                setCurrentUser(newData);
                closeAllPopups();
            })
            .catch(err => alert(err));
    }
    function handleUpdateAvatar(link) {
        api.changeAvatar(link)
            .then(newData => {
                setCurrentUser(newData);
                closeAllPopups();
            })
            .catch(err => alert(err));
    }
    function handleAddPlace() {}

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                    cards={cards}
                />
                <ImagePopup
                    className="popup popup_type_image"
                    card={selectedCard}
                    onClose={closeAllPopups}
                    isOpen={selectedCard.isOpen}
                    link={selectedCard.link}
                    name={selectedCard.name}
                />
                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                />
                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPlace={handleAddPlace}
                />
                <PopupWithForm
                    name="confirm"
                    title="Вы уверены?"
                    text="Да"
                    onClose={closeAllPopups}
                ></PopupWithForm>
                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar}
                />
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    );
}
export default App;

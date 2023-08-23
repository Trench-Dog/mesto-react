import { useEffect, useState } from 'react';
import avatar_editor from '../images/profile-edit-image.svg';
import { api } from '../utils/Api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, initialCards]) => {
                console.log(initialCards);
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(initialCards);
            })
            .catch(err => alert(err));
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                    <img
                        className="profile__avatar"
                        style={{ backgroundImage: `url(${userAvatar})` }}
                    />
                    <img className="profile__avatar-editor" src={avatar_editor} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__description">{userDescription}</p>
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
            <ul className="places">
                {cards.map(card => (
                    <Card card={card} onCardClick={props.onCardClick} key={card._id} />
                ))}
            </ul>
        </main>
    );
}

export default Main;

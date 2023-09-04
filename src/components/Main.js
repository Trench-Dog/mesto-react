import { useContext } from 'react';
import avatar_editor from '../images/profile-edit-image.svg';
import { api } from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
    const userData = useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                    <img
                        className="profile__avatar"
                        style={{ backgroundImage: `url(${userData.avatar})` }}
                    />
                    <img className="profile__avatar-editor" src={avatar_editor} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userData.name}</h1>
                    <p className="profile__description">{userData.about}</p>
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
                {props.cards.map(card => (
                    <Card card={card} onCardClick={props.onCardClick} key={card._id} />
                ))}
            </ul>
        </main>
    );
}

export default Main;

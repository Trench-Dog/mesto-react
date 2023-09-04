import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    const cardLikeButtonClassName = `place__button ${isLiked && 'place__button_active'}`;
    function handleClick() {
        onCardClick(card);
    }
    function handleLike() {
        onCardLike(card, isLiked);
    }
    function handleDelete() {
        onCardDelete(card);
    }
    return (
        <li className="place">
            <img
                className="place__image"
                style={{ backgroundImage: `url(${card.link})` }}
                onClick={handleClick}
            />
            <div className="place__description">
                <h2 className="place__title">{card.name}</h2>
                <div className="place__like">
                    <button
                        className={cardLikeButtonClassName}
                        type="button"
                        onClick={handleLike}
                    ></button>
                    <h3 className="place__like-counter">{card.likes.length}</h3>
                </div>
            </div>
            {isOwn && <button className="place__delete-button" type="button" />}
        </li>
    );
}

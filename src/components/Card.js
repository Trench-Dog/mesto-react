export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="place" key={props.card._id}>
            <img
                className="place__image"
                style={{ backgroundImage: `url(${props.card.link})` }}
                onClick={handleClick}
            />
            <div className="place__description">
                <h2 className="place__title">{props.card.name}</h2>
                <div className="place__like">
                    <button className="place__button" type="button"></button>
                    <h3 className="place__like-counter">{props.card.likes.length}</h3>
                </div>
            </div>
            <button className="place__delete-button" type="button"></button>
        </li>
    );
}

import { useState } from 'react';
import PopupWithForm from './PopupWithForm';
function AddPlacePopup(props) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace(name, link);
        e.target.reset();
    }

    return (
        <PopupWithForm
            name="add-card"
            title="Новое место"
            text="Создать"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                className="popup__data popup__data_type_place"
                name="place"
                placeholder="Название"
                required
                minLength="2"
                maxLength="30"
                onChange={handleNameChange}
            />
            <span className="popup__reminder popup__reminder_type_place"></span>
            <input
                type="url"
                className="popup__data popup__data_type_link"
                name="link"
                placeholder="Ссылка на картинку"
                required
                onChange={handleLinkChange}
            />
            <span className="popup__reminder popup__reminder_type_link"></span>
        </PopupWithForm>
    );
}
export default AddPlacePopup;

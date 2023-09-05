import { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {
    const currentUser = useContext(CurrentUserContext);
    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            text="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
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
    );
}
export default EditAvatarPopup;

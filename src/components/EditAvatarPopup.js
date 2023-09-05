import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    const inputRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar(inputRef.current.value);
        inputRef.current.value = '';
    }
    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            text="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <input
                type="url"
                className="popup__data popup__data_type_link"
                name="avatar"
                placeholder="Ссылка на картинку"
                required
                ref={inputRef}
            />
            <span className="popup__reminder popup__reminder_type_avatar"></span>
        </PopupWithForm>
    );
}
export default EditAvatarPopup;

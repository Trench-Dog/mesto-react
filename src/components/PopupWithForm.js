import React from 'react';
import '../index.css';

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name}`}>
            <div className={`popup__container popup__container_type_${props.name}`}>
                <form className="popup__form" name="popup-confirm-form">
                    <h2 className="popup__request">Вы уверены?</h2>
                    <button className="popup__save-button" type="button">
                        Да
                    </button>
                </form>
                <button
                    className={`popup__close-button popup__close-button_type_${props.name}`}
                    type="button"
                ></button>
            </div>
        </div>
    );
}
export default PopupWithForm;

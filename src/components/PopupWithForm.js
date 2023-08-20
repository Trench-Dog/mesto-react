import React from 'react';
import '../index.css';

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className={`popup__container popup__container_type_${props.name}`}>
                <form className="popup__form" name={`popup-${props.name}-form`}>
                    <h2 className="popup__request">{props.title}</h2>
                    {props.children}
                    <button className="popup__save-button" type="button">
                        {props.text}
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

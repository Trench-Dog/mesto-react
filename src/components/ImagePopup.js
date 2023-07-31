import React from 'react';
import '../index.css';

function ImagePopup() {
    return (
        <div className="popup popup_type_image">
            <div className="popup__container popup__container_type_image">
                <button
                    className="popup__close-button popup__close-button_type_close-image"
                    type="button"
                ></button>
                <img className="popup__image" />
                <h2 className="popup__place-name"></h2>
            </div>
        </div>
    );
}
export default ImagePopup;

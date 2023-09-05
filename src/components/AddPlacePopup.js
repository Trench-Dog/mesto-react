import PopupWithForm from './PopupWithForm';
function AddPlacePopup(props) {
    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace();
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
            />
            <span className="popup__reminder popup__reminder_type_place"></span>
            <input
                type="url"
                className="popup__data popup__data_type_link"
                name="link"
                placeholder="Ссылка на картинку"
                required
            />
            <span className="popup__reminder popup__reminder_type_link"></span>
        </PopupWithForm>
    );
}
export default AddPlacePopup;

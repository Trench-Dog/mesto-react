import PopupWithForm from './PopupWithForm';
function ConfirmationPopup(props) {
    return (
        <PopupWithForm
            name="confirm"
            title="Вы уверены?"
            text="Да"
            onClose={props.onClose}
        ></PopupWithForm>
    );
}
export default ConfirmationPopup;

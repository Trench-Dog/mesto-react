import PopupWithForm from './PopupWithForm';
function ConfirmationPopup(props) {
    function handleSubmit(e) {
        e.preventDefault();
        props.onConfirmDelete(props.cardId);
    }
    return (
        <PopupWithForm
            name="confirm"
            title="Вы уверены?"
            text="Да"
            onClose={props.onClose}
            isOpen={props.isOpen}
            onSubmit={handleSubmit}
        ></PopupWithForm>
    );
}
export default ConfirmationPopup;

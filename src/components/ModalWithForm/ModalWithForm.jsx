/* STYLES SHEETS IMPORTS */
import "./ModalWithForm.css";

/* COMPONENTS IMPORTS */
import Modal from "../Modal/Modal";

function ModalWithForm({
  onSubmit,
  children,
  buttonText,
  title,
  formName,
  isOpen,
  onClose,
  isLoading,
  altButtonText,
  handleAltClick,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} name={formName}>
      <h2 className="modal__title">{title}</h2>
      <form className="modal__form" onSubmit={onSubmit}>
        {children}
        <div className="modal__submit-container">
          <button className="modal__submit" type="submit">
            {isLoading ? "Saving..." : buttonText}
          </button>
        </div>
        <div className="modal__alt-container">
          <p>or</p>
          <button
            className="modal__alt-button"
            type="button"
            onClick={handleAltClick}
          >
            {altButtonText}
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default ModalWithForm;

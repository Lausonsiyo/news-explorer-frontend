/* STYLE SHEET */
import "./SuccessModal.css";

/* COMPONENTS IMPORTS */
import Modal from "../Modal/Modal";

function SuccessModal({ handleCloseClick, isOpen, handleOpenLoginModal }) {
  return (
    <Modal onClose={handleCloseClick} isOpen={isOpen} name="successModal">
      <div className="succes-modal__content">
        <h2 className="succes-modal__title">
          Registration successfully completed!
        </h2>
        <button
          className="succes-modal__button"
          type="button"
          onClick={handleOpenLoginModal}
        >
          Sign in
        </button>
      </div>
    </Modal>
  );
}

export default SuccessModal;

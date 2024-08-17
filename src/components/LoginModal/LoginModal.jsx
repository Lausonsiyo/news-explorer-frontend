/* COMPONENTS IMPORT */
import ModalWithForm from "../ModalWithForm/ModalWithForm";

/* STYLE SHEET */
import "./LoginModal.css";

function LoginModal({ handleCloseClick, isOpen }) {
  return (
    <ModalWithForm
      buttonText="Sing in"
      title="Sing in"
      formName="editProfile"
      onClose={handleCloseClick}
      isOpen={isOpen}
    >
      <button>or Sing up</button>
    </ModalWithForm>
  );
}

export default LoginModal;

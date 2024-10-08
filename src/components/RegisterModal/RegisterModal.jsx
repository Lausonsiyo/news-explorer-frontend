/* COMPONENTS IMPORT */
import ModalWithForm from "../ModalWithForm/ModalWithForm";

/* STYLE SHEET */
import "./RegisterModal.css";

function RegisterModal({ handleCloseClick, isOpen, handleAltClick }) {
  return (
    <ModalWithForm
      buttonText="Sing Up"
      title="Sing Up"
      formName="registerModal"
      onClose={handleCloseClick}
      isOpen={isOpen}
      altButtonText={"Sing in"}
      handleAltClick={handleAltClick}
    >
      <form action="" className="modal__form">
        <label htmlFor="email" className="modal__label">
          Email
        </label>
        <input
          type="text"
          id="email"
          className="modal__input"
          placeholder="Enter your email"
          required
          name="email"
        />
        <label htmlFor="register-password" className="modal__label">
          Password
        </label>
        <input
          type="password"
          className="modal__input"
          placeholder="Enter your password"
          id="register-password"
          required
          name="register-password"
        />
        <label htmlFor="username" className="modal__label">
          Username
        </label>
        <input
          type="text"
          className="modal__input"
          placeholder="Enter your username"
          id="username"
          required
          name="username"
        />
      </form>
    </ModalWithForm>
  );
}

export default RegisterModal;

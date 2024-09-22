/* COMPONENTS IMPORT */
import ModalWithForm from "../ModalWithForm/ModalWithForm";

/* STYLE SHEET */
import "./LoginModal.css";

function LoginModal({ handleCloseClick, isOpen, handleAltClick }) {
  return (
    <ModalWithForm
      buttonText="Sing in"
      title="Sing in"
      formName="loginModal"
      onClose={handleCloseClick}
      isOpen={isOpen}
      altButtonText={"Sing up"}
      handleAltClick={handleAltClick}
    >
      <form action="" className="modal__form">
        <label htmlFor="login-email" className="modal__label">
          Email
        </label>
        <input
          type="text"
          id="login-email"
          className="modal__input"
          placeholder="Email"
          required
          name="login-email"
        />
        <label htmlFor="login-password" className="modal__label">
          Password
        </label>
        <input
          type="password"
          className="modal__input"
          placeholder="Password"
          id="login-password"
          required
          name="login-password"
        />
      </form>
    </ModalWithForm>
  );
}

export default LoginModal;

/* COMPONENTS IMPORT */
import ModalWithForm from "../ModalWithForm/ModalWithForm";

/* STYLE SHEET */
import "./LoginModal.css";

/* HOOKS IMPORT */
import { useFormWithValidation } from "../../hooks/hooks";

function LoginModal({ handleCloseClick, isOpen, handleAltClick }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation({
    email: "",
    password: "",
  });

  return (
    <ModalWithForm
      buttonText="Sing In"
      title="Sing In"
      formName="loginModal"
      onClose={handleCloseClick}
      isOpen={isOpen}
      altButtonText={"Sing Up"}
      handleAltClick={handleAltClick}
      isDisabled={!isValid}
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
          name="email"
          minLength="4"
          maxLength="50"
          value={values.email || ""}
          onChange={handleChange}
        />
        <span className="modal__error">
          {errors.email} {""}
        </span>
        <label htmlFor="login-password" className="modal__label">
          Password
        </label>
        <input
          type="password"
          className="modal__input"
          placeholder="Password"
          id="login-password"
          required
          name="password"
          minLength="8"
          maxLength="30"
          onChange={handleChange}
          value={values.password || ""}
        />
        <span className="modal__error">{errors.password}</span>
      </form>
    </ModalWithForm>
  );
}

export default LoginModal;

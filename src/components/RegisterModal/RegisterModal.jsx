/* COMPONENTS IMPORT */
import ModalWithForm from "../ModalWithForm/ModalWithForm";

/* STYLE SHEET */
import "./RegisterModal.css";

/* HOOKS IMPORT */
import { useFormWithValidation } from "../../hooks/hooks";

function RegisterModal({ handleCloseClick, isOpen, handleAltClick }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation({
    email: "",
    password: "",
  });

  return (
    <ModalWithForm
      buttonText="Sing Up"
      title="Sing Up"
      formName="registerModal"
      onClose={handleCloseClick}
      isOpen={isOpen}
      altButtonText={"Sing In"}
      handleAltClick={handleAltClick}
      isDisabled={!isValid}
    >
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
        minLength="4"
        maxLength="50"
        value={values.email || ""}
        onChange={handleChange}
      />
      <span className="modal__error">
        {errors.email} {""}
      </span>
      <label htmlFor="register-password" className="modal__label">
        Password
      </label>
      <input
        type="password"
        className="modal__input"
        placeholder="Enter your password"
        id="register-password"
        required
        name="password"
        minLength="8"
        maxLength="30"
        onChange={handleChange}
        value={values.password || ""}
        autoComplete="new-password"
      />
      <span className="modal__error">{errors.password}</span>
      <label htmlFor="username" className="modal__label">
        Username
      </label>
      <input
        type="text"
        className="modal__input"
        placeholder="Enter your username"
        id="username"
        required
        name="name"
        minLength="2"
        maxLength="30"
        onChange={handleChange}
        value={values.name || ""}
        autoComplete="username"
      />
      <span className="modal__error">{errors.name}</span>
    </ModalWithForm>
  );
}

export default RegisterModal;

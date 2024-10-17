/* REACT DEPENDENCIES */
import { useEffect } from "react";

/* STYLE SHEET */
import "./Modal.css";

function Modal({ isOpen, onClose, children, name }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal modal__type_${name} ${isOpen && "modal_opened"}`}
      onClick={handleOverlay}
    >
      <div className={`modal__content modal__content_type_${name}`}>
        <button
          onClick={onClose}
          className={`modal__close modal__close_type_${name}`}
          type="button"
        />
        {children}
      </div>
    </div>
  );
}

export default Modal;

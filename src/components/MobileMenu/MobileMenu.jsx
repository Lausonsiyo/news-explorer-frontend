/* REACT IMPORTS */
import MediaQuery from "react-responsive";

/* COMPONENTS IMPORT */
import Modal from "../Modal/Modal";

/* STYLE SHEET IMPORT */
import "./MobileMenu.css";

function MobileMenu({ handleCloseClick, isOpen, handleOpenLoginModal }) {
  return (
    <MediaQuery maxWidth={360}>
      <Modal name="mobileModal" onClose={handleCloseClick} isOpen={isOpen}>
        <div className="mobile-menu">
          <div className="mobile-menu__header">
            <h2 className="mobile-menu__logo-text">NewsExplorer</h2>
          </div>
          <div className="mobile-menu__buttons">
            <button className="mobile-menu__buttons-home">Home</button>
            <button
              className="mobile-menu__buttons-singin"
              onClick={handleOpenLoginModal}
            >
              Sing in
            </button>
          </div>
        </div>
      </Modal>
    </MediaQuery>
  );
}

export default MobileMenu;

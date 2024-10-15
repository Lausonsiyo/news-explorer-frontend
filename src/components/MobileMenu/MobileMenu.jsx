/* REACT IMPORTS */
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";

/* COMPONENTS IMPORT */
import Modal from "../Modal/Modal";

/* STYLE SHEET IMPORT */
import "./MobileMenu.css";

function MobileMenu({
  handleCloseClick,
  isOpen,
  handleOpenLoginModal,
  isLoggedIn,
}) {
  // const handleClick = (action) => {
  //   action();
  //   handleCloseClick();
  // };

  return (
    <MediaQuery maxWidth={345}>
      <Modal name="mobileModal" onClose={handleCloseClick} isOpen={isOpen}>
        <div className="mobile-menu">
          <div className="mobile-menu__header">
            <h2 className="mobile-menu__logo-text">NewsExplorer</h2>
          </div>
          <div className="mobile-menu__buttons">
            <Link
              onClick={handleCloseClick}
              to="/"
              className="mobile-menu__buttons-home"
            >
              Home
            </Link>
            {isLoggedIn && (
              <Link
                onClick={handleCloseClick}
                to="/saved-news"
                className="mobile-menu__buttons-saved-news"
              >
                Saved News
              </Link>
            )}
            <button
              className="mobile-menu__buttons-singin"
              onClick={
                isLoggedIn ? console.log("handleLogout") : handleOpenLoginModal
              }
            >
              {isLoggedIn ? "Log out" : "Sing In"}
            </button>
          </div>
        </div>
      </Modal>
    </MediaQuery>
  );
}

export default MobileMenu;

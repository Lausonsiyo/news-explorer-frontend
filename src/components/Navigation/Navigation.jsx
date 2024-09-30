/* STYLE SHEET  */
import "./Navigation.css";

/* REACT IMPORTS  */
import { NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";

function Navigation({ handleOpenLoginModal, handleOpenMobileMenuModal }) {
  return (
    <div className="navigation">
      <NavLink to="/" className="navigation__logo-link">
        <h1 className="navigation__logo-text">NewsExplorer</h1>
      </NavLink>
      <nav className="navigation__button-container">
        <NavLink
          to="/"
          className="navigation__button-home"
          type="text"
          activeclassname="navigation__button-active"
        >
          Home
        </NavLink>
        <button
          onClick={handleOpenLoginModal}
          className="navigation__button-signin"
          type="text"
        >
          Sign In
        </button>
      </nav>
      <MediaQuery maxWidth={360}>
        <nav className="navigation__button-container-mobile">
          <button
            className="navigation__button_menu"
            onClick={handleOpenMobileMenuModal}
            type="button"
          ></button>
        </nav>
      </MediaQuery>
    </div>
  );
}

export default Navigation;

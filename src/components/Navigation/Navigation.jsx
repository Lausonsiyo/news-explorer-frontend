/* STYLE SHEET  */
import "./Navigation.css";

/* REACT IMPORTS  */
import { NavLink } from "react-router-dom";

function Navigation({ handleOpenLoginModal }) {
  return (
    <div className="navigation">
      <NavLink to="/">
        <h1 className="navigation__logo-text">NewsExplorer</h1>
      </NavLink>
      <nav className="navigation__button-container">
        <NavLink
          to="/"
          className="navigation__button-home"
          type="text"
          activeClassName="navigation__button-active"
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
    </div>
  );
}

export default Navigation;

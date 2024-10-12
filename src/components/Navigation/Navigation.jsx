/* STYLE SHEET  */
import "./Navigation.css";

/* REACT IMPORTS  */
import { NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";
import { useContext } from "react";

/* CONTEXT IMPORTS */
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { CurrentPageContext } from "../../context/CurrentPageContext";

/* IMAGES IMPORTS */
import logOutSymbol from "../../assets/images/logout-symbol.svg";
import logOutBlackSymbol from "../../assets/images/logout-symbolBlack.svg";

function Navigation({
  handleOpenLoginModal,
  handleOpenMobileMenuModal,
  isLoggedIn,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const { currentPage } = useContext(CurrentPageContext);
  return (
    <div
      className={`navigation ${
        currentPage === "/saved-news" ? "navigation_black" : ""
      }`}
    >
      <NavLink to="/" className="navigation__logo-link">
        <h1
          className={`navigation__logo-text ${
            currentPage === "/saved-news" ? "navigation__logo-text_black" : ""
          }`}
        >
          NewsExplorer
        </h1>
      </NavLink>
      <nav className="navigation__button-container">
        <NavLink
          to="/"
          className={`navigation__button-home ${
            currentPage === "/saved-news" ? "navigation__button-home_black" : ""
          }`}
          type="text"
          activeclassname="navigation__button-active"
        >
          Home
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink
              to="/saved-news"
              className={`navigation__button-saved-news ${
                currentPage === "/saved-news"
                  ? "navigation__button-saved-news_black"
                  : ""
              }`}
              type="text"
              activeclassname="navigation__button-active"
            >
              Saved News
            </NavLink>
            <button
              className={`navigation__button-logout 
                ${
                  currentPage === "/saved-news"
                    ? "navigation__button-logout_black"
                    : ""
                } `}
              type="button" /* onClick={handleLogout} */
            >
              <p className="navigation__button-logout-userName ">
                {(currentUser && currentUser.name) || "Logout"}
              </p>
              <img
                src={
                  currentPage === "/saved-news"
                    ? logOutBlackSymbol
                    : logOutSymbol
                }
                alt="logOut symbol"
              />
            </button>
          </>
        ) : (
          <button
            onClick={handleOpenLoginModal}
            className="navigation__button-signin"
            type="text"
          >
            Sign In
          </button>
        )}
      </nav>
      <MediaQuery maxWidth={345}>
        <nav className="navigation__button-container-mobile">
          <button
            className={`navigation__button_menu ${
              currentPage === "/saved-news"
                ? "navigation__button_menu_black"
                : ""
            }`}
            onClick={handleOpenMobileMenuModal}
            type="button"
          ></button>
        </nav>
      </MediaQuery>
    </div>
  );
}

export default Navigation;

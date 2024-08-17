/* STYLE SHEET  */
import "./Header.css";

/* COMPONENT IMPORTS */
import Navigation from "../Navigation/Navigation";

function Header({ handleOpenLoginModal }) {
  return (
    <div className="header">
      <Navigation handleOpenLoginModal={handleOpenLoginModal} />
    </div>
  );
}

export default Header;

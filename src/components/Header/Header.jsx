/* STYLE SHEET  */
import "./Header.css";

/* COMPONENT IMPORTS */
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({
  handleOpenLoginModal,
  handleOpenMobileMenuModal,
  handleOpenRegisterModal,
}) {
  return (
    <div className="header">
      <Navigation
        handleOpenLoginModal={handleOpenLoginModal}
        handleOpenMobileMenuModal={handleOpenMobileMenuModal}
      />
      <SearchForm />
    </div>
  );
}

export default Header;

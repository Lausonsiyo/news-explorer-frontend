/* STYLE SHEET  */
import "./Header.css";

/* COMPONENT IMPORTS */
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({
  handleOpenLoginModal,
  handleOpenMobileMenuModal,
  handleSearch,
  isLoggedIn,
}) {
  return (
    <header className="header">
      <Navigation
        handleOpenLoginModal={handleOpenLoginModal}
        handleOpenMobileMenuModal={handleOpenMobileMenuModal}
        isLoggedIn={isLoggedIn}
      />
      <SearchForm handleSearch={handleSearch} />
    </header>
  );
}

export default Header;

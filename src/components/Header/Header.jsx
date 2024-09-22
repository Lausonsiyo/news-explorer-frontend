/* STYLE SHEET  */
import "./Header.css";

/* COMPONENT IMPORTS */
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({
  handleOpenLoginModal,
  handleOpenMobileMenuModal,
  handleSearch,
}) {
  return (
    <div className="header">
      <Navigation
        handleOpenLoginModal={handleOpenLoginModal}
        handleOpenMobileMenuModal={handleOpenMobileMenuModal}
      />
      <SearchForm handleSearch={handleSearch} />
    </div>
  );
}

export default Header;

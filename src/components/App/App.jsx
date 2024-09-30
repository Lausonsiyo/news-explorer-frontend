/* REACT DEPENDENCIES */
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

/* STYLE SHEET */
import "./App.css";

/* UTILS IMPORTS */
import { handleSearchResponse } from "../../utils/newsApi";

/* CONTEXT PROVIDERS IMPORTS */
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { HasSearchedContext } from "../../context/HasSearchedContext";
import { SearchResultContext } from "../../context/SearchResultsContext";

/* COMPONENTS */
import Main from "../Main/Main";
import Header from "../Header/Header";
import LoginModal from "../LoginModal/LoginModal";
import Footer from "../Footer/Footer";
import MobileMenu from "../MobileMenu/MobileMenu";
import RegisterModal from "../RegisterModal/RegisterModal";
import NewsCard from "../NewsCard/NewsCard";
import SuccessModal from "../SuccessModal/SuccessModal";

/* PROTECTED ROUTE */
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  /* INITIAL CONTEXTS-/-USESTATE HOOKS  */
  const [currentUser, setCurrentUser] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [keyword, setKeyword] = useState("");

  /* HANDLER FUNCTION */
  const handleCloseClick = () => {
    setActiveModal("");
  };

  const handleSuccessModal = () => {
    setActiveModal("successModal");
  };

  const handleOpenLoginModal = () => {
    setActiveModal("login");
  };

  const handleOpenRegisterModal = () => {
    setActiveModal("register");
  };

  const handleOpenMobileMenuModal = () => {
    setActiveModal("mobileMenu");
  };

  const handleAltClick = () => {
    if (activeModal === "login") {
      handleCloseClick();
      handleOpenRegisterModal();
    } else {
      handleCloseClick();
      handleOpenLoginModal();
    }
  };

  const handleSearch = ({ keyword }) => {
    setKeyword(keyword);
    setIsSearching(true);
    handleSearchResponse(keyword)
      .then((res) => {
        console.log(res.articles);

        setSearchResults(res.articles);
        setHasSearched(true);
        setIsSearching(false);
        setSearchError(false);
      })
      .catch((err) => {
        console.error(err);
        setIsSearching(false);
        setSearchError(true);
      });
  };

  const handleSubmit = (request) => {
    setIsLoading(true);
    request()
      .then(() => {
        if (activeModal === "register") {
          setServerError(null);
        } else {
          setServerError(null);
          handleCloseClick();
        }
      })
      .catch((err) => {
        setServerError(err || "Error occurred, please try again");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="App">
        <CurrentUserContext.Provider value={currentUser}>
          <HasSearchedContext.Provider value={{ hasSearched }}>
            <SearchResultContext.Provider value={{ searchResults }}>
              <div className="App__content">
                <Header
                  handleOpenLoginModal={handleOpenLoginModal}
                  handleOpenMobileMenuModal={handleOpenMobileMenuModal}
                  handleSearch={handleSearch}
                />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Main
                        handleOpenLoginModal={handleOpenLoginModal}
                        isLoggedIn={isLoggedIn}
                        searchError={searchError}
                        isLoading={isSearching}
                      />
                    }
                  />
                </Routes>
                <Footer />
              </div>
              <LoginModal
                handleOpenLoginModal={handleOpenLoginModal}
                isOpen={activeModal === "login"}
                handleCloseClick={handleCloseClick}
                isLoading={isLoading}
                handleAltClick={handleAltClick}
                serverError={serverError}
              />
              <RegisterModal
                handleAltClick={handleAltClick}
                handleOpenRegisterModal={handleOpenRegisterModal}
                isOpen={activeModal === "register"}
                handleCloseClick={handleCloseClick}
                isLoading={isLoading}
                serverError={serverError}
              />
              <MobileMenu
                handleOpenRegisterModal={handleOpenRegisterModal}
                handleOpenLoginModal={handleOpenLoginModal}
                handleOpenMobileMenuModal={handleOpenMobileMenuModal}
                isOpen={activeModal === "mobileMenu"}
                handleCloseClick={handleCloseClick}
                isLoading={isLoading}
              />
              <SuccessModal
                isOpen={activeModal === "successModal"}
                handleCloseClick={handleCloseClick}
                handleOpenLoginModal={handleOpenLoginModal}
              />
            </SearchResultContext.Provider>
          </HasSearchedContext.Provider>
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;

/* REACT DEPENDENCIES */
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/* STYLE SHEET */
import "./App.css";

/* UTILS IMPORTS */
import { handleSearchResponse } from "../../utils/newsApi";
import {
  removeSavedArticle,
  addSavedArticle,
  getSavedArticles,
} from "../../utils/api";

import { checkToken, authorization } from "../../utils/auth";

/* CONTEXT PROVIDERS IMPORTS */
import { CurrentPageContext } from "../../context/CurrentPageContext";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { HasSearchedContext } from "../../context/HasSearchedContext";
import { SearchResultContext } from "../../context/SearchResultsContext";
import { SavedArticlesContext } from "../../context/SavedArticlesContext";
import { KeywordContext } from "../../context/KeywordContext";

/* COMPONENTS */
import Main from "../Main/Main";
import LoginModal from "../LoginModal/LoginModal";
import Footer from "../Footer/Footer";
import MobileMenu from "../MobileMenu/MobileMenu";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import SavedNews from "../SavedNews/SavedNews";

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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();

  /* USE LOCATION  */
  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  /* INITIAL CARDS */
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setIsLoggedIn(true);
          }
        })
        .then(() => {
          getSavedArticles(jwt).then((articles) => {
            setSavedArticles(articles);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);

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

  /* HANDLE SEARCH  */
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

  /* UNIVERSAL HANDLE SUBMIT  */
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

  /* HANDLE REMOVE AND ADD FUNCTIONS */
  /* ADD */
  const handleSaveArticle = ({ newsData, keyword, token }) => {
    if (!savedArticles.some((article) => article.link === newsData.url)) {
      addSavedArticle(newsData, keyword, token)
        .then((data) => {
          setSavedArticles([data.data, ...savedArticles]);
          const savedArticleId = data.data._id;
          const newArticle = { ...newsData, _id: savedArticleId };
          const newSearchResults = searchResults.map((article) =>
            article.url === newsData.url ? newArticle : article
          );
          setSearchResults(newSearchResults);
        })
        .catch((err) => console.error(err));
    } else if (savedArticles.some((article) => article.link === newsData.url)) {
      handleRemoveArticle(newsData, token);
    }

    /* (savedArticles.some((article) => article.link === newsData.url)) {
      removeSavedArticle(newsData, token)
        .then(() => {
          const unsaveNewsArticles = savedArticles.filter(
            (article) => article._id !== newsData._id
          );
          setSavedArticles(unsaveNewsArticles);

          const newArticle = { ...newsData, _id: "" };
          const newSearchResults = searchResults.map((article) =>
            article.url === newsData.url ? newArticle : article
          );
          setSearchResults(newSearchResults);
        })
        .catch((err) => console.error(err));
    } */
  };

  /* REMOVE */
  const handleRemoveArticle = ({ newsData, token }) => {
    removeSavedArticle(newsData, token)
      .then(() => {
        const removedSavedArticles = savedArticles.filter(
          (article) => article._id !== newsData._id
        );
        setSavedArticles(removedSavedArticles);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="App">
        <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
          <CurrentUserContext.Provider value={currentUser}>
            <HasSearchedContext.Provider value={{ hasSearched }}>
              <SearchResultContext.Provider value={{ searchResults }}>
                <SavedArticlesContext.Provider value={{ savedArticles }}>
                  <KeywordContext.Provider value={{ keyword }}>
                    <div className="App__content">
                      <Routes>
                        <Route
                          path="/"
                          element={
                            <Main
                              handleOpenLoginModal={handleOpenLoginModal}
                              isLoggedIn={isLoggedIn}
                              setIsLoggedIn={setIsLoggedIn}
                              searchError={searchError}
                              isLoading={isSearching}
                              handleSearch={handleSearch}
                              handleOpenMobileMenuModal={
                                handleOpenMobileMenuModal
                              }
                              handleRemoveArticle={handleRemoveArticle}
                              handleSaveArticle={handleSaveArticle}
                            />
                          }
                        />
                        <Route
                          path="/saved-news"
                          element={
                            <ProtectedRoute isLoggedIn={isLoggedIn}>
                              <SavedNews
                                isLoggedIn={isLoggedIn}
                                handleOpenMobileMenuModal={
                                  handleOpenMobileMenuModal
                                }
                              />
                            </ProtectedRoute>
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
                  </KeywordContext.Provider>
                </SavedArticlesContext.Provider>
              </SearchResultContext.Provider>
            </HasSearchedContext.Provider>
          </CurrentUserContext.Provider>
        </CurrentPageContext.Provider>
      </div>
    </>
  );
}

export default App;

/* REACT DEPENDENCIES */
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

/* COMPONENTS */
import Main from "../Main/Main";
import Header from "../Header/Header";
import LoginModal from "../LoginModal/LoginModal";
import Footer from "../Footer/Footer";
import MobileMenu from "../MobileMenu/MobileMenu";
import RegisterModal from "../RegisterModal/RegisterModal";
import NewsCard from "../NewsCard/NewsCard";

/* STYLE SHEET */
import "./App.css";

function App() {
  /* INITIAL CONTEXTS-/-USESTATE HOOKS  */
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /* HANDLER FUNCTION */
  const handleCloseClick = () => {
    setActiveModal("");
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

  return (
    <>
      <div className="App">
        <div className="App__content">
          <Header
            handleOpenLoginModal={handleOpenLoginModal}
            handleOpenMobileMenuModal={handleOpenMobileMenuModal}
          />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <Footer />
        </div>
        <LoginModal
          handleOpenLoginModal={handleOpenLoginModal}
          isOpen={activeModal === "login"}
          handleCloseClick={handleCloseClick}
          isLoading={isLoading}
          handleAltClick={handleAltClick}
        />
        <RegisterModal
          handleAltClick={handleAltClick}
          handleOpenRegisterModal={handleOpenRegisterModal}
          isOpen={activeModal === "register"}
          handleCloseClick={handleCloseClick}
          isLoading={isLoading}
        />
        <MobileMenu
          handleOpenRegisterModal={handleOpenRegisterModal}
          handleOpenLoginModal={handleOpenLoginModal}
          handleOpenMobileMenuModal={handleOpenMobileMenuModal}
          isOpen={activeModal === "mobileMenu"}
          handleCloseClick={handleCloseClick}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}

export default App;

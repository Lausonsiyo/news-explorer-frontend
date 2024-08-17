/* REACT DEPENDENCIES */
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

/* COMPONENTS */
import Main from "../Main/Main";
import Header from "../Header/Header";
import LoginModal from "../LoginModal/LoginModal";

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

  const handleAltClick = () => {
    if (activeModal === "loginModal") {
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
          <Header handleOpenLoginModal={handleOpenLoginModal} />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
        <LoginModal
          handleOpenLoginModal={handleOpenLoginModal}
          isOpen={activeModal === "login"}
          handleCloseClick={handleCloseClick}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}

export default App;

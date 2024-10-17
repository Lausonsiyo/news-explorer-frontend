/* STYLE SHEET */
import "./SavedNewsHeader.css";

/* REACT DEPENDENCIES */
import { useContext } from "react";

/* CONTEXT IMPORTS */
import { CurrentUserContext } from "../../context/CurrentUserContext";

/* COMPONENTS IMPORTS */
import Navigation from "../Navigation/Navigation";

const SavedNewsHeader = ({ handleOpenMobileMenuModal, isLoggedIn }) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="saved-news">
      <section>
        <Navigation
          isLoggedIn={isLoggedIn}
          handleOpenMobileMenuModal={handleOpenMobileMenuModal}
        />
      </section>
      <div className="saved-news__container">
        <div className="saved-news__title">Saved articles</div>
        <h1 className="saved-news__header">
          {/* {currentUser.name} */}, you have {/* {userArticles.length} */}{" "}
          saved article
          {/* {userArticles.length !== 1 ? "s" : ""} */}
        </h1>
        <div className="saved-news__keywords-container">
          <p className="saved-news__keywords-title">By keywords:</p>
          <p className="saved-news__keywords">{/* {keywordString} */}</p>
        </div>
      </div>
    </div>
  );
};

export default SavedNewsHeader;

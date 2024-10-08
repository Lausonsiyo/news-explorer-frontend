/* STYLE SHEET */
import "./SavedNews.css";

/* COMPONENTS IMPORTS */
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";

const SavedNews = ({
  handleRemoveArticle,
  handleOpenMobileMenuModal,
  isLoggedIn,
}) => {
  return (
    <>
      <section className="savedNews__header-section">
        <SavedNewsHeader
          handleOpenMobileMenuModal={handleOpenMobileMenuModal}
          isLoggedIn={isLoggedIn}
        />
      </section>
      <section className="savedNews__cards-section">
        <SavedNewsCardList handleRemoveArticle={handleRemoveArticle} />
      </section>
    </>
  );
};

export default SavedNews;

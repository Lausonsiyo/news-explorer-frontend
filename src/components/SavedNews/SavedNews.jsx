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
      <section>
        <SavedNewsHeader
          handleOpenMobileMenuModal={handleOpenMobileMenuModal}
          isLoggedIn={isLoggedIn}
        />
      </section>
      <section>
        <SavedNewsCardList handleRemoveArticle={handleRemoveArticle} />
      </section>
    </>
  );
};

export default SavedNews;

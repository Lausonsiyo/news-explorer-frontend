/* STYLE SHEET  */
import "./SavedNewsCardList.css";

/* REACT DEPENDENCIES */
import { useContext } from "react";

/* COMPONENTS IMPORTS */
import NewsCard from "../NewsCard/NewsCard";

/* CONTEXT IMPORTS */
import { SavedArticlesContext } from "../../context/SavedArticlesContext";
import { CurrentUserContext } from "../../context/CurrentUserContext";

const SavedNewsCardList = ({ handleRemoveArticle }) => {
  const { savedArticles } = useContext(SavedArticlesContext);
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="savednews-newscards">
      <div className="savednews-newscards__container">
        {savedArticles
          .filter((article) => article.owner === currentUser._id)
          .map((article) => (
            <NewsCard
              newsData={article}
              key={article.link}
              handleRemoveArticle={handleRemoveArticle}
            />
          ))}
      </div>
    </section>
  );
};

export default SavedNewsCardList;

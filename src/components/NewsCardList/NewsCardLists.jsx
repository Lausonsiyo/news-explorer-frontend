/* STYLE SHEET IMPORTS */
import "./NewsCardLists.css";

/* COMPONENTS IMPORT  */
import NewsCard from "../NewsCard/NewsCard";

/* REACT DEPENDENCIES */
import { useContext, useState } from "react";

/* CONTEXT PROVIDERS IMPORTS */
import { HasSearchedContext } from "../../context/HasSearchedContext";
import { SearchResultContext } from "../../context/SearchResultsContext";

function NewsCardLists({
  isLoggedIn,
  handleOpenLoginModal,
  handleRemoveArticle,
  handleSaveArticle,
}) {
  const [cardsDisplayed, setCardsDisplayed] = useState(3);
  const { searchResults } = useContext(SearchResultContext);
  const { hasSearched } = useContext(HasSearchedContext);

  const increaseVisibleCards = () => {
    setCardsDisplayed(cardsDisplayed + 3);
  };

  return (
    <section className="newscards__section">
      
      {hasSearched ? (
        <>
          <h2 className="newscards__title">Search results</h2>
          <ul className="newscards__container">
            {searchResults.slice(0, cardsDisplayed).map((result) => {
              return (
                <li className="newscards__item" key={result.url}>
                  <NewsCard
                    isLoggedIn={isLoggedIn}
                    newsData={result}
                    handleRemoveArticle={handleRemoveArticle}
                    handleOpenLoginModal={handleOpenLoginModal}
                    handleSaveArticle={handleSaveArticle}
                  />
                </li>
              );
            })}
          </ul>
          <button
            className={`newscards__button ${
              cardsDisplayed >= searchResults.length
                ? "newscards__button_hidden"
                : ""
            }`}
            onClick={increaseVisibleCards}
          >
            Show more
          </button>
        </>
      ) : (
        ""
      )}
    </section>
  );
}

export default NewsCardLists;

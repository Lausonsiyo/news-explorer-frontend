/* STYLE SHEET IMPORTS */
import "./NewsCard.css";

/* REACT DEPENDENCIES */
import { useState } from "react";
import { useContext } from "react";

/* CONTEXT IMPORTS */
import { CurrentPageContext } from "../../context/CurrentPageContext";
import { KeywordContext } from "../../context/KeywordContext";

/* UTILS IMPORTS */

function NewsCard({
  newsData,
  isLoggedIn,
  handleOpenLoginModal,
  handleRemoveArticle,
  handleSaveArticle,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const { keyword } = useContext(KeywordContext);

  const formattedDate = new Date(newsData.publishedAt).toLocaleString(
    "default",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    const token = localStorage.getItem("jwt");
    handleSaveArticle({ newsData, keyword, token });
  };

  const handleRemoveClick = () => {
    console.log("Remove card clicked");

    // const token = localStorage.getItem("jwt");
    // handleRemoveArticle({ newsData, token });
  };

  return (
    <article className="card__container">
      {currentPage === "/saved-news" ? (
        <>
          <div className="card__keyword">
            {/* {newsData.keyword} */} KEYWORD
          </div>

          <div
            className={`card__popup-text ${
              isHovered ? "" : "card__popup-text_hidden"
            }`}
          >
            Remove from saved
          </div>
          <button
            className="card__button-delete"
            onClick={handleRemoveClick}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          />
        </>
      ) : (
        <>
          {isLoggedIn ? (
            <button
              className={`card__button-bookmark ${
                isBookmarked ? "card__button-bookmark_marked" : ""
              }`}
              onClick={handleBookmarkClick}
            />
          ) : (
            <>
              <div
                className={`card__popup-text ${
                  isHovered ? "" : "card__popup-text_hidden"
                }`}
              >
                Sign in to save articles
              </div>
              <button
                className="card__button-bookmark"
                onClick={handleOpenLoginModal}
                onMouseEnter={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              />
            </>
          )}
        </>
      )}

      <img
        src={newsData.urlToImage}
        alt={`newsData.title-${"image"}`}
        className="card__image"
      />
      <div className="card__text">
        <p className="card__date-published">{formattedDate} </p>
        <h3 className="card__title">{newsData.title} </h3>
        <p className="card__content">{newsData.description}</p>

        <p className="card__source">{newsData.source.name}</p>
      </div>
    </article>
  );
}

export default NewsCard;

/* STYLE SHEET IMPORTS */
import "./NewsCard.css";

/* REACT DEPENDENCIES */
import { useState } from "react";

function NewsCard({ newsData, isLoggedIn, handleOpenLoginModal }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const formattedDate = new Date(newsData.publishedAt).toLocaleString(
    "default",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );
  console.log(isLoggedIn);

  const handleBookmarkClick = () => {
    console.log("bookmark clicked");
    setIsBookmarked(!isBookmarked);
    // TO DO: Implement bookmark logic
    // const token = localStorage.getItem("jwt");
    // handleSaveArticle({ newsData, keyword, token });
  };

  return (
    <div className="card__container">
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
              console.log("Hovering:", isHovered);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              console.log("Not hovering:", isHovered);
            }}
          />
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
    </div>
  );
}

export default NewsCard;

/*(
    <div className="card__container">
      {!isLoggedIn ? (
        <button
          className={`card__button-bookmark ${
            isBookmarked ? "card__button-bookmark_marked" : ""
          }`}
          onClick={handleBookmarkClick}
        />
      ) : (
        ""
      )}
      {isLoggedIn && (
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
              console.log("Hovering:", isHovered);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              console.log("Not hovering:", isHovered);
            }}
          />
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
    </div>
  );*/

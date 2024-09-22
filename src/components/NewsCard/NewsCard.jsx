/* STYLE SHEET IMPORTS */
import "./NewsCard.css";

/* REACT DEPENDENCIES */

function NewsCard({ newsData }) {
  const formattedDate = new Date(newsData.publishedAt).toLocaleString(
    "default",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <div className="card__container">
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

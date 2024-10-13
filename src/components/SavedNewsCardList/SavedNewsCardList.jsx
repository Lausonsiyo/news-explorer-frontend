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

  const sampleData = [
    {
      author: "Leah Feiger",
      content:
        "Leah Feiger: So Trump brings Musk out, he calls him a truly incredible guy...",
      description:
        "The increasingly outspoken tech mogul spoke at a Trump rally this weekend...",
      publishedAt: "2024-10-10T21:49:47Z",
      source: { id: "wired", name: "Wired" },
      title: "Will Elon Musk Tip the Election for Trump?",
      url: "https://www.wired.com/story/elon-musk-donald-trump-election/",
      urlToImage:
        "https://media.wired.com/photos/67041515cef303b0aeb7593a/191:100/w_1280,c_limit/PL-Elon-Trump-Rally-Politics.jpg",
      keyword: "Elon Musk",
      _id: "1234567890",
    },
    {
      author: "Jane Doe",
      content:
        "The tech world is watching as Apple prepares to release its next-generation products.",
      description:
        "Apple is set to unveil its new line of products, including the iPhone 15...",
      publishedAt: "2024-10-01T12:34:56Z",
      source: { id: "techcrunch", name: "TechCrunch" },
      title: "Apple Prepares to Unveil New Products",
      url: "https://www.techcrunch.com/apple-unveils-new-products/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/10/apple_event.jpg",
      keyword: "Apple",
      _id: "9876543210",
    },
    {
      author: "John Smith",
      content:
        "Google's latest update brings new features to its popular search engine.",
      description:
        "The update includes improvements to search results and a new interface...",
      publishedAt: "2024-09-25T10:00:00Z",
      source: { id: "google", name: "Google" },
      title: "Google Updates Search Engine with New Features",
      url: "https://www.google.com/search-update/",
      urlToImage: "https://www.google.com/search-update/image.jpg",
      keyword: "Google",
      _id: "1111111111",
    },
    // ...
  ];

  return (
    <section className="savednews-newscards">
      <div className="savednews-newscards__container">
        {sampleData.map((article) => (
          <NewsCard
            newsData={article}
            key={article._id}
            handleRemoveArticle={handleRemoveArticle}
          />
        ))}
      </div>
    </section>
  );
};

export default SavedNewsCardList;

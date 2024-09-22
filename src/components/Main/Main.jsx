/* COMPONENTS IMPORT  */
import About from "../About/About";
import NewsCardLists from "../NewsCardList/NewsCardLists";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

/* CONTEXT PROVIDER IMPORTS */
import { HasSearchedContext } from "../../context/HasSearchedContext";
import { SearchResultContext } from "../../context/SearchResultsContext";

/* REACT DEPENDENCIES */
import { useContext } from "react";

function Main({ isLoading, searchError }) {
  const { hasSearched } = useContext(HasSearchedContext);
  const { searchResult } = useContext(SearchResultContext);

  console.log("Search Result:", searchResult);

  return (
    <div className="main">
      <div>
        {isLoading && <Preloader />}
        {!isLoading &&
        hasSearched &&
        Array.isArray(searchResult) &&
        searchResult.length > 0 ? (
          <NewsCardLists />
        ) : !isLoading &&
          hasSearched &&
          Array.isArray(searchResult) &&
          searchResult.length === 0 ? (
          <NotFound />
        ) : searchError === true ? (
          <p>
            Sorry, something went wrong during the request. Please try again
            later.
          </p>
        ) : (
          ""
        )}
      </div>
      <About />
    </div>
  );
}
export default Main;

/* COMPONENTS IMPORT  */
import About from "../About/About";
import NewsCardLists from "../NewsCardList/NewsCardLists";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import Header from "../Header/Header";

/* CONTEXT PROVIDER IMPORTS */
import { HasSearchedContext } from "../../context/HasSearchedContext";
import { SearchResultContext } from "../../context/SearchResultsContext";

/* REACT DEPENDENCIES */
import { useContext } from "react";

function Main({
  isLoading,
  searchError,
  isLoggedIn,
  handleOpenLoginModal,
  handleOpenMobileMenuModal,
  handleSearch,
  handleRemoveArticle,
  handleSaveArticle,
}) {
  const { hasSearched } = useContext(HasSearchedContext);
  const { searchResults } = useContext(SearchResultContext);

  return (
    <main>
      <section>
        <Header
          handleOpenLoginModal={handleOpenLoginModal}
          handleOpenMobileMenuModal={handleOpenMobileMenuModal}
          handleSearch={handleSearch}
          isLoggedIn={isLoggedIn}
        />
      </section>
      <section>
        {isLoading && <Preloader />}
        {!isLoading &&
        hasSearched &&
        Array.isArray(searchResults) &&
        searchResults.length > 0 ? (
          <NewsCardLists
            handleOpenLoginModal={handleOpenLoginModal}
            isLoggedIn={isLoggedIn}
            handleRemoveArticle={handleRemoveArticle}
            handleSaveArticle={handleSaveArticle}
          />
        ) : !isLoading &&
          hasSearched &&
          Array.isArray(searchResults) &&
          searchResults.length === 0 ? (
          <NotFound />
        ) : searchError === true ? (
          <p>
            Sorry, something went wrong during the request. There may be a
            connection issue or the server may be down. Please try again later.
          </p>
        ) : (
          ""
        )}
      </section>
      <section>
        <About />
      </section>
    </main>
  );
}
export default Main;

/* COMPONENTS IMPORT  */
import About from "../About/About";
import NewsCardLists from "../NewsCardList/NewsCardLists";

function Main({}) {
  return (
    <div className="main">
      <NewsCardLists />
      <About />
    </div>
  );
}

export default Main;

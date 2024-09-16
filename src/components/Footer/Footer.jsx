/* STYLE SHEET  */
import "./Footer.css";

/* IMAGES IMPORTS */
import FacebookIcon from "../../assets/images/fbicon.svg";
import GithubIcon from "../../assets/images/githubicon.svg";

/* REACT DEPENDENCIES */
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        &#169; {currentYear} Supersite, Powered by News API{" "}
      </p>

      <div className="footer__links">
        <div className="footer__buttons">
          <Link to="/">
            <button className="footer__button" type="text">
              Home
            </button>
          </Link>
          <a
            className="footer__button"
            href="https://www.tripleten.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripleTen
          </a>
        </div>

        <div className="footer__icons">
          <a
            href="https://github.com/Lausonsiyo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GithubIcon}
              className="footer__icon-button"
              alt="Github Icon"
            />
          </a>
          <a
            href="https://www.facebook.com/andres.lauson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={FacebookIcon}
              className="footer__icon-button"
              alt="Facebook Icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

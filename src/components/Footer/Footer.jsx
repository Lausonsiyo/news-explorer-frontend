/* STYLE SHEET  */
import "./Footer.css";

/* IMAGES IMPORTS */
import FacebookIcon from "../../assets/images/fbicon.svg";
import GithubIcon from "../../assets/images/githubicon.svg";

/* REACT DEPENDENCIES */
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        &#169; {currentYear} Supersite, Powered by News API{" "}
      </p>

      <nav className="footer__nav">
        <ul className="footer__links">
          <div className="footer__links-text-buttons">
            <li className="footer__list-item">
              <Link to="/">
                <button className="footer__button" type="text">
                  Home
                </button>
              </Link>
            </li>
            <li className="footer__list-item">
              <a
                className="footer__button"
                href="https://www.tripleten.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TripleTen
              </a>
            </li>
          </div>
          <div className="footer__links-icons">
            <li className="footer__list-item">
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
            </li>
            <li className="footer__list-item">
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
            </li>
          </div>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;

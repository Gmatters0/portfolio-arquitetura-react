import { useContext } from "react";
import { Link } from "react-router-dom";

// ASSETS
import "./Footer.css";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instragram.svg";
import BrasilFlag from "../../assets/brasilFlag.svg";
import UsaFlag from "../../assets/usaFlag.svg";
import LogoDNC from "../../assets/logoDNC.svg";

// UTILS
import { AppContext } from "../../contexts/AppContext";

function Footer() {
  const appContext = useContext(AppContext)
  const changeLanguage = (country) => {
    appContext.setLanguage(country)
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-main d-flex jc-space-between mobile-fd-column">
          <div className="footer-logo-col">
            <img src={LogoDNC} className="footer-logo"></img>
            <p>
              {appContext.languages[appContext.language].general.footerLogoText}
            </p>
            <div className="d-flex social-links">
              <a href="#" target="_blank">
                <img src={Facebook}></img>
              </a>
              <a href="#" target="_blank">
                <img src={Twitter}></img>
              </a>
              <a href="#" target="_blank">
                <img src={Linkedin}></img>
              </a>
              <a href="#" target="_blank">
                <img src={Instagram}></img>
              </a>
            </div>
          </div>
          <div className="d-flex mobile-fd-column">
            <div className="footer-col">
              <h3>{appContext.languages[appContext.language].general.pages}</h3>
              <ul>
                <Link to="/">
                  <li>{appContext.languages[appContext.language].menu.home}</li>
                </Link>
                <Link to="/about">
                  <li>{appContext.languages[appContext.language].menu.about}</li>
                </Link>
                <Link to="/projects">
                  <li>{appContext.languages[appContext.language].menu.projects}</li>
                </Link>
                <Link to="/contact">
                  <li>{appContext.languages[appContext.language].menu.contact}</li>
                </Link>
              </ul>
            </div>
            <div className="footer-col">
              <h3>{appContext.languages[appContext.language].menu.contact}</h3>
              <p>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
              <p>suporte@escoladnc.com.br</p>
              <p>(19) 99187-4342</p>
            </div>
          </div>
        </div>
        <div className="d-flex jc-space-between footer-copy">
            <p>Copyright © DNC - 2024</p>
            <div className="langs-area d-flex">
                <img onClick={() => changeLanguage('br')} src={BrasilFlag} height="29px"></img>
                <img onClick={() => changeLanguage('en')} src={UsaFlag} height="29px"></img>
            </div>
          </div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;

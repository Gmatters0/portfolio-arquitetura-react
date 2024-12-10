import "./Footer.css";
import { Link } from "react-router-dom";

// ASSETS
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instragram.svg";
import BrasilFlag from "../../assets/brasilFlag.svg";
import UsaFlag from "../../assets/usaFlag.svg";
import LogoDNC from "../../assets/logoDNC.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-main d-flex jc-space-between mobile-fd-column">
          <div className="footer-logo-col">
            <img src={LogoDNC} className="footer-logo"></img>
            <p>
              A escola que prepara você para as profissões em alta no mercado de
              trabalho.
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
              <h3>Pages</h3>
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About us</li>
                </Link>
                <Link to="/projects">
                  <li>Projects</li>
                </Link>
                <Link to="/contact">
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Contact</h3>
              <p>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
              <p>suporte@escoladnc.com.br</p>
              <p>(19) 99187-4342</p>
            </div>
          </div>
        </div>
        <div className="d-flex jc-space-between footer-copy">
            <p>Copyright © DNC - 2024</p>
            <div className="langs-area d-flex">
                <img src={BrasilFlag} height="29px"></img>
                <img src={UsaFlag} height="29px"></img>
            </div>
          </div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;

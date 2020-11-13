import Copyright from "./Copyright";
import Acknowledgement from "./Acknowledgement";
import CAROtheDEV from "./CAROtheDEV";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Donate from "./Donate";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.contactsContainer}>
        <div className={style.socialsContainer}>
          <Facebook
            key="facebook"
            href="https://www.facebook.com/TecomaTwilightEthicalMarket/"
          />
          <Instagram
            key="instagram"
            href="https://www.instagram.com/tecomatwilightmarket/"
          />
        </div>
        <p>
          <i aria-hidden className="far fa-envelope"></i>{" "}
          <a href="mailto:tecomatwilightmarket@gmail.com">
            tecomatwilightmarket@gmail.com
          </a>
        </p>
        <p>
          <i aria-hidden className="fas fa-map-marker-alt"></i> Tecoma Uniting
          Church, 1566 Burwood Highway, Tecoma
        </p>
        <p>
          <i aria-hidden className="fas fa-phone"></i>{" "}
          <a href="tel:0397542177">(03) 9754 2177</a>
        </p>
      </div>
      <Acknowledgement />
      <div className={style.copyrightContainer}>
        <Copyright />
        <p>|</p>
        <CAROtheDEV />
      </div>
    </footer>
  );
};

export default Footer;

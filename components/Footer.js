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
      <div className={style.copyrightContainer}>
        <Copyright />
        <p>|</p>
        <CAROtheDEV />
      </div>
      <Acknowledgement />
    </footer>
  );
};

export default Footer;

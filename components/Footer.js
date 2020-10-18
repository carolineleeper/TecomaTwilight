import Copyright from "./Copyright";
import Acknowledgement from "./Acknowledgement";
import CAROtheDEV from "./CAROtheDEV";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.socialsContainer}>
        <Facebook key="facebook" />
        <Instagram key="instagram" />
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

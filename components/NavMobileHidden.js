import NavItem from "./NavItem";
import Donate from "./Donate";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import style from "./NavMobileHidden.module.css";

const NavMobileHidden = (props) => {
  return (
    <div
      className={
        props.isMenuToggled ? style.navMobileDisplayed : style.navMobileHidden
      }
    >
      {props.routes.map((route) => {
        return (
          <NavItem
            key={`${route.title}mobile`}
            title={route.title}
            url={route.url}
            isMenuToggled={props.isMenuToggled}
            handleMenuToggle={props.handleMenuToggle}
          />
        );
      })}
      <div className={style.mobileNavSocials}>
        <Facebook
          key="facebook"
          href="https://www.facebook.com/TecomaTwilightEthicalMarket/"
        />
        <Instagram
          key="instagram"
          href="https://www.instagram.com/tecomatwilightmarket/"
        />
      </div>
      <Donate />
    </div>
  );
};

export default NavMobileHidden;

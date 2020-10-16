import NavItem from "./NavItem";
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
      <Facebook key="facebook" />
      <Instagram key="instagram" />
    </div>
  );
};

export default NavMobileHidden;

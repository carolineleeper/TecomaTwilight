import NavItem from "./NavItem";
import Donate from "./Donate";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import style from "./Nav.module.css";

const Nav = (props) => {
  return (
    <nav className={style.navContainer}>
      {props.routes.map((route) => {
        return (
          <NavItem key={route.title} title={route.title} url={route.url} />
        );
      })}
      <Donate />
      <div>
        <Facebook key="facebook" />
        <Instagram key="instagram" />
      </div>
    </nav>
  );
};

export default Nav;

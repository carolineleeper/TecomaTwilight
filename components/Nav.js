import NavItem from "./NavItem";
import Facebook from "./Facebook";
import style from "./Nav.module.css";

const Nav = (props) => {
  return (
    <nav className={style.navContainer}>
      {props.routes.map((route) => {
        return (
          <NavItem key={route.title} title={route.title} url={route.url} />
        );
      })}
      <Facebook key="facebook" />
    </nav>
  );
};

export default Nav;

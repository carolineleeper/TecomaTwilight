import NavItem from "./NavItem";
import style from "./Nav.module.css";

const routes = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Stalls",
    url: "/stalls",
  },
];

const Nav = () => {
  return (
    <nav className={style.navBar}>
      {routes.map((route) => {
        return (
          <>
            <NavItem key={route.title} title={route.title} url={route.url} />
            <Facebook />
            <Instagram />
          </>
        );
      })}
    </nav>
  );
};

export default Nav;

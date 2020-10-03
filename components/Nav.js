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
    <nav className={style.navbar}>
      {routes.map((route) => {
        return (
          <NavItem key={route.title} title={route.title} url={route.url} />
        );
      })}
    </nav>
  );
};

export default Nav;

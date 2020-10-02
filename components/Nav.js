import NavItem from "./NavItem";

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
    <nav>
      {routes.map((route) => {
        return (
          <NavItem key={route.title} title={route.title} url={route.url} />
        );
      })}
    </nav>
  );
};

export default Nav;

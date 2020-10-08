import NavItem from "./NavItem";
import Logo from "./Logo";
import NavToggle from "./NavToggle";
import Facebook from "./Facebook";
import style from "./Nav.module.css";
import { useState } from "react";

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
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const handleMenuToggle = () => {
    if (isMenuToggled) {
      setIsMenuToggled(false);
    } else {
      setIsMenuToggled(true);
    }
  };

  return (
    <nav
      className={isMenuToggled ? style.toggledNavContainer : style.navContainer}
    >
      {routes.map((route) => {
        return (
          <>
            <NavItem key={route.title} title={route.title} url={route.url} />
          </>
        );
      })}
      <Facebook key="facebook" />
      <NavToggle
        handleMenuToggle={handleMenuToggle}
        isMenuToggled={isMenuToggled}
      />
      {isMenuToggled ? <Logo isMenuToggled={isMenuToggled} /> : null}
      {/* <Instagram /> */}
    </nav>
  );
};

export default Nav;

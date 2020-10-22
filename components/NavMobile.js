import NavMobileHidden from "./NavMobileHidden";
import NavToggle from "./NavToggle";
import style from "./NavMobile.module.css";
import { useState } from "react";

const NavMobile = (props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const handleMenuToggle = () => {
    const body = document.querySelector("body");

    if (isMenuToggled) {
      setIsMenuToggled(false);
      body.classList.remove("menuToggled");
    } else {
      setIsMenuToggled(true);
      body.classList.add("menuToggled");
    }
  };

  return (
    <>
      <nav className={style.navMobileContainer}>
        <NavMobileHidden
          routes={props.routes}
          isMenuToggled={isMenuToggled}
          handleMenuToggle={handleMenuToggle}
        />
      </nav>
      <NavToggle
        handleMenuToggle={handleMenuToggle}
        isMenuToggled={isMenuToggled}
      />
    </>
  );
};

export default NavMobile;

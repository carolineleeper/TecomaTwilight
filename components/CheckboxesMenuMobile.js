import Checkboxes from "./Checkboxes";
import MenuToggle from "./MenuToggle";
import style from "./CheckboxesMenuMobile.module.css";
import { useState } from "react";

const CheckboxesMenu = (props) => {
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
      <MenuToggle
        handleMenuToggle={handleMenuToggle}
        isMenuToggled={isMenuToggled}
      />
      <div
        className={
          isMenuToggled
            ? style.checkboxesMenuMobile
            : style.checkboxesMenuMobileHidden
        }
      >
        <Checkboxes
          isMobile={props.isMobile}
          checkArray={props.checkArray}
          setCheckArray={props.setCheckArray}
          departments={props.stalls.map((stall) => {
            return stall.departments;
          })}
          criteria={props.stalls.map((stall) => {
            return stall.criteria;
          })}
          categories={props.stalls.map((stall) => {
            return stall.categories;
          })}
        />
      </div>
    </>
  );
};

export default CheckboxesMenu;

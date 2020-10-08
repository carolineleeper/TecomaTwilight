import Logo from "./Logo";
import Nav from "./Nav";
import style from "./Header.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  // const [shouldCollapse, setShouldCollapse] = useState(false);

  // useEffect(() => {
  //   window.onscroll = () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       setShouldCollapse(true);
  //     } else {
  //       setShouldCollapse(false);
  //     }
  //   };
  // }, []);

  return (
    <>
      <div className={style.headerContainer}>
        <Logo />
        <Nav />
      </div>
    </>
  );
};

export default Header;

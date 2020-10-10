import Logo from "./Logo";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import style from "./Header.module.css";
import { useMediaQuery } from "react-responsive";

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

const Header = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 750px)",
  });

  return (
    <>
      <div className={style.headerContainer}>
        <Logo />
        {isMobile ? <NavMobile routes={routes} /> : <Nav routes={routes} />}
      </div>
    </>
  );
};

export default Header;

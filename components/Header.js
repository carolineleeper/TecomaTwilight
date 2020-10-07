import Logo from "./Logo";
import Nav from "./Nav";
import style from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={style.headerNavContainer}>
        <Logo />
        <Nav />
      </div>
    </>
  );
};

export default Header;

import style from "./NavItem.module.css";

const Facebook = () => {
  return (
    <a
      className={style.navItem}
      href="https://www.facebook.com/TecomaTwilightEthicalMarket/"
      target="_blank"
    >
      <i aria-hidden className="fab fa-facebook"></i>
    </a>
  );
};

export default Facebook;

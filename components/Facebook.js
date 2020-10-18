import style from "./NavItem.module.css";

const Facebook = () => {
  return (
    <a
      className={style.navItem}
      href="https://www.facebook.com/TecomaTwilightEthicalMarket/"
      target="_blank"
    >
      <img src="/images/facebook_logo.png" />
    </a>
  );
};

export default Facebook;

import style from "./NavItem.module.css";

const Instagram = () => {
  return (
    <a
      className={style.navItem}
      href="https://www.instagram.com/tecomatwilightmarket/"
      target="_blank"
    >
      <img src="/images/instagram_logo.png" />
    </a>
  );
};

export default Instagram;

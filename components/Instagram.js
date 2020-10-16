import style from "./NavItem.module.css";

const Instagram = () => {
  return (
    <a
      className={style.navItem}
      href="https://www.instagram.com/tecomatwilightmarket/"
      target="_blank"
    >
      <i aria-hidden className="fab fa-instagram"></i>
    </a>
  );
};

export default Instagram;

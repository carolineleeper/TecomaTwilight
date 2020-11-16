import style from "./NavItem.module.css";

const Instagram = (props) => {
  return (
    <a
      className={style.navItem}
      href={props.href}
      target="_blank"
      rel="noopener"
    >
      <img src="/images/instagram_logo.png" alt="instagram logo" />
    </a>
  );
};

export default Instagram;

import style from "./NavItem.module.css";

const Instagram = (props) => {
  return (
    <a className={style.navItem} href={props.href} target="_blank">
      <img src="/images/instagram_logo.png" alt="instagram logo" />
    </a>
  );
};

export default Instagram;

import style from "./NavItem.module.css";

const Youtube = (props) => {
  return (
    <a className={style.navItem} href={props.href} target="_blank">
      <img src="/images/youtube_logo.png" alt="Youtube logo" />
    </a>
  );
};

export default Youtube;

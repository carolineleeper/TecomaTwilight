import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./NavItem.module.css";

const Instagram = () => {
  return (
    <a
      className={style.navItem}
      href="https://www.instagram.com/tecomatwilightmarket/"
      target="_blank"
    >
      <FontAwesomeIcon icon={["fab", "instagram"]} />
    </a>
  );
};

export default Instagram;

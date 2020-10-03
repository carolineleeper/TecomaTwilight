import Link from "next/link";
import style from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <Link href={props.url}>
      <a className={style.navItem}>{props.title}</a>
    </Link>
  );
};

export default NavItem;

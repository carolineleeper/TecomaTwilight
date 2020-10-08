import Link from "next/link";
import style from "./NavItem.module.css";
import { useMediaQuery } from "react-responsive";

const NavItem = (props) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 750px)",
  });

  console.log(isMobile);
  return (
    <Link href={props.url}>
      <a className={style.navItem} onClick={isMobile && props.handleMenuToggle}>
        {props.title}
      </a>
    </Link>
  );
};

export default NavItem;

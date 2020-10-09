import Link from "next/link";
import style from "./NavItem.module.css";
import { useMediaQuery } from "react-responsive";
import classnames from "classnames";
import { useRouter } from "next/router";

const NavItem = (props) => {
  const router = useRouter();

  const isMobile = useMediaQuery({
    query: "(max-width: 750px)",
  });

  return (
    <Link href={props.url}>
      <a
        className={classnames(style.navItem, {
          [style.currentNavItem]: router.pathname === props.url,
        })}
        onClick={isMobile && props.handleMenuToggle}
      >
        {props.title}
      </a>
    </Link>
  );
};

export default NavItem;

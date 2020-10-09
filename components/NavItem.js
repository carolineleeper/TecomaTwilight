import Link from "next/link";
import style from "./NavItem.module.css";
import { useMediaQuery } from "react-responsive";
import classnames from "classnames";
import { useState, useEffect } from "react";

const NavItem = (props) => {
  const [pathname, setPathname] = useState(null);

  useEffect(() => {
    setPathname(window.location.pathname);
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 750px)",
  });

  return (
    <Link href={props.url}>
      <a
        className={classnames(style.navItem, {
          [style.currentNavItem]: pathname === props.url,
        })}
        onClick={isMobile && props.handleMenuToggle}
      >
        {props.title}
      </a>
    </Link>
  );
};

export default NavItem;

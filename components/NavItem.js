import Link from "next/link";
import style from "./NavItem.module.css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const isClient = () => typeof window !== "undefined";
const getCurrentPage = () => {
  if (!isClient()) return null;

  return window.location.pathname;
};

const NavItem = (props) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 750px)",
  });

  const isCurrentPage = () => getCurrentPage() === props.url;

  return (
    <Link href={props.url}>
      <a
        className={isCurrentPage() ? style.currentNavItem : style.navItem}
        onClick={isMobile && props.handleMenuToggle}
      >
        {props.title}
      </a>
    </Link>
  );
};

export default NavItem;

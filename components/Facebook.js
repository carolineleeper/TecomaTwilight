import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import style from "./NavItem.module.css";

const Facebook = (props) => {
  return (
    <a className={style.navItem} href={props.href} target="_blank">
      <img src="/images/facebook_logo.png" alt="facebook logo" />
    </a>
  );
};

export default Facebook;

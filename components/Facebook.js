import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./NavItem.module.css";

const Facebook = () => {
  return (
    <a
      className={style.navItem}
      href="https://www.facebook.com/TecomaTwilightEthicalMarket/"
      target="_blank"
    >
      <FontAwesomeIcon icon={["fab", "facebook"]} />
    </a>
  );
};

export default Facebook;

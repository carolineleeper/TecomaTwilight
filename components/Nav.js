import NavItem from "./NavItem";
import Donate from "./Donate";
import style from "./Nav.module.css";

const Nav = (props) => {
	return (
		<nav className={style.navContainer}>
			{props.routes.map((route) => {
				return <NavItem key={route.title} title={route.title} url={route.url} />;
			})}
			{/* <div className={style.socialsContainer}>
        <Facebook
          key="facebook"
          href="https://www.facebook.com/TecomaTwilightEthicalMarket/"
        />
        <Instagram
          key="instagram"
          href="https://www.instagram.com/tecomatwilightmarket/"
        />
      </div> */}
			{/* <Donate /> */}
		</nav>
	);
};

export default Nav;

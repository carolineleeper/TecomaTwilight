import style from "./NavToggle.module.css";

const NavToggle = (props) => {
  return (
    <div onClick={props.handleMenuToggle} className={style.navToggle}>
      <i aria-hidden className="fas fa-bars"></i>
    </div>
  );
};

export default NavToggle;

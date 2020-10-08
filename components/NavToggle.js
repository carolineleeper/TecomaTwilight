import style from "./NavToggle.module.css";

const NavToggle = (props) => {
  return (
    <div onClick={props.handleMenuToggle} className={style.navToggle}>
      {props.isMenuToggled ? (
        <i aria-hidden className="fas fa-times"></i>
      ) : (
        <i aria-hidden className="fas fa-ellipsis-v"></i>
      )}
    </div>
  );
};

export default NavToggle;

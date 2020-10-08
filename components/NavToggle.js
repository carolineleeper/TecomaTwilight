import style from "./NavToggle.module.css";

const NavToggle = (props) => {
  return (
    <div onClick={props.handleMenuToggle} className={style.navToggle}>
      {props.isMenuToggled ? (
        <i class="fas fa-times"></i>
      ) : (
        <i class="fas fa-ellipsis-v"></i>
      )}
    </div>
  );
};

export default NavToggle;

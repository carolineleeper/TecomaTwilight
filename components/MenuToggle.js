import style from "./MenuToggle.module.css";

const MenuToggle = (props) => {
  return (
    <div className={style.menuToggle}>
      <button onClick={props.openModal}>Refine search</button>
    </div>
  );
  // return props.isMenuToggled ? (
  //   <div className={style.menuToggleOpen}>
  //     <button onClick={props.handleMenuToggle}>Close</button>
  //   </div>
  // ) : (
  //   <div className={style.menuToggleClosed}>
  //     <button onClick={props.handleMenuToggle}>Refine search</button>
  //   </div>
  // );
};

export default MenuToggle;

import style from "./MenuToggle.module.css";

const MenuToggle = (props) => {
  const buttontext = props.isMenuToggled ? "Close" : "Refine search";

  return (
    <div className={style.menuToggle}>
      {/* <i aria-hidden className="fas fa-bars"></i> */}
      <button onClick={props.handleMenuToggle}>{buttontext}</button>
    </div>
  );
};

export default MenuToggle;

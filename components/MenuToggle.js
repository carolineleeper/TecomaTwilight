import style from "./MenuToggle.module.css";

const MenuToggle = (props) => {
  return (
    <div className={style.menuToggle}>
      <button onClick={props.openModal}>Refine search</button>
    </div>
  );
};

export default MenuToggle;

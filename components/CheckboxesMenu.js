import Checkboxes from "./Checkboxes";
import style from "./CheckboxesMenu.module.css";

const CheckboxesMenu = (props) => {
  return (
    <div className={style.checkboxesMenu}>
      <Checkboxes
        checkArray={props.checkArray}
        setCheckArray={props.setCheckArray}
        departments={props.stalls.map((stall) => {
          return stall.departments;
        })}
        criteria={props.stalls.map((stall) => {
          return stall.criteria;
        })}
        categories={props.stalls.map((stall) => {
          return stall.categories;
        })}
      />
    </div>
  );
};

export default CheckboxesMenu;

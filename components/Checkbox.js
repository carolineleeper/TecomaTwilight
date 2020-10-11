import style from "./Checkbox.module.css";

const Checkbox = (props) => {
  return (
    <>
      <input
        className={style.checkboxInput}
        type="checkbox"
        id={props.value}
        value={props.value}
        onChange={props.handleChecks}
      />
      <label className={style.checkboxLabel} htmlFor={props.value}>
        {props.value}
      </label>
    </>
  );
};

export default Checkbox;

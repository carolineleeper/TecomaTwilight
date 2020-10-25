import style from "./Checkbox.module.css";

const Checkbox = (props) => {
  console.log(props.checkArray);
  console.log(props.value);
  console.log(props.checkArray.includes(props.value));
  return (
    <>
      <input
        className={style.checkboxInput}
        type="checkbox"
        id={props.value}
        value={props.value}
        onChange={props.handleChecks}
        checked={props.checkArray.includes(props.value.toLowerCase())}
      />
      <label className={style.checkboxLabel} htmlFor={props.value}>
        {props.value}
      </label>
    </>
  );
};

export default Checkbox;

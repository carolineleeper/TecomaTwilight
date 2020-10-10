const Checkbox = (props) => {
  return (
    <label htmlFor={props.value}>
      <input
        type="checkbox"
        id={props.value}
        value={props.value}
        onChange={props.handleChecks}
      />
      {props.value}
    </label>
  );
};

export default Checkbox;

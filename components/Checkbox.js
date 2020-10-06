const Checkbox = (props) => {
  return (
    <label htmlFor={props.category}>
      <input
        type="checkbox"
        id={props.category}
        value={props.category}
        onChange={props.handleChecks}
      />
      {props.category}
    </label>
  );
};

export default Checkbox;

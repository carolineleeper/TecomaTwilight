const Checkbox = (props) => {
  console.log(props.categories);
  console.log(props);
  return (
    <label htmlFor="vegan">
      <input
        type="checkbox"
        id="vegan"
        value="vegan"
        onChange={props.handleChecks}
      />
      Vegan
    </label>
  );
};

export default Checkbox;

import Checkbox from "./Checkbox";

const Checkboxes = (props) => {
  const handleChecks = (e) => {
    if (!props.checkArray.includes(e.target.value)) {
      const newCheckArray = [...props.checkArray, e.target.value];
      props.setCheckArray(newCheckArray);
    } else {
      const newCheckArray = props.checkArray.filter((value) => {
        return value !== e.target.value;
      });
      props.setCheckArray(newCheckArray);
    }
  };

  const mergedArray = [].concat.apply([], props.categories);
  const uniqueArray = [...new Set(mergedArray)];

  return (
    <div>
      {uniqueArray.map((category) => {
        return (
          <Checkbox
            key={category}
            category={category}
            checkArray={props.checkArray}
            handleChecks={handleChecks}
          />
        );
      })}
    </div>
  );
};

export default Checkboxes;

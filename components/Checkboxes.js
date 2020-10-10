import Checkbox from "./Checkbox";

const Checkboxes = (props) => {
  const handleChecks = (e) => {
    if (!props.checkArray.includes(e.target.value.toLowerCase())) {
      const newCheckArray = [...props.checkArray, e.target.value];

      const lowerCheckArray = newCheckArray.map((check) => check.toLowerCase());

      props.setCheckArray(lowerCheckArray);
    } else {
      const newCheckArray = props.checkArray.filter((value) => {
        return value !== e.target.value.toLowerCase();
      });

      const lowerCheckArray = newCheckArray.map((check) => check.toLowerCase());

      props.setCheckArray(lowerCheckArray);
    }
  };

  const mergedDepartmentArray = [].concat.apply([], props.departments);
  const uniqueDepartmentArray = [...new Set(mergedDepartmentArray)];

  const mergedCriteriaArray = [].concat.apply([], props.criteria);
  const uniqueCriteriaArray = [...new Set(mergedCriteriaArray)];

  const mergedCategoryArray = [].concat.apply([], props.categories);
  const uniqueCategoryArray = [...new Set(mergedCategoryArray)];

  return (
    <>
      <div>
        {uniqueDepartmentArray.map((department) => {
          return (
            <Checkbox
              key={department}
              value={department}
              checkArray={props.checkArray}
              handleChecks={handleChecks}
            />
          );
        })}
      </div>
      <div>
        {uniqueCriteriaArray.map((criteria) => {
          return (
            <Checkbox
              key={criteria}
              value={criteria}
              checkArray={props.checkArray}
              handleChecks={handleChecks}
            />
          );
        })}
      </div>
      <div>
        {uniqueCategoryArray.map((category) => {
          return (
            <Checkbox
              key={category}
              value={category}
              checkArray={props.checkArray}
              handleChecks={handleChecks}
            />
          );
        })}
      </div>
    </>
  );
};

export default Checkboxes;

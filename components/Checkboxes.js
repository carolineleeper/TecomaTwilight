import Checkbox from "./Checkbox";
import style from "./Checkboxes.module.css";

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
      <div
        className={
          props.isMobile
            ? style.checkboxesContainerMobile
            : style.checkboxesContainer
        }
      >
        <p className={style.header}>Search by Department</p>
        {uniqueDepartmentArray.sort().map((department) => {
          return (
            <Checkbox
              isMobile={props.isMobile}
              key={department}
              value={department}
              checkArray={props.checkArray}
              handleChecks={handleChecks}
            />
          );
        })}
      </div>
      <div
        className={
          props.isMobile
            ? style.checkboxesContainerMobile
            : style.checkboxesContainer
        }
      >
        <p className={style.header}>Search by Ethical Category</p>
        {uniqueCriteriaArray.sort().map((criteria) => {
          return (
            <Checkbox
              isMobile={props.isMobile}
              key={criteria}
              value={criteria}
              checkArray={props.checkArray}
              handleChecks={handleChecks}
            />
          );
        })}
      </div>
      <div
        className={
          props.isMobile
            ? style.checkboxesContainerMobile
            : style.checkboxesContainer
        }
      >
        {uniqueCategoryArray.sort().map((category) => {
          return (
            <Checkbox
              isMobile={props.isMobile}
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

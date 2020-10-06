import NavItem from "./NavItem";
import Checkbox from "./Checkbox";
import { useState } from "react";

const Checkboxes = (props) => {
  const [checkArray, setCheckArray] = useState([]);

  const handleChecks = (e) => {
    if (!checkArray.includes(e.target.value)) {
      const newCheckArray = [...checkArray, e.target.value];
      setCheckArray(newCheckArray);
    } else {
      const newCheckArray = checkArray.filter((value) => {
        return value !== e.target.value;
      });
      setCheckArray(newCheckArray);
    }
  };

  console.log(checkArray);

  const mergedArray = [].concat.apply([], props.categories);
  const uniqueArray = [...new Set(mergedArray)];

  return (
    <div>
      {uniqueArray.map((category) => {
        return (
          <Checkbox
            key={category}
            category={category}
            checkArray={checkArray}
            handleChecks={handleChecks}
          />
        );
      })}
    </div>
  );
};

export default Checkboxes;

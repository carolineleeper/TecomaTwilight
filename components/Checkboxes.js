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

  return (
    <Checkbox
      categories={props.categories}
      checkArray={checkArray}
      handleChecks={handleChecks}
    />
  );
};

export default Checkboxes;

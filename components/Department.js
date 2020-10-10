import style from "./Department.module.css";

const Department = ({ department }) => (
  <div className={style.department}>{department}</div>
);

export default Department;

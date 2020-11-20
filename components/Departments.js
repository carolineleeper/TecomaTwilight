import Department from "./Department";
import style from "./Departments.module.css";

const Departments = (props) => {
  return (
    <div className={style.departmentsContainer}>
      {props.departments &&
        props.departments.map((department) => {
          return <Department key={department} department={department} />;
        })}
    </div>
  );
};

export default Departments;

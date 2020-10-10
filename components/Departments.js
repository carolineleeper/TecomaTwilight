import Department from "./Department";

const Departments = (props) => {
  return (
    <div>
      {props.departments.map((department) => {
        return <Department key={department} department={department} />;
      })}
    </div>
  );
};

export default Departments;

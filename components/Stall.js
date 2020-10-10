import Departments from "./Departments";
import Criteria from "./Criteria";
import Categories from "./Categories";
import style from "./Stall.module.css";

const Stall = (props) => {
  return (
    <div className={style.stallThumb}>
      <p>{props.stall.storeName}</p>
      <img src={props.stall.logo} />
      <Departments departments={props.stall.departments} />
      <Criteria criteria={props.stall.criteria} />
      <Categories categories={props.stall.categories} />
    </div>
  );
};

export default Stall;

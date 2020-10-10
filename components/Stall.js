import Departments from "./Departments";
import Criteria from "./Criteria";
import Categories from "./Categories";
import style from "./Stall.module.css";

const Stall = (props) => {
  return (
    <div className={style.stallThumb}>
      <div className={style.storeName}>{props.stall.storeName}</div>
      <img src={props.stall.logo} />
      <Criteria criteria={props.stall.criteria} />
      <Departments departments={props.stall.departments} />
      <Categories categories={props.stall.categories} />
    </div>
  );
};

export default Stall;

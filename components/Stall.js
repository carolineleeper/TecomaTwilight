import Departments from "./Departments";
import Criteria from "./Criteria";
import Categories from "./Categories";
import style from "./Stall.module.css";

const Stall = (props) => {
  console.log(props.stall);
  return (
    <div className={style.stallThumb}>
      <div className={style.storeName}>{props.stall.storeName}</div>
      <div className={style.stallImageContainer}>
        <img src={props.stall.logo} />
      </div>
      <div className={style.keywordContainer}>
        <Criteria criteria={props.stall.criteria} />
        <Departments departments={props.stall.departments} />
        <Categories categories={props.stall.categories} />
      </div>
    </div>
  );
};

export default Stall;

import Departments from "./Departments";
import Criteria from "./Criteria";
import Categories from "./Categories";
import style from "./Stall.module.css";

const Stall = ({ stall }) => {
  return (
    <div className={style.stallThumb}>
      <div className={style.storeName}>{stall.storeName}</div>
      <div className={style.stallImageContainer}>
        <img src={stall.logo} />
      </div>
      <div className={style.keywordContainer}>
        <Criteria criteria={stall.criteria} />
        <Departments departments={stall.departments} />
        <Categories categories={stall.categories} />
      </div>
    </div>
  );
};

export default Stall;

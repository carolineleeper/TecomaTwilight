import Departments from "./Departments";
import Criteria from "./Criteria";
import Categories from "./Categories";
import style from "./StallCard.module.css";

const StallCard = ({ stall }) => {
  return (
    <div className={style.stallThumb}>
      <div className={style.name}>{stall.name}</div>
      <div className={style.stallImageContainer}>
        <img src={stall.logo} alt={`${stall.name}`} />
      </div>
      <div className={style.keywordContainer}>
        <Criteria criteria={stall.criteria} />
        <Departments departments={stall.departments} />
        <Categories categories={stall.categories} />
      </div>
    </div>
  );
};

export default StallCard;

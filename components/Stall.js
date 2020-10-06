import Categories from "./Categories";
import Criteria from "./Criteria";
import style from "./Stall.module.css";

const Stall = (props) => {
  return (
    <div className={style.stallThumb}>
      <p>{props.stall.storeName}</p>
      <img src={props.stall.logo} />
      <Criteria criteria={props.stall.criteria} />
      <Categories categories={props.stall.categories} />
    </div>
  );
};

export default Stall;

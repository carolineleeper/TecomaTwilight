import Categories from "./Categories";
import Criteria from "./Criteria";

const Stall = (props) => {
  return (
    <div>
      <p>{props.stall.storeName}</p>
      <img src={props.stall.logo} />
      <Criteria criteria={props.stall.criteria} />
      <Categories categories={props.stall.categories} />
    </div>
  );
};

export default Stall;

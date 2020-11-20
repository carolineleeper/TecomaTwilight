import Criterion from "./Criterion";
import style from "./Criteria.module.css";

const Criteria = (props) => {
  return (
    <div className={style.criteriaContianer}>
      {props.criteria &&
        props.criteria.map((criterion) => {
          return <Criterion key={criterion} criterion={criterion} />;
        })}
    </div>
  );
};

export default Criteria;

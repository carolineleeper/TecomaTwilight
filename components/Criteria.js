import Criterion from "./Criterion";

const Criteria = (props) => {
  return (
    <div>
      {props.criteria.map((criterion) => {
        return <Criterion key={criterion} criterion={criterion} />;
      })}
    </div>
  );
};

export default Criteria;

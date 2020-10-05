const Criteria = (props) => {
  return (
    <div>
      {props.criteria.map((criterion) => {
        return <p key={criterion}>{criterion}</p>;
      })}
    </div>
  );
};

export default Criteria;

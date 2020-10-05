import Category from "./Category";

const Categories = (props) => {
  return (
    <div>
      {props.categories.map((category) => {
        return <Category key={category} category={category} />;
      })}
    </div>
  );
};

export default Categories;

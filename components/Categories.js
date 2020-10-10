import Category from "./Category";
import style from "./Categories.module.css";

const Categories = (props) => {
  return (
    <div className={style.categoriesContainer}>
      {props.categories.map((category) => {
        return <Category key={category} category={category} />;
      })}
    </div>
  );
};

export default Categories;

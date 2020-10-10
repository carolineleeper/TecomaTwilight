import style from "./Category.module.css";

const Category = ({ category }) => (
  <div className={style.category}>{category}</div>
);

export default Category;

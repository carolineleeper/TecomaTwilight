import Categories from "./Categories";
import Departments from "./Departments";
import Criteria from "./Criteria";
import style from "./FeaturedStall.module.css";

const FeaturedStall = (props) => {
  return (
    <div className={style.featuredStallContainer}>
      <div className={style.imageContainer}>
        <img src={props.stall.products[1].product_image} />
      </div>
      <div className={style.stallInfoContainer}>
        <h1>{props.stall.storeName}</h1>
        <div className={style.keywordsContainer}>
          <Criteria criteria={props.stall.criteria} />
          <Departments departments={props.stall.departments} />
          <Categories categories={props.stall.categories} />
        </div>
        <div
          className={style.descriptionContainer}
          dangerouslySetInnerHTML={{ __html: props.stall.description }}
        />
      </div>
    </div>
  );
};

export default FeaturedStall;
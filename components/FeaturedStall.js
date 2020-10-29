import Categories from "./Categories";
import Departments from "./Departments";
import Criteria from "./Criteria";
import ViewStallButton from "./ViewStallButton";
import style from "./FeaturedStall.module.css";

const FeaturedStall = (props) => {
  return (
    <div className={style.featuredStallContainer}>
      <div className={style.imageContainer}>
        {props.stall.products ? (
          <img
            src={props.stall.products[0].product_image}
            alt={`${props.stall.name} logo`}
          />
        ) : (
          <img src={props.stall.logo} alt={`${stall.name} logo`} />
        )}
        <ViewStallButton filename={props.stall.filename} />
      </div>

      <div className={style.stallInfoContainer}>
        <div className={style.textContainer}>
          <h1>{props.stall.name}</h1>
          <div className={style.descriptionContainer}>
            {props.stall.ethicalDescription}
          </div>
        </div>
        <div className={style.keywordsContainer}>
          <Criteria criteria={props.stall.criteria} />
          <Departments departments={props.stall.departments} />
          {props.stall.categories && (
            <Categories categories={props.stall.categories} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedStall;

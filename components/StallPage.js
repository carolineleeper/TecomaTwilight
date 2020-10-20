import ShopLink from "./ShopLink";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Departments from "./Departments";
import Criteria from "./Criteria";
import Categories from "./Categories";
import Products from "./Products";
import style from "./StallPage.module.css";

const StallPage = (props) => {
  console.log(props);
  return (
    <>
      <div className={style.stallInfo}>
        <div className={style.nameContainer}>
          <h2>{props.stall.name}</h2>
          <ShopLink url={props.stall.url} />
        </div>
        <Criteria criteria={props.stall.criteria} />
        <Departments departments={props.stall.departments} />
        {props.stall.categories && (
          <Categories categories={props.stall.categories} />
        )}
        <div className={style.socials}>
          <Facebook href={props.stall.facebook} />
          <Instagram href={props.stall.instagram} />
        </div>
        <p>{props.stall.description}</p>
        <h3>Ethical Standpoint</h3>
        <p>{props.stall.ethicalDescription}</p>
      </div>
      {props.stall.products && <Products products={props.stall.products} />}
    </>
  );
};

export default StallPage;

import ShopLink from "./ShopLink";
import ShopPhone from "./ShopPhone";
import ShopEmail from "./ShopEmail";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Departments from "./Departments";
import Criteria from "./Criteria";
import Categories from "./Categories";
import Products from "./Products";
import BackButton from "./BackButton";
import style from "./StallPage.module.css";

const StallPage = (props) => {
  return (
    <>
      <BackButton />
      {/* <div className={style.imageContainer}>
        <img src={props.stall.logo} alt={`${props.stall.name}`} />
      </div> */}

      <h2 className="title">{props.stall.name}</h2>
      <div className={style.stallInfo}>
        <div className={style.nameContainer}>
          {props.stall.url && <ShopLink url={props.stall.url} />}
          {props.stall.phone && <ShopPhone phone={props.stall.phone} />}
          {props.stall.email && <ShopEmail email={props.stall.email} />}
        </div>
        <div className={style.keywords}>
          <Criteria criteria={props.stall.criteria} />
          <Departments departments={props.stall.departments} />
          {props.stall.categories && (
            <Categories categories={props.stall.categories} />
          )}
        </div>
        <div className={style.socials}>
          {props.stall.facebook && <Facebook href={props.stall.facebook} />}
          {props.stall.instagram && <Instagram href={props.stall.instagram} />}
        </div>
        <p>{props.stall.description}</p>
        <h3>Ethical Standpoint</h3>
        <p>{props.stall.ethicalDescription}</p>
      </div>
      {props.stall.products && <Products products={props.stall.products} />}
      {props.stall.url && <ShopLink url={props.stall.url} />}
      {props.stall.phone && <ShopPhone phone={props.stall.phone} />}
      {props.stall.email && <ShopEmail email={props.stall.email} />}
    </>
  );
};

export default StallPage;

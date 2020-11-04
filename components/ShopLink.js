import style from "./ShopLink.module.css";

const ShopLink = (props) => {
  return (
    <div className={style.shopButtonContainer}>
      <a className={style.shopButton} href={props.url}>
        VISIT WEBSITE
      </a>
    </div>
  );
};

export default ShopLink;

import style from "./ShopLink.module.css";

const ShopLink = (props) => {
  return (
    <div className={style.shopButtonContainer}>
      <a className={style.shopButton} href={props.url} target="_blank">
        VISIT WEBSITE
      </a>
    </div>
  );
};

export default ShopLink;
